/**
 * Generates a lightweight inline SVG placeholder image for demo content.
 * Replace with real product/category photography before production launch.
 */
export function placeholderImage(label: string, bg = "#f2f0ec", fg = "#6f6f6f"): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
      <rect width="640" height="640" fill="${bg}" />
      <line x1="0" y1="0" x2="640" y2="640" stroke="${fg}" stroke-opacity="0.08" stroke-width="1"/>
      <line x1="640" y1="0" x2="0" y2="640" stroke="${fg}" stroke-opacity="0.08" stroke-width="1"/>
      <text x="320" y="330" font-family="Inter, sans-serif" font-size="22" fill="${fg}" text-anchor="middle" opacity="0.7">${escapeXml(
        label
      )}</text>
      <text x="320" y="360" font-family="Inter, sans-serif" font-size="13" fill="${fg}" text-anchor="middle" opacity="0.45">Demo image</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      default:
        return "&quot;";
    }
  });
}
