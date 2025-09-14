import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to merge Tailwind + conditional classNames.
 * Example:
 *   cn("bg-red-500", isActive && "text-white")
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
