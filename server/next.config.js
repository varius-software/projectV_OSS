/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	...import(`./config/${process.env.APP_ENV || 'local'}`.json)
}

module.exports = nextConfig
