import Link from "next/link";

export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="NarokNest home">
          <span className="brand-mark">N</span>
          <span>NarokNest</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/stays">Stays</Link>
          <Link href="/#experiences">Experiences</Link>
          <Link href="/host">Host</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/#reviews">Reviews</Link>
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-light" href="/signup">Create account</Link>
          <Link className="btn btn-primary" href="/login">Sign in</Link>
        </div>
      </div>
    </header>
  );
}
