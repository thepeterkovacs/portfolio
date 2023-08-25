import { PropsWithChildren } from "react"

import "@/styles/globals.css"

import * as fonts from "@/lib/assets/fonts"
import { Locale, i18n } from "@/lib/utils/i18n"
import { cn } from "@/lib/utils/standard"

import LangToggle from "@/components/helpers/lang-toggle"
import ThemeToggle from "@/components/helpers/theme-toggle"
import { ThemeProvider } from "@/components/providers/theme-provider"
import TailwindIndicator from "@/components/tools/tailwind-indicator"

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ locale }))
}

interface Props extends PropsWithChildren {
	params: { locale: Locale }
}

export default function RootLayout({ params, children }: Props): JSX.Element {
	return (
		<html lang={params.locale} suppressHydrationWarning>
			<body className={cn("bg-background", fonts.rubik.className)}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<div className='flex gap-4 justify-end p-8'>
						<LangToggle />
						<ThemeToggle />
					</div>
					<main>{children}</main>
					<TailwindIndicator />
				</ThemeProvider>
			</body>
		</html>
	)
}
