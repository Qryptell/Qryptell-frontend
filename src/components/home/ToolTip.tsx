"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { TiInfoLarge } from "react-icons/ti";

export default function ToolTip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <p>
            <TiInfoLarge size="30" />
          </p>
        </TooltipTrigger>
        <TooltipContent className="bg-white text-black py-2 px-4 rounded-md">
          <Link href="/" className="font-medium">
            About us
          </Link>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
