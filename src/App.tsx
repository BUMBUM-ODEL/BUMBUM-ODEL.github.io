import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type IconName = "bug" | "check" | "search" | "mail" | "linkedin" | "github" | "triangle";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    bug: (
      <>
        <path d="M8 8.5h8v7a4 4 0 0 1-8 0v-7Z" />
        <path d="M9.5 8.5V7a2.5 2.5 0 0 1 5 0v1.5M5 11h3m8 0h3M5 16h3m8 0h3M8 20l-2 2m10-2 2 2" />
      </>
    ),
    check: <path d="m5 12 4.2 4.2L19 6.5" />,
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4 4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    linkedin: (
      <>
        <path d="M7 9v10M7 5.5v.1M11 19v-6a4 4 0 0 1 8 0v6M11 9v10" />
      </>
    ),
    github: (
      <>
        <path d="M15 21v-3.5c0-1 .1-1.5-.5-2 2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.2-3.3A4.3 4.3 0 0 0 18.7 3S17.7 2.7 15 4.2a11.3 11.3 0 0 0-6 0C6.3 2.7 5.3 3 5.3 3a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4 9.5c0 4.7 2.8 5.7 5.5 6-.6.5-.6 1.1-.5 2V21" />
        <path d="M9 19c-3 .9-3-1.5-4.2-2" />
      </>
    ),
    triangle: <path d="M12 3 21 20H3L12 3Z" />,
  };
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const stats = [
  { value: 300, suffix: "", label: "Internship hours" },
  { value: 7, suffix: "+", label: "Modules tested" },
  { value: 110, suffix: "+", label: "Test cases written" },
  { value: 90, suffix: "/100", label: "Supervisor rating" },
];

const projects = [
  {
    title: "HelioGrid",
    group: "AI and Data",
    eyebrow: "Thesis · Featured",
    short: "Rule-based voltage anomaly detection across four hybrid power sources.",
    detail:
      "Classified 404,949 readings with 97.71% accuracy and a 91.15% F1-score.",
    tags: ["Python", "Data Analysis", "IoT"],
    chart: true,
    cover: "/heliogrid-logo.png",
    images: [
      { src: "/heliogrid-brochure-front.jpg", alt: "HelioGrid brochure front with system startup guide and technical specifications" },
      { src: "/heliogrid-brochure-back.jpg", alt: "HelioGrid brochure back with objectives, architecture, and performance evaluation" },
    ],
    videos: [
      { src: "/heliogrid-avp.mp4", label: "HelioGrid audio-visual presentation (AVP)" },
    ],
  },
  {
    title: "Smart Walking Stick",
    group: "Hardware and IoT",
    eyebrow: "Embedded System",
    short: "Assistive device using an ultrasonic sensor, buzzer, and vibration alerts.",
    detail: "Alerts are triggered at carefully tested 20 cm and 30 cm thresholds.",
    tags: ["Arduino Uno", "C++", "Ultrasonic"],
    document: "/smart-walking-stick-documentation.docx",
    images: [
      { src: "/walking-stick-sensor.jpeg", alt: "Ultrasonic sensor mounted near the end of the smart walking stick" },
      { src: "/walking-stick-assembly.jpeg", alt: "Smart walking stick during hardware assembly" },
      { src: "/walking-stick-controller.jpeg", alt: "Arduino controller, battery, buzzer, and handle assembly" },
      { src: "/walking-stick-complete.jpeg", alt: "Completed smart walking stick prototype" },
    ],
  },
  {
    title: "ASL Hand Gesture Recognition",
    group: "AI and Data",
    eyebrow: "Machine Learning",
    short: "Computer vision project that recognizes ASL hand gestures.",
    detail: "Explores practical image classification and accessible interaction.",
    tags: ["Computer Vision", "ML", "Python"],
  },
  {
    title: "Easy OCR",
    group: "QA and Software",
    eyebrow: "Web Application",
    short: "A focused text-recognition web app built with Python.",
    detail: "Extracts readable text from uploaded images through a simple web flow.",
    tags: ["Python", "OCR", "Web"],
  },
  {
    title: "Purrfect Match",
    group: "QA and Software",
    eyebrow: "Product Design",
    short: "A friendly pet-matching mobile product prototype.",
    detail: "Designed in Figma from user flows through interactive interface states.",
    tags: ["Figma", "UI/UX", "Prototype"],
    images: [
      { src: "/purrfect-match-login.png", alt: "Purrfect Match login screen" },
      { src: "/purrfect-match-about.png", alt: "Purrfect Match mission and about screen" },
      { src: "/purrfect-match-landing.png", alt: "Purrfect Match pet adoption landing screen" },
    ],
  },
  {
    title: "LAN Tester",
    group: "Hardware and IoT",
    eyebrow: "Hardware",
    short: "Custom PCB network cable tester.",
    detail: "Built with NE555 timer and 4017B counter ICs for cable validation.",
    tags: ["PCB Design", "NE555", "4017B"],
    images: [
      { src: "/lan-tester-pcb-wiring.png", alt: "LAN tester PCB front and back wiring layout" },
      { src: "/lan-tester-pcb-3d.png", alt: "3D rendering of the LAN tester PCB and components" },
    ],
    videos: [
      { src: "/lan-tester-breadboard.mp4", label: "Breadboard prototype before PCB fabrication" },
      { src: "/lan-tester-demo-1.mp4", label: "LAN tester project demonstration" },
      { src: "/lan-tester-demo-2.mp4", label: "LAN tester final hardware demonstration" },
    ],
  },
];

