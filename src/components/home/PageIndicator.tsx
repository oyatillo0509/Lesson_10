import { useScrollSpy } from "../../hooks/useScrollSpy";

interface TimelineItem {
  id: string;
  label: string;
  href: string;
}

const timelineItems: TimelineItem[] = [
  { id: "hero", label: "Start", href: "#hero" },
  { id: "get-started", label: "01", href: "#get-started" },
  { id: "equipment", label: "02", href: "#equipment" },
  { id: "beyond", label: "03", href: "#beyond" },
];

export function PageIndicator() {
  const activeSection = useScrollSpy(timelineItems.map((item) => item.id));

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8 z-50">
      <div className="w-[1px] h-[80px] bg-white/30" />
      <div className="text-white space-y-4 [writing-mode:vertical-rl]">
        {timelineItems.map(({ id, label, href }) => (
          <a
            key={id}
            href={href}
            className={`
              cursor-pointer transition-all duration-300
              ${
                activeSection === id
                  ? "text-yellow-400 font-medium scale-110"
                  : "text-white/70 hover:text-yellow-400"
              }
            `}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(href)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="w-[1px] h-[80px] bg-white/30" />
    </div>
  );
}
