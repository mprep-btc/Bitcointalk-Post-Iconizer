// ==UserScript==
// @name        Bitcointalk Post Iconizer
// @namespace   mprep
// @author      mprep
// @description Add custom buttons to Bitcointalk's post editing page for inserting BB code
// @include     https://bitcointalk.org/index.php?action=post;*
// @include     https://bitcointalk.org/index.php?action=pm;sa=send*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @version     0.25
// @downloadURL https://raw.githubusercontent.com/mprep-btc/Bitcointalk-Post-Iconizer/master/customIcons.js
// @grant       none
// ==/UserScript==

//Adding a pivot for other buttons
if ($('.custom-iconizer').length == 0) 
{
    $('img[src="https://bitcointalk.org/Themes/custom1/images/bbc/list.gif"]').parent().
        after('<img src="https://bitcointalk.org/Themes/custom1/images/bbc/divider.gif" alt="|" style="margin: 0 3px 0 3px;" class="custom-iconizer">');
}

function addCustomButton(imageUrl, title, id) {
    var newButton = $('.custom-iconizer:last').after('<a class="custom-iconizer" href="javascript:void(0);"></a>');
    var newButtonImage = $('<img onmouseover="bbc_highlight(this, true);" onmouseout="if (window.bbc_highlight) bbc_highlight(this, false);" style="background-image: url(https://bitcointalk.org/Themes/custom1/images/bbc/bbc_bg.gif); margin: 1px 2px 1px 1px;" align="bottom" height="22" width="23"/>').appendTo(newButton);
    newButtonImage.attr("src",imageUrl).attr("alt",title).attr("title",title);
    if (id != '')
    {
        newButtonImage.attr("id",id);
    }
    return newButton;
}

/************************************** ⌄⌄ API FUNCTIONS ⌄⌄ *****************************************/

/* Adds inserter (e.g. [btc]) button
 *
 * Parameters:
 *  [imageUrl] - URL / data URI for the button's icon;
 *  [bbcode] - the text you want to insert in the textbox;
 *  [bbStart] - the text you want to add after the text selected in the textbox;
 *  [title] - the text you want displayed when the user hovers over the buttons
 *  [id] (optional) - button's ID for any custom extensions.
 */
function addInserter(imageUrl, bbcode, title, id='') 
{
    addCustomButton(imageUrl,title,id).click(function(){replaceText(bbcode, document.forms.postmodify.message); return false;});
}

/* Adds surrounder (e.g. [b]some selected text here[/b]) button
 *
 * Parameters:
 *  [imageUrl] - URL / data URI for the button's icon;
 *  [bbStart] - the text you want to add before the text selected in the textbox;
 *  [bbStart] - the text you want to add after the text selected in the textbox;
 *  [title] - the text you want displayed when the user hovers over the buttons
 *  [id] (optional) - button's ID for any custom extensions.
 */
function addSurrounder(imageUrl, bbStart, bbEnd, title, id='') 
{
    addCustomButton(imageUrl,title,id).click(function(){surroundText( bbStart, bbEnd, document.forms.postmodify.message); return false;});
}

/* Adds separator
 *
 * Parameters:
 *  [id] (optional) - separator's ID for any custom extensions.
 */
function addSeparator(id='') 
{
    var separator = $('.custom-iconizer:last').after('<img src="https://bitcointalk.org/Themes/custom1/images/bbc/divider.gif" alt="|" style="margin: 0 3px 0 3px;" class="custom-iconizer">');
    if (id != '')
    {
        newSurroundersImage.attr("id",id);
    }
}

/************************************** ^^ API FUNCTIONS ^^ *****************************************/


//Inject API scripts into page
var script = document.createElement('script');
script.appendChild(document.createTextNode(addCustomButton + addInserter + addSurrounder + addSeparator));
(document.body || document.head || document.documentElement).appendChild(script);