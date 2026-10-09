import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-xs tracking-widest uppercase text-foreground/60">404</p>
      <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">Page not found</h1>
      <p className="max-w-md leading-7 text-foreground/70">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link className="border-b border-foreground pb-2 text-xs tracking-wide uppercase" href="/">
        Return home
      </Link>
    </main>
  );
}
