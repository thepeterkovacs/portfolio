/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/portfolio",
	async redirects() {
		return [
			{ source: "/", destination: "/portfolio", basePath: false, permanent: false },
			{
				source: "/portfolio",
				destination: "/portfolio/en",
				basePath: false,
				permanent: false,
			},
		]
	},
}

module.exports = nextConfig
