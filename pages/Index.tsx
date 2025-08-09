import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// Note: Replace this with actual hero image URL or import
const heroImg = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'; // Roofing image from Unsplash
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EmailCaptureForm } from '@/components/landing/EmailCaptureForm';
import { StickyBanner } from '@/components/landing/StickyBanner';
import { ExitIntentModal } from '@/components/landing/ExitIntentModal';
import { QuotePreview } from '@/components/QuotePreview';
import { Shield, Mail, CheckCircle, Gauge, Zap, LineChart, Layers, DollarSign, MessageCircle, Cog, ArrowRight } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { cn } from '@/lib/utils';

type NavbarProps = { active?: string; scrolled?: boolean };
const links = [
  { id: 'how', label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
] as const;

const Navbar = ({ active, scrolled }: NavbarProps) => (
  <header className={cn('sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow', scrolled && 'shadow-sm')}
    role="banner"
  >
    <nav className="container mx-auto flex h-16 items-center justify-between" aria-label="Primary">
      <a href="#" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight" aria-label="SmartQuote.ai home">
        {/* <span className="inline-block h-6 w-6 rounded-md bg-accent" aria-hidden /> */}
        SmartQuote.ai
      </a>
      <div className="hidden items-center gap-4 md:flex">
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn('text-sm text-muted-foreground story-link hover:text-foreground', active === id && 'text-foreground font-medium')}
            aria-current={active === id ? 'page' : undefined}
          >
            {label}
          </a>
        ))}
        <ThemeSwitcher />
        <Button asChild variant="cta" size="lg">
          <a href="#pricing" aria-label="Get early access">Get Early Access</a>
        </Button>
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <ThemeSwitcher />
        <Button asChild variant="cta" size="sm">
          <a href="#pricing" aria-label="Get early access">Get Early Access</a>
        </Button>
      </div>
    </nav>
  </header>
);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    const x = e.clientX - (rect?.left ?? 0);
    const y = e.clientY - (rect?.top ?? 0);
    if (glowRef.current) {
      glowRef.current.style.setProperty('--x', `${x}px`);
      glowRef.current.style.setProperty('--y', `${y}px`);
    }
  };

  return (
      <section className="relative overflow-hidden" onMouseMove={onMove} ref={sectionRef}>
          <div className="absolute inset-0 -z-20" aria-hidden>
              <Image
                  src={heroImg}
                  alt="Aerial view of residential roofs"
                  fill
                  className="object-cover opacity-20"
                  priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
              <div className="absolute inset-0 bg-grid opacity-40 mix-blend-overlay" />
          </div>
          <div ref={glowRef} className="pointer-glow" aria-hidden />

          <div className="container relative z-10 mx-auto grid gap-10 py-16 animate-entry md:grid-cols-2 md:py-24 px-4 md:px-6">
              <div className="flex flex-col justify-center">
                  <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                      Turn Roofing Visitors into Ready-to-Buy Leads—With Instant Quotes.
                  </h1>
                  <p className="mt-4 max-w-prose text-lg text-muted-foreground">
                      Show homeowners an instant price range. Capture their email. Deliver a
                      pre-qualified lead to your inbox or CRM in seconds.
                  </p>
                  <div className="mt-6">
                      <EmailCaptureForm
                          eventId="hero_submit"
                          ctaLabel="Get Early Access"
                          seatsLeft={44}
                      />
                      <div className="mt-3 text-xs text-muted-foreground">
                          Founder pricing ends soon.
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                              <Shield className="h-4 w-4" /> Privacy-first
                          </span>
                      </div>
                  </div>
              </div>
              <div className="flex justify-center items-start">
                  <QuotePreview />
              </div>
          </div>
      </section>
  );
};

