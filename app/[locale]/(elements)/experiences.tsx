import Experience from "@/components/experience"

export default async function Experiences(): Promise<JSX.Element> {
	return (
		<div className='flex flex-col gap-4'>
			<div className='text-xl pb-4'>Experience</div>
			<Experience dates='2022.02 - 2023.08'>
				<div className='pl-8'>
					<div className='text-xl'>Siemens Energy</div>
					<div className='pl-4'>Manufacturing Digitalization Engineer</div>
				</div>
			</Experience>
		</div>
	)
}
