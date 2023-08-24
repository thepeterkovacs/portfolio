import { PropsWithChildren } from "react"

import Link from "next/link"

import { cn } from "@/lib/utils/standard"

import { buttonVariants } from "./layout/button"

interface Props extends PropsWithChildren {
	href: string
}

export default function Contact({ href, children }: Props): JSX.Element {
	return (
		<Link
			className={cn(buttonVariants({ variant: "outline" }), "p-0 h-12 w-12")}
			href={href}
			target='_blank'>
			{children}
		</Link>
	)
}
