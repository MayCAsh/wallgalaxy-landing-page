import React, { useState } from "react";
import { motion } from "framer-motion";

function IconGlyph({ children, className = "" }) {
  return <span className={`inline-flex items-center justify-center leading-none ${className}`}>{children}</span>;
}

const ArrowRight = ({ className = "" }) => <IconGlyph className={className}>→</IconGlyph>;
const Home = ({ className = "" }) => <IconGlyph className={className}>⌂</IconGlyph>;
const Building2 = ({ className = "" }) => <IconGlyph className={className}>▦</IconGlyph>;
const Palette = ({ className = "" }) => <IconGlyph className={className}>◐</IconGlyph>;
const CheckCircle2 = ({ className = "" }) => <IconGlyph className={className}>✓</IconGlyph>;
const MessageCircle = ({ className = "" }) => <IconGlyph className={className}>◔</IconGlyph>;
const ChevronDown = ({ className = "" }) => <IconGlyph className={className}>⌄</IconGlyph>;
const Layers = ({ className = "" }) => <IconGlyph className={className}>≋</IconGlyph>;
const Eye = ({ className = "" }) => <IconGlyph className={className}>◉</IconGlyph>;
const Camera = ({ className = "" }) => <IconGlyph className={className}>▣</IconGlyph>;
const Coffee = ({ className = "" }) => <IconGlyph className={className}>◒</IconGlyph>;
const Heart = ({ className = "" }) => <IconGlyph className={className}>♡</IconGlyph>;
const Lock = ({ className = "" }) => <IconGlyph className={className}>⌁</IconGlyph>;
const Ticket = ({ className = "" }) => <IconGlyph className={className}>▤</IconGlyph>;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const images = {
  hero: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=80",
  abstract: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  living: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
  kids: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80",
  cafe: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
  office: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1600&q=80",
  studio: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1600&q=80",
  salon: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",
};

function Button({ children, variant = "primary", className = "" }) {
  const styles =
    variant === "secondary"
      ? "border border-[#17352C]/30 bg-transparent text-[#17352C] hover:bg-[#17352C]/5"
      : variant === "light"
      ? "bg-white text-[#17352C] hover:bg-[#F8F1E4]"
      : "bg-[#17352C] text-white hover:bg-[#10251F]";

  return (
    <button className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17352C]/20 text-[#17352C]">
        <Layers className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#17352C]">WallGalaxy</p>
      </div>
    </div>
  );
}

function SoftMuralOverlay({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 mix-blend-multiply ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(189,133,92,.28),transparent_23%),radial-gradient(circle_at_78%_42%,rgba(102,132,104,.32),transparent_28%),radial-gradient(circle_at_48%_74%,rgba(169,91,118,.22),transparent_35%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(135deg,rgba(75,55,39,.12)_1px,transparent_1px)] [background-size:34px_34px]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F5EFE2]">
      <img src={images.hero} alt="custom wall mural living room" className="absolute inset-0 h-full w-full object-cover" />
      <SoftMuralOverlay />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE2]/96 via-[#F5EFE2]/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE2] via-transparent to-[#F5EFE2]/30" />

      <div className="absolute inset-y-0 right-0 hidden w-[56%] overflow-hidden border-l border-white/65 lg:block">
        <img src={images.hero} alt="after wall mural preview" className="h-full w-full object-cover" />
        <SoftMuralOverlay className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F5EFE2]/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-28 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
          <motion.h1 variants={fadeUp} className="font-serif text-6xl leading-[0.92] tracking-[-0.055em] text-[#17352C] md:text-8xl">
            Your Wall Could Be So Much More
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-lg text-lg leading-8 text-[#2F473D]">
            Custom murals, wallpapers, and branded wall designs made for your space. Preview the look, choose your style, and bring your wall to life.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button>Preview Your Wall</Button>
            <Button variant="secondary">Explore Styles</Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 grid max-w-xl grid-cols-1 gap-6 border-t border-[#17352C]/15 pt-7 text-sm text-[#17352C] sm:grid-cols-3">
            <div className="flex gap-3"><Eye className="h-5 w-5" /><span>Preview before you buy</span></div>
            <div className="flex gap-3"><Palette className="h-5 w-5" /><span>Made for your space</span></div>
            <div className="flex gap-3"><Heart className="h-5 w-5" /><span>Loved by homes & businesses</span></div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute left-[56%] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#17352C] shadow-xl lg:flex">
        ↔
      </div>

      <div className="absolute right-[7%] top-28 z-20 hidden rounded-full bg-[#B86A8A] px-8 py-7 text-center text-white shadow-2xl lg:block">
        <p className="text-4xl font-serif leading-none">10%</p>
        <p className="mt-1 text-xs font-black uppercase tracking-[0.18em]">Launch pass</p>
      </div>

      <div className="absolute right-[8%] top-44 z-20 hidden max-w-[190px] rounded-[1.6rem] bg-white/88 p-4 text-[#17352C] shadow-xl lg:block">
        <div className="mb-3 h-16 overflow-hidden rounded-xl">
          <img src={images.living} alt="upload preview" className="h-full w-full object-cover" />
        </div>
        <p className="text-sm font-bold">Upload your wall</p>
      </div>

      <div className="absolute bottom-10 right-[10%] z-20 hidden max-w-[190px] rounded-[1.6rem] bg-white/88 p-4 text-[#17352C] shadow-xl lg:block">
        <div className="mb-3 h-16 overflow-hidden rounded-xl">
          <img src={images.hero} alt="preview ready" className="h-full w-full object-cover" />
        </div>
        <p className="text-sm font-bold">Preview ready</p>
      </div>
    </section>
  );
}

