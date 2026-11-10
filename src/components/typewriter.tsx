"use client";

import { useEffect, useState } from "react";

/**
 * Écrit puis efface chaque texte, en boucle (effet « machine à écrire »).
 * Le premier texte est rendu côté serveur : lisible sans JavaScript et par les moteurs de recherche.
 * Animation désactivée si l'utilisateur a demandé à réduire les animations.
 */
export function Typewriter({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span>
      {/* Lecteurs d'écran : la liste complète, sans l'animation. */}
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="text-accent-light">
        {text}
        <span className="caret" />
      </span>
    </span>
  );
}
