// Reveal-on-scroll: stagger by source order, once only.
(() => {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
        el.classList.add("is-visible");
        io.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  items.forEach((el) => io.observe(el));
})();

// Current year in the footer.
(() => {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();

// Subtle parallax on the hero terminal.
(() => {
  const terminal = document.querySelector(".terminal");
  if (!terminal) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(max-width: 960px)").matches) return;

  let raf = 0;
  let tx = 0;
  let ty = 0;

  const onMove = (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    tx = (e.clientX / w - 0.5) * 6;
    ty = (e.clientY / h - 0.5) * 6;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      terminal.style.transform = `rotate3d(1, -0.6, 0.05, 6deg) translate3d(${tx}px, ${ty}px, 0)`;
      raf = 0;
    });
  };

  window.addEventListener("mousemove", onMove, { passive: true });
})();
