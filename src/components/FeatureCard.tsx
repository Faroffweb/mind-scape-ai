import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: "primary" | "accent" | "feature";
}

export const FeatureCard = ({ icon, title, description, features, gradient }: FeatureCardProps) => {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    accent: "bg-gradient-accent", 
    feature: "bg-gradient-feature"
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-ai-purple/50 transition-all duration-300 hover:shadow-glow">
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 w-full h-1 ${gradientClasses[gradient]}`} />
      
      <div className="p-8">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${gradientClasses[gradient]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        {/* Features list */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-ai-purple mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button variant="ghost" className="group/btn w-full justify-between">
          Try {title}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};