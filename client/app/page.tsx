import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Models from "@/components/landing/Models";
import ProductPreview from "@/components/landing/ProductPreview";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950 dark:bg-[#08090d] dark:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Models />
      <ProductPreview />
      <Pricing />
      <FAQ />

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-8 text-white sm:p-14 lg:p-20">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold">
                Start creating
              </span>

              <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                One workspace.
                <br />
                Every AI model.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Bring your favorite AI models, conversations and productivity
                tools into one beautifully designed workspace.
              </p>

              <a
                href="/chat"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-violet-700 transition hover:-translate-y-0.5"
              >
                Open EchoGPT
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}