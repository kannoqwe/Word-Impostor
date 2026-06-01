import { useMemo } from 'react';
import type { Language } from '../types/game.types';
import enLocale from '../data/locales/en.json';
import ruLocale from '../data/locales/ru.json';

type TranslationKeys = typeof enLocale;

const locales: Record<Language, TranslationKeys> = {
   en: enLocale,
   ru: ruLocale
};

export function useTranslation(language: Language) {
   const t = useMemo(() => locales[language], [language]);
   return { t };
}
