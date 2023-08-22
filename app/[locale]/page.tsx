import { getDictionary } from "@/lib/utils/dictionary"
import { Locale } from "@/lib/utils/i18n"

interface Props {
	params: { locale: Locale }
}

export default async function Home({ params: { locale } }: Props): Promise<JSX.Element> {
	const DICT = await getDictionary(locale)
	return <main></main>
}
