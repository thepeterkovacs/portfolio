import "server-only"

import type { Locale } from "./i18n"

const dictionaries = {
	en: () => import("@/lang/en.json").then((module) => module.default),
	hu: () => import("@/lang/hu.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
	dictionaries[locale as keyof typeof dictionaries]()