const Pain = () => (
  <section className="container mx-auto py-16 animate-entry md:py-24">
    <header className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold">Your website is a leaky bucket.</h2>
      <p className="mt-2 text-muted-foreground">Stop losing high-intent visitors. Fix the leaks that kill conversions.</p>
    </header>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        ['Wasted ad spend', '98% leave without contact details.'],
        ['No price transparency', '&quot;How much will it cost?&quot; goes unanswered.'],
        ['Low conversions', 'Contact forms convert <2%.'],
        ['Manual quoting is slow', '30–90 minutes of back-and-forth.'],
        ['Missed after-hours leads', 'Nights/weekends traffic bounces.'],
        ['Unqualified time sinks', 'Tire-kickers ghost on price.'],
        ['Inconsistent estimates', 'Spreadsheet chaos → margin mistakes.'],
        ['Slow follow-up', 'Teams are on roofs, not in inboxes.'],
        ['No CRM sync', 'Leads scattered across email/forms/notes.'],
      ].map(([title, desc]) => (
        <Card key={title} className="rounded-xl transition-all hover:shadow hover-scale shadow-lg shadow-red-500/20 border-red-100 dark:border-red-900/30">
          <CardHeader>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
    
  </section>
);

const Solution = () => (
    <section className="container mx-auto py-16 animate-entry md:py-24">
        <header className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold">
                Give customers a price. Get a qualified lead.
            </h2>
            <p className="mt-2 text-muted-foreground">
                Instant price range for them. CRM-ready lead for you.
            </p>
        </header>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
                [
                    'They get an instant quote',
                    'Accurate price range immediately.',
                    <Gauge key="i1" />,
                ],
                [
                    'You get a pre-qualified lead',
                    'Name + email + job details → CRM/inbox.',
                    <Mail key="i2" />,
                ],
                [
                    'You close more jobs',
                    'Talk to ready-to-buy homeowners.',
                    <CheckCircle key="i3" />,
                ],
            ].map(([title, desc, icon]) => (
                <Card
                    key={title as string}
                    className="rounded-xl transition-all hover:shadow hover-scale shadow-lg shadow-green-500/20 border-green-100 dark:border-green-900/30"
                >
                    <CardHeader className="flex-row items-center gap-3">
                        <div className="rounded-md bg-accent p-2 text-accent-foreground">
                            {icon}
                        </div>
                        <div>
                            <CardTitle className="text-lg">{title as string}</CardTitle>
                            <CardDescription>{desc as string}</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </section>
);

const HowItWorks = () => (
  <section id="how" className="container mx-auto py-16 animate-entry md:py-24">
    <header className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold">How it works</h2>
    </header>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        ['Set your pricing rules', 'Per sq ft, materials, tear-off, permits, gutters, urgency.', <Cog key="h1"/>],
        ['Install the widget', 'We do it for you or use the DIY dashboard.', <Zap key="h2"/>],
        ['Capture leads 24/7', 'Instant quotes delivered to your team in real time.', <MessageCircle key="h3"/>],
      ].map(([title, desc, icon], i) => (
        <Card key={title as string} className="rounded-xl transition-all hover:shadow hover-scale">
          <CardHeader>
            <div className="mb-2 flex items-center gap-3"><span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-secondary-foreground font-semibold">{i+1}</span>{icon}</div>
            <CardTitle className="text-lg">{title as string}</CardTitle>
            <CardDescription>{desc as string}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="container mx-auto py-16 animate-entry md:py-24">
    <header className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold">Features that move the needle</h2>
      <p className="mt-2 text-muted-foreground">Built for roofers and exterior contractors.</p>
    </header>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        ['Good–Better–Best tiers', 'Upsell premium materials/warranties.', <Layers key="f1"/>],
        ['Financing in-quote', 'Show &quot;as low as $/mo&quot; to remove price friction.', <DollarSign key="f2"/>],
        ['Full customization', 'Roof type, slope, layers, tear-off, permits, gutters, add-ons.', <Cog key="f3"/>],
        ['AI-written offer notes', 'Narrative summaries that build trust.', <MessageCircle key="f4"/>],
        ['WhatsApp & email sending', 'Auto-send quote to homeowner.', <Mail key="f5"/>],
        ['Analytics dashboard', 'Leads, conversion, source, ROI.', <LineChart key="f6"/>],
      ].map(([title, desc, icon]) => (
        <Card key={title as string} className="rounded-xl transition-all hover:shadow hover-scale">
          <CardHeader className="flex-row items-start gap-3">
            <div className="rounded-md bg-accent p-2 text-accent-foreground">{icon}</div>
            <div>
              <CardTitle className="text-lg">{title as string}</CardTitle>
              <CardDescription>{desc as string}</CardDescription>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  </section>
);

const Outcomes = () => (
  <section className="container mx-auto py-16 animate-entry md:py-24">
    <header className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold">Turn quotes into sales conversations.</h2>
    </header>
    <div className="mx-auto mt-6 max-w-3xl">
      <ul className="grid gap-3 sm:grid-cols-3">
        {[
          'More booked jobs',
          'Higher average ticket',
          'Less busywork',
        ].map((t) => (
          <li key={t} className="flex items-center gap-2 rounded-lg border bg-card p-3 text-sm"><CheckCircle className="text-primary" /> {t}</li>
        ))}
      </ul>
      <div className="mx-auto mt-8 max-w-xl">
        <EmailCaptureForm eventId="solution_submit" ctaLabel="Join Waitlist" />
      </div>
    </div>
  </section>
);

const Founder = () => (
  <section className="container mx-auto py-16 animate-entry md:py-24">
    <Card className="mx-auto max-w-3xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl">Founder note</CardTitle>
        <CardDescription>
          Saw a friend losing leads despite solid traffic; visitors bounced at pricing. We fixed it with instant ranges, email capture, and CRM-ready leads.
        </CardDescription>
      </CardHeader>
    </Card>
  </section>
);

const PricingTeaser = () => (
  <section id="pricing" className="container mx-auto py-16 animate-entry md:py-24">
    <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-6 shadow-sm">
      <h3 className="font-display text-2xl font-bold">Founder Beta — limited seats — early-adopter discount</h3>
      <p className="mt-2 text-muted-foreground">Launch in 30 minutes on a setup call.</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {[
          'Unlimited instant quotes',
          'Good/Better/Best upsell',
          'Financing & customization',
          'Analytics dashboard',
          'White-glove setup',
          'Month-to-month; cancel anytime',
        ].map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm"><CheckCircle className="text-primary"/> {b}</li>
        ))}
      </ul>
      <div className="mt-6 max-w-xl">
        <EmailCaptureForm eventId="pricing_submit" ctaLabel="Save my spot" />
      </div>
      <p className="mt-2 text-xs text-muted-foreground">30-day money-back guarantee.</p>
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="container mx-auto py-16 animate-entry md:py-24">
    <header className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold">FAQ</h2>
    </header>
    <div className="mx-auto mt-8 max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {[
          ['How long does setup take?', 'Usually 30–60 minutes.'],
          ['Can I customize pricing & questions?', 'Yes—fully.'],
          ['Will it slow down my site?', 'No—lightweight and fast.'],
          ['Can I show monthly payments?', 'Yes—financing ranges.'],
          ['Contract?', 'Month-to-month; cancel anytime.'],
        ].map(([q, a]) => (
          <AccordionItem key={q} value={q as string}>
            <AccordionTrigger>{q as string}</AccordionTrigger>
            <AccordionContent>{a as string}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="border-t bg-muted/20 py-16">
    <div className="container mx-auto">
      <header className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold">Be first in your market to offer instant roofing quotes.</h2>
        <p className="mt-2 text-muted-foreground">Capture more leads starting today.</p>
      </header>
      <div className="mx-auto mt-6 max-w-2xl">
        <EmailCaptureForm eventId="footer_submit" />
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">We&apos;ll only email when it&apos;s useful.</p>
      <div className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
        <a href="#" aria-label="Privacy">Privacy</a>
        <a href="#" aria-label="Terms">Terms</a>
        <a href="#" aria-label="Contact">Contact</a>
      </div>
    </div>
  </section>
);

const JSONLD = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SmartQuote.ai',
    description: 'Instant roofing quote widget that turns visitors into qualified leads.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How long does setup take?', acceptedAnswer: { '@type': 'Answer', text: 'Usually 30–60 minutes.' } },
      { '@type': 'Question', name: 'Can I customize pricing & questions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—fully.' } },
      { '@type': 'Question', name: 'Will it slow down my site?', acceptedAnswer: { '@type': 'Answer', text: 'No—lightweight and fast.' } },
      { '@type': 'Question', name: 'Can I show monthly payments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—financing ranges.' } },
      { '@type': 'Question', name: 'Contract?', acceptedAnswer: { '@type': 'Answer', text: 'Month-to-month; cancel anytime.' } },
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
};

const MobileStickyCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/90 p-3 backdrop-blur md:hidden">
    <div className="container mx-auto">
      <a href="#pricing" className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-primary-foreground font-medium shadow-md">
        Get Early Access <ArrowRight className="h-4 w-4"/>
      </a>
    </div>
  </div>
);

const Index = () => {
  const [active, setActive] = useState<string | undefined>();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = 'SmartQuote.ai — Instant Roofing Quote Widget';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Turn roofing visitors into ready-to-buy leads with instant quotes. Capture emails fast.');
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    const ids = links.map((l) => l.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar active={active} scrolled={scrolled} />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <HowItWorks />
        <Features />
        <Outcomes />
        <Founder />
        <PricingTeaser />
        <FAQ />
        <FooterCTA />
      </main>
      <StickyBanner />
      <ExitIntentModal />
      <MobileStickyCTA />
      <JSONLD />
    </div>
  );
};

export default Index;