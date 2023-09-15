import { HTMLAttributeAnchorTarget, PropsWithChildren } from "react"

import Link from "next/link"

import { cn } from "@/lib/utils/standard"

import { buttonVariants } from "./layout/button"

interface Props extends PropsWithChildren {
	href: string
	target?: HTMLAttributeAnchorTarget
}

export default function Contact({ href, target, children }: Props): JSX.Element {
	return (
		<Link
			className={cn(buttonVariants({ variant: "outline" }), "p-0 h-12 w-12")}
			href={href}
			aria-label={href}
			target={target}>
			{children}
		</Link>
	)
}
