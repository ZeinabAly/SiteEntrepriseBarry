
"use client";

import { useEffect } from "react";

/** Révèle les éléments lorsqu'ils entrent dans l'écran,
 * y compris ceux ajoutés lors des navigations Next.js.
 */
export function RevealObserver() {
  useEffect(() => {
    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((el) => el.setAttribute("data-revealed", ""));
    };

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const el = entry.target as HTMLElement;
          el.setAttribute("data-revealed", "");
          io.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    // Observe un élément et tous ses descendants concernés.
    const observeElements = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.matches("[data-reveal]:not([data-revealed])")) {
        io.observe(root);
      }

      root
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((el) => io.observe(el));
    };

    // Éléments présents au premier chargement.
    observeElements(document);

    // Détecte les nouveaux éléments ajoutés pendant la navigation.
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeElements(node);
          }
        });
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
