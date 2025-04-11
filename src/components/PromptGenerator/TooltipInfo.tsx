import { Info } from "lucide-react";

type TooltipInfoProps = {
  text: string;
};

export default function TooltipInfo({ text }: TooltipInfoProps) {
  return (
    <span className="ml-1 relative pointer-events-none z-0">
      <Info className="w-4 h-4 text-primary cursor-pointer peer pointer-events-auto" />
      <span className="absolute left-full ml-2 w-60 text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-100 z-50 pointer-events-none">
        {text}
      </span>
    </span>
  );
}
