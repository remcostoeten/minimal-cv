import type { MetadataRoute } from 'next/dist/lib/metadata/types/metadata-interface'

const getBaseUrl = 'https://remcostoeten.com'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `${getBaseUrl()}/sitemap.xml`
    }
}
