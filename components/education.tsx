import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
	dates: string
}

export default function Education({ dates, children }: Props): JSX.Element {
	return (
		<div className='flex flex-col gap-2'>
			<div className='text-2xl'>{dates}</div>
			{children}
		</div>
	)
}
