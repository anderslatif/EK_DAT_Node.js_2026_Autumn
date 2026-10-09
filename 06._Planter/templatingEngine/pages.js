import { constructPage, readPage } from "./templatingEngine.js";



const frontpage = readPage('public/pages/frontpage/frontpage.html');
const about = readPage('public/pages/about/about.html');

export const frontpagePage = constructPage(frontpage, {
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css" />`
});

export const aboutPage = constructPage(about, {
    tabTitle: "Planter | About"
});

export const contactPage = constructPage(about);