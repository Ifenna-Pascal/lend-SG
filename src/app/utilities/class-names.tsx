import { twMerge } from "tailwind-merge";
import { ClassValue } from "clsx";
import clsx from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
