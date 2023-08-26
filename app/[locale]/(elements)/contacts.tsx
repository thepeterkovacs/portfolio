import {
	EnvelopeClosedIcon,
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons"

import details from "@/lib/assets/details"

import Contact from "@/components/contact"

const { links, email } = details

export default function Contacts(): JSX.Element {
	return (
		<div className='flex w-[288px] justify-between'>
			<Contact href={links.twitter} target='_blank'>
				<TwitterLogoIcon className='w-8 h-8' />
			</Contact>
			<Contact href={links.gitHub} target='_blank'>
				<GitHubLogoIcon className='w-7 h-7' />
			</Contact>
			<Contact href={`mailto:${email}`}>
				<EnvelopeClosedIcon className='w-7 h-7' />
			</Contact>
			<Contact href={links.linkedIn} target='_blank'>
				<LinkedInLogoIcon className='w-7 h-7' />
			</Contact>
			<Contact href={links.instagram} target='_blank'>
				<InstagramLogoIcon className='w-8 h-8' />
			</Contact>
		</div>
	)
}
