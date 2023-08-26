"use client"

import * as React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { i18n } from "@/lib/utils/i18n"
import { cn } from "@/lib/utils/standard"

import { buttonVariants } from "@/components/layout/button"

const { locales } = i18n

export default function LangToggle() {
	const pathName = usePathname()

	const getNextLocale = (): string => {
		const isCurrentLocale = (locale: string) => locale === pathName.substring(1)
		const index = locales.findIndex(isCurrentLocale) + 1

		return locales[index < locales.length ? index : 0]
	}

	const redirectedPathName = (): string => {
		if (!pathName) return "/"

		const segments = pathName.split("/")
		segments[1] = getNextLocale()

		return segments.join("/")
	}

	return (
		<Link
			className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-12 text-base")}
			href={redirectedPathName()}>
			{getNextLocale().toUpperCase()}
			<span className='sr-only'>Toggle lang</span>
		</Link>
	)
}
