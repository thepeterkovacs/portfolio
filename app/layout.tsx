import type { Metadata } from "next"

import * as fonts from "@/lib/assets/fonts"
import { cn } from "@/lib/utils/standard"

import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={cn("bg-background", fonts.roboto.className)}>{children}</body>
		</html>
	)
}
