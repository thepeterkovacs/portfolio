/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/portfolio",
	async redirects() {
		return [{ source: "/", destination: "/en", permanent: true }]
	},
}

module.exports = nextConfig
