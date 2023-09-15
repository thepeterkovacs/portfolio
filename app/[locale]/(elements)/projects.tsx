import details from "@/lib/assets/details"
import { getDictionary } from "@/lib/utils/dictionary"
import { Locale } from "@/lib/utils/i18n"

import Project from "@/components/project"

interface Props {
	locale: Locale
}

export default async function Projects({ locale }: Props): Promise<JSX.Element> {
	const LANG = await getDictionary(locale)

	return (
		<div>
			<div className='text-center text-3xl pb-12'>{LANG.projects.title}</div>
			<div className='flex gap-8 md:gap-0 justify-evenly flex-wrap md:flex-nowrap'>
				{LANG.projects.items.map((project) => (
					<Project
						key={project.name}
						name={project.name}
						description={project.description}
						href={
							details.projects.find((detail) => detail.name === project.name)?.href ??
							""
						}
					/>
				))}
			</div>
		</div>
	)
}
