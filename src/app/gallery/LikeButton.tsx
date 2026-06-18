"use client";

import { useEffect, useState } from "react";

// Dead-simple favourite toggle, no backend: the on/off state lives in the
// browser's localStorage keyed by design slug. Persists across reloads, scoped
// to this browser (use a DB only if likes must be shared across devices/people).
export default function LikeButton({ slug }: { slug: string }) {
  const [liked, setLiked] = useState(false);

  // Read after mount to avoid SSR/client hydration mismatch.
  useEffect(() => {
    try {
      setLiked(localStorage.getItem(`yalike:${slug}`) === "1");
    } catch {
      /* localStorage unavailable */
    }
  }, [slug]);

  const toggle = () => {
    setLiked((prev) => {
      const next = !prev;
      try {
        if (next) localStorage.setItem(`yalike:${slug}`, "1");
        else localStorage.removeItem(`yalike:${slug}`);
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={liked}
      aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
      title={liked ? "Aimé" : "Aimer"}
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[15px] leading-none transition ${
        liked ? "text-rose-500" : "text-gray-300 hover:text-rose-400"
      }`}
    >
      {liked ? "♥" : "♡"}
    </button>
  );
}
