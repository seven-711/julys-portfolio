'use client';

export default function Blog() {
  return (
    <div className="container mt-24 mb-16 space-y-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-[var(--muted)]">This is a draft Blog index.</p>
      <div className="space-y-2">
        <article className="flex gap-2">
          <a className="text-[var(--brand)]" href="#">How I built this portfolio</a>
          <span className="text-[var(--muted)]">— Draft</span>
        </article>
        <article className="flex gap-2">
          <a className="text-[var(--brand)]" href="#">My favorite tools</a>
          <span className="text-[var(--muted)]">— Draft</span>
        </article>
      </div>
    </div>
  );
}