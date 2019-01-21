// ==UserScript==
// @name           FocusOnForm
// @namespace      fluks
// @description    Sets focus on a different elements on a page.
// @version        0.0.5
// @include        *
// @exclude        
// @author         fluks
// ==/UserScript==

const UP    = 1,
      DOWN  = -1,
      CLEAR = 0;
var count          = 0,
    last_direction = CLEAR,
    links = document.links,
    prev_link = '';

document.addEventListener("keypress", Focus, false);

function Focus(e) { 
    // ¤. First <input='text' />
    if(e.which === 164) {
        var forms = document.forms;
        for(var i = 0; i < forms.length; i++) {
            for(var j = 0; j < forms[i].elements.length; j++) {
                if(forms[i].elements[j].type === "text" || forms[i].elements[j].type === "search") {
                    forms[i].elements[j].focus(); 
                    return;
                }
            }
        }
        return;
    }
    var aE = document.activeElement;
    // §. Run downward through hyperlinks.
    if(e.which === 167) {
        if (aE.tagName === 'A' && aE.href !== prev_link) {
            count = getCount(aE, links, UP);
            last_direction = CLEAR;
        }
        if(last_direction === UP) { count += 2 }
        if(count === links.length) { count = 0 }
        links[count].focus();
        prev_link = links[count].href;
        last_direction = DOWN;
        count++;
        return;
    }
    // ½. Run upwards through hyperlinks.
    if(e.which === 189) {
        if (aE.tagName === 'A' && aE.href !== prev_link) {
            count = getCount(aE, links, DOWN);
            last_direction = CLEAR;
        }
        if(last_direction === DOWN) { count -= 2 }
        if(count === -1) { count = links.length - 1 }
        links[count].focus();
        prev_link = links[count].href;
        last_direction = UP;
        count--;
        return;
    }
}

/* when the focus is on a link, but it's not on it because user run through links via this script,
 * change count to that link's index.
 * parameters: document.activeElement, document.links[], offset(direction we're running)
 * returns: index of link element, which will be focused next. if we don't find which link is currently
 *          on focus, return first link
 */
function getCount(aE, links, offset) {
    for (var i = 0; i < links.length; ++i) {
        if (links[i].href === aE.href) {
            return i + offset;
        }
    }
    return 0;
}
