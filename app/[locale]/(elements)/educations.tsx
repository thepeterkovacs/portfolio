import { getDictionary } from "@/lib/utils/dictionary"
import { Locale } from "@/lib/utils/i18n"

import Education from "@/components/education"

interface Props {
	locale: Locale
}

export default async function Educations({ locale }: Props): Promise<JSX.Element> {
	const LANG = await getDictionary(locale)

	return (
		<div className='flex flex-col gap-4'>
			<div className='text-xl pb-4'>{LANG.education.title}</div>
			{LANG.education.items.map((education) => (
				<Education key={education.school} dates={education.dates}>
					<div className='pl-8'>
						<div className='text-xl'>{education.school}</div>
						<div className='pl-4'>{education.studies}</div>
					</div>
				</Education>
			))}
		</div>
	)
}
