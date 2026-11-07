import { useEffect } from "react";
import { Link } from "react-router-dom";
import { btnPrimary, stampBox } from "../ui/classes";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Sahir Ul Islam";
  }, []);
  return (
    <main className="grid min-h-screen place-items-center overflow-hidden px-5">
      <div className="relative">
        <p className="font-display text-[clamp(9rem,38vw,26rem)] font-black leading-[.8] text-transparent [-webkit-text-stroke:3px_rgb(var(--accent))]">
          404
        </p>
        <h1
          className={`absolute left-[8%] top-[42%] -rotate-6 bg-bg text-3xl sm:text-5xl ${stampBox}`}
        >
          This page doesn’t exist.
        </h1>
        <p className="mt-10 max-w-md text-lg text-muted">
          The link may be broken or the page may have moved. Head back to the
          portfolio.
        </p>
        <Link to="/" className={`${btnPrimary} mt-8`}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
