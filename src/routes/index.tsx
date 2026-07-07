import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Github, Twitter, Linkedin, ExternalLink, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DustParticles } from "@/components/ui/dust-particles";
import profilePic from "@/assets/profile.png";
import qrBillingImg from "@/assets/qr-billing.png";
import ecommerceImg from "@/assets/ecommerce.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const experienceCards = [
  {
    title: "CIB on the Mobile",
    subtitle: "Digital Onboarding",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    tag: "Mobile App",
  },
  {
    title: "CIB on the Mobile",
    subtitle: "Smart Banking",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    tag: "FinTech",
  },
];

import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
} from "react-icons/si";

const techStack = [
  { name: "React", color: "#61DAFB", Icon: SiReact },
  { name: "Node.js", color: "#6cc24a", Icon: SiNodedotjs },
  { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { name: "PostgreSQL", color: "#4169E1", Icon: SiPostgresql },
  { name: "Figma", color: "#F24E1E", Icon: SiFigma },
  { name: "Next.js", color: "#ffffff", Icon: SiNextdotjs },
  { name: "Tailwind", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "Docker", color: "#2496ED", Icon: SiDocker },
  { name: "Git", color: "#F05032", Icon: SiGit },
];

type ProjectLink = { icon: React.ReactNode; label: string };
type FeaturedProject = {
  tag: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  links: ProjectLink[];
};

const featuredProjects: FeaturedProject[] = [
  {
    tag: "My Projects :",
    title: "SMART QR BILLING",
    description:
      "This is a Billing Software For Restaurants with Smart QR Ordering feature, Smart Billing, Easy Ordering, Safe payments. Separate Portals For Admin, Customer and Waiter.",
    image: qrBillingImg,
    bgColor: "#0f172a",
    links: [
      { icon: <Globe size={18} />, label: "Live Demo" },
      { icon: <Github size={18} />, label: "GitHub" },
    ],
  },
  {
    tag: "",
    title: "E-Commerce",
    description:
      "This is a E-Commerce website. The Admin Can Add as Many Products He Want, He can Manage his Users, Orders, Payments, etc., With Smooth User experience.",
    image: ecommerceImg,
    bgColor: "#0f172a",
    links: [
      { icon: <Globe size={18} />, label: "Live Demo" },
      { icon: <Github size={18} />, label: "GitHub" },
    ],
  },
];

function LogoMark({ size = 72 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Glowing core */}
      <div
        className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-glow"
        style={{
          width: size * 0.35,
          height: size * 0.35,
          background:
            "radial-gradient(circle, #ffffff 0%, #60a5fa 40%, #1e3a8a 100%)",
          boxShadow: "0 0 20px #60a5fa, 0 0 40px rgba(96,165,250,0.6)",
        }}
      />
      {/* Orbit rings with dots */}
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="absolute inset-0 animate-spin-slow"
        style={{ animationDuration: "10s" }}
      >
        <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
        <circle cx="95" cy="50" r="3" fill="#60a5fa">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="absolute inset-0 animate-spin-slow"
        style={{ animationDuration: "14s", animationDirection: "reverse", transform: "rotate(60deg)" }}
      >
        <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="1" />
        <circle cx="5" cy="50" r="2.5" fill="#ffffff">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="absolute inset-0 animate-spin-slow"
        style={{ animationDuration: "18s", transform: "rotate(120deg)" }}
      >
        <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
        <circle cx="95" cy="50" r="2" fill="#2563eb">
          <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

function TechBadge({
  name,
  color,
  Icon,
}: {
  name: string;
  color: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-poppins text-xs font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-white/30 hover:bg-white/10"
      style={{ boxShadow: `0 0 8px ${color}30` }}
    >
      <Icon
        className="h-3.5 w-3.5 flex-shrink-0"
        style={{ color, filter: `drop-shadow(0 0 4px ${color}80)` }}
      />
      {name}
    </span>
  );
}

function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#020617] text-white lg:pl-64">
      <DustParticles />
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 z-50 w-64 bg-[#020617]/80 backdrop-blur-md border-r border-white/10 hidden lg:flex flex-col p-8">
        <h2 className="text-white font-preahvihear text-2xl mb-12">SREERAM.</h2>
        <ul className="flex flex-col gap-6 font-poppins text-base font-medium text-white/80">
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">About</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Skills</a>
          </li>
          <li>
            <a href="#lab" onClick={(e) => { e.preventDefault(); document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Contact</a>
          </li>
        </ul>
      </aside>

      {/* Mobile Top Header (only visible on mobile) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex lg:hidden items-center justify-between py-2 px-4 bg-[#020617]/80 backdrop-blur-md border-b border-white/40 animate-fade-up">
        <ul className="flex items-center gap-3 sm:gap-6 font-poppins text-[11px] sm:text-sm font-medium text-white/80 whitespace-nowrap overflow-x-auto no-scrollbar flex-1 pr-2">
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">About</a>
          </li>
          <li className="text-white/20 font-light">|</li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Skills</a>
          </li>
          <li className="text-white/20 font-light">|</li>
          <li>
            <a href="#lab" onClick={(e) => { e.preventDefault(); document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Projects</a>
          </li>
          <li className="text-white/20 font-light">|</li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Contact</a>
          </li>
        </ul>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-1 ml-2 hover:text-white/70 transition-colors flex-shrink-0 border-l border-white/20 pl-4">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-out Sidebar */}
      <aside className={`fixed top-0 right-0 bottom-0 z-[70] w-64 bg-[#020617]/95 backdrop-blur-xl border-l border-white/10 p-8 flex flex-col transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 hover:text-white/70 transition-colors">
            <X size={26} />
          </button>
        </div>
        <ul className="flex flex-col gap-8 font-poppins text-lg font-medium text-white/80">
          <li>
            <a href="#about" onClick={(e) => { setIsMobileMenuOpen(false); e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">About</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { setIsMobileMenuOpen(false); e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Skills</a>
          </li>
          <li>
            <a href="#lab" onClick={(e) => { setIsMobileMenuOpen(false); e.preventDefault(); document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { setIsMobileMenuOpen(false); e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Contact</a>
          </li>
        </ul>
      </aside>

      {/* Glow blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[5%] h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.4)_0%,transparent_100%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.5)_0%,transparent_100%)] animate-pulse-glow" />
        <div className="absolute right-[15%] top-[40%] h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(29,78,216,0.3)_0%,transparent_100%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(29,78,216,0.4)_0%,transparent_100%)] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[10%] left-[20%] h-[200px] w-[200px] md:h-[350px] md:w-[350px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,0.3)_0%,transparent_100%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,0.35)_0%,transparent_100%)] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 max-w-[1100px] mx-auto px-4 pb-2 pt-24 md:px-10 md:pb-4 md:pt-32"
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
          {/* Avatar */}
          <div className="relative flex h-[180px] w-[180px] md:h-[250px] md:w-[250px] flex-shrink-0 items-center justify-center">
            {/* The solid black circle */}
            <div className="absolute z-0 h-[200px] w-[200px] md:h-[290px] md:w-[290px] rounded-full bg-blue-950/40" />

            {/* The glows (placed in front of the black circle, but behind the image) */}
            <div className="absolute z-1 -inset-[30px] md:-inset-[40px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.6)_0%,transparent_70%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.85)_0%,transparent_70%)] animate-pulse-glow pointer-events-none" />
            <div className="absolute z-1 -inset-[10px] md:-inset-[20px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.15)_18%,transparent_100%)] pointer-events-none" />

            <div className="shine-ring relative z-10 h-[200px] w-[200px] md:h-[290px] md:w-[290px] rounded-full">
              <img
                src={profilePic}
                alt="Sreeram"
                className="h-full w-full rounded-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>


          {/* Intro text */}
          <div className="relative w-full flex flex-col md:block animate-fade-up">

            <div className="text-left w-full overflow-x-auto no-scrollbar">
              <div className="mb-2 flex flex-nowrap items-center justify-start gap-1.5 font-preahvihear text-[13px] md:text-[17px] tracking-[0.34px] whitespace-nowrap">
                <span className="text-white">Hi i am</span>
                <span className="text-shimmer font-semibold">SREERAM,</span>
                <span className="text-white">A Designer who:</span>
              </div>
            </div>

            <div className="mb-0 md:mb-4 text-right md:text-left self-end md:self-auto w-full px-3 -mx-3 py-2 -my-2 md:py-0">
              <h1 className="inline-block font-preahvihear text-[22px] sm:text-[32px] md:text-[50px] font-normal leading-[1.15] md:leading-[1.05] tracking-[0.5px] text-right md:text-left">
                <span className="text-white">
                  Judges a book
                  <br className="hidden md:block" />
                  <span className="md:hidden"> </span>by its{" "}
                </span>
                <span className="relative inline-block">
                  <span className="pointer-events-none absolute left-1/2 top-1/2 h-[34px] w-[86px] md:h-[52px] md:w-[170px] -translate-x-1/2 -translate-y-1/2 -rotate-[4.74deg] rounded-full border border-white/70" />
                  <span className="relative z-10 text-shimmer">cover</span>
                </span>
              </h1>
            </div>
            <p className="mt-1 md:mt-4 font-preahvihear text-[10px] md:text-[11px] tracking-[0.22px] text-white text-right md:text-left w-full">
              Because if the cover does not impress you what else can?
            </p>
          </div>

        </div>
      </section>

      {/* Full stack section */}
      <div id="about" className="reveal relative z-10 flex justify-start md:justify-end px-4 pb-2 md:px-10 md:pb-4">
        <div className="max-w-full md:max-w-[760px]">
          {/* Mobile */}
          <div className="flex flex-col gap-2 md:hidden rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <h2 className="font-preahvihear text-[20px] whitespace-nowrap font-normal leading-[1.2] text-white">
              I&apos;m a Full Stack <span className="text-shimmer">Developer</span>
            </h2>
            <ul className="mt-3 font-preahvihear text-[12px] leading-[1.6] tracking-[0.3px] text-white/90 list-disc pl-5 pr-2">
              <li>A self-taught UI/UX designer</li>
              <li>Good in full stack development</li>
              <li>Can manage frontend and backend perfectly</li>
              <li>I make meaningful and delightful digital products</li>
              <li>Creating equilibrium between user needs and business goal</li>
            </ul>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <h2 className="font-preahvihear text-[50px] font-normal leading-[1.1] tracking-[1px] text-white">
              I&apos;m a Full Stack <span className="text-shimmer">Developer</span>
            </h2>
            <p className="mt-2 font-preahvihear text-[21px] tracking-[0.42px] text-white/90">
              I&apos;m sreeram, i work for startups, and as freelancer ...
            </p>
            <div className="mt-7 space-y-1 font-preahvihear text-[20px] leading-[1.65] tracking-[0.44px] text-white/85">
              <p>
                A self-taught UI/UX designer, I&apos;m good in full stack development,
                can manage frontend and backend perfectly.
              </p>
              <p>I make meaningful and delightful digital products that create an equilibrium</p>
              <p>between user needs and business goal.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <section id="skills" className="reveal relative z-10 mx-auto max-w-[1100px] px-4 pt-4 pb-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[700px] text-center">
          <h3 className="font-preahvihear text-[18px] md:text-[26px] font-normal leading-[1.4] tracking-[0.48px] text-white">
            I&apos;m currently looking to join a{" "}
            <span className="text-shimmer">cross-functional</span> team
          </h3>
          <p className="mt-1 font-preahvihear text-[12px] md:text-[17px] tracking-[0.06px] text-white/75">
            that values improving people&apos;s lives through accessible design
          </p>
        </div>

        <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} color={tech.color} Icon={tech.Icon} />
          ))}
        </div>

        {/* Logo orb */}
        <div className="relative mx-auto mt-10 md:mt-16 flex h-[200px] md:h-[340px] w-full max-w-[880px] items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            <div className="h-[200px] w-[320px] md:h-[340px] md:w-[700px] rounded-full border border-white/5" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[160px] w-[260px] md:h-[280px] md:w-[580px] rounded-full border border-white/10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[120px] w-[210px] md:h-[220px] md:w-[480px] rounded-full border border-white/10" />
          </div>
          <div className="absolute h-[160px] w-[240px] md:h-[300px] md:w-[500px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.5)_0%,transparent_100%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.75)_0%,transparent_100%)] animate-pulse-glow" />
          <div className="absolute h-[100px] w-[100px] md:h-[180px] md:w-[180px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,0.6)_0%,rgba(30,58,138,0.4)_40%,transparent_70%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,0.9)_0%,rgba(30,58,138,0.6)_40%,transparent_70%)]" />
          <div className="relative z-10 flex h-[90px] w-[90px] md:h-[130px] md:w-[130px] items-center justify-center animate-float-slow -translate-x-2 md:-translate-x-3">
            <LogoMark size={120} />
          </div>

          {[
            "top-[14%] left-[18%]",
            "top-[22%] right-[20%]",
            "top-[60%] left-[12%]",
            "top-[70%] right-[18%]",
            "top-[40%] left-[5%]",
            "top-[35%] right-[6%]",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#60a5fa]/70 animate-sparkle`}
              style={{ boxShadow: "0 0 6px #60a5fa", animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="lab"
        className="relative z-10 mx-auto max-w-[1100px] px-4 pt-4 pb-8 md:px-10 md:py-10"
      >
        <div className="space-y-8 md:space-y-20">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="reveal grid items-start gap-5 md:gap-8 grid-cols-1 md:grid-cols-[minmax(0,400px)_minmax(0,1fr)]"
            >
              <article>
                {project.tag && (
                  <p className="font-poppins text-sm md:text-base font-semibold tracking-[0.32px] text-white">
                    {project.tag}
                  </p>
                )}
                <h3 className="text-shimmer mt-1 md:mt-2 font-poppins text-[22px] md:text-[34px] font-semibold tracking-[0.68px]">
                  {project.title}
                </h3>
                <p className="mt-2 md:mt-4 font-preahvihear text-[13px] md:text-[18px] leading-[1.65] tracking-[0.44px] text-white/80">
                  {project.description}
                </p>
              </article>

              <div
                className="group rounded-[8px] md:rounded-[10px] p-3 md:p-6 shadow-[0_0_60px_rgba(37,99,235,0.15)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(37,99,235,0.4)]"
                style={{ backgroundColor: project.bgColor }}
              >
                <div className="relative h-[200px] md:h-[340px] w-full overflow-hidden rounded-[6px] md:rounded-[8px]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a0640]/40 to-transparent" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20 rounded-lg border border-white/10 bg-[#020617]/80 px-2 py-1 md:px-3 md:py-1.5 backdrop-blur-sm">
                    <p className="font-poppins text-[10px] md:text-xs font-semibold text-white">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer
        id="contact"
        className="reveal relative z-10 mx-auto max-w-[1100px] px-4 pt-6 pb-8 md:px-10 md:pb-20 md:pt-20"
      >
        <div className="max-w-[500px]">
          <h2 className="font-preahvihear text-[18px] md:text-[25px] tracking-[0.5px] text-white">
            Contact
          </h2>
          <div className="mt-5 md:mt-8 space-y-1 font-preahvihear text-[12px] md:text-[15px] leading-[1.65] tracking-[0.3px] text-white/75">
            <p>
              I&apos;m currently looking to join a cross-functional team that values improving
              people&apos;s lives
            </p>
            <p>through accessible design, or have a project in mind? Let&apos;s connect.</p>
            <p className="mt-4 md:mt-5 text-white">sreeram0242@gmail.com</p>
            <div className="mt-5 md:mt-6">
              <button
                type="button"
                onClick={() => window.open("https://wa.me/919629661668", "_blank")}
                className="group relative overflow-hidden rounded-full px-6 py-2.5 md:px-8 md:py-3.5 font-poppins text-sm md:text-base font-medium text-white transition-all duration-500 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.1) 100%)",
                  backdropFilter: "blur(16px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.25)",
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-3 top-0.5 h-1/2 rounded-full opacity-70"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
                    filter: "blur(2px)",
                  }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)] transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Contact Now
                </span>
              </button>
            </div>
          </div>
          <div className="mt-6 md:mt-8 flex items-center gap-2.5 md:gap-3">
            {[
              { icon: <Github size={18} />, href: "#", label: "GitHub" },
              { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
              { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
              { icon: <ExternalLink size={18} />, href: "#", label: "Portfolio" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#2563eb]/50 hover:bg-[#2563eb]/15 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-16 border-t border-white/5 pt-6 md:pt-8 text-center font-poppins text-[10px] md:text-xs text-white/30">
          Designed &amp; Built by Sreeram &mdash; {new Date().getFullYear()}
        </div>
        {/* Unused experienceCards reserved for future expansion */}
        <div className="hidden">{experienceCards.length}</div>
      </footer>
    </main>
  );
}
