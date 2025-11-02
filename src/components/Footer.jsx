export default function Footer(){
  return (
    <footer className="border-t border-[var(--border)] mt-6 bg-black/40">
      <div className="container flex items-center justify-between py-5">
        <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> July Franz Claridad. All rights reserved.</p>
        <div className="flex gap-4 text-[var(--muted)]">
          <a href="https://github.com/seven-711" aria-label="GitHub" className="flex items-center gap-2 hover:text-[var(--text)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5 0-1.1.38-1.99 1.03-2.69-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.8 1.03a9.4 9.4 0 0 1 2.55-.35c.86 0 1.73.12 2.54.35 1.96-1.31 2.8-1.03 2.8-1.03.55 1.43.2 2.49.1 2.75.64.7 1.03 1.59 1.03 2.69 0 3.88-2.34 4.74-4.57 5 .36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
            GitHub
          </a>
          <a href="https://www.facebook.com/profile.php?id=61581118792267" aria-label="Facebook" className="flex items-center gap-2 hover:text-[var(--text)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.9h2.54V9.86c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.9h-2.34V22C18.34 21.2 22 17.08 22 12.06Z"/></svg>
            Facebook
          </a>
          <a href="https://www.instagram.com/codex_machi1.0?igsh=bGJsMDdmdGljemR5" aria-label="Instagram" className="flex items-center gap-2 hover:text-[var(--text)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-2.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 7Z"/></svg>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
