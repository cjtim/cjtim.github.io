import type {
  APIRoute,
  APIContext,
} from "astro"

export const GET: APIRoute = ({
  url,
}: APIContext) => {
  const robots = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${
    new URL("sitemap-index.xml", url)
      .href
  }
`.trim()
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
