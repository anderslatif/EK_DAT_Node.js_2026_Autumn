import { constructPage, readPage } from "./templatingEngine.js";



const frontpage = readPage('public/pages/frontpage/frontpage.html');
const about = readPage('public/pages/about/about.html');

export const frontpagePage = constructPage(frontpage, {
    cssLinks: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css" />`,
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`
});

export const aboutPage = constructPage(about, {
    tabTitle: "Planter | About"
});

export const contactPage = constructPage(about);