function ShowroomPanel({ image, title, subtitle }) {
  return (
    <div className="group relative h-[330px] min-w-[260px] overflow-hidden border-r border-white/30 md:h-[390px] md:min-w-[330px]">
      <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <SoftMuralOverlay className="opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <p className="font-serif text-2xl leading-none">{title}</p>
        <p className="mt-2 text-sm opacity-90">{subtitle}</p>
      </div>
    </div>
  );
}

function Showroom() {
  return (
    <section id="inspiration" className="bg-[#F5EFE2] py-12">
      <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between gap-6 px-6 lg:px-8">
        <h2 className="font-serif text-4xl tracking-[-0.04em] text-[#17352C] md:text-5xl">Walk Through the Possibilities</h2>
        <div className="hidden gap-3 md:flex">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#17352C]/20 text-[#17352C]">←</button>
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#17352C]/20 text-[#17352C]">→</button>
        </div>
      </div>
      <div className="flex overflow-x-auto border-y border-[#17352C]/10 [&::-webkit-scrollbar]:hidden">
        <ShowroomPanel image={images.living} title="Living Room" subtitle="Feature walls" />
        <ShowroomPanel image={images.kids} title="Kids Rooms" subtitle="Nurseries & playrooms" />
        <ShowroomPanel image={images.cafe} title="Cafes" subtitle="Restaurants & hospitality" />
        <ShowroomPanel image={images.office} title="Offices" subtitle="Reception areas" />
        <ShowroomPanel image={images.salon} title="Salons" subtitle="Wellness studios" />
        <ShowroomPanel image={images.studio} title="Studios" subtitle="Content sets" />
      </div>
    </section>
  );
}

