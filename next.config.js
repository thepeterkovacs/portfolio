/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/portfolio",
	async redirects() {
		return [
			{ source: "/", destination: "/portfolio", basePath: false, permanent: true },
			{
				source: "/portfolio",
				destination: "/portfolio/en",
				basePath: false,
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
