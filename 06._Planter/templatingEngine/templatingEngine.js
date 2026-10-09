import fs from 'fs';

export function constructPage(page) {
    const header = readPage('public/components/header/header.html');
    const footer = readPage('public/components/footer/footer.html');

    return header + page + footer;
}

export function readPage(path) {
    return fs.readFileSync(path, 'utf-8');
}

