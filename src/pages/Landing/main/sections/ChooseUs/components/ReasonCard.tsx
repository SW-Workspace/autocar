export interface ReasonCardProps {
  color: string;
  icon: any;
  title: string;
  description: string;
}

export default function ReasonCard(props: ReasonCardProps) {
  return (
    <>
      <div
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-slate-200/80 shadow-md shadow-black/20 py-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up bg-white"
        style={{ animationDelay: "0s" }}
      >
        <div className="p-6 space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#0056A4]/10 flex items-center justify-center">
            <props.icon className={props.color} />
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            {props.title}
          </h3>
          <p className="text-muted-foreground text-pretty text-neutral-500">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
