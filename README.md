# Bitcointalk Post Iconizer

![Screenshot 1](/screenshots/screenshot1.PNG?raw=true "")
---
Userscript, which adds the ability to create custom buttons for the post and PM creation pages on Bitcointalk (and possibly other SMF 1.X forums).


## Installation instructions

1. Get a userscript manager plugin if your browser doesn't support userscripts natively (or if these scripts don't work for some reason);
  * Examples:
    * [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) for Firefox.
    * [Tampermokey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) for Chrome.
2. Install the main userscript found [here](/customIcons.js?raw=true);
3. Install any plugin userscripts (official plugins can be found [here](/plugins); click on the plugin and then click the button 'Raw' to get the file).
4. Make sure the main userscript is executed _**before**_ any plugins are (your userscript manager should allow you to control the execution order of the plugins).
5. *(Optional) Move around the plugin execution order in order to choose which plugins should be loaded first.*
6. *(Optional) Create your own plugins by using the function refernce located in the main userscript*


## Examples (for plugins)

#### Creating a button that inserts BB code:
``` javascript
addInserter("someIcon.jpg","[b]Example things[/b]","Thing name");
```

#### Creating a button that surrounds your selection with BB code:
``` javascript
addSurrounder("someIcon.jpg","[b][u]start"," and the end[/u][/b]","Thing name");
```

## License
The userscript and all plugin userscripts are provided under the [AGPL 3.0 license](https://github.com/mprep-btc/Bitcointalk-Post-Iconizer/blob/master/LICENSE).

## Changelog

v0.2 - refractored code, added custom button and separator inserters, added update URLs

v0.1 - initial release.

## Donations

Donations are welcome: 1**mprep**xqZeK7LcRYEz84DVJKCvF8CQ8gu
