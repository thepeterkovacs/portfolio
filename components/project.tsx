import Link from "next/link"

import { Card, CardDescription, CardHeader, CardTitle } from "./layout/card"

interface Props {
	name: string
	description: string
	href: string
}

export default function Project({ name, description, href }: Props): JSX.Element {
	return (
		<Link className='flex' href={href} aria-label={href} target='_blank'>
			<Card className='w-full md:w-72 lg:w-96 hover:bg-primary-foreground'>
				<CardHeader>
					<CardTitle className='text-xl'>{name}</CardTitle>
					<CardDescription className='text-base'>{description}</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	)
}
