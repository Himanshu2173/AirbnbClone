/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir:true,
    },
    images: {
        domains: [
            "avatars.githubservercontent.com",
        ]
    }
};

export default nextConfig;
