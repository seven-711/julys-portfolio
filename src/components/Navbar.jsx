"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar(){
  const [open,setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/40 backdrop-blur">
      <nav className="container flex items-center justify-between min-h-16">
        <Link href="/" className="font-extrabold tracking-wide">July Franz Claridad</Link>
        <button aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-[var(--text)] mb-1" />
          <div className="w-6 h-0.5 bg-[var(--text)] mb-1" />
          <div className="w-6 h-0.5 bg-[var(--text)]" />
        </button>
        <ul className={`md:flex items-center gap-3 list-none p-0 m-0 ${open?"absolute right-[4%] top-16 flex flex-col bg-black/90 border border-[var(--border)] rounded-xl p-2 min-w-52":"hidden"} md:static md:bg-transparent md:border-0 md:rounded-none`}>
          <li><Link className="px-2 py-2 rounded-lg hover:bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--text)]" href="/">Home</Link></li>
          <li><Link className="px-2 py-2 rounded-lg hover:bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--text)]" href="/about">About</Link></li>
          <li><Link className="px-2 py-2 rounded-lg hover:bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--text)]" href="/projects">Projects</Link></li>
          <li><Link className="px-2 py-2 rounded-lg hover:bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--text)]" href="/blog">Blog</Link></li>
          <li><Link className="btn" href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
