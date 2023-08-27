import { getDictionary } from "@/lib/utils/dictionary"
import { Locale } from "@/lib/utils/i18n"

import Experience from "@/components/experience"

interface Props {
	locale: Locale
}

export default async function Experiences({ locale }: Props): Promise<JSX.Element> {
	const LANG = await getDictionary(locale)

	return (
		<div className='flex flex-col gap-4'>
			<div className='text-xl pb-4'>{LANG.experience.title}</div>
			{LANG.experience.items.map((experience) => (
				<Experience key={experience.company} dates={experience.dates}>
					<div className='pl-8'>
						<div className='text-xl'>{experience.company}</div>
						<div className='pl-4'>{experience.position}</div>
					</div>
				</Experience>
			))}
		</div>
	)
}
