export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gpamarthy.github.io/new-website/";

  return [
    {
      url: siteUrl,
      lastModified: new Date()
    }
  ];
}
