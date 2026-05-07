import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Globe, FileText, ShieldCheck, TrendingUp, Bell, Sparkles, Check } from "lucide-react";
import logo from "@/assets/logo.png";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Taxora — Get paid globally. Stay compliant locally." },
      { name: "description", content: "AI-powered financial compliance for Southeast Asian freelancers. Manage international payments, invoices, taxes and compliance in one premium dashboard." },
      { property: "og:title", content: "Taxora — Pay Smart. Stay Compliant." },
      { property: "og:description", content: "AI-powered payments & tax automation for freelance creators in Southeast Asia." },
    ],
  }),
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Taxora" className="h-9 w-auto brightness-0 invert" />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground transition hidden sm:block">Sign in</button>
          <button className="bg-gradient-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full shadow-glow hover:opacity-90 transition">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary-glow" />
            AI-powered tax automation for SEA creators
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Get paid <span className="text-gradient">globally.</span><br />
            Stay compliant <span className="text-gradient">locally.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Taxora helps freelance creators in Southeast Asia manage international payments,
            generate invoices, and automate taxes — all from one beautifully simple dashboard.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="bg-gradient-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium shadow-glow hover:opacity-90 transition flex items-center gap-2">
              Start free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="glass px-6 py-3.5 rounded-full font-medium hover:bg-white/10 transition">
              See live demo
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary-glow"/> No card required</div>
            <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary-glow"/> 30+ currencies</div>
            <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary-glow"/> Trusted by 12k+</div>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -inset-8 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative glass rounded-3xl p-3 shadow-elegant">
            <img src={dashboardPreview} alt="Taxora dashboard preview" className="rounded-2xl w-full" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elegant hidden sm:block">
            <div className="text-xs text-muted-foreground">Q4 Earnings</div>
            <div className="text-2xl font-bold text-gradient">$48,290</div>
          </div>
          <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elegant hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Tax filing</div>
              <div className="text-sm font-semibold">Up to date</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Globe, title: "International payments", desc: "Receive in USD, EUR, SGD and 30+ currencies with auto FX conversion." },
  { icon: FileText, title: "Smart invoicing", desc: "Generate compliant invoices in seconds with AI-suggested line items." },
  { icon: TrendingUp, title: "Earnings analytics", desc: "Track income across clients, currencies, and platforms in real time." },
  { icon: ShieldCheck, title: "Local tax compliance", desc: "Country-specific rules for ID, PH, MY, VN, TH, and SG built in." },
  { icon: Bell, title: "Compliance reminders", desc: "Never miss a filing deadline with smart, AI-prioritized alerts." },
  { icon: Sparkles, title: "AI tax assistant", desc: "Ask anything about your taxes. Get instant, jurisdiction-aware answers." },
];

function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-2xl mb-14">
        <div className="text-sm text-primary-glow font-medium mb-3">Everything in one place</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          The <span className="text-gradient">financial OS</span> for modern freelancers.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div key={f.title} className="glass rounded-2xl p-7 hover:translate-y-[-4px] transition">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
              <f.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Connect your accounts", d: "Link payment processors, banks, and freelance platforms in minutes." },
    { n: "02", t: "Let AI organize it", d: "Taxora categorizes income, expenses, and tax obligations automatically." },
    { n: "03", t: "Stay always compliant", d: "Get reminders, file with confidence, and grow your global business." },
  ];
  return (
    <section id="how" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">From chaos to <span className="text-gradient">clarity</span> in 3 steps.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="glass rounded-2xl p-8 relative">
            <div className="text-6xl font-bold text-gradient opacity-80 mb-4 font-display">{s.n}</div>
            <h3 className="text-xl font-semibold mb-2">{s.t}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="pricing" className="max-w-5xl mx-auto px-6 py-24">
      <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-elegant">
        <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to get paid <span className="text-gradient">smarter</span>?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of SEA creators who run their business on Taxora. Free to start.
          </p>
          <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-glow hover:opacity-90 transition inline-flex items-center gap-2">
            Get started free <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Taxora" className="h-7 w-auto brightness-0 invert" />
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Taxora. Pay smart. Stay compliant.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
