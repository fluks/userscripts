// ==UserScript==
// @name        Disable Polymer
// @namespace   fluks
// @description Disable polymer on YouTube.
// @version     0.1
// @include     https://*.youtube.com/*
// @run-at      document-start
// @author      fluks
// ==/UserScript==

let url = new URL(location.href);
if (!url.searchParams.has('disable_polymer')) {
    const params = new URLSearchParams(url.searchParams);
    params.append('disable_polymer', true); 
    const match = url.toString().match(/^[^\?]*\?/);  
    if (match !== null) {
      url = match[0] + params.toString();
      location.replace(url);
    }
}
