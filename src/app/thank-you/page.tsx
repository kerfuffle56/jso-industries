export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="relative text-center px-6 max-w-lg">
        <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Thank You
        </h1>
        <p className="mt-4 text-lg text-white/50 leading-relaxed">
          We&apos;ve received your message and will be in touch shortly.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center mt-10 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-accent/25"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
