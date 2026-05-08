import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | JSO Industries",
  description: "Message received. We will be in touch within one business day.",
};

export default function ThankYouPage() {
  return (
    <main className="pt-16 min-h-screen flex items-center bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bf2a2a] mb-8">Message Received</p>
        <h1 className="text-[clamp(56px,8vw,100px)] font-light text-white leading-[0.88] tracking-tight mb-8">Thank you.</h1>
        <p className="text-[17px] text-[#666] font-light leading-relaxed max-w-md mb-12">
          We have received your message and will be in touch within one business day.
        </p>
        <Link href="/" className="inline-block text-[12px] tracking-[0.12em] uppercase text-white border-b border-[#bf2a2a] pb-0.5 hover:text-[#bf2a2a] transition-colors">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
