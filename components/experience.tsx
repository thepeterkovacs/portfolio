import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
	dates: string
}

export default function Experience({ dates, children }: Props): JSX.Element {
	return (
		<div className='flex flex-col gap-2'>
			<div className='text-xl'>{dates}</div>
			{children}
		</div>
	)
}
