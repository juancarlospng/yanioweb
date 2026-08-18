import type { Language } from "@/content/translations";

const languageOptions: { value: Language; short: string; label: string }[] = [
  { value: "es", short: "ES", label: "Español" },
  { value: "en", short: "EN", label: "English" },
  { value: "de", short: "DE", label: "Deutsch" },
];

export function LanguageSwitcher() {
  return <label className="language-switcher" data-i18n-ignore>
    <span className="language-icon" aria-hidden="true">◎</span>
    <span className="sr-only">Language</span>
    <select defaultValue="en" data-language-select aria-label="Language">
      {languageOptions.map((option) => <option value={option.value} key={option.value}>{option.short} · {option.label}</option>)}
    </select>
  </label>;
}
