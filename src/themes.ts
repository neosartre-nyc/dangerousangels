// src/themes.ts
export type ThemeName = "light" | "dark" | "ocean" | "forest";

export const themes: Record<ThemeName, { bg: string; text: string }> = {
  light:  { bg: "bg-white",     text: "text-slate-900" },
  dark:   { bg: "bg-gray-950",  text: "text-white" },
  blue:  { bg: "bg-dacBlue-900", text: "text-white" }, // white maintains contrast
  sage: { bg: "bg-dacSage-7000", text: "text-white" },
};

export function getTheme(themeName: ThemeName) {
  return themes[themeName] || themes.light; // fallback to light
}