function ProcessBoard() {
  return (
    <section id="how" className="relative overflow-hidden bg-[#EFE5D2] px-6 py-20 lg:px-8">
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#CDBA9E_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl tracking-[-0.04em] text-[#17352C] md:text-5xl">Your Wall, Your Way</h2>
          <p className="font-serif text-xl italic text-[#9B7657]">It’s that simple.</p>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[1rem] bg-[#F8F1E4]/90 p-6 shadow-inner md:p-10">
          <div className="absolute right-8 top-8 h-64 w-28 rotate-12 rounded-full bg-gradient-to-b from-[#566B5A] via-[#9D7F6F] to-[#C6A46C] opacity-70 blur-sm" />
          <div className="absolute bottom-6 left-6 h-32 w-32 rounded-full bg-[#7C8B67]/20 blur-2xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.8fr_1fr_1fr]">
            <div className="relative rotate-[-3deg]">
              <div className="absolute -top-4 left-1/2 h-8 w-20 -translate-x-1/2 bg-[#D9C6A5]/80" />
              <p className="mb-3 text-sm font-bold text-[#17352C]">1. Upload Your Wall</p>
              <div className="bg-white p-4 shadow-xl">
                <img src={images.living} alt="blank wall upload" className="h-48 w-full object-cover grayscale" />
              </div>
            </div>

            <div className="relative rotate-[2deg]">
              <div className="absolute -top-4 left-1/2 h-8 w-20 -translate-x-1/2 bg-[#D9C6A5]/80" />
              <p className="mb-3 text-sm font-bold text-[#17352C]">2. Choose a Style</p>
              <div className="grid grid-cols-3 gap-3 bg-white p-4 shadow-xl">
                {['#5E775F', '#B98572', '#D6B78B', '#E8D4C4', '#8B6F6A', '#6A7C90'].map((color) => (
                  <span key={color} className="h-16 rounded-sm" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>

            <div className="relative rotate-[-2deg]">
              <div className="absolute -top-4 left-1/2 h-8 w-20 -translate-x-1/2 bg-[#D9C6A5]/80" />
              <p className="mb-3 text-sm font-bold text-[#17352C]">3. Preview the Design</p>
              <div className="bg-white p-4 shadow-xl">
                <img src={images.hero} alt="wall preview design" className="h-56 w-full object-cover" />
              </div>
            </div>

            <div className="relative rotate-[3deg]">
              <div className="absolute -top-4 left-1/2 h-8 w-20 -translate-x-1/2 bg-[#D9C6A5]/80" />
              <p className="mb-3 text-sm font-bold text-[#17352C]">4. Print and Transform</p>
              <div className="bg-white p-4 shadow-xl">
                <img src={images.abstract} alt="finished wall" className="h-64 w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button>Start With Your Wall</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudiencePanel({ id, icon: Icon, label, title, copy, cta, image, dark = false }) {
  return (
    <section id={id} className="relative min-h-[560px] overflow-hidden border-t border-white/20">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <SoftMuralOverlay className="opacity-70" />
      <div className={`absolute inset-0 ${dark ? 'bg-[#17352C]/72' : 'bg-gradient-to-r from-[#17352C]/90 via-[#17352C]/55 to-transparent'}`} />
      <div className="relative z-10 mx-auto grid min-h-[560px] max-w-7xl items-center gap-8 px-6 py-20 lg:grid-cols-[0.38fr_0.62fr] lg:px-8">
        <div className="max-w-sm text-white">
          <div className="mb-5 flex items-center gap-2 text-sm font-bold">
            <Icon className="h-5 w-5" />
            {label}
          </div>
          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] md:text-6xl">{title}</h2>
          <p className="mt-6 text-base leading-7 text-white/85">{copy}</p>
          <Button variant="light" className="mt-8">{cta}</Button>
        </div>
      </div>
    </section>
  );
}

function LaunchPass() {
  return (
    <section id="offer" className="relative overflow-hidden bg-[#17352C] px-6 py-24 text-white lg:px-8">
      <img src={images.bedroom} alt="wallpaper texture background" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-[#17352C]/84" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#B86A8A]/25 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#E8D3A2]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
        <div className="grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full bg-[#E8D3A2]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#E8D3A2]">
              Early access reward
            </div>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">Claim the Launch Pass</h2>
            <p className="mt-5 max-w-sm text-white/80">Be among the first to see exclusive designs, claim 10% off, and preview your wall before launch.</p>
            <div className="mt-8 space-y-3 text-sm text-white/85">
              <p className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#E8D3A2]" /> 10% off your first order</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#E8D3A2]" /> First access to new designs</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#E8D3A2]" /> Option to request a free wall preview</p>
            </div>
          </div>

          <div className="relative -rotate-3 bg-[#F5EFE2] p-8 text-[#17352C] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <div className="absolute bottom-0 left-0 top-0 w-6 bg-[radial-gradient(circle,#17352C_5px,transparent_6px)] [background-size:24px_24px]" />
            <div className="absolute -right-5 -top-5 rotate-12 rounded-full bg-[#B86A8A] px-5 py-4 text-center text-white shadow-xl">
              <p className="font-serif text-3xl leading-none">10%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.16em]">Off</p>
            </div>
            <div className="pl-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9B7657]">WallGalaxy Launch Pass</p>
              <p className="mt-5 font-serif text-6xl leading-none">10% Off</p>
              <p className="mt-2 text-xl font-black uppercase tracking-[0.14em]">Your first order</p>
              <div className="mt-8 border border-[#17352C]/20 bg-white/45 p-4 text-center font-black tracking-[0.28em]">WALL10</div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#9B7657]">Early access. Limited launch spots.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.6rem] bg-gradient-to-br from-[#E8D3A2]/35 via-white/10 to-[#B86A8A]/25 blur-xl" />
          <div className="relative rounded-[2.4rem] border border-[#E8D3A2]/35 bg-[#F5EFE2] p-6 text-[#17352C] shadow-[0_30px_100px_rgba(0,0,0,0.36)] md:p-8">
            <div className="mb-7 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#B86A8A]">Join the list</p>
                <h3 className="mt-2 font-serif text-4xl leading-none tracking-[-0.04em]">Get 10% Before We Launch</h3>
                <p className="mt-3 text-sm leading-6 text-[#52655C]">Tell us what you’re decorating so we can send the right inspiration and offer.</p>
              </div>
              <Ticket className="h-10 w-10 shrink-0 text-[#B86A8A]" />
            </div>

            <div className="grid gap-5">
              <LightFormInput label="First name" placeholder="First name" />
              <LightFormInput label="Email address" type="email" placeholder="Email address" />
              <LightSelectInput label="What are you decorating?" options={["Home", "Business", "Creator / Studio", "Other"]} />
              <label className="flex items-center gap-3 rounded-2xl bg-[#17352C]/6 px-4 py-3 text-sm text-[#17352C]">
                <input type="checkbox" className="h-4 w-4 accent-[#B86A8A]" />
                I want a free preview of my wall
              </label>
              <Button className="w-full bg-[#B86A8A] hover:bg-[#9E5574]">Claim My Launch Pass</Button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[#52655C]"><Lock className="h-3.5 w-3.5" /> We respect your privacy. No spam, ever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LightFormInput({ label, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#9B7657]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#17352C]/15 bg-white/70 px-4 py-3.5 text-sm text-[#17352C] outline-none placeholder:text-[#17352C]/35 focus:border-[#B86A8A] focus:bg-white"
      />
    </label>
  );
}

function LightSelectInput({ label, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#9B7657]">{label}</span>
      <select className="w-full rounded-2xl border border-[#17352C]/15 bg-white/70 px-4 py-3.5 text-sm text-[#17352C] outline-none focus:border-[#B86A8A] focus:bg-white">
        <option className="bg-white text-[#17352C]">Select one</option>
        {options.map((option) => (
          <option key={option} className="bg-white text-[#17352C]">{option}</option>
        ))}
      </select>
    </label>
  );
}

function ProofPoints() {
  const items = [
    { icon: Eye, title: 'Preview Before You Buy', copy: 'See it on your wall before you decide.' },
    { icon: Palette, title: 'Custom Made for Your Wall', copy: 'Every order is tailored to your space.' },
    { icon: Layers, title: 'Murals, Wallpaper & Brand Walls', copy: 'For homes, businesses, and creative spaces.' },
    { icon: Home, title: 'Made for Homes and Businesses', copy: 'From cozy rooms to commercial spaces.' },
    { icon: Heart, title: 'Designed to Be Remembered', copy: 'Spaces that inspire, connect, and stay.' },
  ];

  return (
    <section className="bg-[#F5EFE2] px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border-y border-[#17352C]/15 py-10 md:grid-cols-5">
        {items.map(({ icon: Icon, title, copy }) => (
          <div key={title} className="text-center text-[#17352C] md:border-r md:border-[#17352C]/12 md:last:border-r-0">
            <Icon className="mx-auto mb-4 h-8 w-8" />
            <h3 className="font-serif text-2xl leading-none">{title}</h3>
            <p className="mx-auto mt-3 max-w-[170px] text-sm leading-5 text-[#52655C]">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#17352C]/15">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-[#17352C]">
        <span className="text-base font-semibold">{question}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-sm leading-6 text-[#52655C]">{answer}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <section className="bg-[#F5EFE2] px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.3fr_0.7fr]">
        <div>
          <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-[#17352C]">Questions? We’ve got you.</h2>
          <p className="mt-4 text-[#52655C]">A few quick answers before you claim your launch pass.</p>
        </div>
        <div className="grid gap-x-10 md:grid-cols-2">
          <FAQItem question="Do I need to know exactly what design I want?" answer="No. You can start with a room, mood, color direction, image, or a simple idea. WallGalaxy helps turn that into a visual wall concept." />
          <FAQItem question="Can I preview the design before ordering?" answer="Yes. The preview is central to the WallGalaxy experience so you can see the direction before committing." />
          <FAQItem question="Can I use my own photo, logo, or artwork?" answer="Yes. Depending on the project, you can bring your own photo, artwork, logo, brand colors, or inspiration." />
          <FAQItem question="Is WallGalaxy for renters?" answer="WallGalaxy can support different spaces and project types. Material and installation options will be shared as launch details are finalized." />
          <FAQItem question="Do you offer commercial wall designs?" answer="Yes. Cafes, salons, offices, clinics, studios, boutiques, and venues can request commercial wall concepts." />
          <FAQItem question="How do I claim the launch offer?" answer="Join the early access list and you’ll receive your launch pass and promo code when WallGalaxy goes live." />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative min-h-[560px] overflow-hidden">
      <img src={images.bedroom} alt="custom wall mural final reveal" className="absolute inset-0 h-full w-full object-cover" />
      <SoftMuralOverlay />
      <div className="absolute inset-0 bg-[#17352C]/45" />
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-4xl flex-col items-center justify-center px-6 text-center text-white lg:px-8">
        <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl">Your Wall Story Starts Here</h2>
        <p className="mt-6 max-w-xl text-lg text-white/85">Personal. Powerful. Uniquely yours.</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button variant="light">Get 10% Launch Pass</Button>
          <Button variant="secondary" className="border-white/40 text-white hover:bg-white/10">Preview Your Wall for Free</Button>
        </div>
      </div>
    </section>
  );
}

export default function WallGalaxyLandingPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE2] text-[#17352C] selection:bg-[#B86A8A]/30">
      <header className="fixed left-0 right-0 top-0 z-50 bg-[#F5EFE2]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.12em] text-[#17352C] lg:flex">
            <a href="#inspiration">Inspiration</a>
            <a href="#how">How It Works</a>
            <a href="#business">For Business</a>
            <a href="#creators">For Creators</a>
          </nav>
          <Button className="hidden md:inline-flex">Get Launch Pass</Button>
        </div>
      </header>

      <button className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#17352C] text-white shadow-2xl">
        <MessageCircle className="h-6 w-6" />
      </button>

      <main>
        <Hero />
        <Showroom />
        <ProcessBoard />
        <AudiencePanel id="homes" icon={Home} label="For your home" title="Make Home Feel More Like You" copy="Create a feature wall for your living room, bedroom, nursery, playroom, or home office without guessing how the final result will look." cta="Design for My Home" image={images.bedroom} />
        <AudiencePanel id="business" icon={Building2} label="For your business" title="Turn Your Wall Into a Brand Moment" copy="Create branded walls for cafes, salons, boutiques, offices, clinics, studios, and reception areas that customers notice, photograph, and remember." cta="Design for My Business" image={images.office} dark />
        <AudiencePanel id="creators" icon={Camera} label="For creators" title="Create a Backdrop People Want to Watch" copy="Use WallGalaxy to create a custom backdrop for reels, shoots, podcasts, livestreams, and before-and-after wall reveal content." cta="Design for My Content" image={images.studio} />
        <LaunchPass />
        <ProofPoints />
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="bg-[#17352C] px-6 py-10 text-sm text-white/65 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-white">WallGalaxy</p>
          <div className="flex flex-wrap gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Returns</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
