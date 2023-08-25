import { getDictionary } from "@/lib/utils/dictionary"
import { Locale } from "@/lib/utils/i18n"

import Contacts from "./(elements)/contacts"
import Educations from "./(elements)/educations"
import Experiences from "./(elements)/experiences"
import Picture from "./(elements)/picture"
import Skills from "./(elements)/skills"

interface Props {
	params: { locale: Locale }
}

export default async function Home({ params: { locale } }: Props): Promise<JSX.Element> {
	const LANG = await getDictionary(locale)

	return (
		<section className='flex justify-center pb-16'>
			<div className='flex flex-col w-4/5 gap-16'>
				<div className='flex gap-16 flex-wrap-reverse lg:flex-nowrap'>
					<div className='flex justify-center w-full lg:w-fit'>
						<div className='flex flex-col gap-4'>
							<Picture />
							<Contacts />
						</div>
					</div>
					<div className='flex flex-col w-full gap-8'>
						<div className='text-5xl'>{LANG.name}</div>
						<div>{LANG.description}</div>
						<Skills />
					</div>
				</div>
				<div className='flex w-full gap-8 justify-around flex-wrap-reverse lg:flex-nowrap'>
					<div className='flex w-full lg:w-1/2 justify-center'>
						<Educations />
					</div>
					<div className='flex w-full lg:w-1/2 justify-center'>
						<Experiences />
					</div>
				</div>
			</div>
		</section>
	)
}
