import { constructPage, readPage } from "./templatingEngine.js";


// todo <link rel="stylesheet" href="/pages/frontpage/frontpage.css" />
const frontpage = readPage('public/pages/frontpage/frontpage.html');
const about = readPage('public/pages/about/about.html');

export const frontpagePage = constructPage(frontpage);
export const aboutPage = constructPage(about);
