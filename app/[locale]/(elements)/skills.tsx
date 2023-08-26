import details from "@/lib/assets/details"
import { getDictionary } from "@/lib/utils/dictionary"
import { Locale } from "@/lib/utils/i18n"

import Skill from "@/components/skill"

const { languages, technologies } = details.skills

interface Props {
	locale: Locale
}

export default async function Skills({ locale }: Props): Promise<JSX.Element> {
	const LANG = await getDictionary(locale)

	return (
		<div className='flex flex-col gap-4'>
			<div className='text-xl'>{LANG.skills.title}</div>
			<div className='flex gap-4 text-base flex-wrap lg:flex-nowrap'>
				<div className='flex flex-col gap-2 w-full lg:w-1/2'>
					{languages.map((language) => (
						<Skill key={language.name} name={language.name} value={language.value} />
					))}
				</div>
				<div className='flex flex-col gap-2 w-full lg:w-1/2'>
					{technologies.map((technology) => (
						<Skill
							key={technology.name}
							name={technology.name}
							value={technology.value}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
