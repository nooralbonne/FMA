const fs = require("fs");
const path = require("path");

// Edit these routes if you add pages
const routes = ["/", "/about", "/contact"];

// Base URL for your site. Prefer setting SITEMAP_BASE_URL env var when running.
const baseUrl = process.env.SITEMAP_BASE_URL || "https://example.com";

const urls = routes.map((r) => {
  const loc = r === "/" ? baseUrl + "/" : baseUrl.replace(/\/$/, "") + r;
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
});

const now = new Date().toISOString();
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls.join("\n")}\n` +
  `</urlset>`;

function writeTo(destination) {
  try {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, xml, "utf8");
    console.log("Sitemap written to", destination);
  } catch (err) {
    console.error("Failed to write sitemap to", destination, err);
    process.exitCode = 1;
  }
}

// Write to public for dev/hosting and to build for production builds
writeTo(path.join(__dirname, "public", "sitemap.xml"));
writeTo(path.join(__dirname, "build", "sitemap.xml"));

// Also print a short summary
console.log(
  `Wrote ${routes.length} routes, baseUrl=${baseUrl}, lastmod=${now}`,
);
