"use client";

import { useEffect } from "react";
import { translations, type Language } from "@/content/translations";

declare global { interface Window { ycSetLanguage?: (language: Language) => void } }

export function LanguageRuntime() {
  useEffect(() => {
    const supported = new Set<Language>(["en", "es", "de"]);
    const originalText = new WeakMap<Node, string>();
    const originalAttributes = new WeakMap<Element, Map<string, string>>();
    const attributes = ["aria-label", "title", "placeholder", "alt"];
    let activeLanguage: Language = "en";

    const translateValue = (value: string, language: Language) => {
      if (language === "en") return value;
      const direct = translations[language]?.[value];
      if (direct) return direct;
      const emailError = value.match(/^Your message could not be sent\. Please email (.+) directly\.$/);
      if (emailError) return language === "es" ? `No se pudo enviar tu mensaje. Escribe directamente a ${emailError[1]}.` : `Ihre Nachricht konnte nicht gesendet werden. Schreiben Sie direkt an ${emailError[1]}.`;
      return value;
    };

    const ignored = (node: Node) => {
      const element = node.nodeType === Node.ELEMENT_NODE ? node as Element : node.parentElement;
      return !element || Boolean(element.closest("script, style, noscript, [data-i18n-ignore]"));
    };

    const translateText = (node: Node, language: Language) => {
      if (ignored(node)) return;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue || "");
      const source = originalText.get(node) || "";
      const clean = source.trim();
      if (!clean) return;
      const leading = source.match(/^\s*/)?.[0] || "";
      const trailing = source.match(/\s*$/)?.[0] || "";
      const next = leading + translateValue(clean, language) + trailing;
      if (node.nodeValue !== next) node.nodeValue = next;
    };

    const translateElement = (element: Element, language: Language) => {
      if (ignored(element)) return;
      let originals = originalAttributes.get(element);
      if (!originals) { originals = new Map(); originalAttributes.set(element, originals); }
      attributes.forEach((attribute) => {
        const current = element.getAttribute(attribute);
        if (current === null) return;
        if (!originals!.has(attribute)) originals!.set(attribute, current);
        const next = translateValue(originals!.get(attribute) || current, language);
        if (current !== next) element.setAttribute(attribute, next);
      });
    };

    const translateTree = (root: Node, language: Language) => {
      if (root.nodeType === Node.TEXT_NODE) { translateText(root, language); return; }
      if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
      if (root.nodeType === Node.ELEMENT_NODE) translateElement(root as Element, language);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let current = walker.nextNode();
      while (current) {
        if (current.nodeType === Node.TEXT_NODE) translateText(current, language);
        else translateElement(current as Element, language);
        current = walker.nextNode();
      }
    };

    const applyLanguage = (language: Language, remember = true) => {
      if (!supported.has(language)) return;
      activeLanguage = language;
      document.documentElement.lang = language;
      document.querySelectorAll<HTMLSelectElement>("[data-language-select]").forEach((select) => { select.value = language; });
      translateTree(document.body, language);
      if (remember) { try { localStorage.setItem("yc-language", language); } catch {} }
    };

    const onChange = (event: Event) => {
      const select = (event.target as Element | null)?.closest?.("[data-language-select]") as HTMLSelectElement | null;
      if (select && supported.has(select.value as Language)) applyLanguage(select.value as Language);
    };
    document.addEventListener("change", onChange, true);

    const observer = new MutationObserver((mutations) => mutations.forEach((mutation) => {
      if (mutation.type === "characterData") translateText(mutation.target, activeLanguage);
      mutation.addedNodes.forEach((node) => translateTree(node, activeLanguage));
    }));
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });

    let saved: Language = "en";
    try { const candidate = localStorage.getItem("yc-language") as Language | null; if (candidate && supported.has(candidate)) saved = candidate; } catch {}
    applyLanguage(saved, false);
    window.ycSetLanguage = applyLanguage;

    return () => { observer.disconnect(); document.removeEventListener("change", onChange, true); delete window.ycSetLanguage; };
  }, []);

  return <span hidden data-language-runtime aria-hidden="true" />;
}
