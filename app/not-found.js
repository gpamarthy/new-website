export default function NotFound() {
  return (
    <div className="section flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="pill text-emerald-300">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Mission not found.</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        The page you requested does not exist. Return to the command deck.
      </p>
      <a
        href="/#home"
        className="mt-6 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950"
      >
        Back to Home
      </a>
    </div>
  );
}
