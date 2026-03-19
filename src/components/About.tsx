export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#e8e8e8] border-t border-black/[0.06] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            The Founder
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Jonathan
            <br />
            <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent italic">
              Oronzio
            </span>
          </h2>
          <p className="mt-3 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Founder &amp; Principal
          </p>

          <p className="mt-8 text-base text-gray-600 leading-relaxed">
            Jonathan Oronzio founded JSO Industries with a clear conviction:
            the best way to build is to think like an owner. With a decade of
            hands-on construction experience across New York, Connecticut, and
            New Jersey, spanning commercial, residential, and civil work, he
            brings a rare combination of field-level expertise and business
            acumen to every project.
          </p>
          <p className="mt-5 text-base text-gray-600 leading-relaxed">
            A graduate of Fairfield University with a Bachelor&apos;s degree in
            Business, Jonathan has spent the past decade building toward a
            singular goal: developing real estate that creates lasting value.
            JSO Industries is the vehicle for that vision. A development firm
            that controls the full construction process, eliminating the
            middleman and maintaining complete oversight from acquisition
            through delivery.
          </p>
          <p className="mt-5 text-base text-gray-600 leading-relaxed">
            When he takes on a client project, he approaches it the same way
            he would his own: with an ownership mindset, an eye on long-term
            value, and zero tolerance for shortcuts.
          </p>
        </div>
      </div>
    </section>
  );
}
