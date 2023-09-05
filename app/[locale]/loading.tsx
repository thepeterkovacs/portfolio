import { DotsHorizontalIcon } from "@radix-ui/react-icons"

export default function Loading() {
	return (
		<div className='flex h-[calc(100vh-96px)] justify-center items-center'>
			<DotsHorizontalIcon className='w-20 h-20' />
		</div>
	)
}
