interface PainPointCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PainPointCard = ({ icon, title, subtitle, description }: PainPointCardProps) => {
  return (
    <div className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all">
      <div className="flex flex-col gap-3">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-primary font-medium mb-2">{subtitle}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
