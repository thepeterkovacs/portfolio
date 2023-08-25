"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import * as React from "react"

import { Button } from "@/components/layout/button"

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<Button
			variant='ghost'
			size='sm'
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			<SunIcon className='w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<MoonIcon className='w-6 h-6 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}
