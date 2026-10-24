import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
        404
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Page not found
      </h1>
      <p className="max-w-md text-sm leading-7 text-foreground/50">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        className="mt-2 flex min-h-11 items-center rounded-xl bg-[var(--accent)] px-6 text-xs font-semibold tracking-wide uppercase text-[#0a0d12] transition-all duration-200 hover:brightness-110"
        href="/"
      >
        Return home
      </Link>
    </main>
  );
}
