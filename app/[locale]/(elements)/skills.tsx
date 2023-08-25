import details from "@/lib/assets/details"

import Skill from "@/components/skill"

const { languages, technologies } = details.skills

export default function Skills(): JSX.Element {
	return (
		<div className='flex flex-col gap-4'>
			<div className='text-xl'>Languages and technologies</div>
			<div className='flex gap-4 text-base flex-wrap lg:flex-nowrap'>
				<div className='flex flex-col gap-2 w-full lg:w-1/2'>
					{languages.map((language) => (
						<Skill name={language.name} value={language.value} />
					))}
				</div>
				<div className='flex flex-col gap-2 w-full lg:w-1/2'>
					{technologies.map((technology) => (
						<Skill name={technology.name} value={technology.value} />
					))}
				</div>
			</div>
		</div>
	)
}
