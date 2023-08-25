import image from "@/public/portrait.jpg"

import Image from "next/image"

export default function Picture(): JSX.Element {
	return (
		<div className=''>
			<Image
				className='rounded-xl'
				width={288}
				src={image}
				priority={true}
				placeholder='blur'
				alt='image'
			/>
		</div>
	)
}
