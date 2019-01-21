// ==UserScript==
// @name        Disable YouTube Autoplay
// @namespace   fluks
// @description Disable autoplay on YouTube.
// @version     0.1
// @include     https://*.youtube.com/watch*
// @author      fluks
// ==/UserScript==

const autoplayOff = () => {
    const ap = document.getElementById('improved-toggle')
        || document.querySelector('input#autoplay-checkbox');
    if (ap != undefined && ap.hasAttribute('checked'))
        ap.click();
};

window.setTimeout(autoplayOff, 5000);