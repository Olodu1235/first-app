import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const newLandingPaddingHorizontal = `
  px-[16px]
  sm:px-[40px]
  md:px-[70px]
  lg:px-[100px]
  xl:px-[148px]
`;
