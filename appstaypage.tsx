import type { Metadata } from "next";
import Link from "next/link";
import StayCard from "@/components/StayCard";
import StaySearchForm from "@/components/StaySearchForm";
import { listStays } from "@/lib/db";

export const metadata: Metadata = { title: "Browse stays | NarokNest" };
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SearchParams = Promise<{
  guests?: string;
  location?: string;
  checkin?: string;
  checkout?: string;
}>;

export default async function StaysPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const guestCount = Number(params.guests || 0);
  const location = params.location?.trim() || "";
  const normalizedLocation = location.toLocaleLowerCase();
  const stays = listStays();
  const filteredStays = stays.filter((stay) => {
    const matchesGuests = !guestCount || stay.guests >= guestCount;
    const matchesLocation =
      !normalizedLocation ||
      normalizedLocation.includes("narok") ||
      normalizedLocation.includes("kenya") ||
      `${stay.name} ${stay.kind} ${stay.neighborhood}`
        .toLocaleLowerCase()
        .includes(normalizedLocation);
    return matchesGuests && matchesLocation;
  });

  return (
    <main className="container results-page">
      <span className="eyebrow">{params.location || "Narok Town, Kenya"}</span>
      <div className="section-head">
        <div>
          <h1>Places to stay</h1>
          <p className="results-caption">{filteredStays.length} stays for your Narok trip</p>
        </div>
      </div>
      <StaySearchForm
        location={params.location || "Narok Town"}
        checkin={params.checkin}
        checkout={params.checkout}
        guests={params.guests}
      />
      {filteredStays.length ? (
        <div className="card-grid">
          {filteredStays.map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No stays match that guest count yet</h2>
          <p>Try fewer guests or browse all available stays.</p>
          <Link className="btn btn-primary" href="/stays">
            Show all stays
          </Link>
        </div>
      )}
    </main>
  );
}
