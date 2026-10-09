export function sanitizeXSS(string) {
    return string
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;')
        .replaceAll('`', '&#x60;')
        .replaceAll('/', '&#x2F;');
}

console.log("XSS")