import Link from "next/link";
import Image from "next/image";
import { formatKes, type Stay } from "@/lib/stays";

export default function StayCard({ stay }: { stay: Stay }) {
  return (
    <Link className="stay-card" href={`/stays/${stay.slug}`}>
      <Image
        src={stay.image}
        alt={stay.name}
        width={1200}
        height={800}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="card-body">
        <div className="meta-row">
          <span className="badge">{stay.kind}</span>
          <span className="rating">★ {stay.rating.toFixed(1)}</span>
        </div>
        <h3>{stay.name}</h3>
        <p>
          {stay.bedrooms} bedrooms · {stay.guests} guests · {stay.neighborhood}
        </p>
        <div className="price-row">
          <strong>{formatKes(stay.price)}</strong>
          <span>/ night</span>
        </div>
      </div>
    </Link>
  );
}
