import fs from 'fs';

export function constructPage(page, options = {}) {
    const header = readPage('public/components/header/header.html');
    const footer = readPage('public/components/footer/footer.html');

    return header
        .replace('{{CSS_LINK}}', options.cssLink || "")
        .replace('{{TAB_TITLE}}', options.tabTitle || "Planter")
     + page
     + footer;
}

export function readPage(path) {
    return fs.readFileSync(path, 'utf-8');
}

