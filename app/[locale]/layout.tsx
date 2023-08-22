import { PropsWithChildren } from "react"

import * as fonts from "@/lib/assets/fonts"
import { Locale, i18n } from "@/lib/utils/i18n"
import { cn } from "@/lib/utils/standard"

import "./globals.css"

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ locale }))
}

interface Props extends PropsWithChildren {
	params: { locale: Locale }
}

export default function RootLayout({ params, children }: Props): JSX.Element {
	return (
		<html lang={params.locale}>
			<body className={cn("bg-background", fonts.roboto.className)}>{children}</body>
		</html>
	)
}
