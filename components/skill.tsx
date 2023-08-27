"use client"

import { useEffect, useState } from "react"

import { Progress } from "./layout/progress"

interface Props {
	name: string
	value: number
}

export default function Skill({ name, value }: Props): JSX.Element {
	const [progress, setProgress] = useState<number>(0)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(value), 50)
		return () => clearTimeout(timer)
	}, [value])

	return (
		<div className='flex items-center'>
			<div className='w-[88px]'>{name}</div>
			<div className='w-3/4'>
				<Progress title={name} value={progress} />
			</div>
		</div>
	)
}
