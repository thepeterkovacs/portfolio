import Education from "@/components/education"

export default async function Educations(): Promise<JSX.Element> {
	return (
		<div className='flex flex-col gap-4'>
			<div className='text-2xl pb-4'>Education</div>
			<Education dates='2018.09 - 2022.01'>
				<div className='pl-8'>
					<div className='text-xl'>Budapest University of Technology and Economics</div>
					<div className='pl-4'>
						Electrical engineering - multimedia technologies and systems specialty
					</div>
				</div>
			</Education>
			<Education dates='2014.09 - 2018.06'>
				<div className='pl-8'>
					<div className='text-xl'>Táncsics Mihály Gymnasium and College of Orosháza</div>
					<div className='pl-4'>Specialization in advanced mathematics and physics</div>
				</div>
			</Education>
		</div>
	)
}
