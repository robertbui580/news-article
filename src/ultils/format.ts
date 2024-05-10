import { format } from "date-fns";

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat().format(number);
};

export const formatNameToInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const formatTimeToString = (time: Date) => {
  return format(new Date(time), "MMM d, yyyy HH:mm:ss a");
};
