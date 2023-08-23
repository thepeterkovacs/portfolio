import Link from "next/link"

import { cn } from "@/lib/utils/standard"

import Icons from "./helpers/icons"
import { buttonVariants } from "./layout/button"

interface Props {
	href: string
	icon: keyof typeof Icons
}

export default function Contact({ href, icon }: Props): JSX.Element {
	const Icon = Icons[icon]

	return (
		<Link className={cn(buttonVariants({ variant: "outline" }), "p-0 h-12 w-12")} href={href}>
			<Icon className='w-12 h-12' />
		</Link>
	)
}
