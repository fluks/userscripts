// ==UserScript==
// @name        Remove Google Redirect And Tracking From Search Results
// @description Userscript for removing redirection and tracking(?) data from Google search results.
// @version     1
// @author      fluks
// @include     https://*.google.*/search?*
// ==/UserScript==

document.querySelectorAll('h3.r > a')
    .forEach(e => {
        let u = e.href;
        u = u.replace(/^.*?url\?q=/, '');
        u = u.replace(/&.*$/, '');
        e.href = decodeURIComponent(u);
    }
);
