// ==UserScript==
// @name           reloadpage
// @namespace      fluks
// @description    Reload a page once every n seconds.
// @version        0.0.1
// @include        ADD_URLS_WHERE_TO_RUN
// @author         fluks
// ==/UserScript==

(function () {
    const secs = 60;
    window.setInterval(() => document.location.reload(false),
        secs * 1000);
})();
