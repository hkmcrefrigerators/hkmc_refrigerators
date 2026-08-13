import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL('sitemap-index.xml', site).toString();

	const body = `User-agent: *
Allow: /
Disallow: /admin/

# OpenAI (ChatGPT search + browsing)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

# Anthropic (Claude)
User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /

# Google Gemini / AI Overviews (separate from the standard Googlebot)
User-agent: Google-Extended
Allow: /

# Microsoft Copilot (via Bing)
User-agent: Bingbot
Allow: /

Sitemap: ${sitemapURL}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
