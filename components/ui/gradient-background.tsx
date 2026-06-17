import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  variant?: "mesh" | "radial-primary" | "radial-secondary" | "hero";
  className?: string;
  children?: React.ReactNode;
}

export function GradientBackground({
  variant = "mesh",
  className,
  children,
}: GradientBackgroundProps) {
  const variantClass = {
    mesh: "gradient-mesh",
    "radial-primary": "gradient-radial-primary",
    "radial-secondary": "gradient-radial-secondary",
    hero: "gradient-mesh gradient-radial-primary",
  };

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", variantClass[variant], className)}>
      {children}
    </div>
  );
}

interface GradientBorderProps {
  className?: string;
  children: React.ReactNode;
}

export function GradientBorder({ className, children }: GradientBorderProps) {
  return (
    <div className={cn("relative rounded-2xl p-px", className)}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-transparent to-secondary/50" />
      <div className="relative rounded-2xl bg-background">{children}</div>
    </div>
  );
}