const skillGroups = [
  ["Testing", "Manual Testing", "Functional Testing", "Regression Testing", "Test Case Design", "Bug Reporting"],
  ["Tools", "ClickUp", "Google Sheets", "Git / GitHub", "Figma"],
  ["Programming & Data", "Python", "Java", "C++", "PHP", "SQL / MySQL"],
  ["Hardware", "Arduino", "ESP32", "Raspberry Pi", "PCB Design"],
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1000, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function MagneticLink({ href, children, className = "", download }: { href: string; children: ReactNode; className?: string; download?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={href}
      download={download}
      className={`magnetic ${className}`}
      onMouseMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * 0.1}px, ${(event.clientY - box.top - box.height / 2) * 0.1}px)`;
      }}
      onMouseLeave={(event) => (event.currentTarget.style.transform = "")}
    >
      {children}
    </a>
  );
}

function updateIconConnections(container: HTMLElement) {
  const bounds = container.getBoundingClientRect();
  const icons = Array.from(container.querySelectorAll<HTMLElement>(".repel-icon"));
  const lines = Array.from(container.querySelectorAll<SVGLineElement>(".icon-connections line"));
  let lineIndex = 0;

  for (let first = 0; first < icons.length; first += 1) {
    for (let second = first + 1; second < icons.length; second += 1) {
      const line = lines[lineIndex++];
      const a = icons[first].getBoundingClientRect();
      const b = icons[second].getBoundingClientRect();
      const x1 = a.left + a.width / 2 - bounds.left;
      const y1 = a.top + a.height / 2 - bounds.top;
      const x2 = b.left + b.width / 2 - bounds.left;
      const y2 = b.top + b.height / 2 - bounds.top;
      const distance = Math.hypot(x2 - x1, y2 - y1);
      line.setAttribute("x1", String(x1));
      line.setAttribute("y1", String(y1));
      line.setAttribute("x2", String(x2));
      line.setAttribute("y2", String(y2));
      const connectionRange = 95;
      const connectionStrength = Math.max(0, (connectionRange - distance) / connectionRange);
      line.style.opacity = distance < connectionRange ? String(0.3 + connectionStrength * 0.7) : "0";
    }
  }
}

function bumpIconsFromProfile(container: HTMLElement) {
  const profile = container.querySelector<HTMLElement>(".profile");
  if (!profile) return;
  const profileBox = profile.getBoundingClientRect();
  const centerX = profileBox.left + profileBox.width / 2;
  const centerY = profileBox.top + profileBox.height / 2;
  container.querySelectorAll<HTMLElement>(".repel-icon").forEach((icon) => {
    const iconBox = icon.getBoundingClientRect();
    const collisionRadius = profileBox.width / 2 + Math.max(iconBox.width, iconBox.height) / 2 + 4;
    const iconX = iconBox.left + iconBox.width / 2;
    const iconY = iconBox.top + iconBox.height / 2;
    const dx = iconX - centerX;
    const dy = iconY - centerY;
    const distance = Math.hypot(dx, dy);
    if (distance >= collisionRadius || distance === 0) {
      icon.style.transitionDuration = "";
      return;
    }

    const push = collisionRadius - distance + 8;
    const currentX = Number(icon.dataset.x ?? 0);
    const currentY = Number(icon.dataset.y ?? 0);
    const nextX = currentX + (dx / distance) * push;
    const nextY = currentY + (dy / distance) * push;
    icon.dataset.x = String(nextX);
    icon.dataset.y = String(nextY);
    icon.style.transitionDuration = "0ms";
    icon.style.transform = `translate(${nextX}px, ${nextY}px)`;
  });
}

export default function App() {
  const [introVisible, setIntroVisible] = useState(() => {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
      // Enable later for once-per-tab playback: if (sessionStorage.getItem("portfolio-intro-played")) return false; sessionStorage.setItem("portfolio-intro-played", "true");
      return true;
    } catch {
      return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  });
  const [revealHero, setRevealHero] = useState(false);
  const [light, setLight] = useState(false);
  const [typed, setTyped] = useState("");
  const [bugs, setBugs] = useState<number[]>([]);
  const [expandedExperience, setExpandedExperience] = useState(false);
  const [filter, setFilter] = useState("All");
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [testStep, setTestStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("about");
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const verticalLineRef = useRef<HTMLDivElement>(null);
  const horizontalLineRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!introVisible) return;
    const previousOverflow = document.body.style.overflow;
    const animations: Animation[] = [];
    let stopped = false;
    const finishIntro = () => {
      if (stopped) return;
      stopped = true;
      animations.forEach((animation) => animation.cancel());
      setIntroVisible(false);
      setRevealHero(true);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") finishIntro();
    };
    document.body.style.overflow = "hidden";
    addEventListener("keydown", onKeyDown);

    const play = async () => {
      const overlay = introRef.current;
      const vertical = verticalLineRef.current;
      const horizontal = horizontalLineRef.current;
      const leftCurtain = leftCurtainRef.current;
      const rightCurtain = rightCurtainRef.current;
      if (!overlay || !vertical || !horizontal || !leftCurtain || !rightCurtain) return finishIntro();

      const run = async (element: HTMLElement, frames: Keyframe[], options: KeyframeAnimationOptions) => {
        const animation = element.animate(frames, options);
        animations.push(animation);
        await animation.finished.catch(() => undefined);
      };

      await run(vertical, [{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], {
        duration: 250,
        easing: "cubic-bezier(.65,0,.35,1)",
        fill: "forwards",
      });
      if (stopped) return;

      await Promise.all([
        run(leftCurtain, [{ transform: "translateX(-105%)" }, { transform: "translateX(0)" }], {
          duration: 500,
          easing: "cubic-bezier(.65,0,.35,1)",
          fill: "forwards",
        }),
        run(rightCurtain, [{ transform: "translateX(105%)" }, { transform: "translateX(0)" }], {
          duration: 500,
          easing: "cubic-bezier(.65,0,.35,1)",
          fill: "forwards",
        }),
      ]);
      if (stopped) return;

      await run(overlay, [{ opacity: 1 }, { opacity: 1 }], { duration: 150 });
      if (stopped) return;
      vertical.hidden = true;
      leftCurtain.hidden = true;
      rightCurtain.hidden = true;
      horizontal.style.opacity = "1";

      await run(horizontal, [
        { transform: "rotate(-20deg) scaleX(0)" },
        { transform: "rotate(0deg) scaleX(1)" },
      ], {
        duration: 400,
        easing: "ease-out",
        fill: "forwards",
      });
      if (stopped) return;

      const dotScale = 4 / (innerWidth * 1.3);
      await run(horizontal, [
        { clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)", transform: "rotate(0deg) scaleX(1)" },
        { clipPath: "polygon(0 50%,100% 0,100% 100%)", transform: `rotate(0deg) scaleX(${dotScale})` },
      ], {
        duration: 400,
        easing: "ease-in",
        fill: "forwards",
      });
      if (stopped) return;

      horizontal.hidden = true;
      const supportsMask =
        "registerProperty" in CSS &&
        (CSS.supports("mask-image", "radial-gradient(circle, transparent 0px, #ffffff 1px)") ||
          CSS.supports("-webkit-mask-image", "radial-gradient(circle, transparent 0px, #ffffff 1px)"));

      if (supportsMask) {
        const mask = "radial-gradient(circle at 50% 50%, transparent var(--intro-radius), #ffffff calc(var(--intro-radius) + 1px))";
        overlay.style.maskImage = mask;
        overlay.style.setProperty("-webkit-mask-image", mask);
        await run(overlay, [
          { "--intro-radius": "0px" },
          { "--intro-radius": "132px", offset: 0.72 },
          { "--intro-radius": "120px" },
        ] as Keyframe[], {
          duration: 350,
          easing: "ease-out",
          fill: "forwards",
        });
        if (stopped) return;

        const finalRadius = Math.hypot(innerWidth, innerHeight) / 2 + 2;
        const heroTimer = window.setTimeout(() => setRevealHero(true), 960);
        await run(overlay, [
          { "--intro-radius": "120px" },
          { "--intro-radius": `${finalRadius}px` },
        ] as Keyframe[], {
          duration: 1600,
          easing: "ease-in-out",
          fill: "forwards",
        });
        window.clearTimeout(heroTimer);
      } else {
        const heroTimer = window.setTimeout(() => setRevealHero(true), 480);
        await run(overlay, [{ opacity: 1 }, { opacity: 0 }], {
          duration: 800,
          easing: "ease-in-out",
          fill: "forwards",
        });
        window.clearTimeout(heroTimer);
      }
      finishIntro();
    };
    void play();

    return () => {
      stopped = true;
      animations.forEach((animation) => animation.cancel());
      document.body.style.overflow = previousOverflow;
      removeEventListener("keydown", onKeyDown);
    };
  }, [introVisible]);

  useEffect(() => {
    if (!revealHero) return;
    const elements = [
      ...document.querySelectorAll<HTMLElement>(".hero-copy > *"),
      document.querySelector<HTMLElement>(".profile-zone"),
    ].filter((element): element is HTMLElement => Boolean(element));
    elements.forEach((element, index) => {
      element.animate(
        [
          { opacity: 0, transform: "translateY(1rem)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 600, delay: index * 90, easing: "ease-out", fill: "both" },
      );
    });
  }, [revealHero]);

  useEffect(() => {
    const phrases = ["Junior QA Engineer", "Junior Software Developer", "Manual & Functional Tester", "Bug Hunter"];
    let phrase = 0;
    let index = 0;
    let deleting = false;
    const timer = window.setInterval(() => {
      const target = phrases[phrase];
      index += deleting ? -1 : 1;
      setTyped(target.slice(0, index));
      if (index === target.length) deleting = true;
      if (index === 0 && deleting) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
      }
    }, 95);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max ? (scrollY / max) * 100 : 0);
      const ids = ["about", "experience", "projects", "skills", "certifications", "contact"];
      const current = ids.findLast((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top < 180 : false;
      });
      if (current) setActive(current);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("shown")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const updateConnections = () => updateIconConnections(hero);
    let collisionFrame = 0;
    const enforceCollision = () => {
      bumpIconsFromProfile(hero);
      collisionFrame = requestAnimationFrame(enforceCollision);
    };
    collisionFrame = requestAnimationFrame(enforceCollision);
    requestAnimationFrame(updateConnections);
    const connectionTimer = window.setInterval(updateConnections, 100);
    addEventListener("resize", updateConnections);
    return () => {
      cancelAnimationFrame(collisionFrame);
      window.clearInterval(connectionTimer);
      removeEventListener("resize", updateConnections);
    };
  }, []);

  const squashBug = (index: number) => {
    if (!bugs.includes(index)) setBugs([...bugs, index]);
  };

  const runTests = () => {
    setTestStep(0);
    [1, 2, 3].forEach((step, index) => window.setTimeout(() => setTestStep(step), 600 * (index + 1)));
  };

  return (
    <main className={`${light ? "theme-light" : ""} ${introVisible ? "intro-active" : ""}`}>
      {introVisible && (
        <div className="intro-overlay" aria-label="Portfolio introduction" ref={introRef}>
          <div className="intro-curtain intro-curtain-left" ref={leftCurtainRef} />
          <div className="intro-curtain intro-curtain-right" ref={rightCurtainRef} />
          <div className="intro-line intro-line-vertical" ref={verticalLineRef} />
          <div className="intro-line intro-line-horizontal" ref={horizontalLineRef} />
          <button
            className="intro-skip"
            type="button"
            onClick={() => {
              setIntroVisible(false);
              setRevealHero(true);
            }}
          >
            Skip intro
          </button>
        </div>
      )}
      <div className="mesh" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand">JC<span>.</span></a>
          <div className="nav-links">
            {["About", "Experience", "Projects", "Skills", "Certifications", "Contact"].map((item) => (
              <a key={item} className={active === item.toLowerCase() ? "active" : ""} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          <button className="theme-toggle" onClick={() => setLight(!light)} aria-label="Toggle color theme">
            <span>{light ? "☾" : "☼"}</span>
            <i />
          </button>
        </nav>
      </header>

      <section
        className="hero container"
        id="top"
        ref={heroRef}
        onMouseMove={(event) => {
          const box = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - box.left}px`);
          event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - box.top}px`);
          event.currentTarget.querySelectorAll<HTMLElement>(".repel-icon").forEach((icon) => {
            const iconBox = icon.getBoundingClientRect();
            const dx = iconBox.left + iconBox.width / 2 - event.clientX;
            const dy = iconBox.top + iconBox.height / 2 - event.clientY;
            const distance = Math.hypot(dx, dy);
            if (distance < 50) {
              const force = (50 - distance) / 50;
              const angle = Math.atan2(dy, dx);
              const currentX = Number(icon.dataset.x ?? 0);
              const currentY = Number(icon.dataset.y ?? 0);
              const nextX = currentX + Math.cos(angle) * force * 24;
              const nextY = currentY + Math.sin(angle) * force * 24;
              icon.dataset.x = String(nextX);
              icon.dataset.y = String(nextY);
              icon.style.transform = `translate(${nextX}px, ${nextY}px) rotate(${force * 8}deg)`;
            }
          });
          requestAnimationFrame(() => updateIconConnections(event.currentTarget));
        }}
      >
        <div className="cursor-glow" />
        <svg className="icon-connections" aria-hidden="true">
          {Array.from({ length: 435 }, (_, index) => <line key={index} />)}
        </svg>
        {[
          { left: "66%", top: "18%", delay: "0s", angle: "0deg" },
          { left: "77%", top: "10%", delay: "-2s", angle: "38deg" },
          { left: "84%", top: "24%", delay: "-1s", angle: "78deg" },
          { left: "88%", top: "68%", delay: "-3s", angle: "122deg" },
          { left: "77%", top: "80%", delay: "-1.5s", angle: "168deg" },
          { left: "94%", top: "84%", delay: "-2.5s", angle: "214deg" },
          { left: "25%", top: "10%", delay: "-.5s", angle: "266deg" },
          { left: "8%", top: "67%", delay: "-3.5s", angle: "318deg" },
          { left: "55%", top: "30%", delay: "-1.2s", angle: "24deg" },
          { left: "60%", top: "72%", delay: "-2.8s", angle: "146deg" },
          { left: "34%", top: "86%", delay: "-.8s", angle: "238deg" },
          { left: "96%", top: "45%", delay: "-3.2s", angle: "292deg" },
          { left: "15%", top: "25%", delay: "-1.7s", angle: "52deg" },
          { left: "39%", top: "22%", delay: "-4.1s", angle: "104deg" },
          { left: "52%", top: "56%", delay: "-2.1s", angle: "184deg" },
          { left: "69%", top: "91%", delay: "-3.8s", angle: "332deg" },
          { left: "19%", top: "74%", delay: "-.3s", angle: "16deg" },
          { left: "91%", top: "38%", delay: "-4.5s", angle: "196deg" },
          { left: "46%", top: "94%", delay: "-1.1s", angle: "252deg" },
          { left: "6%", top: "42%", delay: "-2.6s", angle: "344deg" },
          { left: "12%", top: "12%", delay: "-1.9s", angle: "74deg" },
          { left: "31%", top: "34%", delay: "-3.3s", angle: "128deg" },
          { left: "42%", top: "63%", delay: "-.7s", angle: "202deg" },
          { left: "57%", top: "9%", delay: "-4.7s", angle: "278deg" },
          { left: "63%", top: "48%", delay: "-2.3s", angle: "326deg" },
          { left: "73%", top: "62%", delay: "-1.4s", angle: "44deg" },
          { left: "83%", top: "93%", delay: "-3.7s", angle: "112deg" },
          { left: "97%", top: "58%", delay: "-.9s", angle: "176deg" },
          { left: "23%", top: "93%", delay: "-4.3s", angle: "234deg" },
          { left: "4%", top: "91%", delay: "-2.9s", angle: "306deg" },
        ].map((item, index) => (
          <div
            className="float-icon repel-icon float-triangle"
            key={`triangle-${index}`}
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.delay,
              "--angle": item.angle,
              "--wander-x": `${((index * 31) % 55) - 27}px`,
              "--wander-y": `${((index * 47) % 49) - 24}px`,
              "--wander-x-2": `${((index * 19) % 51) - 25}px`,
              "--wander-y-2": `${((index * 23) % 57) - 28}px`,
              "--wander-speed": `${7 + (index % 6)}s`,
            } as CSSProperties}
          >
            <Icon name="triangle" />
          </div>
        ))}
        <div className="hero-copy">
          <div className="eyebrow"><span /> AVAILABLE FOR JUNIOR QA & SOFTWARE DEVELOPER ROLES</div>
          <p className="hello">Hello, I’m</p>
          <h1>Jhudiel F.<br />Cordonato</h1>
          <div className="typing"><span>&gt; </span>{typed}<i /></div>
          <p className="hero-lead">
            I find problems before users do. <strong>110+ test cases</strong> written,
            <strong> 7+ modules</strong> tested.
          </p>
          <div className="hero-actions">
            <MagneticLink href="#projects" className="button primary">View my work <span>→</span></MagneticLink>
            <MagneticLink
              href="/Jhudiel-Cordonato-Resume.pdf"
              download="Jhudiel-Cordonato-Resume.pdf"
              className="button secondary"
            >
              Download resume
            </MagneticLink>
          </div>
        </div>
        <div className="profile-zone">
          <div className="profile-orbit orbit-a" />
          <div className="profile-orbit orbit-b" />
          <div className="profile">
            <img src="/jhudiel-profile.jpg" alt="Jhudiel F. Cordonato" />
          </div>
          <div className="hunt-panel">
            <div><Icon name="bug" /> BUG HUNT</div>
            <strong>{bugs.length === 5 ? "PASS — ALL CLEAR!" : `Bugs found: ${bugs.length}/5`}</strong>
          </div>
        </div>
        {[["4%", "18%"], ["44%", "7%"], ["48%", "90%"], ["96%", "12%"], ["3%", "84%"]].map(([left, top], index) => (
          <button
            key={index}
            aria-label={`Find bug ${index + 1}`}
            className={`hunt-bug ${bugs.includes(index) ? "squashed" : ""}`}
            style={{ left, top }}
            onClick={() => squashBug(index)}
          >
            <Icon name="bug" />
          </button>
        ))}
        {bugs.length === 5 && <div className="confetti">{Array.from({ length: 18 }, (_, i) => <i key={i} />)}</div>}
      </section>

      <section className="stats container reveal">
        {stats.map((stat) => (
          <article
            className="glass stat-card"
            key={stat.label}
            onMouseMove={(event) => {
              const box = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.transform = `perspective(700px) rotateX(${-(event.clientY - box.top - box.height / 2) / 18}deg) rotateY(${(event.clientX - box.left - box.width / 2) / 18}deg)`;
            }}
            onMouseLeave={(event) => (event.currentTarget.style.transform = "")}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="section container reveal" id="about">
        <div className="section-label"><span>01</span> ABOUT.EXE</div>
        <div className="about-grid">
          <h2>Building reliable experiences,<br /><em>one detail at a time.</em></h2>
          <div>
            <p>
              I’m a Computer Engineering graduate from Laguna State Polytechnic University – Siniloan,
              with a 300-hour QA internship. I’m detail-oriented and enjoy checking that systems work
              the way people rely on them.
            </p>
            <p>I’m growing into API testing and automation while looking for a team where curiosity, quality, and clear communication matter.</p>
          </div>
        </div>
        <article className="glass education-card">
          <span className="card-icon"><Icon name="check" /></span>
          <div><small>EDUCATION</small><h3>BS Computer Engineering</h3><p>Laguna State Polytechnic University – Siniloan</p></div>
          <strong>2026</strong>
        </article>
      </section>

      <section className="section container reveal" id="experience">
        <div className="section-label"><span>02</span> EXPERIENCE.LOG</div>
        <div className="experience-grid">
          <div className="timeline">
            <div className="timeline-line" />
            <button className={`glass experience-card ${expandedExperience ? "expanded" : ""}`} onClick={() => setExpandedExperience(!expandedExperience)}>
              <div className="job-head">
                <div><small>Simplevia Technologies Inc.</small><h3>QA Engineer Intern</h3></div>
                <time>MAR—MAY 2026</time>
              </div>
              <p>300-hour quality assurance internship testing a government Administrative Information System.</p>
              <div className="expand-label">{expandedExperience ? "Hide full report −" : "View full report +"}</div>
              <ul>
                <li>Tested 7+ modules: Payroll and Remittances, Document Management, Budget Account Transactions, Supply and Property Management, Disposal and COA Clearance, Reports, and Barangay Management.</li>
                <li>Wrote 110+ test cases across 13 Barangay Management System modules.</li>
                <li>Ran functional, regression, and validation tests and retested deployed fixes.</li>
                <li>Reported bugs in Google Sheets and ClickUp with steps, expected results, and actual results.</li>
                <li>Rated 90/100 by supervisor, including 95/100 for punctuality.</li>
              </ul>
            </button>
          </div>
          <aside className="terminal glass">
            <div className="terminal-bar"><i /><i /><i /><span>test-run.sh</span></div>
            <code><span>$ npm run qa:test</span><br /><br />
              <b>&gt; Running: Barangay Management System</b><br />
              <b>&gt; 13 modules ...</b><br />
              <b>&gt; 110+ test cases written ... <mark>PASS</mark></b><br />
              <b>&gt; Bugs reported ... retested ... <mark>VERIFIED</mark></b><br /><br />
              <span className="cursor">_</span>
            </code>
          </aside>
        </div>
      </section>

      <section className="section reveal" id="projects">
        <div className="container">
          <div className="section-label"><span>03</span> PROJECTS.JSON</div>
          <div className="section-heading"><h2>Projects built with purpose.</h2><p>Click a card to inspect the details.</p></div>
          <div className="filters">
            {["All", "QA and Software", "Hardware and IoT", "AI and Data"].map((item) => (
              <button key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
          <div className="project-grid">
            {projects.filter((p) => filter === "All" || p.group === filter).map((project) => (
              <article
                className={`glass project-card ${project.images ? "featured" : ""} ${openProject === project.title ? "open" : ""}`}
                key={project.title}
                onClick={() => setOpenProject(openProject === project.title ? null : project.title)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenProject(openProject === project.title ? null : project.title);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="project-meta"><span>{project.eyebrow}</span><i>↗</i></div>
                {project.cover && <img className="project-cover" src={project.cover} alt={`${project.title} logo`} />}
                <h3>{project.title}</h3>
                <p>{project.short}</p>
                <div className="project-detail">
                  <p>{project.detail}</p>
                  {project.chart && (
                    <div className="chart">
                      {[["Accuracy", 97.71], ["Precision", 90.01], ["Recall", 92.32], ["F1", 91.15]].map(([label, value]) => (
                        <div key={label as string}><span><i>{label}</i><b>{value}%</b></span><em><i style={{ width: `${value}%` }} /></em></div>
                      ))}
                    </div>
                  )}
                  {project.images && (
                    <div className="project-gallery">
                      {project.images.map((image) => (
                        <img key={image.src} src={image.src} alt={image.alt} />
                      ))}
                    </div>
                  )}
                  {project.videos && (
                    <div className="project-gallery project-videos">
                      {project.videos.map((video) => (
                        <figure key={video.src}>
                          <video
                            src={video.src}
                            controls
                            preload="metadata"
                            onClick={(event) => event.stopPropagation()}
                            onKeyDown={(event) => event.stopPropagation()}
                          />
                          <figcaption>{video.label}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                  {project.document && (
                    <a
                      className="project-doc"
                      href={project.document}
                      download
                      onClick={(event) => event.stopPropagation()}
                    >
                      Download full documentation
                    </a>
                  )}
                </div>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
            {(filter === "All" || filter === "QA and Software") && (
              <article className="glass test-card">
                <div className="project-meta"><span>QA WRITING SAMPLE</span><Icon name="check" /></div>
                <h3>Sample Test Cases</h3>
                <div className="test-table">
                  <div><b>ID</b><b>Title</b><b>Status</b></div>
                  {["Valid user login", "Required fields", "Invalid credentials"].map((title, index) => (
                    <div key={title}><span>TC-0{index + 1}</span><span>{title}</span><span className={testStep > index ? "pass" : ""}>{testStep > index ? "Pass" : "Not run"}</span></div>
                  ))}
                </div>
                <button className="run-button" onClick={runTests} disabled={testStep > 0 && testStep < 3}>{testStep === 3 ? "Run again" : "▶ Run tests"}</button>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="section container reveal" id="skills">
        <div className="section-label"><span>04</span> SKILLS.CONFIG</div>
        <div className="skills-grid">
          {skillGroups.map(([title, ...items]) => (
            <article className="glass skill-card" key={title}>
              <h3>{title}</h3>
              <div className="chips">{items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="glass learning">
          <div><span>● CURRENTLY LEARNING</span><strong>Postman / API Testing & Automation</strong></div>
          <div className="learning-bar"><i /></div>
          <small>IN PROGRESS</small>
        </div>
      </section>

      <section className="section container reveal" id="certifications">
        <div className="section-label"><span>05</span> CREDENTIALS.VERIFIED</div>
        <div className="credential-grid">
          {[
            ["QA Internship Completion", "Simplevia Technologies Inc.", "300 hours"],
            ["Supervisor Evaluation", "Quality assurance performance", "90 / 100"],
            ["BS Computer Engineering", "LSPU – Siniloan", "Class of 2026"],
          ].map(([title, org, value]) => (
            <article className="glass credential" key={title}>
              <Icon name="check" /><div><h3>{title}</h3><p>{org}</p></div><strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section reveal" id="contact">
        <div className="container">
          <div className="section-label"><span>06</span> CONTACT.ME</div>
          <h2>Found a bug in my portfolio?<br /><em>Just kidding. Let’s talk.</em></h2>
          <p>I’m ready to bring curiosity, discipline, and a quality-first mindset to a Junior QA Engineer, Software Tester, or Junior Software Developer role in the Philippines.</p>
          <div className="contact-links">
            <MagneticLink href="mailto:jhudielcordonato@gmail.com" className="contact-link"><Icon name="mail" /><span>Email</span></MagneticLink>
            <MagneticLink href="https://www.linkedin.com/in/jhudielc" className="contact-link"><Icon name="linkedin" /><span>LinkedIn</span></MagneticLink>
            <MagneticLink href="https://github.com/BUMBUM-ODEL" className="contact-link"><Icon name="github" /><span>GitHub</span></MagneticLink>
          </div>
        </div>
      </section>

      <footer><div className="container"><span>© 2026 Jhudiel F. Cordonato</span><span>DESIGNED FOR QUALITY // BUILT WITH CARE</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
