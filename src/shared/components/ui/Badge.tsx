import type { ReactNode } from "react";

interface BadgeProps {
  color: string;
  children: ReactNode;
  className?: string;
}

export const Badge = (props: BadgeProps) => {
  return (
    <div
      className={`badge-container select-none mx-auto font-semibold text-sm items-center gap-2 justify-center flex py-2 px-4 rounded-full w-max ${props.className} ${props.color}`}
    >
      {props.children}
    </div>
  );
};
