From: <Saved by Blink>
Snapshot-Content-Location: https://www.fbpurity.com/fbpurity.TWNTSXON.user.js
Subject: 
Date: Wed, 11 Dec 2018 02:40:51 -0000
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--Hq9ESTl6Q1HAvaJqHY15lLXYpLXz2vh99Trr0auLYa----"

------MultipartBoundary--Hq9ESTl6Q1HAvaJqHY15lLXYpLXz2vh99Trr0auLYa----
Content-Type: text/html
Content-ID: <frame-4-3875a6c2-186a-4561-8acc-e75583585d75@mhtml.blink>
Content-Transfer-Encoding: quoted-printable
Content-Location: https://www.fbpurity.com/fbpurity.TWNTSXON.user.js

<html><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
=3DUTF-8"></head><body><pre style=3D"word-wrap: break-word; white-space: pr=
e-wrap;">// =3D=3DUserScript=3D=3D
// @name           Facebook Purity
// @namespace      http://steeev.freehostia.com
// @description    F.B Purity lets you hide ads, spam &amp; other clutter o=
n Facebook
// @icon           https://i.imgur.com/JVoD8pR.png
// @include        http://*.facebook.com/*
// @include        https://*.facebook.com/*
// @exclude        http://*.facebook.com/ajax/*
// @exclude        https://*.facebook.com/ajax/*
// @exclude        http://*.channel.facebook.com/*
// @exclude        https://*.channel.facebook.com/*
// @exclude        http://*.facebook.com/xti.php?*
// @exclude        https://*.facebook.com/xti.php?*
// @exclude        http://*.facebook.com/xti.php*
// @exclude        https://*.facebook.com/xti.php*
// @exclude        http://*.facebook.com/ai.php?*
// @exclude        https://*.facebook.com/ai.php?*
// @exclude        http://*.facebook.com/ai.php*
// @exclude        https://*.facebook.com/ai.php*
// @exclude        https://www.facebook.com/business/*
// @exclude        http://www.facebook.com/business/*
// @exclude        https://www.facebook.com/ads/manager*
// @exclude        http://developers.facebook.com/*
// @exclude        https://developers.facebook.com/*
// @run-at document-start
// @grant          GM_getValue
// @grant          GM_setValue
// @version        26.1.5 - 1st Nov 2018
// =3D=3D/UserScript=3D=3D

// these 2 excludes commented out for now, till we investigate which pages =
we need to exclude, as we need to run on certain "connect" pages for blocki=
ng apps.
// @exclude        http://*.facebook.com/connect/*
// @exclude        https://*.facebook.com/connect/*

// these 2 seemed to stop the scripting working in the greasemonkey extensi=
on on firefox
// @match          http://*.facebook.com/*
// @match          https://*.facebook.com/*

//
// (C) 2009 - 2018 Stephen Fernandez - https://www.fbpurity.com
//

// If you like this script please donate, big or small donations, anything =
is welcome :=20

// https://donate.fbpurity.com/

// ------------------------------------------------------------
// F.B. Purity Home Page  : https://www.fbpurity.com
// F.B  Purity Install    : https://install.fbpurity.com
// F.B. Purity Fan Page   : https://fans.fbpurity.com
// F.B. Purity UserGuide  : https://user-guide.fbpurity.com
// F.B. Purity Custom CSS : https://css.fbpurity.com
// F.B. Purity FAQ / Help : https://faq.fbpurity.com
// F.B. Purity Search     : https://search.fbpurity.com
// ------------------------------------------------------------

// ABOUT
// -----
// This greasemonkey script hides all third party facebook application mess=
ages from your fb homepage.
// Instructions on how to edit the "whitelist" are available here: https://=
whitelist.fbpurity.com
// Instructions on how to edit the "extras" are available here:    https://=
extras.fbpurity.com
// Make donations to F.B. Purity, to show your appreciation here:  https://=
donate.fbpurity.com

// INSTALLATION
// ------------
// This script is compatible with the following web browsers: Firefox, Goog=
le Chrome, Opera and Safari
//
// Full installation instructions are available here:=20
// https://install.fbpurity.com
//
// If you have any problems, please see the Frequently Asked Questions / He=
lp page:
// https://faq.fbpurity.com

// UPDATES
// -------
// Full Update Log can now be accessed at https://www.fbpurity.com/change-l=
og.htm
// 12.0.0    3rdOct2014 Fixed hide birthdays in right hand column option, f=
ixed full date+time option for firefox, fixed hide related stories popup, f=
ixed hide people you may know, fixed hide events in left column, fixed hide=
 wrote on wall, added hide "Your Pages" box, fixed "hide newsfeed" option, =
new hide search box popup option, new hide auto tag suggestions option, fix=
ed photos in chat opening in a new window
// 12.1.0   12thOct2014 Fixed hide sponsored box for some users, Fixed tag =
suggestions for "Share" popup menu (share in group/share on friend's timeli=
ne) Fixed tagging users in photos, and locations, Fixed tag suggestions on =
"View as" page. Auto click "more stories" button on initial load, updated s=
ort most recent code, new hide friend requests icon in top nav bar option, =
updated the hide games and apps to completely hide "games you may like" ins=
tead of filtering it to the extras tab
// 12.1.3               Fixed "Sort: Most Recent" to allow viewing of "Top =
Stories", Fixed the redirect to Find Friends page for some users,
// 12.2.x               Fixed hide stickers in comments, fixed fbp options =
screen so it doesnt lose scroll position,
// 12.5.1   19thOct2014 Added warning if app or game requests email address=
, fixed redirects on pages feed and friends list pages, fixed "hide all vid=
eo" option, swapped FBP's disable autoplay functionality with a link on the=
 options screen that turns Facebook's own built in disable autoplay option.
// 12.5.1.2 21stOct2014 Re-enabled FBP's disable autoplay function for peop=
le who don't have Facebooks native disable option. Fixed redirect when prev=
iewing pdf files in a group
// 12.7.0    3rdNov2014 Deleted Friends alerts are now more persistent. Fix=
ed Donation request. Fixed opera 12 slowdown bug. Fixed Share animated gif =
bug.
// 12.8.0   11thDec2014 Fixed hidden privacy selectors when hide emoticons =
option is turned on, if show full timestamps option is on, now if you hover=
 over the date/timestamp it shows the short time style (how many minutes/ho=
urs ago it was posted)
//                      Added "is watching / is listening to" filter, fixed=
 set as background image functionality, fixed disable autoplay, added displ=
ay logout button in top navbar option, added hide status button in top nav =
bar option, fixed sort most recent option for new search
// 12.9.1    6thMay2015 Fixed intermittent bug with show logout button opti=
on (its related to slow pages), removed single column timeline option as it=
s not needed anymore, fixed automatic "turn off disable autoplay link", add=
ed "Z" keyboard shortcut for zapping comments with just name tags or sticke=
rs, fixed hide group suggestions in right column option,
//                      Fixed full screen chat for new thin chat sidebar, f=
ixed fbp update check, fixed fbp news check, removed disable autoplay optio=
n, fixed on this day page redirecting back to newsfeed when sort most recen=
t option selected, fixed hide on this day, and "new group" left column link=
 options, fixed cant view facebook videos when "sort most recent" option tu=
rned on, added "replied to a comment on this" to the "commented on this" fi=
lter
// 13.0.0   27thMay2015 Fixed filtering on friend list feeds
// 13.2.0   24thJun2015 Fixed sort:most recent, fixed hide left column link=
 options, fixed hide offline friends option, added a hide new stories popup=
 button option, replaced unread stories feed option with friend feed option
// 13.2.1   25thJun2015 Fixed home link not working on profile/timeline pag=
es when "Sort Feed: Most Recent" option was turned on.
// 13.2.3    2ndJul2015 Fixed newsfeed filtering (some posts were evading f=
bps filters), fixed application/game post filtering, Fixed transparent news=
feed option, Removed hide status button in top nav bar option.
// 13.3.1   30thJul2015 New: Hide Group Conversations in Chat option. New: =
Hide Send Money Button option, fixed "changed location" filter, improved ne=
wsfeed most recent/top stories etc dropdown menu handling, new hide "edit p=
rofile" left column link option, fixed "switching to most recent" bug when =
clicking a notification
// 13.4.1    6thAug2015 Fixed Filtering on List Pages
// 13.4.2   25thNov2015 New: filters for hiding "your memories" AND "shared=
 a memory", fixed position of logout button, added "liked x's comment" patt=
ern to "liked this" filter, added "replied to a comment" pattern to "commen=
ted on this" filter, added visual indicator for whitelisted posts, added op=
tion to hide new "Suggested" section in left column, fixed hide stickers, f=
ixed empty comment (tags only) zap function, fixed hide all videos option, =
fixed filtering ads from the newsfeed for latest firefox
//                      Fixed FBP link position, Fixed game/app filters. Fi=
xed show more friends in chat, fixed full screen chat option, fixed revert =
bubble chat option, fixed some issues with background colours, added hiding=
 the "topics" section in the left column to the hide trending topics option=
, fixed filtering out "interested in" event, fixed hide emoticons/stickers =
option.
// 14.0.0   22ndDec2015 Fixed newsfeed filtering for FF41/42/43+, Fixed "Se=
t Background Image" link for photo theatre mode, added "remove image from b=
ackground" option, fixed hide send money icon in inbox, fixed hide "pages y=
ou may like" stories in newsfeed, added "playing" to the "watching/listenin=
g" to filter, new hide trending search suggestions option, updated nagging =
questions filter to hide seasonal / promotional messages in the status upda=
te box, added hide "sale groups" to hide left column link options.
// 14.1.0    8thJan2016 Fixed sort most recent (also changed name of option=
), added option to make "friend feed" the default, temporarily stop hiding =
games if user chooses to view gamesfeed, fixed filtering app/game posts in =
ticker, fixed hide "liked page" filter, fixed top nav bar colour/image/logo=
ut button options, "Z" keyboard shortcut now zaps comments featuring text f=
rom Text Filter box
// 14.2.0   29thJan2016 Fixed some issues with the filter the ticker option=
, fixed some issues with hide auto tag suggestions, added option to hide "S=
uggest Edits" link in left column, added check to see if FB language is not=
 English
//                      Updated : renamed "Trending Articles" filter option=
 to "Trending Stories", and fixed it to filter out trending stories from th=
e newsfeed, updated external link fixing code, added a hide profile hoverca=
rds option, fixed chrome extension instability if extension has been disabl=
ed in the background
// 14.3.1   17thFeb2016 New: Font Preview window, New: Show Full URLs on sh=
ared links option, Fixed: "Expand News Column" option, Improved hide emotic=
ons option to show text in some cases, Fixed news notification from showing=
 up on every install, renamed wrote on wall wrote on timeline, added Previe=
w individual font link, removed freeze top nav bar option, updated hide tre=
nding search suggestions to remove political debate search, fixed hide birt=
hday posts in newsfeed, updated "hide nagging questions" option to stop fac=
ebooks prompts to update your status with current events (such as political=
 debates or public holidays), updated "Hide Games and Apps" (Timeline Optio=
ns) option to hide all games and apps on timeline pages except whitelisted =
apps.
// 14.5.0   26thFeb2016 New: Hide Reactions bar option, new export settings=
 to text file function, fixed hiding "page stories you might like", removed=
 left column links for gifts, fbiphone,fbandroid, fixed show logout button =
option,fixed hide padlock, hide smileys now hides reaction emojis too, new =
tagged in this option, fixed existing "liked" newsfeed filters to filter ou=
t "reacted to" too
// 14.7.0   29thMar2016 New: Custom Reactions Pack option, New Import Setti=
ngs from file function, fixed background colour issue in groups
// 14.8.0   21stMay2016 Added options to hide "Live" box in right column an=
d hide "Discover Groups" in left column, Fixed Custom Reactions (also for t=
hose with different languages) also for new style SVG reactions, New: Optio=
n to hide Live Map, Whitelisted "Mentions" App, Fixed "hide/edit comment" b=
utton wasn't showing when hide emoticons option was on, fixed text filterin=
g for some users (style=3D"display:block visibility:visible" on posts), fix=
ed hide smileys, added "people also like" to hide "recommended pages" optio=
n, added hide "upcoming events" box on Pages to the "hide events section" o=
ption, fixed redirect when "show logout" button was turned on, fixed clear =
ad prefs, restored freeze top nav bar option
// 14.9.1   15thJun2016 Updated "Sort Feed: Most Recent" option to also sho=
w most recent on Friend's Timeline pages. Fixed Friend feed functionality, =
fixed invisible notification icons and page videos if bg was set to black, =
removed "Sort Feed: Friend Feed" option because Facebook removed the "Frien=
d Feed" page, fixed hidden "edit" button, if "hide smileys" option was turn=
ed on, fixed duplicate smileys when font size is set, fixed hide new smiley=
 type in chat popup and notifications, added hide "your posts" left col lin=
k option, fixed fbp news check (data-time -&gt; data-utime), added show liv=
e user grid option to livemap page
// 15.0.1   23rdJul2016 Fixed FBP link not showing for some people, fixed h=
ide post menu opening, fixed various top nav bar options, fixed new user we=
lcome screen not showing, fixed attending event filter, fixed live grid fun=
ction, fixed descriptions in shared links sometimes not showing if show ful=
l url option was on, added a hide fundraisers left column link option, fixe=
d compatibility with maxthon 4.9, added hide "Todays games" right column op=
tion
// 15.1.0   10thAug2016 Fixed hiding sponsored posts, Fixed Newsfeed filter=
ing options, Fixed app blocking (BA) button in the newsfeed, Fixed Revert B=
ubble Chat option, Fixed FB Purity Settings link in Facebook dropdown menu,=
 removed some obsolete code, added Send Page HTML function (chrome only for=
 now), fixed hide "your posts" left column link, fixed status composer box =
dark background issue, fixed hide find friends link in top navbar, fixed ex=
port settings to file for edge
// 16.0.0    2ndSep2016 New options for filtering images based on image con=
tent, Fixed Clear Ad Prefs functionality, Fixed friends feed link showing i=
n left column for people with new LC design, Updated Custom Reactions optio=
ns, new options: hide cookies policy bar, hide whole left column, hide whol=
e right column, fixed posts in sale groups being hidden, fixed hide send mo=
ney button option, fixed hidden posts and left side panels and cover images=
 on timelines due to ad filtering, fixed status box hiding behind posts, hi=
de birthday videos if hide right column birthday option is selected, fixed =
hide newsfeed option for people with new left column
// 16.1.0    8thOct2016 Added preview window for Custom Reaction Image Sele=
ct box, fixed emoticon and text showing when font size is set, fixed positi=
on of facebook hide menu caret, fixed showing online indicator status and v=
ideo volume control if background colour is set, fixed block app button on =
app/game permission request page, fixed some hide left column link options =
for new left column design, new options: hide "Shops" link in left column a=
nd hide "start a call" Button option under "Chat Options", fixed hiding pag=
e stories you might like, fixed hiding "install messenger" box in right col=
umn, fixed hiding "celebrate "x" day" posts if hide "nagging questions" opt=
ion is ticked
// 17.1.2   10thDec2016 New option to hide moments link in left column, Mov=
ed hide trending topics and ticker bar options to "hide right column links =
section", new hide is typing a comment option, added hide add quick cam pic=
 button chat option, added hide play game button chat option, Fix large fon=
t for short statuses, added youtube app to default app whitelist, fixed som=
e background colour issues, fixed hiding ads in groups, added "year in revi=
ew" to the hide "shared a memory" filter
// 17.2.0   19thDec2016 New options: Autoclick "Explore : See More" &amp; A=
utoclick "Shortcuts :See More", Removed Freeze left column option,
                        //Fixed hide moments link in left column, fixed rem=
oving advertisers from edit advertising profile page, fixed deleted friend =
alert replay link not showing in left column of new left column design, fix=
ed fbp news link not showing in left column of new left column design, adde=
d a  new image content filter: "smoking image", image classification featur=
e now works on a multi image post, added new reaction image set (shia labeo=
uf), removed hide "Interests section" option from "hide left column links" =
section (as facebook has removed that feature), added "create a frame to th=
e hide "create section" option under "hide left column links" heading, fixe=
d transparent issue with left column, fixed wrote on wall option, fixed hid=
ing colour statuses
// 18.0.0	 3rdFeb2017 Fixed hide sponsored posts, fixed revert bubble chat =
option, new Trending Box options, new options to hide left column link "mes=
sages", "marketplace", "insights","create a frame", your profile, Fixed hid=
e graphical emoticons option now hides the streaming/floating reaction icon=
s on live videos, made floating reactions match the custom reactions if set=
, added hide games arcade to hide games leftcolumn option, added child phot=
o content filter, fixed images not opening in lightbox in messenger
// 18.0.1   19thFeb2017 Fixed full screen chat option (also for page messag=
e button), added hide Jobs left column link  option
// 19.0.1               Fixed sort most recent, fixed trending options butt=
on not showing up, fixed selected text colour in messenger, fixed hiding ad=
 for messenger app, added option to hide town hall left column link, fixed:=
 posts in certain group pages not showing up when hide sponsored box option=
 was turned on. fixed problem with "hide nagging questions" option, where i=
t was hiding certain timeline pages, new hide messenger button in top nav b=
ar option, fixed obscured delete buttons in messages when revert bubble cha=
t turned on, improved insert logout button code, improved displaying trendi=
ng options box, fixed clear advertising interests function and partial fix =
for clear advertisers, added "tell us what you think" type posts to the hid=
e nagging questions filter, fixed background colour for shared statuses, fi=
xed left shift layout by removing freeze left column, and changing hide rig=
ht column option to visibility:hidden, fixed expand news column option for =
weird layout, fixed event discovery page filters, fixed marketplace search,=
 fixed position of trending options box, added links to mobile notification=
s page as its more accurate, fixed show logout button option, fixed "showin=
g x feed" title alignment,  "pages feed" and "groups feed" to list of dropd=
own options on newsfeed menu, added option to hide looking for recommendati=
ons stories, updated hide nagging questions option to hide nags in "intro b=
ox" on your timeline page
// 19.1.0    4thJul2017 Added hide weather left column link option, Added h=
ide Order Food left column link option, added hiding "Flash" to the hide ga=
mes in left column option, fixed group left column when expand news column =
option is turned on, fixed left column links on Page hard to read if backgr=
ound image was set, added "Recommended for you" and "Suggested because it's=
 popular on Facebook" posts to the hide sponsored box/stories filter, hide =
sponsored box/stories option now also hides offer reminders links in the ri=
ght column, fixed fbp news notifications, fixed album button in status box =
not working, fixed clearing ad prefs functions, made turning off background=
 status colour option also turn off big fonts for short statuses
// 20.0.0    1stSep2017 Updated news sort: most recent function to work mor=
e efficiently, fixed fbp news notifications, and fbp version update notific=
ations, fixed logout button not showing for some people, fixed send message=
 button on Pages when full screen chat is turned on, fixed fbp options link=
 not working if localstorage was turned off in the browser, added hiding "P=
laces Trending Today", "Top 5 Places Near You" and "Popular Across Facebook=
" to "trending stories" filter, added hiding "Related Articles" to hide "Sp=
onsored Box/Stories" option, fixed deleted friend alerts being hidden under=
 Timeline cover images, added view deactivated friends list functionality, =
fixed BA + WL buttons, added hiding "start a plan" button in chat to the hi=
de nagging questions filter option, fixed "hide offline friends" option was=
 hiding "your pages" right column links, fixed clear ad prefs functionality=
, fixed hiding birthday icon in chat friends list, added hide "Safety Check=
" and "Watch" left column link options, fixed missing button on Fan Page in=
boxes when hide nagging questions option was turned on,
// 20.1.3   12thSep2017 Added code for hiding "Businesses for you" in right=
 column to the hide "sponsored box/stories "option, added options for hidin=
g right column boxes "Watchlist" and "Stories", added option to hide "Watch=
" and "Movies" left column options, added hiding "Featured Topic" posts to =
the hide "Trending Stories" option, added option to return rounded profile =
pics back to square, and rounded comment boxes back to rectangular
// 21.0.0   28thOct2017 Updated hide shared a link option (now hides all sh=
ared external links), Added "Explore feed" to newsfeed drop down menu, Fixe=
d hiding "Stories" box in right column and "Your Pages" in right column,add=
ed hiding "Advertiser sponsored-poll" to hide sponsored box option, fixed h=
ide "Watchlist" option, fixed broken fbp fan page icon, fixed custom reacti=
ons for some people, new hide left column link option : "Explore Feed", fix=
ed newsfeed selector menu (hiding options that have been hidden in left col=
umn), added hide "link this comment" box to the stop auto tag suggestions o=
ption, added "next unread" and "new notification from" popups (That appear =
under the globe icon) to the hide popup notifications option, excluded fbp =
from running on facebook.com/business* and /ads/manager*, added reset setti=
ngs link, fixed show deactivated friends functionality, hide fb menu links =
if the relevant hide left column link option is turned on, added "Instant G=
ames" to the hide right column link option "game/app requests",  fixed redi=
rect problem for workplace.facebook.com and beta.facebook.com when news sor=
t: most recent option was turned on, new hide options for the "add files" a=
nd "start a plan" buttons in chat, new options to hide "coloured background=
 boxes in status update box and hide "products shown:" stories, new option =
to let you change the f logo at the top left, new option to highlight publi=
c posts.
// 22.0.0   10thNov2017 New X button on all posts in newsfeed for quicker h=
iding, Dont need to be logged in to view Fan Pages, hide events box option =
also hides "celebrations" in the right column (like marriages, engagements =
etc), moved (and renamed) "Normalize Colored/Big Font Statuses" to the "col=
our, font and design" section, moved hide popup notifications option to NEW=
 notifications options section, new sort notifications chronologically opti=
on, new notifications background colour option, added option to hide relate=
d section on video pages (under hide right column links section)
// 23.0.0   24thDec2017 Fixed chronological notification sort option, fixed=
 custom reactions, fixed 360 photos being blank if background colour was se=
t, fixed square profile pics option, fixed hide "Watchlist" option, altered=
 style of "X" button to make it less intrusive, new StarTrek - Facebook, Fa=
cebook - Moustache, Arnold Schwarzenegger,Top Gear, Grrr, "Animated Pokemon=
" and "Facebooks standard non animated" reactions sets, renamed hide "Find =
Friends" left column link option to hide "Discover People", new hide left c=
olumn links option for "Recent ad activity", "Moves" and "Greetings", added=
 "Messenger Kids" to the hide "Messenger" left column link option, added "h=
ide car photo" to built in photo content filters, added hiding the "Did you=
 know" box on your Timeline/Profile page to the "Hide Nagging Questions" op=
tion, updated "shared a memory" filter to fix hiding "Year in review" video=
s, updated "hide your memories" option to fix hiding "your year in review",=
 added "suggested shows" and "Get new episodes in your watchlist" to the hi=
de sponsored box/stories option, fixed show deactivated friends link in del=
eted friends alert popup, removed all ticker code because facebook axed the=
 ticker, updated transparent newsfeed option to make trending box and statu=
s box transparent, updated "hide nagging questions" option to also hide rot=
ating the prompt in the intro section asking you "what makes you happy" etc=
 and also the prompt to add a website link, added hiding the "Gaming Video"=
 and "Live now in popular games" boxes in the right column to the "hide gam=
e/app requests" right column link option, added "Places Trending in ..." to=
 the hide "Trending Stories" newsfeed filter option, fixed custom reactions=
 for some people who were having problems, added "Celebrating Friendship" t=
o the hide "became friends" filter, added remove comment bubbles option, fi=
xed reaction images, hides new type of ads labeled as "Paid" instead of "Sp=
onsored", fixed "Zap Comments" function, new option to hide Text Animations
// 23.1.0   17thJan2018 Added option to apply Text Filter to the Trending b=
ox (located on the Trending Opts screen), fixed sort notifications chronolo=
gically option?, fixed hide all videos option, fixed hiding smileys option
// 23.2.2   20thJan2018 Updated hide sponsored posts code, fixed hide "Gree=
tings" left column link option
// 23.2.3               Updated hide sponsored posts code, New hide right c=
olumn link option "Saved Links", added an "X" button to hide the "Trending"=
 box, added an "X" button to hide the "Stories" box
// 23.4.0    1stFeb2018 Added hide left column link option "Gaming Video", =
fixed hiding "Page Stories You May Like" if hide "sponsored box" option is =
turned on
// 24.0.0   31stMar2018 Fixed newsfeed filtering, Fixed "Show Log Out Butto=
n" option, Fixed hiding saved links, added option to hide "Account Switcher=
" button,  added hiding "Choose Friends to Tag" to the hide auto tag sugges=
tions option, fixed send message button on Pages when full screen chat opti=
on is turned on, added hiding the "What your friends are watching" box to t=
he hide "Watchlist" option, changed to use MutationObserver instead of domN=
odeInserted, added warning if user puts CSS in the Text Filter box, fixed h=
idden photos in messenger if a background colour was set, fixed hide "wrote=
 on timeline" option, fixed notifications dropdown from going blank occasio=
nally when the "sort notifications chronologically" option is turned on, au=
to kill the "up next" button when watching a video, permanently save your v=
ideo volume preference, fixed hiding sponsored shared posts, fixed switchin=
g to most recent on timeline pages if "news sort: most recent" option is tu=
rned on
// 24.0.1    2ndApr2018 Fixed bug in sort notifications chronologically opt=
ion
// 24.0.2    4thApr2018 Fixed another bug in sort notifications chronologic=
ally option
// 24.1.0   17thApr2018 Fixed Hide Sponsored Box / Posts bug, that was hidi=
ng all posts in newsfeed. Updated/fixed "clear interests" functionality on =
facebooks ad prefs page, The Hide "Marketplace" option under the "Left Colu=
mn Links" heading on the FBP options screen, now also hides "Recently Viewe=
d in Marketplace" box that shows in the right column
// 24.2.3    7thMay2018 Added hide rentals in marketplace to the hide spons=
ored box /posts and hide marketplace options, added "shared a product" to t=
he hide sponsored box / posts option, fixed hide offline friends in chat op=
tion, fixed fbp news notifications, fixed hiding suggested posts, hide righ=
t column game requests option was also hiding event reminders in the right =
column, fixed hide chat box option, changed default value for hide offline =
friends option to "off", new trending option (make links go direct to news =
website), fixed trending options button not working on trending topic pages=
, fixed hide group conversations in chat list, added started a watch party =
and hosted a watch party to hide shared video option
// 24.2.4               Fixed hide offline friends in chat option, removed =
hide offline mobile friends option, updated hide watchlist option to hide f=
eatured on facebook watch, updated hide sponsored box / posts option to hid=
e various marketplace right column box
// 24.5.0    2ndJun2018 Fixed the post privacy setting menu not going away =
after change privacy setting, Added hiding the "Your Story" section below t=
he Status update box to the right column hide "Stories" box option, removed=
 option to filter trending box (instead it will filter the trending box by =
default if theres text in the Text Filter box), fixed transparent Post butt=
on and privacy selecter menu, if transparent newsfeed option was turned on.=
 fixed rounded images in messenger if revert bubble chat option was turned =
on, Added button to clear "Your Categories" on the ad prefs page
// 25.0.0   31stAug2018 Fixed hiding Sponsored Posts in Newsfeed, Fixed "Se=
nd Message" to Page button if "full screen chat" option is turned on, fixed=
 hiding new games crap in right column, added numerals to the font selector=
 preview popup text, removed old trending related code, added options to hi=
de "Business Discovery","Oculus","Creator Studio" and "Trending News" left =
column links, added hide "Create" button in top nav bar option, fixed norma=
lize status updates option
// 26.0.0   26thOct2018 Added "View video (Ad free)" link to vidoes in the =
newsfeed that contain interstitial ads, fixed fbp filtering on /seen/ page,=
 updated normalise status update option, added "posted a job" newsfeed stor=
y type to the hide sponsored box/posts option, strip out ?fbclid parameter =
facebook adds to external links, made showing the "set as background" butto=
n an option (under the "font, colour &amp; design" heading) that can be tur=
ned on or off (off by default), added "top picks in marketplace" box to the=
 hide "Marketplace" left column link option.
// 26.1.5    1stNov2018 Fixed hiding sponsored posts, New hide left column =
link "2018 Election", Fixed hiding smileys, fixed hidden "wrote on wall" tr=
iangle, fixed hiding "paid partnership" ads, renamed "On this day" left col=
umn link to "Memories"
//                      if hide nagging questions option is turned on, it h=
ides nags at top of group pages (Wondering Who's Here" / "See what members =
are recommending","start a group chat", etc), fixed bubble comment design a=
nd square profile pics options,fixed hiding text animations

// (C) Stephen Fernandez 2009-2018   https://www.fbpurity.com

// If you like F.B. Purity please donate, big or small donations, anything =
is welcome=20
// https://donate.fbpurity.com

//'use strict';

(function() {
  var fbpVersion =3D "v26.1.5";
  var debug=3D0;
  var pageisreloading=3D0;
  if(window.location.href.match(/#debug/))
    debug=3D1;

  if(debug)
    console.log('starting fbp...');

  var FBPFanPageURL =3D 'fluffbustingpurity';
  var FBPFanPageURL2=3D 'bookfacepurity';
  var FBPFanPageURLRegex =3D new RegExp("facebook.com\/(" + FBPFanPageURL +=
 "|"  +  FBPFanPageURL2 + ")");
  var FBPFanPageID=3D"408502197558"; //158385957596495
  var FBPDevPageID=3D"464154953615751";
  var FBPfanpagesmallproficon=3D"https://i.imgur.com/m3ezkAp.png";
  var fbpStyleApps=3D ".fbpblocked {border-style: dashed !important; border=
-width:2px !important; border-top: 0px !important; border-color: red !impor=
tant; display:block !important} .fbpblockedx {display:none !important} .fbp=
normal {display:none !important} ";
  var fbpStyleExtras=3D ".fbpblocked {display:none !important} .fbpblockedx=
, .fbpblockedx.fbpnormal {border-style: dashed !important; border-width:2px=
 !important; border-top: 0px !important; border-color: #545499 !important; =
display:block !important} .fbpnormal {display:none !important} ";
  var fbpStyleNormal=3D ".fbpblocked {display:none !important} .fbpblockedx=
,.fbpblockedx.fbpnormal {display:none !important} .fbpnormal {display:block=
 !important} div.fbpWL div.fbUserStory [data-tooltip-content^=3D'Shared wit=
h']:after {color:green !important;position:absolute;left:17px;top:-4px;font=
-size:13px;font-weight:normal;content:'Whitelisted'} ";
  var wrotewallicon   =3D 'h5 span.accessible_elem+i.img, div.userContentWr=
apper span.accessible_elem+i.img';
  var friendIconClass =3D 'https://i.imgur.com/SgZaFxf.png';
  var langCode;
  //var foundadcode=3D0; // adString, adclass;

  var fbpoptsobj =3D {}; // object to store prefs etc
  try {
    if (window.top!=3Dwindow.self) // dont run on framed pages
	  if(!window.location.href.match(/connect\/uiserver\.php\?/))  // but allo=
w it to work on embedded permissions pages
        return;
  }
  catch (e) {
    console.dir(e); //return;
    //alert('caught error ' + e.message);
	//unsafeWindow.console.log(e);
  }

  // only run on actual facebook pages
  try {
    if(!window.location.hostname.match(/facebook\.com$/))
      return;
  }
  catch(e) {
     console.dir(e);
	//alert('caught error ' + e.message);
	//unsafeWindow.console.log(e);
  }

  var isedge=3Dfalse;
  // Preliminary Edge &amp; WebExtension Suppport
  if (typeof msBrowser !=3D=3D 'undefined') {
    chrome =3D msBrowser;
	isedge =3D true;
  }
  else if (typeof browser !=3D 'undefined') {
    chrome =3D browser;
  }
 =20
  // set browser type
  var isfirefox=3Dwindow.navigator.userAgent.match(/Firefox/);
  var ischrome=3D(typeof(chrome)!=3D'undefined' &amp;&amp; chrome.extension=
);
  var issafari=3D (typeof GM_info =3D=3D=3D "undefined") &amp;&amp; (typeof=
(window.navigator.vendor)!=3D'undefined') &amp;&amp; (window.navigator.vend=
or.match(/Apple Computer, Inc\./)) &amp;&amp; (window.navigator.userAgent.m=
atch(/Version\/(5|6|7|8|9|10|1\d)\./));
  try{
    var ismaxthon=3Dtypeof(window.external.mxGetRuntime)=3D=3D"function"; /=
/window.navigator.userAgent.match(/Maxthon/);
    if(ismaxthon)
      var maxthonruntime =3D window.external.mxGetRuntime();
  }
  catch(e){
	console.log(e,"opera chokes on this maxthon test");
  }
  try {
    var isopera=3D(typeof(widget) &amp;&amp; typeof(widget.preferences));
  }
  catch(e) {
    var isopera=3D0;
  }
  var isasync=3D(ischrome || issafari);

  if (ischrome &amp;&amp; (!chrome.runtime)) {
    // Chrome 20-21
    chrome.runtime =3D chrome.extension;
  } else if(ischrome &amp;&amp; (!chrome.runtime.onMessage)) {
    // Chrome 22-25
    chrome.runtime.onMessage =3D chrome.extension.onMessage;
    chrome.runtime.sendMessage =3D chrome.extension.sendMessage;
    //chrome.runtime.onConnect =3D chrome.extension.onConnect;
    //chrome.runtime.connect =3D chrome.extension.connect;
  }
 =20
  // TESTING new chrome storage system (asynchronous) sync wont work becaus=
e too much data.
  /* commenting this out should make it go back to normal? */
  if (ischrome)
    var ChromeStorage=3Dchrome.storage.local; // chrome.storage.sync
 =20
  //check if another version of the script is running at the same time and =
if so give a warning.
  function checkforfbpcollision (){
    //console.log('checking for fbp collision');
   if(document.getElementById('fbpboxstyler')) { // if that element is alre=
ady there, there must be another version of fbp running
    var collisionerrormsg=3D'Error: You seem to be running 2 versions of FB=
 Purity at the same time, perhaps you are running the addon and the script =
version, you need to uninstall or disable one of them, otherwise FBP wont f=
unction correctly.';
    if(document.getElementById('FBPNewsAlert')) {
      document.getElementById('FBPNewsAlert').innerHTML=3D'&lt;span style=
=3D"color:white !important"&gt;' + collisionerrormsg + ' (&lt;a href=3D"htt=
ps://faq.fbpurity.com/#collision"&gt;More Info&lt;/a&gt;)&lt;/span&gt;';
	  document.getElementById('FBPNewsAlert').style.display=3D'inline !importa=
nt';
	}
    else {
      if(window.confirm(collisionerrormsg + "\n\nWould you like to see the =
Troubleshooting Guide help for this issue?"))
	    window.open('https://faq.fbpurity.com/#collision','_blank'); // popup =
blocker is sometimes stopping the window from opening
	    //window.location.href=3D'http://faq.fbpurity.com/#collision';
	}
   }
  }

  var fbpstyle=3Ddocument.createElement('style');=20
  var hashead=3Ddocument.getElementsByTagName('head').length;

  var fbpfreestyle=3Ddocument.createElement('style'); // for setting a "glo=
bal" font etc
  fbpfreestyle.setAttribute('id','fbpfreestyler');
  fbpfreestyle.setAttribute('type','text/css');

  var fbpboxstyle=3Ddocument.createElement('style'); // for setting whether=
 boxes are on or off
  fbpboxstyle.setAttribute('id','fbpboxstyler');
  fbpboxstyle.setAttribute('type','text/css');

  var fbpcssstyle=3Ddocument.createElement('style'); // for adding the user=
's Custom CSS and general css stuff
  fbpcssstyle.setAttribute('id','fbpcssstyler');
  fbpcssstyle.setAttribute('type','text/css');

  var fbptlstyle=3Ddocument.createElement('style');
  fbptlstyle.setAttribute('id','fbptlstyle');
  fbptlstyle.setAttribute('type','text/css');

  var ncstyle=3Ddocument.createElement('style');
  ncstyle.setAttribute('id','newscolstyle');
  ncstyle.setAttribute('type','text/css');

var fbpescaperegex =3D function(str){
   // to escape brackets entered in the custom text filter, fixes some prob=
lems, but causes others... (users regexes that require brackets wont work, =
but not many users will be using that functionality )
    var replacements =3D {
        '(': '\\(',
        ')': '\\)',
        '[': '\\[',
        ']': '\\]',
        '{': '\\{',
        '}': '\\}'
    }
    var ret =3D this;
    try {
      for(var key in replacements) {
        str =3D str.replace('' + key, replacements[''+ key],'g');
      }
    }
    catch(e) {
      console.log('error in fbpescaperegex function.',e);
    }
    return str;
};

var fbpoptslist=3D'becamefriends,becamefan,joinedgroup,attendevent,attended=
event,createdevent,commentlikeslink,commentwall,commentgroupwall,commentpag=
ewall,commenteventwall,updatedprofile,changedprofilepic,changedrelationship=
,recommendations,suggestionsbox,connectbox,sponsoredbox,pokebox,newstoriesb=
utt,typingcomment,betabox,offlinefriends,groupconvos,requestsbox,eventsbox,=
questionsbox,checkedin,uploadedphoto,sharedphoto,uploadedvideo,taggedinvide=
o,livevideo,postednote,productshown,taggedinnote,commentedonthis,likedthis,=
taggedthis,postedlink,trendingstory,fontfix,fontcolourfix,linkcolourfix,fon=
tbgcolourfix,fbpfont,fbpfontfix,fbpwebfontfix,topnavcolourfix,topnavfontcol=
ourfix,backgroundimagefix,flogoimagefix,topnavimagefix,homelink,homelinkcou=
nter,leftcolumncounters,newsfeed,filterappmessages,recentactivity,chatbox,s=
mileys,reactions,expandnewscolumn,pagestory,sortmostrecent,sortfriendfeed,f=
ixarticleredirects,upcomingevents,sharedevent,likedlink,sharedpage,commente=
dlink,likepagebutton,hideallphotos,taggedphoto,likedphoto,commentedphoto,sh=
aredvideo,likedvideo,commentedvideo,youtubevideo,sharedstatus,likedstatus,c=
ommentedstatus,taggedstatus,hideallvideos,hidealllinks,wholeleftcolumn,colo=
uredbg,lcadvertmgr,lcconnect,lcallpages,lcpagesfeed,lclikepages,lcallapps,l=
cappcenter,lcevents,lcgamesfeed,lcpokes,lcprofile,lcmusic,lcplaceseditor,lc=
allgroups,lccreategroup,lccreateframe,lccreatepage,lcfindfriends,lcfindnewg=
roups,lcdeveloper,lcfundraisers,lcfriends,lconthisday,lcbrowse,lcfbpnews,lc=
welcome,lcweather,lcnotes,lcoculus,lccreatorstudio,lclinks,lcoffers,lcmanag=
egroups,lcsaved,lcshops,lcmarketplace,lcsuggested,lcsuggestedits,lccreateev=
ent,lcphotos,lcsalegroups,lcpayments,lclivemap,lcdiscovergroups,lcyourposts=
,lcmoments,lcmovies,lcmessages,lcrecommendations,lccreate,lcshortcuts,lcins=
ights,lcjobs,lctownhall,lcorderfood,lcsafetycheck,lcexplorefeed,lcwatch,lcr=
ecentadactivity,lcmoves,lcgreetings,lcgamingvideos,lcbusinessdiscovery,lc20=
18election,notificationpopup,wholerightcolumn,rcrecommendedpages,rcrelatedg=
roups,rcpokes,rcbirthdays,rcfriendrequests,rcgamerequests,rctodaysgames,rcy=
ourpages,rclive,rcstories,rcwatchlist,rcrelatedvids,rcsavedlinks,deletedfri=
endalerts,bubblechat,condensedchat,fullscreenchat,fulltimestamps,highlightp=
ublicposts,fullURL,tlgamesapps,tlinvitefriendslikepage,tllikesbox,pymk,nona=
gs,fbpnewsnotifier,listheaderimage,listsuggestions,stretchbkgimg,transnewsf=
eed,showsetasbackgbutt,colouredbackgsquares,hidesearchbox,hidepadlock,hidea=
ccountswitcher,widescreenfeed,tagsuggestions,hidesearchpopup,hidesearchtren=
ding,hidefriendreqtopnav,hidemesstopnav,hidecreatetopnav,watchinglistening,=
topnavbarlogout,sendmoneybutt,startcallbutt,chatquickcambutt,chatplaygamebu=
tt,chataddfilesbutt,chatstartplanbutt,sharedmemory,yourmemories,hovercards,=
reactionsimagepack,reactionsimagepackfix,reactionsboost,freezetopnav,cookie=
spolicy,catphoto,dogphoto,babyphoto,childphoto,memephoto,selfiephoto,couple=
photo,foodphoto,smokingphoto,carphoto,customphotoblocklist,customphotoblock=
listfix,imagetagsonhover,seemoreexplore,seemoreshortcuts,squareprofilepics,=
commentbubbles,textanimations,notificationsbgcolour,notificationsbgcolourfi=
x,chrononotifications';  // stopautoplayvideo, lcpagesandpublicfigures, hid=
etopnavstatusbutt,  lcfbiphone,lcfbandroid, lcfundraiserscreate,lcfundraise=
rsfind,animatedgifs,commentbutton,lcallinterests,lceditprofile,fixedleftcol=
umn,offlinemobilefriends,filterTrendingBox,trendingbox,seemoretrending,fixt=
rendinglinks,hideTrTopSto,hideTrPolCat,hideTrSciCat,hideTrSpoCat,hideTrEntC=
at,ASTtoptrends,ASTpolitics,ASTscience,ASTsports,ASTentertainment,lctrendin=
gnews

var fbpoptsarr=3Dfbpoptslist.split(',');

var optsdiv=3Ddocument.createElement('div');
optsdiv.setAttribute('id','fbpoptsdiv');
optsdiv.style.zIndex=3D'300';
optsdiv.style.position=3D'absolute';
optsdiv.style.top=3D'1px';
//optsdiv.style.setProperty('background-color','white','important');
optsdiv.style.border=3D'3px solid black';
optsdiv.style.display=3D'none';

function redirectToDeactivatedFriendsPage(){
  var userProfileURL=3D'/me';
  if(document.querySelector("[data-gt=3D'{\"chrome_nav_item\":\"timeline_ch=
rome\"}\']"))
	userProfileURL=3Ddocument.querySelector("[data-gt=3D'{\"chrome_nav_item\":=
\"timeline_chrome\"}\']").getAttribute('href');
  window.location.href=3DuserProfileURL + "/friends#deactivated_friends";
}

// BEGIN new OOP stuff for deleted friends alerts
function deletedfriendsalert (theheaderhtml, thefooterhtml) {

    this.headerhtml =3D theheaderhtml;
	this.footerhtml =3D thefooterhtml;

	if(typeof(this.headerhtml)=3D=3D'undefined')
	  this.headerhtml =3D "&lt;b&gt;F.B. Purity has detected that the followin=
g people are no longer in your Friends List:&lt;/b&gt;";
	if(typeof(thefooterhtml)=3D=3D'undefined')
	  this.footerhtml =3D '&lt;b&gt;Possible reasons for this:&lt;/b&gt; They =
may have \"un-friended\" you / blocked you / temporarily deactivated or del=
eted their Facebook account, they may have been banned from facebook, it co=
uld be a facebook glitch, or you may have removed them from your friends li=
st yourself.&lt;br/&gt;&lt;p/&gt;&lt;b&gt;Please note:-&lt;/b&gt; &lt;ul&gt=
;&lt;!--li&gt;&lt;p&gt;&lt;b&gt;&amp;bull;&lt;/b&gt; If you have a large nu=
mber of friends (over 450 or more) these alerts may report inaccurate resul=
ts.--&gt;&lt;li&gt;&lt;p&gt;&lt;b&gt;&amp;bull;&lt;/b&gt; In the case of fr=
iends missing due to temporary account deactivation, or temporary ban, or F=
acebook glitch, when the account is reactivated or the fb glitch ends, your=
 friend will be back in your friend list again.&lt;p/&gt;&lt;/li&gt;&lt;li&=
gt;&lt;p&gt;&lt;b&gt;&amp;bull;&lt;/b&gt; &lt;a id=3D"deletedfriendslink" t=
itle=3D"View your full list of friends whose accounts are currently deactiv=
ated. (Will open in a new window.)" target=3D"blank" id=3D"deletedfriendsli=
nk" href=3D"javascript:;"&gt;View full list of currently deactivated friend=
s&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;&lt;li id=3D"LinkToUnfriendingPics"&gt;&lt;=
p&gt;&lt;b&gt;=E2=80=A2&lt;/b&gt; &lt;a title=3D"Link will open in a new wi=
ndow" target=3D"_blank" href=3D"//www.facebook.com/pg/WhoUnfriendedMe/photo=
s/?tab=3Dalbum&amp;album_id=3D307772632982788"&gt;View funny images related=
 to being unfriended or blocked&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt=
;p&gt;&lt;b&gt;&amp;bull;&lt;/b&gt; Deleted Friends Alerts can be turned of=
f via the FBP Options screen.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;&lt;b&=
gt;&amp;bull;&lt;/b&gt; You can show this alert again after the alert is cl=
osed, by pressing the "&lt;b&gt;F&lt;/b&gt;" key, or by clicking the "Delet=
ed Friends Alert" link in the left column of the Newsfeed.&lt;/p&gt;&lt;/li=
&gt;&lt;/ul&gt;&lt;div style=3D"text-align:center"&gt;&lt;a id=3D"cleardfal=
ink" title=3D"Reset Deleted Friends Alert" href=3D"javascript:;"&gt;Clear D=
eleted Friends Alert&lt;/a&gt;&amp;nbsp;&amp;nbsp; | &amp;nbsp;&amp;nbsp;&l=
t;a id=3D"closeDFA1" href=3D"javascript:;"&gt;Close Alert&lt;/a&gt;&lt;/div=
&gt;';

    if(!document.getElementById('delfriendsalertdiv'))  {
      this.dfa=3Ddocument.createElement('div');
      this.dfa.setAttribute('id','delfriendsalertdiv');
      this.dfa.style.zIndex=3D'301';
      this.dfa.style.position=3D'absolute';
      this.dfa.style.left=3D'300px';
      this.dfa.style.top=3D'1px';
      this.dfa.style.backgroundColor=3D'white';
      this.dfa.style.border=3D'3px solid black';
	  this.dfa.style.padding=3D'5px';
	  this.dfa.style.width=3D'300px';
      this.dfa.style.display=3D'none';
      this.dfa.innerHTML=3D'&lt;div style=3D"position:absolute;top:0px;left=
:300px"&gt;&lt;a title=3D"Close Alert" id=3D"closeDFA2" href=3D"javascript:=
;" style=3D"color:red;font-weight:bold"&gt;X&lt;/a&gt;&lt;/div&gt;' + "&lt;=
div id=3D'dfaheader' style=3D'margin-bottom:10px'&gt;&lt;table&gt;&lt;tr&gt=
;&lt;td&gt;&lt;img src=3D'" + FBPfanpagesmallproficon + "'&gt;&lt;/td&gt;&l=
t;td&gt;" + this.headerhtml + "&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div=
&gt;&lt;div id=3D'dfabelly'&gt;&lt;/div&gt;&lt;div id=3D'dfafooter' style=
=3D'margin-top:20px'&gt;" + this.footerhtml + "&lt;/div&gt;"; //old image c=
ode, may need it again:         //graph.facebook.com/" + FBPFanPageURL + "/=
picture?size=3Dsmall
    }
    else {
       this.dfa=3Ddocument.getElementById('delfriendsalertdiv');
       document.getElementById('dfabelly').innerHTML=3D'';
    }
}

deletedfriendsalert.prototype =3D {
  constructor: deletedfriendsalert,
  init:function() {
    if(!document.getElementById('delfriendsalertdiv')) {
	  if(document.getElementById('content')) { // check if we are on a main fb=
 page
	    document.getElementById('content').appendChild(this.dfa);
		window.setTimeout(function(){document.getElementById('deletedfriendslink'=
).addEventListener('click',redirectToDeactivatedFriendsPage,'false');},1500=
);
	  }
	  else
	    return;
      //document.getElementById('dfaheader').innerHTML=3Dthis.headerhtml;
	  //document.getElementById('dfafooter').innerHTML=3Dthis.footerhtml;
	}
	else {
      this.dfa=3Ddocument.getElementById('delfriendsalertdiv');
      document.getElementById('dfabelly').innerHTML=3D'';
	}
  },
  show:function ()  {
	try{
      window.localStorage.scrollTop =3D (document.documentElement.scrollTop=
||document.body.scrollTop);
	}
	catch(e){
	  console.log('Error: localstorage is disabled.')
	}
    document.getElementById('closeDFA1').addEventListener('click',closeDFAb=
ox,false);
	document.getElementById('closeDFA2').addEventListener('click',closeDFAbox,=
false);
	document.getElementById('cleardfalink').addEventListener('click',resetdfa,=
false);
	window.scrollTo(0,0);
    document.getElementById('delfriendsalertdiv').style.display=3D'block';
  },
  hide:function ()  {
    document.getElementById('delfriendsalertdiv').style.display=3D'none';
  },
  addline:function (htmltoadd)  {
    //document.getElementById('dfabelly').innerHTML+=3Dhtmltoadd;
	document.getElementById('dfabelly').insertAdjacentHTML("beforeend", htmlto=
add);
  },
  reset:function () {
    document.getElementById('dfabelly').innerHTML=3D"";
  }
}
// END new OOP stuff for deleted friends alerts

var fbptips=3D[
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Want some help with using=
 the Text Filter? Visit the &lt;a target=3D"_blank" href=3D"https://www.fbp=
urity.com/extras.htm?src=3Dfbptips#customtextfilter"&gt;Text Filter Help Se=
ction&lt;/a&gt;',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Want to further customise=
 Facebook? &lt;a target=3D"_blank" href=3D"https://fbpurity.com/css.htm?src=
=3Dfbptips"&gt;Check out FBP\'s Custom CSS&lt;/a&gt;',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: If you have any questions=
 or problems with FBP &lt;a target=3D"_blank" href=3D"https://fbpurity.com/=
faq.htm?src=3Dfbptips"&gt;Check out FBP\'s FAQ (Frequently Asked Questions)=
 / Help Page&lt;/a&gt;',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Donations help keep the F=
B Purity project alive, &lt;a href=3D"https://donate.fbpurity.com"&gt;Pleas=
e show your support and Donate&lt;/a&gt;.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Want to help test out new=
 versions of FBP before they are officially released? &lt;a href=3D"https:/=
/www.facebook.com/puritytest"&gt;Join the FBP Beta Testing Page&lt;/a&gt;.'=
,
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Please help me out by tel=
ling all your friends about FB Purity: &lt;a href=3D"https://www.facebook.c=
om/sharer.php?u=3Dhttps://www.facebook.com/fluffbustingpurity#fbpshr"&gt;Sh=
are FB Purity&lt;/a&gt;.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: If you notice your newsfe=
ed is not in chronological order, press the &lt;b&gt;R&lt;/b&gt; key and FB=
P should (R)e-sort the feed into proper chronological order.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: If you accidentally dismi=
ss a &amp;quot;Deleted Friends Alert&amp;quot; without reading it fully, or=
 just want to see it again you can re-display it by pressing the &amp;quot;=
F&amp;quot; key. Please note the alerts are cleared around an hour after th=
ey first popup.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: You can get &lt;a target=
=3D"_blank" href=3D"https://feedburner.google.com/fb/a/mailverify?uri=3DFac=
ebookPurity"&gt;FB Purity News via Email&lt;/a&gt;, you can also Follow &lt=
;a target=3D"_blank" href=3D"https://twitter.com/fbpurity"&gt;FB Purity New=
s on Twitter&lt;/a&gt; and on &lt;a target=3D"_blank" href=3D"https://plus.=
google.com/+FbpurityNews"&gt;Google Plus&lt;/a&gt;',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: If you hover your mouse p=
ointer over any of the options on the FBP options screen, extra information=
 about that option is usually displayed.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: You can backup your FBP s=
ettings by using the "Export Settings" link at the bottom of the FBP option=
s screen. This allows you to transfer your settings from one computer to an=
other, and also restore your settings if they get wiped out accidentally.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Did you know you can easi=
ly "Whitelist" Facebook Games / Apps, whose posts you want to see in your n=
ewsfeed. Do this by clicking the green "WL" link on Game/App posts that hav=
e been hidden by FBPs "App" filter.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Did you know Facebook are=
 blocking people from sharing direct links to the FBPURITY.COM website, bec=
ause they don\'t want anyone to know how good it is and they don\'t want Fa=
cebook users having control over what they see on their own computers. You =
can get around this by sharing links to the FBP fan page at http://facebook=
.com/fluffbustingpurity instead',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Did you know theres an FB=
P shortcut for scrolling your newsfeed right back to the top, if you have s=
crolled it down a long way? Just double click the "FBP" link in the top nav=
igation bar, and the newsfeed will scroll back up to the very top.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: If you have the Sort: Mos=
t Recent option turned on, and you notice a short delay when loading the ne=
wsfeed before it switches from "Top Stories" to "Most Recent", if you start=
 reading an interesting story just before FBP switches you to the "Most Rec=
ent" feed, you can easily go back to that story by using the "Newsfeed" sel=
ector at the top left of the newsfeed to switch yourself back to "Top Stori=
es" where you will be able to continue reading your story.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Did you know that FBP add=
s a Trending options button to the Trending box in the right column, allowi=
ng you to either hide the Trending box, hide specific Trending categories a=
nd auto select a specific Trending category.',
'&lt;br/&gt;&amp;nbsp;&lt;b&gt;FBP Tip&lt;/b&gt;: Did you know Facebook tra=
cks which websites you visit in your browser and uses that along with other=
 information they gather about you from your Facebook activities to build a=
n advertising profile about you. You can check the advertising profile they=
 have built for you at the following page: &lt;a href=3D"https://www.facebo=
ok.com/ads/preferences"&gt;Facebook Ad Prefs&lt;/a&gt;. F.B. Purity adds bu=
ttons to that page that let you easily erase the advertising data profile t=
hey have built for you.'
];

var fbpoptshtml=3D '&lt;div style=3D"float:left;"&gt;&lt;table style=3D"top=
:0px;margin-left:4px;"&gt;&lt;tr&gt;'+
'&lt;td valign=3D"top"&gt;&lt;a title=3D"www.fbpurity.com" href=3D"https://=
www.fbpurity.com"&gt;&lt;img width=3D"100" height=3D"100" border=3D"0" alt=
=3D"F.B. Purity Logo" src=3D"https://sites.google.com/site/st333v/fbp-1/fbp=
-ghost-lid-icon-100x100.png"&gt;&lt;/a&gt;&lt;/td&gt;'+
'&lt;td width=3D"800" valign=3D"top"&gt;' +
'&lt;h2 style=3D"display:inline" class=3D"uiHeaderTitle"&gt;F.B. Purity ' +=
 fbpVersion + ' Options&lt;/h2&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&=
amp;nbsp;' +
'&lt;table cellpadding=3D"0" cellspacing=3D"0" style=3D"margin-top:3px;widt=
h:100%"&gt;&lt;tr&gt;&lt;td&gt;&lt;a target=3D"_blank" title=3D"The Home of=
 the FB Purity browser extension" href=3D"https://www.fbpurity.com"&gt;FBP =
Website&lt;/a&gt; | &lt;a title=3D"Get the latest news about F.B. Purity" t=
arget=3D"_blank" href=3D"https://news.fbpurity.com"&gt;News&lt;/a&gt; | &lt=
;a title=3D"Learn how to use F.B. Purity" target=3D"_blank" href=3D"https:/=
/user-guide.fbpurity.com"&gt;User Guide&lt;/a&gt; | &lt;a title=3D"Get Help=
 with F.B. Purity via the FAQ ( Frequently Asked Questions )" target=3D"_bl=
ank" href=3D"https://faq.fbpurity.com"&gt;FAQ / Help Page&lt;/a&gt; | &lt;a=
 title=3D"Become a fan of FB Purity and get the latest FBP news directly in=
 your newsfeed" target=3D"_blank" href=3D"https://fans.fbpurity.com"&gt;Fan=
 Page&lt;/a&gt; | &lt;a title=3D"Get in touch" target=3D"_blank" href=3D"ht=
tps://contact.fbpurity.com"&gt;Contact&lt;/a&gt; | &lt;a title=3D"Donate to=
 FB Purity and help support the project" target=3D"_blank" href=3D"https://=
donate.fbpurity.com/"&gt;Donate&lt;/a&gt;&lt;/td&gt;&lt;td&gt;&amp;nbsp;&am=
p;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbs=
p;&lt;/td&gt;&lt;td&gt;[ &lt;a id=3D"closeoptslink" title=3D"Close Options =
Screen" href=3D"javascript:;"&gt;&lt;b&gt;X&lt;/b&gt;&lt;/a&gt; ]&lt;/td&gt=
;&lt;/tr&gt;&lt;/table&gt;'+
'&lt;table style=3D"margin-bottom:-20px"&gt;&lt;tr&gt;&lt;td&gt;&lt;a targe=
t=3D"_blank" href=3D"https://www.fbpurity.com/install.htm?v=3D' + fbpVersio=
n.split(/v/)[1] + '"&gt;Check for latest version of FBP&lt;/a&gt; &amp;nbsp=
;&amp;nbsp;|&amp;nbsp;&amp;nbsp; "Like" the &lt;a target=3D"_blank" title=
=3D"" href=3D"https://fans.fbpurity.com"&gt;FB Purity Fan Page&lt;/a&gt;.&l=
t;/td&gt;&lt;td&gt;&lt;iframe src=3D"https://www.facebook.com/plugins/likeb=
ox.php?href=3Dhttp%3A%2F%2Fwww.facebook.com%2F' + FBPFanPageURL + '&amp;amp=
;width=3D292&amp;amp;colorscheme=3Dlight&amp;amp;show_faces=3Dtrue&amp;amp;=
stream=3Dfalse&amp;amp;header=3Dfalse&amp;amp;height=3D62&amp;amp;ref=3DFBP=
_OPTIONS_SCREEN" scrolling=3D"no" frameborder=3D"0" marginwidth=3D"0" style=
=3D"border:none; overflow:hidden; width:250px; height:67px;" allowTranspare=
ncy=3D"true"&gt;&lt;/iframe&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/td&=
gt;'+
'&lt;td&gt;&lt;!--a target=3D"_blank" href=3D"https://donate.fbpurity.com"&=
gt;&lt;img style=3D"margin-top:3px" border=3D"0" src=3D"https://www.paypal.=
com/en_US/GB/i/btn/btn_donateCC_LG.gif"&gt;&lt;/a--&gt;&lt;/td&gt;'+
'&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;'+

'&lt;div style=3D"clear:both"&gt;&lt;/div&gt;'+
'&lt;div id=3D"localeproblem" style=3D"color:red;font-weight:bold;margin-le=
ft:25px;margin-right:25px;margin-bottom:10px"&gt;&lt;/div&gt;'+
'&lt;table&gt;&lt;tr&gt;&lt;td valign=3D"top"&gt;';

// add new dynamic opts
function optionsbox(mode) {
  var table, rowstyle,tinput;
  this.rownum=3D1;
  var openallboxes=3D'&lt;a title=3D"Open/Close All" href=3D"javascript:;" =
onclick=3D"this.firstChild.getAttribute(\'class\')=3D=3D\'fbpclosedlist\' ?=
 this.firstChild.setAttribute(\'class\',\'fbpopenlist\') : this.firstChild.=
setAttribute(\'class\',\'fbpclosedlist\'); document.getElementById(\'fbvari=
ousopts\').click();document.getElementById(\'fbstatusopts\').click();docume=
nt.getElementById(\'fblinkopts\').click();document.getElementById(\'fbphoto=
opts\').click();document.getElementById(\'fbvideoopts\').click();document.g=
etElementById(\'fbeventopts\').click();return false;"&gt;&lt;span class=3D"=
fbpclosedlist"&gt;&lt;/span&gt;&lt;/a&gt;'; //&amp;#9660;
  if (typeof mode !=3D'undefined' &amp;&amp; mode=3D=3D'extras') {
    this.table=3D'&lt;table&gt;&lt;tr&gt;&lt;td&gt;'+ openallboxes +'&amp;n=
bsp;&lt;b&gt;Newsfeed Filters&lt;/b&gt;&amp;nbsp;&amp;nbsp;&lt;a title=3D"H=
elp with Extra Posts List" target=3D"_blank" href=3D"https://www.fbpurity.c=
om/extras.htm"&gt;&lt;b&gt;?&lt;/b&gt;&lt;/a&gt; &lt;/td&gt;&lt;td&gt;&lt;b=
&gt;Hide&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;';
	}
  else
    //this.table=3D"&lt;table width=3D'100%'&gt;";
	this.table=3D"";
 =20
 // Use tbody to group tables instead of divs ! :)
  this.addTableHeader =3D function (title, hint, varname) {
	this.table+=3D'&lt;tbody&gt;&lt;tr title=3D""&gt;&lt;td&gt;&lt;p style=3D"=
margin-top:3px;margin-bottom:3px;font-weight:bold"&gt;&lt;a title=3D"' + hi=
nt + '" style=3D"margin-top:2px" href=3D"javascript:;" onclick=3D"document.=
getElementById(\'' + varname + '\').style.display=3D=3D\'none\' ? (function=
(){document.getElementById(\'' + varname + '\').style.display=3D\'table-row=
-group\';document.getElementById(\'' + 'fb'+ varname + '\').setAttribute(\'=
class\',\'fbpopenlist\');return false;})() : (function(){document.getElemen=
tById(\'' + varname + '\').style.display=3D\'none\';document.getElementById=
(\'' + 'fb' + varname + '\').setAttribute(\'class\',\'fbpclosedlist\');retu=
rn false;})();"&gt;&lt;span id=3D"' + 'fb' + varname + '" class=3D"fbpclose=
dlist"&gt;' + title + '&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/td&gt;&lt;td&g=
t;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;tbody id=3D"' + varname + '" styl=
e=3D"display:none"&gt;';
  }
  this.addTableSubHeader =3D function (title, hint) {
	this.table+=3D'&lt;tr style=3D"background-color:lightgrey" title=3D"' + hi=
nt + '"&gt;&lt;td colspan=3D"2"&gt;&lt;p style=3D"margin-top:3px;margin-bot=
tom:3px;font-weight:bold"&gt;' + title + '&lt;/p&gt;&lt;/td&gt;&lt;/tr&gt;'=
;
  }
  this.addTableRow =3D function(title,hint,varname,inputtype) {
    if(inputtype!=3D'')
	  tinput=3D"&lt;input id=3D'" + varname + "' type=3D'" + inputtype + "'/&g=
t;";
	else
	  tinput=3D"";
	this.table+=3D"&lt;tr title=3D'" + hint + "' style=3D'" + ((this.rownum++ =
% 2) ? "background-color:#ECEFF5 !important" : "") + "'&gt;&lt;td&gt; &lt;l=
abel class=3D'fbpoptslabel' for=3D'" + varname + "'&gt;" + title + "&lt;/la=
bel&gt;&lt;/td&gt;" + "&lt;td&gt;" + tinput + "&lt;/td&gt;&lt;/tr&gt;";
  }
  this.addTableFooter =3Dfunction(){
	this.table+=3D"&lt;/tbody&gt;";
  }
  this.buildTable =3Dfunction(endmode){
    if(typeof endmode=3D=3D'undefined')
      return this.table;
	else
	  return this.table + '&lt;/table&gt;';
  }
}

var newoptscolumn=3D'';

// Various Options
var v =3D new optionsbox('extras');
v.addTableHeader('Various Post Types','Hide Various post types from your ne=
wsfeed', 'variousopts');
v.addTableRow('The Whole Newsfeed',"Completely hide the Newsfeed (the middl=
e column of posts). If you need a break from the constant news updates, thi=
s option will totally hide the Newsfeed","newsfeed",'checkbox');
v.addTableRow('Fan Page Posts','Hide posts posted by Pages you have liked f=
rom your newsfeed','pagestory', 'checkbox');
v.addTableRow('Became Friends','Hide Became Friends posts (Person X and Per=
son Y are now friends) / &amp;quot;Celebrating Friendship&amp;quot; posts f=
rom your newsfeed','becamefriends','checkbox');
v.addTableRow('Watching / Listening to','Hide "is watching" / "is listening=
 to" / "playing" posts','watchinglistening','checkbox');
v.addTableRow('Changed Location','Hide Changed Location (Check-in) Posts / =
also "was at" and "is with"','checkedin','checkbox');
v.addTableRow('Updated Profile Info','Hide Updated Profile Posts','updatedp=
rofile','checkbox');
v.addTableRow('Joined a Group','Hide Joined Group Posts (and other group re=
lated posts)','joinedgroup','checkbox');
v.addTableRow('Products Shown:','Hide Posts that have a Products Shown: sec=
tion at the bottom','productshown','checkbox');
v.addTableRow('Posted a Note','Hide Posted Note Posts','postednote','checkb=
ox');
v.addTableRow('Tagged in Note','Hide Tagged in Note Posts','taggedinnote','=
checkbox');
v.addTableRow('Shared a Memory','Hide "Shared a Memory" Posts','sharedmemor=
y','checkbox');
v.addTableRow('Your Memories','Hide "Your Memories on Facebook" posts','you=
rmemories','checkbox');
v.addTableRow('Trending Posts','Hide Trending Posts / Articles / Trending V=
ideos / Most Shared / Popular across Facebook / Featured Topic / Top 5 Plac=
es / Places Trending / Most Shared posts from your newsfeed.','trendingstor=
y', 'checkbox'); //Recent Articles About=20
v.addTableRow('Facebook Questions / Polls','Hide Facebook Questions / Creat=
ed a Poll etc posts','questionsbox','checkbox');
v.addTableRow('Changed Relationship','Hide Changed Relationship posts from =
your newsfeed - (N.B This option no longer works 100%)','changedrelationshi=
p', 'checkbox');
v.addTableRow('Looking for Recommendations','Hide Looking for Recommendatio=
ns posts from your newsfeed','recommendations', 'checkbox');
v.addTableRow('Commented on This','Hide &amp;quot;Commented on This&amp;quo=
t; Posts','commentedonthis','checkbox');
v.addTableRow('Tagged in This','Hide &amp;quot;Tagged in This&amp;quot; Pos=
ts','taggedthis','checkbox');
v.addTableRow('Liked This','Hide &amp;quot;Liked (and Reacted to) This&amp;=
quot; Posts','likedthis','checkbox');
v.addTableFooter();
newoptscolumn+=3Dv.buildTable();

// Event Options
v=3Dnull
v=3D new optionsbox();
v.addTableHeader('Event Posts','Hide event posts from your newsfeed', 'even=
topts');
v.addTableRow('Upcoming Events','Hide Upcoming Events / Upcoming Concerts',=
'upcomingevents','checkbox');
v.addTableRow('Attending Event','Hide Attending Event / Interested in Event=
','attendevent','checkbox');
v.addTableRow('Attended Event','Hide Attended Event','attendedevent','check=
box');
v.addTableRow('Created Event','Hide Created/Added an Event','createdevent',=
'checkbox');
//v.addTableRow('Liked Event','Hide Liked Events','likedevent','checkbox');
v.addTableRow('Shared Event','Hide Shared Events','sharedevent','checkbox')=
;
v.addTableFooter();
newoptscolumn+=3Dv.buildTable();

// Link / Page Options
v=3Dnull;
v =3D new optionsbox();
v.addTableHeader('Link / Page Posts','Hide Link / Page Posts from your News=
feed', 'linkopts');
//v.addTableRow('Hide All External Links','All External Links from your New=
sfeed','hidealllinks', 'checkbox');
v.addTableRow('Liked Page','Hide (Liked / Rated / Recommended) Page Posts',=
'becamefan','checkbox');
v.addTableRow('Shared Page','Hide Shared Page Posts','sharedpage','checkbox=
');
v.addTableRow('Liked Link','Hide Liked (and Reacted to) Link Posts','likedl=
ink','checkbox');
v.addTableRow('Shared Link','Hide Shared Link Posts from your Newsfeed','po=
stedlink','checkbox');
v.addTableRow('Commented on Link','Hide Commented on Link Posts','commented=
link','checkbox');
v.addTableRow('&amp;quotLike Page&amp;quot; buttons','Hide the &amp;quot;Li=
ke Page&amp;quot; buttons from shared items in the newsfeed','likepagebutto=
n','checkbox');
v.addTableFooter();
newoptscolumn+=3Dv.buildTable();

// Photo Options
v=3Dnull;
v =3D new optionsbox();
v.addTableHeader('Photo Posts','Hide photo posts from your newsfeed', 'phot=
oopts');
v.addTableRow('Hide All Photos','Hide All Photo posts from your newsfeed','=
hideallphotos', 'checkbox');
v.addTableRow('Shared Photo','Hide Shared Photo / Album posts from your new=
sfeed','sharedphoto','checkbox');
v.addTableRow('Updated Profile Picture','Hide Updated Profile Picture / Cov=
er Photo posts from your newsfeed','changedprofilepic', 'checkbox');
v.addTableRow('Uploaded Photo','Hide Added Photo Posts','uploadedphoto','ch=
eckbox');
v.addTableRow('Tagged in Photo','Hide Tagged in Photo / Album posts','tagge=
dphoto','checkbox');
v.addTableRow('Liked Photo','Hide Liked (and Reacted to) Photo / Album post=
s','likedphoto','checkbox');
v.addTableRow('Commented on Photo','Hide Commented on Photo / Album posts',=
'commentedphoto','checkbox');

v.addTableSubHeader('Image Modifiers','Modify the image in some way');
v.addTableRow('Show Image Classifications on Hover','Show Facebooks AI imag=
e classification data (if available) when you hover over image posts in the=
 newsfeed','imagetagsonhover','checkbox');

v.addTableSubHeader('Hide Images Based on Their Contents (&lt;a target=3D"_=
blank" href=3D"https://www.fbpurity.com/faq.htm#imagecontentfiltering" titl=
e=3D"Help with Image Content Filtering"&gt;&lt;i&gt;Help&lt;i&gt;&lt;/a&gt;=
)','Hide images depending on what Facebook&amp;apos;s image recognition AI =
has identified in the picture');
v.addTableRow('Cat Photo','Hide photos containing cats','catphoto','checkbo=
x');
v.addTableRow('Dog Photo','Hide photos containing dogs','dogphoto','checkbo=
x');
v.addTableRow('Baby Photo','Hide Photos containing babies','babyphoto','che=
ckbox');
v.addTableRow('Child Photo','Hide Photos containing children','childphoto',=
'checkbox');
v.addTableRow('Meme Image','Hide Memes / Quotation Images / Images featurin=
g text','memephoto','checkbox');
v.addTableRow('Smoking Photo','Hide photos containing people smoking','smok=
ingphoto','checkbox');
v.addTableRow('Selfie Photo','Hide &amp;quot;Selfie&amp;quot; photos','self=
iephoto','checkbox');
v.addTableRow('Happy Couple Photo','Hide photos containing happy couples (2=
 people smiling)','couplephoto','checkbox');
v.addTableRow('Food Photo','Hide photos containing food','foodphoto','check=
box');
v.addTableRow('Car Photo','Hide photos containing cars','carphoto','checkbo=
x');
v.addTableSubHeader('Comma separated list of photo subjects&lt;br/&gt;you w=
ish to hide','Put a comma separated list of photo subjects you wish to hide=
. E.G. horse,cow,toilet');
v.addTableRow('&lt;input type=3D"text" id=3D"customphotoblocklist"&gt;','Hi=
de photos containing any of the subjects in this comma separated list e.g s=
nake,smoking,toilet','customphotoblocklistfix','checkbox');

v.addTableFooter();
newoptscolumn+=3Dv.buildTable();

// Video Options
v=3Dnull;
v =3D new optionsbox();
v.addTableHeader('Video Posts','Hide Video posts from your Newsfeed', 'vide=
oopts');
v.addTableRow('&lt;a onclick=3D"window.localStorage.turnOffAutoplay=3D1" ti=
tle=3D"Facebook has a built in option for disabling autoplay, click here to=
 go to Facebook\'s video settings screen" target=3D"_blank" href=3D"https:/=
/www.facebook.com/settings?tab=3Dvideos"&gt;&lt;b&gt;Click to Disable Autop=
lay&lt;/b&gt;&lt;/a&gt;','Stop videos from playing automatically','stopauto=
playvideo', '');
//v.addTableRow('Disable Autoplay','Stop videos from playing automatically'=
,'stopautoplayvideo', 'checkbox');
v.addTableRow('Hide All Videos','Hide All Video Posts from your Newsfeed','=
hideallvideos', 'checkbox');
v.addTableRow('Live Video','Hide "Is Live Now" / "Was Live" / "Planned to g=
o Live" Videos from your Newsfeed','livevideo', 'checkbox');
v.addTableRow('Shared Video','Hide Shared FB Video Posts from your Newsfeed=
','sharedvideo','checkbox');
v.addTableRow('Uploaded Video','Hide Added Video Posts','uploadedvideo','ch=
eckbox');
v.addTableRow('Tagged in Video','Hide Tagged in Video Posts','taggedinvideo=
','checkbox');
v.addTableRow('Liked Video','Hide Liked (and Reacted to) Video Posts','like=
dvideo','checkbox');
v.addTableRow('Commented on Video','Hide Commented on Video Posts','comment=
edvideo','checkbox');
v.addTableRow('Youtube / Vimeo Videos','Hide Youtube and Vimeo Video Posts'=
,'youtubevideo','checkbox');
v.addTableFooter();
newoptscolumn+=3Dv.buildTable();

// Status / Wall Options
v=3Dnull;
v =3D new optionsbox();
v.addTableHeader('Status / Wall Posts','Hide Status / Wall posts from your =
newsfeed', 'statusopts');
v.addTableRow('Shared Status / Post','Hide &amp;quot;Shared Status&amp;quot=
; &amp; &amp;quot;Shared Post&amp;quot; posts','sharedstatus','checkbox');
v.addTableRow('Liked Status','Hide &amp;quot;Liked (and Reacted to) Status&=
amp;quot; Posts','likedstatus','checkbox');
v.addTableRow('Commented on Status','Hide Commented on Status/Note/Activity=
/Post posts','commentedstatus','checkbox');
v.addTableRow('Tagged in Status','Hide Tagged / Mentioned in (Status/ Life =
Event/ Note/ Post) Posts','taggedstatus','checkbox');
v.addTableRow('Wrote on Timeline','Hide &amp;quot;Wrote on Timeline&amp;quo=
t; Posts (This should work for comments posted to event, page, user and gro=
up timelines)','commentwall','checkbox');
//v.addTableRow('Coloured / Big Font Statuses','Return Coloured Status (&am=
p;amp; Big Font Status) Updates to normal (no background colour, normal fon=
t, normal alignment, normal height','colouredbg','checkbox');
v.addTableFooter();
newoptscolumn+=3Dv.buildTable('complete');

newoptscolumn+=3D"&lt;table style=3D'padding-top:1px'&gt;&lt;tr&gt;&lt;td s=
tyle=3D'font-weight:bold;padding-left:15px' colspan=3D'2'&gt;Other Options&=
lt;/td&gt;&lt;/tr&gt;" +
// right column links options
'&lt;tr title=3D""&gt;&lt;td colspan=3D"2"&gt;&lt;p style=3D"margin-top:3px=
;margin-bottom:3px;font-weight:bold"&gt;&lt;a title=3D"Click to open/close =
the Hide Links in Right Hand Column Options" style=3D"margin-top:2px" href=
=3D"#" onclick=3D"document.getElementById(\'rightcolopts\').style.display=
=3D=3D\'block\' ? (function(){document.getElementById(\'rightcolopts\').sty=
le.display=3D\'none\';document.getElementById(\'fbprightcolopts\').setAttri=
bute(\'class\',\'fbpclosedlist\')})() : (function(){document.getElementById=
(\'rightcolopts\').style.display=3D\'block\';document.getElementById(\'fbpr=
ightcolopts\').setAttribute(\'class\',\'fbpopenlist\')})();"&gt;&lt;span id=
=3D"fbprightcolopts" class=3D"fbpclosedlist"&gt;Hide Right Column Links&lt;=
/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;div id=3D"rightcolopts" style=3D"display:n=
one"&gt;&lt;table width=3D"100%"&gt;&lt;tr title=3D"Hide the whole right co=
lumn of the newsfeed page completely" style=3D"background-color:lightgrey !=
important"&gt;&lt;td&gt;&lt;label class=3D"fbpoptslabel" for=3D"wholerightc=
olumn"&gt;Whole Right Column&lt;/td&gt;&lt;td&gt;&lt;input type=3D"checkbox=
" id=3D"wholerightcolumn"&gt;&lt;/td&gt;&lt;/tr&gt;'+
//'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hide the T=
rending Topics box in the right hand column"&gt;&lt;td&gt;&lt;label class=
=3D"fbpoptslabel" for=3D"trendingbox"&gt;Trending Topics&lt;/label&gt;&lt;/=
td&gt;&lt;td&gt;&lt;input id=3D"trendingbox" type=3D"checkbox"&gt;&lt;/td&g=
t;&lt;/tr&gt;'+
//'&lt;tr title=3D"The ticker bar is the scrolling news feed in the right h=
and column"&gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normalc=
olor:black;font-weight:normal" for=3D"happeningnowbar"&gt;News Ticker Bar&l=
t;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"happeningnowbar" type=3D"c=
heckbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr title=3D"Hide Game Requests / Recommended Games / Instant Games / G=
aming Video / Live now in popular games etc"&gt;&lt;td&gt;&lt;label class=
=3D"fbpoptslabel" for=3D"rcgamerequests"&gt;Game / App Requests&lt;/label&g=
t;&lt;/td&gt;&lt;td&gt;&lt;input type=3D"checkbox" id=3D"rcgamerequests"&gt=
;&lt;/td&gt;&lt;/tr&gt;&lt;tr title=3D"Hide the Stories box at the top righ=
t and also the &amp;quot;Your Story&amp;quot; section below the Status upda=
te box" style=3D"background-color:#ECEFF5 !important"&gt;&lt;td&gt;&lt;labe=
l class=3D"fbpoptslabel" for=3D"rcstories"&gt;Stories&lt;/label&gt;&lt;/td&=
gt;&lt;td&gt;&lt;input type=3D"checkbox" id=3D"rcstories"&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Hide &amp;quot;Recommended Pages&amp;quot; &amp; &a=
mp;quot;People Also Like&amp;quot;"&gt;&lt;td&gt;&lt;label for=3D"rcrecomme=
ndedpages" class=3D"fbpoptslabel"&gt;Recommended Pages&lt;/label&gt;&lt;/td=
&gt;&lt;td&gt;&lt;input type=3D"checkbox" id=3D"rcrecommendedpages"&gt;&lt;=
/td&gt;&lt;/tr&gt;&lt;tr title=3D"Hide Today&amp;apos;s Games" style=3D"bac=
kground-color:#ECEFF5 !important"&gt;&lt;td title=3D"Todays Games (Sports S=
cores)"&gt;&lt;label for=3D"rctodaysgames" class=3D"fbpoptslabel"&gt;Today&=
amp;apos;s Games&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input type=3D"checkb=
ox" id=3D"rctodaysgames"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;l=
abel for=3D"rcrelatedgroups" class=3D"fbpoptslabel"&gt;Suggested Groups&lt;=
/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input type=3D"checkbox" id=3D"rcrelatedg=
roups"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !i=
mportant"&gt;&lt;td&gt;&lt;label for=3D"rcpokes" class=3D"fbpoptslabel"&gt;=
Pokes&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input type=3D"checkbox" id=3D"r=
cpokes"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr title=3D"Hide the list of popular L=
ive videos in the right hand column"&gt;&lt;td&gt;&lt;label for=3D"rclive" =
class=3D"fbpoptslabel"&gt;Live&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input =
type=3D"checkbox" id=3D"rclive"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"ba=
ckground-color:#ECEFF5 !important" title=3D"Hide Events in the right column=
, including Events Happening This Week, and Related Events"&gt;&lt;td&gt;&l=
t;label for=3D"eventsbox" class=3D"fbpoptslabel"&gt;Events&lt;/label&gt;&lt=
;/td&gt;&lt;td&gt;&lt;input type=3D"checkbox" id=3D"eventsbox"&gt;&lt;/td&g=
t;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;label for=3D"rcfriendrequests" class=
=3D"fbpoptslabel"&gt;Friend Requests&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;=
input type=3D"checkbox" id=3D"rcfriendrequests"&gt;&lt;/td&gt;&lt;/tr&gt;&l=
t;tr style=3D"background-color:#ECEFF5 !important"&gt;&lt;td&gt;&lt;label f=
or=3D"rcyourpages" class=3D"fbpoptslabel"&gt;Your Pages&lt;/label&gt;&lt;/t=
d&gt;&lt;td&gt;&lt;input type=3D"checkbox" id=3D"rcyourpages"&gt;&lt;/td&gt=
;&lt;/tr&gt;&lt;tr title=3D"As well as hiding the birthdays section in the =
right column of the newsfeed, ticking this option will also hide friend&amp=
;apos; birthday related posts"&gt;&lt;td&gt;&lt;label for=3D"rcbirthdays" c=
lass=3D"fbpoptslabel"&gt;Birthdays&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;in=
put type=3D"checkbox" id=3D"rcbirthdays"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr ti=
tle=3D"Hides the &amp;quot;Watchlist&amp;quot; , &amp;quot;What your friend=
s are watching&amp;quot; , &amp;quot;Shows From Facebook Watch&amp;quot; an=
d &amp;quot;Continue Watching on Facebook Watch&amp;quot; boxes" style=3D"b=
ackground-color:#ECEFF5 !important"&gt;&lt;td&gt;&lt;label for=3D"rcwatchli=
st" class=3D"fbpoptslabel"&gt;Watchlist&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&=
lt;input type=3D"checkbox" id=3D"rcwatchlist"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;=
tr title=3D"Hide the Saved Links in the right hand column"&gt;&lt;td&gt;&lt=
;label for=3D"rcsavedlinks" class=3D"fbpoptslabel"&gt;Saved Links&lt;/label=
&gt;&lt;/td&gt;&lt;td&gt;&lt;input type=3D"checkbox" id=3D"rcsavedlinks"&gt=
;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important"=
 title=3D"The &amp;quot;Related&amp;quot; section next to videos in theatre=
 mode"&gt;&lt;td&gt;&lt;label for=3D"rcrelatedvids" class=3D"fbpoptslabel"&=
gt;Related Section&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input type=3D"chec=
kbox" id=3D"rcrelatedvids"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&=
gt;&lt;/td&gt;&lt;/tr&gt;'+
// left column links options
'&lt;tr title=3D""&gt;&lt;td colspan=3D"2"&gt;&lt;p style=3D"margin-top:3px=
;margin-bottom:3px;font-weight:bold"&gt;&lt;a title=3D"Click to open/close =
the Hide Links in Left Column Options" style=3D"margin-top:2px" href=3D"#" =
onclick=3D"document.getElementById(\'leftcolopts\').style.display=3D=3D\'bl=
ock\' ? (function(){document.getElementById(\'leftcolopts\').style.display=
=3D\'none\';document.getElementById(\'fbpleftcolopts\').setAttribute(\'clas=
s\',\'fbpclosedlist\')})() : (function(){document.getElementById(\'leftcolo=
pts\').style.display=3D\'block\';document.getElementById(\'fbpleftcolopts\'=
).setAttribute(\'class\',\'fbpopenlist\')})();"&gt;&lt;span id=3D"fbpleftco=
lopts" class=3D"fbpclosedlist"&gt;Left Column Links&lt;/span&gt;&lt;/a&gt;&=
lt;/p&gt;&lt;div id=3D"leftcolopts" style=3D"display:none"&gt;&lt;table wid=
th=3D"100%"&gt;'+
//'&lt;tr title=3D"Freezes the left column of the newsfeed page in place ev=
en when you scroll the page down"&gt;&lt;td&gt;&lt;label style=3D"color:bla=
ck;font-weight:normal" for=3D"fixedleftcolumn"&gt;Freeze Left Column&lt;/la=
bel&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"fixedleftcolumn" type=3D"checkb=
ox"&gt;&lt;/td&gt;&lt;/tr&gt;'+=20
'&lt;tr title=3D"Autoclicks the &amp;quot;Shortcuts: See More&amp;quot; lin=
k in the Left Column"&gt;&lt;td&gt;&lt;label class=3D"fbpoptslabel" for=3D"=
seemoreshortcuts"&gt;Autoclick &amp;quot;Shortcuts : See More&amp;quot;&lt;=
/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"seemoreshortcuts" type=3D"ch=
eckbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr title=3D"Autoclicks the &amp;quot;Explore: See More&amp;quot; link =
in the Left Column"&gt;&lt;td&gt;&lt;label class=3D"fbpoptslabel"  for=3D"s=
eemoreexplore"&gt;Autoclick &amp;quot;Explore : See More&amp;quot;&lt;/labe=
l&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"seemoreexplore" type=3D"checkbox"=
&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr&gt;&lt;td style=3D"text-align:right;font-weight:bold" colspan=3D"2"=
&gt;Hide&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:lightgrey !important" title=3D"Completely=
 Hides the left column of the Newsfeed"&gt;&lt;td&gt;&lt;label class=3D"fbp=
optslabel" for=3D"wholeleftcolumn"&gt;Whole Left Column&lt;/label&gt;&lt;/t=
d&gt;&lt;td&gt;&lt;input id=3D"wholeleftcolumn" type=3D"checkbox"&gt;&lt;/t=
d&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:lightgrey !important" titl=
e=3D"Hides the activity count numbers to the right of the links in the left=
 column"&gt;&lt;td&gt;&lt;label class=3D"fbpoptslabel" for=3D"leftcolumncou=
nters"&gt;Story Numbers&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"l=
eftcolumncounters" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;';

var hideleftcollinkarr=3D[['2018 Election','lc2018election','Hide the 2018 =
Election link'],['Browse','lcbrowse','Hide the "Browse" link in the left co=
lumn'],
['Buy and Sell Groups','lcsalegroups','Hide Buy&amp;Sell aka Sale Groups'],
['Business Discovery','lcbusinessdiscovery',''],
['Connect Section','lcconnect','Hide all links under the CONNECT heading'],
['Create Section','lccreate','Hide the Create Section (and all Create links=
 in left column)'],
['Create Page','lccreatepage',''],
['Create Advert','lcadvertmgr','Hide Create Advert / Adverts Manager'],
['Create Event','lccreateevent',''],
['Create a Frame','lccreateframe',''],
['Create Group','lccreategroup',''],
['Creator Studio','lccreatorstudio',''],
['Crisis Response','lcsafetycheck','Crisis Response / Safety Check'],
['Discover Groups','lcdiscovergroups',''],
['Discover People / Find Friends','lcfindfriends','Discover People / Find F=
riends'],
['Events Section','lcevents',''],
['Explore Feed','lcexplorefeed',''],
['Explore Section','lcallapps','Hide all links under the Explore heading of=
 the left column'],
['F.B. Purity News','lcfbpnews','Hide the FBP News link in the left column'=
],
['Friend Lists','lcfriends',''],
['Fundraisers Section','lcfundraisers','Hide the Fundraisers section'],
['Games','lcappcenter','Hide the "Games","Games Arcade" &amp; "Flash" links=
 in the left column'],
['Games Feed','lcgamesfeed',''],
['Gaming Video','lcgamingvideos',''],
['Greetings','lcgreetings',''],
['Groups Section','lcallgroups','Hide all links under the GROUPS heading'],
['Insights','lcinsights',''],
['Jobs','lcjobs',''],
['Like Pages','lclikepages',''],
['Links','lclinks',''],
['Live Video','lclivemap','Hide Live Video aka Live Map link'],
['Manage Apps','lcdeveloper','Hide the "Manage Apps" link (Option Used to b=
e called the Developer Section)'],
['Manage Your Groups','lcmanagegroups',''],
['Marketplace','lcmarketplace','Hides the Marketplace link in the left colu=
mn, and also the &amp;quot;Recently Viewed in Marketplace&amp;quot;, &amp;q=
uot;Still available on Marketplace&amp;quot; and &amp;quot;Top Picks on Mar=
ketplace&amp;quot; boxes in the right hand column.'],
['Memories','lconthisday','Hide Memories / This day in History'],
['Messenger','lcmessages','Hide the Messenger and Messenger Kids links in t=
he left column'],
['Moments','lcmoments',''],
['Moves','lcmoves',''],
['Movies / Films','lcmovies',''],
['Music','lcmusic',''],
['New Groups','lcfindnewgroups',''],
['Notes','lcnotes',''],
['Oculus','lcoculus',''],
['Offers','lcoffers',''],
['Order Food','lcorderfood','Hide Order Food Link'],
['Pages Feed','lcpagesfeed',''],
['Pages Section','lcallpages','Hide all links under the PAGES heading'],
['Payments Section','lcpayments','Hide all links under the Payments Heading=
'],
['Photos','lcphotos',''],
['Places Editor','lcplaceseditor',''],
['Pokes','lcpokes',''],
['Recent Ad Activity','lcrecentadactivity',''],
['Recommendations','lcrecommendations',''],
['Saved','lcsaved',''],
['Shops','lcshops',''],
['Shortcuts Section','lcshortcuts','Hide the Shortcuts section in the left =
column'],
['Suggest Edits','lcsuggestedits','Hide the the Suggest Edits link in the l=
eft column'],
['Suggested Section','lcsuggested','Hide all the links under the Suggested =
heading in the left column'],
['Town Hall','lctownhall',''],
['Your Posts','lcyourposts',''],
['Your Profile Link','lcprofile','Hide the link to your profile at the top =
of the left column'],
['Watch','lcwatch',''],
['Weather','lcweather',''],
['Welcome','lcwelcome','']];
//['Trending News','lctrendingnews',''],
// Generate the main "hide left column links" column
var hideleftcollinkhtml=3D"";
for(var i=3D0;i&lt;hideleftcollinkarr.length;i++)
  hideleftcollinkhtml+=3D"&lt;tr" + (hideleftcollinkarr[i][2].length ? (" t=
itle=3D'" + hideleftcollinkarr[i][2] + "'&gt;") : "&gt;") + "&lt;td&gt;&lt;=
label class=3D'fbpoptslabel' for=3D'" + hideleftcollinkarr[i][1] + "'&gt;" =
+ hideleftcollinkarr[i][0] +"&lt;/label&gt;&lt;/td&gt;" + "&lt;td&gt;&lt;in=
put type=3D'checkbox' id=3D'" + hideleftcollinkarr[i][1] +"'&gt;&lt;/td&gt;=
&lt;/tr&gt;";
 =20
newoptscolumn+=3Dhideleftcollinkhtml + "&lt;/table&gt;&lt;/div&gt;&lt;/td&g=
t;&lt;/tr&gt;";
//Timeline Options
v=3Dnull;
v =3D new optionsbox();
v.addTableHeader('Timeline Options','Alter the options for Timeline pages',=
 'timelineopts');
v.addTableRow('Hide Nagging Questions','Hide the nagging questions pesterin=
g you to fill in your timeline profile, prompts nagging you to update your =
Facebook status, greetings from facebook etc','nonags','checkbox');
v.addTableRow('Hide Game + App Posts','Hide Games and App Posts on Timeline=
 pages','tlgamesapps','checkbox');
v.addTableRow('Hide Likes Boxes','Hide the Likes Boxes (including Music, TV=
 Shows, Movies, Books, Sports) on Timeline pages','tllikesbox','checkbox');
v.addTableRow('Hide Invite Friends','Hide the "Invite Friends to Like this =
Page" box','tlinvitefriendslikepage','checkbox');
v.addTableFooter();
newoptscolumn+=3Dv.buildTable();

//List Options
v=3Dnull;
v =3D new optionsbox();
v.addTableHeader('List Options','Alter the options for Friends List Feeds',=
 'friendlistopts');
v.addTableRow('Hide Random Header Image','Hides the random image displayed =
at the top of Friend List feeds','listheaderimage','checkbox');
v.addTableRow('Hide List Suggestions','Hides the List Suggestions box in th=
e right column of friend list pages','listsuggestions','checkbox');
v.addTableFooter();
newoptscolumn+=3Dv.buildTable();

//Chat Options
v=3Dnull;
v =3D new optionsbox();
v.addTableHeader('Chat Options','Choose Your Chat Options', 'chatopts');
v.addTableRow('Full Screen Chat','Open Chat/Message Conversations in the In=
box (Full Screen Chat Mode)','fullscreenchat','checkbox');
v.addTableRow('Revert Bubble Chat','Change Bubble Chat Back to the Old Styl=
e Chat','bubblechat','checkbox');
v.addTableRow('Show More Friends','Fit more friends into the Chat List, so =
you dont have to scroll it so much','condensedchat','checkbox');
v.addTableRow('Hide Offline Friends','Hide Offline Friends in Chat','offlin=
efriends','checkbox');
//v.addTableRow('Hide Offline &amp;amp; Mobile Friends','Hide Offline and M=
obile Friends in Chat','offlinemobilefriends','checkbox');
v.addTableRow('Hide Group Conversations','Hide Group Conversations in Chat =
Sidebar','groupconvos','checkbox');
v.addTableRow('Hide Send Money Button','Hide the Send Money Button in Chat'=
,'sendmoneybutt','checkbox');
v.addTableRow('Hide Start a Call Button','Hide the Start a Video / Voice Ca=
ll Buttons in Chat','startcallbutt','checkbox');
v.addTableRow('Hide Play a Game Button','Hide the Play a Game Button in Cha=
t','chatplaygamebutt','checkbox');
v.addTableRow('Hide Quick Cam Button','Hide the Take a Picture using Quick =
Cam Button in Chat','chatquickcambutt','checkbox');
v.addTableRow('Hide Add Files Button','Hide the Add Files using Quick Cam B=
utton in Chat','chataddfilesbutt','checkbox');
v.addTableRow('Hide Start a Plan Button','Hide the Start a Plan Button in C=
hat','chatstartplanbutt','checkbox');
v.addTableRow('Hide Chat Box','Hide the Chat Box','chatbox','checkbox');
v.addTableFooter();
newoptscolumn+=3Dv.buildTable();


var fonts=3D['ABeeZee','Abel','Abril Fatface','Aclonica','Acme','Actor','Ad=
amina','Advent Pro','Aguafina Script','Akronim','Aladin','Aldrich','Alef','=
Alegreya','Alegreya SC','Alex Brush','Alfa Slab One','Alice','Alike','Alike=
 Angular','Allan','Allerta','Allerta Stencil','Allura','Almendra','Almendra=
 Display','Almendra SC','Amarante','Amaranth','Amatic SC','Amethysta','Anah=
eim','Andada','Andika','Angkor','Annie Use Your Telescope','Anonymous Pro',=
'Antic','Antic Didone','Antic Slab','Anton','Arapey','Arbutus','Arbutus Sla=
b','Architects Daughter','Archivo Black','Archivo Narrow','Arial Black','Ar=
ial Narrow','Arimo','Arizonia','Armata','Artifika','Arvo','Asap','Asset','A=
stloch','Asul','Atomic Age','Aubrey','Audiowide','Autour One','Average','Av=
erage Sans','Averia Gruesa Libre','Averia Libre','Averia Sans Libre','Averi=
a Serif Libre','Bad Script','Balthazar','Bangers','Barrio','Basic','Battamb=
ang','Baumans','Bayon','Belgrano','Bell MT','Bell MT Alt','Belleza','BenchN=
ine','Bentham','Berkshire Swash','Bevan','Bigelow Rules','Bigshot One','Bil=
bo','Bilbo Swash Caps','Bitter','Black Ops One','Bodoni','Bokor','Bonbon','=
Boogaloo','Bowlby One','Bowlby One SC','Brawler','Bree Serif','Bubblegum Sa=
ns','Bubbler One','Buenard','Butcherman','Butcherman Caps','Butterfly Kids'=
,'Cabin','Cabin Condensed','Cabin Sketch','Caesar Dressing','Cagliostro','C=
alibri','Calligraffitti','Cambo','Cambria','Candal','Cantarell','Cantata On=
e','Cantora One','Capriola','Cardo','Carme','Carrois Gothic','Carrois Gothi=
c SC','Carter One','Caudex','Cedarville Cursive','Ceviche One','Changa One'=
,'Chango','Chau Philomene One','Chela One','Chelsea Market','Chenla','Cherr=
y Cream Soda','Cherry Swash','Chewy','Chicle','Chivo','Cinzel','Cinzel Deco=
rative','Clara','Clicker Script','Coda','Codystar','Combo','Comfortaa','Com=
ing Soon','Concert One','Condiment','Consolas','Content','Contrail One','Co=
nvergence','Cookie','Copse','Corben','Corsiva','Courgette','Courier New','C=
ousine','Coustard','Covered By Your Grace','Crafty Girls','Creepster','Cree=
pster Caps','Crete Round','Crimson Text','Croissant One','Crushed','Cuprum'=
,'Cutive','Cutive Mono','Damion','Dancing Script','Dangrek','Dawning of a N=
ew Day','Days One','Delius','Delius Swash Caps','Delius Unicase','Della Res=
pira','Denk One','Devonshire','Dhyana','Didact Gothic','Diplomata','Diploma=
ta SC','Domine','Donegal One','Doppio One','Dorsa','Dosis','Dr Sugiyama','D=
roid Arabic Kufi','Droid Arabic Naskh','Droid Sans','Droid Sans Mono','Droi=
d Sans TV','Droid Serif','Duru Sans','Dynalight','EB Garamond','Eagle Lake'=
,'Eater','Eater Caps','Economica','Electrolize','Elsie','Elsie Swash Caps',=
'Emblema One','Emilys Candy','Engagement','Englebert','Enriqueta','Erica On=
e','Esteban','Euphoria Script','Ewert','Exo','Expletus Sans','Fanwood Text'=
,'Fascinate','Fascinate Inline','Faster One','Fasthand','Fauna One','Federa=
nt','Federo','Felipa','Fenix','Finger Paint','Fjalla One','Fjord One','Flam=
enco','Flavors','Fondamento','Fontdiner Swanky','Forum','Francois One','Fre=
ckle Face','Fredericka the Great','Fredoka One','Freehand','Fresca','Frijol=
e','Fruktur','Fugaz One','GFS Didot','GFS Neohellenic','Gabriela','Gafata',=
'Galdeano','Galindo','Garamond','Gentium Basic','Gentium Book Basic','Geo',=
'Geostar','Geostar Fill','Germania One','Gilda Display','Give You Glory','G=
lass Antiqua','Glegoo','Gloria Hallelujah','Goblin One','Gochi Hand','Gordi=
tas','Goudy Bookletter 1911','Graduate','Grand Hotel','Gravitas One','Great=
 Vibes','Griffy','Gruppo','Gudea','Habibi','Hammersmith One','Hanalei','Han=
alei Fill','Handlee','Hanuman','Happy Monkey','Headland One','Helvetica Neu=
e','Henny Penny','Herr Von Muellerhoff','Holtwood One SC','Homemade Apple',=
'Homenaje','IM Fell DW Pica','IM Fell DW Pica SC','IM Fell Double Pica','IM=
 Fell Double Pica SC','IM Fell English','IM Fell English SC','IM Fell Frenc=
h Canon','IM Fell French Canon SC','IM Fell Great Primer','IM Fell Great Pr=
imer SC','Iceberg','Iceland','Imprima','Inconsolata','Inder','Indie Flower'=
,'Inika','Irish Grover','Irish Growler','Istok Web','Italiana','Italianno',=
'Jacques Francois','Jacques Francois Shadow','Jim Nightshade','Jockey One',=
'Jolly Lodger','Josefin Sans','Josefin Sans Std Light','Josefin Slab','Joti=
 One','Judson','Julee','Julius Sans One','Junge','Jura','Just Another Hand'=
,'Just Me Again Down Here','Kameron','Karla','Kaushan Script','Kavoon','Kea=
nia One','Kelly Slab','Kenia','Khmer','Kite One','Knewave','Kotta One','Kou=
len','Kranky','Kreon','Kristi','Krona One','La Belle Aurore','Lancelot','La=
teef','Lato','League Script','Leckerli One','Ledger','Lekton','Lemon','Libr=
e Baskerville','Life Savers','Lilita One','Lily Script One','Limelight','Li=
nden Hill','Lobster','Lobster Two','Londrina Outline','Londrina Shadow','Lo=
ndrina Sketch','Londrina Solid','Lora','Love Ya Like A Sister','Loved by th=
e King','Lovers Quarrel','Luckiest Guy','Lusitana','Lustria','Macondo','Mac=
ondo Swash Caps','Magra','Maiden Orange','Mako','Marcellus','Marcellus SC',=
'Marck Script','Margarine','Marko One','Marmelad','Marvel','Mate','Mate SC'=
,'Maven Pro','McLaren','Meddon','MedievalSharp','Medula One','Megrim','Meie=
 Script','Merienda','Merienda One','Merriweather','Merriweather Sans','Meta=
l','Metal Mania','Metamorphous','Metrophobic','Michroma','Milonga','Miltoni=
an','Miltonian Tattoo','Miniver','Miss Fajardose','Miss Saint Delafield','M=
odern Antiqua','Molengo','Monda','Monofett','Monoton','Monsieur La Doulaise=
','Montaga','Montez','Montserrat','Montserrat Alternates','Montserrat Subra=
yada','Moul','Moulpali','Mountains of Christmas','Mouse Memoirs','Mr Bedfor=
d','Mr Bedfort','Mr Dafoe','Mr De Haviland','Mrs Saint Delafield','Mrs Shep=
pards','Muli','Mystery Quest','Neucha','Neuton','New Rocker','News Cycle','=
Niconne','Nixie One','Nobile','Nokora','Norican','Nosifer','Nosifer Caps','=
Nothing You Could Do','Noticia Text','Noto Sans','Noto Sans UI','Noto Serif=
','Nova Cut','Nova Flat','Nova Mono','Nova Oval','Nova Round','Nova Script'=
,'Nova Slim','Nova Square','Numans','Nunito','OFL Sorts Mill Goudy TT','Odo=
r Mean Chey','Offside','Old Standard TT','Oldenburg','Oleo Script','Oleo Sc=
ript Swash Caps','Open Sans','Oranienbaum','Orbitron','Oregano','Orienta','=
Original Surfer','Oswald','Over the Rainbow','Overlock','Overlock SC','Ovo'=
,'Oxygen','Oxygen Mono','PT Mono','PT Sans','PT Sans Caption','PT Sans Narr=
ow','PT Serif','PT Serif Caption','Pacifico','Paprika','Parisienne','Passer=
o One','Passion One','Pathway Gothic One','Patrick Hand','Patrick Hand SC',=
'Patua One','Paytone One','Peralta','Permanent Marker','Petit Formal Script=
','Petrona','Philosopher','Piedra','Pinyon Script','Pirata One','Plaster','=
Play','Playball','Playfair Display','Playfair Display SC','Podkova','Poiret=
 One','Poller One','Poly','Pompiere','Pontano Sans','Port Lligat Sans','Por=
t Lligat Slab','Prata','Preahvihear','Press Start 2P','Princess Sofia','Pro=
ciono','Prosto One','Proxima Nova','Proxima Nova Tabular Figures','Puritan'=
,'Purple Purse','Quando','Quantico','Quattrocento','Quattrocento Sans','Que=
strial','Quicksand','Quintessential','Qwigley','Racing Sans One','Radley','=
Raleway','Raleway Dots','Rambla','Rammetto One','Ranchers','Rancho','Ration=
ale','Redressed','Reenie Beanie','Revalia','Ribeye','Ribeye Marrow','Righte=
ous','Risque','Roboto','Roboto Condensed','Roboto Slab','Rochester','Rock S=
alt','Rokkitt','Romanesco','Ropa Sans','Rosario','Rosarivo','Rouge Script',=
'Ruda','Rufina','Ruge Boogie','Ruluko','Rum Raisin','Ruslan Display','Russo=
 One','Ruthie','Rye','Sacramento','Sail','Salsa','Sanchez','Sancreek','Sans=
ita One','Sarina','Satisfy','Scada','Scheherazade','Schoolbell','Seaweed Sc=
ript','Sevillana','Seymour One','Shadows Into Light','Shadows Into Light Tw=
o','Shanti','Share','Share Tech','Share Tech Mono','Shojumaru','Short Stack=
','Siamreap','Siemreap','Sigmar One','Signika','Signika Negative','Simonett=
a','Sintony','Sirin Stencil','Six Caps','Skranji','Slackey','Smokum','Smyth=
e','Snippet','Snowburst One','Sofadi One','Sofia','Sonsie One','Sorts Mill =
Goudy','Source Code Pro','Source Sans Pro','Special Elite','Spicy Rice','Sp=
innaker','Spirax','Squada One','Stalemate','Stalin One','Stalinist One','St=
ardos Stencil','Stint Ultra Condensed','Stint Ultra Expanded','Stoke','Stra=
it','Sue Ellen Francisco','Sunshiney','Supermercado One','Suwannaphum','Swa=
nky and Moo Moo','Syncopate','Tahoma','Tangerine','Taprom','Tauri','Telex',=
'Tenor Sans','Terminal Dosis','Terminal Dosis Light','Text Me One','Thabit'=
,'The Girl Next Door','Tienne','Tinos','Titan One','Titillium Web','Trade W=
inds','Trocchi','Trochut','Trykker','Tulpen One','Ubuntu','Ubuntu Condensed=
','Ubuntu Mono','Ultra','Uncial Antiqua','Underdog','Unica One','Unifraktur=
Maguntia','Unkempt','Unlock','Unna','VT323','Vampiro One','Varela','Varela =
Round','Vast Shadow','Vibur','Vidaloka','Viga','Voces','Volkhov','Vollkorn'=
,'Voltaire','Waiting for the Sunrise','Wallpoet','Walter Turncoat','Warnes'=
,'Wellfleet','Wendy One','Wire One','Yanone Kaffeesatz','Yellowtail','Yesev=
a One','Yesteryear','Zeyada'];
var webfontselecthtml=3D'&lt;select id=3D"fbpwebfont"&gt;';
for(var i=3D0;i&lt;fonts.length;i++)=20
  webfontselecthtml+=3D'&lt;option value=3D"' +  fonts[i] + '"&gt;' + fonts=
[i] + '&lt;/option&gt;';
webfontselecthtml+=3D"&lt;/select&gt;";
//select.options[select.options.length] =3D new Option(fonts[i],fonts[i]);

var customreactions =3D {
"Adventure Time":"https://i.imgur.com/Gdvm4bc.png",
"AnpanMan":"https://i.imgur.com/jQzyny0.png",
"Animated - Facebook":"https://i.imgur.com/34siCew.gif,https://i.imgur.com/=
OR6zHrB.gif,https://i.imgur.com/tmE6axL.gif,https://i.imgur.com/CeBrx43.gif=
,https://i.imgur.com/4I6Kr7w.gif,https://i.imgur.com/BAwvnaq.gif",
"Animated - Videogames":"https://i.imgur.com/9OZgHbx.gif,https://i.imgur.co=
m/onwugKW.gif,https://i.imgur.com/W2YhMCV.gif,https://i.imgur.com/zU4eawb.g=
if,https://i.imgur.com/ufgwvuJ.gif,https://i.imgur.com/egBHOda.gif",
"Animated - Pokemon":"https://i.imgur.com/X0zsdgv.gif,https://i.imgur.com/Y=
0BO1FT.gif,https://i.imgur.com/nHpcNHR.gif,https://i.imgur.com/9jW8zHQ.gif,=
https://i.imgur.com/2sYvx7o.gif,https://i.imgur.com/cHYIzaN.gif",
"Arnold Schwarzenegger":"https://i.imgur.com/N0gMtXJ.png",
"Barack Obama":"https://i.imgur.com/1rpZjXj.png",
"Benedict Cumberbatch":"https://i.imgur.com/SgSq05B.png",
"Bernie Sanders":"https://i.imgur.com/V9FH2bo.png",
"Beyonce":"https://i.imgur.com/lQElvPg.png",
"Bob Lam":"https://i.imgur.com/E42D6OJ.png",
"Britney Spears 1":"https://i.imgur.com/8vZf0I1.png",
"Britney Spears 2":"https://i.imgur.com/6odiGTY.png",
"Bruce Lee":"https://i.imgur.com/xnhUTG8.png",
"Bulldog":"https://i.imgur.com/WB7GTCW.png",
"Chip N Dale":"https://i.imgur.com/CRiXYer.png",
"Cute Bear":"https://i.imgur.com/Xxh3tjm.png",
"Cute Cat":"https://i.imgur.com/OH1lbq4.png",
"Cute Cat2":"https://i.imgur.com/FgQyDg7.png",
"Cute Fox":"https://i.imgur.com/V4DvAlV.png",
"Cute Pug":"https://i.imgur.com/hcG5bSb.png",
"Dave Grohl":"https://i.imgur.com/lL7uRWY.png",
"Doraemon":"https://i.imgur.com/ixfW79Y.png",
"Donald Trump":"https://i.imgur.com/AAsk9g0.png",
"Dr Who":"https://i.imgur.com/G9zAP2l.png",
"Facebook - Non Animated":"https://i.imgur.com/2wN0GIZ.png",
"Facebook - Moustache":"https://i.imgur.com/qehekF4.png",
"Fifi":"https://i.imgur.com/T3eHHAB.png",
"Friends":"https://i.imgur.com/f9GEXXI.png",
"Game Of Thrones":"https://i.imgur.com/fSbIxkU.png",
"Grrr Reactions":"https://i.imgur.com/9xmSU3H.png",
"Greys Anatomy":"https://i.imgur.com/zFhXpXX.png",
"Guy with Glasses":"https://i.imgur.com/nBgf8q0.png",
"Harry Potter":"https://i.imgur.com/ckRvNf3.png",
"Hatsune":"https://i.imgur.com/wBHa9yZ.png",
"Homer Simpson":"https://i.imgur.com/yKE0ttE.png",
"Halloween - Facebook":"https://i.imgur.com/SmRJ301.png",
"Hillary Clinton":"https://i.imgur.com/Fex9Kjd.png",
"Inside Out":"https://i.imgur.com/xDc1Uus.png",
"Justin Trudeau":"https://i.imgur.com/N1FOQRV.png",
"Kanye West":"https://i.imgur.com/bk1Dsat.png",
"Leonardo Dicaprio":"https://i.imgur.com/Se9ByJ3.png",
"Mark Zuckerberg":"https://i.imgur.com/r1IHiQk.png",
"Mark Zuckerberg 2":"https://i.imgur.com/p7MHpz7.png",
"Mabel Pines":"https://i.imgur.com/wcJt9zu.png",
"Marshmallow":"https://i.imgur.com/9il7XN1.png",
"Marvel":"https://i.imgur.com/4Xe7TiN.png",
"Memes":"https://i.imgur.com/QPWKaia.png",
"Michael Scott":"https://i.imgur.com/quD04by.png",
"Minions 1":"https://i.imgur.com/tlxreEb.png",
"Minions 2":"https://i.imgur.com/O46l4eM.png",
"Minions 3":"https://i.imgur.com/jcj4kHy.jpg",
"Morty (Rick&amp;)":"https://i.imgur.com/4oCbmrB.png",
"Mr T":"https://i.imgur.com/9G6zNBR.png",
"My Little Pony":"https://i.imgur.com/VFZgHsc.png",
"Oddballs":"https://i.imgur.com/EoiYOzi.png",
"Pearl":"https://i.imgur.com/TaM5ImT.png",
"Pepe Frog":"https://i.imgur.com/L2FffNF.png",
"Pokemon":"https://i.imgur.com/YJC3YPN.png",
"Rage Faces":"https://i.imgur.com/jO5O7S3.png",
"Reimu Hakurei":"https://i.imgur.com/DgPcN4p.png",
"Rhianna":"https://i.imgur.com/DAr56oW.png",
"Rick (&amp;Morty)":"https://i.imgur.com/QJJqZm0.png",
"ScruffBoy":"https://i.imgur.com/IMD9o4z.png",
"Shia LaBeouf":"https://i.imgur.com/kWnjJtA.png",
"Sims 4":"https://i.imgur.com/JbB2LXR.png",
"Smurfs":"https://i.imgur.com/hXcstVD.png",
"Star Trek - Facebook":"https://i.imgur.com/STzNiWO.png",
"StarWars1":"https://i.imgur.com/bIuPXNw.png",
"StarWars2":"https://i.imgur.com/hJpFhAi.png",
"Steven Seagal":"https://i.imgur.com/8tasD6Q.png",
"The Oatmeal":"https://i.imgur.com/8dBNzEU.png",
"Top Gear":"https://i.imgur.com/Pb7QURl.png",
"Twin Peaks":"https://i.imgur.com/RQIUlh3.png",
"Vladimir Putin":"https://i.imgur.com/GYjqzDl.png",
"World of Tanks":"https://i.imgur.com/5TbU7ZO.png",
"Zelda Link":"https://i.imgur.com/KXDjhZz.png"
};
//"ChiBird":"https://i.imgur.com/96OJaoG.png",

var reactionselectbox=3D"&lt;select id=3D\"reactionselect\" title=3D\"Click=
 to select a Custom Set of Reaction Images\"&gt;&lt;option value=3D\"\"&gt;=
Select a Reaction Pack&lt;/option&gt;";
for(i in customreactions) {
  reactionselectbox+=3D'&lt;option value=3D\"' + customreactions[i] + "\"&g=
t;" + i +"&lt;/option&gt;";
}
reactionselectbox+=3D"&lt;/select&gt;";

newoptscolumn+=3D
// fonts and colours section
'&lt;tr&gt;&lt;td colspan=3D"2" align=3D"center"&gt;&lt;p style=3D"margin-t=
op:3px;margin-bottom:3px;font-weight:bold"&gt;&lt;a title=3D"Click to open/=
close Font and Colour Options" href=3D"#" style=3D"margin-top:2px" onclick=
=3D"document.getElementById(\'fontColorSection\').style.display=3D=3D\'bloc=
k\' ? (function(){document.getElementById(\'fontColorSection\').style.displ=
ay=3D\'none\';document.getElementById(\'fbpfacopts\').setAttribute(\'class\=
',\'fbpclosedlist\')})() : (function(){document.getElementById(\'fontColorS=
ection\').style.display=3D\'block\';document.getElementById(\'fbpfacopts\')=
.setAttribute(\'class\',\'fbpopenlist\')})()"&gt;&lt;span id=3D"fbpfacopts"=
 class=3D"fbpclosedlist"&gt;Font, Colour &amp;amp; Design&lt;/span&gt;&lt;/=
a&gt;&lt;/p&gt;'+
'&lt;table id=3D"fontColorSection" style=3D"display:none"&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;b&gt;Font Size&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b=
&gt;Set&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#EC=
EFF5 !important"&gt;&lt;td&gt;&lt;input style=3D"text-align:right;width:40p=
x" id=3D"fontsize" type=3D"number" value=3D"14" min=3D"8" max=3D"60"&gt; px=
&lt;/td&gt;&lt;td&gt;&lt;input id=3D"fontfix" type=3D"checkbox"&gt;&lt;/td&=
gt;&lt;/tr&gt;' +
'&lt;tr title=3D"Select a Google Web Font name e.g Arial,Helvetica,Verdana,=
Courier"&gt;&lt;td colspan=3D"2"&gt;&lt;b&gt;Web Font&lt;/b&gt; &lt;/td&gt;=
&lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Se=
lect a Google Web Font name e.g Arial,Helvetica,Verdana,Courier"&gt;&lt;td&=
gt;' + webfontselecthtml + ' &amp;nbsp;&lt;a title=3D"Preview Selected Font=
" id=3D"fontpreview"&gt;&lt;i&gt;Preview&lt;/i&gt;&lt;/a&gt;&lt;/td&gt;&lt;=
td&gt;&lt;input id=3D"fbpwebfontfix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/t=
r&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;b&gt;Installed Font&lt;/b&gt;&lt;/td&gt;&lt;td&gt;=
&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#=
ECEFF5 !important" title=3D"Enter a font name e.g Arial,Helvetica,Verdana,C=
ourier, etc of a font you have installed on your computer. (If the font nam=
e has a space in it, put quote marks around the name)"&gt;&lt;td&gt;&lt;inp=
ut style=3D"width:90px" id=3D"fbpfont" value=3D"verdana"&gt;&lt;/td&gt;&lt;=
td&gt;&lt;input id=3D"fbpfontfix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&g=
t;' +
'&lt;tr&gt;&lt;td&gt;&lt;b&gt;Font Colour&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt=
;b&gt;&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#ECE=
FF5 !important" title=3D"Enter a colour e.g Black,White,Blue,Red,Green etc =
(You can also use CSS/HTML colour codes)"&gt;&lt;td&gt;&lt;input style=3D"w=
idth:90px" id=3D"fontcolour" value=3D"#00FF00" type=3D"color"&gt;&lt;/td&gt=
;&lt;td&gt;&lt;input id=3D"fontcolourfix" type=3D"checkbox"&gt;&lt;/td&gt;&=
lt;/tr&gt;' +
'&lt;tr title=3D"This will change the colour of links on Facebook"&gt;&lt;t=
d&gt;&lt;b&gt;Link Colour&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;=
&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" =
title=3D"Enter a colour e.g Black,White,Blue,Red,Green etc (You can also us=
e CSS/HTML colour codes)"&gt;&lt;td&gt;&lt;input style=3D"width:90px" id=3D=
"linkcolour" value=3D"#FF0000" type=3D"color"&gt;&lt;/td&gt;&lt;td&gt;&lt;i=
nput id=3D"linkcolourfix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;b&gt;Background Colour&lt;/b&gt;&lt;/td&gt;&lt;td&=
gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-colo=
r:#ECEFF5 !important"&gt;&lt;td title=3D"Enter a colour e.g Black,White,Blu=
e,Red,Green etc (You can also use CSS/HTML colour codes)"&gt;&lt;input styl=
e=3D"width:90px" id=3D"fontbgcolour" value=3D"#000000" type=3D"color"&gt;&l=
t;/td&gt;&lt;td&gt;&lt;input id=3D"fontbgcolourfix" type=3D"checkbox"&gt;&l=
t;/td&gt;&lt;/tr&gt;' +
'&lt;tr title=3D"Enter the full URL of the background image you wish to use=
, e.g https://somesite.com/someimage.jpg (Local files cannot be used) If yo=
u want to use an image file from your computer, first upload it to Facebook=
, then open the image on fb and click the Set as Background link. If you wa=
nt to use an image host other than facebook make sure they provide secure U=
RLs, as the URL must begin with https://"&gt;&lt;td&gt;&lt;b&gt;Background =
Image&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr title=3D"Enter the full URL of the background image you wish to use=
, e.g https://somesite.com/someimage.jpg (Local files cannot be used) If yo=
u want to use an image file from your computer, first upload it to Facebook=
, then open the image on fb and click the Set as Background link. If you wa=
nt to use an image host other than facebook make sure they provide secure U=
RLs, as the URL must begin with https://" style=3D"background-color:#ECEFF5=
 !important"&gt;&lt;td&gt;&lt;input style=3D"width:98%" id=3D"backgroundima=
ge" value=3D""&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"backgroundimagefix" =
type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Stretch Back=
ground image to fit the screen"&gt;&lt;td&gt;&lt;label class=3D"fbpoptslabe=
l" for=3D"stretchbkgimg"&gt;Stretch Background Image to fit&lt;/label&gt;&l=
t;/td&gt;&lt;td&gt;&lt;input id=3D"stretchbkgimg" type=3D"checkbox"&gt;&lt;=
/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td title=3D"Set the same background image for the top Nav Ba=
r as well"&gt;&lt;label class=3D"fbpoptslabel" for=3D"topnavimagefix"&gt;Us=
e same Bkg Image for Top Nav Bar&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;inpu=
t id=3D"topnavimagefix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important"&gt;&lt;td&g=
t;&lt;label class=3D"fbpoptslabel" for=3D"transnewsfeed"&gt;Make Newsfeed T=
ransparent&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"transnewsfeed"=
 type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr title=3D"Show the &amp;quot;Set as Background&amp;quot; button unde=
r photos, which lets you set a background image for the Facebook website"&g=
t;&lt;td&gt;&lt;label class=3D"fbpoptslabel" for=3D"showsetasbackgbutt"&gt;=
Show &amp;quot;Set as Background&amp;quot; button&lt;/label&gt;&lt;/td&gt;&=
lt;td&gt;&lt;input id=3D"showsetasbackgbutt" type=3D"checkbox"&gt;&lt;/td&g=
t;&lt;/tr&gt;' +
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hide the col=
oured background selection boxes in the status update box on Newsfeed and T=
imeline"&gt;&lt;td&gt;&lt;label class=3D"fbpoptslabel" for=3D"colouredbackg=
squares"&gt;Hide colored boxes in status update box&lt;/label&gt;&lt;/td&gt=
;&lt;td&gt;&lt;input id=3D"colouredbackgsquares" type=3D"checkbox"&gt;&lt;/=
td&gt;&lt;/tr&gt;' +
'&lt;tr title=3D"Return Coloured Status (&amp;amp; Big Font Status) Updates=
 to normal (no background colour, no background picture, normal font, norma=
l alignment, normal height)"&gt;&lt;td&gt;&lt;label class=3D"fbpoptslabel" =
for=3D"colouredbg"&gt;Normalize Colored / Big Font Statuses&lt;/label&gt;&l=
t;/td&gt;&lt;td&gt;&lt;input id=3D"colouredbg" type=3D"checkbox"&gt;&lt;/td=
&gt;&lt;/tr&gt;' +
'&lt;tr style=3D"background-color:#ECEFF5 !important"  title=3D"Return roun=
d profile images to square, and also rounded comment boxes to rectangular"&=
gt;&lt;td&gt;&lt;label class=3D"fbpoptslabel" for=3D"squareprofilepics"&gt;=
Bring back square profile pics&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input =
id=3D"squareprofilepics" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr  title=3D"Remove bubble design on comments"&gt;&lt;td&gt;&lt;label =
class=3D"fbpoptslabel" for=3D"commentbubbles"&gt;Remove comment bubble desi=
gn&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"commentbubbles" type=
=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hide the ani=
mations that are shown when certain words/phrases are typed in posts or com=
ments such as congrats, rad,best wishes,xoxo,you got this,bff"&gt;&lt;td&gt=
;&lt;label class=3D"fbpoptslabel" for=3D"textanimations"&gt;Hide Text Anima=
tions&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"textanimations" typ=
e=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
//&lt;br&gt;&lt;input type=3D"range"&gt; transparency range
'&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;'+


// Custom Reactions Section
'&lt;tr&gt;&lt;td colspan=3D"2" align=3D"center"&gt;&lt;p style=3D"margin-t=
op:3px;margin-bottom:3px;font-weight:bold"&gt;&lt;a title=3D"Click to open/=
close Custom Reactions Options" href=3D"#" style=3D"margin-top:2px" onclick=
=3D"document.getElementById(\'customReactionsSection\').style.display=3D=3D=
\'block\' ? (function(){document.getElementById(\'customReactionsSection\')=
.style.display=3D\'none\';document.getElementById(\'fbpcropts\').setAttribu=
te(\'class\',\'fbpclosedlist\')})() : (function(){document.getElementById(\=
'customReactionsSection\').style.display=3D\'block\';document.getElementByI=
d(\'fbpcropts\').setAttribute(\'class\',\'fbpopenlist\')})()"&gt;&lt;span i=
d=3D"fbpcropts" class=3D"fbpclosedlist"&gt;Custom Reactions&lt;/span&gt;&lt=
;/a&gt;&lt;/p&gt;'+
'&lt;table id=3D"customReactionsSection" style=3D"display:none"&gt;' +
'&lt;tr&gt;&lt;td colspan=3D"2"&gt;'+
reactionselectbox +
'&lt;/td&gt;&lt;/tr&gt;' +
//'&lt;tr&gt;&lt;td colspan=3D"2"&gt;&lt;b&gt;&lt;a title=3D"Click to set t=
he URL for a Pack of Reaction Images" href=3D"#"&gt;Image Pack&lt;/a&gt; / =
&lt;a title=3D"Click to set the URLs for individual Reaction Images" href=
=3D"#"&gt;Individual Images&lt;/a&gt;&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td title=3D"Enter the URL for a Custom Reactions Image Pack,=
 or a comma separated list of individual Reaction Image URLs in the followi=
ng order: Like,Love,Haha,Wow,Sad,Angry"&gt;&lt;b&gt;Image Pack&lt;/b&gt; &a=
mp;nbsp;&lt;a target=3D"_blank" title=3D"Custom Reactions Help / Info" href=
=3D"https://www.fbpurity.com/customize-facebook-reactions.htm"&gt;&lt;b&gt;=
Help&lt;/b&gt;&lt;/a&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Set&lt;/b&gt;&lt;/td&=
gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important"&gt;&lt;t=
d title=3D"Enter the URL for a Custom Reactions Image Pack, or a comma sepa=
rated list of individual 48x48 pixels Reaction Image URLs in the following =
order: Like,Love,Haha,Wow,Sad,Angry"&gt;&lt;input id=3D"reactionsimagepack"=
 value=3D"" type=3D"text"&gt;&lt;/td&gt;&lt;td title=3D"Tick/Untick box to =
turn Custom Reactions On/Off"&gt;&lt;input id=3D"reactionsimagepackfix" typ=
e=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Make the Rea=
ction images grow larger when you select them"&gt;&lt;td&gt;&lt;label for=
=3D"reactionsboost" class=3D"fbpoptslabel"&gt;Enlarge Reaction Images&lt;/l=
abel&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"reactionsboost" type=3D"checkb=
ox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
// https://i.imgur.com/8dBNzEU.png
//'&lt;tr&gt;&lt;td title=3D"Like Reaction Image"&gt;&lt;b&gt;Like Image UR=
L&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"backg=
round-color:#ECEFF5 !important" title=3D"Enter the URL for a reactions imag=
e"&gt;&lt;td&gt;&lt;input id=3D"reactionsimagepack" value=3D"https://i.imgu=
r.com/8dBNzEU.png" type=3D"text"&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"li=
keimagefix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
//'&lt;tr&gt;&lt;td title=3D"Love Reaction Image"&gt;&lt;b&gt;Love Image UR=
L&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"backg=
round-color:#ECEFF5 !important" title=3D"Enter the URL for a reactions imag=
e"&gt;&lt;td&gt;&lt;input id=3D"reactionsimagepack" value=3D"https://i.imgu=
r.com/8dBNzEU.png" type=3D"text"&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"lo=
veimagefix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
//'&lt;tr&gt;&lt;td title=3D"Haha Reaction Image"&gt;&lt;b&gt;Haha Image UR=
L&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"backg=
round-color:#ECEFF5 !important" title=3D"Enter the URL for a reactions imag=
e"&gt;&lt;td&gt;&lt;input id=3D"reactionsimagepack" value=3D"https://i.imgu=
r.com/8dBNzEU.png" type=3D"text"&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"ha=
haimagefix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
//'&lt;tr&gt;&lt;td title=3D"Wow Reaction Image"&gt;&lt;b&gt;Wow Image URL&=
lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"backgro=
und-color:#ECEFF5 !important" title=3D"Enter the URL for a reactions image"=
&gt;&lt;td&gt;&lt;input id=3D"reactionsimagepack" value=3D"https://i.imgur.=
com/8dBNzEU.png" type=3D"text"&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"wowi=
magefix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
//'&lt;tr&gt;&lt;td title=3D"Sad Reaction Image"&gt;&lt;b&gt;Sad Image URL&=
lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"backgro=
und-color:#ECEFF5 !important" title=3D"Enter the URL for a reactions image"=
&gt;&lt;td&gt;&lt;input id=3D"reactionsimagepack" value=3D"https://i.imgur.=
com/8dBNzEU.png" type=3D"text"&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"sadi=
magefix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
//'&lt;tr&gt;&lt;td title=3D"Angry Reaction Image"&gt;&lt;b&gt;Angry Image =
URL&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"bac=
kground-color:#ECEFF5 !important" title=3D"Enter the URL for a reactions im=
age"&gt;&lt;td&gt;&lt;input id=3D"reactionsimagepack" value=3D"https://i.im=
gur.com/8dBNzEU.png" type=3D"text"&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"=
angryimagefix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;/table&gt;' +

// top nav bar options
'&lt;tr&gt;&lt;td colspan=3D"2" align=3D"center"&gt;&lt;p style=3D"margin-t=
op:3px;margin-bottom:3px;font-weight:bold"&gt;&lt;a title=3D"Click to open/=
close Top Nav Bar Options" href=3D"#" style=3D"margin-top:2px" onclick=3D"d=
ocument.getElementById(\'topnavSection\').style.display=3D=3D\'block\' ? (f=
unction(){document.getElementById(\'topnavSection\').style.display=3D\'none=
\';document.getElementById(\'fbptopnavopts\').setAttribute(\'class\',\'fbpc=
losedlist\')})() : (function(){document.getElementById(\'topnavSection\').s=
tyle.display=3D\'block\';document.getElementById(\'fbptopnavopts\').setAttr=
ibute(\'class\',\'fbpopenlist\')})()"&gt;&lt;span id=3D"fbptopnavopts" clas=
s=3D"fbpclosedlist"&gt;Top Nav Bar Options&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;=
'+
'&lt;table id=3D"topnavSection" style=3D"display:none"&gt;' +
'&lt;tr&gt;&lt;td title=3D"Top Nav Bar Background Colour"&gt;&lt;b&gt;Top N=
av Bar Bkg Colour&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Set&lt;/b&gt;&lt;/=
td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=
=3D"Enter a colour e.g Black,White,Blue,Red,Green etc (You can also use CSS=
/HTML colour codes)"&gt;&lt;td&gt;&lt;input style=3D"width:90px" id=3D"topn=
avcolour" value=3D"#c0c0c0" type=3D"color"&gt;&lt;/td&gt;&lt;td&gt;&lt;inpu=
t id=3D"topnavcolourfix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;b&gt;Top Nav Bar Font Colour&lt;/b&gt;&lt;/td&gt;&=
lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !im=
portant" title=3D"Enter a colour e.g Black,White,Blue,Red,Green etc (You ca=
n also use CSS/HTML colour codes)"&gt;&lt;td&gt;&lt;input style=3D"width:90=
px" id=3D"topnavfontcolour" value=3D"#000000" type=3D"color"&gt;&lt;/td&gt;=
&lt;td&gt;&lt;input id=3D"topnavfontcolourfix" type=3D"checkbox"&gt;&lt;/td=
&gt;&lt;/tr&gt;' +
//'&lt;tr&gt;&lt;td title=3D"Set a Background image for the top Nav Bar"&gt=
;&lt;b&gt;Top Nav Bar Bkg Image&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&l=
t;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Ente=
r the full URL of the background image you wish to use, e.g https://somesit=
e.com/someimage.jpg (Local files cannot be used)"&gt;&lt;td&gt;&lt;input st=
yle=3D"width:140px" id=3D"topnavimage" value=3D""&gt;&lt;/td&gt;&lt;td&gt;&=
lt;input id=3D"topnavimagefix" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'=
 +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Shows the Logout button in the top navigation bar"&=
gt;&lt;td&gt;&lt;label for=3D"topnavbarlogout" class=3D"fbpoptslabel"&gt;Sh=
ow Log Out button&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"topnavb=
arlogout" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hides=
 the Create button in the top navigation bar"&gt;&lt;td&gt;&lt;label for=3D=
"hidecreatetopnav" class=3D"fbpoptslabel"&gt;Hide &amp;quot;Create&amp;quot=
; Button&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"hidecreatetopnav=
" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Hides the Home link in the top navigation bar"&gt;&=
lt;td&gt;&lt;label for=3D"homelink" class=3D"fbpoptslabel"&gt;Hide &amp;quo=
t;Home&amp;quot; Link&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"hom=
elink" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hides=
 the counter next to the Home link in the top navigation bar"&gt;&lt;td&gt;=
&lt;label for=3D"homelinkcounter" class=3D"fbpoptslabel"&gt;Hide &amp;quot;=
Home&amp;quot; Link Count&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D=
"homelinkcounter" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Hides the Quick Help (Question Mark) icon in the to=
p navigation bar"&gt;&lt;td&gt;&lt;label for=3D"hidepadlock" class=3D"fbpop=
tslabel"&gt;Hide Quick Help Icon&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;inpu=
t id=3D"hidepadlock" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hides=
 the search box in the top navigation bar"&gt;&lt;td&gt;&lt;label for=3D"hi=
desearchbox" class=3D"fbpoptslabel"&gt;Hide Search Box&lt;/label&gt;&lt;/td=
&gt;&lt;td&gt;&lt;input id=3D"hidesearchbox" type=3D"checkbox"&gt;&lt;/td&g=
t;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Hides the Search box pop up suggestions in the top =
navigation bar"&gt;&lt;td&gt;&lt;label for=3D"hidesearchpopup" class=3D"fbp=
optslabel"&gt;Hide Search Box Popup&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;i=
nput id=3D"hidesearchpopup" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hides=
 the Trending / Popular / Recent  Search Suggestions in the Search box pop =
up"&gt;&lt;td&gt;&lt;label for=3D"hidesearchtrending" class=3D"fbpoptslabel=
"&gt;Hide the Trending Search Suggestions&lt;/label&gt;&lt;/td&gt;&lt;td&gt=
;&lt;input id=3D"hidesearchtrending" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/t=
r&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Hides the Cookies Policy Bar in the Top Navigation =
Bar"&gt;&lt;td&gt;&lt;label for=3D"cookiespolicy" class=3D"fbpoptslabel"&gt=
;Hide the "Cookies Policy" bar&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input =
id=3D"cookiespolicy" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
//'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&=
lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hid=
e the Status button in the top nav bar"&gt;&lt;td&gt;Hide Status Button&lt;=
/td&gt;&lt;td&gt;&lt;input id=3D"hidetopnavstatusbutt" type=3D"checkbox"&gt=
;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hides=
 Friend Requests icon in the top navigation bar"&gt;&lt;td&gt;&lt;label for=
=3D"hidefriendreqtopnav" class=3D"fbpoptslabel"&gt;Hide Friend Requests But=
ton&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"hidefriendreqtopnav" =
type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Hides the Messenger button in the top navigation ba=
r"&gt;&lt;td&gt;&lt;label for=3D"hidemesstopnav" class=3D"fbpoptslabel"&gt;=
Hide Messenger Button&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"hid=
emesstopnav" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hides=
 the Account Switcher button in the top navigation bar"&gt;&lt;td&gt;&lt;la=
bel for=3D"hideaccountswitcher" class=3D"fbpoptslabel"&gt;Hide Account Swit=
cher Button&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"hideaccountsw=
itcher" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Freezes the top nav bar so it doesnt disappear when=
 the page is scrolled down"&gt;&lt;td&gt;&lt;label for=3D"freezetopnav" cla=
ss=3D"fbpoptslabel"&gt;Freeze Top Nav Bar&lt;/label&gt;&lt;/td&gt;&lt;td&gt=
;&lt;input id=3D"freezetopnav" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'=
 +
'&lt;tr style=3D"background-color:#ECEFF5 !important"&gt;&lt;td title=3D"Ch=
ange the Facebook &amp;quot;f&amp;quot; logo image in the top left corner"&=
gt;&lt;b&gt;Replace Facebook &amp;quot;f&amp;quot; Logo Image (&lt;a title=
=3D"More info and example images that you can try" target=3D"_blank" href=
=3D"https://www.fbpurity.com/news/f-b-purity-v21-0-0-is-out-fixing-various-=
issues-and-adding-some-funky-new-stuff/#changefacebooklogo"&gt;&lt;i&gt;inf=
o&lt;/i&gt;&lt;/a&gt;)&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;=
&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Enter the ful=
l URL of the 28 by 28 pixel image you wish to use to replace the F logo in =
the top left corner, e.g https://somesite.com/someimage.jpg (Local files ca=
nnot be used)"&gt;&lt;td&gt;&lt;input style=3D"width:98%" id=3D"flogoimage"=
 value=3D""&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"flogoimagefix" type=3D"=
checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;'+

// notification options
'&lt;tr&gt;&lt;td colspan=3D"2" align=3D"center"&gt;&lt;p style=3D"margin-t=
op:3px;margin-bottom:3px;font-weight:bold"&gt;&lt;a title=3D"Click to open/=
close Notification Options" href=3D"#" style=3D"margin-top:2px" onclick=3D"=
document.getElementById(\'notificationSection\').style.display=3D=3D\'block=
\' ? (function(){document.getElementById(\'notificationSection\').style.dis=
play=3D\'none\';document.getElementById(\'fbpnotificationopts\').setAttribu=
te(\'class\',\'fbpclosedlist\')})() : (function(){document.getElementById(\=
'notificationSection\').style.display=3D\'block\';document.getElementById(\=
'fbpnotificationopts\').setAttribute(\'class\',\'fbpopenlist\')})()"&gt;&lt=
;span id=3D"fbpnotificationopts" class=3D"fbpclosedlist"&gt;Notification Op=
tions&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;'+
'&lt;table id=3D"notificationSection" style=3D"display:none"&gt;' +
'&lt;tr&gt;&lt;td title=3D"Unread Notifications Background Colour"&gt;&lt;b=
&gt;Unread Notifications Color&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Set&l=
t;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !imp=
ortant" title=3D"Enter a colour e.g Black,White,Blue,Red,Green etc (You can=
 also use CSS/HTML colour codes)"&gt;&lt;td&gt;&lt;input style=3D"width:90p=
x" id=3D"notificationsbgcolour" value=3D"#FFC0CB" type=3D"color"&gt;&lt;/td=
&gt;&lt;td&gt;&lt;input id=3D"notificationsbgcolourfix" type=3D"checkbox"&g=
t;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr title=3D"Clicking the bell notifications icon in the top nav=
igation bar will open the notifications sorted in the correct chronological=
 order"&gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normal" for=
=3D"chrononotifications"&gt;Sort Notifications Chronologically&lt;/label&gt=
;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"chrononotifications" type=3D"checkbox=
"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&lt=
;/tr&gt;&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"This =
option hides Facebook\'s Notification box that specifically pop up in the b=
ottom left corner (Please note there are also other types of notifications =
on Facebook, but there are different methods to hide those, please check th=
e FBP FAQ for more info.)"&gt;&lt;td&gt;&lt;label style=3D"color:black;font=
-weight:normal" for=3D"notificationpopup"&gt;Hide Notification Popups&lt;/l=
abel&gt; &amp;nbsp;(&lt;a title=3D"How to hide Facebooks various notificati=
on types - FB Purity FAQ" href=3D"https://faq.fbpurity.com/#facebooknotific=
ations"&gt;Info&lt;/a&gt;)&lt;/td&gt;&lt;td&gt;&lt;input id=3D"notification=
popup" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' + // (and also the \'Ne=
xt Unread\', and \'New Notifications from\' popups that show below the Glob=
e icon)=20
//'&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;&lt;/b&gt;&lt;/td&gt;&=
lt;/tr&gt;&lt;tr&gt;&lt;td colspan=3D"2"&gt;Facebook uses many different no=
tification methods, fbp can hide some of them, but others are controlled by=
 Facebook settings, &lt;a title=3D"How to control Facebook notifications - =
FB Purity FAQ" href=3D"https://faq.fbpurity.com"&gt;click for more info&lt;=
/a&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;'+

// beta options
'&lt;tr&gt;&lt;td colspan=3D"2" align=3D"center"&gt;&lt;p style=3D"margin-t=
op:3px;margin-bottom:3px;font-weight:bold"&gt;&lt;a title=3D"Click to open/=
close Experimental Options. *Please note these options may not work correct=
ly*" href=3D"#" style=3D"margin-top:2px" onclick=3D"document.getElementById=
(\'betaSection\').style.display=3D=3D\'block\' ? (function(){document.getEl=
ementById(\'betaSection\').style.display=3D\'none\';document.getElementById=
(\'fbpbetaopts\').setAttribute(\'class\',\'fbpclosedlist\')})() : (function=
(){document.getElementById(\'betaSection\').style.display=3D\'block\';docum=
ent.getElementById(\'fbpbetaopts\').setAttribute(\'class\',\'fbpopenlist\')=
})()"&gt;&lt;span id=3D"fbpbetaopts" class=3D"fbpclosedlist"&gt;Experimenta=
l Options&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;'+
'&lt;table id=3D"betaSection" style=3D"display:none"&gt;' +
'&lt;tr style=3D"background-color:#ECEFF5 !important"&gt;&lt;td colspan=3D"=
2"&gt;These options are experimental, &lt;br/&gt;and not working 100%, and =
will&lt;br/&gt;cause display problems. Only use them&lt;br/&gt;if you are a=
ware of this.&lt;/td&gt;&lt;/tr&gt;' +
//'&lt;tr title=3D"Experimental Feature: This option will apply your newsfe=
ed filters to the posts in the news ticker in the right hand column. N.B Th=
is option currently only works when you are on the newsfeed page"&gt;&lt;td=
&gt;&lt;label style=3D"color:black;font-weight:normal" for=3D"newstickertex=
tfilter"&gt;Apply Filters to News Ticker&lt;/label&gt;&lt;/td&gt;&lt;td&gt;=
&lt;input id=3D"newstickertextfilter" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/=
tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Experimental=
 Feature: This option will optimise the newsfeed for widescreen monitors. (=
has only been tested at a resolution of 1920 x 1080) N.B This option only w=
orks on the newsfeed page, and will cause display glitches on other pages"&=
gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normal" for=3D"wide=
screenfeed"&gt;Widescreen Newsfeed&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;in=
put id=3D"widescreenfeed" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
//'&lt;tr style=3D"background-color:#ECEFF5 !important" valign=3D"top" titl=
e=3D"Experimental Feature: Enables the display of animated gifs on Facebook=
. (Converts links to animated gifs on external sites to actual gifs) - This=
 option is now obsolete, as Facebook displays the gifs itself."&gt;&lt;td&g=
t;&lt;label style=3D"color:black;font-weight:normal" for=3D"animatedgifs"&g=
t;Show Animated Gifs&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"anim=
atedgifs" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+  //onclick=3D"if (t=
his.checked) if(confirm(\'The Show Animated Gifs option is an experimental =
feature.\\n\\nBy their nature Animated Gifs can use up lots of CPU cycles, =
RAM and bandwidth.\\n\\nAre you sure you want to turn this feature on?\')) =
return true; else return false;"
//'&lt;tr title=3D"** UPDATE: Please note this option no longer works ** : =
Selecting this option restores the comment button, though submitting a comm=
ent will be a 2 step submit process for techical reasons, if you dont like =
it, untick this box to make it hidden again. Theres a shortcut for submitti=
ng a comment when you have the comment button option enabled, and it is to =
press Tab, then Enter, then Enter again."&gt;&lt;td&gt;&lt;label style=3D"c=
olor:black;font-weight:normal" for=3D"commentbutton"&gt;&lt;strike&gt;Resto=
re Comment Button&lt;/strike&gt;&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;inpu=
t id=3D"commentbutton" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;/table&gt;';

// end new options layout
fbpoptshtml +=3D newoptscolumn ;
var loadingfriendlistmsg=3D"Loading friend list...";
var deletedfriendsstate=3D''; // this variable doesnt seem necessary, can b=
e removed...

fbpoptshtml +=3D '&lt;/td&gt;&lt;td valign=3D"top"&gt;'+
'&lt;table&gt;&lt;tr&gt;&lt;td valign=3D"top"&gt;&lt;b&gt;More Options&lt;/=
b&gt;&lt;/td&gt;&lt;td valign=3D"top"&gt;&lt;b&gt;Hide&lt;/b&gt;&lt;/td&gt;=
&lt;td rowspan=3D"23" width=3D"12"&gt;&lt;/td&gt;&lt;td valign=3D"top" rows=
pan=3D"23" width=3D"405"&gt; ' +
// new custom text filter/ css / app whitelist tabs
'&lt;span id=3D"custextheader" title=3D"Click to access the Text Filter" st=
yle=3D"font-weight:bold;background:#ECEFF5;border:1 solid"&gt;&lt;a href=3D=
"#"&gt;Text Filter&lt;/a&gt;&lt;/span&gt; - ' +
'&lt;span id=3D"friendwhitelistheader" title=3D"Click to access the Friend =
Whitelist"&gt;&lt;a href=3D"#"&gt;Friend Whitelist&lt;/a&gt;&lt;/span&gt; -=
 ' +
'&lt;span id=3D"appwhitelistheader"&gt;&lt;a title=3D"Click to access the A=
pplication Whitelist" href=3D"#"&gt;App Whitelist&lt;/a&gt;&lt;/span&gt; - =
' +
'&lt;span id=3D"custcssheader"&gt;&lt;a title=3D"Click to access the Custom=
 CSS BOX" href=3D"#"&gt;CSS&lt;/a&gt;&lt;/span&gt;&lt;br/&gt;' +
'&lt;span id=3D"custextdesc" style=3D"background:#ECEFF5;" title=3D"Please =
note, \'Regular Expressions\' can also be used."&gt;Enter the words or phra=
ses, on separate lines, that you wish to filter from the NewsFeed. (&lt;a t=
itle=3D"Help with the Text Filter" target=3D"_blank" href=3D"https://www.fb=
purity.com/extras.htm#customtextfilter"&gt;&lt;b&gt;Text Filter Help&lt;/b&=
gt;&lt;/a&gt;) &lt;br/&gt;&lt;/span&gt;&lt;span style=3D"display:none" id=
=3D"custcssdesc"&gt;Enter the Custom CSS code you would like applied to fac=
ebook.  (&lt;a title=3D"Help with Custom CSS" target=3D"_blank" href=3D"htt=
ps://www.fbpurity.com/facebook-css.htm"&gt;&lt;b&gt;CSS Help and examples&l=
t;/b&gt;&lt;/a&gt;)&lt;/span&gt;&lt;span style=3D"display:none" id=3D"frien=
dwhitelistdesc"&gt;Add friends whose posts you dont want filtered out (&lt;=
a title=3D"Help with Friend Whitelist" target=3D"_blank" href=3D"https://ww=
w.fbpurity.com/whitelist.htm#friends"&gt;&lt;b&gt;Friend Whitelist Help&lt;=
/b&gt;&lt;/a&gt;)&lt;/span&gt;&lt;span style=3D"display:none" id=3D"appwhit=
elistdesc"&gt;Enter the numeric application IDs, on separate lines, of the =
apps/games whose posts you wish to allow in your news feed (&lt;a title=3D"=
Help with Application Whitelist" target=3D"_blank" href=3D"https://www.fbpu=
rity.com/whitelist.htm"&gt;&lt;b&gt;App Whitelist Help&lt;/b&gt;&lt;/a&gt;)=
&lt;/span&gt;' +
'&lt;textarea style=3D"width:404px;height:275px" id=3D"custextta"&gt;cust t=
ext filter&lt;/textarea&gt;&lt;textarea style=3D"display:none;" id=3D"custc=
ssta"&gt;Custom CSS&lt;/textarea&gt;&lt;div id=3D"friendwhitelistta" style=
=3D"display:none"&gt;&lt;div id=3D"friendlistloadingdiv"&gt;&lt;p/&gt;&lt;b=
&gt;' + loadingfriendlistmsg + '&lt;/b&gt;&lt;/div&gt;&lt;p/&gt;&lt;div id=
=3D"friendselectdiv"&gt;&lt;/div&gt;&lt;p/&gt;&lt;div id=3D"friendwhitelist=
div"&gt;&lt;/div&gt;&lt;/div&gt;&lt;textarea style=3D"display:none;" id=3D"=
appwhitelistta"&gt;app whitelist&lt;/textarea&gt;' +

fbptips[Math.floor(Math.random() * fbptips.length)] +

'&lt;br/&gt;&lt;div id=3D"fbpnewsdiv"&gt;&lt;/div&gt;'+
'&lt;div id=3D"donatediv" style=3D"margin-top:25px"&gt;' +
'&lt;p&gt;If you like F.B. Purity and would like to show your appreciation =
for all the work I have put into it and also support future development, pl=
ease &lt;a href=3D"https://donate.fbpurity.com/"&gt;make a donation&lt;/a&g=
t;.&lt;br/&gt;&lt;/p&gt;' +
'&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;a target=3D"_blank" href=3D"https://d=
onate.fbpurity.com"&gt;&lt;img style=3D"margin-top:3px" border=3D"0" height=
=3D"47" width=3D"160" src=3D"https://www.paypal.com/en_US/GB/i/btn/btn_dona=
teCC_LG.gif"&gt;&lt;/a&gt;&lt;/td&gt;&lt;td&gt;&amp;nbsp;&lt;/td&gt;&lt;td&=
gt;Please tell all your friends about FBP too&lt;/td&gt;&lt;td&gt;&lt;a hre=
f=3D"https://www.facebook.com/sharer.php?u=3Dhttps://www.facebook.com/' + F=
BPFanPageURL + '#fbpshr" title=3D"Share on Facebook" target=3D"_blank"&gt;&=
lt;img style=3D"vertical-align:bottom" width=3D"123" height=3D"22" border=
=3D"0" src=3D"https://sites.google.com/site/st333v/fbp-1/shareonfacebook.gi=
f" alt=3D"Share on Facebook"&gt;&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&=
gt;'+
'&lt;/div&gt;'+
'&lt;/td&gt;&lt;/tr&gt;'+

'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hiding the s=
ponsored box also hides Sponsored Posts in the newsfeed, Suggested Posts, S=
uggested For You, Page Stories you may like, Facebook Offers, People you ma=
y know, People to subscribe to boxes"&gt;&lt;td&gt;&lt;label style=3D"color=
:black;font-weight:normal" for=3D"sponsoredbox"&gt;Sponsored Box / Posts&lt=
;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"sponsoredbox" type=3D"check=
box"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr title=3D"Un-Tick this if you dont want FBP to filter out applicatio=
n and game posts from the newsfeed"&gt;&lt;td&gt;&lt;label style=3D"color:b=
lack;font-weight:normal" for=3D"filterappmessages"&gt;Game + App Posts&lt;/=
label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"filterappmessages" type=3D"ch=
eckbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"This option =
hides the smileys and stickers and replaces them with their text equivalent=
, if possible"&gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:norm=
al" for=3D"smileys"&gt;Graphical Smileys / Emoticons&lt;/label&gt;&lt;/td&g=
t;&lt;td&gt;&lt;input id=3D"smileys" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/t=
r&gt;'+
'&lt;tr title=3D"This option hides the Reactions bar that shows the differe=
nt like types (Reactions) when you hover over the like button"&gt;&lt;td&gt=
;&lt;label style=3D"color:black;font-weight:normal" for=3D"reactions"&gt;Re=
actions Bar&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"reactions" ty=
pe=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
//'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"This optio=
n hides Facebook\'s Notification box that specifically pop up in the bottom=
 left corner. (Please note there are also other types of notifications on F=
acebook, but there are different methods to hide those, please check the FB=
P FAQ for more info.)"&gt;&lt;td&gt;&lt;label style=3D"color:black;font-wei=
ght:normal" for=3D"notificationpopup"&gt;Notification Popup Box&lt;/label&g=
t;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"notificationpopup" type=3D"checkbox"=
&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hides the Pe=
ople You May Know Boxes"&gt;&lt;td&gt;&lt;label style=3D"color:black;font-w=
eight:normal" for=3D"pymk"&gt;People You May Know&lt;/label&gt;&lt;/td&gt;&=
lt;td&gt;&lt;input id=3D"pymk" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'=
+
'&lt;tr title=3D"Hides the Tag Suggestions that popup while you are typing.=
 N.B. When this option is set, you can re-enable tag suggestions temporaril=
y by typing the \'@\' symbol"&gt;&lt;td&gt;&lt;label style=3D"color:black;f=
ont-weight:normal" for=3D"tagsuggestions"&gt;Auto Tag Suggestions&lt;/label=
&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"tagsuggestions" type=3D"checkbox"&=
gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hides the in=
fo popups that show when you hover over a User\'s or Page\'s name or icon"&=
gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normal" for=3D"hove=
rcards"&gt;Profile Hovercards&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input i=
d=3D"hovercards" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
//'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Hide the T=
rending Topics box in the right hand column"&gt;&lt;td&gt;&lt;label style=
=3D"color:black;font-weight:normal" for=3D"trendingbox"&gt;Trending Topics&=
lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"trendingbox" type=3D"chec=
kbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
//'&lt;tr title=3D"The ticker bar is the scrolling news feed in the right h=
and column"&gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normal"=
 for=3D"happeningnowbar"&gt;News Ticker Bar&lt;/label&gt;&lt;/td&gt;&lt;td&=
gt;&lt;input id=3D"happeningnowbar" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr=
&gt;'+
'&lt;tr title=3D"Hides the &amp;apos;New Stories&amp;apos; Popup Button"&gt=
;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normal" for=3D"newsto=
riesbutt"&gt;&amp;apos;New Stories&amp;apos; Popup Button&lt;/label&gt;&lt;=
/td&gt;&lt;td&gt;&lt;input id=3D"newstoriesbutt" type=3D"checkbox"&gt;&lt;/=
td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important"  title=3D"Hides the &=
amp;apos;is typing a comment&amp;apos; box that appears when someone is wri=
ting a comment on a post"&gt;&lt;td&gt;&lt;label style=3D"color:black;font-=
weight:normal" for=3D"typingcomment"&gt;&amp;apos;Is Typing a Comment&amp;a=
pos;&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"typingcomment" type=
=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
//'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Completely=
 hide the Newsfeed (the middle column of posts). If you need a break from t=
he constant news updates, this option will totally hide the Newsfeed"&gt;&l=
t;td&gt;&lt;label style=3D"color:black;font-weight:normal" for=3D"newsfeed"=
&gt;Newsfeed&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"newsfeed" ty=
pe=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;' +
'&lt;tr style=3D"display:none"&gt;&lt;td&gt;Beta Tester Box&lt;/td&gt;&lt;t=
d&gt;&lt;input id=3D"betabox" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+

'&lt;tr&gt;&lt;td style=3D"padding-top:10px"&gt;&lt;b&gt;Further Options&lt=
;/b&gt;&lt;/td&gt;&lt;td title=3D"Set (Meaning: Turn On)" style=3D"padding-=
top:10px"&gt;&lt;b&gt;Set&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"With this op=
tion ticked FBP will alert you if any of your friends un-friend/block you o=
r deactivate their account."&gt;&lt;td&gt;&lt;label style=3D"color:black;fo=
nt-weight:normal" for=3D"deletedfriendalerts"&gt;Deleted Friend Alerts&lt;/=
label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"deletedfriendalerts" type=3D"=
checkbox" ' +  deletedfriendsstate + '&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr title=3D"Force the Newsfeed to stay on \'Most Recent\'. N.B If you =
don\'t want new Comments or Likes on old posts pushing the posts back to th=
e top of the Most Recent feed, you should also tick the hide \'Commented on=
 This\' and hide \'Liked This\' options under the \'Various Story Types\' h=
eading."&gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normal" fo=
r=3D"sortmostrecent"&gt;News Sort : Most Recent&lt;/label&gt;&lt;/td&gt;&lt=
;td&gt;&lt;input id=3D"sortmostrecent" type=3D"checkbox"&gt;&lt;/td&gt;&lt;=
/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Force the Ne=
wsfeed to stay on \'Friends Feed\'. The friends feed only shows posts from =
your friends in chronological order, none from Fan Pages, so it should load=
 quicker if you just want to check what your friends are up to."&gt;&lt;td&=
gt;&lt;label style=3D"color:black;font-weight:normal" for=3D"sortfriendfeed=
"&gt;News Sort: Friends Feed&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=
=3D"sortfriendfeed" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr  title=3D"Expands the main news column\'s width and hides the remin=
ders column (including birthdays)"&gt;&lt;td&gt;&lt;label style=3D"color:bl=
ack;font-weight:normal" for=3D"expandnewscolumn"&gt;Expand News Column&lt;/=
label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"expandnewscolumn" type=3D"che=
ckbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important" title=3D"Makes extern=
al links go directly to the site rather than being redirected by Facebook"&=
gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normal" for=3D"fixa=
rticleredirects"&gt;Fix External Links&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&l=
t;input id=3D"fixarticleredirects" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&=
gt;'+
'&lt;tr title=3D"Display the full URL of shared link posts in the newsfeed"=
&gt;&lt;td&gt;&lt;label style=3D"color:black;font-weight:normal" for=3D"ful=
lURL"&gt;Show Full URL on Shared Links&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&l=
t;input id=3D"fullURL" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr style=3D"background-color:#ECEFF5 !important"  title=3D"Display the=
 full date and time on posts in the newsfeed"&gt;&lt;td&gt;&lt;label style=
=3D"color:black;font-weight:normal" for=3D"fulltimestamps"&gt;Show Full Dat=
e/Time on Posts&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D"fulltimes=
tamps" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr title=3D"Highlight public posts in the Newsfeed"&gt;&lt;td&gt;&lt;l=
abel style=3D"color:black;font-weight:normal" for=3D"highlightpublicposts"&=
gt;Highlight Public Posts&lt;/label&gt;&lt;/td&gt;&lt;td&gt;&lt;input id=3D=
"highlightpublicposts" type=3D"checkbox"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;tr&gt;&lt;td colspan=3D"2" style=3D"text-align:center;padding-top:26px=
"&gt;&lt;input id=3D"fbpsavesettings" type=3D"button" onclick=3D"this.disab=
led=3D1;" value=3D"Save and Close" class=3D"inputsubmit uiButton uiButtonCo=
nfirm uiButtonMedium"&gt; &lt;input id=3D"closefbpsettings" type=3D"button"=
 value=3D"Cancel" class=3D"inputsubmit uiButton uiButtonConfirm uiButtonMed=
ium"&gt;&lt;/td&gt;&lt;/tr&gt;'+
'&lt;/table&gt;' +

//'&lt;p/&gt;&lt;p/&gt;'+

'&lt;br/&gt;&lt;form&gt;&lt;textarea id=3D"fbpsettingstext" style=3D"displa=
y:none"&gt;&lt;/textarea&gt;&lt;/form&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&g=
t;'+
'&lt;div&gt;&lt;div style=3D"float:left;margin-bottom:10px;margin-left:10px=
;margin-top:-10px"&gt;&lt;a id=3D"exportsettingslink" title=3D"Backup your =
FBP Settings" href=3D"javascript:;"&gt;Export Settings&lt;/a&gt; / &lt;a id=
=3D"importsettingslink" title=3D"Import your previously saved FBP settings"=
 href=3D"javascript:;"&gt;Import Settings&lt;/a&gt; / &lt;a title=3D"Help w=
ith Exporting and Importing Settings" target=3D"_blank" href=3D"https://www=
.fbpurity.com/faq.htm#importexport"&gt;&lt;b&gt;?&lt;/b&gt;&lt;/a&gt; &lt;i=
nput type=3D"file" id=3D"fileElem" accept=3D".txt" style=3D"display:none"/&=
gt;&lt;/div&gt;&lt;div style=3D"float:right;margin-bottom:10px;margin-right=
:10px;margin-top:-10px"&gt;&lt;a title=3D"Reset FBPs settings back to their=
 original installation values" id=3D"fbpresetlink" href=3D"javascript:;"&gt=
;Reset Settings&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;';

var fbpfirstrunhtml=3D'&lt;div id=3D"fbpfirstrundiv" style=3D"width:600px;b=
order:solid 3px;margin-left:150px;padding:8px;font-size:14px;font-family:ve=
rdana;background:white !important"&gt;'+
'&lt;table width=3D"100%"&gt;&lt;tr&gt;&lt;td width=3D"66%" style=3D"text-a=
lign:right"&gt;&lt;a target=3D"_blank" href=3D"https://www.fbpurity.com"&gt=
;&lt;img style=3D"margin-left:auto;margin-right:auto" border=3D"0" src=3D"h=
ttps://s-media-cache-ak0.pinimg.com/236x/dd/d1/cf/ddd1cfe41f4c70b1594a96549=
2e47f32.jpg"&gt;&lt;/a&gt;&lt;/td&gt;&lt;td width=3D"33%" valign=3D"top" st=
yle=3D"text-align:right"&gt;&lt;a href=3D"#" title=3D"Close" onclick=3D"doc=
ument.getElementById(\'fbpfirstrundiv\').style.display=3D\'none\'"&gt;&lt;b=
&gt;X&lt;/b&gt;&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;'+
'&lt;br/&gt;'+
'&lt;div id=3D"firstpara"&gt;&lt;p&gt;Hello there! It looks like this is yo=
ur first time running &lt;b&gt;F.B. Purity&lt;/b&gt; &lt;a title=3D"If you =
are repeatedly seeing this message, then it means FBP cannot save its setti=
ngs, or its settings are getting wiped out, please click here for the Troub=
leshooting Guide" href=3D"https://www.fbpurity.com/faq.htm#troubleshooting"=
&gt;&lt;b&gt;*&lt;/b&gt;&lt;/a&gt;'+
'&lt;br/&gt;&lt;span style=3D"font-size:9px"&gt;If you are seeing this scre=
en repeatedly, you need to follow the &lt;a href=3D"https://www.fbpurity.co=
m/faq.htm#troubleshooting"&gt;FB Purity Troubleshooting Guide&lt;/a&gt;.&lt=
;/span&gt;&lt;/p&gt;' +
'&lt;p&gt;The functionality of this extension is closely linked to the curr=
ent design of the Facebook website. When Facebook change the design or func=
tionality of the site, this can sometimes stop F.B. Purity from working cor=
rectly.&lt;/p&gt;' +
'&lt;p&gt;In order to keep up to date with news of any changes that may bre=
ak F.B. Purity and for news of new versions of F.B Purity that fix any prob=
lems or add new functionality, it is extremely important that you click the=
 like button for the F.B. Purity Fan page on Facebook (below). By doing thi=
s you should receive news of updates directly in your newsfeed, and you wil=
l also be able to leave feedback about the extension there too.&lt;p/&gt;'+
'&lt;div&gt;&lt;p&gt;&lt;b&gt;First Step:&lt;/b&gt; Click Like: &lt;iframe =
src=3D"https://www.facebook.com/plugins/likebox.php?href=3Dhttp%3A%2F%2Fwww=
.facebook.com%2F' + FBPFanPageURL + '&amp;amp;width=3D292&amp;amp;colorsche=
me=3Dlight&amp;amp;show_faces=3Dtrue&amp;amp;stream=3Dfalse&amp;amp;header=
=3Dfalse&amp;amp;height=3D62&amp;amp;ref=3DFBP_WELCOME_POPUP" scrolling=3D"=
no" frameborder=3D"0" marginwidth=3D"0" style=3D"border:none; overflow:hidd=
en; width:295px; height:67px;" allowTransparency=3D"true"&gt;&lt;/iframe&gt=
;&lt;/p&gt;&lt;/div&gt;'+
'&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;Next Step:&lt;/b&gt; &lt;a onclick=3D=
"document.getElementById(\'firstpara\').style.display=3D\'none\';document.g=
etElementById(\'secondpara\').style.display=3D\'block\';" href=3D"javascrip=
t:;"&gt;Click here for instructions on how to use F.B. Purity&lt;/a&gt;&lt;=
/p&gt;&lt;/div&gt;'+

'&lt;div id=3D"secondpara" style=3D"display:none"&gt;&lt;p&gt;To change F.B=
. Purity&amp;apos;s settings, click either the &amp;apos;&lt;b&gt;FBP&lt;/b=
&gt;&amp;apos; or &amp;apos;&lt;b&gt;F.B. Purity&lt;/b&gt;&amp;apos; link a=
t the top of your newsfeed and to learn more about how F.B. Purity works, p=
lease read the &lt;a target=3D"_blank" href=3D"https://www.fbpurity.com/use=
r-guide.htm"&gt;F.B. Purity User Guide&lt;/a&gt;&lt;p/&gt;'+
'&lt;p&gt;If you have any problems with F.B. Purity, please check out the &=
lt;a target=3D"_blank" href=3D"https://www.fbpurity.com/#troubleshooting"&g=
t;F.B. Purity Troubleshooting Guide / Help Page&lt;/a&gt;&lt;/p&gt;'+
'&lt;p&gt;If you have any questions about F.B. Purity, please first read th=
e &lt;a target=3D"_blank" href=3D"https://www.fbpurity.com/faq.htm"&gt;F.B.=
 Purity FAQ (Frequently Asked Questions)&lt;/a&gt; as your questions are mo=
st likely answered there.&lt;/p&gt;'+

'&lt;p&gt;If you like F.B. Purity, please show your support by &lt;a target=
=3D"_blank" href=3D"https://www.fbpurity.com/donate.htm"&gt;Donating&lt;/a&=
gt;, as developing, maintaining and supporting this project is an awful lot=
 of work, and I dont get paid for this. Please also tell all your friends a=
bout F.B. Purity too.&lt;/p&gt;'+
'&lt;p&gt;Thanks!&lt;/p&gt;'+
'&lt;p&gt;Steve -  The Developer of &lt;a target=3D"_blank" href=3D"https:/=
/www.fbpurity.com"&gt;F.B. (Fluff Busting) Purity&lt;/a&gt;&lt;/p&gt;'+
'&lt;table width=3D"100%"&gt;&lt;tr&gt;&lt;td style=3D"text-align:center"&g=
t;&lt;a onclick=3D"document.getElementById(\'fbpfirstrundiv\').style.displa=
y=3D\'none\'" href=3D"#"&gt;Close&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table=
&gt;&lt;/div&gt;'+
'&lt;/div&gt;';

function hideotherdivs(e) {
  var tastyle=3D"";
  var divname=3De.target.parentNode.id.split(/header/)[0];
  var boxlist=3D"custext,friendwhitelist,appwhitelist,custcss";
  var boxarr=3Dboxlist.split(',');
  for (var i in boxarr)
    if(boxarr[i]=3D=3Ddivname) {
	  document.getElementById(divname + "header").setAttribute('style','backgr=
ound:#ECEFF5; font-weight:bold; font-size:15; border:1 solid');
	  document.getElementById(divname + "desc").setAttribute('style','display:=
block;background:#ECEFF5;');
	  tastyle=3D"display:block;width:404px;height:275px";
	  if(divname=3D=3D'friendwhitelist')
	    tastyle+=3D";overflow-y:auto";
	  document.getElementById(divname + "ta").setAttribute('style',tastyle);
    }
    else {
	  document.getElementById(boxarr[i] + 'header').setAttribute('style','back=
ground:white;font-weight:normal;font-size:14;border:0');
	  document.getElementById(boxarr[i] + 'desc').setAttribute('style','displa=
y:none');
	  document.getElementById(boxarr[i] + 'ta').setAttribute('style','display:=
none;');
    }
}

function closefontpreview(ev) {
  document.getElementById('fontpreviewdiv').style.display=3D"none";
}

function showfontpreview(ev) {
  var fontpreviewstyle,fontpreviewdiv,fontsampletext;
  if(!document.getElementById('fontpreviewstyle')){
	createfontlink('fontpreviewstyle');
	fontpreviewdiv=3Ddocument.createElement('div');
	fontpreviewdiv.id=3D'fontpreviewdiv';
	fontpreviewdiv.innerHTML=3D"&lt;h1 align=3D'center' style=3D'color:white;m=
argin-bottom:10px'&gt;FB Purity Font Preview Window&lt;/h1&gt;&lt;div id=3D=
'fontsampletext' style=3D'padding:10px'&gt;THE QUICK BROWN FOX JUMPED OVER =
THE LAZY DOG&lt;br/&gt;the quick brown fox jumped over the lazy dog&lt;br/&=
gt;1234567890&lt;/div&gt;&lt;button id=3D'closefontpreview' style=3D'margin=
-top:15px'&gt;Close Font Preview&lt;/button&gt;";
	fontpreviewdiv.setAttribute('style','position:relative;clear:both;padding:=
10px;border:3px solid;background-color:rgb(58, 87, 149);top:-560px;left:380=
px;width:400px;height:auto;text-align:center;z-Index:1000');
	document.getElementById('fbpoptsdiv').appendChild(fontpreviewdiv);
  }
  if(!fontpreviewdiv)
	fontpreviewdiv=3Ddocument.getElementById('fontpreviewdiv');

  if(fontpreviewdiv.style.display=3D=3D"none")
	fontpreviewdiv.style.display=3D"block";

  document.getElementById('closefontpreview').addEventListener('click',clos=
efontpreview,false);
 =20
  document.getElementById('fontpreviewstyle').setAttribute('href','https://=
fonts.googleapis.com/css?family=3D' + document.getElementById('fbpwebfont')=
[document.getElementById('fbpwebfont').selectedIndex].value);
  if(document.getElementById('fontcolourfix').checked)
	document.getElementById('fontsampletext').style.setProperty ("color",docum=
ent.getElementById('fontcolour').value);
  else
	document.getElementById('fontsampletext').style.setProperty ("color","blac=
k");

  if(document.getElementById('fontbgcolourfix').checked)
	document.getElementById('fontsampletext').style.setProperty ("background-c=
olor",document.getElementById('fontbgcolour').value);
  else
	document.getElementById('fontsampletext').style.setProperty ("background-c=
olor","white");

  if(document.getElementById('fontfix').checked)
    document.getElementById('fontsampletext').style.setProperty ("font-size=
",document.getElementById('fontsize').value + "px", "important");
  else
	document.getElementById('fontsampletext').style.setProperty ("font-size","=
inherit"); =20

  document.getElementById('fontsampletext').style.setProperty ("font-family=
",document.getElementById('fbpwebfont')[document.getElementById('fbpwebfont=
').selectedIndex].value,"important");

}

function reactionselect(e){
	var rs=3Ddocument.getElementById("reactionselect");
	document.getElementById('reactionsimagepack').value=3Drs[rs.selectedIndex]=
.value;
	document.getElementById('reactionsimagepackfix').checked=3Dtrue;
	showreactionspreview();
	rs=3Dnull;
}

function showcurrentreactionselection(){
  var rs=3Ddocument.getElementById("reactionselect");
  var curpack=3Ddocument.getElementById('reactionsimagepack').value;
 =20
  for(i in rs.options)=20
	if(rs[i].value=3D=3Dcurpack) {
      rs.selectedIndex=3Di;
	  break;
	}
}

function closereactionspreview(ev) {
  document.getElementById('reactionspreviewdiv').style.display=3D"none";
}

function showreactionspreview(ev) {
  var reactionspreviewdiv;
  var reactarr=3D["like","love","haha","wow","sad","angry"];
  if(!document.getElementById('reactionspreviewdiv')){
	reactionspreviewdiv=3Ddocument.createElement('div');
	reactionspreviewdiv.id=3D'reactionspreviewdiv';
	reactionspreviewdiv.innerHTML=3D"&lt;h1 align=3D'center' style=3D'color:wh=
ite;margin-bottom:10px'&gt;FB Purity Custom Reactions Preview Window&lt;/h1=
&gt;&lt;div id=3D'reactionssample' style=3D'padding:10px'&gt;&lt;i title=3D=
'Like' class=3D'like'&gt;&lt;/i&gt;&lt;i title=3D'Love' class=3D'love'&gt;&=
lt;/i&gt;&lt;i title=3D'Haha' class=3D'haha'&gt;&lt;/i&gt;&lt;i title=3D'Wo=
w' class=3D'wow'&gt;&lt;/i&gt;&lt;i title=3D'Sad' class=3D'sad'&gt;&lt;/i&g=
t;&lt;i title=3D'Angry' class=3D'angry'&gt;&lt;/i&gt;&lt;button id=3D'close=
reactionspreview' style=3D'margin-top:15px'&gt;Close Reactions Preview&lt;/=
button&gt;";
	reactionspreviewdiv.setAttribute('style','position:relative;clear:both;pad=
ding:10px;border:3px solid;background-color:rgb(58, 87, 149);top:-560px;lef=
t:380px;width:400px;height:auto;text-align:center;z-Index:1000');
	document.getElementById('fbpoptsdiv').appendChild(reactionspreviewdiv);
  }
  else
	reactionspreviewdiv=3Ddocument.getElementById('reactionspreviewdiv');

  if(reactionspreviewdiv.style.display=3D=3D"none")
	reactionspreviewdiv.style.display=3D"block";

  if(!document.getElementById('reactionspreviewstyle')){
	  var reactionspreviewstyle=3Ddocument.createElement('style');
	  reactionspreviewstyle.setAttribute('id','reactionspreviewstyle');
	  document.getElementsByTagName('head')[0].appendChild(reactionspreviewsty=
le);
  }
  var selectedReactionValue=3Ddocument.getElementById('reactionselect')[doc=
ument.getElementById('reactionselect').selectedIndex].value;
 =20
  if(!selectedReactionValue.match(/,/)) { // single image for all reactions
    document.getElementById('reactionspreviewstyle').innerText=3D"#reaction=
spreviewdiv i.like {background-position:0 -144px!important} #reactionsprevi=
ewdiv i.love {background-position:0 -192px!important} #reactionspreviewdiv =
i.haha {background-position:0 -95px!important} #reactionspreviewdiv i.wow {=
background-position:0 -288px!important} #reactionspreviewdiv i.sad {backgro=
und-position:0 -240px!important} #reactionspreviewdiv i.angry {background-p=
osition:0 0!important}" +
      "#reactionspreviewdiv i {background-image:url(" + document.getElement=
ById('reactionselect')[document.getElementById('reactionselect').selectedIn=
dex].value +");background-size:auto;background-repeat:no-repeat;height:48px=
;width:48px;display:inline-block}";
  }
  else { // separate reaction images
    //console.log('separate reaction images');
	//document.getElementById('reactionspreviewstyle').innerText=3D"#reactions=
previewdiv i.like {background-image:url("
	var rcount=3D0;
	document.getElementById('reactionspreviewstyle').innerText=3D"";
	for(i in reactarr) {
	  document.getElementById('reactionspreviewstyle').innerText+=3D"#reaction=
spreviewdiv i." + reactarr[i] + " {background-image:url(" + selectedReactio=
nValue.split(',')[rcount] + ")" + ";background-size:auto;background-repeat:=
no-repeat;height:48px;width:48px;display:inline-block}";
	  rcount++;
	}
  }
  // show labels =20
  document.getElementById('reactionspreviewstyle').innerText+=3D"#reactions=
previewdiv i:after { top: -20px !important; position: relative;font-weight:=
bold} #reactionspreviewdiv i.like:after { content: 'Like'} #reactionsprevie=
wdiv i.love:after { content: 'Love'} #reactionspreviewdiv i.haha:after { co=
ntent: 'Haha'} #reactionspreviewdiv i.wow:after { content: 'Wow'} #reaction=
spreviewdiv i.sad:after { content: 'Sad'} #reactionspreviewdiv i.angry:afte=
r { content: 'Angry'}";
=09

  document.getElementById('closereactionspreview').addEventListener('click'=
,closereactionspreview,false);
 =20
}
=09
function importSettingsTxtFile(e) {
  var tFile =3D e.target.files[0];
=20
  if (tFile) {
    var r =3D new FileReader();
      r.onload =3D function(e) {
	    var contents =3D e.target.result;
		console.log("Attempting File Import\nFile Contents:\n----\n" + contents);
		processImportedSettingsText(contents);
        /*window.alert( "Got the file.n"=20
              +"name: " + tFile.name + "n"
              +"type: " + tFile.type + "n"
              +"size: " + tFile.size + " bytesn"
              + "starts with: " + contents.substr(1, contents.indexOf("n"))
        );*/ =20
      }
      r.readAsText(tFile);
  } else {=20
      window.alert("Failed to load file");
  }
}

function importsettingsbasic(ev) {

  ev.preventDefault();
 =20
  if((typeof(window.btoa)=3D=3D"function") &amp;&amp; window.confirm('Do yo=
u wish to import your FBP\'s settings from a text file?')) {
	var fileElem =3D document.getElementById("fileElem");
    if (fileElem) {
	  if(isopera)
		fileElem.style.display=3D"block";
	  fileElem.addEventListener("change",importSettingsTxtFile,false);
	  fileElem.click(); =20
    }
  } else
      var fbpsettingstext=3Dwindow.prompt('F.B. Purity Settings Importer\n\=
nPaste in your saved FBP settings text, then click OK.\n\nOr if you want to=
 reset your FBP settings to the defaults, enter the word "Reset" without th=
e quotes.');
=20
  processImportedSettingsText(fbpsettingstext);
 =20
}

function processImportedSettingsText(fbpsettingstext) {
  if(fbpsettingstext=3D=3Dnull)
    return;
 =20
  if(fbpsettingstext.toLowerCase()=3D=3D"reset") {
    resetfbpsettings();
    return;
  }

  if(!fbpsettingstext.length) {
     window.alert('You didnt enter valid settings text');
     return;
  }
  else {
    try {
      JSON.parse(fbpsettingstext);
    }
    catch(e) {
      window.alert('Error, settings text malformed, not valid. Import faile=
d!');
      return;
    }
    fbpsavevalue('fbpoptsjson-' + currentuserid,fbpsettingstext);

    window.alert('Import Successful. FBP Settings have been updated! Page w=
ill now reload.');

    //close prefs screen
    document.getElementById('fbpoptsdiv').style.display=3D'none';

    //reload page to refresh preferences
    window.location.reload(true);
  }
}
function exportsettingsbasic(ev) {
  ev.preventDefault();
  exportsettingsbasic2();
}

function resetfbpsettings() {
	if(!window.confirm("Do you wish to reset FBP's settings to their defaults?=
"))
	  return;
	window.alert('Your settings will now be reset to the installation defaults=
, and the page will reload.');
	fbpsavevalue('fbpoptsjson-' + currentuserid,"");
	//close prefs screen
    document.getElementById('fbpoptsdiv').style.display=3D'none';
	window.location.reload(true);
}
// figure out how to use callbacks, may be a better solution here....

function b64EncodeUnicode(str) { // needed for saving unicode text with BTO=
A
    return window.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, f=
unction(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function exportsettingsbasic2(opts) {
 var exporttext,el;
 var edge=3D0;
 if(window.navigator.userAgent.match(/Edge\/\d+/))
	 edge=3D1;
 if((!edge) &amp;&amp; (!ischrome)) {
  if(!opts &amp;&amp; opts!=3D'') {
    if (issafari)
	  exporttext=3Dfbploadvalue('exportfbpoptsjson-' + currentuserid,exportset=
tingsbasic2);
	else
      exporttext=3Dfbploadvalue('fbpoptsjson-' + currentuserid,exportsettin=
gsbasic2);
    if(exporttext=3D=3D-999)
      return
  }
  else
    exporttext=3Dopts;

  if ((typeof(exporttext)=3D=3D'undefined') || (exporttext.length =3D=3D"")=
) {
    if (issafari)
	  exporttext=3Dfbploadvalue('exportfbpoptsjson-' + currentuserid,exportset=
tingsbasic2);
	else
      exporttext=3Dfbploadvalue('fbpoptsjson-' +currentuserid,exportsetting=
sbasic2);
	if(exporttext=3D=3D-999)
      return;
  }
 }
 else { // ms edge or chrome/chrome clone (FF WX/Edge etc)
   exporttext=3DJSON.stringify(fbpoptsobj);
 }
  var d =3D new Date();
  var date =3D d.toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/,'$2-$1-$=
3');
 =20
  var saveFBPSettingsButt=3Ddocument.createElement('a');
  saveFBPSettingsButt.style=3D"position:relative;left:200px;margin-top:5px"=
;
  saveFBPSettingsButt.textContent=3D"Save FBP Settings to a Text File";
  saveFBPSettingsButt.id=3D"saveFBPSettingsButt";
  saveFBPSettingsButt.setAttribute('download',"FBP-Settings-" + date + ".tx=
t");
  console.log('download',"FBP-Settings-" + date + ".txt");
 =20
  //document.getElementById('fbpsettingstext').parentNode.insertBefore(save=
FBPSettingsButt,document.getElementById('fbpsettingstext').nextSibling);
  //saveFBPSettingsButt.addEventListener('click', function(e){e.preventDefa=
ult();e.stopPropagation();window.location.href=3D"data:application/octet-st=
ream;base64," +btoa(document.getElementById('fbpsettingstext').textContent)=
;},false);

  if((typeof(window.btoa)=3D=3D"function") &amp;&amp; window.confirm('Do yo=
u wish to Save FBP\'s settings to a text file?')) {
	saveFBPSettingsButt.href=3D"data:application/octet-stream;base64," +b64Enc=
odeUnicode(exporttext);//btoa

	if(isfirefox) {
	  try{
	    var blob =3D new File([exporttext], "FBP-Settings-" + date + ".txt", {=
"type": "application/octet-stream"});
        var tempa =3D document.createElement("a");
        tempa.href =3D URL.createObjectURL(blob);
        window.location.href=3Dtempa;
		blob=3Dtempa=3Dnull;
	  }
	  catch(e) { // for older versions of firefox?
		window.alert('Due to a bug in firefox the FBP settings file will be saved=
 in your default firefox downloads directory with a random filename.\n\nCli=
ck OK on the dialog box that opens after this one, then open the Firefox Do=
wnloads Manager (by clicking the down pointing arrow button in the Firefox =
toolbar at the top of the browser window)\n\nNext, click the folder icon ne=
xt to the most recent download, which will open your file manager, then ren=
ame the most recently saved file in that directory to something like FBPSet=
tings.txt');
	    document.body.appendChild(saveFBPSettingsButt);
	    document.getElementById('saveFBPSettingsButt').click();
	    document.getElementById('saveFBPSettingsButt').parentNode.removeChild(=
document.getElementById('saveFBPSettingsButt'));
	  }
	}
	else if(window.navigator.userAgent.match(/Edge\/\d+/)){
	  //console.log('isedge about to save file...\n\n' , exporttext);
	 =20
	  var sheize=3D'try {'+
	  'var blob =3D new Blob([\'' + exporttext + '\'],{"type": "application/oc=
tet-stream"});'+
	  'if ( window.navigator.msSaveOrOpenBlob ) {'+
      '  window.navigator.msSaveOrOpenBlob( blob, "FBP-Settings-" + "' + da=
te + '" + ".txt"  );'+
	  '}'+
	  '} catch(e) {'+
		'console.log("error in save file routine (edge)");'+
		'alert(e);'+
	  '}';
	  var savescript=3Ddocument.createElement('script');
	  savescript.id=3D"fbpedgeexportscript";
	  savescript.innerText=3Dsheize;
	  document.getElementsByTagName('head')[0].appendChild(savescript);
	  document.getElementById('fbpedgeexportscript').parentNode.removeChild(do=
cument.getElementById('fbpedgeexportscript'));
	  savescript=3Dsheize=3Dnull;
	}
	else
      saveFBPSettingsButt.click();
  }
  else {
	document.getElementById('fbpsettingstext').textContent=3Dexporttext;
    window.alert('Copy the FBP settings text from the text box below and sa=
ve it in a document or text file. If you ever need to restore your settings=
 from that file, simply copy the text from the file, click the Import Setti=
ngs link and paste the text in.');
	document.getElementById('fbpsettingstext').setAttribute('style','display:b=
lock;width:600px;height:220px');
    // autoselect the text in the textarea
    el=3Ddocument.getElementById('fbpsettingstext');
    var range;
    if ((/textarea/i.test(el.tagName)) || ((/input/i.test(el.tagName)) &amp=
;&amp; (/text/i.test(el.type)))) {
      el.select();
    } else if (!!window.getSelection) { // FF, Safari, Chrome, Opera
      var sel =3D window.getSelection();
      range =3D document.createRange();
      range.selectNodeContents(el);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
  // testing this without the following line, maybe put it back in if the t=
est pans out...
  //exporttext=3DsaveFBPSettingsButt=3Dnull;
}

function get_cookie ( cookie_name )
{
  var results =3D document.cookie.match ( '(^|;) ?' + cookie_name + '=3D([^=
;]*)(;|$)' );
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function set_cookie (name,value) {
  document.cookie =3D name+ "=3D" + escape(value)+ ';expires=3D01/04/2099 0=
0:00:00';
}

// check for GM_set/get API
var isgmapi, islocstor;
try {
  if(typeof(GM_setValue)!=3D'undefined') {
    GM_setValue('test',1)
    if ( GM_getValue('test')=3D=3D1)
      isgmapi=3D1;
    else
      isgmapi=3D0;
  }
  else
    isgmapi=3D0;
}
catch (e) {
  console.log(e);
  isgmapi=3D0;
}
// check for localstorage
try {
  if(typeof(window.localStorage)!=3D'undefined')
    islocstor=3D1;
  else
    islocstor=3D0;
  }
catch(e) {
  islocstor=3D0;
}

function fbpsavevalue(name,value){
  if(debug)
    console.log('fbpsavevalue: ' + name + ' ; ' + value );
  try {
    if(isgmapi) {
	  GM_setValue(name,value+""); // convert value to string, because when we =
save a numerical date its too big for gm_setvalue which can only store 32bi=
t integers
	}
	else if(ischrome) { // ischrome
	  if(typeof ChromeStorage !=3D'undefined') {
		var items=3D{};
		items[name]=3Dvalue;
		ChromeStorage.set(items, function() {
          // Notify that we saved. (first check if theres an error)
		  if(typeof(chrome.runtime.lastError)=3D=3D'undefined') { // in firefox i=
t is null, so maybe we need to check for null as well??
			if(debug)
		      console.log('Settings saved: name:' + name + '  value:'  + value);
		  }
	      else
			console.log(chrome.runtime.lastError);
		  items=3Dnull;
        });
	  } else {
        chrome.runtime.sendMessage({method: "setLocalStorage", key: name, v=
alue: value}, function(response) {
          ;//console.log(response.data);
        });
	  }
	}
	else if(issafari) {
	  safari.self.tab.dispatchMessage("setLocalStorage",{key: name, value: val=
ue});
	}
	else if(isopera) {
	  widget.preferences[name]=3Dvalue;
	}
	else if(ismaxthon) {
      maxthonruntime.storage.setConfig(name, value);
	}
	/* if i support localstorage and cookie, the user will repeatedly get the =
new user screen when the cookies are cleared, so lets comment this out
	else if(locstor) {
	  window.localStorage[name]=3Dvalue;
	}
	else
	  set_cookie(name,value);
	*/
  }
  catch (e) {
    // if(debug)
    //console.log(e);
    if(islocstor)
      window.localStorage[name]=3Dvalue;
	else
      set_cookie(name,value);=20
  }
}

  if(issafari) {
	  //function replyToMessage(response) { // doesnt work in strict mode
	  var replyToMessage =3D function(response) {
	    if(debug) {
		  console.log(response.message);
		  console.log(response.name);
		  console.dir(response.message);
		}

		if(response.name =3D=3D "fbpfirstrun") {
          if(debug)
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  fbpfirstruncheck(response.message[1]);
		} else
        if(response.name =3D=3D "fbplastupdatecheck") {
		  if(debug)
		    console.log(response.message[0]  + ' : ' + response.message[1]);
          checkupdatefeed(response.message[1]);
        } else=20
        if(response.name =3D=3D "fbpoptsjson") {
		  if(debug)
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  fbpgetprefs(response.message[1]);=20
		} else=20
		if(response.name =3D=3D "exportfbpoptsjson") {
		  if(debug)
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  exportsettingsbasic2(response.message[1]);
		} else=20
		if (response.name =3D=3D "lastfriendcheck") {
		  if(debug)
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  lastfriendcheckfunc(response.message[1]);=20
		} else
		if (response.name =3D=3D "oldfriendstore") {
		  if(debug)
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  graboldfriendstore(response.message[1]);
		} else
		if (response.name =3D=3D "deletedfriendstore") {
		  if(debug)
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  dspdeletedfriendalert(response.message[1]);
		} else
		if (response.name =3D=3D "lastnewscheck") {
		  if(debug)
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  checkforlastnewsupdate(response.message[1]);
		} else
		if (response.name =3D=3D "reset-lastnewscheck") {
		  if(debug) {
		    console.log('we in reset-lastnewscheck');
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  }
		  resetnewscounter(response.message[1]);
		} else
		if (response.name =3D=3D "fbpaskedfordonation") {
		  if(debug) {
		    console.log('we in fbpaskedfordonation');
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  }
		  suggestDonation(response.message[1]);
		}
		else
		if (response.name =3D=3D "checkdelfriendstorage-deletedfriendstore") {
		  if(debug) {
		    console.log('we in checkdelfriendstorage-deletedfriendstore');
		    console.log(response.message[0]  + ' : ' + response.message[1]);
		  }
		  checkdelfriendstorage(response.message[1]);
		}
      }

	  // register for message events
      safari.self.addEventListener("message", replyToMessage, false);
  }

  function isValidChromeRuntime() {
    // Check if the chrome extension is working ok (finished installing/upd=
ating or is disabled)
    return chrome.runtime &amp;&amp; !!chrome.runtime.getManifest();
}

function fbploadvalue(name,funct){
  var val;
  if(debug)
    console.trace();
    //console.log('entering function : ' + arguments.callee.name);

  try {
    if(isgmapi) {
	  val =3D GM_getValue(name);
	}
	else if(ischrome) {
	  if(typeof ChromeStorage !=3D 'undefined') {
	    ChromeStorage.get(name, function(storageResult) {
		  if(typeof(storageResult)!=3D'undefined') {
			if(debug) {
			  console.log("storage result:");
			  console.log(storageResult);
			}
			if(!storageResult[name]){
			  if(debug)
			    console.log("property not found");
			  funct("");
			}
			else
              funct(storageResult[name]);
		  }
		  else {
		    //funct(storageResult[name]);
		    console.log('storageResult is undefined...');
		  }
        });
	  }
	  else {
	  // Chrome Extension
	    if (isValidChromeRuntime()) {
          chrome.runtime.sendMessage({method: "getLocalStorage", key: name}=
, function(response) {
		    //fbpdynamicreload(response.data);
		    if(funct) {
		      if(debug)
		        console.log("we in call back, and heres the data: " + response.da=
ta);
			  if((typeof(response)=3D=3D'undefined') || (typeof(response.data)=3D=3D=
'undefined')) {
			    if(debug)
			      console.log('Response from get localstorage was null.');
			    funct('');
			  }
			  else
			    funct(response.data);
		    }
          });
	    } else {
	        console.log("Can't connect to FBP extension. Perhaps it has been d=
isabled, or it hasn't finished installing/updating yet.");
	        if(confirm("The FB Purity code on this page cannot currently conne=
ct to the FBP chrome extension, perhaps it has been disabled or has not yet=
 finished the install or update process. To return this page to normal func=
tionality, it needs to reload now.\n\nClick OK to reload the page.") &amp;&=
amp; (!pageisreloading)) {
		      pageisreloading=3D1;
		      window.location.reload(true);
			  // maybe we should throw a custom exception here...
			}
	      }
	  }
	  val=3D-999;
	  if(debug)
	    console.log('name: ' + name + ' value' + val);
	}
	else if(issafari) {
      // Safari Extension
      safari.self.tab.dispatchMessage("getLocalStorage",name);
	  val=3D-999;
	}
	else if(isopera) {
	  if((typeof(widget.preferences[name]) !=3D'undefined') ) {=20
		val =3D widget.preferences[name];
		//fbpdynamicreload();
	  }
	    else val=3D'';
	}
	else if(ismaxthon) {
	  val =3D maxthonruntime.storage.getConfig(name);
	}
  }
  catch (e) {
	console.dir(e);
    if(islocstor)
      val=3Dwindow.localStorage[name];
	else
      val=3Dget_cookie(name);=20
  }
  return val;
}

function initundef() {
  if(typeof (fbpoptsobj.filterappmessages) =3D=3D'undefined')
    fbpoptsobj.filterappmessages=3D1;
  if(typeof (fbpoptsobj.sortmostrecent) =3D=3D'undefined')
    fbpoptsobj.sortmostrecent=3D0;
  if(typeof (fbpoptsobj.sortfriendfeed) =3D=3D'undefined')
    fbpoptsobj.sortfriendfeed=3D0;
  if(typeof (fbpoptsobj.fixarticleredirects) =3D=3D'undefined')
    fbpoptsobj.fixarticleredirects=3D1;
  if(typeof (fbpoptsobj.deletedfriendalerts) =3D=3D'undefined')
    fbpoptsobj.deletedfriendalerts=3D1;
  if(typeof (fbpoptsobj.fbpnewsnotifier) =3D=3D'undefined')
    fbpoptsobj.fbpnewsnotifier=3D1;
}

function fbpgetprefs(opts) {
  if(debug) {
    console.trace();
	// console.log(arguments.callee.length); // commented out because it doesn=
t work in strict mode
    console.log(opts);
	//console.log('entering function : ' + arguments.callee.name);
  }

  var optsdump;
  if(typeof(opts)!=3D'undefined') {
    if(opts &amp;&amp; opts.length) {
	  if(debug)
	    console.log("opts=3D" + opts);
      optsdump=3Dopts;
	  try {
	    fbpoptsobj=3DJSON.parse(optsdump);
	  }
	  catch(e) {
	    console.log('error reading json in fbpgetprefs');
	    console.dir(e);
	    return;
	  }
	  initundef();
	  initstage2();
	  finalstage();
	}
	else {
	  if(debug)
	    console.log('are we at the top?');
      fbpoptsobjinit();
	  initundef();
	  initstage2();
	  finalstage();
	}
  }
  else {
    //console.log("user" + currentuserid);
    optsdump =3D fbploadvalue('fbpoptsjson-' + currentuserid,fbpgetprefs);/=
/'fbpgetprefs'
	if(optsdump!=3D-999) { //if(!isasync) {
	  if(optsdump &amp;&amp; optsdump.length) {
	    try{
	      fbpoptsobj=3DJSON.parse(optsdump);
		}
		catch(e) {
		  console.log("FBP ERROR: optsdump=3D" + optsdump);
		  fbpoptsobj=3DJSON.parse(decodeURIComponent(optsdump)); // this line is =
to make it compatible with older firefox extension which urlencoded/decoded=
 saved values inside the extension
		}
        initundef();
		initstage2();
		finalstage();
	  }
	  else {
		if(debug)
		  console.log('are we at the bottom?');
        fbpoptsobjinit();
		initundef();
	    initstage2();
		finalstage();
      }
	}
  }
  //unsafeWindow.console.log(typeof(optsdump) + '  xxx  ' + optsdump  + 'xx=
x' + optsdump.length);
}

function suggestDonation (fbpaskedfordonation) {
  if(debug){
    console.log("isfirefox? =3D " +isfirefox);
    console.log('suggestDonation()');
  }
  if(typeof (fbpaskedfordonation)=3D=3D'undefined') {
    var tmpd=3Dfbploadvalue("fbpaskedfordonation",suggestDonation);
	if (tmpd=3D=3D"-999")
	  return;
	else=20
	  fbpaskedfordonation=3Dtmpd;
	if(debug)
 	  console.log("fbpaskedfordonation=3D"+fbpaskedfordonation);
  }
  if(typeof(fbpaskedfordonation!=3D"undefined") &amp;&amp; fbpaskedfordonat=
ion=3D=3D"1") {
    if(debug)
      console.log('have shown donation screen before');
    return;
  }
  else
    if (confirm("Hello from FB Purity!\n\nI'm just letting you know that it=
s been 2 months since you first installed FB Purity, I hope you are enjoyin=
g using it :)\n\nI first started work on FB Purity in March 2009, it is the=
 product of many years of hard work, and takes a lot of time and effort to =
keep it running.\n\nWould you like to donate to help support FB Purity and =
keep the project going?\n\nIf you have donated recently, can't or don't wan=
t to donate, click 'Cancel', otherwise please click 'OK' to open the donati=
on page" + (isfirefox ? "" : " in a new browser tab")  + ".\n\nCheers,\n\nS=
teve (The FBP Developer)")) {
	  window.alert('Excellent, Thanks! Opening the FB Purity Donations page...=
');
	  fbpsavevalue('fbpaskedfordonation','1');
	  if(!isfirefox)
	    window.open('http://donate.fbpurity.com');
	  else =20
	    window.location.href=3D"http://donate.fbpurity.com";
	}
	else {
	  if(debug)
	    console.log('Didnt want to / couldnt donate, or already donated...');
	  fbpsavevalue('fbpaskedfordonation','1');
	}
}

function mdiff(to,from) {=20
    var months =3D to.getMonth() - from.getMonth()  + (12 * (to.getFullYear=
() - from.getFullYear()));

    if(to.getDate() &lt; from.getDate()){
        months--;
    }
    return months;
}

function fbpfirstruncheck(result) {
  var firstrundiv;
 =20
  if(debug) {
    console.trace();
	console.log('firstrun? ' + result);
  }
  //console.log('entering function : ' + arguments.callee.name);
  var fbpfirstrun,ph;
  //alert("firstres =3D " + result);
  //if(result || (result=3D=3D'')) { was working on chrome and firefox and =
opera?
  if(typeof(result)!=3D'undefined') {
    fbpfirstrun=3Dresult;
  }
  else=09
    fbpfirstrun=3Dfbploadvalue('fbpfirstrun',fbpfirstruncheck);
  if(fbpfirstrun=3D=3D-999)
    return;

  //alert("secondres =3D " + fbpfirstrun); // make sure user is logged in (=
pageLogo element is there)
  if (((fbpfirstrun=3D=3D'') || (typeof(fbpfirstrun)=3D=3D'undefined') || (=
fbpfirstrun=3D=3Dnull)) &amp;&amp; (!(window.location.href.match(/^https?:\=
/\/apps\.facebook|^https?:\/\/blog\.facebook|^https?:\/\/secure\.facebook/)=
))) {
    if(!document.getElementById('fbpfirstrundiv')) {
	  ph=3Ddocument.querySelector('#pagelet_bluebar,#fb2k_pagelet_bluebar');
	  if(!(ph &amp;&amp; ph.querySelector("a[data-gt*=3D'logo_chrome']"))) {
		console.log('didnt find blue bar and logo, exiting fbpfirstruncheck func'=
);
		return;
	  }
	  firstrundiv=3Ddocument.createElement('div');
	  firstrundiv.innerHTML=3Dfbpfirstrunhtml;
	  if(ph.firstChild)
  	    ph.firstChild.parentNode.insertBefore(firstrundiv, ph.firstChild.nex=
tSibling);
      fbpsavevalue('fbpfirstrun',new Date() + "");
	}
  }
  else=20
    if(fbpfirstrun.length) {
	  if(debug)
        console.log("FBP was first installed in this browser on: " + fbpfir=
strun + " Which was " + mdiff(new Date(),new Date(fbpfirstrun)) + " months =
ago.");
	  if(mdiff(new Date(),new Date(fbpfirstrun))&gt;2) {
	    if(debug)
	      console.log('it was over 2 months ago since first installation');
		suggestDonation();
	  }
    }
}

/* BEGIN MARKER - UPDATE CODE COMMENTED OUT BECAUSE OF MOZILLAS ANNOYING PO=
LICIES */
function checkifupdaterequired(currver,latestver) {
  if(debug)
    console.trace();
	//console.log('versions ' + currver,latestver);
    //console.log('entering function : ' + arguments.callee.name);
  if (currver &amp;&amp; latestver) {
    var fbpupdatehtml =3D "**&lt;a title=3D'An update is available for F.B.=
 Purity (v" +  latestver +").\nClick here to begin the upgrade process' hre=
f=3D'http://www.fbpurity.com/install.htm?v=3D" + currver + "' style=3D'colo=
r:red'&gt;&lt;b&gt;Update&lt;/b&gt;&lt;/a&gt;** ";
    if (currver=3D=3Dlatestver)
	  return; //window.alert('Congrats! You have the latest version of FB Puri=
ty :)');
    else {
	  var cvpart1,cvpart2,cvpart3,lvpart1,lvpart2,lvpart3;
      cvpart1=3Dcurrver.split(/\./)[0];
      cvpart2=3Dcurrver.split(/\./)[1];
      cvpart3=3Dcurrver.split(/\./)[2];
      lvpart1=3Dlatestver.split(/\./)[0];
      lvpart2=3Dlatestver.split(/\./)[1];
      lvpart3=3Dlatestver.split(/\./)[2];
      if(parseInt(cvpart1)&lt;parseInt(lvpart1)) {
	    if(document.getElementById('fbpupgradeinfo'))
          document.getElementById('fbpupgradeinfo').innerHTML=3Dfbpupdateht=
ml;
	  }
      else if (parseInt(cvpart1) =3D=3D parseInt(lvpart1)) {
        if(parseInt(cvpart2) &lt; parseInt(lvpart2)) {
 	      if(document.getElementById('fbpupgradeinfo'))
            document.getElementById('fbpupgradeinfo').innerHTML=3Dfbpupdate=
html;
		}
        else if (parseInt(cvpart2) =3D=3D parseInt(lvpart2)) {
          if(parseInt(cvpart3) &lt; parseInt(lvpart3))
		    if(document.getElementById('fbpupgradeinfo'))
              document.getElementById('fbpupgradeinfo').innerHTML=3Dfbpupda=
tehtml;
        }
      }
     =20
    }
  }
}

function checkupdatefeed(result) {
  //var debug=3D1;
  if(debug) {
    //console.trace();
    //console.log('entering function : ' + arguments.callee.name); // comme=
nted out because cant use callee.name in strict mode
    console.log("checkupdatefeed result parameter=3D " + result);
  }

  //console.log("chu=3D " + result);
  var fbplastupdatecheck;
  /*if(result || (result=3D=3D'')) {
    if(debug)
      console.log('fbplastupdatecheck val =3D ' + result);
    fbplastupdatecheck=3Dresult;
	if(typeof(fbplastupdatecheck)=3D=3D'undefined')
	  fbplastupdatecheck=3D'';
  }*/
 =20
  if(!result &amp;&amp; result!=3D'') {
    //console.log('do we even get here:?&gt;?');
    fbplastupdatecheck=3Dfbploadvalue('fbplastupdatecheck',checkupdatefeed)=
;
    if(fbplastupdatecheck=3D=3D-999) {
	  if(debug)
	    console.log("fbplastupdatecheck=3D" + fbplastupdatecheck);
      return
	}
  }
  else
    fbplastupdatecheck=3Dresult;
  //console.log("fbplastupdatecheck=3D" + fbplastupdatecheck);
 =20
 =20
  /*
  if(typeof(result)=3D=3D'undefined') { // with this code firefox update no=
tification works, but without it, it doesnt, whats going on?
	console.log('is this point reached we may need to delete it');
    fbplastupdatecheck=3D"";
  }
  */
 =20
 =20
  /*
  else
    fbplastupdatecheck=3Dfbploadvalue('fbplastupdatecheck',checkupdatefeed)=
;
  if(fbplastupdatecheck=3D=3D-999)
    return;
  */
  fbplastupdatecheck=3DdecodeURIComponent(fbplastupdatecheck);
  if(debug)
    console.log('fbplastupdate=3D' + fbplastupdatecheck);
 =20
  var currtime =3D new Date().getTime(); // creates a new Date representing=
 today
  //console.log(currtime);
  var currver =3D fbpVersion.replace('v','');
 =20
  /*
  console.log('is firefox getting here 1?');
  console.log(typeof(fbplastupdatecheck)!=3D'undefined');
  console.log(fbplastupdatecheck !=3D "");
  console.log(fbplastupdatecheck !=3D null);
  */
 =20
  if( (typeof(fbplastupdatecheck)!=3D'undefined') &amp;&amp; (fbplastupdate=
check !=3D "") &amp;&amp; (fbplastupdatecheck!=3Dnull)) {
	//console.log('is firefox getting here 2?');
    var fbplastupdatecheckdate=3Dfbplastupdatecheck.split(/\:/)[0];
	var fbplastupdatecheckver=3Dfbplastupdatecheck.split(/\:/)[1];
	if((typeof(fbplastupdatecheckver) !=3D'undefined') &amp;&amp; (!fbplastupd=
atecheckver.match(/\./)))
	  fbplastupdatecheckver=3D'';
	if(debug)
	  console.log('lastupdate check version=3D '+ fbplastupdatecheckver);
    if((typeof(fbplastupdatecheckdate) !=3D'undefined') &amp;&amp; fbplastu=
pdatecheckdate.match(/^\d+$/)) {
      //To compute the difference, convert both to their millisecond repres=
entations and subtract:
      var diff =3D currtime - fbplastupdatecheckdate;
      //In this case the difference will be negative, as d1 preceeds d2.
      var num_days =3D (((diff / 1000) / 60) / 60) / 24;
      if(num_days &lt; 1) {
		if(debug)
		  console.log("number of days since last update check &lt; 1");
	    //var cachedupdatever=3Dfbploadvalue(fbpupdatever);
		if((typeof(fbplastupdatecheckver)!=3D'undefined') &amp;&amp; (fbplastupda=
techeckver !=3D ''))
		  checkifupdaterequired(currver,fbplastupdatecheckver);
        return;
      }else if(num_days &gt;=3D1) {
		 if(debug)=20
		   console.log("number of days since last update check &gt; 1");
		 fbphttpupdatecheck();
	  }
    }
	else {
	  // time value is corrupted somehow?
	  if (typeof(unsafeWindow) =3D=3D'undefined')=20
	    ;//console.log('error: fbplastupdatecheck=3D ' + fbplastupdatecheck);=
=20
      else=20
	    ;//unsafeWindow.console.log('error: fbplastupdatecheck=3D ' + fbplastu=
pdatecheck);
	  return;
	}
  }=20
    else {
		fbphttpupdatecheck();
	}

=20
}

function fbphttpupdatecheck() {
	 //fbpsavevalue('fbplastupdatecheck',currtime + '');
  var currtime =3D new Date().getTime();
  var http =3D new window.XMLHttpRequest();
  var url =3D window.location.protocol + "//www.facebook.com/pg/purityupdat=
es/posts/";
  //var url =3D window.location.protocol + "//www.facebook.com/pg/F-B-Purit=
y-387126378040/posts/"; // TEST URL
  var responsematch,latestver;
  //url =3D "https://ajax.googleapis.com/ajax/services/feed/load?v=3D1.0&am=
p;num=3D5&amp;q=3D" + url;
 =20
  //console.log('performing http request in fbphttpupdatecheck()');
  http.open("GET", url, true);
  //http.setRequestHeader("Content-type", "application/x-www-form-urlencode=
d");

  http.onreadystatechange =3D function() {
    if(http.readyState =3D=3D 4 &amp;&amp; http.status =3D=3D 200) {
	  //console.log("we have results");//http.responseText);
	 =20
	  /* JSON VERSION (no longer works since fb disabled json feed)
	  try {
	    var fbpfeed =3D JSON.parse(http.responseText);
	  }
      catch (e) {
		http=3Dfbpfeed=3Dnull;
		return;
      }
	  if(fbpfeed.entries[0].title.length &amp;&amp; fbpfeed.entries[0].title.m=
atch(/F.B. Purity v(\d{1,}\.\d{1,}\.\d{1,}) /))
	    latestver=3Dfbpfeed.entries[0].title.match(/F.B. Purity v(\d{1,}\.\d{1=
,}\.\d{1,}) /)[1];
      else
	    return;
	  */
	  // RSS2 version
	  responsematch =3D http.response.match(/F.B. Purity v(\d{1,}\.\d{1,}\.\d{=
1,}) is out/);
	  if(responsematch &amp;&amp; typeof(responsematch[1]) !=3D'undefined')
	    latestver=3Dresponsematch[1];
	  else {
		http=3Dnull;
		responsematch=3Dnull;
		return;
	  }
	  /*
	  if(http.responseText.match(/&lt;title&gt;/)) {
		titlearr=3Dhttp.responseText.match(/\&lt;title\&gt;[\s\S]+?\&lt;\/title\&=
gt;/g);
		//console.dir(titlearr);
		if(titlearr.length &amp;&amp; titlearr[1].match(/F.B. Purity v(\d{1,}\.\d=
{1,}\.\d{1,}) /))
	      latestver=3Dtitlearr[1].match(/F.B. Purity v(\d{1,}\.\d{1,}\.\d{1,})=
 /)[1];
      else
	    return;
	  }
	  */
		 =20
	  //var x =3D new Date (fbpfeed.entries[0].published);
      //newsa.setAttribute('title', "Published - " + x.toLocaleDateString()=
);=09
	  //alert(currver + ' '  + latestver);
	  fbpsavevalue('fbplastupdatecheck', currtime + ':' + latestver);
	  checkifupdaterequired(fbpVersion.replace('v',''),latestver);
      http=3Dnull;
    }
  }
  http.send();
}
// check for updates to fbp
window.setTimeout(function() {
    checkupdatefeed();
}, 5000); // wait a bit, to ensure fbpinfobar will be there...
/*=20
END MARKER - UPDATE CODE COMMENTED OUT BECAUSE OF MOZILLAS ANNOYING POLICIE=
S
*/

if(debug)
  console.log('Code Marker: just after checkupdatefeed');

function showfriendwhitelistbox(){
  if(debug)
    console.log("in showfriendwhitelistbox");
  lastfriendcheckfunc(100000000000); // use a fake epoch date =3D 1973 so i=
t triggers the friendlist grabber;
}

function closeFBPoptions() {
 try{
  if((typeof(window.localStorage.scrollTop)!=3D'undefined') &amp;&amp; (win=
dow.localStorage.scrollTop &gt; 0)){
    window.scrollTo(0,window.localStorage.scrollTop);
  }=20
 }
 catch(e){=20
   console.log('Error: localstorage is disabled.')
 }
  document.getElementById('fbpoptsdiv').style.display=3D'none';
}

function closeDFAbox() {
 try{
  if((typeof(window.localStorage.scrollTop)!=3D'undefined') &amp;&amp; (win=
dow.localStorage.scrollTop &gt; 0)){
    window.scrollTo(0,window.localStorage.scrollTop);
  }=20
 }
 catch(e){=20
   console.log('Error: localstorage is disabled.')
 }
  document.getElementById('delfriendsalertdiv').style.display=3D'none';
}

function fbppopulateprefs() {
  if(debug)
    console.trace();
    //console.log('entering function : ' + arguments.callee.name);
=09
  // if options screen has been wiped out, re-insert it
  if(!document.getElementById('fbpoptsdiv') &amp;&amp; document.getElementB=
yId('content') ) {
    document.getElementById('content').appendChild(optsdiv);
=09
    document.getElementById('fbpsavesettings').addEventListener('click',fbp=
savesettings,false);
=09
    document.getElementById("closeoptslink").addEventListener('click',close=
FBPoptions,false);
    document.getElementById('closefbpsettings').addEventListener('click',cl=
oseFBPoptions,false);

    document.getElementById('exportsettingslink').addEventListener('click',=
exportsettingsbasic,false);
    document.getElementById('importsettingslink').addEventListener('click',=
importsettingsbasic,false);
	document.getElementById('fbpresetlink').addEventListener('click',resetfbps=
ettings,false);
=09
	document.getElementById('custextheader').addEventListener('click',hideothe=
rdivs,false);
	document.getElementById('friendwhitelistheader').addEventListener('click',=
hideotherdivs,false);

	document.getElementById('friendwhitelistheader').addEventListener('click',=
showfriendwhitelistbox,false);
	document.getElementById('appwhitelistheader').addEventListener('click',hid=
eotherdivs,false);
	document.getElementById('custcssheader').addEventListener('click',hideothe=
rdivs,false);
=09
	document.getElementById('fontpreview').addEventListener('click',showfontpr=
eview,false);
	document.getElementById('fbpwebfont').addEventListener('change',showfontpr=
eview,false);
=09
	document.getElementById('reactionselect').addEventListener('change',reacti=
onselect,false);
  }

  // fill out the preferences form with current settings
  for(var i=3D0;i&lt;fbpoptsarr.length;i++) {
    if(document.getElementById(fbpoptsarr[i])) {
      if(fbpoptsobj[fbpoptsarr[i]]=3D=3D1) {
        document.getElementById(fbpoptsarr[i]).checked=3Dtrue;=20
        //unsafeWindow.console.log (filterapptext, fbpoptsarr[i] + ' ' + ' =
' + fbpoptsobj[fbpoptsarr[i]]);
        }
      else
        document.getElementById(fbpoptsarr[i]).checked=3Dfalse;
    }
  }
  if(fbpoptsobj.customtextfilter &amp;&amp; fbpoptsobj.customtextfilter.len=
gth) {
	document.getElementById('custextta').value=3Dfbpoptsobj.customtextfilter.r=
eplace(/\,/g,"\n").replace(/&amp;#44;/g,','); // replace comma placeholders=
 with actual commas
	//unsafeWindow.console.log(fbpoptsobj.customtextfilter);
  }
  else =20
    document.getElementById('custextta').value=3D'';
   =20
  if(fbpoptsobj.userappwhitelist &amp;&amp; fbpoptsobj.userappwhitelist.len=
gth) {
	document.getElementById('appwhitelistta').value=3Dfbpoptsobj.userappwhitel=
ist.replace(/\,/g,"\n");
	//unsafeWindow.console.log(fbpoptsobj.userappwhitelist);
  }
  else {
	document.getElementById('appwhitelistta').value=3D'';
  }
   =20
  if(fbpoptsobj.fontsize)
    document.getElementById('fontsize').value=3Dfbpoptsobj.fontsize;
=09
  if(fbpoptsobj.fontcolour)
    document.getElementById('fontcolour').value=3Dfbpoptsobj.fontcolour;
=09
  if(fbpoptsobj.fontbgcolour)
    document.getElementById('fontbgcolour').value=3Dfbpoptsobj.fontbgcolour=
;
 =20
  if(fbpoptsobj.fontbgcolour)
    document.getElementById('linkcolour').value=3Dfbpoptsobj.linkcolour;

  if(fbpoptsobj.notificationsbgcolour)
    document.getElementById('notificationsbgcolour').value=3Dfbpoptsobj.not=
ificationsbgcolour;

  if(fbpoptsobj.fbpfont)
    document.getElementById('fbpfont').value=3Dfbpoptsobj.fbpfont;
 =20
  if(fbpoptsobj.fbpwebfont &amp;&amp; fbpoptsobj.fbpwebfont.length){
    var wfsel=3Ddocument.getElementById('fbpwebfont');
	var wfregex =3D new RegExp("^" +fbpoptsobj.fbpwebfont + "$");
	for (i=3D0;i&lt;wfsel.options.length;i++) {
	  if(wfsel.options[i].text.match(wfregex))
	    wfsel.options[i].setAttribute('Selected','true');
	}
	wfsel=3Dnull;=09
  }
=09
  if(fbpoptsobj.backgroundimage)
    document.getElementById('backgroundimage').value=3Dfbpoptsobj.backgroun=
dimage;

  if(fbpoptsobj.flogoimage)
    document.getElementById('flogoimage').value=3Dfbpoptsobj.flogoimage;
 =20
  //if(fbpoptsobj.topnavimage)
  //  document.getElementById('topnavimage').value=3Dfbpoptsobj.topnavimage=
;
 =20
  if(fbpoptsobj.topnavcolour)
    document.getElementById('topnavcolour').value=3Dfbpoptsobj.topnavcolour=
;
 =20
  if(fbpoptsobj.topnavfontcolour)
    document.getElementById('topnavfontcolour').value=3Dfbpoptsobj.topnavfo=
ntcolour;
=09
  if(fbpoptsobj.fbpcustomcss &amp;&amp; (typeof(fbpoptsobj.fbpcustomcss) !=
=3D 'undefined')) {
	document.getElementById('custcssta').value=3Dfbpoptsobj.fbpcustomcss;
	//unsafeWindow.console.log(fbpoptsobj.fbpcustomcss);
  }
  else =20
    document.getElementById('custcssta').value=3D'';

  if(fbpoptsobj.reactionsimagepack)
    document.getElementById('reactionsimagepack').value=3Dfbpoptsobj.reacti=
onsimagepack;

  if(fbpoptsobj.customphotoblocklist)
    document.getElementById('customphotoblocklist').value=3Dfbpoptsobj.cust=
omphotoblocklist;

  if(!langCode.match(/^en/))
    document.getElementById("localeproblem").innerHTML=3D"Please note: Your=
 Facebook language setting is: \"&lt;span style=3D'color:black'&gt;" + lang=
Code + "&lt;/span&gt;\". If you want FBP's built in newsfeed filtering opti=
ons to work correctly &lt;br/&gt;You should &lt;a target=3D'_blank' href=3D=
'https://www.facebook.com/settings?tab=3Dlanguage'&gt;change your language =
setting to English (UK or US)&lt;/a&gt;. Otherwise, you can create your own=
 newsfeed filters in your own language with the 'Text Filter' box below. Mo=
st other options should still work ok, however.";
  /*if((!(typeof(fbpoptsobj.seenLocaleWarning)=3D=3D=3Dundefined)||(fbpopts=
obj.seenLocaleWarning=3D=3D0))) {
	var langCodeMatch=3DString(document.body &amp;&amp; document.body.classNam=
e).match(/Locale_([a-z]{2}_[A-Z]{2})/);
	if(langCodeMatch &amp;&amp; (!langCodeMatch[1].match(/^en/)))
      document.getElementById("localeproblem").innerHTML=3D"Please note: Yo=
ur Facebook language setting is: \"&lt;span style=3D'color:black'&gt;" + la=
ngCodeMatch[1] + "&lt;/span&gt;\". If you want FBP's newsfeed filtering and=
 ad-blocking options to work correctly &lt;br/&gt;You should &lt;a target=
=3D'_blank' href=3D'https://www.facebook.com/settings?tab=3Dlanguage'&gt;ch=
ange your language setting to English (UK or US)&lt;/a&gt;. Otherwise, you =
can create your own newsfeed filters in your own language with the 'Text Fi=
lter' box below. Most other options should still work ok, however.";
  }*/
}

function fbpsavesettings(ev) {
=09
  if((document.getElementById('fontcolour').value =3D=3D document.getElemen=
tById('fontbgcolour').value) &amp;&amp; (document.getElementById('fontbgcol=
ourfix').checked &amp;&amp; document.getElementById('fontcolourfix').checke=
d)) {
    window.alert("You can't have the same values for Background Colour and =
Font Colour, otherwise you wont be able to see any text.\n\n Please change =
one or the other before clicking Save, so you will actually be able to read=
 the text on the screen.");
    document.getElementById('fbpsavesettings').disabled=3Dfalse;
	return;
  }

  if(document.getElementById('backgroundimagefix').checked &amp;&amp; (!doc=
ument.getElementById('backgroundimage').value.match(/^https\:\/\//))) {
	document.getElementById('backgroundimagefix').checked=3Dfalse;
    window.alert("Your Background Image must be hosted on a secure server, =
so the image URL must begin with https:// otherwise it won't work.\n\nIf yo=
u don't understand what this means, you can simply upload the image you wan=
t to use as a background image to facebook, then open the image on facebook=
 and click the 'Set as Background' link to set that image as your backgroun=
d image.");
    document.getElementById('fbpsavesettings').disabled=3Dfalse;
	return;
  }
 =20
  if(document.getElementById('flogoimagefix').checked &amp;&amp; (!document=
.getElementById('flogoimage').value.match(/^https\:\/\//))) {
	document.getElementById('flogoimagefix').checked=3Dfalse;
    window.alert("Your Logo Image must be hosted on a secure server, so the=
 image URL must begin with https:// otherwise it won't work.\n\nAn example =
secure image host, where you can upload your image to is imgur.com");
    document.getElementById('fbpsavesettings').disabled=3Dfalse;
	return;
  }
 =20
  if(document.getElementById("custextta").value.match(/\{.+:.+\}/)){
	document.getElementById('fbpsavesettings').disabled=3Dfalse;
	window.alert("It looks like there's some CSS code in the Text Filter box, =
CSS code needs to be put into the CSS box (To open the CSS box, you need to=
 click the CSS link at the top right of the FBP options screen)\n\nBefore y=
our FBP settings can be saved, you need to first remove any CSS code from t=
he 'Text Filter' box. CSS code looks something like\n\n /* This code hides =
some element */\nsomeElement {display:none}");
    return;
  }

  for(var i=3D0;i&lt;fbpoptsarr.length;i++) {
    if(document.getElementById(fbpoptsarr[i]) &amp;&amp; document.getElemen=
tById(fbpoptsarr[i]).checked=3D=3Dtrue)
      fbpoptsobj[fbpoptsarr[i]]=3D1;
    else
      fbpoptsobj[fbpoptsarr[i]]=3D0;
  }
=20
  if(document.getElementById('custextta').value.length) {
    //fbpoptsobj.customtextfilter=3Ddocument.getElementById('customtextfilt=
er').value.replace(/, *$/,'','g'); // replace trailing comma and spaces
	// replace actual commas with &amp;#44; (ascii code for comma)
	var tempcustomtextfilter=3Ddocument.getElementById('custextta').value.repl=
ace(/,/g,"&amp;#44;").replace(/[\r\n|\r|\n]/g,"\,").replace(/\,{1,}/g,'\,')=
.replace(/,$/,'').replace(/^,/,'');
	fbpoptsobj.customtextfilter=3D'';
	var ctfarr=3Dtempcustomtextfilter.split(',');
	//for(i=3Dctfarr.length-1;i&gt;=3D0;i--)
	for(i=3D0;i&lt;ctfarr.length;i++)
	  if (ctfarr[i].replace(/^ {1,}$/,'')!=3D'')
	     fbpoptsobj.customtextfilter+=3Dctfarr[i] + ','; // strip out lines th=
at are just spaces.
		=20
    fbpoptsobj.customtextfilter=3Dfbpoptsobj.customtextfilter.replace(/,$/,=
''); // strip trailing comma
//	alert(fbpoptsobj.customtextfilter);
  }
  else =20
    fbpoptsobj.customtextfilter=3D'';

  if(document.getElementById('appwhitelistta').value.length) {
    fbpoptsobj.userappwhitelist=3Ddocument.getElementById('appwhitelistta')=
.value.replace(/ /g,'').replace(/[\r\n|\r|\n]/g,"\,").replace(/\,{1,}/g,'\,=
').replace(/,$/,'').replace(/^,/,'');
	//alert(fbpoptsobj.userappwhitelist);
  }
  else =20
    fbpoptsobj.userappwhitelist=3D'';
 =20
  // begin new custom css box
  if(document.getElementById('custcssta').value.length) {
	fbpoptsobj.fbpcustomcss=3Ddocument.getElementById('custcssta').value;
  }
  else =20
    fbpoptsobj.fbpcustomcss=3D'';
  // end new custom css box

  fbpoptsobj.fontsize=3Ddocument.getElementById('fontsize').value;
  fbpoptsobj.fontcolour=3Ddocument.getElementById('fontcolour').value;
  fbpoptsobj.fontbgcolour=3Ddocument.getElementById('fontbgcolour').value;
  fbpoptsobj.linkcolour=3Ddocument.getElementById('linkcolour').value;
  fbpoptsobj.fbpfont=3Ddocument.getElementById('fbpfont').value;
  fbpoptsobj.fbpwebfont=3Ddocument.getElementById('fbpwebfont').value;
  fbpoptsobj.backgroundimage=3Ddocument.getElementById('backgroundimage').v=
alue;
  fbpoptsobj.flogoimage=3Ddocument.getElementById('flogoimage').value;
  //fbpoptsobj.topnavimage=3Ddocument.getElementById('topnavimage').value;
  fbpoptsobj.topnavcolour=3Ddocument.getElementById('topnavcolour').value;
  fbpoptsobj.topnavfontcolour=3Ddocument.getElementById('topnavfontcolour')=
.value;
  fbpoptsobj.reactionsimagepack=3Ddocument.getElementById('reactionsimagepa=
ck').value;
  fbpoptsobj.customphotoblocklist=3Ddocument.getElementById('customphotoblo=
cklist').value;
  fbpoptsobj.notificationsbgcolour=3Ddocument.getElementById('notifications=
bgcolour').value;
   =20
  // save friend whitelist
  var friendslists=3Ddocument.querySelectorAll('[id*=3Dfrienddiv-]');
  var friendswhitelistArr=3D{};
  if(friendslists.length)
    for(i=3D0;i&lt;friendslists.length;i++) {
	  friendswhitelistArr[ friendslists[i].getElementsByTagName('input')[0].va=
lue.split(/::/)[1]]=3Dfriendslists[i].getElementsByTagName('input')[0].valu=
e.split(/::/)[0];
	}
  fbpoptsobj.friendswhitelistArr=3DJSON.stringify(friendswhitelistArr);
  //save to prefs obj to localstorage
  fbpsavevalue('fbpoptsjson-' + currentuserid, JSON.stringify(fbpoptsobj));
 =20
  //console.log(JSON.stringify(fbpoptsobj));
 =20
  //close prefs screen
  document.getElementById('fbpoptsdiv').style.display=3D'none';
 =20
  //reload page to refresh preferences
  window.setTimeout(function(){window.location.reload(true);},400);

  // Dynamically update the page instead of reloading the whole page, only =
problem is if the page contains many posts, this is very slow.
  /*
  document.getElementById("fbpsavesettings").disabled=3Dfalse;
  fbpgetprefs();
  resetclasses(); // need to also reset other filters and css
  initstage2();
  //updateblockedcount(); // doesnt seem to do anything and clear the shizz=
le, should automatically update it. (we are getting nodes with 2 classes fb=
pnormal and fbpblocked
  cleartheshizzle(document);
  */
}

function fbpoptsobjinit() {
  if(debug)
    console.trace();
    //console.log('entering function : ' + arguments.callee.name);
=09
  // set up default options
  fbpoptsobj.filterappmessages=3D1;
  fbpoptsobj.becamefriends=3D1;
  fbpoptsobj.becamefan=3D1;
  fbpoptsobj.joinedgroup=3D1;
  fbpoptsobj.attendevent=3D1;
  fbpoptsobj.attendedevent=3D1;
  fbpoptsobj.createdevent=3D0;
  fbpoptsobj.watchinglistening=3D0;

  fbpoptsobj.commentlikeslink=3D0;
  fbpoptsobj.commentwall=3D0;
  fbpoptsobj.commentgroupwall=3D0;
  fbpoptsobj.commentpagewall=3D0;
  fbpoptsobj.commenteventwall=3D0;
  fbpoptsobj.updatedprofile=3D0;
  fbpoptsobj.changedprofilepic=3D0;
  fbpoptsobj.changedrelationship=3D0;
  fbpoptsobj.recommendations=3D0;
 =20
  fbpoptsobj.uploadedphoto=3D0;
  fbpoptsobj.sharedphoto=3D0;
  fbpoptsobj.uploadedvideo=3D0;
  fbpoptsobj.taggedinvideo=3D0;
  fbpoptsobj.livevideo=3D0;
  fbpoptsobj.postednote=3D0;
  fbpoptsobj.productshown=3D1;
  fbpoptsobj.taggedinnote=3D0;
  fbpoptsobj.sharedmemory=3D0;
  fbpoptsobj.yourmemories=3D0;
  fbpoptsobj.commentedonthis=3D0;
  fbpoptsobj.likedthis=3D0;
  fbpoptsobj.taggedthis=3D0;
  fbpoptsobj.postedlink=3D0;
  fbpoptsobj.trendingstory=3D0;
  fbpoptsobj.checkedin=3D0;
 =20
  fbpoptsobj.suggestionsbox=3D0;
  fbpoptsobj.connectbox=3D0;
  fbpoptsobj.sponsoredbox=3D1;
  fbpoptsobj.pokebox=3D0;
  //fbpoptsobj.happeningnowbar=3D0;
  fbpoptsobj.newstoriesbutt=3D0;
  fbpoptsobj.typingcomment=3D0;
  fbpoptsobj.betabox=3D0;
  //fbpoptsobj.commentbutton=3D0;
  fbpoptsobj.offlinefriends=3D0;
  //fbpoptsobj.offlinemobilefriends=3D0;
  fbpoptsobj.groupconvos=3D1;
 =20
  fbpoptsobj.requestsbox=3D0;
  fbpoptsobj.eventsbox=3D0;
  fbpoptsobj.questionsbox=3D0;
  fbpoptsobj.chatbox=3D0;
  fbpoptsobj.pagestory=3D0;
  //fbpoptsobj.trendingbox=3D0;
  fbpoptsobj.bubblechat=3D0;
  fbpoptsobj.condensedchat=3D0;
  fbpoptsobj.tagsuggestions=3D0;
  fbpoptsobj.hidesearchpopup=3D0;
  fbpoptsobj.hidesearchtrending=3D0;
  fbpoptsobj.cookiespolicy=3D0;
  fbpoptsobj.hidefriendreqtopnav=3D0;
  fbpoptsobj.hidemesstopnav=3D0;
  fbpoptsobj.hidecreatetopnav=3D0;
  fbpoptsobj.topnavbarlogout=3D0;
  fbpoptsobj.sendmoneybutt=3D0;
  fbpoptsobj.startcallbutt=3D0;
  fbpoptsobj.chatplaygamebutt=3D0;
  fbpoptsobj.chatquickcambutt=3D0;
  fbpoptsobj.chataddfilesbutt=3D0;
  fbpoptsobj.chatstartplanbutt=3D0;
  //fbpoptsobj.hidetopnavstatusbutt=3D0;
 =20
  //fbpoptsobj.commentslikestopnews=3D0;
  fbpoptsobj.recentactivity=3D0;
 =20
  fbpoptsobj.fontsize=3D'13';
  fbpoptsobj.fontfix=3D'0';
 =20
  fbpoptsobj.fontcolour=3D'';
  fbpoptsobj.fontcolourfix=3D0;
  fbpoptsobj.fontbgcolour=3D'';
  fbpoptsobj.fontbgcolourfix=3D0;
  fbpoptsobj.linkcolour=3D'';
  fbpoptsobj.linkcolourfix=3D0;
  fbpoptsobj.fbpfont=3D'';
  fbpoptsobj.fbpfontfix=3D0;=20
  fbpoptsobj.fbpwebfont=3D'';
  fbpoptsobj.fbpwebfontfix=3D0;
  fbpoptsobj.notificationsbgcolour=3D'';
  fbpoptsobj.notificationsbgcolourfix=3D0;
 =20
  fbpoptsobj.topnavcolour=3D'';
  fbpoptsobj.topnavcolourfix=3D0;
  fbpoptsobj.topnavfontcolour=3D'';
  fbpoptsobj.topnavfontcolourfix=3D0;
  fbpoptsobj.backgroundimage=3D'';
  fbpoptsobj.backgroundimagefix=3D0;
  fbpoptsobj.flogoimage=3D'';
  fbpoptsobj.flogoimagefix=3D0;
  fbpoptsobj.freezetopnav=3D0;
  //fbpoptsobj.topnavimage=3D'';
  fbpoptsobj.topnavimagefix=3D0;
 =20
  fbpoptsobj.reactionsimagepack=3D"";
  fbpoptsobj.reactionsimagepackfix=3D0;
  fbpoptsobj.reactionsboost=3D0;
 =20
  fbpoptsobj.customphotoblocklist=3D"";
 =20
  fbpoptsobj.stretchbkgimg=3D0;
  fbpoptsobj.transnewsfeed=3D0;
  fbpoptsobj.showsetasbackgbutt=3D0;
  fbpoptsobj.colouredbackgsquares=3D0;
  fbpoptsobj.hidesearchbox=3D0;
  fbpoptsobj.hidepadlock=3D0;
  fbpoptsobj.hideaccountswitcher=3D0;
 =20
  fbpoptsobj.newsfeed=3D0;
  fbpoptsobj.widescreenfeed=3D0;
  fbpoptsobj.leftcolumncounters=3D0;
  fbpoptsobj.homelink=3D0;
  fbpoptsobj.homelinkcounter=3D0;
 =20
  fbpoptsobj.sortmostrecent=3D0;
  fbpoptsobj.sortfriendfeed=3D0;
  fbpoptsobj.fixarticleredirects=3D1;
  //fbpoptsobj.animatedgifs=3D0;
  fbpoptsobj.hovercards=3D0;
 =20
  // left hand column options
  fbpoptsobj.wholeleftcolumn=3D0;
  fbpoptsobj.colouredbg=3D0;
  fbpoptsobj.lcadvertmgr=3D0;
  fbpoptsobj.lcconnect=3D0;
  fbpoptsobj.lcallpages=3D0;
  //fbpoptsobj.lcpagesandpublicfigures=3D0;
  fbpoptsobj.lcpagesfeed=3D0;
  fbpoptsobj.lclikepages=3D0;
  fbpoptsobj.lcallapps=3D0;
  fbpoptsobj.lcappcenter=3D0;
  //fbpoptsobj.lceditprofile=3D0;
  fbpoptsobj.lcevents=3D0;
  fbpoptsobj.lcgamesfeed=3D0;
  fbpoptsobj.lcpokes=3D0;
  fbpoptsobj.lcprofile=3D0;
  fbpoptsobj.lcmusic=3D0;
  fbpoptsobj.lcplaceseditor=3D0;
  fbpoptsobj.lcallgroups=3D0;
  //fbpoptsobj.lcallinterests=3D0;
  fbpoptsobj.lcfindfriends=3D0;
  fbpoptsobj.lcfindnewgroups=3D0;
  fbpoptsobj.lccreatepage=3D0;
  fbpoptsobj.lccreategroup=3D0;
  fbpoptsobj.lccreateframe=3D0;
  fbpoptsobj.lcdeveloper=3D0;
  fbpoptsobj.lcfundraisers=3D0;
  //fbpoptsobj.lcfundraiserscreate=3D0;
  //fbpoptsobj.lcfundraisersfind=3D0;
  fbpoptsobj.lcfriends=3D0;
  fbpoptsobj.lconthisday=3D0;
  fbpoptsobj.lcbrowse=3D0;
  //fbpoptsobj.lcfbiphone=3D0;
  //fbpoptsobj.lcfbandroid=3D0;
  fbpoptsobj.lcfbpnews=3D0;
  fbpoptsobj.lcweather=3D0;
  fbpoptsobj.lcwelcome=3D0;
  fbpoptsobj.lcnotes=3D0;
  fbpoptsobj.lcoculus=3D0;
  fbpoptsobj.lccreatorstudio=3D0;
  //fbpoptsobj.lctrendingnews=3D0;
  fbpoptsobj.lclinks=3D0;
  fbpoptsobj.lcmanagegroups=3D0;
  fbpoptsobj.lcsaved=3D0;
  fbpoptsobj.lcshops=3D0;
  fbpoptsobj.lcmarketplace=3D0;
  fbpoptsobj.lcsuggested=3D0;
  fbpoptsobj.lcsuggestedits=3D0;
  fbpoptsobj.lccreateevent=3D0;
  fbpoptsobj.lcphotos=3D0;
  fbpoptsobj.lcsalegroups=3D0;
  fbpoptsobj.lcbusinessdiscovery=3D0;
  fbpoptsobj.lcpayments=3D0;
  fbpoptsobj.lclivemap=3D0;
  fbpoptsobj.lcdiscovergroups=3D0;
  fbpoptsobj.lcyourposts=3D0;
  fbpoptsobj.lcmoments=3D0;
  fbpoptsobj.lcmovies=3D0;
  fbpoptsobj.lcmessages=3D0;
  fbpoptsobj.lcrecommendations=3D0;
  fbpoptsobj.lcsafetycheck=3D0;
  fbpoptsobj.lcexplorefeed=3D0;
  fbpoptsobj.lcwatch=3D0;
  fbpoptsobj.lccreate=3D0;
  fbpoptsobj.lcshortcuts=3D0;
  fbpoptsobj.lcinsights=3D0;
  fbpoptsobj.lcjobs=3D0;
  fbpoptsobj.lcrecentadactivity=3D0;
  fbpoptsobj.lcmoves=3D0;
  fbpoptsobj.lcgreetings=3D0;
  fbpoptsobj.lcgamingvideos=3D0;
  fbpoptsobj.townhall=3D0;
  fbpoptsobj.lc2018election=3D0;

  // right hand column options
  fbpoptsobj.wholerightcolumn=3D0;
  fbpoptsobj.rcrecommendedpages=3D0;
  fbpoptsobj.rcrelatedgroups=3D1;
  fbpoptsobj.rcpokes=3D0;
  fbpoptsobj.rcbirthdays=3D0;
  fbpoptsobj.rcfriendrequests=3D0;
  fbpoptsobj.rcgamerequests=3D0;
  fbpoptsobj.rcyourpages=3D0;
  fbpoptsobj.rclive=3D0;
  fbpoptsobj.rctodaysgames=3D0;
  fbpoptsobj.rcwatchlist=3D0;
  fbpoptsobj.rcstories=3D0;
  fbpoptsobj.rcrelatedvids=3D0;
  fbpoptsobj.rcsavedlinks=3D0;
 =20
  fbpoptsobj.upcomingevents=3D0;
  fbpoptsobj.sharedevent=3D0;
 =20
  fbpoptsobj.sharedpage=3D0;
  fbpoptsobj.likedlink=3D0;
  fbpoptsobj.commentedlink=3D0;
  fbpoptsobj.likepagebutton=3D0;
  fbpoptsobj.hideallphotos=3D0;
  fbpoptsobj.taggedphoto=3D0;
  fbpoptsobj.likedphoto=3D0;
  fbpoptsobj.commentedphoto=3D0;

  fbpoptsobj.sharedvideo=3D0;
  fbpoptsobj.likedvideo=3D0;
  fbpoptsobj.commentedvideo=3D0;
  fbpoptsobj.youtubevideo=3D0;
  //fbpoptsobj.stopautoplayvideo=3D0;

  fbpoptsobj.sharedstatus=3D0;
  fbpoptsobj.likedstatus=3D0;
  fbpoptsobj.commentedstatus=3D0;
  fbpoptsobj.taggedstatus=3D0;
  fbpoptsobj.smileys=3D0;
  fbpoptsobj.reactions=3D0;
  fbpoptsobj.notificationpopup=3D0;
 =20
  fbpoptsobj.hidealllinks=3D0;
  fbpoptsobj.hideallvideos=3D0;
  //fbpoptsobj.fixedleftcolumn=3D0;
  fbpoptsobj.expandnewscolumn=3D0;
  fbpoptsobj.deletedfriendalerts=3D1;
  //fbpoptsobj.newstickertextfilter=3D0;
  fbpoptsobj.fulltimestamps=3D0;
  fbpoptsobj.highlightpublicposts=3D0;
  fbpoptsobj.squareprofilepics=3D1;
  fbpoptsobj.commentbubbles=3D0;
  fbpoptsobj.textanimations=3D0;
  fbpoptsobj.fullURL=3D0;
  fbpoptsobj.fbpnewsnotifier=3D1;
 =20
  fbpoptsobj.listheaderimage=3D0;
  fbpoptsobj.listsuggestions=3D0;
 =20
  //timeline options
  fbpoptsobj.tlgamesapps=3D0;
  fbpoptsobj.tlinvitefriendslikepage=3D0;
  fbpoptsobj.tllikesbox=3D0;
  fbpoptsobj.pymk=3D0;
  fbpoptsobj.nonags=3D0;
  fbpoptsobj.chrononotifications=3D0;

  fbpoptsobj.customtextfilter=3D'';
  fbpoptsobj.userappwhitelist=3D'';
  fbpoptsobj.fbpcustomcss=3D'';
 =20
  fbpoptsobj.vidvolume=3D1;
 =20
}

// APPLICATION WHITELIST
// ---------------------

// If you would like to edit the list of applications in the user whitelist=
,=20
// theres detailed instructions here: http://whitelist.fbpurity.com

var defaultappwhitelist =3D "6628568379,115463795461,48119224995,5895217474=
,56212371378,146139331013,2254487659,2915120374,74769995908,4620273157,1440=
5921260,10754253724,2483740875,22950410511,43769862066,2550392059,810979146=
8,2238752371,21370137768,6195724695,6694405826,2231777543,53702860994,20407=
635301,38125372145,56137638329,10732101402,16297770890,2877035514,411588964=
24,72687635881,350685531728,30713015083,111527682205237,121958126090,233051=
9541,49340319393,26463759431,21810043296,24420472648,183319479511,189818072=
392,302006227267,90376669494,108160725869250,39010226174,247431880944,66746=
580154,96105046534,143907478979139,146563558702544,131289390231340,99532711=
33,45439413586,131732509879,23723376453,76456527540,105130332854716,2769481=
8115,67878695711,79763977758,139682082719810,122580857763901,24553799497,15=
9348674082705,112618498804176,148061315211358,104142802965358,1495886284392=
75,7933375107,135892916448833,48505437520,198446803501767,193278124048833,1=
65907476854626,213546525407071,531615603522381,149859461799466,178645865537=
776,220353874751486,124024574287414,283116811738331,221427911240457,1361650=
49846511,318117675023626,800871226593160,87741124305,219885578217768";

// the application ids in the default app whitelist above belong to, in ord=
er:
// 6628568379   =3D facebook iphone application
// 115463795461 =3D selective twitter
// 48119224995  =3D tumblr
// 5895217474   =3D digsby
// 56212371378  =3D tweetdeck
// 146139331013 =3D tweetdeck for iphone
// 2254487659   =3D facebook for blackberry
// 2915120374   =3D facebook mobile widget
// 74769995908  =3D facebook for android
// 4620273157   =3D facebook for palm
// 14405921260  =3D facebook for motorola (motoblur)
// 10754253724  =3D iphoto uploader
// 2483740875   =3D picasa uploader
// 22950410511  =3D sprint/samsung? photo/video uploader
// 43769862066  =3D SonyEricsson
// 2550392059   =3D MusicPlayer
// 8109791468   =3D Status Shuffle
// 2238752371   =3D Facebook Exporter for iPhoto
// 21370137768  =3D official flickr application
// 6195724695   =3D Windows Phone
// 6694405826   =3D Posterous
// 2231777543   =3D Twitter
// 53702860994  =3D LG Mobile
// 20407635301  =3D Snaptu
// 38125372145  =3D SonyEricsson Panel
// 56137638329  =3D Nokia
// 10732101402  =3D ping.fm
// 16297770890  =3D 3Skypephone 'S2'
// 2877035514   =3D Gwibber
// 41158896424  =3D HTC Sense=20
// 24420472648  =3D HTC Sense
// 72687635881  =3D Samsung Mobile
// 350685531728 =3D facebook for android
// 30713015083  =3D windows live messenger
// 111527682205237 =3D O2 social link
// 121958126090 =3D LG Phone
// 2330519541   =3D Bloom photo uploader
// 49340319393  =3D Ovi by Nokia
// 26463759431  =3D My INQ Mobile
// 21810043296  =3D Facebook for the T-Mobile Sidekick
// 183319479511 =3D HootSuite
// 189818072392 =3D live journal
// 302006227267 =3D Sony Ericsson X10 mini pro
// 90376669494  =3D Yahoo
// 108160725869250 =3D Sony Ericsson
// 39010226174  =3D Vlingo
// 247431880944 =3D Droid
// 66746580154  =3D Dell Mobile
// 96105046534  =3D RockMelt
// 143907478979139 =3D RockMelt Beta
// 146563558702544 =3D Friendly for Ipad
// 131289390231340 =3D Slide
// 9953271133   =3D networked blogs
// 45439413586  =3D RSS Grafitti
// 131732509879 =3D Twitter Feed
// 23723376453  =3D Seesmic
// 76456527540  =3D Facebook mobile by Opentech ENG
// 105130332854716 =3D flipboard
// 27694818115     =3D Ovi by Nokia
// 67878695711     =3D Nokia N900
// 79763977758     =3D Kodak Easy Share
// 139682082719810 =3D Snaptu for Facebook
// 122580857763901 =3D eBuddy
// 24553799497     =3D mobileblog
// 159348674082705 =3D Photoloader
// 112618498804176 =3D FriendCaster for Android
// 148061315211358 =3D Friendcaster Pro for android
// 104142802965358 =3D My INQ Mobile
// 149588628439275 =3D Twidroyd for Twitter
// 7933375107      =3D Windows Phone
// 135892916448833 =3D Facebook for Windows Phone
// 48505437520 =3D Sony Ericsson Web Albums
// 198446803501767 =3D HTC ChaCha
// 193278124048833 =3D HTC Sense
// 165907476854626 =3D Facebook Pages Manager
// 213546525407071 =3D iOS
// 531615603522381 =3D Facebook Site Governance voting app
// 149859461799466 =3D Sony Xperia Smartphone
// 178645865537776 =3D Blackberry
// 220353874751486 =3D Facebook for Blackberry 10
// 124024574287414 =3D Instagram
// 318117675023626 =3D Instagram
// 283116811738331 =3D Paper
// 221427911240457 =3D Nokia
// 136165049846511 =3D OS X
// 800871226593160 =3D Facebook Mentions
// 87741124305     =3D Youtube
// 219885578217768 =3D Facebook Groups for IOS

// EXTRA STORIES ( see http://extras.fbpurity.com for more info )
// Read option settings and set extra story codes

////////////////////////
/// BEGIN opts=20
////////////////////////  =20

var arrwhitelist2=3D{}; // this is the main application whitelist array
var extraTextFilter;
var headerTextFilter;
var cleancustomtextfilter=3D'';
var headertextfilterRX;
var textfilterRX;
var photosubjectfilterlist=3D"";
var filterapptext;
var fbpboxstyles;
//var fbpfanpageid=3D"408502197558";    // 10150502187552559 (alternative i=
d?)
//var fbpdevpageid=3D"464154953615751"; // 639625812735330   (alternative i=
d?)

function getuserid(){
  if(debug)
    console.trace();
=09
  var userid=3D'';
  try {
    userid=3Ddocument.cookie.match(/c_user=3D(\d+)/)[1];
  }
  catch(e) {
    console.log('problem getting logged in user id: ' + e);
  }
  if(debug)
    console.log("userid=3D " + userid);
=09
  return userid;
}

var currentuserid=3Dgetuserid();

if(debug)
  console.log('Code Marker: just after getuserid function');
 =20
// comment this section out for testing offline pages
 if(currentuserid=3D=3D"") {
  var loginandoutstyle=3Ddocument.createElement('style');
  loginandoutstyle.textContent=3D'div.fbIndexFeaturedRegistration &gt; div.=
lfloat, .-cx-PRIVATE-fbAdUnit__root, #pagelet_rhc_footer, #SetAsHomepage_Ca=
llout, .gradientContent &gt; div[data-ad^=3D"{"], #findFriendsNav, #navFind=
Friends, div[data-ad], body.UIPage_LoggedOut #globalContainer div.lfloat, b=
ody.UIPage_LoggedOut div._hlg, #pagelet_growth_expanding_cta, body.UIPage_L=
oggedOut  div._5hn6 {display:none} body.UIPage_LoggedOut #globalContainer d=
iv.userContentWrapper div.lfloat,#reg_box .lfloat._ohe {display:block !impo=
rtant}';
  var h=3Ddocument.getElementsByTagName('head');
  var waitforhead1=3Dwindow.setInterval(function(){
      if(document.getElementsByTagName('head').length ) {
		h[0].appendChild(loginandoutstyle);
	    window.clearInterval(waitforhead1);
      }
    }, 500)
	var waitforbody1=3Dwindow.setInterval(function(){
      if(document.getElementsByTagName('body').length ) {
		rmrecentlogins(); // run the remove recent logins on login page code
	    window.clearInterval(waitforbody1);
      }
    }, 500)
  console.log('FBP Exiting because user is not logged in yet.');
  return;  // exit script if the user isnt logged in... though this screws =
with debugging offline pages
}

var useridwhitelistRX;
if (!currentuserid.length)
  //var useridwhitelistRX=3Dnew RegExp(fbpfanpageid + "|" + fbpdevpageid );
  var useridwhitelist=3DFBPFanPageID + "|" + FBPDevPageID ;
else
  //var useridwhitelistRX=3Dnew RegExp(fbpfanpageid + "|" + fbpdevpageid + =
"|" + currentuserid);
  var useridwhitelist=3DFBPFanPageID + "|" + FBPDevPageID + "|" + currentus=
erid;

var refreshwhitelist =3D function () {
  var whitelist;
  if (fbpoptsobj.userappwhitelist &amp;&amp; fbpoptsobj.userappwhitelist.le=
ngth)
    whitelist =3D defaultappwhitelist + "," + fbpoptsobj.userappwhitelist;
  else
    whitelist =3D defaultappwhitelist;

  whitelist =3D whitelist.replace(/,,/g,''); // remove blanks (if any)
  whitelist =3D whitelist.replace(/ /g,'');  // remove spaces (if any)
  whitelist =3D whitelist.replace(/,$/,'');  // remove trailing comma (if a=
ny)
 =20
  var arrwhitelist=3Dwhitelist.split(',');

  for (var i in arrwhitelist)
    arrwhitelist2[arrwhitelist[i]]=3Dtrue; // create hashmap
}

var fixsortorder =3D function() {
  var feedRedirectURL,feedRedirectName;
  if(debug)
    console.log('fix sort order function');
 =20
  if(!document.getElementById('topstoriesdiv')){
    var tsdiv=3Ddocument.createElement('div');
    tsdiv.id=3D'topstoriesdiv';
  }
  else=20
	var tsdiv=3Ddocument.getElementById('topstoriesdiv');

  if(document.getElementById('fbpurityinfowrapper')){
    tsdiv.setAttribute('style',"position:absolute;font-weight:bold;top:" + =
document.getElementById('fbpurityinfowrapper').offsetTop + "px"); //;left:1=
85px
  }

  if(window.location.href.match(/\/?sk=3Dfriends/)) {
	tsdiv.textContent=3D"Viewing Friends Feed";
  }
  else if(window.location.href.match(/\?sk=3Dphotos/)) {
	tsdiv.textContent=3D"Viewing Photos Feed";
  }
  else if(window.location.href.match(/\?sk=3Dpages|\/feed\/pages/)) {
	tsdiv.textContent=3D"Viewing Pages Feed";
  } =20
  else if(window.location.href.match(/\?sk=3Dgroups/)) {
	tsdiv.textContent=3D"Viewing Groups Feed";
  }

  if(!document.getElementById('topstoriesdiv') &amp;&amp; (document.getElem=
entById('fbpurityinfowrapper')))
    document.getElementById('fbpurityinfowrapper').parentNode.insertBefore(=
tsdiv,document.getElementById('fbpurityinfowrapper'));

  if(fbpoptsobj.sortmostrecent) {
	feedRedirectURL=3D"/?sk=3Dh_chr";   //https://www.facebook.com
	feedRedirectName=3D"Most Recent Feed";
=09
	// redirect if theres a "posts you havent seen" section on user timelines.=
..
=09
	=20
	//if(document.querySelector('div[data-pnref=3D"unseen-section"]')) {
    if(document.querySelector('#recent_capsule_container div._5umn._2pio sp=
an._50f8._50f7') &amp;&amp; document.querySelector('#recent_capsule_contain=
er div._5umn._2pio span._50f8._50f7').textContent.match(/POSTS YOU HAVEN\'T=
 SEEN/)) {
	  document.getElementById('recent_capsule_container').innerHTML=3D'&lt;h3 =
id=3D"switchsortmsg"&gt;Switching to Most Recent Posts&lt;/h3&gt;';
	  window.location.reload(true);
	}
  }
  if(fbpoptsobj.sortfriendfeed) {
	feedRedirectURL=3D"/?sk=3Dfriends"; //https://www.facebook.com
	feedRedirectName=3D"Friends Feed";
  }

  if((fbpoptsobj.sortmostrecent || fbpoptsobj.sortfriendfeed) &amp;&amp; !w=
indow.location.hash.match(/#topstories/)) { // force feed to sort by most r=
ecent
	if(document.querySelector(".litestandClassicWelcomeBox,#userNav[data-testi=
d=3D'fb_welcome_box'],#userNav a[data-gt*=3D'\"bookmark_type\":\"type_self_=
timeline\"']") &amp;&amp; (!window.location.href.match(/\/addgroup|\/pokes|=
\/explore|\/addlist|\/notes|\/support|\/pages|\/todayinhistory|\/onthisday|=
\/memories|\/townhall|\/(music|photo|video|permalink)\.php|\/videos|\?.*sk=
=3D(friends|trans|photos|pages|groups|notes|video|music|media|albums|fl_)/)=
) &amp;&amp; (window.location.href.split(/\//).length&lt;5)) {
	  //deal with top stories when there is no indicator (h_nor) in the URL=20
	  if(!document.querySelector('a[href$=3D"\?sk=3Dh_nor"]') &amp;&amp; !docu=
ment.getElementById('pagelet_insights')) { // check we are not on a fan pag=
e
	    document.getElementById('globalContainer').innerHTML=3D"&lt;div id=3D'=
switchsortmsg' style=3D'text-align:center;font-size:60px;font-weight:bold;'=
&gt;F.B. Purity:&lt;br/&gt; Switching to: " + feedRedirectName + ".&lt;/div=
&gt;";
		window.location.href=3DfeedRedirectURL;
	  }
	}

	if(window.location.href.match(/\?sk=3Dh_nor$/)) {
	  if(document.getElementById('globalContainer'))
	    document.getElementById('globalContainer').innerHTML=3D"&lt;div id=3D'=
switchsortmsg' style=3D'text-align:center;font-size:60px;font-weight:bold;'=
&gt;F.B. Purity:&lt;br/&gt; Switching to: " + feedRedirectName + "!&lt;/h1&=
gt;";
	  window.location.href=3D feedRedirectURL;
	}
    /* https://www.facebook.com/?sk=3Dh_nor : Top Stories
       https://www.facebook.com/?sk=3Dh_chr : Most Recent
=09
	   change newsfeed links to point to most recent feed
	   left hand newsfeed link=20
	*/
	var tmplefthlink;
	if (document.getElementById('universalNav'))
	  tmplefthlink=3Ddocument.querySelector("#universalNav a[data-gt*=3D'\"boo=
kmark_type\":\"type_newsfeed\"']");
	else if(document.getElementById('pinnedNav'))
	  tmplefthlink=3Ddocument.querySelector("#pinnedNav a[data-gt*=3D'\"bookma=
rk_type\":\"type_newsfeed\"']");
	if(tmplefthlink) {
	  tmplefthlink.setAttribute('href',feedRedirectURL);
	  tmplefthlink.setAttribute('data-gt','');
	  // try removing event listeners by cloning the node and replacing it
      var new_element =3D tmplefthlink.cloneNode(true);
      tmplefthlink.parentNode.replaceChild(new_element, tmplefthlink);
	  new_element=3Dnull;
	}

	// BEGIN trying this code again, seems to be working ok now.
	if(document.querySelector("a[data-gt*=3D'home_chrome']"))
	  document.querySelector("a[data-gt*=3D'home_chrome']").setAttribute('href=
',feedRedirectURL);

	if(document.querySelector("a[data-gt*=3D'logo_chrome']"))
	  document.querySelector("a[data-gt*=3D'logo_chrome']").setAttribute('href=
',feedRedirectURL);
	// END trying this code again, seems to be working ok now.

  } // end if sortmostrecent is enabled
  else {
    if((fbpoptsobj.sortmostrecent || fbpoptsobj.sortfriendfeed)&amp;&amp; w=
indow.location.hash.match(/#topstories/)) {
	   //&lt;div style=3D"position:absolute;top:94px;left:185px"&gt;Viewing To=
p Stories&lt;/div&gt;
	   tsdiv.textContent=3D"Viewing Top Stories";
	   //tsdiv.id=3D'topstoriesdiv';
	   document.getElementById('fbpurityinfowrapper').parentNode.insertBefore(=
tsdiv,document.getElementById('fbpurityinfowrapper'))
	}
    if(debug)
	  console.log('Sort most recent option is not enabled or #topstories is pr=
esent in location.href');
  }
}

function clearBlankComments () {
  var x=3Ddocument.querySelectorAll('.UFIRow.UFIComment');
  var tmptextholder;
  for(i in x) {
    console.log(x[i].textContent);
    try {
	  if(x[i].querySelector &amp;&amp; (x[i].querySelector('div[style*=3D"-dra=
gon-"],a[rel=3D"nofollow"],a[href^=3D"https://www.facebook.com/photo.php"][=
rel=3D"theater"]')))
	  { // comment contains sticker/external link or photo
		continue;
	  }
	  // BEGIN applying text filter
	  if(!x[i].querySelector)
		return;
	  tmptextholder=3DremoveTags(x[i].querySelector('.UFICommentBody').innerHT=
ML); // was .UFICommentContent
	  console.log(tmptextholder);
	  if((tmptextholder=3D=3D"") || tmptextholder.match(textfilterRX)) {
	    x[i].style.display=3D"none";
		if(x[i].nextSibling &amp;&amp; x[i].nextSibling.classList &amp;&amp; (typ=
eof(x[i].nextSibling.classList!=3D'undefined')) &amp;&amp; x[i].nextSibling=
.classList.contains('UFIReplyList'))
	      x[i].nextSibling.style.display=3D"none";
	  }
	  // END applying text filter
	 =20
	  //console.log(removeTags(x[i].querySelector('.UFICommentContent').innerH=
TML));
	 =20
	  if(x[i].querySelector &amp;&amp; removeTags(x[i].querySelector('.UFIComm=
entBody').innerHTML)=3D=3D"") { // was .UFICommentContent
	    x[i].style.display=3D"none";
		if(x[i].nextSibling &amp;&amp; x[i].nextSibling.classList &amp;&amp; x[i]=
.nextSibling.classList.contains('UFIReplyList'))
	      x[i].nextSibling.style.display=3D"none";
	  }
	}
	catch(e) {
	  console.log(e);
	}
  }
}

function removeTags(commentHTML){
  if(typeof(commentHTML)!=3D"undefined") {
	var punctRE =3D /[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&amp;\(\)\*\+,\-\.\/:=
;&lt;=3D&gt;\?@\[\]\^_`\{\|\}~]/g;
=09
    return commentHTML.replace(/&lt;br&gt;/gi,'')
	           .replace(/&lt;!--[\s\S]*?--&gt;/g,'')
	           .replace(/&lt;a[^&gt;]*&gt;.*?&lt;\/a&gt;/g, ' ')
               .replace(/&lt;div[^&gt;]*&gt;.*?&lt;\/div&gt;/g, ' ')
               .replace(/&lt;\/div&gt;/g,'')
               .replace(/(&lt;span class=3D"whitespace"&gt; *&lt;\/span&gt;=
)/g, ' ')
			   .replace(punctRE,'')
               .replace(/\s{2,}/g, ' ')
               .trim();
  }
  else=20
    return "";
}

var createfontlink =3D function(fontlinkid) {

  //console.log('creating font link');
  if(document.getElementById(fontlinkid))
    return;
  var fontlink =3D document.createElement('link');
  fontlink.setAttribute('id',fontlinkid);
  fontlink.setAttribute('type','text/css');
  fontlink.setAttribute('href','');
  fontlink.setAttribute('rel','stylesheet');
  if(document.getElementsByTagName('head').length)
    document.getElementsByTagName('head')[0].appendChild(fontlink);
  fontlink=3Dnull;
}

var initstage2 =3D function () {
  if(debug)
    console.trace();
    //console.log('entering function : ' + arguments.callee.name);

  // instant redirect to friends feed if top stories is detected
  if(fbpoptsobj.sortfriendfeed &amp;&amp; window.location.href.match(/faceb=
ook\.com\/?$|\?sk=3Dh_nor|\?sk=3Dh_chr|\?sk=3Dh_nf/) &amp;&amp; (!window.lo=
cation.href.match(/\?sk=3Dh_nor#topstories/)))
	window.location.href=3D"https://www.facebook.com/?sk=3Dfriends";
=09
  // instant redirect to most recent feed if top stories is detected
  if(fbpoptsobj.sortmostrecent &amp;&amp; window.location.href.match(/faceb=
ook\.com\/?$|\?sk=3Dh_nor/) &amp;&amp; (!window.location.href.match(/\?sk=
=3Dh_nor#topstories/))){
	window.location.href=3D"/?sk=3Dh_chr"; //https://www.facebook.com
  }
  extraTextFilter=3D'';
  headerTextFilter=3D'';
  if(fbpoptsobj.filterappmessages=3D=3D1) {
    filterapptext=3D' fbpblocked';
	headerTextFilter +=3D ', played .*,started playing,started using';
	extraTextFilter +=3D ',games your friends are playing,Games You May Like';
	// hide games mentions in user hovercards
	fbpfreestyle.textContent +=3D ' #globalContainer&gt;div.uiContextualLayerP=
ositioner div [data-gamesrankedimp] {display:none}';
  }
  else
    filterapptext=3D' fbpnormal';

  if(fbpoptsobj.becamefriends=3D=3D1){
    headerTextFilter +=3D ',are now friends,is now friends with,now allows =
subscribers,subscribed to updates from,subscribed to .*\'s updates,subscrib=
ed to the list, followed .*\.,commented on their own friendship,commented o=
n h.. own friendship, (was|is) celebrating friendship'; // can probably get=
 rid of subscribed to now (as they switched to follow)
    extraTextFilter +=3D ',made \\d+ friends on Facebook ';
  }
 =20
  if(fbpoptsobj.watchinglistening=3D=3D1)
    headerTextFilter +=3D ', is watching , was watching, listening to, is p=
laying, was playing'; //(is|was)? watching, (is|was)? listening to

  if(fbpoptsobj.becamefan=3D=3D1){
	headerTextFilter +=3D ', recommends, likes \\d+ pages, likes .* and \\d* o=
ther pages,wrote a recommendation for, rated .*';
    extraTextFilter +=3D ',Liked\\d,Like Page\\d.* Like,\\d LikesLike Page,=
\\d LikesLiked,Like this Page,Find More Pages =C2=B7, Write a recommendatio=
n ';
  }
=20
  if(fbpoptsobj.joinedgroup=3D=3D1) {
	headerTextFilter +=3D ",.* was added to ,uploaded a .* in the group, was i=
nvited to, were invited to, invited .* to ,updated the description of the g=
roup,updated the group";
	extraTextFilter +=3D ",=C2=B7 Join Group";
  }

  if(fbpoptsobj.attendevent=3D=3D1)
	headerTextFilter +=3D ",attending , is going to, are going to , interested=
 in";

  if(fbpoptsobj.attendedevent=3D=3D1)
	headerTextFilter +=3D ", attended the event, were attending, was attending=
, went to .*\.";

  if(fbpoptsobj.createdevent=3D=3D1)
    headerTextFilter +=3D ",created an event,created a private event,added =
an event,updated the event photo";

  if((typeof fbpoptsobj.upcomingevents !=3D=3D'undefined') &amp;&amp; (fbpo=
ptsobj.upcomingevents=3D=3D1))
    extraTextFilter +=3D ",Upcoming Events,Upcoming Concerts";

  if((typeof fbpoptsobj.sharedevent !=3D=3D'undefined') &amp;&amp; (fbpopts=
obj.sharedevent=3D=3D1))
    headerTextFilter +=3D ",shared an event, shared .*\\'s event, posted an=
 event, shared h.. event,shared their event,shared a link to an event";
	//extraTextFilter +=3D ",people are goingjoin" // may also filter out "cre=
ated an event" posts

  if (typeof fbpoptsobj.checkedin =3D=3D "undefined")
    fbpoptsobj.checkedin =3D 0;

  if(fbpoptsobj.checkedin=3D=3D1)
	headerTextFilter +=3D ", is with .*,was tagged at, is in .*\., was in .*\.=
, is at .*\., was at .*\., were at .*\., are at .*\., was with ,travelling =
to,traveling to,checked in to";

  if((typeof fbpoptsobj.likedstatus !=3D=3D'undefined') &amp;&amp; (fbpopts=
obj.likedstatus=3D=3D1))
	headerTextFilter +=3D ", likes .*\'s status, like .*\'s status, like a sta=
tus, likes (h..|their) own status,likes (h..|their) own post,likes a status=
, likes a post,liked this post,likes .*\'s post,like .*\'s post,likes .*'s =
life event,reacted to .* status, reacted to .* post,reacted to .* life even=
t";

  if((typeof fbpoptsobj.commentedstatus !=3D=3D'undefined') &amp;&amp; (fbp=
optsobj.commentedstatus=3D=3D1))
	headerTextFilter +=3D ",commented on .* status, commented on .* note, comm=
ented on .*'s life event, commented on .* activity,commented on .* post,add=
ed \\d comments on a post, replied to a comment on a post";

  if((typeof fbpoptsobj.taggedstatus !=3D=3D'undefined') &amp;&amp; fbpopts=
obj.taggedstatus=3D=3D1)
    headerTextFilter +=3D ", tagged .* status\., tagged in a life event, me=
ntioned in a status, mentioned in a post, tagged in .* note, tagged in a po=
st";

  if((typeof fbpoptsobj.sharedstatus !=3D=3D'undefined') &amp;&amp; (fbpopt=
sobj.sharedstatus=3D=3D1))
	headerTextFilter +=3D ", shared .*\'s status, shared a status, shared .*\'=
s post,shared a post,shared h.. post,shared their post";

  if((typeof fbpoptsobj.taggedphoto !=3D=3D'undefined') &amp;&amp; (fbpopts=
obj.taggedphoto=3D=3D1))
    headerTextFilter +=3D ",tagged in (h..|their) own photo, tagged in \\d+=
 photos,tagged in a photo,tagged in .*\'s photo,tagged in h.. own album, ta=
gged in .*\'s album,was added as a contributor to the album,tagged h..self =
in.^photo,tagged h..self in album";

  if((typeof fbpoptsobj.likedphoto !=3D=3D'undefined') &amp;&amp; (fbpoptso=
bj.likedphoto=3D=3D1))
    headerTextFilter +=3D ",liked .* photo,likes .* photo,likes? a photo,li=
kes .*\'s album, reacted to .* photo,reacted to .*\'s album,reacted to a ph=
oto, like .*\'s photo";

  if((typeof fbpoptsobj.commentedphoto !=3D=3D'undefined') &amp;&amp; (fbpo=
ptsobj.commentedphoto=3D=3D1))
    headerTextFilter +=3D ",commented on .*\'s photo,commented on h.. own p=
hoto,commented on h.. own album,commented on a photo,commented on .*\'s alb=
um";

  if((fbpoptsobj.commentedlink !=3D=3D 'undefined') &amp;&amp; (fbpoptsobj.=
commentedlink=3D=3D1)) {
    headerTextFilter +=3D ",commented on .*\'s link,commented on .* link,co=
mmented on .*\.com\.";
  }

  if((fbpoptsobj.likedlink !=3D=3D 'undefined') &amp;&amp; (fbpoptsobj.like=
dlink=3D=3D1)) {
    headerTextFilter +=3D ",likes an article,recommends a link,likes h.. ow=
n link,likes a link,like a link,like .*\'s link,likes .*\'s link,likes \\d+=
 links,reacted to .*\'s link,reacted to a link";
  }

  if((fbpoptsobj.sharedpage !=3D=3D 'undefined') &amp;&amp; (fbpoptsobj.sha=
redpage=3D=3D1)) {
    headerTextFilter +=3D ",shared a Page,shared \d+ pages";
  }

  if(fbpoptsobj.commentwall=3D=3D1) {
	headerTextFilter +=3D ",posted in,commented on .* post,commented on .* art=
icle,wrote on .*\'s timeline, to .*\'s timeline"; //commented on h.. own po=
st,commented on .*\'s post in,commented on a Post,
	extraTextFilter  +=3D ",posted .* to .*\'s timeline";
  }

// updated profile
  if (typeof fbpoptsobj.updatedprofile =3D=3D "undefined")
    fbpoptsobj.updatedprofile =3D 0;

  if(fbpoptsobj.updatedprofile=3D=3D1)
	headerTextFilter +=3D ",added .* to h.. education\.,updated h.. education,=
added .* to h.. work\.,has worked on,updated h.. current .* to .*\\.,added =
.* as h.. hometown\\.,updated h.. work and education,added .* to h.. list o=
f inspirational people\\.,to the inspirational people,added .* to h.. favou=
rite sports\\.,added .* to h.. favourite teams\\.,added .* to h.. favourite=
 athletes\\.,added .* to h.. activities\\.,added .* to h.. interests\\.,add=
ed .* to h.. profile\\.,to .* previous employers,added .* to h.. timeline,a=
dded a job at , now works at , took .* at .*,added details about,added a li=
fe event,added \\d+ life events,updated h.. bio,updated his bio,updated the=
ir bio";

// changed profile pic
  if (typeof fbpoptsobj.changedprofilepic =3D=3D "undefined")
    fbpoptsobj.changedprofilepic =3D 0;

  if(fbpoptsobj.changedprofilepic=3D=3D1)
    headerTextFilter +=3D ",changed (h..|their) profile picture,updated (h.=
.|their) profile picture,updated (h..|their) profile video,updated (h..|the=
ir) (360 )?cover photo,added a temporary profile picture";

// changed relationship
  if (typeof fbpoptsobj.changedrelationship =3D=3D "undefined")
    fbpoptsobj.changedrelationship =3D 0;

  if(fbpoptsobj.changedrelationship=3D=3D1) {
    headerTextFilter +=3D ',went from being \".*\" to \".*\",went from bein=
g \".*\" to being \".*\",is in a relationship,complicated relationship,is s=
ingle,is married,is engaged,is in a domestic partnership';
	extraTextFilter +=3D ',See Relationship,=C2=B7 In a Relationship,=C2=B7 in=
 a complicated relationship';
  }
 =20
// looking for recommendations
  if (typeof fbpoptsobj.recommendations =3D=3D "undefined")
    fbpoptsobj.recommendations =3D 0;

  if(fbpoptsobj.recommendations=3D=3D1) {
	headerTextFilter +=3D ',looking for recommendations\.';
	extraTextFilter +=3D ',Looking forRecommendations,You can ask for recommen=
dations too\.';
  }

// uploaded photo=20
  if (typeof fbpoptsobj.uploadedphoto =3D=3D "undefined")
    fbpoptsobj.uploadedphoto =3D 0;

  if(fbpoptsobj.uploadedphoto=3D=3D1){
    headerTextFilter +=3D ",added a photo,posted a photo,added a new photo,=
added \\d+ new photos,added \\d+ photos,took a photo with,took \\d+ photos =
with,added a collage,added .* featured photo,added a 3D photo, added a 3D p=
ost";
	extraTextFilter +=3D', (\\d+ photos)';
  }

// shared photo=20
  if (typeof fbpoptsobj.sharedphoto =3D=3D "undefined")
    fbpoptsobj.sharedphoto =3D 0;

  if(fbpoptsobj.sharedphoto=3D=3D1){
    headerTextFilter +=3D ",shared a photo,shared h.. photo,shared their ph=
oto,shared .*\'s album,shared h.. album,shared their album,shared a collage=
,shared h.. collage,shared their collage,shared .*\'s collage";//shared .*\=
's photo,
	extraTextFilter +=3D ",shared .*?'s photo"; //by\:
  }

//  uploaded video =20
  if (typeof fbpoptsobj.uploadedvideo =3D=3D "undefined")
    fbpoptsobj.uploadedvideo =3D 0;

  if(fbpoptsobj.uploadedvideo=3D=3D1){
	headerTextFilter +=3D ",posted a video,added a video,added a new video,add=
ed \\d+ videos,added \\d+ new videos,uploaded.* video,added a new episode,p=
osted an episode";
  }

// tagged in video
  if (typeof fbpoptsobj.taggedinvideo =3D=3D "undefined")
    fbpoptsobj.taggedinvideo =3D 0;

  if(fbpoptsobj.taggedinvideo=3D=3D1)
	headerTextFilter +=3D ", tagged in .*\'s video, tagged in a video";

// live video
  if (typeof fbpoptsobj.livevideo =3D=3D "undefined")
    fbpoptsobj.livevideo =3D 0;

  if(fbpoptsobj.livevideo=3D=3D1)
	headerTextFilter +=3D ", is live now, was live,plans to go live.,planned t=
o go live";

  // shared video
  if((typeof fbpoptsobj.sharedvideo!=3D=3D'undefined') &amp;&amp; (fbpoptso=
bj.sharedvideo=3D=3D1))
    // we also add a check for classname "shareMediaVideo" to improve filte=
r coverage
    headerTextFilter +=3D ",shared a video,shared h.. video,shared their vi=
deo,shared .*\'s video,shared .*\'s episode,shared .* live video,shared \\d=
+ videos,reblogged a video,hosted a watch party,started a watch party";
=20
  // liked video
  if((typeof fbpoptsobj.likedvideo!=3D=3D'undefined') &amp;&amp; (fbpoptsob=
j.likedvideo=3D=3D1))
    headerTextFilter +=3D ",liked a video,likes a video,likes .*\'s video,l=
ikes h.. own video, likes their own video,liked .*\'s video, likes .*\'s li=
ve video, reacted to .* video, reacted to a video,reacted to .* episode, li=
ked .*\'s episode";
  // commented video
  if((typeof fbpoptsobj.commentedvideo!=3D=3D'undefined') &amp;&amp; (fbpop=
tsobj.commentedvideo=3D=3D1))
    headerTextFilter +=3D ",commented on a video,commented on .*'s video,co=
mmented on .*'s live video";
  // youtube / vimeo videos
  if((typeof fbpoptsobj.youtubevideo!=3D=3D'undefined') &amp;&amp; (fbpopts=
obj.youtubevideo=3D=3D1)){
    extraTextFilter +=3D ",youtube\.com,youtu\.be,vimeo\.com";
	headerTextFilter +=3D ",shared \\d+ links on YouTube,shared a link on yout=
ube";
  }

  //if(fbpoptsobj.hideallvideos=3D=3D1)
  //  ; // we are dealing wtih this by  running a check on the node for the=
 "shareMediaVideo" class
  //       should it also hide gifs? yes, because they are videos...

  //if(fbpoptsobj.hidealllinks=3D=3D1)
  // Need to Add all links filter here?

// posted note
  if (typeof fbpoptsobj.postednote =3D=3D "undefined")
    fbpoptsobj.postednote =3D 0;

  if(fbpoptsobj.postednote=3D=3D1)
	headerTextFilter +=3D ",posted a note,published a note";

//  tagged in note
  if (typeof fbpoptsobj.taggedinnote =3D=3D "undefined")
    fbpoptsobj.taggedinnote =3D 0;

  if(fbpoptsobj.taggedinnote=3D=3D1)
	headerTextFilter +=3D ",tagged in a note,tagged in a Post,tagged in .* lif=
e event";

  if (typeof fbpoptsobj.productshown =3D=3D "undefined")
    fbpoptsobj.productshown =3D 0;
  else if(fbpoptsobj.productshown=3D=3D1)
	extraTextFilter +=3D ",Products shown:";

// Shared a memory
  if(fbpoptsobj.sharedmemory =3D=3D=3D "undefined")
	fbpoptsobj.sharedmemory=3D0;

  if (fbpoptsobj.sharedmemory =3D=3D1) {
	headerTextFilter+=3D ",Shared a memory,shared (h..|their) life event";
    extraTextFilter+=3D ",Friends on Facebook with .* for \\d+ Year,TodaySe=
e Your Memories,Facebook!See your memories,Year in ReviewA video looking ba=
ck,Years? of Friendship on Facebook";
  }

//  Your memories
  if(fbpoptsobj.yourmemories =3D=3D=3D "undefined")
	fbpoptsobj.yourmemories=3D0;

  if (fbpoptsobj.yourmemories =3D=3D1)
	extraTextFilter+=3D ",Your Facebook memories,Your Memories on Facebook,Yea=
rs? of Friendship on Facebook,Celebrate Your Friendship With,We made you th=
is video to celebrate your friendship,see more memories,A Look Back at Your=
 Summer,we made you a video to look back on,your year in review";

// new birthday posts in newsfeed
  if(fbpoptsobj.rcbirthdays =3D=3D1) {
	extraTextFilter+=3D ",Birthday: Today,Birthday: Yesterday,want to miss a c=
hance to wish her a happy birthday,want to miss a chance to wish him a happ=
y birthday,want to miss a chance to wish them a happy birthday,'s birthday =
video!";
	headerTextFilter+=3D",'s Birthday";
  }

// commented on this
  if (typeof fbpoptsobj.commentedonthis =3D=3D "undefined")
    fbpoptsobj.commentedonthis =3D 0;

  if(fbpoptsobj.commentedonthis=3D=3D1){
	headerTextFilter +=3D ",commented on this\\.,replied to a comment,replied =
to .*'s comment,added \\d+ comments on this";
	extraTextFilter+=3D",commented on this\\.";
  }

// tagged in this
  if (typeof fbpoptsobj.taggedthis =3D=3D "undefined")
    fbpoptsobj.taggedthis =3D 0;

  if(fbpoptsobj.taggedthis=3D=3D1)
	headerTextFilter +=3D ", tagged in this";

// liked this
  if (typeof fbpoptsobj.likedthis =3D=3D "undefined")
    fbpoptsobj.likedthis =3D 0;

  if(fbpoptsobj.likedthis=3D=3D1)
	headerTextFilter +=3D ",liked this\\.,liked this post, like. .*'s comment,=
 liked a comment,reacted to this,likes .* activity,reacted to .* activity";

// posted link
  if (typeof fbpoptsobj.postedlink =3D=3D "undefined")
    fbpoptsobj.postedlink =3D 0;

  if(fbpoptsobj.postedlink=3D=3D1)
	headerTextFilter +=3D ",shared link\\.,shared a link,shared \\d+ links,sha=
red their product,shared a product";

// read an article
  if (typeof fbpoptsobj.trendingstory =3D=3D "undefined")
    fbpoptsobj.trendingstory =3D 0;

  if(fbpoptsobj.trendingstory=3D=3D1) {
	headerTextFilter +=3D ", is trending\\.,=C2=B7 Trending"; //,read an artic=
le, recently read articles\\., read \\d* articles\\.,
	extraTextFilter +=3D ",=C2=B7 Trending,Trending Articles,Trending Videos,M=
ost Shared on ,Places Trending Today,Top 5 Places near you,^Popular Across =
Facebook,Featured Topic\:,^Places Trending in "; // Recent Articles About=
=20
  }

// facebook questions
  if(fbpoptsobj.questionsbox=3D=3D1) {
    headerTextFilter +=3D ", replied to: , asked: ,answered .*'s question,a=
nswered a question,asked.*a question,created a poll,answered \\d+ questions=
";
	extraTextFilter +=3D ",=C2=B7 Ask friends =C2=B7";
  }

// People You May Know
  if(fbpoptsobj.pymk=3D=3D1) {
    headerTextFilter +=3D ",People You May Know,Friend Requests";
	extraTextFilter +=3D ",FriendRequests,friend-add";
  }
 =20
// hide sponsored posts in newsfeed
  if(fbpoptsobj.sponsoredbox=3D=3D1) {
	//extraTextFilter=3D'Sponsored =C2=B7,' + extraTextFilter;
    extraTextFilter +=3D ",Recently Released Albums,Get Offer =C2=B7,Pages =
You May Like,Links you may like,Page Stories you may like,Jobs Near You,^Re=
commended for you,^Suggested because it's popular on Facebook,Advertiser-sp=
onsored poll,suggested shows,Get (every )?New episode(s)? in your watchlist=
,=C2=B7 Paid =C2=B7,Paid partnership =C2=B7";//SponSsored
	headerTextFilter +=3D ", claimed an offer from, posted an offer,shared a p=
roduct\.,shared their product\.,posted a job\.";
	fbpfreestyle.textContent +=3D ' #contentArea div[data-dedupekey][data-ft*=
=3D\'"ei":\'],div[data-ft*=3D\'"ei":\'],#contentArea div[data-xt]:not([data=
-xt*=3D"module"]):not([data-xt*=3D"recent_activity_story"]):not([data-xt*=
=3D"ProfileTilesTimelineUnit"]):not([data-xt*=3D"cover_photo"]):not([data-x=
t*=3D"intro_card"]):not([id^=3D"mall_post_"]), div._s15 /*get mess. app ban=
ner*/, div[id*=3D":EntInstantGamesFeedObject"],img[src^=3D"/images/messagin=
g/invite_xma"],#video_permalink_related_pagelet, #offers_reminders_link, /*=
 more from related pages */ div._31qy._3xaf, div[data-ft=3D\'{\"chaining_ty=
pe\":\"article\"}\'], /* Hide "Businesses for You" box in right column */ d=
iv._4kqp._55ob, div._1ltv._9bp._50z3  {display:none}';
  }

  if(fbpoptsobj.nonags=3D=3D1) {=20
    // facebook celebrates "x" day today type posts
	extraTextFilter +=3D",app-facebook,Here's to friendship\!Only you can see =
this";
	headerTextFilter+=3D",Tell Us What You Think";
  }

// disable auto tag suggestions
  if (fbpoptsobj.tagsuggestions) {
    fbpfreestyle.textContent +=3D' html.fbpstopautotags div.uiTypeaheadView=
 {display:none} html.fbpstopautotags div.uiInlineTokenizerView html.fbpstop=
autotags div.uiContextualLayerPositioner ul._599r {display:none} html.fbpst=
opautotags div.uiContextualLayerPositioner ul._5u8_, /* hide the "link this=
 comment" box under recommendations */ div.UFICommentContent div._5ofu, /* =
Hide "Choose Friends to Tag" */ div._3ho0 {display:none} ';
  }

// hide notificatinos about facebook making "goodwill videos" such as year =
in review about you
  if(fbpoptsobj.yourmemories){
	fbpfreestyle.textContent +=3D" #fbNotificationsFlyout li[data-gt*=3D'\"not=
if_type\":\"goodwill_video'] {display:none !important}"; =20
  }
 =20
if(!fbpoptsobj.smileys){  // hide (duplicated) ascii smiley unless we have =
the hide smileys option turned on. (hide colour statuses caused the duplica=
ted smileys bug to reappear)
  fbpfreestyle.textContent +=3D' span._4mcd, span._skr, span._7oe {display:=
none}';=20
}
// fix font size
  if(fbpoptsobj.fontfix=3D=3D1) {
	fbpfreestyle.textContent +=3D'div.actorName{display:inline;margin-right:3p=
x !important} a.subject,div.preview,.mall_post_body_text,div,span,p,textare=
a,input,select,td,label,h3,h4,h5,h6{font-size:' + fbpoptsobj.fontsize + 'px=
 !important} ' + 'div.commentContent {font-size:' + (fbpoptsobj.fontsize-1)=
 +'px !important}' + ' .ginormousProfileName { font-size: 20px !important} =
' + ' .emote_text {display:none}' + ' div.linkWrap,#facebook div.userConten=
tWrapper ._6m3 ._6mb.ellipsis {line-height:' + fbpoptsobj.fontsize + 'px !i=
mportant} div.userContent i span.accessible_elem, span.UFICommentBody i spa=
n.accessible_elem { overflow: inherit !important}';
  }

// fix font colour
  if(fbpoptsobj.fontcolourfix=3D=3D1) {
	fbpfreestyle.textContent +=3D' * {color:' + fbpoptsobj.fontcolour + ' !imp=
ortant} #photos_snowlift div.snowliftOverlayBar {background-color:rgba(255,=
255,255,0.4) !important} div.tooltipContent {background-color:grey !importa=
nt}'; //span.fwb {color:' + fbpoptsobj.fontcolour + ' !important}';
  }

// fix font background colour
  if(fbpoptsobj.fontbgcolourfix=3D=3D1) {
  fbpfreestyle.textContent +=3D' * {background-color:' + fbpoptsobj.fontbgc=
olour + ' !important} .uiSideNav .item {border-bottom:1px solid #999} ._5uc=
h { border-bottom: 1px solid #999 !important} ._585- {-webkit-box-shadow: i=
nset 0 0 0 1px #999, inset 0 1px 0 0 #999, 0 -1px 0 0 #999 !important} .uiB=
oxLightblue { border: 1px solid #777 !important } .uiListLight { border-col=
or: #333; } textarea, .inputtext, .inputpassword { border: 1px solid #555} =
.uiUfi .ufiItem { border-bottom: 1px dotted darkgray} n.tagsWrapper *, #fbP=
hotoTheaterTags, .tagsWrapper, .fbPhotosPhotoTagboxes *, #fbPhotoTheaterSta=
geActions, .fbQuestionsPollClickTarget, .fbPhotosPhotoTagboxes, .flashUploa=
derOverlayButton, .fluploader_swfdiv, .coverBorder, .frame, .mat, .graph-ca=
nvas, .overlay, span.label, div.label, span.fwb ,#snowliftStageActions, .fb=
PhotoTagger, .faceBox, .typeaheadWrapper, .groupsJumpCoverBorder, .-cx-PRIV=
ATE-uiFileInput__wrap, #fullScreenSwitch, #fbProfileCoverPhotoSelector, #fb=
ProfileCoverPhotoSelector .wrap, #fbProfilePicSelector, #fbProfilePicSelect=
or .wrap, .snowliftPager, .snowliftPager i, a.fbPhotoViewLarger, div._7m4, =
#pagelet_timeline_medley_events *, div.userContentWrapper a, #fbProfilePicS=
elector &gt; div, #fbProfilePicSelector &gt; div &gt; a, div.friendName, bo=
dy.timelineLayout div.fbPhotoCurationControlWrapper div, div[role=3D"articl=
e"] *, div.userContentWrapper a i, #stream_pagelet div.clearfix a, #notific=
ations_stream *, ._5mo7,._5mo5,._452y, ._3251, div.videoStage *,div._53j5 *=
, div._3uzl, div._jfi {background-color:transparent !important} .fbQuestion=
sPollResultsBar .shaded, .bar {background-color: #6C83B2 !important}  .tagN=
ame, ol.balancingCapsule, div.fbTimelineFilters, ol.fbTimelineCapsule {back=
ground-color: ' + fbpoptsobj.fontbgcolour + ' !important} .hasSmurfbar #blu=
eBarHolder #blueBar {background-image:url("") !important} /* like button: *=
/ div._55k4, /*camera icon under composer*/ div._3jk , /* profile pic*/ i._=
96h, /* group count in left column*/ div.-cx-PRIVATE-blendedBookmarksNonLit=
estand__bookmark, div._5duc, div[data-reactid], #fbTimelineHeadline div.act=
ions, #fbTimelineHeadline div.actionsDropdown, div.cover *, div.fbPhotoCura=
tionControl, ._5b_0, /* pics on notification page*/ ._ohf.rfloat&gt;div&gt;=
div:nth-child(2), canvas, canvas + div,div._5nxw {background-color:transpar=
ent !important} form.fbCalendarActions a[role=3D"button"], div.fbCalendarHe=
ader a[role=3D"button"],div.fbCalendarHeader button {background-image: none=
} body.timelineLayout a.friendHovercard .name, ._5b_0 div { background-colo=
r: rgba(255,255,255,0.2) !important} div#fbProfileCover *, div[data-ft=3D\'=
{"tn":"H"}\'] i, div.listSection a.blockClick, div.listSection a.viewProfil=
e {background-color:transparent !important} div#fbProfileCover span, div#fb=
ProfileCover div.fsxxl {background-color: rgba(149,149,149,0.3) !important}=
 #blueBar {background-image:none !important } #blueBarDOMInspector&gt;div, =
#blueBarDOMInspector div[role=3D"banner"] {background-image:none !important=
} img._4-od {z-Index:10} a[aria-label=3D"Press Esc to close"] {z-Index:11} =
#pagelet_web_messenger a[rel=3D"theater"] div, #ChatTabsPagelet a[rel=3D"th=
eater"] div, /* group stuff*/ #pagelet_group_ div._jfi, div._1hkb, div._5n0=
1, div._4hsn ,div._4hsm,div._1li5,div._1av3,div._4ev6, div[role=3D"heading"=
] a, a[rel=3D"theater"] *, a[data-video-id] *, div.scaledImage &gt; div, #C=
hatTabsPagelet div._1nc7, /*reactions*/div._49v-._22uo,div._1oxk,div._d6l,d=
iv._39m._1ef2,div._39n,div._1ef0,span._iuw, a._4tsl, #photos_snowlift div._=
4g9v {background-color:transparent !important} #BuddylistPagelet div._5bon&=
gt;div._568z span,#pagelet_sidebar div._5bon&gt;div._568z span {background:=
 rgb(66, 183, 42) !important; border-radius: 50%; display: inline-block; he=
ight: 6px; margin-left: 4px; width: 6px} body.timelineLayout a[data-testid=
=3D"upload_photo_button"],body.timelineLayout div.autofocus,body.timelineLa=
yout a[data-action-type=3D"take_photo"],body.timelineLayout a[data-tooltip-=
content=3D"Edit Thumbnail"], div._4-oi, div._3h_t[role=3D"banner"],#globalC=
ontainer div.leaflet-map-pane svg, ._3m75 .selectedItem ._5afe::after, ._3m=
75 .sideNavItem:hover ._5afe::after,#pages_side_column a._hj4, #pages_side_=
column div._hip {background-color:transparent !important} #pagelet_dock a.f=
bNubButton span.label {background-color:'+ fbpoptsobj.fontbgcolour +' !impo=
rtant} /* video volume control */ div._2-mn {background-color:#4080ff !impo=
rtant} div._2-ml, #pages_side_column div._hiq {background-color:rgba(255,25=
5,255,0.5) !important} '; //div._52mr a._4tsl {background-color:transparent=
 !important} // /* attach image to comment icon*/ i.UFICommentPhotoIcon, di=
v.userContentWrapper form.commentable_item div.UFICommentStickerIcon, div.u=
serContentWrapper form.commentable_item span.UFICommentPhotoIcon {backgroun=
d-color:lightgrey !important} // i.UFICommentPhotoIcon,span.UFICommentPhoto=
Icon,div.UFICommentStickerIcon,i.UFICommentPhotoIcon, div.userContentWrappe=
r form.commentable_item div.UFICommentStickerIcon, html#facebook div.userCo=
ntentWrapper form.commentable_item span.UFICommentPhotoIcon {background-col=
or:transparent}
	//console.log(fbpoptsobj.fontbgcolour);
	if(fbpoptsobj.fontbgcolour=3D=3D'#000000' || (fbpoptsobj.fontbgcolour=3D=
=3D'black')) // ensure notification icons are invisible
	  fbpfreestyle.textContent +=3D ' #pagelet_bluebar a.jewelButton&gt;div, #=
userNavigationLabel,#pagelet_bluebar a[data-testid=3D"privacy_lite_jewel_bu=
tton_test_id"] &gt; div, #bluebarRoot a[data-tooltip-content=3D"Quick Help"=
]&gt;div {background-color: #444444 !important} #pagelet_sidebar div.fbChat=
Typeahead a {background-color:lightgrey !important} #pagelet_sidebar div.fb=
ChatTypeahead input {background-color:#f6f7f9 !important}';
	if(fbpoptsobj.fontcolourfix)
	  fbpfreestyle.textContent +=3D  ' a[href*=3D"?sk=3Dinsights&amp;section=
=3DnavPosts"] {color:' + fbpoptsobj.fontbgcolour + " !important}";
  }
  else { // make sure fbp options screen has a white background in case use=
r is using an external style
    fbpfreestyle.textContent +=3D ' #fbpoptsdiv {background-color:white !im=
portant}';
  }

  // #photos_snowlift div.snowliftOverlayBar (photo info bar in theatre mod=
e, if font colour is set, we may need to change colour of this bar, maybe t=
ransparent white)

// fix link colour
  if(fbpoptsobj.linkcolourfix=3D=3D1) {
	fbpfreestyle.textContent+=3D' a {color:' + fbpoptsobj.linkcolour + ' !impo=
rtant}'; //span.fwb {color:' + fbpoptsobj.fontcolour + ' !important}'; #pho=
tos_snowlift div.snowliftOverlayBar {background-color:rgba(255,255,255,0.4)=
 !important}
  }  =20
  // fix font=20
  if(fbpoptsobj.fbpfontfix=3D=3D1) {
	fbpfreestyle.textContent +=3D' * {font-family:' + fbpoptsobj.fbpfont + ' !=
important}';
	//fbpfreestyle.textContent +=3D' @import url(http://fonts.googleapis.com/c=
ss?family=3D' + fbpoptsobj.fbpfont.replace("'",'','g').replace(/'"','','g'/=
).replace(/ /,'','g') + ') \n\n* {font-family:' + fbpoptsobj.fbpfont + ' !i=
mportant} ';
  }

  // web font stuff
  if(fbpoptsobj.fbpwebfontfix=3D=3D1) {
	fbpfreestyle.textContent +=3D " * {font-family:'" + fbpoptsobj.fbpwebfont =
+ "',sans-serif !important} .fbPhotoStarGridElement {display: block !import=
ant}";
  }

  // freeze top navbar
  if(fbpoptsobj.freezetopnav) {
    fbpfreestyle.textContent +=3D' #blueBarDOMInspector&gt;div {height:auto=
;position:fixed !important} #contentArea, #rightCol,#headerArea,#pages_mana=
ger_top_bar_container{margin-top:30px !important}';
  }

  // top navbar colour
  if(fbpoptsobj.topnavcolourfix=3D=3D1 &amp;&amp; (typeof(fbpoptsobj.topnav=
colour)!=3D"undefined") &amp;&amp; (fbpoptsobj.topnavcolour!=3D"")) {
    fbpfreestyle.textContent +=3D' #blueBarDOMInspector&gt;div, #blueBarDOM=
Inspector div[role=3D"banner"], #fb2k_pagelet_bluebar&gt;#blueBarDOMInspect=
or&gt;div&gt;div {background-color:' + fbpoptsobj.topnavcolour  +' !importa=
nt; background-image:none!important }';
    if(fbpoptsobj.topnavcolour=3D=3D'#000000' || (fbpoptsobj.topnavcolour=
=3D=3D'black')) // ensure notification icons arent invisible
	  fbpfreestyle.textContent +=3D ' #pagelet_bluebar a.jewelButton&gt;div, #=
userNavigationLabel,#fb2k_pagelet_bluebar a.jewelButton {background-color: =
rgba(255,255,255,0.2) !important}';
  }
  // top navbar font colour
  if(fbpoptsobj.topnavfontcolourfix=3D=3D1 &amp;&amp; (typeof(fbpoptsobj.to=
pnavfontcolour)!=3D"undefined") &amp;&amp; (fbpoptsobj.topnavfontcolour!=3D=
""))
    fbpfreestyle.textContent +=3D' #blueBarDOMInspector * {color:' + fbpopt=
sobj.topnavfontcolour + ' !important} '; //#blueBarNAXAnchor

  // fix notifications background colour
  if((typeof fbpoptsobj.notificationsbgcolourfix !=3D "undefined") &amp;&am=
p; fbpoptsobj.notificationsbgcolourfix=3D=3D1) {
	fbpfreestyle.textContent +=3D' li._33c._4af div.anchorContainer *, #notifi=
cations_stream div._bqf._2vp7._2pi8 *, li.jewelItemNew *, #content div[data=
-testid=3D"NOTIF_LIST_TEST_ID"] li._4vba { background-color:' + fbpoptsobj.=
notificationsbgcolour + ' !important} div[data-testid=3D"chevron"]&gt;a { b=
ackground-color: transparent !important }';
  }=20

  // background image
  var tmpbgimg;
  if(fbpoptsobj.backgroundimagefix=3D=3D1 &amp;&amp; (typeof(fbpoptsobj.bac=
kgroundimage)!=3D"undefined") &amp;&amp; (fbpoptsobj.backgroundimage!=3D"")=
 &amp;&amp; (fbpoptsobj.backgroundimage.match(/^https:\/\//))) {
	tmpbgimg=3Dfbpoptsobj.backgroundimage;
	fbpfreestyle.textContent +=3D" body { background-attachment: fixed !import=
ant; background-image:url('" + tmpbgimg + "') !important} #contentCol, #con=
tent div._fbEventsPermalink__mainColLayout {background-color:transparent !i=
mportant} div.homeSideNav, div[id*=3D'PagePostsSectionPagelet'] a.uiMorePag=
erPrimary, #timeline_tab_content_extra a.uiMorePagerPrimary, #sideNav, #swi=
tchsortmsg, div#fbTimelineLogBody div[id*=3D'month_'], div#sharerDialog tex=
tarea, #sharerDialog div._8yb *, body.pagesTimelineLayout #mainContainer di=
v._5ss8, #browse_lhc_filter_pagelet div.fixed_always {background-color:rgba=
(255,255,255,0.4) !important} div#sharerDialog textarea, #sharerDialog div.=
_8yb * {color:black !important} #pagelet_welcome_box a, #pagelet_bookmark_n=
av h4.navHeader, div[id*=3D'PageScrubberPagelet_'], #fbxPhotoContentContain=
er div.photoDetailsContainer, #pageFooter div[role=3D'contentinfo'],#fbPhot=
oPageHeader a, #fbPhotoPageHeader .uiHeaderTitle, #rightColContent ul.fbTim=
elineScrubber, div#sharerDialog div.UIShareStage_ShareContent, #pagelet_pin=
ned_posts, #pagelet_event_composer div div, li.adminableItem,div.fbProfileB=
rowserResult, body.plugin div._3-8y {background-color:rgba(255,255,255,0.5)=
} #fbxPhotoContentContainer td.stageContainer {background-color:rgba(255,25=
5,255,0.2)} #fbxPhotoContentContainer div.fbPhotoContributor&gt;div {backgr=
ound-color:white} div[id*=3D'PageScrubberPagelet_'] *, #SettingsPage_Conten=
t span.fbSettingsListItemContent {color:#333} #sideNav h4.navHeader&gt;a, #=
event_left_navigation h4.navHeader, #pagelet_welcome_box a.fbxWelcomeBoxNam=
e, div#sharerDialog textarea, #pagelet_pinned_posts span, #pagelet_event_co=
mposer div div {color:black} #event_this_week_nav a, #event_this_week_nav s=
pan, #rightColContent ul.fbTimelineScrubber a, div[id*=3D'PagePostsSectionP=
agelet'] a.uiMorePagerPrimary, #timeline_tab_content_extra a.uiMorePagerPri=
mary, #sideNav div.bookmarksNavSeeAll, #pagelet_main_column_personal li.sid=
eNavItem *, #pagelet_main_column_personal div.actionLinks * {color:#141823}=
 body &gt; pre, #SettingsPage_Content, .uiHeaderTitle, div.UIFullPage_Conta=
iner, div.core,#blog_right_column,#blog_main_column, li.notification, #fbps=
gdiv, #topstoriesdiv, div.invite_history, div.filtermatchtext {background-c=
olor: rgba(255,255,255,0.8) !important} #profile_page_insights_hubble ._5xy=
o a, ._2fvv, ._19sz { background-color: rgba(255,255,255,0.4); color: black=
 !important}"; //#fbPhotoPageCaption, #fbPhotoPageAuthorName, #fbPhotoPageF=
eedback, #fbPhotoPageTagList,
  }

// top nav background image
  var tmpnavbarbgimg;
  if((fbpoptsobj.topnavimagefix=3D=3D1) &amp;&amp; (fbpoptsobj.backgroundim=
agefix=3D=3D1) &amp;&amp; (typeof(fbpoptsobj.backgroundimage)!=3D"undefined=
")) {
    fbpfreestyle.textContent +=3D" #pagelet_bluebar &gt; div:not(id) &gt; #=
blueBarDOMInspector &gt; div, #pagelet_bluebar &gt; #blueBarDOMInspector di=
v[role=3D'banner'], #fb2k_pagelet_bluebar&gt;#blueBarDOMInspector&gt;div&gt=
;div { background-image:url('" + tmpbgimg + "') !important; }";
  }

  // f logo image
  if((fbpoptsobj.flogoimagefix=3D=3D1) &amp;&amp; (fbpoptsobj.flogoimagefix=
=3D=3D1) &amp;&amp; (typeof(fbpoptsobj.flogoimage)!=3D"undefined")  &amp;&a=
mp; (fbpoptsobj.flogoimage!=3D"") &amp;&amp; (fbpoptsobj.flogoimage.match(/=
^https:\/\//))) {
    fbpfreestyle.textContent +=3D" #pagelet_bluebar a[data-gt=3D'{\"chrome_=
nav_item\":\"logo_chrome\"}']  {background-image:url(" + fbpoptsobj.flogoim=
age + ") !important;background-position:0px 0px !important;background-repea=
t: no-repeat; margin-top:2px} #blueBarDOMInspector a[data-testid=3D\"blue_b=
ar_fb_logo\"]&gt;span, #blueBarDOMInspector span._2md {background-image:non=
e !important} #pagelet_bluebar a[data-gt=3D'{\"chrome_nav_item\":\"logo_chr=
ome\"}'] span {background-color:transparent !important}";
  }

  // stretch background image
  if(fbpoptsobj.stretchbkgimg) {
    fbpfreestyle.textContent +=3D' body {background-size:100% 100% !importa=
nt; background-repeat:no-repeat !important} #pagelet_bluebar &gt; div:not(i=
d) &gt; #blueBarDOMInspector &gt; div, #pagelet_bluebar &gt; #blueBarDOMIns=
pector div[role=3D"banner"] { background-size:100% !important;  background-=
repeat:no-repeat !important }';
  }
  // transparent newsfeed
  if(fbpoptsobj.transnewsfeed) {
    fbpfreestyle.textContent +=3D' #BuddylistPagelet div.fbNubFlyoutBody, #=
pagelet_sidebar div.fbChatSidebar, #rightCol div.cardRightCol, #pagelet_com=
poser&gt;div, div.fbpnormal,div.fbpblocked,div.fbpblockedx, div.questionsFe=
edback, div.UFIInputContainer { background-color: rgba(255,255,255,0.8) !im=
portant } div.UFIContainer,div.UFILikeSentence, div.UFIRow, #contentArea di=
v[data-dedupekey]&gt;div,#contentArea div[data-dedupekey]&gt;div&gt;div, #p=
agelet_composer&gt;div&gt;div , #pagelet_composer div._2dck._4-u3._4-u8,spa=
n._4arz {background-color:transparent !important} #pagelet_composer div._1m=
wp._1mwq._4c_p._5bu_._5yk1, div.UFIAddCommentInput, body.hasPagesManagerNav=
bar div._3-8x._ikh {background-color:rgba(255,255,255,0.6) !important} a.hi=
depostlink {color:#5555 !important} '; // #feedx_sprouts_container * {backg=
round-color:transparent} // commented out because it was causing problems
  }
 =20
  if((typeof fbpoptsobj.showsetasbackgbutt!=3D=3D'undefined') &amp;&amp; (f=
bpoptsobj.showsetasbackgbutt=3D=3D1))
	fbpfreestyle.textContent +=3D' #fbpsetbkilink{display:inherit !important}'=
;
 =20
  if(fbpoptsobj.colouredbackgsquares=3D=3D"undefined") {
	fbpoptsobj.colouredbackgsquares=3D0;
  }
  else if(fbpoptsobj.colouredbackgsquares) {
    fbpfreestyle.textContent +=3D' #feedx_sprouts_container table[cols=3D"8=
"],#feedx_sprouts_container table[cols=3D"9"],#feedx_sprouts_container tabl=
e[cols^=3D"1"],#timeline_composer_container table[cols^=3D"1"],#timeline_re=
act_composer_container table[cols=3D"8"],#PageComposerPagelet_ table[cols=
=3D"18"],#pagelet_group_composer table[cols=3D"18"]{display:none}';
  }
  // hide searchbox
  if(fbpoptsobj.hidesearchbox) {
    fbpfreestyle.textContent +=3D' #blueBarDOMInspector div[role=3D"search"=
], #searchBarClickRef {display:none}';
  }
  // hide padlock
  if(fbpoptsobj.hidepadlock) {
    fbpfreestyle.textContent +=3D' #navPrivacy, #blueBarDOMInspector a[data=
-testid=3D"privacy_lite_jewel_button"], /* Hide quick help icon in top nav =
bar */ #pagelet_bluebar a[data-tooltip-content=3D"Quick Help"] {display:non=
e}'; // #blueBarDOMInspector a[aria-label=3D"Privacy Shortcuts"],#blueBarDO=
MInspector a[data-tooltip-content=3D"Privacy Shortcuts"],
  }

  if(fbpoptsobj.hideaccountswitcher){
	fbpfreestyle.textContent +=3D' div#pagelet_bluebar a[data-tooltip-content=
=3D"Account Switcher"] {display: none !important}';
  }

  // hide newsfeed
  if(fbpoptsobj.newsfeed) {
    fbpfreestyle.textContent +=3D' body.newsfeed #stream_pagelet {opacity:0=
} #navItem_4748854339 {display:none} #stream_pagelet:after {content: "You h=
ave selected the Hide Newsfeed option in FB Purity"}' ;//#pinnedNav li.sele=
ctedItem {display:none} ';
	//fbpfreestyle.textContent +=3D' #stream_pagelet div[id^=3D"topnews_main_s=
tream_"] {opacity:0} div._4-u2.mvm._495i, #fbpurityinfowrapper {display:non=
e !important}'; // hiding the fbpurity bar caused other issues=20
  }
  // hide home link
  if(fbpoptsobj.homelink) {
    fbpfreestyle.textContent +=3D' #blueBarDOMInspector a[data-gt*=3D"home_=
chrome"] {display:none}';
  }
  // hide home link counter
  if(fbpoptsobj.homelinkcounter) {
    fbpfreestyle.textContent +=3D' #blueBarDOMInspector a[data-gt*=3D"home_=
chrome"] div {display:none}';
  }
  // hide left column counters
  if(fbpoptsobj.leftcolumncounters) {
    fbpfreestyle.textContent +=3D' span.uiSideNavCount, #sidebar_navigation=
_top a div &gt; div, #sideNav span.countValue, body.timelineLayout div[role=
=3D"article"] div._34mw, /* left column in groups */ div._2fvv span._51lp {=
display:none} {display: none !important}';
  }
  // hide the like page button
  if(fbpoptsobj.likepagebutton=3D=3D1) {
    fbpfreestyle.textContent +=3D' div.uiStreamShareLikePageBox  div.uiPage=
LikeButton, div.genericStreamStory a.PageLikeButton, div[data-dedupekey] sp=
an.PageLikeButton, div.shareFooter .shareLikeButton, #pagelet_litestand_sec=
tion a.PageLikeButton, div.shareRedesign label.PageLikeButton, div.userCont=
entWrapper button.PageLikeButton  {display:none} ';
  }
  // Custom Reactions
  var reactarr=3D["Like","Love","Haha","Wow","Sad","Angry"];
  //var reactarr2=3D["like","love","haha","wow","sorry","anger"];
  var reactarr2=3D["_3j7l","_3j7m","_3j7o","_3j7n","_3j7r","_3j7q"];
  var reactarr3=3D["0 -144px","0 -192px","0 -95px","0 -288px","0 -240px","0=
 0"]; // positions used for larger size
  var reactprefixlarge=3D"._2jry i._9-_";
  var reactprefixsmall=3D"i._9--";
  var reactSVGIndex=3D[1,2,4,3,7,8]; // more SVG SHiZ
  var reactimagearr;
  if ((typeof(fbpoptsobj.reactionsboost)!=3D"undefined") &amp;&amp; fbpopts=
obj.reactionsboost=3D=3D1) {
	  fbpfreestyle.textContent +=3D '._iuy ._39n {transform: scale(4, 4) trans=
late(0, -6px) !important}';
  }
  if((fbpoptsobj.reactionsimagepackfix=3D=3D1) &amp;&amp; (typeof(fbpoptsob=
j.reactionsimagepack)!=3D"undefined") &amp;&amp; fbpoptsobj.reactionsimagep=
ack!=3D'') {
	if(!fbpoptsobj.reactionsimagepack.match(/\,/)){
      //fbpfreestyle.textContent +=3D' i._iuz { background-image: url(' + f=
bpoptsobj.reactionsimagepack + ') !important;} i._2p7a { background-image: =
url(' + fbpoptsobj.reactionsimagepack + ') !important;background-size:99% !=
important} i._2p7a.like{ background-position: 0 -48px !important;} i._2p7a.=
anger{ background-position: 0 0 !important} i._2p7a.haha{ background-positi=
on: 0 -32px !important} i._2p7a.sorry{ background-position: 0 -80px; !impor=
tant} i._2p7a.love{ background-position: 0 -64px; !important} i._2p7a.wow{ =
background-position: 0 -98px; !important}';
      //fbpfreestyle.textContent +=3D' i._iuz { background-image: url(' + f=
bpoptsobj.reactionsimagepack + ') !important;} i._2p7a { background-image: =
url(' + fbpoptsobj.reactionsimagepack + ') !important;background-size:99% !=
important} i._2p7a._3j7l{ background-position: 0 -47px !important;} i._2p7a=
._3j7q{ background-position: 0 0 !important} i._2p7a._3j7o{ background-posi=
tion: 0 -31px !important} i._2p7a._3j7r{ background-position: 0 -79px; !imp=
ortant} i._2p7a._3j7m{ background-position: 0 -63px; !important} i._2p7a._3=
j7n{ background-position: 0 -94px; !important}';
	  // small sizes

	  // START DEAL WITH SVG SHIZ
	  fbpfreestyle.textContent +=3D' span._iuw svg {display:none} div._1ef0 ca=
nvas {visibility:hidden} div[aria-label=3D"Reactions"] canvas{visibility:hi=
dden;height:48px !important;width:48px !important}';
      fbpfreestyle.textContent +=3D' span._iuw&gt;div&gt;div&gt;div[style] =
{background-image:url(' + fbpoptsobj.reactionsimagepack + ')}';
	  // END DEAL WITH SVG SHIZ // ',' + reactprefixsmall.replace(/--$/,'-y') =
+  (fix for individual reaction icon, but they are 13x13 which screws up th=
e positioning)
      fbpfreestyle.textContent +=3D' ' + reactprefixsmall + ' { background-=
image: url(' + fbpoptsobj.reactionsimagepack + ') !important;background-siz=
e:99% !important} i._2p78._3j7l{ background-position: 0 -47px !important} i=
._2p78._3j7q{ background-position: 0 0 !important} i._2p78._3j7o{ backgroun=
d-position: 0 -31px !important} i._2p78._3j7r{ background-position: 0 -79px=
 !important} i._2p78._3j7m{ background-position: 0 -63px !important} i._2p7=
8._3j7n{ background-position: 0 -94px !important}';
	  // large (medium) sizes
	  for(i=3D0;i&lt;reactarr2.length;i++) {
	    fbpfreestyle.textContent +=3D ' ' + reactprefixlarge + '.' + reactarr2=
[i] + '{background-image: url(' + fbpoptsobj.reactionsimagepack + ') !impor=
tant; ' + 'background-position: ' + reactarr3[i] + '!important}' ; //backgr=
ound-size:auto !important
		// START Deal with new style SVG shiZ
		fbpfreestyle.textContent +=3D ' ' + 'span._iuw&gt;div[data-reaction=3D"' =
+ reactSVGIndex[i] + '"]&gt;div&gt;div[style] {background-position: ' + rea=
ctarr3[i] + '!important}';
		// END Deal with new style SVG shiZ
	  }
	  // fixing reactions on comments
	  // fix for like icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7l,i._19kl._3j7l {background-im=
age: url(' + fbpoptsobj.reactionsimagepack + ') !important; background-size=
: 99% !important; height:16px;width:16px}';
	  // fix for love icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7m,i._19kl._3j7m  {background-i=
mage: url(' + fbpoptsobj.reactionsimagepack + ') !important; background-siz=
e: 99% !important; height:16px;width:16px}';
	  // fix for haha icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7o,i._19kl._3j7o {background-im=
age: url(' + fbpoptsobj.reactionsimagepack + ') !important; background-size=
: 99% !important; height:16px;width:16px}';
	  // fix for wow icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7n,i._19kl._3j7n {background-im=
age: url(' + fbpoptsobj.reactionsimagepack + ') !important; background-size=
: 99% !important; height:16px;width:16px}';
	  // fix for sad icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7r,i._19kl._3j7r {background-im=
age: url(' + fbpoptsobj.reactionsimagepack + ') !important; background-size=
: 99% !important; height:16px;width:16px}';
	  // fix for angry icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7q,i._19kl._3j7q {background-im=
age: url(' + fbpoptsobj.reactionsimagepack + ') !important; background-size=
: 99% !important; height:16px;width:16px}';
	 =20
	  // fix for floating reactions on live video
	  fbpfreestyle.textContent +=3D'#photos_snowlift div.videoStageContainer .=
_2-am, div.userContentWrapper ._2-am, #photos_snowlift div.videoStageContai=
ner ._2-aq, div.userContentWrapper ._2-aq, #photos_snowlift div.videoStageC=
ontainer ._2-an,div.userContentWrapper ._2-an, #photos_snowlift div.videoSt=
ageContainer ._2-ao,div.userContentWrapper ._2-ao, #photos_snowlift div.vid=
eoStageContainer ._2-ap, div.userContentWrapper ._2-ap, #photos_snowlift di=
v.videoStageContainer ._2-ar,div.userContentWrapper ._2-ar{ background-imag=
e:url(' + fbpoptsobj.reactionsimagepack + ') !important}';
    }
    else {
	  reactimagearr=3Dfbpoptsobj.reactionsimagepack.split(",");
	  // START DEAL WITH SVG SHIZ
	  fbpfreestyle.textContent +=3D' span._iuw svg {display:none} div[aria-lab=
el=3D"Reactions"] canvas{visibility:hidden;height:48px !important;width:48p=
x !important}';
      fbpfreestyle.textContent +=3D' span._iuw&gt;div&gt;div&gt;div[style] =
{background-image:url(' + fbpoptsobj.reactionsimagepack + ')}';
	  // END DEAL WITH SVG SHIZ
	  for(i=3D0;i&lt;reactimagearr.length;i++){
		//fbpfreestyle.textContent +=3D' span[aria-label=3D"' + reactarr[i] + '"]=
 i._2p78 {background-image: url(' + reactimagearr[i] + ') !important;backgr=
ound-position:0 0 !important} ._2p78._9--.'+ reactarr2[i] +' {background-im=
age:url(' + reactimagearr[i] + ') !important;background-size:16px 16px !imp=
ortant;background-position:0 0 !important} ';
		fbpfreestyle.textContent +=3D' ' + reactprefixlarge + '.' + reactarr2[i] =
+ '._2p78 {background-image: url(' + reactimagearr[i] + ') !important;backg=
round-position:0 0 !important} ' + reactprefixsmall + '._2p78.' + reactarr2=
[i] +' {background-image:url(' + reactimagearr[i] + ') !important;backgroun=
d-size:16px 16px !important;background-position:0 0 !important} '; //;backg=
round-size:auto !important
		// START Deal with new style SVG shiZ
		fbpfreestyle.textContent +=3D ' ' + 'span._iuw&gt;div[data-reaction=3D"' =
+ reactSVGIndex[i] + '"]&gt;div&gt;div[style] {background-image: url(' + re=
actimagearr[i] + ') !important;background-position:0 0 !important}';
		// END Deal with new style SVG shiZ
	  }
	  fbpfreestyle.textContent +=3D' .x2 ._2p78 {background-size:inherit !impo=
rtant}'; // fix for retina
	=20
	  // fix reactions on comments
      // fix for like icon on comments	=20
	  fbpfreestyle.textContent +=3D' i._9-y._3j7l,i._19kl._3j7l {background-im=
age: url(' + reactimagearr[0] + ') !important; background-size: 99% !import=
ant; height:16px;width:16px;background-position:0 0 !important}';=20
	  // fix for love icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7m,i._19kl._3j7m {background-im=
age: url(' + reactimagearr[1] + ') !important; background-size: 99% !import=
ant; height:16px;width:16px;background-position:0 0 !important}';=20
	  // fix for haha icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7o,i._19kl._3j7o {background-im=
age: url(' + reactimagearr[2] + ') !important; background-size: 99% !import=
ant; height:16px;width:16px;background-position:0 0 !important}';=20
	  // fix for wow icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7n,i._19kl._3j7n {background-im=
age: url(' + reactimagearr[3] + ') !important; background-size: 99% !import=
ant; height:16px;width:16px;background-position:0 0 !important}';=20
	  // fix for sad icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7r,i._19kl._3j7r {background-im=
age: url(' + reactimagearr[4] + ') !important; background-size: 99% !import=
ant; height:16px;width:16px;background-position:0 0 !important}';=20
	  // fix for angry icon on comments
	  fbpfreestyle.textContent +=3D' i._9-y._3j7q,i._19kl._3j7q {background-im=
age: url(' + reactimagearr[5] + ') !important; background-size: 99% !import=
ant; height:16px;width:16px;background-position:0 0 !important}';=20
	 =20
    }
  } // end if reactions

  var lcoptsarr=3D"wholeleftcolumn,colouredbg,lcadvertmgr,lcconnect,lcallpa=
ges,lcpagesfeed,lclikepages,lcallapps,lcappcenter,lcevents,lcgamesfeed,lcpo=
kes,lcprofile,lcmusic,lcplaceseditor,lcallgroups,lccreategroup,lccreatefram=
e,lccreatepage,lcfindfriends,lcfindnewgroups,lcdeveloper,lcfundraisers,lcfr=
iends,lconthisday,lcbrowse,lcfbpnews,lcwelcome,lcweather,lcnotes,lcoculus,l=
ccreatorstudio,lclinks,lcoffers,lcmanagegroups,lcsaved,lcshops,lcmarketplac=
e,lcsuggested,lcsuggestedits,lccreateevent,lcphotos,lcsalegroups,lcpayments=
,lclivemap,lcdiscovergroups,lcyourposts,lcmoments,lcmovies,lcmessages,lcrec=
ommendations,lccreate,lcshortcuts,lcinsights,lcjobs,lctownhall,lcorderfood,=
lcsafetycheck,lcexplorefeed,lcwatch,lcrecentadactivity,lcmoves,lcgreetings,=
lcgamingvideos,lcbusinessdiscovery,lc2018election,wholerightcolumn,rcrecomm=
endedpages,rcrelatedgroups,rcpokes,rcbirthdays,rcfriendrequests,rcgamereque=
sts,rcyourpages,rclive,rcstories,rcwatchlist,rcrelatedvids,rctodaysgames,rc=
savedlinks,catphoto,dogphoto,babyphoto,childphoto,memephoto,selfiephoto,cou=
plephoto,foodphoto,smokingphoto,carphoto,customphotoblocklistfix,imagetagso=
nhover,chatquickcambutt,chataddfilesbutt,chatstartplanbutt,chatplaygamebutt=
,typingcomment,seemoreexplore,seemoreshortcuts,hidemesstopnav,hidecreatetop=
nav,hideaccountswitcher".split(','); // lcfbiphone,lcfbandroid,lcfundraiser=
screate,lcfundraisersfind,lcallinterests,lceditprofile,filterTrendingBox,se=
emoretrending,fixtrendinglinks,hideTrTopSto,hideTrPolCat,hideTrSciCat,hideT=
rSpoCat,hideTrEntCat,ASTtoptrends,ASTpolitics,ASTscience,ASTsports,ASTenter=
tainment,lctrendingnews
  for(var b=3D0;b&lt;lcoptsarr.length;b++)
    if (typeof fbpoptsobj[lcoptsarr[b]] =3D=3D "undefined")
      fbpoptsobj[lcoptsarr[b]]=3D0;

    // start left column options
	if(fbpoptsobj.wholeleftcolumn=3D=3D1)
      fbpfreestyle.textContent +=3D' #leftCol {display:none !important}';
	=09
	if(fbpoptsobj.colouredbg=3D=3D1) // neutralise coloured status updates
	  //fbpfreestyle.textContent+=3D' div.userContent span{font-size:inherit !=
important;font-weight:inherit!important;padding:inherit !important;color:in=
herit!important;background-color:inherit !important;text-align:inherit!impo=
rtant;padding-left: 6px !important} div.userContent div{background-image:in=
herit !important;background-color:inherit !important} div.userContent span.=
_5afx, div.userContent span._58cl, div.userContent span._58cm,div.userConte=
nt span._5mfr,div.userContent span.highlightNode {padding-left:initial !imp=
ortant}';
	  fbpfreestyle.textContent+=3D' div._5qxm span {font-size:inherit !importa=
nt;font-weight:inherit!important;padding:inherit !important;color:inherit!i=
mportant;background-color:inherit !important;text-align:inherit!important;p=
adding-left: 6px !important}' +
	  ' div._5qxm, div._5qxm div {background-image:inherit !important;backgrou=
nd-color:inherit !important; min-height:0px !important} ' +
	  ' div.userContent span._5afx, div.userContent span._58cl, div.userConten=
t span._58cm,div.userContent span._5mfr,div.userContent span.highlightNode =
{padding-left:initial !important} .fbpoptslabel  {color:black;font-weight:n=
ormal} ' +
	  // make font size for short statuses the same size as normal posts=20
      ' div._58jw { font-size: inherit !important}' +
	  // new code for people with new fb code
	  ' div._6rsm { min-height: auto !important; } div._6rsn { display: none !=
important } div._6rsp { display: none !important } div._6rsw { background-c=
olor: inherit !important; color: black !important; font-weight: normal !imp=
ortant; text-align: inherit !important; padding: 15px 0px !important} div._=
6rsn &gt; div._6rsp { background-size: auto !important; background-image: n=
one !important; display: none !important; height: auto !important; }';
	  //fbpfreestyle.textContent+=3D' div.userContent span,div.userContent +di=
v span{font-size:inherit !important;font-weight:inherit!important;padding:i=
nherit !important;color:inherit!important;background-color:inherit !importa=
nt;text-align:inherit!important;padding-left: 6px !important} div.userConte=
nt div,div.userContent + div div{background-image:inherit !important;backgr=
ound-color:inherit !important} div.userContent span._5afx,div.userContent +=
 div span._5afx, div.userContent span._58cl,div.userContent +div span._58cl=
, div.userContent span._58cm,div.userContent + div span._58cm,div.userConte=
nt span.highlightNode, div.userContent +span.highlightNode {padding-left:in=
itial !important}';

    if(fbpoptsobj.lcconnect=3D=3D1)
      fbpfreestyle.textContent +=3D' #connectNav {display:none !important}'=
;

    if(fbpoptsobj.lcallpages=3D=3D1)
      fbpfreestyle.textContent +=3D' #pagesNav, #sidenav a[href=3D"/bookmar=
ks/pages"],#navItem_2530096808 {display:none !important}';

    if(fbpoptsobj.lcallapps=3D=3D1)
      fbpfreestyle.textContent +=3D' #appsNav, #sidenav a[href=3D"/bookmark=
s/apps?ref=3Dbookmarks"] {display:none !important}';

    if(fbpoptsobj.lcallgroups=3D=3D1)
      fbpfreestyle.textContent +=3D' #groupsNav, #sidenav a[href^=3D"/group=
s/?category=3Dmembership"],#navItem_1434659290104689, #navItem_139518143156=
711 {display:none !important}';

    if(fbpoptsobj.lcfriends=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_1572366616371383 {display:non=
e !important}';

    if(fbpoptsobj.lcadvertmgr=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"4009155866=
38539"], #adsNav, #navItem_400915586638539, #createNav a[href^=3D"/campaign=
/landing.php"],#navItem_6802152230, #createNav a[ajaxify^=3D"/ads/"], #BLUE=
_BAR_ID_DO_NOT_USE li[data-gt $=3D\'menu_create_ads"}\'], #BLUE_BAR_ID_DO_N=
OT_USE li[data-gt $=3D\'menu_ad_on_fb"}\'],#BLUE_BAR_ID_DO_NOT_USE li[data-=
gt $=3D\'menu_ad_on_fb"}\']+li[role=3D"separator"]{display:none !important}=
'; //#BLUE_BAR_ID_DO_NOT_USE a[href^=3D"/campaign/landing.php"]

    if(fbpoptsobj.lcpagesfeed=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"1404728159=
72081"], #navItem_140472815972081, #pgstorieslink {display:none !important}=
';

//	if(fbpoptsobj.lcpagesandpublicfigures=3D=3D1)
//	  fbpfreestyle.textContent +=3D ' '; // removed because code is differen=
t for each user

    if(fbpoptsobj.lclikepages=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"3579372509=
42127"], #navFindFriends, #navItem_357937250942127 {display:none !important=
}';

    if(fbpoptsobj.lcappcenter=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"1403320092=
31"], #navItem_140332009231,/*games arcade*/ #navItem_1320332077993895, /* =
Flash */ #navItem_135139910261129 {display:none !important}';

    if(fbpoptsobj.lcevents=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2344061033=
"], #eventsNav, #navItem_2344061033, #sidenav a[href^=3D"/events/upcoming?r=
ef=3D"], div[id^=3D"PageEventsContainerPagelet_"]  {display:none !important=
}';

    if(fbpoptsobj.lceditprofile=3D=3D1)
	  fbpfreestyle.textContent +=3D ' #pagelet_welcome_box li.fbxWelcomeBoxSma=
llRow:nth-child(2) {display:none !important}';
 =20
    if(fbpoptsobj.lcgamesfeed=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2613697672=
93002"], #navItem_261369767293002 {display:none !important}';

    if(fbpoptsobj.lcpokes=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"1832172150=
62060"], #navItem_183217215062060 {display:none !important}';
 =20
    if(fbpoptsobj.lcprofile=3D=3D1)
      fbpfreestyle.textContent +=3D' #userNav {display:none !important}';

    if(fbpoptsobj.lcmusic=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"1199605147=
42544"], #navItem_119960514742544 {display:none !important}';

    if(fbpoptsobj.lcplaceseditor=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2191241681=
14356"], #navItem_219124168114356 {display:none !important}';

	if(fbpoptsobj.lcphotos=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2305272732"],=
 #navItem_2305272732, #pstorieslink {display:none !important}';

    if(fbpoptsobj.lccreategroup=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2302591003=
22928"], #navItem_230259100322928, #createNav a[ajaxify^=3D"/ajax/groups/cr=
eate_get.php"], #BLUE_BAR_ID_DO_NOT_USE a[ajaxify^=3D"/ajax/groups/create_g=
et"] {display:none !important}';
 =20
    if(fbpoptsobj.lccreateframe=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_336549256737756 {display:none=
}';

	if(fbpoptsobj.lccreateevent=3D=3D1)
	  fbpfreestyle.textContent +=3D' #eventsNav div[data-itemid=3D"70414851297=
7427"], #navItem_704148512977427,  #createNav a[ajaxify^=3D"/events/dialog/=
create/"] {display:none !important}';

    if(fbpoptsobj.lccreatepage=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"1886191446=
02540"], #navItem_188619144602540, #createNav a[href^=3D"/pages/create/"], =
#BLUE_BAR_ID_DO_NOT_USE a[href^=3D"https://www.facebook.com/pages/create/"]=
 {display:none !important}';

    if(fbpoptsobj.lcfindfriends=3D=3D1) // now titled discover friends
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2356318349=
"], #findFriendsNav, #navItem_2356318349,#navItem_645191315628772 {display:=
none !important}';

	if(fbpoptsobj.lcfindnewgroups=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"6378035163017=
38"], #navItem_637803516301738, #navItem_983686418327131, #BLUE_BAR_ID_DO_N=
OT_USE a[href=3D"/groups/?category=3Dinvited&amp;ref=3Dgroup_browse"] {disp=
lay:none !important}'

    if(fbpoptsobj.lcdeveloper=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2345053339=
"], #developerNav, #navItem_2345053339, #sideNav a[href=3D"https://develope=
rs.facebook.com/apps/724415894355608"]  {display:none !important}';

    if(fbpoptsobj.lcfundraisers=3D=3D1)
      fbpfreestyle.textContent +=3D' #fundraisersNav,#sideNav li[data-nav-i=
tem-id=3D"1728089634133276"],#sideNav li[data-nav-item-id=3D"24511359253993=
7"],#navItem_1728089634133276,#navItem_245113592539937,#navItem_19335665100=
2223, #createNav a[ajaxify^=3D"/fundraiser/person_to_charity/create_dialog/=
"],#BLUE_BAR_ID_DO_NOT_USE a[href^=3D"/fundraiser/"] {display:none !importa=
nt}';=09
    /*
    if(fbpoptsobj.lcfundraiserscreate=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav li[data-nav-item-id=3D"172808=
9634133276"] {display:none}';
    if(fbpoptsobj.lcfundraisersfind=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav li[data-nav-item-id=3D"245113=
592539937"] {display:none}';
    */
	if(fbpoptsobj.lconthisday=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2639085670737=
88"], #navItem_303257506544370 {display:none !important}';

	if(fbpoptsobj.lcbrowse=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"3009091200103=
35"], #navItem_300909120010335 {display:none !important}';
    /*
  	if(fbpoptsobj.lcfbiphone=3D=3D1)
	  fbpfreestyle.textContent +=3D' div[data-itemid=3D"6628568379"], #navItem=
_6628568379 {display:none}';

  	if(fbpoptsobj.lcfbandroid=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"350685531728"=
], #navItem_350685531728 {display:none}';
    */
    if(fbpoptsobj.lcfbpnews=3D=3D1)
	  //fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"40850219755=
8"], #navItem_page_408502197558 {display:none}';
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"' + FBPFanPag=
eID + '"], #navItem_page_' + FBPFanPageID + ' {display:none}';

	if(fbpoptsobj.lcweather=3D=3D1)
	  fbpfreestyle.textContent +=3D' #navItem_302677536798470 {display:none !i=
mportant}';
 =20
    if(fbpoptsobj.lcwelcome=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"1562039611260=
22"], #navItem_156203961126022 {display:none !important}';

	if(fbpoptsobj.lcnotes=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2347471856"],=
 #navItem_2347471856 {display:none !important}';

  	if(fbpoptsobj.lcoculus=3D=3D1)
	  fbpfreestyle.textContent +=3D' #navItem_1517832211847102 {display:none !=
important}';
 =20
    if(fbpoptsobj.lccreatorstudio=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_2007914219485853 {display:non=
e !important}'; =20
 =20
    /*if(fbpoptsobj.lctrendingnews=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_343553122467255 {display:none=
 !important}';
    */
=09
	if(fbpoptsobj.lclinks=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2309869772"],=
 #navItem_2309869772 {display:none !important}';

	if(fbpoptsobj.lcoffers=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"5267327940162=
79"], #navItem_526732794016279 {display:none !important}';

 	if(fbpoptsobj.lcmanagegroups=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"1453691111529=
322"], #navItem_1453691111529322, #BLUE_BAR_ID_DO_NOT_USE li[data-gt $=3D\'=
menu_manage_group"}\'],#BLUE_BAR_ID_DO_NOT_USE li[data-gt $=3D\'menu_manage=
_group"}\']+li[role=3D"separator"]  {display:none !important}';

	if(fbpoptsobj.lcsaved=3D=3D1)
	  fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"5862544447587=
76"], #navItem_586254444758776 {display:none !important}';

    if(fbpoptsobj.lcshops=3D=3D1)
	  fbpfreestyle.textContent +=3D' #navItem_181728832201978 {display:none !i=
mportant}';

    if(fbpoptsobj.lcmarketplace=3D=3D1)
	  fbpfreestyle.textContent +=3D' #navItem_1606854132932955, #pagelet_marke=
tplace_recently_viewed_rhc, #pagelet_marketplace_recently_viewed_candidate_=
rhc, #pagelet_marketplace_rental_rhc, #pagelet_group_marketplace_rental_rhc=
, #pagelet_marketplace_new_user_vehicle_rhc, #pagelet_marketplace_bsg_recen=
tly_viewed_rhc, #pagelet_marketplace_new_user_top_picks_rhc {display:none !=
important}';
 =20
	if(fbpoptsobj.lcsuggested=3D=3D1)
	  fbpfreestyle.textContent +=3D ' #suggestedNav {display:none !important}'=
;

  	if(fbpoptsobj.lcsuggestedits=3D=3D1)
	  fbpfreestyle.textContent +=3D ' #sideNav div[data-itemid=3D"219124168114=
356"], #navItem_219124168114356 {display:none !important}';
 =20
    if(fbpoptsobj.lcsalegroups=3D=3D1)
	  fbpfreestyle.textContent +=3D ' #sideNav div[data-itemid=3D"143325207697=
4635"], #navItem_1433252076974635 {display:none !important}';

    if(fbpoptsobj.lcbusinessdiscovery=3D=3D1)
	  fbpfreestyle.textContent +=3D ' #navItem_151408195724475 {display:none !=
important}';

    if(fbpoptsobj.lcpayments=3D=3D1)
      fbpfreestyle.textContent +=3D' #paymentsNav, #navItem_969105076459966=
 {display:none !important}';=20

    if(fbpoptsobj.lclivemap=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_1031093773624602 {display:non=
e !important}';=20
 =20
    if(fbpoptsobj.lcdiscovergroups=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_1728807357362356 {display:non=
e !important}';
 =20
    if(fbpoptsobj.lcyourposts=3D=3D1)
      fbpfreestyle.textContent +=3D' #your_posts_bookmark, #pagelet_welcome=
_box a[href*=3D"/allactivity"], #navItem_1567751916853788 {display:none !im=
portant}';

    if(fbpoptsobj.lcmoments=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2851623082=
71788"],#navItem_285162308271788 {display:none !important}';

    if(fbpoptsobj.lcmovies=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_1291706757509010 {display:non=
e !important}';
 =20
    if(fbpoptsobj.lcmessages=3D=3D1)
      fbpfreestyle.textContent +=3D' #sideNav div[data-itemid=3D"2179745748=
79787"],#navItem_217974574879787, #navItem_421935831521247 {display:none !i=
mportant}';
 =20
    if(fbpoptsobj.lcrecommendations=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_577076605805053 {display:none=
 !important}';

    if(fbpoptsobj.lcsafetycheck=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_765518473459969 {display:none=
 !important}';
=20
   if(fbpoptsobj.lcexplorefeed=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_605397933004645, #estorieslin=
k {display:none !important}';

	if(fbpoptsobj.lcwatch=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_2392950137 {display:none !imp=
ortant}';

	if(fbpoptsobj.lcrecentadactivity=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_280033845760645 {display:none=
 !important}';

    if(fbpoptsobj.lc2018election=3D=3D1)
	  fbpfreestyle.textContent+=3D ' #navItem_300526153719870 {display:none !i=
mportant}';
 =20
    if(fbpoptsobj.lccreate=3D=3D1){
      fbpfreestyle.textContent +=3D' #createNav, ' +
    //create page
    '#sideNav div[data-itemid=3D"188619144602540"], #navItem_18861914460254=
0, #createNav a[href^=3D"/pages/create/"],' +
    // create advert
    '#sideNav div[data-itemid=3D"400915586638539"], #adsNav, #navItem_40091=
5586638539, #createNav a[href^=3D"/campaign/landing.php"],' +
    // create group
    '#sideNav div[data-itemid=3D"230259100322928"], #navItem_23025910032292=
8, #createNav a[ajaxify^=3D"/ajax/groups/create_get.php"],' +
    // create event
    '#eventsNav div[data-itemid=3D"704148512977427"], #navItem_704148512977=
427, #createNav a[ajaxify^=3D"/events/dialog/create/"], ' +
	// create a frame
	'#navItem_336549256737756 {display:none !important}';
	}
=09
	if(fbpoptsobj.lcshortcuts=3D=3D1)
	  fbpfreestyle.textContent +=3D' #pinnedNav {display:none}';
 =20
    if(fbpoptsobj.lcinsights=3D=3D1)
	  fbpfreestyle.textContent +=3D' #navItem_188833664616804 {display:none}';
 =20
    if(fbpoptsobj.lcjobs=3D=3D1)
	  fbpfreestyle.textContent +=3D' #navItem_977114232337111 {display:none}';
 =20
    if(fbpoptsobj.lctownhall=3D=3D1)
	  fbpfreestyle.textContent +=3D' #navItem_176339666193022 {display:none}';

    if(fbpoptsobj.lcorderfood=3D=3D1)
	  fbpfreestyle.textContent +=3D' #navItem_766859123481602 {display:none}';

    if(fbpoptsobj.lcmoves=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_192507801105969 {display:none=
 !important}';
=20
    if(fbpoptsobj.lcgreetings=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_1157621394365930 {display: no=
ne !important}';

    if(fbpoptsobj.lcgamingvideos=3D=3D1)
      fbpfreestyle.textContent +=3D' #navItem_285571681929755 {display:none=
 !important}';

    // start hide right column options
	if(fbpoptsobj.wholerightcolumn=3D=3D1){
	  //if(document.querySelector('._1qkq')) // if the newsfeed has the weird =
layout
		fbpfreestyle.textContent +=3D' #rightCol {visibility:hidden !important}';
      //else=09
      //  fbpfreestyle.textContent +=3D' #rightCol {display:none !important=
}';
	}
=09
	if(fbpoptsobj.rcrecommendedpages=3D=3D1) // "recommended pages" and "PEOPL=
E ALSO LIKE"
      fbpfreestyle.textContent +=3D' #pages_reminders_link, div[id^=3D"Page=
RelatedPagesSecondaryPagelet_"] {display:none !important}'

    if(fbpoptsobj.rcbirthdays=3D=3D1)
      fbpfreestyle.textContent +=3D' #birthday_reminders_link, #pagelet_bir=
thday_this_week, #events_dashboard_upcoming_birthdays, #pagelet_reminders a=
[ajaxify=3D"/birthday/reminder/dialog/"],div[data-testid=3D"chat_sidebar"] =
i {display:none}'; // , #fbNotificationsFlyout li[data-gt*=3D"\"notif_type\=
":\"birthday_reminder\""] // birthday notifications flyout. not sure if it =
works or not due to escaped quotes. needs testing

	if(fbpoptsobj.rcgamerequests=3D=3D1)
      fbpfreestyle.textContent +=3D' #pagelet_canvas_nav_content, #pagelet_=
games_rhc, #pagelet_reminders div[id^=3D"fbReminderAppReqStory_"], div.fbCh=
atOrderedList i.sx_f985f5, #fbNotificationsFlyout li[data-gt*=3D\'notif_typ=
e":"app_request"\'],div.groups_rhc div._3zd5,#pagelet_instant_games_rhc, #p=
agelet_gaming_destination_rhc, #pagelet_games_unified_rhc, div.uiContextual=
Layer a[href^=3D"/instantgames/play/"][data-gt*=3D"chat_user_hovercard"] {d=
isplay:none !important}'; // #custom_reminders_link  (removed this because =
it was hiding event invitations)

    if(fbpoptsobj.rcfriendrequests=3D=3D1)
      fbpfreestyle.textContent +=3D' #friends_reminders_link {display:none =
!important}';

    if(fbpoptsobj.rcpokes=3D=3D1)
      fbpfreestyle.textContent +=3D' #poke_reminders_link, #pagelet_pokes {=
display:none !important}';

    if(fbpoptsobj.rcrelatedgroups=3D=3D1)
      fbpfreestyle.textContent +=3D' #pagelet_ego_contextual_group, div.gro=
upRecommendationsList, #GroupsRHCSuggestionSection {display:none !important=
}';

    if(fbpoptsobj.rctodaysgames=3D=3D1)
      fbpfreestyle.textContent +=3D' #live_games_rhc {display:none !importa=
nt}';
 =20
	if(fbpoptsobj.widescreenfeed=3D=3D1)
	  fbpfreestyle.textContent +=3D' html ._5vb_._5vb_.hasLeftCol .hasRightCol=
 div#contentArea { width: 800px} #contentArea {position:absolute;top:5px !i=
mportant} #rightCol {position:relative;left:330px} ._5v3q ._4-eo,._6m5,._6n=
_,._5vb_ ._5aqh, ._2a2q, div._5mly._45oh,uiScaledImageContainer _5ind {marg=
in-left:auto; margin-right:auto}';

	if(fbpoptsobj.rcyourpages=3D=3D1)
      fbpfreestyle.textContent +=3D' #pagelet_advertiser_panel, div._4-u2.m=
bm._5v6e,li._12um._42fz, div[data-testid=3D"chat_sidebar"] div._4kqp._55ob,=
 #homepage_panel_pagelet {display:none}';

    if(fbpoptsobj.rclive=3D=3D1)
	  fbpfreestyle.textContent +=3D' #pagelet_live_videos_v2 {display:none}';
 =20
    // watchlist box in right column
    if(fbpoptsobj.rcwatchlist=3D=3D1) {
      fbpfreestyle.textContent +=3D' #pagelet_video_home_watch_list_rhc, #p=
agelet_on_tv_rhc, #pagelet_video_home_friends_watching_rhc, #pagelet_video_=
home_continue_watching_with_fallback_rhc, #pagelet_video_home_promotion_rhc=
 {display:none !important}';
    }
 =20
    // stories box in right column (and your story option beneath status co=
mposer)
    if(fbpoptsobj.rcstories=3D=3D1) {
      fbpfreestyle.textContent +=3D' #fb_stories_card_root,#stories_pagelet=
_rhc, #pagelet_composer li._1pek._vli, #timeline_composer_container li._1pe=
k._vli, #timeline_composer_container ._1pek:nth-child(2), #PageComposerPage=
let_ ._1pek:nth-child(2), #feedx_sprouts_container ._1pek:nth-child(2){disp=
lay:none !important}';
    }
=09
	// related section (on video pages) in right column
    if(fbpoptsobj.rcrelatedvids=3D=3D1) {
      fbpfreestyle.textContent +=3D' #related_pagelet {display:none !import=
ant}';
    }

    if(fbpoptsobj.rcsavedlinks=3D=3D1){ // this code may be redundant now, =
and can probably be got rid of.
	  fbpfreestyle.textContent +=3D' div[data-ego-service=3D"saved_links_colle=
ction_reminder"] {display:none}';
    }
=09
    if((typeof(fbpoptsobj.groupconvos)!=3D'undefined') &amp;&amp; fbpoptsob=
j.groupconvos=3D=3D1) {
	  fbpfreestyle.textContent +=3D ' div.moreOnlineFriends[data-reactid$=3D"$=
group_separator"]{display:none} li._42fz[data-reactid*=3D"$group_threads"] =
{display:none}';
	}
	else {
	  fbpfreestyle.textContent +=3D ' div.moreOnlineFriends[data-reactid$=3D"$=
group_separator"]{display:block !important} li._42fz[data-reactid*=3Dgroup_=
threads]{display:block !important}';
	}
	/*
	if(fbpoptsobj.newstickertextfilter) { //show the more stories button, othe=
rwise it gets frozen
	  fbpfreestyle.textContent +=3D ' div.tickerMorePager&gt;div.uiMorePager {=
display:block !important}';
	}
	*/
=09
	// hide trending topics box category tabs
	/*
	if(fbpoptsobj.hideTrTopSto) {
	  fbpfreestyle.textContent +=3D ' #pagelet_trending_tags_and_topics li[rol=
e=3D\"presentation\"]:nth-of-type(1){display:none}';
	}
	if(fbpoptsobj.hideTrPolCat) {
	  fbpfreestyle.textContent +=3D ' #pagelet_trending_tags_and_topics li[rol=
e=3D\"presentation\"]:nth-of-type(2),#pagelet_trending_tags_and_topics li[d=
ata-categories$=3D",4]"],#pagelet_trending_tags_and_topics li[data-categori=
es=3D"[4]"],#pagelet_trending_tags_and_topics li[data-categories^=3D"[4,"],=
#pagelet_trending_tags_and_topics li[data-categories*=3D",4,"]{display:none=
}';
	}
	if(fbpoptsobj.hideTrSciCat) {
	  fbpfreestyle.textContent +=3D ' #pagelet_trending_tags_and_topics li[rol=
e=3D\"presentation\"]:nth-of-type(3), #pagelet_trending_tags_and_topics li[=
data-categories$=3D",5]"],#pagelet_trending_tags_and_topics li[data-categor=
ies=3D"[5]"],#pagelet_trending_tags_and_topics li[data-categories^=3D"[5,"]=
,#pagelet_trending_tags_and_topics li[data-categories*=3D",5,"]{display:non=
e}';
	}
	if(fbpoptsobj.hideTrSpoCat) {
	  fbpfreestyle.textContent +=3D ' #pagelet_trending_tags_and_topics li[rol=
e=3D\"presentation\"]:nth-of-type(4),#pagelet_trending_tags_and_topics li[d=
ata-categories$=3D",2]"],#pagelet_trending_tags_and_topics li[data-categori=
es=3D"[2]"],#pagelet_trending_tags_and_topics li[data-categories^=3D"[2,"],=
#pagelet_trending_tags_and_topics li[data-categories*=3D",2,"] {display:non=
e}';
	}
	if(fbpoptsobj.hideTrEntCat) {
	  fbpfreestyle.textContent +=3D ' #pagelet_trending_tags_and_topics li[rol=
e=3D\"presentation\"]:nth-of-type(5),#pagelet_trending_tags_and_topics li[d=
ata-categories$=3D",3]"],#pagelet_trending_tags_and_topics li[data-categori=
es=3D"[3]"],#pagelet_trending_tags_and_topics li[data-categories^=3D"[3,"],=
#pagelet_trending_tags_and_topics li[data-categories*=3D",3,"],#pagelet_tre=
nding_tags_and_topics li[data-categories$=3D",11]"],#pagelet_trending_tags_=
and_topics li[data-categories=3D"[11]"],#pagelet_trending_tags_and_topics l=
i[data-categories^=3D"[11,"],#pagelet_trending_tags_and_topics li[data-cate=
gories*=3D",11,"]{display:none}';
	}
    */
=09
    // hide useless bottom right footer + ads on login + logout screen + us=
eless links in top nav bar
    fbpfreestyle.textContent +=3D 'div.fbIndexFeaturedRegistration &gt; div=
.lfloat, .-cx-PRIVATE-fbAdUnit__root, #SetAsHomepage_Callout, .gradientCont=
ent &gt; div[data-ad^=3D"{"], #findFriendsNav, #navFindFriends, div[data-ad=
] {display:none !important} #pagelet_rhc_footer {display:none} #logout_form=
2:hover, #FBPBUTT:hover {background-color:rgba(0,0,0,0.1)}';

    // hide contact importer at bottom of feed
    fbpfreestyle.textContent +=3D ' .contact_importer_widget {display:none}=
 #ci_compact_right {display:none}';

    // add red border to publish permissions request and make light grey bl=
urb black and bold
    fbpfreestyle.textContent +=3D ' .permissionsPublishActionsBadge {border=
:4px solid red} .gdpBlurb {color:black !important ; font-weight:bold !impor=
tant} .tosPane &gt; .sectionContent, .tosPane .legalese, .tosPane .sectionH=
eader {color:black !important} .tosPane .mbm {color:black; border: 4px red =
solid}'; // .fcb &gt; div,

    // add open and close list styles
    fbpfreestyle.textContent +=3D ' span.fbpopenlist:before {content:"=E2=
=96=BC "}  span.fbpclosedlist:before {content:"=E2=96=BA "}';

	// fix text overflow on link descriptions
	fbpfreestyle.textContent +=3D' ._5qqr ._6m6, ._5qqr ._6m7 {white-space: no=
rmal}';
=09
	// set background colour for fbp menu item
	fbpfreestyle.textContent +=3D' #trendingOptsButt:hover, #FBPOptionsMenuLin=
kContainer:hover,#FBPOptionsMenuLinkContainer *:hover{background-color:#426=
7b2;color:white}';
=09
	// fix status composer box
	fbpfreestyle.textContent +=3D' #contentArea div._3u15 {display:none}'; // =
was causing status box to hide behind posts for some people: #pagelet_compo=
ser div._3u14 div._3u16, #timeline_composer_container div._3u14 div._3u16 {=
z-index: initial}=20
=09
	// hide find friends link in top navbar
	fbpfreestyle.textContent +=3D' #blueBarDOMInspector a._5yf._2-do[href*=3D"=
?sk=3Dff"], #blueBarDOMInspector a._5yf._2-do[href*=3D"find-friends/browser=
"] {display:none}';
=09
	// change hover colour of X (fbp's hide post link)
	fbpfreestyle.textContent+=3D' div.userContentWrapper a.hidepostlink:hover,=
a.hidelink:hover {color:black !important}';
=09
	// hide the 'New' and 'Earlier' Titles in notifications
	if(fbpoptsobj.chrononotifications)
	  fbpfreestyle.textContent+=3D' #fbNotificationsFlyout div._fyy {display:n=
one}';
=09
	//fix inputs on trending options=20
	fbpfreestyle.textContent+=3D' #toptsdiv input[type=3D"radio"],#toptsdiv in=
put[type=3D"checkbox"] {vertical-align: top}';
=09
	// fix selected text colour in messenger (for chrome)
	fbpfreestyle.textContent+=3D' ::selection { background: rgb(51,143,255) !i=
mportant;color:white } '; //, ::-moz-selection

///////////////
/// END OPTS=20
///////////////        =20

refreshwhitelist();

//unsafeWindow.console.log("etf=3D " + extraTextFilter);

var tmptextfilter=3D'';
tmptextfilter=3Dfbpoptsobj.customtextfilter;
if (tmptextfilter)=20
  tmptextfilter +=3D ',' + extraTextFilter; // add emergency extra text fil=
ter
else=20
  tmptextfilter =3D extraTextFilter;

if( tmptextfilter.length ) {
  tmptextfilter=3Dtmptextfilter.replace(/,,/g,','); // remove blanks (if an=
y)
  tmptextfilter=3Dtmptextfilter.replace(/,+$|^,+/g,'');  // remove trailing=
 or leading commas
  cleancustomtextfilter=3Dfbpescaperegex(tmptextfilter); // escape regex sp=
ecial chars (brackets)

  if(debug)
    console.log("textfilter string=3D " + cleancustomtextfilter);

  try {
    textfilterRX =3D new RegExp(cleancustomtextfilter.replace(/,/g,'|').rep=
lace(/&amp;#44;/g,','),"gi"); // swap commas with pipes, change comma place=
holders with actual commas + generate regex
  }
  catch (e)  {
    window.alert('F.B. Purity: Error building Custom Text Filter RegEx: ' +=
  fbpoptsobj.customtextfilter + "\n\nHave you pasted CSS code into the Text=
 filter by mistake? If yes, go to the FBP options sceen, remove it and put =
it into the CSS Box instead.")
	textfilterRX=3Dnew RegExp("fbpurity1234567890xyz"); // set a dummy regex, =
so firefox browser doesnt freeze, and user can go and reset the fbp options
  }
}

//unsafeWindow.console.log('htf=3D' + headerTextFilter);

headerTextFilter=3DheaderTextFilter.replace(/^,/,'');  // remove leading co=
mma (if any)

if( headerTextFilter &amp;&amp; headerTextFilter.length ) {
  try {
    headertextfilterRX =3D new RegExp(headerTextFilter.replace(/,/g,'|'),"g=
i");
  }
  catch (e)  {
    window.alert('F.B. Purity: regex error building header text filter : ' =
+  headerTextFilter);
    headertextfilterRX=3Dnull;
  }
}

//unsafeWindow.console.log(fbpoptsobj.customtextfilter);

if(fbpoptsobj.customphotoblocklistfix &amp;&amp; fbpoptsobj.customphotobloc=
klist.length){
  photosubjectfilterlist+=3Dfbpoptsobj.customphotoblocklist.replace(',','|'=
);
}
if(fbpoptsobj.catphoto)
  photosubjectfilterlist+=3D"|\\bcat\\b|\\bcats\\b";
if(fbpoptsobj.dogphoto)
  photosubjectfilterlist+=3D"|\\bdog\\b|\\bdogs\\b";
if(fbpoptsobj.babyphoto)
  photosubjectfilterlist+=3D"|\\bbaby\\b|\\bbabies\\b";
if(fbpoptsobj.childphoto)
  photosubjectfilterlist+=3D"|\\bchild\\b|\\bchildren\\b";
if(fbpoptsobj.memephoto)
  photosubjectfilterlist+=3D"|\\bmeme\\b|\\btext\\b";
if(fbpoptsobj.selfiephoto)
  photosubjectfilterlist+=3D"|\\bselfie\\b";
if(fbpoptsobj.couplephoto)
  photosubjectfilterlist+=3D"|\\b2 people\\b.*\\bpeople smiling\\b";
if(fbpoptsobj.foodphoto)
  photosubjectfilterlist+=3D"|\\bfood\\b";
if(fbpoptsobj.smokingphoto)
  photosubjectfilterlist+=3D"|\\bsmoking\\b";
if(fbpoptsobj.carphoto)
  photosubjectfilterlist+=3D"|\\bcar\\b";
if(photosubjectfilterlist.length) {
  //console.log(photosubjectfilterlist);
  photosubjectfilterlist=3Dphotosubjectfilterlist.replace(/^\|/,'');
  photosubjectfilterlistRX =3D new RegExp(photosubjectfilterlist);
}

  fbpboxstyles=3D'';

  // hide suggestions box if option has been set
  if (fbpoptsobj.suggestionsbox) {
    fbpboxstyles +=3D' #ego_pane {display:none} #netego_organic {display:no=
ne} #pagelet_tips_box {display:none}';
  }
  // hide Get Connected (was: connect with friends) box if option has been =
set
  if (fbpoptsobj.connectbox) {
    fbpboxstyles +=3D' #pagelet_netego_lower {display:none} #pagelet_connec=
tbox {display:none}';
  }

  if (fbpoptsobj.betabox) {
    fbpboxstyles +=3D' #pagelet_betabox {display:none}';
  }

  if (fbpoptsobj.pokebox) {
    fbpboxstyles +=3D' #pagelet_netego_pokes, #pagelet_pokes,  #navItem_app=
_183217215062060 {display:none}';
  }

  /*
  if (fbpoptsobj.happeningnowbar) {
    fbpboxstyles +=3D' .ticker_stream, #pagelet_ticker, #pagelet_rhc_ticker=
 {display:none}';
  }
  */

  if(fbpoptsobj.newstoriesbutt) { // new stories popup button
	fbpboxstyles +=3D' ._2f6b { display:none !important}';
  }

  if(fbpoptsobj.typingcomment) {
	fbpboxstyles +=3D' div._j-l {display:none}';
  }

  if (fbpoptsobj.questionsbox) { // I think this option is no longer needed=
, and can be deleted...
    fbpboxstyles +=3D' #pagelet_netego_questions, #pagelet_questionsbox {di=
splay:none}';
  }

  if (fbpoptsobj.eventsbox) {
    fbpboxstyles +=3D' #event_reminders_link,#event_related_events,#pagelet=
_suggested_events,#celebration_reminders_link,#pagelet_reminders a[href^=3D=
"/events/"] {display:none}'; // hide left column events too #navItem_app_23=
44061033 {display:none} just hide create event link #pagelet_reminders [aja=
xify=3D"/ajax/plans/create/dialog.php"] * { display: none !important;}
  }

  if (fbpoptsobj.requestsbox) {
    fbpboxstyles +=3D' #pagelet_netego_requests {display:none}';
  }

  if (fbpoptsobj.sponsoredbox) {
	fbpboxstyles +=3D' body.pagesTimelineLayout div._5lmx,div._5j5u,div[data-a=
dblock-hash],div.megaphone_location_pages_feed, #pagelet_canvas_storybox, #=
pagelet_canvas_nav_content, .applifier, #side_ad_frame, .-cx-PRIVATE-sugges=
tionOnLiking__body, .canvasRecommended, li.ownsection, li[aria-label=3D"Spo=
nsored"], #pagelet_adbox, #pagelet_search_ads2, #adcolumn_advertise, #sspon=
sor, #adcolumn_more_ads, #pagelet_friendship_netego_ads, #pagelet_ego_pane,=
 .fbPhotosSideColumn, #pagelete_ego_pane_home_ads, #pagelet_ad_page_upsell,=
 #fbPhotoSnowboxAdsBottom, .fbPhotoSnowboxAdsSponsored, .fbTimelineSideAds,=
 #pagelet_ego_pane_m, #pagelet_organic_ego_pane, #pagelet_ego_pane_w, #page=
let_ads_when_no_friend_list_suggestion, #pagelet_side_ads, #fbPhotoSnowlift=
AdsSide, #MessagingNetegoSidebar, .-cx-PRIVATE-fbTimelineStyleAds__vertical=
, .-cx-PRIVATE-fbTimelineStyleAds__root, .-cx-PRIVATE-snowliftAds__root, ._=
24q, .rhcFooter, div[data-ad^=3D"{"],.-cx-PRIVATE-suggestionOnSourceLiking_=
_body, #endOfFeedPymlContainer, div[data-ad], #fbRequestsPYMLContainer, div=
._5t-6, div._2bex, ._4-u2._la, ._54bx._54bz, div[id^=3D"PageAdsPagelet_"], =
#rightCol div._29vg._43mf, article[data-ft*=3D\'"ei"\'], #headerArea div._f=
bGamesDesktopAppInstaller__banner, div._1wcc,div[data-reactroot]&gt;div._s1=
5, div.Ad,div.advert,div.AdBox, #pagelet_video_home_suggested_for_you_rhc, =
#pagelet_marketplace_rental_rhc, #pagelet_group_marketplace_rental_rhc, #pa=
gelet_marketplace_recently_viewed_candidate_rhc, #pagelet_marketplace_recen=
tly_viewed_rhc, #pagelet_marketplace_new_user_vehicle_rhc, #pagelet_marketp=
lace_bsg_recently_viewed_rhc,#pagelet_video_home_promotion_rhc {display:non=
e !important} #sidebar_ads, #pagelet_ads, #pagelet_netego_ads, .UIStandardF=
rame_SidebarAds, #gb_muffin_area, .adsContainer, .fbPhotoAdsCol {visibility=
:hidden !important} '; //#pagelet_group_mall div[id^=3D"mall_post_"][id*=3D=
";"]
	//commented out because it was causing the privacy selector on the status =
update box to stay visible permanently
	//#stream_pagelet div.uiContextualLayerPositioner.uiLayer[data-ownerid]:no=
t("[data-testid=3D\"undefined\"]"){display:block !important} #stream_pagele=
t div[data-ownerid],#stream_pagelet div[data-ownerid]&gt;div.mvm.clearfix, =
#stream_pagelet div[data-ownerid*=3D"jsonp"],=20
  }
  else  {
    fbpboxstyles +=3D' #contentCol div[data-ad] {display:block !important}'=
; //fixes the fact login ads are being hidden when logged out so we need to=
 override when logged in
  }

  /*
  if (fbpoptsobj.filterappmessages) { // hide app and game messages in the =
ticker.
	fbpboxstyles +=3D' div.fbFeedTickerStory[data-app] {display:none} ';
	// loop through app whitelist, and make exceptions.
	var tempappwhitelist=3D'';
	for (var app in arrwhitelist2){
	  tempappwhitelist +=3D' div.fbFeedTickerStory[data-app=3D"' + app + '"],'=
;
	}
	if(tempappwhitelist.length)
	  fbpboxstyles +=3D tempappwhitelist.replace(/,$/,'')+ ' {display:block !i=
mportant}';
    tempappwhitelist=3Dapp=3Dnull;
  }
  */

  if (fbpoptsobj.tlgamesapps) { // hide app and game messages on timeline p=
ages
	fbpboxstyles +=3D' body.timelineLayout #timeline_tab_content div[data-gt*=
=3D\'"appid":\'] {display:none}';
	// make sure apps/games show up on current user's timeline page...
	fbpboxstyles +=3D' body.timelineLayout #pagelet_timeline_main_column[data-=
gt^=3D\'{"profile_owner":"' + currentuserid + '"\'] #timeline_tab_content d=
iv[data-gt*=3D\'"appid":\'] {display:block !important}'

	// loop through app whitelist, and make exceptions.
	var tempappwhitelist=3D'';
	for (var app in arrwhitelist2){
	  tempappwhitelist +=3D' #timeline_tab_content div[data-gt*=3D\'"appid":' =
+ app + '\'],'; //body.timelineLayout=20
	}
	if(tempappwhitelist.length)
	  fbpboxstyles +=3D tempappwhitelist.replace(/,$/,'')+ ' {display:block !i=
mportant}';
    tempappwhitelist=3Dapp=3Dnull;
  }

  if (fbpoptsobj.chatbox) {
    fbpboxstyles +=3D' #pagelet_presence, #pagelet_friends_online, #pagelet=
_chat, #BuddylistPagelet, div.fbChatSidebarBody, #pagelet_sidebar div.fbCha=
tSidebarMessage.clearfix, #chatsidebarsheet {display:none}'; //  #ChatTabsP=
agelet  removed this cos it hampers ability to send direct messages via "ho=
ver over username / click message button" and also doesnt actually close th=
e popup tab windows, just hides them
  }

  if (fbpoptsobj.hidesearchpopup) {
    fbpboxstyles +=3D' #facebar_typeahead_view_list ,div.litestandTypeahead=
view[data-click=3D"Search"]{display:none}';
  }

  if (fbpoptsobj.cookiespolicy) {
    fbpboxstyles +=3D' div[data-testid=3D"cookie-policy-banner"] {display:n=
one !important}';
  }

  if (fbpoptsobj.hidesearchtrending) {
    fbpboxstyles +=3D' #facebar_typeahead_view_list._21c._2yob, #blueBarDOM=
Inspector div.injectedSearchSuggestion, div._21es {display:none}';
  }

  if( fbpoptsobj.hidefriendreqtopnav) {
    fbpboxstyles +=3D' #fbRequestsJewel, #fb2k_pagelet_bluebar a.jewelButto=
n[data-gt=3D\'{"ua_id":"jewel:requests"}\'] {display:none}';
  }

  if( fbpoptsobj.hidemesstopnav) {
    fbpboxstyles +=3D'#pagelet_bluebar a[name=3D"mercurymessages"]{display:=
none}';
  }

  if( fbpoptsobj.hidecreatetopnav){
    fbpboxstyles +=3D' #creation_hub_entrypoint {display:none}';
  }
 =20
  if (fbpoptsobj.fullscreenchat) {
  	fbpboxstyles +=3D' #ChatTabsPagelet {display:none}';
  }

  /*
  if (fbpoptsobj.trendingbox) {
    fbpboxstyles +=3D' #pagelet_trending_tags_and_topics, #under_composer_t=
rending, #trending_reminders_link, div.userContentWrapper a[href^=3D\'/topi=
c/\'][href*=3D\'?source=3Dfttp\'], div.userContentWrapper a[href^=3D\'/topi=
c/\'][href*=3D\'?source=3Dftp\'], div.userContentWrapper a[href*=3D\'facebo=
ok.com/hashtag/\'][href*=3D\'?source=3Dftp\'], div.userContentWrapper a[hre=
f*=3D\'facebook.com/hashtag/\'][href*=3D\'?source=3Dfttp\'], div._5g-l, #to=
picFeedsNav {display:none} #rightCol div.cardRightCol {height:0px} #pagelet=
_reminders div.fbRemindersStory, #pagelet_friendlist_sidecol,#notes_pagelet=
 {background-color:rgba(255,255,255,0.8)}';
  }
  */

  if (fbpoptsobj.bubblechat) {
	fbpboxstyles +=3D' ._kso, ._5yt9, ._55r0{clear:both;float:none !important}=
 div._5yt9 * {clear:both;float:none !important} div._5yt9  {float:none !imp=
ortant} .fbDockChatTabFlyout .fbNubFlyoutBody {background-color: #fff !impo=
rtant} div._5yt9, div._kso {font-family: inherit !important;font-size: inhe=
rit !important;line-height: inherit !important;color:inherit !important} di=
v._5w1r { background: transparent none !important; border: none; border-rad=
ius: 0; box-shadow: none; text-shadow: none; color: #000; max-width:230px !=
important; width:auto !important } div._1nc7  {background-color:#dbedfe !im=
portant} ._5w1r::after,._5w1r::before {width:0px !important} ._1nc7 ._5ys_ =
{ top: 5px; } ._5w1r { margin-left: 0px !important;padding-left: 0px !impor=
tant; padding-right: 0px !important; padding-top:2px !important; padding-bo=
ttom:2px !important} ._5wd4 {padding-top:2px !important; padding-bottom:2px=
 !important} ._1nc7._2cnu ._5wdf { margin-bottom: 0px !important;  margin-t=
op: 0px !important} ._1nc7 ._5ys- {position:relative; right: -35px !importa=
nt} ._1nc7 ._5wd9 {min-height: initial !important} span.emoticon_text,span.=
emoticon_smile {float:none !important} /* new stuff 25thNov15*/ #ChatTabsPa=
gelet div.conversation * {border:0px !important} #ChatTabsPagelet div.conve=
rsation * {box-shadow: none !important} #ChatTabsPagelet div.conversation d=
iv._5wd9 {clear:right !important; float:left !important} #ChatTabsPagelet d=
iv.conversation div._5wd4 {padding-top:0px !important} #ChatTabsPagelet div=
.conversation div._5wd4 {padding-bottom:0px !important} #ChatTabsPagelet di=
v._4tdt div._31o4 {top:5px} #ChatTabsPagelet div.fbNub.opened.focusedTab di=
v.fbNubFlyoutTitlebar, #BuddylistPagelet div.fbNubFlyoutTitlebar {backgroun=
d-color:#4267b2 !important} #ChatTabsPagelet div._d97 {background-color:inh=
erit !important;color:black !important} div._d97 a {color: #365899 !importa=
nt} #ChatTabsPagelet div.fbNub.opened .titlebarText {color: black} #ChatTab=
sPagelet div.fbNub.opened.focusedTab .titlebarText {color: white} div._1nc6=
 {justify-content:inherit !important}';
	/* new: Feb 2017: fixes messenger bubble format */
	fbpboxstyles +=3D' div._1t_p ._o46, div._1t_p ._3erg, div._1t_p ._-5k, div=
._1t_p ._3i_m, div._1t_p ._nd_, div._1t_p ._3058, div._1t_p ._ui9, div._1t_=
p ._hh7, div._1t_p ._s1-, div._1t_p ._52mr, div._1t_p ._3oh- {all:initial !=
important;font-size:inherit !important;font-family:inherit !important} span=
._3oh-._58nk {white-space:pre-wrap !important} span._40fu {position:relativ=
e} /* try and fix copy and paste on FF */ .gecko ._58nk {cursor: text !impo=
rtant}._3oh- {-moz-user-select: text !important}';
	fbpboxstyles +=3D' div._1t_q+div._41ud { background-color: #dbedfe } div._=
1t_p ._hh7 a {color:inherit !important} div._1t_p svg {width:15% !important=
} ';/* fix big thumbs up*/
	fbpboxstyles +=3D' div#ChatTabsPagelet *, div[aria-label=3D"Messages"] ._3=
xn5 ._3xn1 {border-radius: 0% !important}';
=09
	//fbpboxstyles +=3D'#blueBarDOMInspector ._330i._1z4y a.jewelButton:hover =
._2n_9, ._330i._1z4y a.jewelButton:focus ._2n_9  {background-position:0 -23=
8px !important}#blueBarDOMInspector ._330i._1z4y a.jewelButton ._2n_9 {back=
ground-position:0 -213px !important}'; /* fix mess. icon */ //-268
  }

  if (fbpoptsobj.condensedchat) {
    fbpboxstyles +=3D ' div.fbChatOrderedList  ul li * { line-height: inher=
it !important} div.fbChatOrderedList ul ._55ln, div.fbChatOrderedList ul ._=
55lp {line-height:15px; height:15px !important; margin-bottom:-3px; overflo=
w:hidden !important} div.fbChatOrderedList  ul img[width=3D"28"] {position:=
relative;top:-4px}';
  }

  if ((typeof fbpoptsobj.sendmoneybutt !=3D=3D'undefined') &amp;&amp; fbpop=
tsobj.sendmoneybutt) {
	fbpboxstyles +=3D' #ChatTabsPagelet ._10nr ._5uqy,#ChatTabsPagelet div._10=
nr._6gd, #pagelet_web_messenger ._10nr ._5uqy, #ChatTabsPagelet a[role=3D"b=
utton"][title=3D"Send Money"], #pagelet_web_messenger a[role=3D"button"][ti=
tle=3D"Send Money"] {display:none !important}';
  }

  if ((typeof fbpoptsobj.startcallbutt !=3D=3D'undefined') &amp;&amp; fbpop=
tsobj.startcallbutt) {
	fbpboxstyles +=3D' #ChatTabsPagelet a[data-gt^=3D"{\\"videochat\\""], ul._=
fl2 div[title^=3D"Start a video chat"],ul._fl2 div[title^=3D"Start a voice =
call"], #ChatTabsPagelet a[href=3D"Send a voice clip"], div[aria-label=3D"N=
ew message"] a[title=3D"Send a voice clip"] {display:none !important}'; //#=
pagelet_web_messenger button[data-tooltip-content^=3D"Start a video call"]
  }

  if ((typeof fbpoptsobj.chatplaygamebutt !=3D=3D'undefined') &amp;&amp; fb=
poptsobj.chatplaygamebutt) {
	fbpboxstyles +=3D' #ChatTabsPagelet a._6gb._4cf0, a[role=3D"button"][title=
=3D"Play a game"] {display:none !important}';
  }

  if ((typeof fbpoptsobj.chatquickcambutt !=3D=3D'undefined') &amp;&amp; fb=
poptsobj.chatquickcambutt) {
	fbpboxstyles +=3D' #ChatTabsPagelet a._6gb._5yhk._30yy, a[role=3D"button"]=
[title=3D"Take a picture using quick cam"] {display:none !important}';
  }

  if ((typeof fbpoptsobj.chataddfilesbutt !=3D=3D'undefined') &amp;&amp; fb=
poptsobj.chataddfilesbutt) {
	fbpboxstyles +=3D' #ChatTabsPagelet form[title=3D"Add Files"] {display:non=
e !important}';
  }
  if ((typeof fbpoptsobj.chatstartplanbutt !=3D=3D'undefined') &amp;&amp; f=
bpoptsobj.chatstartplanbutt) {
	fbpboxstyles +=3D' #ChatTabsPagelet a[role=3D"button"][title=3D"Start a pl=
an"], div._5_65._1ejy {display:none !important}';
  }

  if ((typeof fbpoptsobj.smileys !=3D=3D'undefined') &amp;&amp; fbpoptsobj.=
smileys) {
    fbpboxstyles +=3D' h5 i.img.sp_8bdjxq.sx_a5061a,i.img.sx_aa9390, i.img.=
sx_bfe526, i.img.sx_dfebf7, i.img.sx_5455e0,' + wrotewallicon + ', img.wall=
ArrowIcon, .emoticon_text, h5.uiStreamHeadline i.img, a.fbStreamPrivacy i.i=
mg, div.audienceSelector i.img, i.UFILikeIcon, div[data-hover=3D"tooltip"][=
aria-label^=3D"Shared"] i, a[data-hover=3D"tooltip"][aria-label] i,i.UFILik=
eLinkIcon,i.UFICommentLinkIcon,i.UFIShareLinkIcon, div.userContentWrapper s=
pan._55pe img[width=3D"16"][height=3D"16"],i.UFIOrderingModeSelectorDownCar=
et, body.pagesTimelineLayout i[aria-label=3D"Pinned Post"], div&gt;button&g=
t;i, div._5pcp i.img,i[data-tooltip-content=3D"Pinned Post"],div.UFIComment=
ContentBlock a.UFICommentCloseButton i,div.UFICommentContentBlock div.UFICo=
mmentCloseButton i  {display:inline-block !important} li.webMessengerMessag=
eGroup div span p span, .emoticon, div.userContentWrapper span[title~=3D"em=
oticon"] img,img.img[height=3D"30"][width=3D"30"],img.img[height=3D"16"][wi=
dth=3D"16"],img[height=3D"24"][width=3D"24"] {display:none !important} i.-c=
x-PRIVATE-fbEntstreamEmoji__image, i.-cx-PRIVATE-ogAttachedSentenceToken__i=
con, span.-cx-PRIVATE-fbEmoji__icon, h5.uiStreamMessage img, span.userConte=
nt i.img, .userContentSecondary i.img, span.hasCaption i.img, div.shareSubt=
ext i.img, div.uiStreamAttachments i.img, div.UFICommentContent span._1a-, =
div.userContentWrapper i.img,div.userContentWrapper img[width=3D"16"][heigh=
t=3D"16"], h5.uiStreamMessage i.img, span.userContentSecondary img[height=
=3D"16"], div[data-dedupekey] h5 img[width=3D"16"][height=3D"16"],h6 img[wi=
dth=3D"16"][height=3D"16"], #ChatTabsPagelet div.conversation img._1ift, #b=
lueBarDOMInspector a.messagesContent img._1ift, div[aria-label*=3D"sticker"=
] {display: none} #pagelet_web_messenger li.webMessengerMessageGroup div.mv=
s, table.conversationContainer div.mvs, #ChatTabsPagelet div.stickerContain=
er,#ChatTabsPagelet div.conversation div[style*=3D"www.facebook.com/sticker=
s/asset/"] {word-spacing:-999px;letter-spacing: -999px; height:18px !import=
ant; width:100px; visibility: hidden} #pagelet_web_messenger li.webMessenge=
rMessageGroup div.mvs:before, table.conversationContainer div.mvs:before, #=
ChatTabsPagelet div.stickerContainer:before, #ChatTabsPagelet div.conversat=
ion div[style*=3D"www.facebook.com/stickers/asset/"]:before {content: \"**s=
ticker**\";visibility: visible;word-spacing:normal;letter-spacing: normal} =
div.UFICommentContent div[style*=3D"fbcdn-dragon"], div[data-testid=3D"ufi_=
comment_sticker"] {display:none} .emoticon_text {position:relative;top:4px;=
clip:auto;height:auto;width:auto;background-color:#EEEEFF} #ChatTabsPagelet=
 span[style^=3D\'background-image: url("/images/emoticons/\'] {visibility: =
hidden} #ChatTabsPagelet span[style^=3D\'background-image: url("/images/emo=
ticons/\']:after {content: " " attr(title);visibility: visible } i[style*=
=3D"/images/emoji.php"],span.UFICommentBody i._1az._1a- {background-image:u=
rl("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAO=
w=3D=3D") !important} i[style*=3D"/images/emoji.php"]&gt;span.accessible_el=
em, span.UFICommentBody i._1az._1a-  span.accessible_elem, span._7oe {clip:=
unset !important;width:inherit !important;height:inherit!important} span.UF=
ICommentReactionIconContainer {margin-right:6px} /* Page admin/user switche=
r button on Page posts*/ span[data-testid=3D"actor-selector"] img._6vg.img =
{display:initial !important}';
	// deal with new reaction emojis
	//fbpboxstyles +=3D' span[role=3D"toolbar"] {width:auto !important} a[ajax=
ify^=3D"/ufi/reaction"]&gt;span._1g5v {margin-left: 6px} div._4ar- a._3emk =
{margin:0 5px 0 5px} i.like,i.wow,i.haha,i.love,i.sorry,i.anger{visibility:=
 hidden;word-spacing: -999px; letter-spacing: -999px} i.like:before,i.wow:b=
efore,i.haha:before,i.love:before,i.sorry:before,i.anger:before {visibility=
: visible;word-spacing: normal;letter-spacing: normal; font-size:13px !impo=
rtant} i.like:before {content: "like" !important} i.wow:before{content: "wo=
w" !important} i.haha:before{content: "haha" !important} i.love:before{cont=
ent: "love" !important} i.sorry:before{content: "sad" !important} i.anger:b=
efore {content: "ang" !important} a.UFILikeLink&gt;i.like,a.UFILikeLink&gt;=
i.wow,a.UFILikeLink&gt;i.haha,a.UFILikeLink&gt;i.love,a.UFILikeLink&gt;i.so=
rry,a.UFILikeLink&gt;i.anger {display:none}';
	fbpboxstyles +=3D' span._7oe, div.UFICommentContent img.img[height=3D"32"]=
[width=3D"32"] {visibility:hidden} span[role=3D"toolbar"] {width:auto !impo=
rtant} a[ajaxify^=3D"/ufi/reaction"]&gt;span._1g5v {margin-left: 6px} div._=
4ar- a._3emk {margin:0 5px 0 5px} i._3j7l,i._3j7n,i._3j7o,i._3j7m,i._3j7r,i=
._3j7q{visibility: hidden;word-spacing: -999px; letter-spacing: -999px} i._=
3j7l:before,i._3j7n:before,i._3j7o:before,i._3j7m:before,i._3j7r:before,i._=
3j7q:before {visibility: visible;word-spacing: normal;letter-spacing: norma=
l; font-size:13px !important} i._3j7l:before {content: "like" !important} i=
._3j7n:before{content: "wow" !important} i._3j7o:before{content: "haha" !im=
portant} i._3j7m:before{content: "love" !important} i._3j7r:before{content:=
 "sad" !important} i._3j7q:before {content: "ang" !important} a.UFILikeLink=
&gt;i._3j7l,a.UFILikeLink&gt;i._3j7n,a.UFILikeLink&gt;i._3j7o,a.UFILikeLink=
&gt;i._3j7m,a.UFILikeLink&gt;i._3j7r,a.UFILikeLink&gt;i._3j7q, /* hide floa=
ting reactions on live videos */ div._f5b._3htz, /*hide emoticon popup abov=
e comment boxes*/ div._6n_0, span._6qdm, /* hide emoticon header above text=
 entry box on live video*/ div.__0t._3d83  {display:none}';
	//var reactarr2=3D["like","love","haha","wow","sorry","anger"];
    //var reactarr2=3D["_3j7l","_3j7m","_3j7o","_3j7n","_3j7r","_3j7q"];
	if(fbpoptsobj.fontfix){ // fix for ascii smileys not showing if font size =
has been changed
	  fbpboxstyles +=3D ' span._4mcd {font-size:' + fbpoptsobj.fontsize + 'px}=
';
	}
	else {
	  fbpboxstyles +=3D ' span._4mcd {font-size: inherit}';
	}
  }

  if ((typeof fbpoptsobj.reactions !=3D=3D'undefined') &amp;&amp; fbpoptsob=
j.reactions) {
    fbpboxstyles +=3D' div._iu-[role=3D"toolbar"],span._3t54[role=3D"toolba=
r"]{display:none}'; // div.userContentWrapper a[href^=3D"/ufi/reaction/prof=
ile/browser/"]:after{content:"Likes";position:relative;left:-40px}
  }

  if ((typeof fbpoptsobj.notificationpopup !=3D=3D'undefined') &amp;&amp; f=
bpoptsobj.notificationpopup) {
    fbpboxstyles +=3D" ul[data-gt^=3D'{\"ref\":\"beeper\"'],div.uiContextua=
lLayer[aria-label^=3D'New notification'],div.uiContextualLayer[aria-label=
=3D'Next Unread'] {display:none}"; // hide thread popup notifications div.f=
bNubGroup
  }

  /* commented out cos causing layout problem for some people (left shift) =
10thApr2017=20
  if ((typeof fbpoptsobj.fixedleftcolumn !=3D=3D'undefined') &amp;&amp; fbp=
optsobj.fixedleftcolumn) {
    fbpboxstyles +=3D' .home #leftCol {position:fixed !important}';
  }
  */

  if ((typeof fbpoptsobj.sortmostrecent !=3D=3D'undefined') &amp;&amp; fbpo=
ptsobj.sortmostrecent) { // this is the heading that says "Viewing Most Rec=
ent Stories" on the new newsfeed design
    fbpboxstyles +=3D' div._4-u2.mvm._495i {position:relative; top:-21px; w=
idth:138px; height:10px; overflow:hidden !important; padding :0px; padding-=
top:1px; padding-bottom:6px; margin-top:0px; margin-bottom:-17px}';
  }

  if ((typeof fbpoptsobj.expandnewscolumn !=3D=3D'undefined') &amp;&amp; fb=
poptsobj.expandnewscolumn &amp;&amp; (!window.location.href.match(/\/events=
\/|\/groups\/|\/allactivity/))) {
    //ncstyle.textContent=3D'#contentArea {width:auto !important} #rightCol=
 {display:none}';
	window.setTimeout(fbpexpandnewscoltoggle,4500);
	window.setTimeout(function(){if(document.querySelector('body.timelineLayou=
t')) { ncstyle.textContent=3D''; if(!window.location.href.match(/comment_id=
/)) { window.scrollTo(5,5);window.scrollTo(0,0)} }},5000);
  }

  if (fbpoptsobj.listsuggestions) {
	fbpboxstyles +=3D' #pagelet_friend_list_suggestions {display:none}';
  }

  if (fbpoptsobj.listheaderimage) {
	fbpboxstyles +=3D' #pagelet_friend_list_header, #pagelet_feed_cover_photo =
{display:none}';
  }

  if((typeof fbpoptsobj.fulltimestamps !=3D=3D'undefined') &amp;&amp; fbpop=
tsobj.fulltimestamps) {
	fbpboxstyles +=3D ' abbr[data-utime]span {font-size:0em !important} abbr[d=
ata-utime]:after {content: " " attr(title);font-size:13px}  div.userContent=
Wrapper a.fbStreamPrivacy {vertical-align:middle} ';
	//fbpboxstyles +=3D ' abbr[data-utime]:hover {font-size:inherit !important=
} abbr[data-utime]:hover:after {content: "";display: inline-block;width: 14=
0px;}  div.userContentWrapper a.fbStreamPrivacy {vertical-align:middle}';=
=09
	//fbpboxstyles +=3D ' #pagelet_web_messenger abbr[data-utime]:hover:after =
{content: "";width: 0px; !important}'; // fix for inbox timestamps
    fbpboxstyles +=3D ' #pagelet_web_messenger abbr[data-utime] {font-size:=
inherit}'; // fix for inbox timestamps
  }

  if((typeof fbpoptsobj.highlightpublicposts !=3D=3D'undefined') &amp;&amp;=
 fbpoptsobj.highlightpublicposts) {
	fbpboxstyles +=3D ' a.uiStreamPrivacy[data-tooltip-content=3D"Public"]:aft=
er,a.uiStreamPrivacy[data-tooltip-content=3D"Shared with: Public"]:after, d=
iv[data-tooltip-content=3D"Shared with: Public"]:after, a[aria-label=3D"Pub=
lic"]:after, a[aria-label=3D"Shared with: Public"]:after, div[aria-label=3D=
"Shared with: Public"]:after { content: "** PUBLIC POST **"; color: red; fo=
nt-weight: bold; font-size: 20px }';
  }

  /* Get square profile pics and rectangular input boxes back */
  if((typeof fbpoptsobj.squareprofilepics !=3D=3D'undefined') &amp;&amp; fb=
poptsobj.squareprofilepics) {
	fbpboxstyles +=3D ' div.UFIImageBlockImage, a.UFIImageBlockImage, img.UFIA=
ctorImage, img._4ooo, img._2qgu, ._605a ._bth,._3njy img, div.MercuryThread=
Image,._55lq,._605a ._43q7 .img, img._4y0c, body._605a img._6vg,img._4lxz, =
div._4ld-, div._1gyw, #fbTimelineHeadline .profilePicThumb .img,img.img,a._=
3mf5::after,span._3eoh { border-radius: 0% !important } div._38vo:after,._5=
v9k .UFIAddComment .UFIImageBlockImage:after, ._5v9k .UFIComment .UFIImageB=
lockImage:after,a._3mf5::after,div._6tay:after {border:0px !important} ';
	/* get rectangular comments back (no more bubble comments)*/=20
	/* causes problems (hides inline gifs/inline videos etc)
	if( fbpoptsobj.fontbgcolourfix )
	  fbpboxstyles +=3D ' div.UFIContainer * { background-color:'  + fbpoptsob=
j.fontbgcolour +' !important }  div.UFICommentContainer * {background-color=
:' + fbpoptsobj.fontbgcolour + ' !important} span.UFICommentActorAndBody { =
padding: 4px 4px !important }';
    else
	  fbpboxstyles +=3D ' div.UFIContainer * { background-color: #eff1f3 !impo=
rtant }  div.UFICommentContainer * {background-color: white !important} spa=
n.UFICommentActorAndBody { padding: 4px 4px !important }';
    */
=09
  }

  if((typeof fbpoptsobj.commentbubbles !=3D=3D'undefined') &amp;&amp; fbpop=
tsobj.commentbubbles) {
	fbpboxstyles +=3D ' span.UFICommentActorAndBody {background-color:inherit =
!important} ._3-a6 ._10la ._10lo {background-color:inherit !important; bord=
er-radius:0 !important;box-shadow:none !important; !important } ._3-a6._1bl=
z ._2lhm,._3-a6 ._pb2 ._2r3x, div.UFIInputContainer, div.UFICommentContent =
a[rel=3D"theater"], div.UFICommentContent img.img, div.UFICommentContent di=
v[id^=3Dgif_comment_attachment] div,form,div[data-testid=3D"UFI2Comment/bod=
y"],div._6a15,div._3ekx, div._2tx5 {border-radius:0!important}';
  }

  if((typeof fbpoptsobj.textanimations !=3D=3D'undefined') &amp;&amp; fbpop=
tsobj.textanimations) {
	fbpboxstyles +=3D ' div._1yib svg, div._1yib canvas {display:none} div.use=
rContent span._ezo[id^=3D"u_"],span._ezo {color:inherit !important;font-wei=
ght:normal !important}';
  }

  if((typeof fbpoptsobj.fullURL !=3D=3D'undefined') &amp;&amp; fbpoptsobj.f=
ullURL) {
	fbpboxstyles +=3D ' div._6m6 a:after { content: attr(href); font-size: 12p=
x; display: block; color: grey; } /* make link box bigger so description wi=
ll also fit */ div._59ap div._6m3,div._6m6, div._6m7,div._3ekx {height:auto=
 !important;max-height: 600px !important} #facebook div._6m7._3bt9.hidden_e=
lem {display:block !important}';
  }

  if(fbpoptsobj.tlgamesapps) {=20
    // hide games and apps on timeline pages
    fbpboxstyles +=3D' div[data-gt*=3D"PlatformAppUserActionSpikeUnit"], di=
v[data-gt*=3D"249944898349166"],div[data-gt*=3D"PlatformAppUserActionUnit"]=
,#pagelet_timeline_medley_games {display:none !important}';
  }

  if(fbpoptsobj.tllikesbox) {=20
    // hide games and apps on timeline pages
    fbpboxstyles +=3D" div[data-gt*=3D'LikesEgoReportUnit'], /* General Lik=
es */ div.timelineReportContainer[data-gt*=3D'\"app_id\":\"2409997254\"'], =
/* Books */ div.timelineReportContainer[data-gt*=3D'\"app_id\":\"3329538467=
89204\"'], /* TV Shows*/ div.timelineReportContainer[data-gt*=3D'\"app_id\"=
:\"309918815775486\"'], /* Movies */ div.timelineReportContainer[data-gt*=
=3D'\"app_id\":\"177822289030932\"'], /* Music */ div.timelineReportContain=
er[data-gt*=3D'\"app_id\":\"221226937919712\"'], /* Sports */ div.timelineR=
eportContainer[data-gt*=3D'\"app_id\":\"330076653784935\"'], div.timelineUn=
itContainer[data-gt*=3D'TimelinePagesLikedPagesUnit'] {display:none !import=
ant}";
  }

  if(fbpoptsobj.pymk) {=20
    // hide people you may know
    fbpboxstyles +=3D' #fbRequestsPYMKContainer, #pagelet_pymk_timeline, #p=
agelet_timeline_main_column div[title=3D"Other People You May Know"], #welc=
ome_dashboard li.step.last, div._3nzq, #stream_pagelet &gt; ._4-u2._2ph_._3=
-95, #pagelet_timeline_main_column .escapeHatchMinimal._4__g._32jy, ul.sear=
ch li.typeaheadHeader[title=3D"People You May Know"], ul.search li.pymk, bo=
dy.timelineLayout div[id^=3D"VertexPYMKSections_"], body.pagesTimelineLayou=
t div[id^=3D"VertexPYMKSections_"], div[id*=3D"EntGroupsMYSKFeedObject:a"],=
 #fbNotificationsFlyout li[data-gt*=3D\'"notif_type":"pymk_email\'], div.eg=
o_section{display:none}'; // ego_section class may be too broad...
  }

  if(fbpoptsobj.tlinvitefriendslikepage) {=20
    // hide the invite friends to like this page box on timeline pages
    fbpboxstyles +=3D" #NonAdminInvite {display:none}";
  }

  if(fbpoptsobj.nonags) {=20
    // hide the invite friends to like this page box on timeline pages and =
other annoying questions fb asks / prompts such as seasonal greetings in st=
atus box etc.
    fbpboxstyles +=3D" #pagelet_like_toast, li.-cx-PRIVATE-fbTimelineAboutU=
nitQuestion__root, #timeline_profile_questions_unit, #nf_megaphone_school_a=
dd_content, #nf_megaphone_school_add, #timeline_info_review_unit, div[data-=
fieldtype=3D'437814382994308'],div[data-fieldtype=3D'562499510465814'],div[=
data-fieldtype=3D'199661640205353'],div[data-fieldtype=3D'181177592065522']=
,#mobile_mirror_banner, #bootloadComposerPromptIcon, #bootloadSemiinlineRoo=
t, #bootloadComposerPromptPlaceholder,div._4bl9._1sek, #stream_pagelet div[=
data-ft^=3D'{\"daily_dialogue_'],#dd_lw_content, #pagelet_megaphone, #pagel=
et_prompts,#stream_pagelet div[id^=3D'feed_scoreboard'], #intro_container_i=
d + div._4ewz {display:none !important} /* hide rotating profile intro ques=
tions on your Timeline page (your profile page) */ a._1jf6._2pi9._2pi3 {dis=
play:none} /* hide add info about you link on your Timeline page (your prof=
ile page) */ a[rel=3D'dialog'][href^=3D'/profile/intro/about/dialog/?dom_id=
'] {display:none} /*hide add featured photos section on your Timeline page =
(your profile page) */ div[data-store=3D'{\"event\":\"fav_photos_add_prompt=
_suggested_click\"}'] {display:none} #fbNotificationsFlyout li[data-gt*=3D'=
\"notif_type\":\"visit_self_profile\"'], /*start a plan button in chat */a.=
_52mr._2q1l,div._5_65._1ejy, #profile_timeline_tiles_unit_pagelets_fun_fact=
_answers, div#profile_intro_card_bio div[role=3D'article'][aria-posinset],#=
intro_container_id a[href*=3D'info_surface=3Dintro_card#profile_about_links=
'], a[href=3D'/profile/wizard/async/dialog/'],#mall_card_xhp_id { display: =
none !important}";  //body.timelineLayout div[data-xt-vimp] (was causing so=
me timeline pages to be hidden)
    // hide prompt in status box
	fbpboxstyles +=3D" #feedx_sprouts_container textarea::-webkit-input-placeh=
older{color:white !important} #feedx_sprouts_container textarea::-moz-place=
holder{color:white !important} #feedx_sprouts_container textarea:-ms-input-=
placeholder{color:white !important} #feedx_sprouts_container div[id^=3D'pla=
ceholder-'],#timeline_react_composer_container div[id^=3D'placeholder-'], #=
intro_container_id div._b5a, #intro_container_id a._1-in {display: none !im=
portant}";
  }
  fbpboxstyle.textContent =3D fbpboxstyles;

  // set custom css (if user has specified any styles)
  if (fbpoptsobj.fbpcustomcss) {
	fbpcssstyle.textContent =3D fbpoptsobj.fbpcustomcss;
  }
  if(debug)
    console.log('BEFORE WHITELIST IS FINALISED - '+typeof(fbpoptsobj.friend=
swhitelistArr) + ' ' + fbpoptsobj.friendswhitelistArr);
  // Set up user whitelist regexp (includes fbp fan and dev pages)
  if(typeof(fbpoptsobj.friendswhitelistArr)!=3D'undefined') {
    var friendswhitelistArr=3DJSON.parse(fbpoptsobj.friendswhitelistArr);
	if(typeof (friendswhitelistArr)=3D=3D'object') {
      for(i in friendswhitelistArr) { // i is the friend id=20
        useridwhitelist+=3D '|' + i;
      }
	}
	if(debug)
	  console.log("AFTER WHITELIST IS FINALISED userwhitelist=3D :  " + userid=
whitelist);
    useridwhitelistRX=3Dnew RegExp(useridwhitelist);
  }
  else if(typeof(useridwhitelist)!=3D"undefined") {
    useridwhitelistRX=3Dnew RegExp(useridwhitelist);
  }

  if(debug)
    console.log('are we here at the end of initstage 2?');

} //END FUNCTION INITSTAGE2

var fbpdynamicreload =3D function (opts) {
  fbpgetprefs(opts);
  if(document.getElementById('fbpoptsdiv') &amp;&amp; document.getElementBy=
Id('fbpoptsdiv').style.display=3D=3D'block') {
    document.getElementById('fbpoptsdiv').style.display=3D'none';
	fbptoggleopts();
  }
  resetclasses();
  initstage2();
  cleartheshizzle(document);
}

  function fbpInsertedNodeDomHandler(records) { //event // mutationObserver=
Ref
    var q,p,tempnode;
	var vidArr=3D[];
    if(records.length) {
      for(q=3D0;q&lt;records.length;q++) {
        //if(records[q].addedNodes.length)
	    for(p=3D0;p&lt;records[q].addedNodes.length;p++) {
	      //console.log(records[q]);
	      //console.log(records[q].addedNodes[p]);
	      tempnode=3Drecords[q].addedNodes[p];
          if((tempnode.nodeName=3D=3D'LI') ||  (tempnode.nodeName=3D=3D'UL'=
)) {
            //if ((document.getElementById('pagelet_home_stream')||(documen=
t.getElementById('hashtag_permalink_feed'))) &amp;&amp; (!document.getEleme=
ntById('fb_multi_friend_selector'))) { =20
	        if ((document.getElementById('pagelet_home_stream') ) &amp;&amp; (=
!document.getElementById('fb_multi_friend_selector'))) {
	          //console.log(event.target.nodeName);
              cleartheshizzle(tempnode);
		      //unmanglelinks(event.target);
            }
            else {
              ; // not doing anything at the mo
            }
	        if(fbpoptsobj.fixarticleredirects &amp;&amp; tempnode &amp;&amp; t=
empnode.getElementsByTagName &amp;&amp; tempnode.getElementsByTagName('a').=
length)
	          unmanglelinks(tempnode);
		    if (typeof(tempnode.querySelectorAll)!=3D'undefined')
              vidArr=3Dtempnode.querySelectorAll("video");
          }
          else if(tempnode.nodeName=3D=3D'DIV') {
            //var functRef =3D callLater(adddelreqbuttons,event.target);
            //setTimeout(functRef, 1500);
	        if (document.getElementById('pagelet_litestand_section') || docume=
nt.getElementById('stream_pagelet') || document.getElementById('pagelet_see=
n_content')) { //  document.getElementById('pagelet_explore_feed') ||
	          //console.log(event.target.nodeName);
			  if(tempnode.getAttribute('id') &amp;&amp; tempnode.getAttribute('id').=
match(/^u_jsonp|^u_/) &amp;&amp; (tempnode.parentNode) &amp;&amp; tempnode.=
parentNode.getAttribute('data-dedupekey')) {
                cleartheshizzle(tempnode.parentNode);
			  }
			  else {=20
			    //console.log("this div is going to get cleared...",tempnode.textCon=
tent);
			    cleartheshizzle(tempnode)
		      }
		      //unmanglelinks(event.target);
            }
	        //if((tempnode.getAttribute('id')=3D=3D'platform_dialog_content') =
|| (tempnode.getElementsByClassName('tosPane').length) || (tempnode.getAttr=
ibute('class') &amp;&amp; tempnode.getAttribute('class').match(/tosPane/)))=
  {
            if((tempnode.getAttribute('id')=3D=3D'platform_dialog_content')=
 || (tempnode.querySelector('.tosPane,.uiLayer')) || (tempnode.getAttribute=
('class') &amp;&amp; tempnode.getAttribute('class').match(/tosPane|\buiLaye=
r\b/))){
	          //its most likely a facebook application requesting permissions
		      highlightemailrequest();
		      addblockbuttontopermreq();
	        }
	        if(tempnode.classList.contains('middle_area_content')){
   	          //if(window.location.href.match(/\/appcenter\/?/))
              if(window.location.href.match(/\/games\//)) // i dont think t=
his bit of code is necessary any more
	            highlightemailrequest();
	        }
            else if(tempnode.classList.contains("uiLayer")){ //tempnode.get=
Attribute('class').match(/uiLayer/)
		      window.setTimeout(function(x) {
				//console.log('here we are',x.textContent);
		        if(x.querySelector('ul.uiList span') &amp;&amp; x.querySelector('=
ul.uiList span').textContent.match(/fbpurity\.com/)) {
		          if(document.querySelector('div.uiLayer ul.uiList li').innerHTML=
.match(/our security systems/)) {
		            document.querySelector('div.uiLayer ul.uiList li').innerHTML=
=3Ddocument.querySelector('div.uiLayer ul.uiList li').innerHTML.replace('ou=
r security systems detected to be unsafe',"Facebook's security systems dete=
cted to be completely safe, but because it lets you clean up the junk such =
as ads and other stuff you don't want to see and gives you cool options tha=
t Facebook doesn't want to give you, they are blocking the link");
					document.querySelector('div.uiLayer ul.uiList li').innerHTML=3Ddocumen=
t.querySelector('div.uiLayer ul.uiList li').innerHTML.replace('our security=
 systems have detected to be unsafe',"Facebook's security systems detected =
to be completely safe, but because it lets you clean up the junk such as ad=
s and other stuff you don't want to see and gives you cool options that Fac=
ebook doesn't want to give you, they are blocking the link");
		            document.querySelector('div.uiLayer ul.uiList li').innerHTML=
=3Ddocument.querySelector('div.uiLayer ul.uiList li').innerHTML.replace('to=
 continue.',"to continue, and replace it with &lt;b&gt;facebook.com/fluffbu=
stingpurity&lt;/b&gt; which is the URL for the FB Purity fan page on Facebo=
ok.&lt;p/&gt;&lt;b&gt;Don't let Facebook fool you, F.B. Purity *is* safe, f=
ree and top rated. Help spread the word, by telling your friends about it o=
n Facebook also Twitter, Pinterest, Google Plus, email, your websites, blog=
s, forums, other social media etc, thanks!&lt;/b&gt;");
					document.querySelectorAll('div.uiLayer ul.uiList li')[1].style.display=
=3D"none";
		           }
				   else if(document.querySelector('div.uiLayer ul.uiList li').innerHTML=
.match(/community standards/i)){
					 document.querySelector('div.uiLayer ul.uiList li').innerHTML=3Ddocume=
nt.querySelector('div.uiLayer ul.uiList li').innerHTML=3D("Facebook is bloc=
king you from sharing direct links to &lt;b&gt;fbpurity.com&lt;/b&gt; becau=
se it lets you clean up all the junk, such as ads and other stuff you don't=
 want to see and gives you cool options that Facebook doesn't want to give =
you.&lt;p/&gt;To get around this, please share the link to the FB Purity Fa=
n page instead which is &lt;b&gt;facebook.com/fluffbustingpurity&lt;/b&gt;"=
);
					 document.querySelectorAll('div.uiLayer ul.uiList li')[1].style.displa=
y=3D"none";
				   }
		           else {
			         ; // either they have changed the text, or its another language=
.
		           }
		           //console.log('they are blocking fbpurity.com');
		        }
				if(x.querySelector('h3') &amp;&amp; x.querySelector('h3').textContent.m=
atch(/URL Blocked|Can\'t Download|has blocked link|can't share this link/i)=
){
					//console.log('part 2');
				   if((document.getElementById('feedx_sprouts_container') &amp;&amp; do=
cument.getElementById('feedx_sprouts_container').textContent.match(/fbpurit=
y\.com/)) || (document.getElementById('timeline_composer_container') &amp;&=
amp; document.getElementById('timeline_composer_container').textContent.mat=
ch(/fbpurity\.com/)) || (document.getElementById('pagelet_group_composer') =
&amp;&amp; document.getElementById('pagelet_group_composer').textContent.ma=
tch(/fbpurity\.com/)) || (document.querySelector('[id^=3D"PageComposerPagel=
et_') &amp;&amp; document.querySelector('[id^=3D"PageComposerPagelet_').tex=
tContent.match(/fbpurity\.com/))){=20
					  x.querySelector('h3').innerHTML=3D"Facebook is blocking direct links=
 to &lt;b&gt;FBPURITY.COM&lt;/b&gt;";
					  x.querySelector('span[role=3D"heading"],div._pig span').innerHTML=3D=
"Facebook does not want its users having control over what they see and do =
on Facebook, so they are trying to stop people from linking to or visiting =
the F.B. Purity website.&lt;br/&gt;&lt;p&gt;Don't let Facebook fool you, F.=
B. Purity is safe, free and top rated, having being reviewed and highly rec=
ommended by many top tech publications and is in use by over 446,000 people=
 worldwide.&lt;/p&gt;&lt;p&gt;You can get around this block by replacing th=
e link to &lt;b&gt;fbpurity.com&lt;/b&gt; in your post with a link to &lt;b=
&gt;facebook.com/fluffbustingpurity&lt;/b&gt; instead. That is the URL for =
the &lt;b&gt;F.B. Purity&lt;/b&gt; fan page on Facebook.&lt;/p&gt;";=20
				   }
				}
		      },700,tempnode);
            }
			else if((typeof(tempnode.className)!=3D"undefined") &amp;&amp; tempnode.=
className.match(/_64gd/)){
              console.log('KILLING UP NEXT!');
			  //console.dir(tempnode);=20
			  window.setTimeout(function(){document.querySelector('div._64gk a').cli=
ck();},1000);
			}
			if(tempnode.getAttribute){
				try{
				  if(tempnode.getAttribute('data-testid').match(/^react-composer-footer=
/)){
					console.log('bingo');
					window.setTimeout(initfbplinkredeemer,500)
				  }
				}
				catch(e){;}
			}
	=09
	        if(fbpoptsobj.fixarticleredirects &amp;&amp; tempnode.getElementsB=
yTagName('a').length)
	          unmanglelinks(tempnode);
            //setTimeout(function(){adddelreqbuttons(event.target)},1000); =
// add delete friend request buttons if required
			if (typeof(tempnode.querySelectorAll)!=3D'undefined')
              vidArr=3Dtempnode.querySelectorAll("video");
          }
	      else if((tempnode.nodeName=3D=3D'SPAN') &amp;&amp; (tempnode.classLi=
st.length)) { //tempnode.getAttribute &amp;&amp; tempnode.getAttribute('cla=
ss')=20
	        //console.log('hit a spanner');
			if(tempnode.classList.contains("hasCaption")) {
	          unmanglelinks(tempnode);
			}
			else if(tempnode.classList.contains("_64gd")){
              console.log('KILLING UP NEXT!');
			  //console.dir(tempnode);=20
			  window.setTimeout(function(){document.querySelector('div._64gk a').cli=
ck();},1000);
			}
	      }
		  else if(tempnode.nodeName=3D=3D=3D"VIDEO") {
		    //vidArr=3D[e.target];
			vidArr=3D[tempnode];
		  }
          /*else if(!foundadcode &amp;&amp; tempnode.nodeName=3D=3D"STYLE")=
{
		    console.log(event.target.textContent);
		    if(tempnode.textContent.match(/^(\..*?):after {content: ".+?"/)){
	          foundadcode=3D1;
		      adclass=3Dtempnode.textContent.match(/^(\..*?):after {content: ".+?=
"/)[1];
		      //console.log(adclass);
		     }
		=09
		     // code to catch new ads... (well find the classname for the sponsor=
ed posts)
             //dastyles=3Ddocument.getElementsByTagName('style');=20
		     //for(i=3D0;i&lt;dastyles.length;i++)
		     //  if(dastyles[i].textContent.match(/^(\..*?):after {content: "Spon=
sored"/))=20
			 //    console.log(dastyles[i].textContent.match(/^(\..*?):after {conten=
t: "Sponsored"/))
	        =20
	      }*/
		  processVideoArray(vidArr);
        }
      }
    } =20
  } // END fpInsertedNodeDomHandler function
 =20
  function GfeelingLuckyHeadlineRedirect (e){
	//alert(e.target.innerText);
	target=3De.target;
	//console.log(e.target.nodeName);
	if(target.nodeName=3D=3D'SPAN')
	  target=3De.target.parentNode;
	//console.log("\"" + target.innerText.replace(/\:/,"\" \"") + "\"");
    window.open("https://www.google.com/search?btnI&amp;q=3D" + "\"" + targ=
et.innerText.replace(/\: /,"\" \"") + "\"");
  }
 =20
  function updateblockedcount() {
    var crappyappmsgcounter=3Ddocument.getElementsByClassName('fbpblocked')=
.length;
    var fbpblockcountspan=3Ddocument.getElementById('fbpblockcount');
    if(fbpblockcountspan)=20
      fbpblockcountspan.innerHTML=3Dcrappyappmsgcounter;

    var xtramsgcounter=3Ddocument.getElementsByClassName('fbpblockedx').len=
gth;
    var fbpblockxcountspan=3Ddocument.getElementById('fbpblockxcount');
    if(fbpblockxcountspan)=20
      fbpblockxcountspan.innerHTML=3Dxtramsgcounter;
  }

  function destroyblockedappstories (appid,killmode) {
    if(debug)
	  console.log('destroyblockdappstories');
    var appnodes=3Ddocument.getElementsByClassName('aid_' + appid);
    var appnodeslength=3Dappnodes.length;
    for (var i=3D0;i&lt;appnodeslength;i++){
      if(killmode=3D=3D'kill')
        appnodes[0].parentNode.removeChild(appnodes[0]);
      else if(killmode=3D=3D'allow')
        appnodes[i].className =3D appnodes[i].className.replace(/\bfbpblock=
ed\b/,'fbpnormal');

	  if(document.getElementById('fbpblockcount')) {
		var crappyappmsgcounter=3Ddocument.getElementById('fbpblockcount').textCo=
ntent;
		--crappyappmsgcounter;
		document.getElementById('fbpblockcount').textContent=3Dcrappyappmsgcounte=
r;
		}
    }
	updateblockedcount();
    //check if there are any blocked msgs left and if not, return to normal=
 homepage view
    var blockedmsgs=3Ddocument.getElementsByClassName('fbpblocked');
    if(!blockedmsgs.length)
      fbpshowblocked();
    appnodes=3Dnull;

  }// END destroyblockedappstories function

  function getdtsg() {
    var fb_dtsg=3D'';
	if(document.getElementsByClassName('autoexpand_mode').length) {
      if(document.getElementsByClassName('autoexpand_mode')[0].wrappedJSObj=
ect)
        fb_dtsg =3D document.getElementsByClassName('autoexpand_mode')[0].w=
rappedJSObject.fb_dtsg.value;
      else
        fb_dtsg =3D document.getElementsByClassName('autoexpand_mode')[0].f=
b_dtsg.value;
    }
	else {
	  var navinps=3Ddocument.getElementsByTagName('input');
	  for(var i=3D0;i&lt;navinps.length;i++)
		if(navinps[i].getAttribute('name')=3D=3D'fb_dtsg') {
		  fb_dtsg=3Dnavinps[i].getAttribute('value');
		  break;
		}
	}
    return fb_dtsg;
  }

  function allowapp(appid, appname) {
    if (confirm("Do you want to whitelist application : '" + appname +"'" +=
 ".\n\nApplication ID: " + appid)) {
      if(fbpoptsobj.userappwhitelist.length) {
        // theres already value/s in userwhitelist
        try {
          fbpoptsobj.userappwhitelist+=3D','+appid;
          fbpsavevalue('fbpoptsjson-' + currentuserid, JSON.stringify(fbpop=
tsobj));

          window.alert(appname + ' has been Saved to your whitelist');
          refreshwhitelist();
          destroyblockedappstories(appid,'allow');
        }
        catch(e) {
          window.alert('error saving id to whitelist');
        }
      }
      else {
        // userwhitelist is blank
        try {
          fbpoptsobj.userappwhitelist=3Dappid;
          fbpsavevalue('fbpoptsjson-' + currentuserid, JSON.stringify(fbpop=
tsobj));
          window.alert(appname + ' has been Saved to your whitelist');
          refreshwhitelist();
          destroyblockedappstories(appid,'allow');
        }
        catch(e) {
          window.alert('error saving id to whitelist');
        }
      }
    }
    else
      return;

  } // END allowapp function

  function blockapp(appid, appname, nodeid, autoblock){
    //https://www.facebook.com/ajax/privacy/block_app?dpr=3D1
	var fb_dtsg =3D getdtsg();
	if(typeof currentuserid=3D=3D'undefined' || currentuserid=3D=3D'')
	  currentuserid=3Dgetuserid();

    //unsafeWindow.pages_show_block_app("49572793475", "block", "about");

    // if not autoblocking - check if there are multiple apps to block, if =
so ask if user wants to block all at once
    if(typeof(autoblock)=3D=3D'undefined') {
      var app2bcount=3Ddocument.getElementsByClassName('fbpblocked').length=
;
      if (!confirm("Do you want to block application : '" + appname +"'"))
        return;
	  if (app2bcount&gt;1) // check if user wants to block all the currently s=
hown applications
         if(blockallapps())
           return;
    }
    if(document.getElementById('blockapplab'))
	  document.getElementById('blockapplab').style.display=3D'none';

    document.getElementById(nodeid).setAttribute('style','background:#DCDCD=
C !important;text-align:center');
    document.getElementById(nodeid).innerHTML=3D'&lt;b&gt;F.B. Purity&lt;/b=
&gt; : Blocking Application : "&lt;span style=3D"color:red"&gt;' + appname =
+ '&lt;/span&gt;"&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;img style=3D"t=
ext-align:middle" src=3D"//www.facebook.com/images/loaders/indicator_blue_s=
mall.gif"&gt;';

    var http =3D new window.XMLHttpRequest();=09
	var url =3D window.location.protocol + "//" + window.location.hostname + "=
/ajax/privacy/block_app.php?dpr=3D1";
    var params =3D "objectID=3D" + appid + "&amp;__user=3D" + currentuserid=
 + "&amp;__a=3D1" + "&amp;__dyn=3D" + "xyz123abc890" + "&amp;__req=3D1g&amp=
;__be=3D-1&amp;__pc=3DPHASED:DEFAULT&amp;fb_dtsg=3D" + fb_dtsg + "&amp;ttst=
amp=3D2658171908345876910549114455865817073117122988357777052&amp;__rev:248=
6274";

    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencode=
d");

    http.onreadystatechange =3D function() {
  	  if(http.readyState =3D=3D 4 &amp;&amp; http.status =3D=3D 200) {
		if(!http.responseText.match('\"errorSummary\"')){
		  //unsafeWindow.console.log("successfully blocked app : '" + appname +  =
"' with id=3D" +appid + "\n");
		  if((nodeid!=3D'platform_dialog_content') &amp;&amp;(nodeid!=3D'pagelet_=
canvas_content') &amp;&amp;(nodeid!=3D'platformDialogForm'))
		    destroyblockedappstories (appid,'kill');
		  else {
		    document.getElementById(nodeid).innerHTML=3D '&lt;p style=3D"margin-t=
op:20px;font-size:25px"&gt;&lt;a title=3D"App was blocked by the F.B. Purit=
y Browser Extension" href=3D"http://www.fbpurity.com"&gt;&lt;img style=3D"v=
ertical-align:middle" src=3D"https://sites.google.com/site/st333v/fbp-1/fbp=
-ghost-lid-icon-48x48.jpg"&gt;&lt;/a&gt; ' +appname + ' has been BLOCKED!' =
+ '&lt;/p&gt;&lt;div style=3D"height:2px"&gt;&lt;/div&gt;&lt;p style=3D"tex=
t-align:center;font-size:12px;font-color:red;font-weight:bold"&gt;&lt;a hre=
f=3D"/"&gt;Return to Facebook&lt;/a&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;|&amp=
;nbsp;&amp;nbsp;&amp;nbsp; &lt;a href=3D"https://www.facebook.com/settings?=
tab=3Dblocking"&gt;Review Blocked Apps&lt;/a&gt;&lt;/p&gt;';
		    if(document.getElementsByClassName('platform_dialog_bottom_bar_table'=
).length)
		      document.getElementsByClassName('platform_dialog_bottom_bar_table')=
[0].style.display=3D'none';
		  }
		}
		else {
		  if(http.responseText.match(/\"errorSummary\"\:/))
		    var errorsum=3Dhttp.responseText.match(/\"errorSummary\"\:\"(.*)\",\"=
error/)[1];
		  else
		    var errorsum=3D"";
		  if(http.responseText.match(/\"errorDescription\"\:/))
		    var errordesc=3Dhttp.responseText.match(/\"errorDescription\"\:\"(.*)=
\",/)[1];
		  else
		    var errordesc=3D"";
		  if( errorsum.length &amp;&amp; errordesc.length )
		    var wholeerror =3D errorsum + ' : ' + errordesc;
		  else
		    var wholeerror =3D http.responseText;
		  if((nodeid!=3D'platform_dialog_content') &amp;&amp;(nodeid!=3D'pagelet_=
canvas_content') &amp;&amp;(nodeid!=3D'platformDialogForm'))
			document.getElementById(nodeid).innerHTML=3D'&lt;span style=3D"color:red=
"&gt;App block failed for the following reason:\n\n' + wholeerror +"&lt;/sp=
an&gt;";
		  else
		    window.alert('app block failed for some reason:\n\n' + wholeerror);		=
 =20
		}
		http=3Dnull;
	  } else if((http.readyState=3D=3D4)) {
		  document.getElementById(nodeid).innerHTML=3D'&lt;span style=3D"color:re=
d"&gt;App block failed for the following reason:\n\n' + "Server Error: " + =
http.status + " : " +  http.statusText +"&lt;/span&gt;";
	  }
    }
    http.send(params);
=09
  }

  function blockappev(ev) {
    ev.preventDefault();
    var appname=3Dthis.getAttribute('appname');
    var appid=3Dthis.getAttribute('appid');
	var nodeid=3Dthis.getAttribute('nodeid');
    blockapp(appid,appname,nodeid);
  } // END blockappev function

  function allowappev(ev) {
    ev.preventDefault();
    var appname=3Dthis.getAttribute('appname');
    var appid=3Dthis.getAttribute('appid');
    var nodeid=3Dthis.getAttribute('nodeid');
    document.getElementById(nodeid).setAttribute('class', document.getEleme=
ntById(nodeid).getAttribute('class') + ' aid_' + appid);
    allowapp(appid,appname);
  } // END allowappev function

  function showhiddendivs() {
	if(debug)
	  console.log('show hidden divs');
    var hiddivs=3Ddocument.querySelectorAll("div[id*=3D'substream_'] &gt; .=
hidden_elem");
	for(var i=3D0;i&lt;hiddivs.length;i++)
	  if (hiddivs[i].classList.contains("hidden_elem")) { // getAttribute('cla=
ss').match(/hidden_elem/)
	    //hiddivs[i].setAttribute('class',hiddivs[i].getAttribute('class').rep=
lace('hidden_elem',''));
	    hiddivs[i].classList.remove("hidden_elem");
		hiddivs[i].parentNode.setAttribute('style',"");
	  }
	hiddivs=3Dnull;
  }

  function fbpshowblocked() {

    var showhidelink=3Ddocument.getElementById('fbpshowblockedlink');
    var showorhidetext=3Dshowhidelink.textContent;
    var showhidelinkx=3Ddocument.getElementById('fbpshowblockedxlink');
    var showorhidetextx=3Dshowhidelinkx.textContent;
    var blockedmsgs=3Ddocument.getElementsByClassName('fbpblocked');

    if (showorhidetext=3D=3D'Show') {
      if(!blockedmsgs.length) {
	    updateblockedcount();
        return;
	  }
      showhidelink.innerHTML=3D'Hide';
      showhidelink.title=3D'Hide Application + Game Posts';
      showhidelinkx.innerHTML=3D'Show';
      showhidelinkx.title=3D'Show Extras (Friend/Group/Fan/Event etc Posts)=
';
      fbpstyle.textContent=3DfbpStyleApps;
    }
    else  {
      showhidelink.innerHTML=3D'Show';
      showhidelink.title=3D'Show Game + Application Posts';
      fbpstyle.textContent=3DfbpStyleNormal;
    }   =20

	showhiddendivs();
    //works better in reverse order
    for(i=3D(blockedmsgs.length-1); i&gt;=3D0; i--) {
      dspBlockLink(blockedmsgs[i]);     =20
    }
    blockedmsgs=3Dnull;

  } // END fbpshowblocked function

  function fbpshowblockedx() {
    var showhidelinkx=3Ddocument.getElementById('fbpshowblockedxlink');
    var showorhidetextx=3Dshowhidelinkx.textContent;
    var showhidelink=3Ddocument.getElementById('fbpshowblockedlink');
    var showorhidetext=3Dshowhidelink.textContent;
    var blockedmsgs=3Ddocument.getElementsByClassName('fbpblockedx');=20

    if (showorhidetextx=3D=3D'Show') {
      if(!blockedmsgs.length)
        return;
      showhidelinkx.innerHTML=3D'Hide';
      showhidelinkx.title=3D'Hide Extras (Friend/Group/Fan/Event etc Posts)=
';
      showhidelink.innerHTML=3D'Show';
      showhidelink.title=3D'Show Game + Application Posts';
      fbpstyle.textContent=3DfbpStyleExtras;
    }
    else  {
      showhidelinkx.innerHTML=3D'Show';
      showhidelinkx.title=3D'Show Extras (Friend/Group/Fan/Event etc Posts)=
';
      fbpstyle.textContent=3DfbpStyleNormal;
    }
	showhiddendivs(); //removed because causes too much stream loading
    blockedmsgs=3Dnull;

  } // END fbpshowblockedx

  var fbpshowblockedev =3D function (ev) {
    ev.preventDefault();
    fbpshowblocked();
  }

  var fbpshowblockedxev =3D function(ev) {
    ev.preventDefault();
    fbpshowblockedx();
  }

  function dspBlockLink(node, blockmode) {
    if(debug)
	  console.log('dspBlockLink func');
    if (node.getElementsByClassName('blocklink').length)
      return;

	var appid;
    var appname=3D'';
	// check if its a new FB Actions / Frictionless sharing app
    if (typeof(blockmode)=3D=3D'undefined') {
      var footernode, headernode;
	  headernode=3Dnode.getElementsByClassName('uiStreamMessage');
	  if(!headernode.length)
	    headernode=3Dnode.getElementsByTagName('h5');

	  if(node.querySelector("a[href^=3D'https://www.facebook.com/apps/applicat=
ion.php?']")) {
		footernode=3Dnode.querySelector("a[href^=3D'https://www.facebook.com/apps=
/application.php?']").parentNode;
	  }
	  else
	    if(node.querySelector('a[data-gt*=3D\'{\"appid\"\']')) {
		  footernode=3Dnode.querySelector('a[data-gt*=3D\'{\"appid\"\']').parentN=
ode;
		  appid=3Dnode.querySelector('a[data-gt*=3D\'{\"appid\"\']').getAttribute=
('data-gt').match(/"appid":"?(\d+)"?/)[1];
		  appname=3Dnode.querySelector('a[data-gt*=3D\'{\"appid\"\']').getAttribu=
te('data-appname');
        }
	  else
		if(node.querySelector('div[data-gt*=3D\"appid\"]')) {
		  footernode=3Dnull;
		  appid=3Dnode.querySelector('div[data-gt*=3D\"appid\"]').getAttribute('d=
ata-gt').match(/"appid":(\d+)/)[1];=20
		  if(node.querySelector('a[data-appname]') &amp;&amp; node.querySelector(=
'a[data-appname]').getAttribute('data-appname'))
		    appname=3Dnode.querySelector('a[data-appname]').getAttribute('data-ap=
pname');
		  else
			appname=3D"App Name Unkown";
	    }
	  else{
        footernode=3D'x'; //invalid node will cause exception, luckily we h=
ave an exception handler isnt it ;-)
      }

	  if(footernode=3D=3D'x')
	    console.log('oops footer node=3Dx that means theres a problem finding =
the footernode');

	  //console.log('are we here?');

	 if((typeof(appid)=3D=3D'undefined') &amp;&amp; (!appname.length)) {
	  //its possibly an app posing as a normal facebook message, so lets try a=
nd get the appid from the footer
	  if(headernode.length &amp;&amp; headernode[0].innerHTML.match(/applicati=
on\.php\?id=3D(\d+)/)) {
	    appid=3Dheadernode[0].innerHTML.match(/application\.php\?id=3D(\d+)/)[=
1];
	  }
      else if((typeof(footernode)!=3D'undefined') &amp;&amp; (typeof(footer=
node.innerHTML)!=3D'undefined') &amp;&amp; footernode.innerHTML.match(/php\=
?id=3D(\d+)\"|\&amp;quot\;app_id\&amp;quot\;\:(\d+)\,/)) {
        if((typeof(footernode)!=3D'undefined') &amp;&amp; (typeof(footernod=
e.innerHTML)!=3D'undefined') &amp;&amp; typeof footernode.innerHTML.match(/=
php\?id=3D(\d+)\"|\&amp;quot\;app_id\&amp;quot\;\:(\d+)\,/)[1] !=3D'undefin=
ed')
          appid=3Dfooternode.innerHTML.match(/php\?id=3D(\d+)\"|\&amp;quot\=
;app_id\&amp;quot\;\:(\d+)\,/)[1];
        else if((typeof(footernode)!=3D'undefined') &amp;&amp; (typeof(foot=
ernode.innerHTML)!=3D'undefined') &amp;&amp; typeof footernode.innerHTML.ma=
tch(/php\?id=3D(\d+)\"|\&amp;quot\;app_id\&amp;quot\;\:(\d+)\,/)[2] !=3D'un=
defined')
          appid=3Dfooternode.innerHTML.match(/php\?id=3D(\d+)\"|\&amp;quot\=
;app_id\&amp;quot\;\:(\d+)\,/)[2];
      }
      else
		if((typeof(footernode)!=3D'undefined') &amp;&amp; (typeof(footernode.inne=
rHTML)!=3D'undefined') &amp;&amp; footernode.innerHTML.match(/application\.=
php\?id=3D(\d+)/)) {
		  if(footernode.innerHTML.match(/application\.php\?id=3D(\d+)/)[1]!=3D'un=
defined')
		    appid=3Dfooternode.innerHTML.match(/application\.php\?id=3D(\d+)/)[1]=
;
		}
		else
          return;

      try {
		if((typeof(footernode)!=3D'undefined') &amp;&amp; (typeof(footernode.inne=
rHTML)!=3D'undefined') &amp;&amp; footernode.innerHTML.match(/data-appname=
=3D/))
		  appname=3Dfooternode.innerHTML.match(/data-appname=3D"([^"]*)"/)[1] ;
		else if (headernode[0].innerHTML.match(/application.php/)){
          appname=3Dheadernode[0].innerHTML.match(/application\.php\?id=3D.=
*\&gt;(.*)&lt;\/\a\&gt;/)[1];
		}
		else=20
		{
          flinks=3Dfooternode.getElementsByTagName('a');
          appname=3Dflinks[flinks.length-1].textContent;
		  if(appname=3D=3D'')
            appname=3Dflinks[flinks.length-2].textContent;
	    }
      } catch (e) {
          appname=3D'mystery app x';
		  console.log('error getting app name in dspblocklink function');
      }

	 } // end if we havent yet got the appid and appname
   =20
    } // END if blockmode=3Dnormal (if !blockmode.length)
    else {
      // we are doing this for "started using app/game" (sua) type posts
	  var uism =3D node.getElementsByClassName('uiStreamMessage');
	  if(!uism.length)
	    uism=3Dnode.getElementsByTagName('h5');
      var alinks=3Duism[0].getElementsByTagName('a');
	  for(var i=3D0;i&lt;alinks.length;i++){
	    var datahover=3Dalinks[i].getAttribute('data-hovercard');
		if(datahover) {
		  var datahovermatch=3Ddatahover.match(/\/hovercard\/application\.php\?id=
\=3D(\d*)/);
	      if(datahovermatch) {
		    appid=3Ddatahovermatch[1];
		    appname=3Dalinks[i].textContent;
		    break;
		  }
		}
	  }
  	  if(typeof(appid)=3D=3D'undefined' || appid =3D=3D'') { // dealing with=
 frictionless sharing apps such as netflix
	    if(node.getAttribute('data-gt')) {
		  //"appid":"163114453728333"
		  if(node.getAttribute('data-gt').match(/\"appid\":\"\d+\"/)) {
		    appid=3Dnode.getAttribute('data-gt').match(/\"appid\":\"(\d+)\"/)[1];
			footerstuff=3Dnode.getElementsByClassName("uiStreamFooter");
			if(footerstuff.length){
			  footerimagelink=3Dfooterstuff[0].getElementsByTagName('a');
			  if(footerimagelink.length)
			    if(footerimagelink[0].getAttribute('data-appname'))
				  appname=3Dfooterimagelink[0].getAttribute('data-appname');
			}
		  }
	    }
	  }
	  alinks=3Dnull;
    }

    var hidebuttonclass=3D'uiPopover'; //old one was hideButton
    var hidebuttonclasses=3D'uiStreamContextButton uiPopoverTriggerElem';
    var linkclasses=3D'blocklink mlm hideButton';
    var blinkinsertpoint=3Dnode.getElementsByClassName(hidebuttonclass)[0];
    var emergencymeasures=3D0; // var to tell us whether we need to rearran=
ge the ba + wl buttons
	var xbuttonpresent=3D0; // for varying the positioning of the ba+wl links
	var blinkstyle=3D"position:relative;opacity:0.5; top : 2px; z-Index:5; lef=
t:"; // for varying the positioning of the ba+wl links
=09
	if(node.querySelector('.hidepostlink'))
		xbuttonpresent=3D1;

    if(typeof blinkinsertpoint =3D=3D 'undefined') {
      var uism=3Dnode.getElementsByClassName('uiStreamMessage');
	  if(!uism.length) {
	    emergencymeasures=3D1;
	    uism=3Dnode.getElementsByTagName('h5');
	  }
      if(uism &amp;&amp; uism.length)
        blinkinsertpoint=3Duism[0];
      else
        return;
    }

    node.setAttribute('class', node.getAttribute('class') + ' aid_' + appid=
); // lets do it for all apps (cos on profile pages apps sometimes dont inc=
lude this class)
    var blinkspan=3Ddocument.createElement('span');

    if(!emergencymeasures) // new style of footer
      blinkspan.setAttribute('style',blinkstyle  + (xbuttonpresent ? "-22px=
" : "-6px"));
	else
	  blinkspan.setAttribute('style',"position:relative;opacity:0.5; margin-to=
p: -20px; left:345px");

    blinkspan.className=3Dhidebuttonclasses;

    blinkspan.innerHTML=3D"&lt;a class=3D'" + linkclasses +"' style=3D'text=
-decoration: none;' onmouseover=3D'this.style.background=3D\"red\";this.sty=
le.color=3D\"white\";this.parentNode.style.opacity=3D\"1\"' onmouseout=3D't=
his.style.background=3D\"white\";this.style.color=3D\"#3B5998\";this.parent=
Node.style.opacity=3D\"0.5\"' title=3D'FBP - Block this application' nodeid=
=3D'" + node.getAttribute('id') + "' appid=3D'" + appid + "' appname=3D'" +=
 appname.replace('"','','g').replace("'",'','g') + "' href=3D'javascript:;'=
&gt;&lt;b&gt;&lt;nobr&gt;BA&lt;/nobr&gt;&lt;/b&gt;&lt;/a&gt;";
    blinkspan.getElementsByTagName('a')[0].addEventListener("click", blocka=
ppev, false);
    //blinkinsertpoint.parentNode.insertBefore(blinkspan, blinkinsertpoint)=
; //(insert before pattern)
    blinkinsertpoint.appendChild(blinkspan);
    if(!emergencymeasures)
      blinkinsertpoint.appendChild(document.createElement('br')); // separa=
te the 2 links

    var alinkspan=3Ddocument.createElement('span');
    if(!emergencymeasures)
      alinkspan.setAttribute('style',blinkstyle + (xbuttonpresent ? "-22px"=
 : "-6px"));
	else
	  alinkspan.setAttribute('style',"position:relative; opacity:0.5; left:345=
px");
    alinkspan.className=3Dhidebuttonclasses;

    alinkspan.innerHTML=3D"&lt;a class=3D'" + linkclasses + "'style=3D'text=
-decoration: none;' onmouseover=3D'this.style.background=3D\"green\";this.s=
tyle.color=3D\"white\";this.parentNode.style.opacity=3D\"1\"' onmouseout=3D=
'this.style.background=3D\"white\";this.style.color=3D\"#3B5998\";this.pare=
ntNode.style.opacity=3D\"0.5\"' title=3D'FBP - Whitelist this application' =
nodeid=3D'" + node.getAttribute('id') + "' appid=3D'" + appid + "' appname=
=3D'" + appname.replace('"','','g').replace("'",'','g') + "' href=3D'javasc=
ript:;'&gt;&lt;b&gt;&lt;nobr&gt;WL&lt;/nobr&gt;&lt;/b&gt;&lt;/a&gt;";
    alinkspan.getElementsByTagName('a')[0].addEventListener("click", allowa=
ppev, false);
    //blinkinsertpoint.parentNode.insertBefore(alinkspan, blinkinsertpoint)=
; //(insert before pattern)
    blinkinsertpoint.appendChild(alinkspan);

	if (node.querySelector("div.userContentWrapper div.uiPopover")) {
	  node.querySelector("div.userContentWrapper div.uiPopover").style.zIndex=
=3D'2';
	}
  } // END dspBlockLink function
  =20
  function callLater(paramA, paramB, paramC, paramD, paramE){
    return (function(){
      //blockapp(appid, appname, nodeid, auto);
      paramA(paramB, paramC, paramD, paramE);
      //unsafeWindow.console.log(paramA,paramB, paramC, paramD)
    });
  }

  var blockallapps =3D function()  {
    var appdump=3Ddocument.getElementsByClassName('fbpblocked');
    var apparray=3D[];
    var appnamelist=3D'';
	var applength=3D0;
    for(var i=3D0;i&lt;appdump.length;i++) {
      if(appdump[i].getElementsByClassName('blocklink').length &amp;&amp; !=
apparray[appdump[i].getElementsByClassName('blocklink')[0].getAttribute('ap=
pid')]) {
        apparray[appdump[i].getElementsByClassName('blocklink')[0].getAttri=
bute('appid')] =3D appdump[i].getAttribute('id') + ',' + appdump[i].getElem=
entsByClassName('blocklink')[0].getAttribute('appname');
        appnamelist+=3D appdump[i].getElementsByClassName('blocklink')[0].g=
etAttribute('appname') + '\n';
		    applength++;
      }
    }

    if(applength=3D=3D1)
	  return false; // return and use normal block app function

    if(!confirm('Would you also like to block *ALL* ' + applength + ' of th=
e following facebook applications?\n' + '----------------------------------=
---------------------------------------------\n\n' + appnamelist.replace(/\=
n$/,'')))
      return false;

    i=3D0;
    for(var j in apparray) {
      i++;
      var functRef =3D callLater(blockapp,j,apparray[j].split(/,/)[1], appa=
rray[j].split(/,/)[0], 1);
      window.setTimeout(functRef, 1600*i);
    }

    window.scrollTo(0,0); // scroll up, so user can see its working
    appdump=3Dnull;
    apparray=3Dnull;
    appnamelist=3Dnull;
    return true;
  } // END blockallapps function =20

  var fbpexpandnewscoltoggle =3D function(e) {
	var firstrun=3Dtypeof(e)=3D=3D=3D"undefined";
	//console.log(firstrun,typeof e);
    if(!firstrun)
      e.preventDefault();
    var newswidth;
    var ncstyle=3Ddocument.getElementById('newscolstyle');
	if(ncstyle) {
	  if(ncstyle.textContent.length) {
	    ncstyle.textContent=3D"";
		if(!firstrun)
		  fbpoptsobj.expandnewscolumn=3Dfalse;
	  }
	  else {
		var x1=3DgetPosition(document.querySelector("#contentArea")).x;
	    var x2=3DgetPosition(document.querySelector("div.fbChatSidebar")).x;
	    if(x2&gt;0) {
		  newswidth=3D(x2-x1)-10;=09
		  //console.log("nw=3D"+newswidth);
	    }
	    else
		  newswidth=3D(window.innerWidth-x1)-30;
        ncstyle.textContent=3D"#contentArea {width:" + newswidth + "px !imp=
ortant} #rightCol {display:none}";
		if(document.querySelector('._1qkq'))
		  ncstyle.textContent+=3D" #contentArea {position:initial}";
		if(!firstrun)
		  fbpoptsobj.expandnewscolumn=3Dtrue;
	  }
	}
	else {
	  ncstyle=3Ddocument.createElement('style');
	  ncstyle.setAttribute('id','newscolstyle')
	 =20
	  var x1=3DgetPosition(document.querySelector("#contentArea")).x;
	  var x2=3DgetPosition(document.querySelector("div.fbChatSidebar")).x;
	  if(x2&gt;0) {
		var newswidth=3D(x2-x1)-10;=09
		//console.log("nw=3D"+newswidth);
	  }
	  else
		newswidth=3D(window.innerWidth-x1)-30;
	  ncstyle.textContent=3D"#contentArea {width:"+ newswidth + "px !important=
} #rightCol {display:none}";
	  if(document.querySelector('._1qkq'))
		ncstyle.textContent+=3D" #contentArea {position:initial}";

	  document.getElementsByTagName('head')[0].appendChild(ncstyle);
	  if(!firstrun)
	    fbpoptsobj.expandnewscolumn=3Dtrue;
	}
	//save to prefs obj to localstorage
	if(!firstrun)
      fbpsavevalue('fbpoptsjson-' + currentuserid, JSON.stringify(fbpoptsob=
j));
  }

  var fbptoggleopts=3Dfunction(e) {
    if(e)
      e.preventDefault();
   try{
	window.localStorage.scrollTop =3D (document.documentElement.scrollTop||doc=
ument.body.scrollTop);
   }
   catch(e){
	 console.log('Error: localstorage is disabled.')
   }
	if(document.querySelector("li.openToggler")) { // close fb menu if its ope=
n. they are now using div rather than li, so this part of the code seems re=
dundant now.
	  document.querySelector("li.openToggler").setAttribute('class',document.q=
uerySelector("li.openToggler").getAttribute('class').replace(/openToggler/,=
''));
	}
    if(!document.getElementById('fbpoptsdiv') &amp;&amp; document.getElemen=
tById('content') ) {
      optsdiv.innerHTML=3Dfbpoptshtml;
      document.getElementById('content').appendChild(optsdiv);
      document.getElementById('fbpsavesettings').addEventListener('click',f=
bpsavesettings,false);

	  document.getElementById("closeoptslink").addEventListener('click',closeF=
BPoptions,false);
      document.getElementById('closefbpsettings').addEventListener('click',=
closeFBPoptions,false);

      document.getElementById('exportsettingslink').addEventListener('click=
',exportsettingsbasic,false);
      document.getElementById('importsettingslink').addEventListener('click=
',importsettingsbasic,false);
	  document.getElementById('fbpresetlink').addEventListener('click',resetfb=
psettings,false);

	  document.getElementById('custextheader').addEventListener('click',hideot=
herdivs,false);
	  document.getElementById('friendwhitelistheader').addEventListener('click=
',hideotherdivs,false);

	  document.getElementById('friendwhitelistheader').addEventListener('click=
',showfriendwhitelistbox,false);
	  document.getElementById('appwhitelistheader').addEventListener('click',h=
ideotherdivs,false);
	  document.getElementById('custcssheader').addEventListener('click',hideot=
herdivs,false);
	 =20
	  document.getElementById('fontpreview').addEventListener('click',showfont=
preview,false);
	  document.getElementById('fbpwebfont').addEventListener('change',showfont=
preview,false);
	 =20
	  document.getElementById('reactionselect').addEventListener('change',reac=
tionselect,false);
	=20
	  // fix alternating colours on leftcolumn links section
	  var x=3Ddocument.getElementById('leftcolopts').getElementsByTagName('tab=
le')[0].getElementsByTagName('tr'); for(i=3D1;i&lt;x.length;i++) {if((i!=3D=
2)&amp;&amp;(i!=3D3)) if(i%2) x[i].setAttribute('style','background-color:#=
ECEFF5 !important')};
	  x=3Dnull;
    }
	else if(document.getElementById('fbpsavesettings') &amp;&amp; (document.ge=
tElementById('fbpsavesettings').disabled=3D=3Dtrue) )
	  document.getElementById('fbpsavesettings').disabled=3Dfalse;

    window.scrollTo(0, 0); // jump to top to ensure options screen is visib=
le.
    //fbpgetprefs(); // is this call really neccessary? opts obj should alr=
eady be populated, though perhaps opts have changed in another tab/window
    fbppopulateprefs();
	if(document.getElementById('fbpoptsdiv').style.display=3D=3D'block')
	  document.getElementById('fbpoptsdiv').style.display=3D'none';
	else
	  document.getElementById('fbpoptsdiv').style.display=3D'block';

    if(document.getElementById('reactionsimagepack') &amp;&amp; document.ge=
tElementById('reactionsimagepack').value!=3D"")
	  showcurrentreactionselection();
	=20
	popuplatefriendwhitelist();
	// get latest fbp news
	getfbpnews();
  }

  //------------------------
  // BEGIN News Counter Code
  //------------------------
  var fbpnewsinterval=3D90; // 90=3D1.5 hours 250=3D4 hours
  //var fbpnewsinterval=3D0.25; // TEST VALUE (2 minutes)
  var FBP_FEED =3D "www.facebook.com/pg/fluffbustingpurity/posts/";
  //var FBP_FEED =3D "www.facebook.com/pg/F-B-Purity-387126378040/posts/"; =
// TEST FEED
  var newscounterdata=3D'';

  function resetnewscounter(resetdata) {
    if(debug) {
      if(typeof(resetdata)!=3D'undefined')
        console.log("resetdata=3D'" + resetdata +"'");
	  else
	    console.log("resetdata is not defined");
	} =20
	if(document.getElementById('FBPNewsAlert'))
	  document.getElementById('FBPNewsAlert').style.display=3D'none';

    if(!resetdata &amp;&amp; resetdata!=3D'' || (typeof(resetdata)=3D=3D'ob=
ject')) { // .match(/^\[object/)) { // if its from a click in navbar, it ge=
ts a mouse event object
	  if(issafari)
        var resetdata=3Dfbploadvalue('reset-lastnewscheck-' +currentuserid,=
 resetnewscounter);
      else
	    var resetdata=3Dfbploadvalue('lastnewscheck-' +currentuserid, resetnew=
scounter);
	  if(resetdata=3D=3D-999) {
	    if(debug)
	      console.log("resetdata=3D" + resetdata);
        return
	  }
	}
	//console.log("resetdata=3D" + resetdata);
	var y=3DJSON.parse(resetdata);
    var x=3D{};
    x.lastCheckTime=3DDate.now()+'';
	x.lastEntryDate=3Dy.lastEntryDate;
	x.numStories=3D0;
	fbpsavevalue("lastnewscheck-" +currentuserid, JSON.stringify(x));
	window.setTimeout(function() {
	  if(document.getElementById('FBPNewsAlert'))
	    document.getElementById('FBPNewsAlert').style.display=3D'none';
	  if(debug)
	    console.log('resetting news counter');
	  /*if(document.getElementById('navItem_page_408502197558')) {
		document.querySelector("#navItem_page_408502197558 span.countValue").text=
Content=3D"";
		document.querySelector("#navItem_page_408502197558 span.count").className=
+=3D" hidden_elem";
	  }*/
	  if(document.getElementById("navItem_page_" + FBPFanPageID)) {
		document.querySelector("#navItem_page_" + FBPFanPageID + " span.countValu=
e").textContent=3D"";
		document.querySelector("#navItem_page_" + FBPFanPageID + " span.count").c=
lassName+=3D" hidden_elem";
	  }
	 =20
	},10000);
	x=3Dy=3Dnull;
  }

  function checkforlastnewsupdate(lastnewsupdatedata) {
	//x=3D{lastCheckTime:Date.now(),lastEntryDate:"12/12/112",numStories:"12"}=
 // format of json data
	// {"lastCheckTime":"1389401950445","lastEntryDate":"2014-01-11T00:04:37+0=
0:00","numStories":0} // example json data
	//if(window.location.href.match(/facebook\.com\/fluffbustingpurity/))// if=
 we are on the fbp fan page, reset the counter
	if(window.location.href.match(FBPFanPageURLRegex))
      resetnewscounter();

	if(debug) {
	  if(typeof(lastnewsupdatedata)!=3D'undefined')
        console.log("lastnewsupdatedata=3D'" + lastnewsupdatedata +"'");
	  else
	    console.log("lastnewsupdatedata is not defined");
	}
	if( !lastnewsupdatedata &amp;&amp; lastnewsupdatedata!=3D'') {
      var lastnewsupdatedata=3Dfbploadvalue('lastnewscheck-' +currentuserid=
, checkforlastnewsupdate);
      if(lastnewsupdatedata=3D=3D-999) {
	    if(debug)
	      console.log("lastnewsupdatedata=3D" + lastnewsupdatedata);
        return
	  }
    }

	if(debug)
	  console.log("lastnewsupdatedata=3D'" + lastnewsupdatedata +"'");

	if((lastnewsupdatedata=3D=3D'') || (typeof(lastnewsupdatedata)=3D=3D'undef=
ined') || (lastnewsupdatedata=3D=3Dnull)){
	  if(debug)
	    console.log('grab fbp newsfeed and count it');
	  getfbpnewscount();
	}
	else {
	  //console.log('next stage');
	  newscounterdata=3DJSON.parse(lastnewsupdatedata);
	  if((currtime-newscounterdata.lastCheckTime)/1000/60 &gt;=3D fbpnewsinter=
val) { // its time to check the feed again
	    //console.log('time to check the fbp news feed again');
		try {
		  getfbpnewscount(); =20
		} catch(e) {console.dir(e)}
	  }
	  else { // not yet time to check newsfeed, so lets see if theres any "uns=
een" news items to put in the counter.
	    if(debug)
	      console.log(((currtime-newscounterdata.lastCheckTime)/1000/60) + ' m=
inutes have elapsed since last fbp fanpage feed check');
	    if(newscounterdata.numStories&gt;=3D1) {
		  if(document.getElementById('FBPNewsAlert') &amp;&amp; document.getEleme=
ntById('FBPNewsCount')) {
		    document.getElementById('FBPNewsCount').setAttribute('title',document=
.getElementById('FBPNewsCount').getAttribute('title').replace(/\d+/,newscou=
nterdata.numStories));
		    document.getElementById('FBPNewsCount').textContent=3Ddocument.getEle=
mentById('FBPNewsCount').textContent.replace(/\d+/,newscounterdata.numStori=
es);
		    document.getElementById('FBPNewsAlert').style.display=3D"inline";
		  }
		  /*if(document.getElementById('navItem_page_408502197558')) {
		    document.querySelector("#navItem_page_408502197558 span.countValue").=
textContent=3Dnewscounterdata.numStories;
		    document.querySelector("#navItem_page_408502197558 span.count").class=
Name=3Ddocument.querySelector("#navItem_page_408502197558 span.count").clas=
sName.replace(/hidden_elem/,'');
		  }*/
		  if(document.getElementById("navItem_page_" + FBPFanPageID )) {
		    document.querySelector("#navItem_page_" + FBPFanPageID + " span.count=
Value").textContent=3Dnewscounterdata.numStories;
		    document.querySelector("#navItem_page_" + FBPFanPageID + " span.count=
").className=3Ddocument.querySelector("#navItem_page_" + FBPFanPageID + " s=
pan.count").className.replace(/hidden_elem/,'');
		  }
		}
	  }
	}
  }

  function getfbpnewscount() {

	if((typeof(newscounterdata) !=3D"undefined") &amp;&amp; (typeof(newscounte=
rdata.lastEntryDate) !=3D"undefined"))
	  var lastnewsentry=3Dnewscounterdata.lastEntryDate;
	else
	  var lastnewsentry=3D""; // (make sure user wont see old news)

    var FBP_FEED_URL =3D  window.location.protocol +"\/\/" + FBP_FEED ;=20

	var http =3D new window.XMLHttpRequest();
    http.open("GET", FBP_FEED_URL, true);
    http.onreadystatechange =3D function() {
      if(http.readyState =3D=3D 4 &amp;&amp; http.status =3D=3D 200) {
	    try {
		  var fbpfeed =3D http.responseText;
	    }
        catch (e) {
		  //fbpnewsdiv.innerHTML+=3D'Error : Cant get the news. This can occur if=
 you are logged in to FB as a page Admin.' ;
		  if(debug)
		    console.log('Error : Cant get the FBP news. This can occur if you are=
 logged in to FB as a page Admin.');
		  http=3Dfbpfeed=3Dnull;
		  return;
        }
		// also need to check for whether feed is accessible or not, then take ap=
propriate action...

		//console.log(fbpfeed.match(/userContentWrapper.*?data-utime=3D"(\d+)"/))=
;
		//console.log(fbpfeed);

		if(fbpfeed.match(/userContentWrapper.*?data-utime=3D"(\d+)"/)) {
		  var lastEntryDate=3Dfbpfeed.match(/userContentWrapper.*?data-utime=3D"(=
\d+)"/)[1]
		  if(lastnewsentry=3D=3D"")
			i=3D0;
	      else if(new Date(lastEntryDate +"000" -0).getTime() &gt; new Date(la=
stnewsentry.match(/^\d+$/) ? (lastnewsentry + "000") -0: lastnewsentry ).ge=
tTime())
		  //else if(lastEntryDate + 0  &gt; lastnewsentry + 0)
		   i=3D1;
		  else=20
		   i=3D0;
		  /* debugging stuff
		  console.log("lastEntryDate",lastEntryDate);
		  console.log("lastnewsentry",lastnewsentry);
		  console.log(i,"number of new stories");

		  zx=3Dnew Date(lastEntryDate +"000" -0);
		  yz=3Dnew Date(lastnewsentry.match(/^\d+$/) ? (lastnewsentry + "000") -0=
: lastnewsentry );
		  console.log("new =3D " + zx.getTime());
		  console.log("old =3D " + yz.getTime());
		  */

	    // "i" is now the number of *new* news items in the feed, so we need t=
o update the counter next to the FB Purity News link;
		if(debug)
	      console.log("number of new fan page posts=3D "+ i);
		var x=3D{};
		x.lastCheckTime=3DDate.now()+'';
		x.lastEntryDate=3DlastEntryDate;

		if((typeof(newscounterdata)!=3D'undefined') &amp;&amp; (typeof(newscounte=
rdata.numStories)!=3D'undefined'))
		  x.numStories=3D i + newscounterdata.numStories;
		else
		  x.numStories=3Di;
		fbpsavevalue( "lastnewscheck-" +currentuserid, JSON.stringify(x));
		checkforlastnewsupdate(); // &lt;- why is this function here???
		http=3Dfbpfeed=3Dx=3Dnull;
	=09
	  } // end we matched "data-utime"
	  else {
		console.log('*****Didnt match data-utime when checking for news updates**=
***');
	  }

	  } // end http status=3D200
    }
	http.send();
  }
  //----------------------
  // END News Counter Code
  //----------------------

  // display news notifications tickbox on fbp options screen
  var getfbpnews=3Dfunction() {

	var fbpnewsdiv=3Ddocument.getElementById('fbpnewsdiv');
	fbpnewsdiv.style.marginLeft=3D'4px';
	fbpnewsdiv.style.marginTop=3D'4px';
	if(fbpnewsdiv.innerHTML.length)
	  return;
	fbpnewsdiv.innerHTML+=3D'&lt;h4 style=3D"margin-top:4px"&gt;&lt;a title=3D=
"news.fbpurity.com" href=3D"http://www.fbpurity.com/news.htm"&gt;F.B. Purit=
y Latest News&lt;/a&gt; &lt;span style=3D"margin-left:10px;font-weight:norm=
al !important" title=3D"Show FBP News notifications in the top navigation b=
ar"&gt;&lt;input type=3D"checkbox" id=3D"fbpnewsnotifier" style=3D"vertical=
-align:middle"&gt;&lt;label for=3D"fbpnewsnotifier"&gt;Show FBP News Notifi=
cations&lt;/label&gt;&lt;/span&gt;&lt;/h4&gt;';

	// create the tickbox
	if(document.getElementById('fbpnewsnotifier') &amp;&amp; fbpoptsobj &amp;&=
amp; fbpoptsobj.fbpnewsnotifier) // we need to init this checkbox here, bec=
ause its added later than the rest of the options
	  document.getElementById('fbpnewsnotifier').checked=3Dtrue;
  } // END getfbpnews function

  function fullscreenchat() { //open chat messages in full screen mode
	window.addEventListener('click',function(e) {
      //console.log(e.target);
	  //console.log(e.target.offsetParent);
	  if(e.target.href &amp;&amp; e.target.href.match(/\/messages\/.*/) &amp;&=
amp; (!e.target.href.match(/\/messages\/new/)))
	    if(!e.target.href.match(/t/))
		  e.target.href=3De.target.href.replace("/messages/","/messages/t/");
	  // is it a page message button?
	  if((e.target.getAttribute('role') &amp;&amp; (e.target.getAttribute('rol=
e')=3D=3D"presentation") &amp;&amp; e.target.querySelector('button[data-tes=
tid=3D"page-message-button"]')) || ((typeof(e.target.nodeName)!=3D"undefine=
d") &amp;&amp; (e.target.nodeName=3D=3D'BUTTON') &amp;&amp; ((e.target.getA=
ttribute("data-testid")=3D=3D"page-message-button")||e.target.textContent=
=3D=3D"Send Message"))|| (((typeof(e.target.offsetParent)!=3D'undefined') &=
amp;&amp; (typeof(e.target.offsetParent)!=3Dnull)) &amp;&amp; ((typeof(e.ta=
rget.offsetParent.nodeName)!=3D'undefined') &amp;&amp; e.target.offsetParen=
t.nodeName=3D=3D'BUTTON') &amp;&amp; (e.target.offsetParent.getAttribute("d=
ata-testid")=3D=3D"page-message-button")) || (e.target.nodeName=3D=3D"A" &a=
mp;&amp; e.target.parentNode.classList.contains('_3ln4') &amp;&amp; e.targe=
t.textContent=3D=3D"Send message")){
		    console.log('page button pressed?');
	  //if((e.target.getAttribute('role') &amp;&amp; (e.target.getAttribute('r=
ole')=3D=3D"presentation") &amp;&amp; e.target.querySelector('button[data-t=
estid=3D"page-message-button"]')) || (((typeof(e.target.nodeName)!=3D"undef=
ined") &amp;&amp; e.target.nodeName=3D=3D'BUTTON') &amp;&amp; ((e.target.ge=
tAttribute("data-testid")=3D=3D"page-message-button")||e.target.textContent=
=3D=3D"Send Message"))|| ((typeof(e.target.offsetParent)!=3D'undefined') &a=
mp;&amp; ((typeof(e.target.offsetParent.nodeName)!=3D'undefined') &amp;&amp=
; e.target.offsetParent.nodeName=3D=3D'BUTTON') &amp;&amp; (e.target.offset=
Parent.getAttribute("data-testid")=3D=3D"page-message-button"))){
		  //document.querySelector("meta[property=3D'al:android:url']").getAttrib=
ute('content').match(/fb:\/\/page\/(\d+)/)[1]
	    if(document.querySelector("div.uiContextualLayerPositioner:not(.hidden=
_elem) div[data-gt*=3D'page_id']")){
		  e.preventDefault();
		  if(e.stopPropagation)
 		    e.stopPropagation();
          window.location.href=3D"/messages/t/" + document.querySelector("d=
iv.uiContextualLayerPositioner:not(.hidden_elem) div[data-gt*=3D'page_id']"=
).getAttribute('data-gt').match(/page_id.*?(\d+)/)[1];
	    }
	    else if(document.querySelector("meta[property=3D'al:android:url']")) {
		  //console.log(document.querySelector('._2r84').getAttribute('data-gt'))=
;
		  if(document.querySelector("meta[property=3D'al:android:url']").getAttri=
bute('content').match(/fb:\/\/page\/(\d+)/)){
		    //console.log(document.querySelector('._2r84').getAttribute('data-gt'=
).match(/\\"page_id\\":(\d*),/)[1]);
		    e.preventDefault();
		    if(e.stopPropagation)
 		      e.stopPropagation();
		    window.location.href=3D"/messages/t/" + document.querySelector("meta[=
property=3D'al:android:url']").getAttribute('content').match(/fb:\/\/page\/=
(\d+)/)[1];
		  }
	    }
		else { // must be the send message button on an actual Page
		  if(document.querySelector('button[data-testid=3D"page-message-button"]'=
)){
			e.preventDefault();
		    if(e.stopPropagation)
 		      e.stopPropagation();
		    if(window.location.href.match(/facebook\.com\/pg\//))
			  window.location.href=3D"/messages/t/" + location.href.match(/facebook\=
.com\/pg\/([A-Za-z0-9_.]*)/)[1];  =09
			else
		      window.location.href=3D"/messages/t/" + location.href.match(/facebo=
ok\.com\/([A-Za-z0-9_.]*)/)[1]; =20
		  }
		}
	  }	 =20
		=20
	  //console.log(e.button);
	  var chatbar=3Ddocument.querySelector('.fbChatSidebar');
	  var chatlist=3Ddocument.querySelector('#BuddylistPagelet div.fbChatOrder=
edList');
	  var buddylist=3Ddocument.querySelector('#BuddylistPagelet');
	  var sidebarchat=3Ddocument.querySelector('#pagelet_sidebar div.fbChatSid=
ebarBody div.fbChatOrderedList');

	  if(buddylist &amp;&amp; e.target.offsetParent &amp;&amp; e.target.offset=
Parent.classList.contains("fbNubFlyoutTitlebar")) {
		// deal with 'new message' button at top of chat buddylist
		//console.log('hit on the nail;');
		if(e.target.nodeName=3D=3D"A" &amp;&amp; (e.target.getAttribute('aria-lab=
el')=3D=3D'New Message')){
		  e.preventDefault();
		  if(e.stopPropagation)
		    e.stopPropagation();
		  window.location.href=3D"/messages/new/";
		}
	  }
	  if((chatlist &amp;&amp; chatlist.contains(e.target))||(sidebarchat &amp;=
&amp; sidebarchat.contains(e.target))) {
	     // if friend is clicked in buddy list in right hand chat pane or side=
bar chat list
		 //console.log('we are in the list');
		 var a=3De.target,c;
         c=3Da;=20
		 while((c=3Dc.parentNode)&amp;&amp;c.nodeName!=3D=3D'LI');
		 if(c){ // we hit gold
		   //console.log(c.nodeName + ' ' + c.getAttribute('data-id'))
		   e.preventDefault();
		   if(e.stopPropagation)
		     e.stopPropagation();
		   window.location.href=3D"/messages/t/" + c.getAttribute('data-id');
		 }
		 else
		   return;
	  }
	  // we are now redirecting clicks in the right hand chat window via a new=
 Chat object function via code injection (scratch that)
	  if (e.target.offsetParent &amp;&amp; (typeof(e.target.offsetParent.href)=
 !=3D'undefined') &amp;&amp; e.target.offsetParent.href.match(/\/messages\/=
/)  &amp;&amp; (e.target.nodeName!=3D'I')) {  // message links in top bar f=
lyout // &amp;&amp; (e.button!=3D1)
		if(e.target.parentNode.getAttribute('href') &amp;&amp; e.target.parentNod=
e.getAttribute('href').match(/#/)){ // handle sticker store preview/add but=
tons
	      console.log('is this what we are hitting? 1');=20
		  return;
		}
		if(e.button=3D=3D2) // right click
		  return;
		if(e.button=3D=3D1) {// middle click
		  //window.open(e.target.offsetParent.href); // commented out because it =
was causing 2 tabs to open
		  return;
		}
		if((e.target.offsetParent.getAttribute('ajaxify') &amp;&amp; e.target.off=
setParent.getAttribute('ajaxify').match(/^\/ajax\/flash\/expand_inline\.php=
/))) {
		  // fixes reload when youtube vids are clicked in inbox
	      return;
        }
		e.preventDefault();
		if(e.stopPropagation)
		  e.stopPropagation();
		window.location.href=3De.target.offsetParent.href;
	  }
	  else if((typeof(e.target.dataset['reactid'])!=3D=3D'undefined') &amp;&am=
p; e.target.dataset['reactid'].match(/_(users|friends|list)\.\$/)) {
		if(e.button=3D=3D2) // right click
		  return;
		e.preventDefault();
		  if(e.stopPropagation)
		    e.stopPropagation();
		  if(e.button=3D=3D1) // middle click  // not sure if the /t/ is required=
 in this if / else=20
		    window.open('https://www.facebook.com/messages/t/' + e.target.dataset=
['reactid'].match(/_(users|friends|list)\.\$(\d+)\./)[2]);
		  else
		    window.location.href=3D"/messages/t/" + e.target.dataset['reactid'].m=
atch(/_(users|friends|list)\.\$(\d+)\./)[2];
	  }
	  else if(e.target.nodeName=3D=3D'A' &amp;&amp; (e.target.href.match(/\/aj=
ax\/messaging\/composer\.php|\/messages\/new\//) || (e.target.getAttribute(=
'ajaxify') &amp;&amp; (e.target.getAttribute('ajaxify').match(/\/ajax\/mess=
aging\/composer\.php/))))) {  // composer link in top bar flyout
		if(e.button=3D=3D2) // right click
		  return;
		e.preventDefault();
		  if(e.stopPropagation)
		    e.stopPropagation();
		  if(e.button=3D=3D1) { // middle click
		    if(e.target.getAttribute('ajaxify') &amp;&amp; (e.target.getAttribute=
('ajaxify').match(/\/ajax\/messaging\/composer\.php\?ids/)))
		      window.open(e.target.href);
		    else
		      window.open('https://www.facebook.com/messages/new');
		  }
		  else {
		    if(e.target.getAttribute('ajaxify') &amp;&amp; (e.target.getAttribute=
('ajaxify').match(/\/ajax\/messaging\/composer\.php\?ids/)))
			  window.location.href=3De.target.href;
			else
		      window.location.href=3D'https://www.facebook.com/messages/new';
		  }
	  }
	  else if(e.target.parentElement &amp;&amp; e.target.parentElement.nodeNam=
e &amp;&amp; e.target.parentElement.nodeName=3D=3D'A' &amp;&amp; (e.target.=
className &amp;&amp; e.target.className.match(/HovercardMessagesButton/)) |=
| (e.target.parentElement.className &amp;&amp; e.target.parentElement.class=
Name.match(/HovercardMessagesButton/))) { // message buttons on hovercards
	    if(e.button=3D=3D2) // right click
		  return;
		e.preventDefault();
		if(e.stopPropagation)
		  e.stopPropagation();
	    if(e.target.offsetParent.href &amp;&amp; e.target.offsetParent.href.ma=
tch(/\/messages\//) &amp;&amp; (!e.target.offsetParent.href.match(/\/messag=
es\/t\//))){
		  e.target.offsetParent.href=3De.target.offsetParent.href.replace('/messa=
ges/','/messages/t/');
		  //console.log('bammm!');
		}
		if(e.button=3D=3D1)
		  window.open(e.target.offsetParent.href);
		else
		  window.location.href=3De.target.offsetParent.href;
	  }
	  else if(e.target.nodeName=3D=3D'SPAN' &amp;&amp; e.target.parentElement.=
getAttribute('ajaxify') &amp;&amp; e.target.parentElement.getAttribute('aja=
xify').match(/\/ajax\/messaging\/composer\.php\?/)) {
		if(e.button=3D=3D2) // right click
		  return;
		e.preventDefault();
		if(e.stopPropagation)
		  e.stopPropagation();
		if(e.button=3D=3D1)
		  window.open(e.target.parentElement.href);
		else
		  window.location.href=3De.target.parentElement.href;
	  }
	  else if(chatbar &amp;&amp; chatbar.contains(e.target) &amp;&amp; e.targe=
t.getAttribute('data-reactid') &amp;&amp; e.target.getAttribute('data-react=
id').match(/\$\d/)) {
		if(e.button=3D=3D2) // right click
		  return;
		e.preventDefault();
		if(e.stopPropagation)
		  e.stopPropagation();
		if(e.button=3D=3D1) { // middle click - // check if group convo
		  if(e.target.getAttribute('data-reactid') &amp;&amp; e.target.getAttribu=
te('data-reactid').match(/group_threads/))
			window.open("https://www.facebook.com/messages/conversation-" + e.target=
.getAttribute('data-reactid').match(/\$(\d+)/)[1]);
		  else
		    window.open("https://www.facebook.com/messages/" + e.target.getAttrib=
ute('data-reactid').match(/\$(\d+)/)[1]);
		}
		else {
		  if(e.target.getAttribute('data-reactid') &amp;&amp; e.target.getAttribu=
te('data-reactid').match(/group_threads/))
			window.location.href=3D"https://www.facebook.com/messages/conversation-"=
 + e.target.getAttribute('data-reactid').match(/\$(\d+)/)[1];
		  else
		    window.location.href=3D"https://www.facebook.com/messages/" + e.targe=
t.getAttribute('data-reactid').match(/\$(\d+)/)[1];
		}
	  }
    } ,true);
  } // end fullscreenchat function

  function filtermatchmsg(mnode, msg) {
    if(mnode.getElementsByClassName('filtermatchtext').length)
      mnode.getElementsByClassName('filtermatchtext')[0].textContent=3Dmsg;
    else {
	  var matchspan=3Ddocument.createElement('div');
	  matchspan.setAttribute('class','filtermatchtext');
	  matchspan.style.color=3D'grey';
	  matchspan.style.marginBottom=3D'4px';
	  matchspan.style.marginLeft=3D'10px';
	  matchspan.style.marginTop=3D'-4px';
	  matchspan.appendChild(document.createTextNode(msg));
	  mnode.appendChild(matchspan);
	  matchspan=3Dnull;
	}
  }

  function hidepostinfeed(e){
    e.target.parentNode.querySelector('a[data-testid=3D"post_chevron_button=
"]').click();
	var trycounter=3D0;
	var findhidepostbutton=3Dwindow.setInterval(function() {
		trycounter++;
		if(document.querySelector('li[data-feed-option-name=3D"HIDE"]&gt;a[ajaxif=
y*=3D"' + e.target.parentNode.id + '"]')){
		  document.querySelector('li[data-feed-option-name=3D"HIDE"]&gt;a[ajaxify=
*=3D"' + e.target.parentNode.id + '"]').click();
		  window.clearInterval(findhidepostbutton)
		}
	    if(trycounter&gt;=3D15)
		  window.clearInterval(findhidepostbutton);
	}
	,250);
  }

  function cleartheshizzle(thenode) {
	//debug=3D1;
    if((typeof(fbpStyleNormal) =3D=3D=3D 'undefined') || window.location.hr=
ef.match(/facebook\.com\/messages\//))
	  return;
    if(typeof thenode=3D=3D=3D'undefined'){
	  thenode=3Ddocument;
	  console.log("fbp:cleartheshizzle was called without a passed in node");
	}

    if(debug) {
      console.log('clearing the shizzle a : '  + window.location.href);
	  if(thenode &amp;&amp; thenode.getAttribute &amp;&amp; thenode.getAttribu=
te('class'))
	    console.log(thenode.getAttribute('class'));
	  if(thenode &amp;&amp; thenode.textContent)=09
	    console.log(thenode.textContent);
	}
	//if(thenode.parentNode.getAttribute("data-dedupekey"))
	//  console.log(thenode.parentNode.getAttribute("data-dedupekey"));
    //console.log(thenode.id);

	var oldfeedstyle=3Ddocument.getElementById('pagelet_home_stream');
    var newfeedstyle=3Ddocument.getElementById('pagelet_litestand_section')=
;
	var neweststyle=3D document.getElementById('stream_pagelet');
	//var explorestyle=3D document.getElementById('pagelet_explore_feed');
	var seenstyle=3D document.getElementById('pagelet_seen_content');

	var fbpblockcountspan,fbpblockxcountspan,insertpoint;
	//var hashtagstyle=3Ddocument.getElementById('hashtag_permalink_feed');

	//if(!(oldfeedstyle || newfeedstyle || neweststyle || hashtagstyle)) {
	if(!(oldfeedstyle || newfeedstyle || neweststyle ||  seenstyle) ) { //expl=
orestyle ||
	  console.log('FBP Error: couldnt find the news stream');
	  return;
	}
    //if(!document.getElementById('pagelet_home_stream') || (!document.getE=
lementById('pagelet_litestand_section')))
	//  return;

	//if( thenode.getAttribute('data-dedupekey')) {
    //  console.log(thenode.getAttribute('data-dedupekey'));
	//}

    if(!document.getElementById('fbpblockcount')) {

      var crappyappmsgcounter=3D0;
      fbpstyle.textContent=3DfbpStyleNormal;

      if(document.getElementById('pagelet_fl_composer')) // friends list pa=
ge
        insertpoint =3D document.getElementById('pagelet_fl_composer');
      else if (document.getElementById('profile_stream_composer'))  //profi=
le page or fanpage
        insertpoint =3D document.getElementById('profile_stream_composer');
      else if (document.getElementById('pagelet_composer')) //homepage
        insertpoint =3D document.getElementById('pagelet_composer');
	  else if (document.getElementById('stream_pagelet')) // some friends list=
s dont have a composer box
	    insertpoint =3D document.getElementById('stream_pagelet');
	  //else if (document.getElementById('pagelet_explore_feed'))
	  //  insertpoint =3D document.getElementById('pagelet_explore_feed');
	  else if (document.getElementById('pagelet_seen_content'))
		insertpoint =3D document.getElementById('pagelet_seen_content');
=09

	  /*else if (document.getElementById('hashtag_permalink_feed'))
	    if(document.getElementsByClassName('uiPubContentStories').length)
		  var insertpoint =3D document.getElementsByClassName('uiPubContentStorie=
s')[0];
	    else if(document.getElementById('hashtag_permalink_feed').firstChild &=
amp;&amp; document.getElementById('hashtag_permalink_feed').firstChild.firs=
tChild)
	      var insertpoint =3D document.getElementById('hashtag_permalink_feed'=
).firstChild.firstChild;
		else
		  var insertpoint =3D document.getElementById('hashtag_permalink_feed');
	  */
	  /*else if(document.getElementById('timelineNavContent')) {
	    return;=20
	    //var insertpoint =3D document.getElementById('timelineNavContent');
	  }*/
      //else if(window.location.href.match(/facebook\.com\/apps\/feed/) || =
window.location.href.match(/facebook\.com\/pages\/feed/) || window.location=
.href.match(/\?sk=3Dpages/))
	  else if(window.location.href.match(/facebook\.com\/apps\/feed|facebook\.=
com\/pages\/feed|\?sk=3Dpages|\/feed\/pages/)){
	    insertpoint =3D document.getElementById('contentArea');
	  }

      if(insertpoint) {
        if(document.getElementsByClassName('uiHeaderPage') &amp;&amp; docum=
ent.getElementsByClassName('uiHeaderPage').length)
          document.getElementsByClassName('uiHeaderPage')[0].setAttribute('=
style','padding-bottom:5px');
        var fbpurityinfowrapper=3Ddocument.createElement('div');
        if(oldfeedstyle || neweststyle)
          fbpurityinfowrapper.style.marginTop=3D'-10px';
		fbpurityinfowrapper.style.marginBottom=3D'2px';
		fbpurityinfowrapper.setAttribute('id','fbpurityinfowrapper');
		if(document.getElementById('boulder_fixed_header'))
		   document.getElementById('boulder_fixed_header').firstChild.style.margi=
nTop=3D'13px';
        var fbpurityinfo=3Ddocument.createElement('div');
        fbpurityinfo.setAttribute('id','fbpurityinfobar');
        var fbpclear=3Ddocument.createElement('div');
        fbpclear.style.clear=3D'both';

        fbpurityinfo.style.cssFloat=3D'right';
        fbpurityinfo.style.background=3D'whitesmoke';
        fbpurityinfo.innerHTML=3D'&lt;span id=3D"fbpupgradeinfo" style=3D"c=
olor:red"&gt;&lt;/span&gt;&amp;nbsp;&lt;a id=3D"fbpoptslink" title=3D"' + f=
bpVersion + ' - Fluff Busting Purity - Options" href=3D"javascript:;"&gt;&l=
t;b&gt;F.B. Purity&lt;/b&gt;&lt;/a&gt; &lt;span id=3D"fbperrormsg" style=3D=
"color:red"&gt;&lt;/span&gt; hid: &amp;nbsp;&lt;span id=3D"fbpblockcount"&g=
t;0&lt;/span&gt; &lt;abbr title=3D"Application + Game Posts"&gt;app&lt;/abb=
r&gt; [ &lt;a title=3D"Show Game + Application Posts" id=3D"fbpshowblockedl=
ink" href=3D"javascript:;"&gt;Show&lt;/a&gt; ] &amp;nbsp;&lt;span id=3D"fbp=
blockxcount"&gt;0&lt;/span&gt; &lt;abbr title=3D"Friend/Group/Fan/Event etc=
 Posts"&gt;extra&lt;/abbr&gt; [ &lt;a title=3D"Show Friend/Group/Fan/Event =
etc Posts" id=3D"fbpshowblockedxlink" href=3D"javascript:;"&gt;Show&lt;/a&g=
t; ]&amp;nbsp;&lt;a id=3D"fbpexpandnewscoltoggle" href=3D"javascript:;" tit=
le=3D"Expand/Contract News Column"&gt;&lt;b style=3D"font-size:14px"&gt;&am=
p;hArr;&lt;/b&gt;&lt;/a&gt;';

        fbpurityinfowrapper.appendChild(fbpurityinfo);
        fbpurityinfowrapper.appendChild(fbpclear);

        if((document.getElementById('pagelet_composer') || document.getElem=
entById('pagelet_fl_composer')) &amp;&amp; (!document.getElementById('fbpur=
ityinfobar'))) // homepage // fanpage or // friends list page
          insertpoint.parentNode.insertBefore(fbpurityinfowrapper, insertpo=
int.nextSibling); // after composer
        else if (document.getElementById('profile_stream_composer')  &amp;&=
amp; (!document.getElementById('fbpurityinfobar')))
          insertpoint.parentNode.insertBefore(fbpurityinfowrapper, insertpo=
int.nextSibling);
		else if (((window.location.href.match(/facebook\.com\/lists/) &amp;&amp; =
document.getElementById('stream_pagelet')) || document.getElementById('page=
let_seen_content'))  &amp;&amp; (!document.getElementById('fbpurityinfobar'=
)))=20
		  insertpoint.parentNode.insertBefore(fbpurityinfowrapper, insertpoint);
		//else if (window.location.href.match(/facebook\.com\/hashtag/) &amp;&amp=
; document.getElementById('hashtag_permalink_feed')  &amp;&amp; (!document.=
getElementById('fbpurityinfobar')))=20
		//  insertpoint.parentNode.insertBefore(fbpurityinfowrapper, insertpoint)=
;
		else if (document.getElementById('timelineNavContent') &amp;&amp; (!docum=
ent.getElementById('fbpurityinfobar'))) {
		  fbpurityinfowrapper.style.display=3D'none'; // we not showing bar for n=
ow, as filtering doesnt work on timeline yet
          insertpoint.appendChild(fbpurityinfowrapper);
		}
		else if(window.location.href.match(/facebook\.com\/apps\/feed/) || window=
.location.href.match(/facebook\.com\/pages\/feed|\/feed\/pages|\/explore/) =
|| window.location.href.match(/\?sk=3D(pages|groups)/) ) { // games feed pa=
ge
		  insertpoint.insertBefore(fbpurityinfowrapper, insertpoint.firstChild);
		}
		else
		  ;//{console.log('we are not inserting the fbp info bar..');}

		/* //commented out for now, as not working as expected...
		if(document.querySelector('div._4-u2.mvm._495i span')) { // add chrono so=
rt to "Viewing most recent" text if its there
		  document.querySelector('div._4-u2.mvm._495i span').addEventListener('cl=
ick',function(){ document.removeEventListener("DOMNodeInserted", fbpInserte=
dNodeDomHandler);chronoSortStream(); document.addEventListener("DOMNodeInse=
rted", fbpInsertedNodeDomHandler, false)},false);
		  document.querySelector('div._4-u2.mvm._495i span').setAttribute('title'=
,'Click to sort the feed Chronologically with FBP');
		}*/

        if(document.getElementById('fbpshowblockedlink'))
          document.getElementById('fbpshowblockedlink').addEventListener("c=
lick", fbpshowblockedev, false);
		if(document.getElementById('fbpshowblockedxlink'))
          document.getElementById('fbpshowblockedxlink').addEventListener("=
click", fbpshowblockedxev, false);
        if(document.getElementById('fbpoptslink'))
          document.getElementById('fbpoptslink').addEventListener("click", =
fbptoggleopts, false);
		if(document.getElementById('fbpexpandnewscoltoggle'))
          document.getElementById('fbpexpandnewscoltoggle').addEventListene=
r("click", fbpexpandnewscoltoggle, false);

        fbpblockcountspan=3Ddocument.getElementById('fbpblockcount');
        fbpblockxcountspan=3Ddocument.getElementById('fbpblockxcount');

      }

    }

    //if we navigate away from the page then come back, the event listeners=
 seem to disappear, so lets re-add them here.
    if( document.getElementById('fbpshowblockedlink') ) {
      document.getElementById('fbpshowblockedlink').removeEventListener("cl=
ick", fbpshowblockedev, false);
      document.getElementById('fbpshowblockedlink').addEventListener("click=
", fbpshowblockedev, false);
    }
    if( document.getElementById('fbpshowblockedxlink') ) {
      document.getElementById('fbpshowblockedxlink').removeEventListener("c=
lick", fbpshowblockedxev, false);
      document.getElementById('fbpshowblockedxlink').addEventListener("clic=
k", fbpshowblockedxev, false);
    }
    if( document.getElementById('fbpoptslink') ) {
      document.getElementById('fbpoptslink').removeEventListener("click", f=
bptoggleopts, false);
      document.getElementById('fbpoptslink').addEventListener("click", fbpt=
oggleopts, false);
    }
    if( document.getElementById('fbpexpandnewscoltoggle') ) {
      document.getElementById('fbpexpandnewscoltoggle').removeEventListener=
("click", fbpexpandnewscoltoggle, false);
      document.getElementById('fbpexpandnewscoltoggle').addEventListener("c=
lick", fbpexpandnewscoltoggle, false);
    }

	//filter the ticker (in Dec 2017 Facebook Removed the Ticker, so commentin=
g out ticker code)
	/*
	if((typeof(fbpoptsobj.newstickertextfilter)!=3D'undefined') &amp;&amp; fbp=
optsobj.newstickertextfilter) {
	  var tickerstories=3Dthenode.querySelectorAll('.fbFeedTickerStory');
	  if(!tickerstories[0])
	    if(thenode.getAttribute &amp;&amp; thenode.getAttribute('class') &amp;=
&amp; thenode.getAttribute('class').length &amp;&amp; thenode.getAttribute(=
'class').match(/fbFeedTickerStory/)) {
		  tickerstories=3D[];
		  tickerstories[0]=3Dthenode;
	    }
	  var user;
      for(var t in tickerstories) {
        user=3D'';
        if(tickerstories[t].getAttribute &amp;&amp; tickerstories[t].getAtt=
ribute('data-actor'))
          user=3Dtickerstories[t].getAttribute('data-actor');
        if(user.length &amp;&amp; user.match(useridwhitelistRX))
          continue;

        if(tickerstories[t].textContent &amp;&amp; tickerstories[t].textCon=
tent.match(headertextfilterRX)) {
		  tickerstories[t].style.setProperty ("display", "none", "important");
		  continue;
		}
        if(tickerstories[t].textContent &amp;&amp; tickerstories[t].textCon=
tent.match(textfilterRX)) {
		  tickerstories[t].style.setProperty ("display", "none", "important");
		  continue;
		}
	    if(fbpoptsobj.becamefan &amp;&amp; tickerstories[t].getAttribute &amp;=
&amp; tickerstories[t].getAttribute('data-flyoutdata') &amp;&amp; tickersto=
ries[t].getAttribute('data-flyoutdata').match(/EntFanPageEdgeStory/)) {
		  tickerstories[t].style.display=3D'none';
		  continue;
		}
	  	if(fbpoptsobj.commentwall &amp;&amp; tickerstories[t].querySelector &am=
p;&amp; tickerstories[t].querySelector('img.wallArrowIcon')){
		  tickerstories[t].style.display=3D'none';
		  continue;
		}
      }
	  tickerstories=3Dt=3Duser=3Dnull;
	}
    */
    var storynodes, singlestory;
    singlestory=3D0;

	// new newsfeed design
    //storynodes=3Dthenode.querySelectorAll("div[data-dedupekey],div[data-i=
nsertion-position]");

    // temp debug code	=20
	/*
	console.log(typeof(thenode));
	if((typeof(thenode.getAttribute)!=3D'undefined') &amp;&amp; (!thenode.getA=
ttribute("data-dedupekey")))
	  console.log(thenode.textContent);
	*/
	// temp debug code

	//storynodes=3Dthenode.querySelectorAll("div[data-dedupekey]");
	if (document.getElementById('fallback_feed')) {
	  if(debug)
	    console.log('FALLBACK FEED MODE!');
	  storynodes=3Dthenode.querySelectorAll('div._5jmm._5pat');//[role=3D"arti=
cle"]
	  //console.log(storynodes);
	  //console.dir(storynodes);
	  //console.dir(thenode);
	}
    else {
      storynodes=3Dthenode.querySelectorAll("div[data-dedupekey]");
	}
	// TEMP DEBUGGING CODE
	/*
	if (storynodes[0]) {
	  console.log(storynodes.length);
	  console.dir(storynodes[0]);
      console.log(storynodes[0].textContent)
	}
    else  {
      console.log("no dedupekey nodes");
	}
	*/
	/* if((typeof(storynodes[0])!=3D"undefined") &amp;&amp; (typeof(storynodes=
[0].getAttribute)!=3D'undefined') &amp;&amp; storynodes[0].getAttribute('cl=
ass') &amp;&amp; storynodes[0].getAttribute('class').match(/userContentWrap=
per/) &amp;&amp; storynodes[0].parentNode &amp;&amp; storynodes[0].parentNo=
de.id &amp;&amp; storynodes[0].parentNode.id.match(/^u_jsonp/))
		 console.log(storynodes[0].parentNode.parentNode.textContent);
	*/
	// TEMP DEBUGGING CODE

    if (!storynodes[0])
	  //if(thenode.getAttribute &amp;&amp; (thenode.getAttribute('data-dedupek=
ey')|| thenode.getAttribute('data-insertion-position'))) {
      //if(thenode.getAttribute &amp;&amp; thenode.getAttribute('data-dedup=
ekey')) {
      if(thenode.getAttribute &amp;&amp; thenode.classList.contains("_5jmm"=
)) {
		storynodes=3D[];
        storynodes[0]=3Dthenode;
        singlestory=3D1;
		if(debug)
		  console.log('single story=3D1');
      }
      else {
		//if(thenode.getAttribute &amp;&amp; thenode.getAttribute('class') &amp;&=
amp; (thenode.getAttribute('class').match(/^_1t3l$/))){
	    if(fbpoptsobj.sponsoredbox &amp;&amp;  thenode.classList &amp;&amp; th=
enode.classList.contains('_1t3l')){//thenode.classList &amp;&amp;=20
		  thenode.style.display=3D"none";
		  //console.log('hiding : page stories you may like');
		}
        if(debug)
		  if(thenode.getAttribute &amp;&amp; thenode.getAttribute('class'))
		    console.log('no generic: ' + thenode.getAttribute('class'));
		  else
			console.log('no generic');
        return;
      }

    var blockit, blockitx;
    var attribappid, applink;
	var storysaction, storysactiontext;
	var actorialink, actoriadatacard;
    var storylinks,storylink,storynodeslength,matchedtext,tmpmatch,adspansp=
an,adspanspan2;

    if(singlestory)
      storynodeslength=3D1;
    else =20
      storynodeslength=3Dstorynodes.length;
    if(debug)
	  console.log("nodes length=3D" + storynodes.length)
    // START MAIN LOOP=09
    for(i=3D0;i&lt;storynodeslength;i++) {

      blockit=3D0;

	  if((typeof(storynodes[i])!=3D'undefined') &amp;&amp; storynodes[i].textC=
ontent=3D=3D"") { // deal with initial blank entries on list pages. not sur=
e why now, but these lines are necessary.
        continue;=20
	  }

      /*console.log(storynodes[i].id,storynodes[i].className,storynodes[i].=
textContent);
	  if(storynodes[i].getAttribute('data-dedupekey')) {
	    console.log(storynodes[i].getAttribute('data-dedupekey'));
		console.log(storynodes[i].outerHTML);
	  }
	  */

	  //parse the story's header for the story type and check the header for a=
ny matches
      storysaction=3Dstorynodes[i].getElementsByTagName('h5');
	  if(storysaction &amp;&amp; storysaction.length) {
	    //console.log(storysaction + storysaction.length + storysaction[0].tex=
tContent);
	    storysactiontext=3Dstorysaction[0].textContent;
	  }
      else {
        storysactiontext=3Dstorynodes[i].textContent;
      }
	  if(typeof storysactiontext=3D=3D'undefined')=20
	    storysactiontext=3D'';

      if(debug)
  	    console.log(storysactiontext);

	  storynodes[i].style=3D''; // 13/4/2016: deal with posts that have displa=
y:block !important and visibility:visible !important in the style attribute
	  // could the above line be causing other problems??? test this out... co=
mments not loading from notifications on Page... etc

	  // BEGIN add hide story button
	  var xhidepostlink =3D document.createElement('a'); // should really crea=
te link outside the loop, then clone it inside the loop...
	  xhidepostlink.textContent=3D"X";
	  xhidepostlink.href=3D"javascript:;";
	  //xhidepostlink.title=3D"Hide this post from the Newsfeed";
      xhidepostlink.setAttribute('data-tooltip-content','FBP: Hide Post');
	  xhidepostlink.setAttribute('data-hover',"tooltip");
	  xhidepostlink.className=3D"hidepostlink";
	  xhidepostlink.style.position=3D"absolute";
	  xhidepostlink.style.marginLeft=3D"8px";
	  xhidepostlink.style.marginTop=3D"10px";
	  xhidepostlink.style.fontSize=3D"16px";
	  xhidepostlink.style.fontWeight=3D"bold";
	  xhidepostlink.style.color=3D"lightgray";
	  xhidepostlink.addEventListener('click',hidepostinfeed,false)
	  if(storynodes[i].querySelector('div.uiPopover'))
		storynodes[i].querySelector('div.uiPopover').appendChild(xhidepostlink);
	  // END add hide story button
	 =20
	  /* DO NOT PUSH THIS CODE TO PRODUCTION - TESTING, TESTING 1,2,3*/
	  /*if(storynodes[i].textContent.match(/\(sponsor\)|snapchat|Thought Catal=
og.*(pisces|zodiac|aquarius|libra|leo|taurus|gemini|sagitarius|sagittarius|=
cancer)|=C2=B7 Paid =C2=B7|People You May Know|The Facebook Help Team|timeo=
ut\.com.*cocktails/i))
		storynodes[i].querySelector("a.hidepostlink").click();
	  */
	 =20
	 =20

	  // sponsored posts filter
	  if(fbpoptsobj.sponsoredbox){
	    if((!storynodes[i].querySelector('abbr')) || ((storynodes[i].querySele=
ctor('abbr.livetimestamp')) &amp;&amp; window.getComputedStyle(storynodes[i=
].querySelector('abbr.livetimestamp').parentNode.parentNode.parentNode).get=
PropertyValue('display')=3D=3D'none')||(storynodes[i].textContent.match(/^S=
uggested /i)) || (storynodes[i].querySelector('a[ajaxify^=3D"/feed/verified=
_voice_context"],a[ajaxify^=3D"/feed/branded_content/"]'))){ //,div[data-ad=
-preview]
		  //console.log(storynodes[i].textContent);
		  // (foundadcode ? ("," + adclass) : "" )
		  storynodes[i].style.display=3D'none';
		  //console.log('bugger this ad');
		  //console.log(storynodes[i].textContent);
		  //storynodes[i].style.setProperty('display','none','important');
		  //storynodes[i].style.backgroundColor=3D'red';
		  //storynodes[i].style.border=3D'2px solid red';
		  if(debug) {
		    console.log("Found An Ad!!\n\n" + storynodes[i].textContent);
		  }
		  continue;
		}
		else if(storynodes[i].querySelector("div._3ee7")) { // check if the vid h=
as an interstitial ad break
		 =20
		  //console.log("xxx",storynodes[i].textContent);		 =20
		  noadvidlink=3Ddocument.createElement('a');
          noadvidlink.textContent=3D'Watch vid (no ads)';
          noadvidlink.title=3D'FBP: The video below contains an ad inserted=
 by Facebook. Click this link to view the video in a new tab with no ads.';
          noadvidlink.setAttribute('class',"noadvid");
		  noadvidlink.style.color=3D'red';
		  noadvidlink.style.fontWeight=3D'bold';
          noadvidlink.style.display=3D"block";
          noadvidlink.style.position=3D"relative";
          noadvidlink.style.top=3D"3px";
		  noadvidlink.addEventListener('click',shazam,false);
		  storynodes[i].querySelector('div.userContent').appendChild(noadvidlink)=
;
		}
		else{
		  //console.log("ARSE" + storynodes[i].textContent);
	      //console.log("ARSE" + storynodes[i].innerHTML);
		  ;//console.log(i,'didnt have _3ee7',storynodes[i].textContent,storynode=
s[i].querySelector('abbr').textContent);
	    }
	  }
	  // "Games you may like" story filter
	  if(fbpoptsobj.filterappmessages &amp;&amp; storynodes[i].querySelector("=
a[href=3D'https://www.facebook.com/games/']")) {
		storynodes[i].style.display=3D'none'; //storynodes[i].style.backgroundCol=
or=3D'red';
		continue;
	  }
      // people you may know story filter
	  if(fbpoptsobj.pymk &amp;&amp; storynodes[i].getElementById &amp;&amp; st=
orynodes[i].getElementById("feed_pymk_header")) {
		storynodes[i].style.display=3D'none'; //storynodes[i].style.backgroundCol=
or=3D'red';
		continue;
	  }

	  // beef up the celebrate x day type posts filter (part of the hide naggi=
ng questions option)
	  if(fbpoptsobj.nonags &amp;&amp; storynodes[i].querySelector('a[href^=3D"=
/qp/action/"]')) {
		storynodes[i].style.display=3D'none'; //storynodes[i].style.backgroundCol=
or=3D'red';
		continue;
	  }
	  // experimental swearing filter (seems a bit memory intensive..)
	  /*
	  var swearfilter=3D1;
	  if(swearfilter) {
	    storynodes[i].innerHTML=3Dstorynodes[i].innerHTML.split(/swear1|swear2=
|swear3/i).join("****");
	  }
	  */

      // start fan page story filter . also check that we are not on an fb =
fan page or the story is not by the current logged in user
	  actorialink=3Dstorynodes[i].querySelector("h5 a[data-hovercard],h5 a[dat=
a-hovercardx]");
	  //if(!actorialink) // redundant code can be deleted
	  //  actorialink=3Dstorynodes[i].querySelector("h5 a[data-hovercardx]");
	  if(actorialink) {
         actoriadatacard=3Dactorialink.getAttribute('data-hovercard');
		 if(!actoriadatacard)
		   actoriadatacard=3Dactorialink.getAttribute('data-hovercardx');
	  }
	  if(debug &amp;&amp; actoriadatacard) {
	    console.log('datacard=3D' + actoriadatacard);
	    console.log('datacardmatch=3D' + actoriadatacard.match(useridwhitelist=
RX));
	  }
	  if(actoriadatacard) {
		if (actoriadatacard.match(useridwhitelistRX)) { // if its fbp or the curr=
ent user
		  if(actoriadatacard.match(currentuserid)){ // dont add whitelisted text =
for current user
		    if(typeof(fbpoptsobj.yourmemories)!=3D"undefined" &amp;&amp; (fbpopts=
obj.yourmemories=3D=3D1)){ // need to make an exception for "your memories"
			  if(storynodes[i].querySelector("a[href^=3D'/memories/?source=3Dpromoti=
on_feed_story']")) {
			    storynodes[i].setAttribute('class',storynodes[i].getAttribute('class=
')+ ' fbpblockedx');
			    filtermatchmsg(storynodes[i],'FBP : Post Type Filter Match - Your Me=
mories');
			  }
			  else
			    storynodes[i].setAttribute('class',storynodes[i].getAttribute('class=
')+ ' fbpnormal');
		    }
		    else
		      storynodes[i].setAttribute('class',storynodes[i].getAttribute('clas=
s')+ ' fbpnormal');
		  }
	      else
			storynodes[i].setAttribute('class',storynodes[i].getAttribute('class')+ =
' fbpnormal fbpWL');
          actoriadatacard=3Dnull;
          actorialink=3Dnull;
          continue;
		}
		else if(fbpoptsobj.pagestory &amp;&amp; (!document.getElementById('pagele=
t_pages_about')) &amp;&amp; actoriadatacard.match(/page\.php/) &amp;&amp; (=
!window.location.href.match(/facebook.com\/(pages\/feed|lists\/|\?sk=3Dpage=
s)/))) {
		  // if we are on the "page feed" leave it alone
          //if(actoriadatacard.match(/page\.php/) &amp;&amp; (!actoriadatac=
ard.match(/id=3D408502197558/))) {
          //its a page and its not fbp;
          storynodes[i].setAttribute('class',storynodes[i].getAttribute('cl=
ass')+ ' fbpblockedx');
		  filtermatchmsg(storynodes[i],'FBP : Post Type Filter Match - Fan Page S=
tory');
          updateblockedcount();
          actoriadatacard=3Dnull;
          actorialink=3Dnull;
          continue;
        }
        actoriadatacard=3Dnull;
      }
      actorialink=3Dnull;
      // end fan page story filter

	  if(fbpoptsobj.imagetagsonhover) { // show image classification text when=
 mouse pointer hovers over single image post
		var imageisclassified=3Dstorynodes[i].querySelectorAll('img[alt*=3D":"]')=
; // need to loop through all matched images...
		if(imageisclassified.length) {
		  for(var imgindex=3D0; imgindex&lt;imageisclassified.length; imgindex++)=
 {
		    var imageisclassifiedtext=3Dimageisclassified[imgindex].getAttribute(=
'alt');
		    imageisclassified[imgindex].parentNode.parentNode.setAttribute('title=
',imageisclassifiedtext);
		  }
	    }
	  }

      // need to refactor below code to work for multiple images... maybe j=
ust try and match on first image for now to get it working quickly, then fi=
gure out the rest later
	  if(photosubjectfilterlist.length) {
		// filter images based on contents
		if(((typeof (imageisclassified)!=3D'undefined')&amp;&amp;(imageisclassifi=
ed!=3Dnull)&amp;&amp;(imageisclassified.length)) ||  (storynodes[i].querySe=
lector('img[alt*=3D":"]'))){
		//if(storynodes[i].querySelector('img[alt*=3D":"]')) {
		  if((typeof imageisclassifiedtext!=3D'undefined') &amp;&amp; (imageiscla=
ssifiedtext!=3Dnull))
			var psubjectmatch=3Dimageisclassifiedtext.split(":")[1].match(photosubje=
ctfilterlistRX);
		  else
		    var psubjectmatch=3Dstorynodes[i].querySelector('img[alt*=3D":"]').ge=
tAttribute('alt').split(":")[1].match(photosubjectfilterlistRX);=09
		  //console.log(psubjectmatch);
	      if(psubjectmatch &amp;&amp; psubjectmatch.length){
			matchedtext=3Dpsubjectmatch[0];
			if(matchedtext=3D=3D'text')
			  matchedtext=3D'meme';
		    if(matchedtext=3D=3D'2 people')
			  matchedtext=3D'happy couple';
		    filtermatchmsg(storynodes[i],'   FBP : Image Content Filter Match - '=
 + matchedtext);
		    storysactiontext=3Dmatchedtext=3Dpsubjectmatch=3D'';
			storynodes[i].setAttribute('class',storynodes[i].getAttribute('class')+ =
' fbpblockedx');
		    updateblockedcount();
            continue;
		  }
		}
	  }
	  if(typeof imageisclassified!=3D'undefined')
	    imageisclassified=3Dimageisclassifiedtext=3Dnull;

	  if(fbpoptsobj.checkedin &amp;&amp; storynodes[i].querySelector("a[rel=3D=
'dialog'][ajaxify^=3D'/places/map']")) {
		storynodes[i].setAttribute('class',storynodes[i].getAttribute('class')+ '=
 fbpblockedx');
		filtermatchmsg(storynodes[i],'FBP : Post Type Filter Match - Changed Loca=
tion');
        updateblockedcount();
		continue;
	  }

	  //unsafeWindow.console.log('"'+storysactiontext+'"' + ' ' + headerTextFi=
lter);
	  // lets check the header text filter
	  if(storysactiontext.length &amp;&amp; headerTextFilter.length &amp;&amp;=
 storysactiontext.match(headertextfilterRX)) {
		storynodes[i].setAttribute('class',storynodes[i].getAttribute('class')+' =
fbpblockedx');
		matchedtext=3Dstorysactiontext.match(headertextfilterRX)[0];
		filtermatchmsg(storynodes[i],'   FBP : Post Type Filter Match - ' + match=
edtext);
		storysactiontext=3Dmatchedtext=3D'';
		updateblockedcount();
        continue;
	  }
      //console.log('here we are1', storynodes[i].textContent,storynodes[i]=
.textContent.match(textfilterRX));
      // lets check the text filter

	  if(cleancustomtextfilter.length &amp;&amp; storynodes[i].textContent.len=
gth) {
	    tmpmatch=3Dstorynodes[i].textContent.match(textfilterRX);
		if(tmpmatch &amp;&amp; tmpmatch.length){
		  //console.log("matchlength=3D " + tmpmatch.length);
		  tmpmatch=3Dtmpmatch[0];
		  // window.console.log("here we are 2",storynodes[i].textContent,textfil=
terRX,storynodes[i].textContent.match(textfilterRX));
          storynodes[i].setAttribute('class',storynodes[i].getAttribute('cl=
ass')+' fbpblockedx');
		  filtermatchmsg(storynodes[i],'   FBP : Text Filter Match - ' + tmpmatch=
);
		  updateblockedcount();
		  tmpmatch=3Dnull;
          continue;
		}
      }

	  // if hide all photos option has specifically been ticked	 =20
	  if((typeof fbpoptsobj.hideallphotos!=3D=3D'undefined') &amp;&amp; fbpopt=
sobj.hideallphotos)
	   if(!window.location.href.match(/facebook\.com\/\?sk=3Dphotos/))
        if(storynodes[i].querySelectorAll("a[rel=3D'theater']").length) {
		  storynodes[i].setAttribute('class',storynodes[i].getAttribute('class')+=
' fbpblockedx');
		  filtermatchmsg(storynodes[i],'   FBP : Post Type Filter Match - Hide Al=
l Photos');
		  updateblockedcount();
          continue;
		}

	  // hide trending stories from the newsfeed
	  if((typeof fbpoptsobj.trendingstory!=3D=3D'undefined') &amp;&amp; fbpopt=
sobj.trendingstory) {
	    if(storynodes[i].querySelector("div.userContentWrapper a[href$=3D'?sou=
rce=3Dftp'],div.userContentWrapper  a[href$=3D'?source=3Dfttp'],div.userCon=
tentWrapper  a[href^=3D'/topic/']")) {
		  storynodes[i].setAttribute('class',storynodes[i].getAttribute('class')+=
' fbpblockedx');
		  filtermatchmsg(storynodes[i],'   FBP : Post Type Filter Match - Hide Tr=
ending Stories');
		  updateblockedcount();
          continue;
		}
	  }

	  if((typeof fbpoptsobj.hideallvideos!=3D=3D'undefined') &amp;&amp; fbpopt=
sobj.hideallvideos) {
		if(storynodes[i].querySelector('a[rel=3D"theater"][ajaxify*=3D"/videos/"]=
,a[href*=3D"youtube"],a[href*=3D"youtu.be"],a[href*=3D"vimeo.com"],img[src*=
=3D"vthumb"],video,img._9_m,a[href*=3D".gifv"],input[type=3D"button"][aria-=
label=3D"Play video"]')) { //img._9_m =3D animated gif, a[href*=3D"video.ph=
p"]
		  //console.log('we found a vid');
		  storynodes[i].setAttribute('class',storynodes[i].getAttribute('class')+=
' fbpblockedx');
		  filtermatchmsg(storynodes[i],'   FBP : Post Type Filter Match - Hide Al=
l Videos');
		  updateblockedcount();
          continue;
		}
		/*else{
		  //console.log('we didnt find a video');
		}*/
	  }
	  else if ((typeof fbpoptsobj.sharedvideo!=3D=3D'undefined') &amp;&amp;fbp=
optsobj.sharedvideo){
	    var svid=3Dstorynodes[i].getElementsByClassName('shareMediaVideo');
	    if(svid.length)=20
		  if(svid[0].getAttribute('href') &amp;&amp;  svid[0].getAttribute('href'=
).match(/facebook\.com\/video\/video\.php/)) {
		    storynodes[i].setAttribute('class',storynodes[i].getAttribute('class'=
)+' fbpblockedx');
		    filtermatchmsg(storynodes[i],'   FBP : Post Type Filter Match - Hide =
Shared Video');
		    updateblockedcount();
			svid=3Dnull;
            continue;
		  }
	  }

	  // NEED TO REFACTOR THIS SECTION OF CODE FOR FINDING APPID ETC
        // so far it looks like a normal story, but lets check if its been =
posted by an application
        blockit=3D0;

		if(storynodes[i].textContent.match(/=C2=B7.* via .*=C2=B7/)) {
		  applink=3Dstorynodes[i].querySelector("a[href^=3D'https://www.facebook.=
com/apps/application.php']");
		  if(applink) {=20
			attribappid=3Dapplink.getAttribute('href').match(/application\.php\?id=
=3D(\d+)/)[1];
			if(attribappid) {
			  if(!arrwhitelist2[attribappid])
                blockit=3D1; // its not in the whitelist so block it
			}
	      }
		}

        // this block is the old way of finding appid, maybe we can comment=
 this if block out
		if(storynodes[i].querySelector('a[data-gt*=3D\'{\"appid\"\']')) {
		  attribappid =3D storynodes[i].querySelector('a[data-gt*=3D\'{\"appid\"\=
']').getAttribute('data-gt').match(/"appid":"?(\d+)"?/)[1];
		  if(attribappid) {
			if(!arrwhitelist2[attribappid])
              blockit=3D1; // its not in the whitelist so block it
          }
		}

		if(storynodes[i].querySelector('div[data-gt*=3D\"appid\"]')) {
		  attribappid =3D storynodes[i].querySelector('div[data-gt*=3D\"appid\"]'=
).getAttribute('data-gt').match(/"appid":"?(\d+)"?/)[1];
		  if(attribappid) {
			if(!arrwhitelist2[attribappid])
              blockit=3D1; // its not in the whitelist so block it
          }
		}

		// new app checks for fb actions / frictionless sharing apps
		var sua=3D0;
		if(storysaction &amp;&amp; storysaction.length) {
		  attribappid=3Dstorysaction[0].innerHTML.match(/\/hovercard\/application=
\.php\?id\=3D(\d*)/);
		  if(attribappid) {
		    if(!arrwhitelist2[attribappid[1]]) {
              blockit=3D1; // its not in the whitelist so block it
			  sua=3D1;  // sua =3D started using app?
		    }
		  }
		  else {
		    if(storynodes[i].getAttribute('data-gt')) {
			  //"appid":"163114453728333"
			  if(storynodes[i].getAttribute('data-gt').match(/\"appid\":\"\d+\"/)) {
			    attribappid=3Dstorynodes[i].getAttribute('data-gt').match(/\"appid\"=
:\"(\d+)\"/)[1];
				if(!arrwhitelist2[attribappid]) {
                  blockit=3D1; // its not in the whitelist so block it
				  sua=3D1; // sua =3D started using app?
		        }
		      }
			}
		  }
		}

        if(blockit) {
          // mark app as blocked
		  if(document.location.href.match(/\/apps\/feed/)) // dont filter apps if=
 on game feed page
            storynodes[i].setAttribute('class',storynodes[i].getAttribute('=
class')+ " fbpnormal");
		  else
			storynodes[i].setAttribute('class',storynodes[i].getAttribute('class')+ =
filterapptext);
		  if(sua)
		    dspBlockLink(storynodes[i],"sua");
		  else
            dspBlockLink(storynodes[i]);
        }=20
        else {
          //its probably a "normal" story node but lets check for attachmen=
ts (photos or links)
		  if (fbpoptsobj.postedlink &amp;&amp; (!storynodes[i].getAttribute('clas=
s').match(/fbp/)) ) {
			//if(storynodes[i].querySelector('div[data-ft=3D\'{"tn":"H"}\']') &amp;&=
amp; storynodes[i].querySelector('div[data-ft=3D\'{"tn":"H"}\']').querySele=
ctor('a[onclick^=3D"LinkshimAsyncLink"]')) {
		    if(storynodes[i].querySelector('a[rel=3D"noopener"]')) {
		      storynodes[i].setAttribute('class',storynodes[i].getAttribute('clas=
s').replace('fbpnormal','') +' fbpblockedx');
			  filtermatchmsg(storynodes[i],'   FBP : Story Type Filter - Shared a li=
nk');
			}
			else
		      storynodes[i].setAttribute('class',storynodes[i].getAttribute('clas=
s')+' fbpnormal');
			  //console.log("number of links =3D "+storylinks.length + "\n\n" + stor=
ynodes[i].textContent + "/n/n" + storylinks[0].textContent + "\n\n" + story=
links[0].href + "\n\n" + storylinks[0].onclick );
		  }
		  else
		    storynodes[i].setAttribute('class',storynodes[i].getAttribute('class'=
)+' fbpnormal');
        }
		// check for wall posts
		if(fbpoptsobj.commentwall &amp;&amp; (typeof(storynodes[i])!=3D'undefined=
') &amp;&amp; storynodes[i].classList.contains("fbpnormal") &amp;&amp; (!lo=
cation.href.match(/\?sk=3Dgroups$/))) { //storynodes[i].getAttribute &amp;&=
amp;  storynodes[i].getAttribute('class').match(/fbpnormal/)
		  //var wallarrows=3Dstorynodes[i].getElementsByClassName('wallArrowIcon'=
);
		  //if(wallarrows.length || storynodes[i].querySelector(wrotewallicon)) {=
=20
		  //if(storynodes[i].querySelector("span.accessible_elem+i+span.accessibl=
e_elem")){
		  if(storynodes[i].querySelector("span.accessible_elem+i+span.accessible_=
elem,span.accessible_elem+img._gb8+span.accessible_elem")){
			storynodes[i].setAttribute('class',storynodes[i].getAttribute('class').r=
eplace('fbpnormal','') + ' fbpblockedx');
			filtermatchmsg(storynodes[i],'   FBP : Post Type Filter Match - Wrote on=
 Timeline');
		  }
		  //wallarrows=3Dnull;
		}

      updateblockedcount();

    } // End For Loop through feed nodes

    storynodes=3Dstorysaction=3Dstorysactiontext=3Dnull;

  }// END cleartheshizzle function

function fixexternallinkredirects() { // for injection
  // fix external link redirects
  if(window.location.href.match(/#debug/)) {
    console.log("running fixexternallinkredirects code (injected)");
    console.trace();
  }
  //console.log('testing 123 fixexternallinkredirects');
  window.setTimeout(function() {if(typeof(UntrustedLink)!=3D'undefined')Unt=
rustedLink=3Dnull;if(typeof(LinkshimAsyncLink)!=3D'undefined') LinkshimAsyn=
cLink.referrer_log =3D LinkshimAsyncLink.swap =3D function(){;}; if(typeof(=
search_logged_ajax)!=3D'undefined') search_logged_ajax=3Dfunction(){;};},0)=
;
  window.setTimeout(function() {if(typeof(UntrustedLink)!=3D'undefined')Unt=
rustedLink=3Dnull;if(typeof(LinkshimAsyncLink)!=3D'undefined') LinkshimAsyn=
cLink.referrer_log =3D LinkshimAsyncLink.swap =3D function(){;}; if(typeof(=
search_logged_ajax)!=3D'undefined') search_logged_ajax=3Dfunction(){;};},50=
00);
  window.setInterval(function(){if(typeof(UntrustedLink)!=3D'undefined')Unt=
rustedLink=3Dnull;if(typeof(LinkshimAsyncLink)!=3D'undefined') LinkshimAsyn=
cLink.referrer_log =3D LinkshimAsyncLink.swap =3D function(){;}; if(typeof(=
search_logged_ajax)!=3D'undefined') search_logged_ajax=3Dfunction(){;};},60=
000);

  function unmanglelinksextra(e) {
    if(window.location.href.match(/#debug/))
      console.trace();
    e =3D e || window.event;
	//console.log(e.target.parentNode.parentNode,e.target.parentNode.parentNod=
e.href,e.target.parentNode.parentNode.href.match(/sk=3Dh_nor/));
	/*
	console.log(e.target.nodeName);
	console.dir(e.target);
	console.log(e.target);
	console.log(e.target.href);
	console.log(e.target.getAttribute('href'));
	console.log('mouse button:' + e.which);
	*/

    /*switch (e.which) {
      case 1: alert('left button'); break;
      case 2: alert('middle button'); break;
      case 3: alert('right button'); break;
    }*/

	//console.log(e.target.href,e);
	if(e.target.nodeName &amp;&amp; e.target.nodeName=3D=3D"DIV") {
	  if(e.target.previousSibling &amp;&amp; e.target.previousSibling.id &amp;=
&amp; e.target.previousSibling.id.match(/^notif_flyout_/)) {
	    //console.log('mark as read button clicked on Fan Page notifications f=
lyout');
	    return;
	  }
	}
    if(e.target.nodeName &amp;&amp; e.target.nodeName=3D=3D'A') {
	  //console.log('a clicked');
	  if(window.location.href.match(/#debug/))
	    console.log('link clicked: '+ e.target.href  + ' ' , e.target);
	  if(e.which=3D=3D3 || e.which=3D=3D2) // fix right click and middle click=
 in firefox =20
	    return;
	  if((e.target.getAttribute('ajaxify') &amp;&amp; e.target.getAttribute('a=
jaxify').match(/^\/ajax\/flash\/expand_inline\.php/)) || (e.target.href &am=
p;&amp; (e.target.href=3D=3D'#'))) {
	    return;
	  }
	  if(e.target.href &amp;&amp; (e.target.getAttribute('href')=3D=3D"#") &am=
p;&amp; e.target.textContent=3D=3D"Mark All As Read") { // link on notifica=
tions flyout on Fan Pages
	    //console.log('mark all as read button on Page notification flyout cli=
cked');
	    return;
	  }
	  if(e.target.href.match(/\/l\.php\?u=3D(.*)\&amp;h=3D/)) {
	    e.preventDefault();
	    e.target.href=3DdecodeURIComponent(e.target.href.match(/\/l\.php\?u=3D=
(.*)\&amp;h=3D/)[1]);
	    window.open(e.target.href);
	  }=20
      else if(!e.target.href.match(/(facebook\.com|^\/|fbcdn\.net|fbsbx\.co=
m)/) &amp;&amp; (e.target.href!=3D"javascript:;") &amp;&amp; (e.target.href=
!=3D'') &amp;&amp; (!e.target.href.match(/youtube\.com|youtu\.be|soundcloud=
\.com|vimeo\.com|reverbnation\.com|bandcamp\.com|dailymotion\.com/))){
	    if(e.target.getAttribute('aria-label') &amp;&amp; e.target.getAttribut=
e('aria-label').match(/Uploaded/))
		  return;
	    e.preventDefault();
		e.stopPropagation();
        window.open(e.target.href);
	  }
	  else if(window.navigator.userAgent.match(/Firefox/) &amp;&amp; e.target.=
target &amp;&amp; (e.target.target=3D=3D'_blank') &amp;&amp; e.target.href =
&amp;&amp; (e.target.href.match(/facebook.com/))) {
	    if(e.target.href.match(/\/download\/preview\//)) {
		  e.preventDefault();
		  window.open(e.target.href);
		}
		else {
	      e.target.target=3D""; // fix scriptify tab opener bug by neutralisin=
g target=3D"_blank"
		  return;
		}
	  }
	  //else if(e.target.getAttribute('ajaxify').match(/^\/ajax\/flash\/expand=
_inline\.php/)) {
	  //  e.preventDefault();
	  //}
    }
	else if(e.target.parentNode &amp;&amp; e.target.parentNode.nodeName=3D=3D'=
A'){
	  //console.log('the click was on an element inside an A tag');
	  //console.log(e.target.parentNode.getAttribute('href'));
	  if(e.target.parentNode.href &amp;&amp; (!e.target.parentNode.href.match(=
/facebook\.com|fbcdn\.net|fbsbx\.com/)) &amp;&amp; (e.target.parentNode.hre=
f!=3D"javascript:;") &amp;&amp; (e.target.parentNode.getAttribute('href')!=
=3D"#") &amp;&amp; (e.target.parentNode.href!=3D'') &amp;&amp; (!e.target.p=
arentNode.href.match(/youtube\.com|youtu\.be|soundcloud\.com|vimeo\.com|rev=
erbnation\.com|bandcamp\.com|dailymotion\.com|instagram\.com/))){
	    if((navigator.userAgent &amp;&amp; navigator.userAgent.match(/Firefox/=
)) &amp;&amp; (e.which=3D=3D3 || e.which=3D=3D2)) { // fix right click and =
middle click in firefox=20
	      return; =20
		}
		//console.log('are we here:?');
	    //if(e.target.getAttribute('aria-label') &amp;&amp; e.target.getAttrib=
ute('aria-label').match(/Uploaded/))
		//  return;
	    e.preventDefault();
		e.stopPropagation();
        window.open(e.target.parentNode.href);
	  }
	}
	/*else if(e.target.nodeName &amp;&amp; e.target.nodeName=3D=3D'SPAN'){
	  console.log('Span Hit!');
    }*/
	else if(!window.location.href.match(/h_nor/) &amp;&amp; e.target.parentNod=
e &amp;&amp; e.target.parentNode.parentNode &amp;&amp; e.target.parentNode.=
parentNode.href &amp;&amp; e.target.parentNode.parentNode.href.match(/sk=3D=
h_nor/)){
	  console.log("allowing top stories");
	  e.preventDefault();
	  //window.alert('hit it h_nor');
	  window.location.href=3D'/?sk=3Dh_nor#topstories';
	}
  }
  window.addEventListener('click',unmanglelinksextra,true);

  function unmanglelinks(nodetofix) {
    //console.log('embedded unmanglelinks');
	var hidehovercards=3D0;
	if(document.querySelector('html').className.match('hidehovercards'))
	  hidehovercards=3D1;
 =20
    if(window.location.href.match(/#debug/))
      console.trace();
      //console.log('unmangle links version 1 (injected version)');
	  //console.log(typeof(nodetofix));
    if(typeof(nodetofix)=3D=3D'undefined')
      var nodetofix=3Ddocument;
	if(nodetofix.getElementsByTagName) {
      var as=3Dnodetofix.getElementsByTagName('a');
      for(var i=3D0;i&lt;as.length;i++){
		// BEGIN HIDE HOVERCARDS
		if(hidehovercards){
	      if(as[i].getAttribute &amp;&amp; as[i].getAttribute('data-hovercard'=
) &amp;&amp; as[i].getAttribute('data-hovercard').match(/\/ajax\//))
		    if(as[i].removeAttribute)
		      as[i].removeAttribute('data-hovercard');
	    }
		// END HIDE HOVERCARDS
        if(as[i].href &amp;&amp; as[i].href.match(/\/l\.php\?/)) {
          as[i].href=3DdecodeURIComponent(as[i].href.match(/\/l\.php\?u=3D(=
.*)\&amp;h=3D/)[1]);
        }
		//if(as[i].href &amp;&amp; as[i].href.match(/(\?|\&amp;)fbclid=3D[a-z|A-Z=
|0-9|_|-]*$/)){
		//  as[i].href=3Das[i].href.split(/(\?|\&amp;)fbclid=3D[a-z|A-Z|0-9|_|-]*=
$/)[0];
		if(as[i].href &amp;&amp; as[i].href.match(/(\?|\&amp;)fbclid=3D[a-z|A-Z|0=
-9|_|-]*/)){
		  as[i].href=3Das[i].href.replace(/fbclid=3D[a-z|A-Z|0-9|_|-]*/,'').repla=
ce(/(\?|\&amp;)$/,'');
		}
	  }
	as=3Dnull;
	}
	nodetofix=3Dnull;
  }
  window.setTimeout(unmanglelinks,5000); // run on first load of page
}
// new fix links code
//as=3Ddocument.getElementsByTagName('a');for(i=3D0;i&lt;as.length;i++)if(a=
s[i].href.match(/\/l\.php/))console.log(as[i].href)
// this function is duplicated, as it is also injected into the page's dom,=
 so it can run from there too

//var securegifchannel=3D"" ;
//var securegifchannel=3D"https://www.fbsbx.com/animated.php?url=3D" ; // t=
o enable fetching all animated gifs via HTTPS, uncomment this line. (N.B Gi=
fs will load much slower)

function unmanglelinks(nodetofix) {
  if(debug)
    console.trace();
  //console.log('are we running');
  //console.log('injected unmanglelinks');
  if(typeof(nodetofix)=3D=3D'undefined') {
    var nodetofix=3Ddocument;
  }
  if(nodetofix.getElementsByTagName) {
    var as=3Dnodetofix.getElementsByTagName('a');
    for(var i=3D0;i&lt;as.length;i++) {
	  //if(as[i].href.match(/l\.php/))=20
		//console.log((as[i].href));
	 if(typeof(fbpoptsobj.hovercards)!=3D'undefined' &amp;&amp; fbpoptsobj.hov=
ercards){
	  if(as[i].getAttribute &amp;&amp; as[i].getAttribute('data-hovercard') &a=
mp;&amp; as[i].getAttribute('data-hovercard').match(/\/ajax\//))
		if(as[i].removeAttribute)
		  as[i].removeAttribute('data-hovercard');
	  }
      if(as[i].href &amp;&amp; as[i].href.match(/\/l\.php\?u=3D(.*)\&amp;h=
=3D/)) {
	    as[i].href=3DdecodeURIComponent(as[i].href.match(/\/l\.php\?u=3D(.*)\&=
amp;h=3D/)[1]);
		//console.log(as[i].href);
		//as[i].parentNode.style.backgroundColor=3D"lightblue";
	  if(as[i].getAttribute('data-lynx-mode'))
		as[i].removeAttribute('data-lynx-mode');
	  if(as[i].getAttribute('data-lynx-uri'))
		as[i].removeAttribute('data-lynx-uri');
	  }
	  if(isfirefox &amp;&amp; as[i].target &amp;&amp; (as[i].target.href &amp;=
&amp; (as[i].target.href.match(/(facebook\.com|^\/)/))) &amp;&amp; as[i].ta=
rget=3D=3D"_blank") // fix tab opener bug caused by scriptify / firefox ext=
ension
	    as[i].target=3D"";
      if(as[i].href &amp;&amp; as[i].href.match(/(\?|\&amp;)fbclid=3D[a-z|A=
-Z|0-9|_|-]*/)){
		as[i].href=3Das[i].href.replace(/fbclid=3D[a-z|A-Z|0-9|_|-]*/,'').replace=
(/(\?|\&amp;)$/,'');
	  }
	}
	as=3Dnull;
  }
  nodetofix=3Dnull;
}
//  END Duplicated function

  // Not yet fully implemented
  function fixFacebookSharing (){
    if(window.location.href.match(/facebook\.com(\/sharer)?\/sharer?\.php\?=
.*fbpurity\.com/)) {
      document.querySelector('h2.uiHeaderTitle').textContent=3D"Facebook ar=
e blocking you from sharing the FBPURITY.COM URL" =20
      document.querySelector('div.uiInterstitialContent').innerHTML=3D"Unfo=
rtunately, Facebook are blocking the FBPURITY.COM URL because they do not w=
ant their users to have control over what they see in their newsfeed, and d=
on't want to give their users the useful options that the safe, free and to=
p rated FB Purity browser add-on gives you.&lt;p/&gt;Luckily, you can still=
 share the link to the FB Purity Fan Page on Facebook instead. &lt;div&gt;&=
lt;h3&gt;&lt;a id=3D'fbpsharelink' href=3D'https://www.facebook.com/sharer.=
php?u=3Dhttps://www.facebook.com/fluffbustingpurity#fbpshr'&gt;Click here t=
o share the link to the FBP Fan Page&lt;/a&gt;&lt;/h3&gt;&lt;/div&gt;"
	  document.getElementById('fbpsharelink').addEventListener('click',functio=
n(){window.location.href=3D"https://facebook.com/sharer/sharer.php?u=3Dhttp=
s://facebook.com/fluffbustingpurity"},false);
    }
	if(window.location.href.match(/facebook\.com\/flx\/warn\/\?u=3D.*fbpurity\=
.com/)){
	  document.querySelector('._585n._585o').innerHTML=3D"&lt;b&gt;Message Fro=
m FB Purity: &lt;/b&gt;Facebook are being twats and are trying to block you=
 from visiting FBPURITY.COM&lt;p/&gt;If you are testing sharing a link to t=
he FB Purity website, it is better to instead link to the FBP Fan Page: &lt=
;a id=3D'fbpsharelink' href=3D'https://www.facebook.com/sharer.php?u=3Dhttp=
s://www.facebook.com/fluffbustingpurity#fbpshr'&gt;Click here to share the =
link to the FBP Fan Page&lt;/a&gt;.&lt;p/&gt;If you just wish to visit FBPU=
RITY.COM, &lt;a href=3D'http://www.fbpurity.com'&gt;Click here&lt;/a&gt;."
	}
 }

/* // code to help with sharing FBP via the facebook share popup window or =
via email
var buttdiv=3Ddocument.createElement('div');
var fbpsharecode=3D"&lt;a href=3D\"//www.facebook.com/sharer.php?u=3D%URL%#=
fbpshr\" onclick=3D\"javascript:window.open(this.href,  '', 'menubar=3Dno,t=
oolbar=3Dno,resizable=3Dyes,scrollbars=3Dyes,height=3D600,width=3D600');ret=
urn false;\"&gt;Share Gif&lt;/a&gt;";
var encURL=3DencodeURIComponent(as[i].href);
fbpsharecode=3Dfbpsharecode.replace(/%URL%/,encURL);
buttdiv.innerHTML=3D"&lt;div style=3D'margin-left:40px'&gt;" + fbpsharecode=
 + " | &lt;a title=3D\"Share via Email\" href=3D\"mailto:?subject=3DCheck%2=
0out%20this%20Animated%20Gif&amp;amp;body=3D" + encodeURIComponent(as[i].hr=
ef) + "%0D%0A%0D%0A----------%0D%0A%0D%0ABTW Did%20you%20know%20you%20can%2=
0view%20Animated%20Gifs%20on%20Facebook%20with%20the%20safe,%20free%20and%2=
0top%20rated%20FB%20Purity%20Browser%20Extension%3F%20%3A%20http%3A%2F%2Ffb=
purity.com\"&gt;Mail Gif&lt;/a&gt;&lt;/div&gt;";
contdiv.appendChild(buttdiv);
as[i].parentNode.appendChild(contdiv);
buttdiv=3Dcontdiv=3DencURL=3Dnull;=20
*/
  function fbpsharer() {=20
    console.log('fbpsharer()');
	addMessageToShareDialog();
    var sd=3Ddocument.getElementById('sharerDialog');
	var ss=3Ddocument.querySelector('Textarea');
	var fbpsharemsg=3D"Want more control over what you see on Facebook? F.B. P=
urity is a safe, free and top rated browser add-on that lets you clean up t=
he junk on Facebook and customize it to make it just the way you like it. F=
.B. Purity has over 439,000 users worldwide and has been reviewed and highl=
y recommended by The Washington Post, The New York Times, CNET, PCWorld, Ma=
cWorld and many other top tech journals. Get F.B. Purity free via FBPURITY =
.COM or the F.B. Purity Fan Page on Facebook";
	var fbpsharetags=3D"#FBPurity #FluffBustingPurity #CleanUpFacebook #Custom=
izeFacebook";
	var tagtext=3D"";
	if(!sd &amp;&amp; !ss)
	  return;
    var sgdiv=3Ddocument.createElement('div');
	sgdiv.id=3D'fbpsgdiv';
	sgdiv.style.marginTop=3D'5px';
	sgdiv.style.marginBottom=3D'5px';
	sgdiv.style.styleFloat=3D"left";
	sgdiv.innerHTML=3D'&lt;b&gt;Include the following text with your message?&=
lt;/b&gt; &lt;input id=3D"incfbptext" type=3D"checkbox" title=3D"Tick the b=
ox to include the text below in your post"&gt;&lt;br/&gt;'; // checked
	sgdiv.innerHTML+=3Dfbpsharemsg+"&lt;br/&gt;&lt;br/&gt;" + fbpsharetags;
	ss.parentNode.insertBefore(sgdiv,ss.nextSibling);
	if( document.querySelector('button.layerConfirm[name=3D"__CONFIRM__"]'))
	  document.querySelector('button.layerConfirm[name=3D"__CONFIRM__"]').addE=
ventListener('click',function() {
	    if(document.getElementById('incfbptext').checked) {
	      if(document.querySelectorAll('div.uiPopover:Not(.rfloat)')[0].queryS=
elector('a').textContent.match(/Share in a private message/))
		    tagtext=3D""
		  else=20
		    tagtext=3Dfbpsharetags;
	      document.querySelector("input.mentionsHidden").value+=3D"\n\n\n-----=
-\n"+fbpsharemsg+"\n\n" + tagtext;
	    }
		fbpsharemsg=3Dfbpsharetags=3Dtagtext=3Dnull;
	    return false;
	  },false)
	 sd=3Dss=3Dsgdiv=3Dnull;
  }

var chronosortrunning=3D0;

function chronoSortStream() {
  if(chronosortrunning) {
    console.log('Chrono Sort already running, aborting...')
  }
  chronosortrunning=3D1;
  console.log('ChronoSortStream called');
  var newfeeddesign=3D0;
  var nList  =3D document.getElementById('home_stream');
  if(!nList) {
    nList  =3D document.getElementById('substream_0');
	if(!nList) {
      console.log('Couldnt find the stream, maybe they have a newer newsfee=
d design...');
	  chronosortrunning=3D0;
      return;
    }
	else {
	  console.log('New newsfeed design detected.');
	  var newfeeddesign=3D1;
	}
  }

  // rename stream, hopefully it will stop new stories loading / dupes arri=
ving/
  nList.setAttribute('id','tempStream');

  var nEntry =3D document.querySelectorAll("div[data-dedupekey]");

  var nEntryArray =3D Array.prototype.slice.call(nEntry, 0);

  if(debug)
    console.dir(nEntryArray);
  nEntryArray.sort(function(a,b){
    //  return a.firstChild.nodeValue - b.firstChild.nodeValue ( descending=
 order) // swap for ascending order
	// check if the li has a datestamp or not
	if(!a.querySelector("abbr[data-utime]") &amp;&amp; (!b.querySelector("abbr=
[data-utime]")))
      return 0;
    else if(!a.querySelector("abbr[data-utime]"))
        return 1;
    else if (!b.querySelector("abbr[data-utime]"))
      return -1;
    else
      return b.querySelector("abbr[data-utime]").getAttribute('data-utime')=
 - a.querySelector("abbr[data-utime]").getAttribute('data-utime');
  })
  // 5. empty the nList and refill it with those in the correct order at th=
e nEntryArray

  console.log('ChronoSort section 2');

  if (!newfeeddesign) {
    while (nList.lastChild) {
      nList.removeChild(nList.lastChild);
    }
  }
  else {
	var z=3DnEntry.length-1;
    while (z &gt;=3D0) {
      //console.log(z + nEntry[z]);
      nEntry[z].parentNode.removeChild(nEntry[z]);
      --z;
    }=20
  }

  var dupechecker=3D{}; // for clearing out any duplicate entries

  console.log('ChronoSort section 3');
  for (var i=3D0; i&lt;nEntryArray.length; i++)
  {
    if(nEntry[i].getAttribute('data-timestamp'))
	  if(typeof(dupechecker[nEntry[i].getAttribute('data-timestamp')])=3D=3D'u=
ndefined') {
        dupechecker[nEntry[i].getAttribute('data-timestamp')]=3D'1';
        nList.appendChild(nEntryArray[i]);
	  }
  }
  if(newfeeddesign) // rename the stream back to its original name
    nList.setAttribute('id','substream_0');
  else
    nList.setAttribute('id','home_stream');

  console.log('ChronoSort Final Section');
  dupechecker=3DnList=3DnEntry=3DnEntryArray=3Dnull;
  chronosortrunning=3D0;
}

/*function injectChronoSortCode() {
  var script =3D document.createElement('script');
  script.appendChild(document.createTextNode(chronoSortStream));
  ( document.head || document.body || document.documentElement).appendChild=
(script);
}*/


// BEGIN SORT NOTIFICATIONS
//var monitoringNotifications=3D0;

function monitorNotifications(){
	console.log('monitor notifications called');
	//return;
	// select the target node
	var target =3D document.querySelector('#fbNotificationsFlyout ul[data-test=
id=3D"react_notif_list"]')
=20
      // create an observer instance
      var observer =3D new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          //console.log(mutation.type,"aab");
		  if (mutation.addedNodes.length &gt;=3D 1) {
            if (mutation.addedNodes[0].nodeName =3D=3D 'LI' &amp;&amp; (mut=
ation.addedNodes[0].parentNode.getAttribute('id')!=3D"fbpSortedNotiUL")) {
              //console.log('Added ' + mutation.addedNodes[0].tagName + ' t=
ag.');
			  fbpSortNotifications();
            }
			//else
			// console.log('Added ' + mutation.addedNodes[0].tagName + ' tag.');
		  }
		 =20
        });   =20
      });

      // configuration of the observer:
      var config =3D { childList: true,subtree:true};
	 =20
      // pass in the target node, as well as the observer options
      observer.observe(target, config);
}

function notipop(e){
  if(document.getElementById('fbNotificationsFlyout') &amp;&amp; (!document=
.getElementById('fbNotificationsFlyout').className.match(/toggleTargetClose=
d/))){
	  //console.log('nope...');
	return;
  }

  var tryCounter=3D0;
  var x=3Dwindow.setInterval(function(){
	tryCounter++;
	console.log('looking for Notifications...')
	if(document.querySelectorAll('li._33c').length) {
      window.clearInterval(x);
	 =20
	  if(!document.getElementById('fbpSortedNotifications')) { // create a new=
 container to hold the sorted notifications
	    var fbpSortedNotificationsContainerHTML=3D'&lt;div id=3D"fbpSortedNoti=
fications" class=3D"_32hm"&gt;&lt;div class=3D"_fyy"&gt;Chronological&lt;/d=
iv&gt;&lt;ul id=3D"fbpSortedNotiUL" style=3D"display: flex; flex-direction:=
 column;"&gt;&lt;/ul&gt;&lt;/div&gt;';
	    if(document.querySelector('ul[data-testid=3D"react_notif_list"]')){
  	      var newnotili=3Ddocument.createElement('li');
          newnotili.innerHTML=3DfbpSortedNotificationsContainerHTML;
	      document.querySelector('ul[data-testid=3D"react_notif_list"]').appen=
dChild(newnotili);
	    }
	    else
	     console.log('Facebooks notificaitons structure must have changed, so =
the sort notifications code cant run properly');
      }
	  fbpSortNotifications();
	  //if(!monitoringNotifications){
        monitorNotifications();
		//monitoringNotifications=3D1;
		//document.getElementById('fbNotificationsJewel').removeEventListener('cl=
ick',notipop);
	  //}
	}
	if(tryCounter&gt;=3D15) {
	  window.clearInterval(x)
	  console.log('Couldnt find the notifications...')
	}
	 =20
  },300)
}
=09
function fbpSortNotifications() {
  //if(debug)
    console.log('sorting notifications...');

  var numuls=3Ddocument.querySelectorAll('#fbNotificationsFlyout ._32hm');
  //console.log("numuls=3D" + numuls.length);
 =20
  if(numuls.length=3D=3D0){
    return;
  }

  if(numuls.length=3D=3D1) {
	if(!document.querySelector('#fbNotificationsFlyout .uiHeaderTitle').textCo=
ntent.match(/Chronological/))
      document.querySelector('#fbNotificationsFlyout .uiHeaderTitle').textC=
ontent+=3D' (Chronological)';
	return; // if theres only one ul, then the notifications should already be=
 sorted...
  }

  // show number of lis in each UL
  //console.log("first ul length", document.querySelectorAll('#fbNotificati=
onsFlyout ._32hm')[0].querySelectorAll("li._33c").length);

  // hide existing notifications then clone them
  numuls[0].style.display=3D"none";=20
  if(numuls.length!=3D2){
    numuls[1].style.display=3D"none";
  }

  // this section doesnt seem to help with the disappearing notifications p=
roblem
  /*
  if(!document.querySelectorAll("li.liplaceholder").length) {
	var liplaceholder=3Ddocument.createElement('li');
	liplaceholder.classList=3D"_33c fbped liplaceholder";
	liplaceholder.setAttribute('data-gt',"x");
	liplaceholder.setAttribute('data-alert-id',"x");
	liplaceholder.setAttribute('data-test-id',"notif_list_item");
	document.querySelectorAll('#fbNotificationsFlyout ._32hm &gt; ul')[0].appe=
ndChild(liplaceholder);
	document.querySelectorAll('#fbNotificationsFlyout ._32hm &gt; ul')[1].appe=
ndChild(liplaceholder.cloneNode(1));
  }
  */
 =20
  if(numuls.length&gt;1) {
	var newlis=3Ddocument.querySelectorAll('#fbNotificationsFlyout ._32hm')[0]=
.querySelectorAll("li._33c:not(.fbped)");
	//for(var j=3D0;j&lt;newlis.length;j++)
	//  secondul.appendChild(newlis[j]);
    var earlierlis=3Ddocument.querySelectorAll('#fbNotificationsFlyout ._32=
hm')[1].querySelectorAll("li._33c:not(.fbped)");
	var fbpSortedNotiUL=3Ddocument.getElementById('fbpSortedNotiUL');
=09
    //var secondul=3Ddocument.querySelectorAll('#fbNotificationsFlyout ._32=
hm')[1].querySelector('ul');
	//console.log("second ul length", document.querySelectorAll('#fbNotificati=
onsFlyout ._32hm')[1].querySelectorAll("li._33c").length);
=09
    for(var j=3Dnewlis.length-1;j&gt;=3D0;j--) {
	  newlis[j].classList+=3D" fbped";
	  //fbpSortedNotiUL.appendChild(newlis[j].cloneNode(1));
	  fbpSortedNotiUL.appendChild(newlis[j]);
	}
	for(var j=3Dearlierlis.length-1;j&gt;=3D0;j--) {
	  earlierlis[j].classList+=3D" fbped";
	  //fbpSortedNotiUL.appendChild(earlierlis[j].cloneNode(1));
	  fbpSortedNotiUL.appendChild(earlierlis[j]);
	}
    var notiULnum=3D1;
  }
  else
	var notiULnum=3D0;

  // show number of lis in each UL
  //console.log(document.querySelectorAll('#fbNotificationsFlyout ._32hm')[=
0].querySelectorAll("li._33c").length,document.querySelectorAll('#fbNotific=
ationsFlyout ._32hm')[1].querySelectorAll("li._33c").length);
	 =20
  var unsortednotis =3D fbpSortedNotiUL.querySelectorAll('li._33c');
  var newnotisArr=3DArray.prototype.slice.call(unsortednotis, 0);
 =20
  //for(var i=3D0;i&lt;newnotisArr.length;i++)
  //  console.log(newnotisArr[i].getAttribute('data-gt').match(/microtime_s=
ent\"\:\"(\d+)\"/)[1]);
 =20
  newnotisArr.sort(function(a,b){
	//console.log("b-a=3D" + (b.getAttribute('data-gt').match(/microtime_sent\=
"\:\"(\d+)\"/)[1] - a.getAttribute('data-gt').match(/microtime_sent\"\:\"(\=
d+)\"/)[1]))
    //return b.getAttribute('data-gt').match(/microtime_sent\"\:\"(\d+)\"/)=
[1] - a.getAttribute('data-gt').match(/microtime_sent\"\:\"(\d+)\"/)[1];
	return b.querySelector('abbr').getAttribute("data-utime") - a.querySelecto=
r('abbr').getAttribute("data-utime");
  });
 =20
  /* for debugging purposes show the new array */
  /*for(var i=3D0;i&lt;newnotisArr.length;i++)
    console.log(newnotisArr[i].getAttribute('data-gt').match(/microtime_sen=
t\"\:\"(\d+)\"/)[1]);
  */

  //unsortednotis[0].parentNode.style.display=3D"flex";
  //unsortednotis[0].parentNode.style.flexDirection=3D"column";
  for(var i=3D0;i&lt;newnotisArr.length;i++)
    newnotisArr[i].style.order=3Di;
  if(!document.querySelector('#fbNotificationsFlyout .uiHeaderTitle').textC=
ontent.match(/Chronological/))
    document.querySelector('#fbNotificationsFlyout .uiHeaderTitle').textCon=
tent+=3D' (Chronological)';
}
// END SORT NOTIFICATIONS
=09
=09
function addsetbackgroundimagelink () {
  /*var picdllink=3D"";
  if(document.querySelector("#imagestage img"))
    picdllink=3Ddocument.querySelector("#imagestage img").src; //document.q=
uerySelector('#fbPhotoPageActions a[href$=3D"dl=3D1"]');
  */
  var picdllink=3Ddocument.querySelector('#fbPhotoPageActions a[href^=3D"/p=
hoto/download/"]')
  var setbkilink=3Ddocument.createElement('a');
  setbkilink.title=3D'FB Purity: Set Image as FB Background (aka wallpaper)=
';
  setbkilink.className=3D'fbPhotosPhotoActionsItem';
  setbkilink.id=3D'fbpsetbkilink';
  setbkilink.style.display=3D'none';
  if((document.getElementById('photos_snowlift')) &amp;&amp; !document.getE=
lementById('photos_snowlift').classList.contains('hidden_elem')) { //getAtt=
ribute('class').match('hidden_elem')
    // photo theater view
	if(document.querySelector('#photos_snowlift #fbpsetbkilink'))
	  return;
    picdllink=3Ddocument.querySelector("#photos_snowlift .spotlight").src.s=
plit(/\?/)[0].replace(/\/v\/[a-z]\d\.\d-\d?/,'');
	setbkilink.datahref=3Dpicdllink.replace(/\?dl=3D1$|\&amp;dl=3D1$/,'');
	setbkilink.textContent=3D'=E2=8D=8D Set as Background';

	if(fbpoptsobj.backgroundimagefix) {
	  if(document.querySelector('img.spotlight'))
		if(fbpoptsobj.backgroundimage=3D=3Ddocument.querySelector('img.spotlight'=
).getAttribute('src')) {
		  setbkilink.textContent=3D'=E2=8D=94 Remove Background Image';
		  setbkilink.title=3D'FB Purity: Remove image from FB Background';
		}
	}
	var inpoint1=3Ddocument.querySelector('#fbPhotoSnowliftFeedback div._42nr'=
);
	var inpoint2=3Ddocument.querySelector('#photos_snowlift span.UIActionLinks=
_bottom');
	var inpoint3=3Ddocument.querySelector('#fbPhotoSnowliftTimestamp'); // if =
the share toolbar isnt showing
	if(inpoint2) { // this branch no longer runs, since fb removed normal imag=
e page with large image, and replaced them with theatre popup
	  inpoint2.appendChild(document.createTextNode(' =C2=B7 '));
	  inpoint2.appendChild(setbkilink);
	  document.querySelector('#photos_snowlift span.UIActionLinks_bottom #fbps=
etbkilink').addEventListener('click',fbpSetBackgroundImageClick,false);
	}
	else if(inpoint1)
	{
	  //inpoint1.appendChild(document.createElement('br'));
	  inpoint1.appendChild(setbkilink);
	  //inpoint1.parentNode.insertBefore(setbkilink,inpoint1);
	  document.querySelector('#fbPhotoSnowliftFeedback #fbpsetbkilink').addEve=
ntListener('click',fbpSetBackgroundImageClick,false);
	}
	else if(inpoint3)
	{
	  //inpoint1.appendChild(document.createElement('br'));
	  inpoint3.appendChild(setbkilink);
	  document.querySelector('#fbPhotoSnowliftTimestamp #fbpsetbkilink').addEv=
entListener('click',fbpSetBackgroundImageClick,false);
	}
	else {
	  if(debug)
	    console.log('fbp: couldnt find insertion point (photos_snowlift)');
	}
	//setbkilink.className=3D'fbPhotosPhotoActionsItem';
  }
  else if(picdllink) { // standard photo page // i don't think section is n=
eeded anymore
    //console.log('do we get here even? 3');
	if(document.getElementById('fbpsetbkilink'))
	  return;
	setbkilink.textContent=3D'Set as Background Image';
	if(document.querySelector("#imagestage img"))
      setbkilink.datahref=3Ddocument.querySelector("#imagestage img").src
	//setbkilink.datahref=3Dpicdllink; //picdllink.href.replace(/\&amp;dl=3D1$=
|\?dl=3D1$/,'');
	setbkilink.className=3D'fbpoldphotopage fbPhotosPhotoActionsItem';
	picdllink.parentNode.insertBefore(setbkilink,picdllink.nextSibling);
	document.getElementById('fbpsetbkilink').addEventListener('click',fbpSetBa=
ckgroundImageClick,false);
  }
}

///////////////////////////////
// BEGIN FUNCTION deleterecentactivitymodule
// function deleterecentactivitymodule is just a wrapper for the code, so w=
e can inject it into the fb page
function deleterecentactivitymodule () {
/* BEGIN HISTORY STATE CHANGE HANDLER */
(function(history){
    var pushState =3D history.pushState;
    history.pushState =3D function(state) {
        if (typeof history.onpushstate =3D=3D "function") {
            history.onpushstate({state: state});
        }
		//document.getElementById('contentArea').innerHTML=3D"&lt;div&gt;" + 'his=
tory state changed:' + arguments[0] + ' loc.href=3D' +location.href + "&lt;=
/div&gt;" +document.getElementById('contentArea').innerHTML;
        //console.dir(arguments[0]);
		//console.log('history state changed:' + arguments[0] + ' loc.href=3D' +l=
ocation.href); // arguments[0] is the updated url
		//console.log(typeof(arguments[0].match));
		// experiment to disable theatre mode
		//if(arguments[0].match(/\/photo\.php\?.*\&amp;theater/))
		//  location.href=3Darguments[0];
	 if(typeof(arguments[0].match)!=3D"undefined"){
		if(arguments[0].match(/facebook\.com\/fluffbustingpurity/) &amp;&amp; (!a=
rguments[0].match(/facebook\.com\/fluffbustingpurity\/settings/))) { // pos=
t message to reset the fbp news counter and initiate faq prompt=20
		//if(arguments[0].match(/facebook\.com\/bookfacepurity/) &amp;&amp; (!arg=
uments[0].match(/facebook\.com\/bookfacepurity\/settings/))) {
		//if(arguments[0].match(FBPFanPageURLRegex) &amp;&amp; (!arguments[0].mat=
ch(RegExp("facebook\.com\/" + FBPFanPageURL + "\/settings")))) { // cannot =
use variables here because this code is injected
		  window.postMessage('RESETNEWS',"https://www.facebook.com");
		  window.postMessage('FAQPROMPT',"https://www.facebook.com");
		  window.postMessage('INITINVITEALL',"https://www.facebook.com");
		  if(arguments[0].match(/\/photos\//))
			window.postMessage( "FBP&gt;TheaterMode", "https://www.facebook.com");
		  if(arguments[0].match(/\/notifications/))
		    window.postMessage("MOBNOTIFICATIONS","https://www.facebook.com");
		}
		else if(arguments[0].match(/facebook\.com\/(WhoUnfriendedYou|WhoUnfriende=
dMe|hidepeopleyoumayknow|getridofsuggestedposts|hidetrendingtopics|hidepoli=
ticsfromthenewsfeed|sortbymostrecent|disableautoplay)/)){
		  window.postMessage('INITINVITEALL',"https://www.facebook.com");
		  if(arguments[0].match(/\/notifications/))
		    window.postMessage("MOBNOTIFICATIONS","https://www.facebook.com");
		}
	    else if(arguments[0].match(/facebook\.com\/?$|\/\?sk=3D/)) {
		  //window.setTimeout(fixsortorder,5500); // this  line stops image viewe=
r from working properly if the "if statement" above is not there
		  window.postMessage( "JSPAGEUPDATE", "https://www.facebook.com");
		}
		else if(arguments[0].match(/\/games\/|\/dialog\/oauth\//)) {
		  window.setTimeout(highlightemailrequest,6000);
		  window.setTimeout(addblockapplinktoapppage,6010);
		  window.setTimeout(addblockbuttontopermreq,6020)
		}
		else if(arguments[0].match(/\/photo(s\/|\.php)/)) { //.*&amp;theater$
		  //console.log("theater mode engaged");
		  window.postMessage( "FBP&gt;TheaterMode", "https://www.facebook.com");
		  //window.setTimeout(addsetbackgroundimagelink,4000);
		}
		else if(arguments[0].match(/\/bookmarks\/pages/)) {
		  window.postMessage( "FIXPAGEBOOKMARKS", "https://www.facebook.com");
		}
		else if(arguments[0].match(/\/notifications/)){
		  window.postMessage("MOBNOTIFICATIONS","https://www.facebook.com");
		}
		else if(arguments[0].match(/facebook\.com\/.*\/(friends|friends_all)/))
		  window.postMessage("INITDEACTIVATEDFRIENDSLINK","https://www.facebook.c=
om");
	    else if(arguments[0].match(/facebook\.com\/settings\?tab=3Dnotificatio=
ns\&amp;section=3Don_facebook/))
		  window.postMessage("INITFBPNOTILINK","https://www.facebook.com");
		else
		  window.postMessage( "JSPAGEUPDATE", "https://www.facebook.com");
	  }
        return pushState.apply(window.history, arguments);
    }
})(window.history);
/* END HISTORY STATE CHANGE HANDLER*/

}
// END FUNCTION deleterecentactivitymodule

var addexternallinkfix =3D function() {
/////////////////////////////////////////////////////////////
// BEGIN inject deleterecentactivitymodule code into fb page
  var scriptx =3D document.createElement('script');
  scriptx.setAttribute('id','scriptx');
  if(fbpoptsobj.fixarticleredirects)  // fix external link redirects
    scriptx.appendChild(document.createTextNode('('+ fixexternallinkredirec=
ts +')();'));
 =20
  scriptx.appendChild(document.createTextNode('('+ deleterecentactivitymodu=
le +')();'));

  (document.head || document.body || document.documentElement).appendChild(=
scriptx);
// END inject deleterecentactivitymodule code into fb page
////////////////////////////////////////////////////////////////
}

var addblockbuttontopermreq =3D function() {
  if(debug)
    console.log("in addblockbuttontopermreq function");
  if(document.querySelector('form[action^=3D"/ajax/pages/invite/send/"],#bl=
ockapplab,#repost_view_dialog,.fbProfileBrowser') || window.location.href.m=
atch(/sharer\.php|share\.php|facebook\.com\/groups\/|facebook\.com\/lists\/=
|\/dialog\/share|\/dialog\/feed|\/addlist|\?sk=3Dfl_|facebook\.com\/events/=
))
	return;
  buttbars=3Ddocument.getElementsByClassName('platform_dialog_buttons');
  if(!buttbars.length)
    buttbars=3Ddocument.getElementsByClassName('rightContent');
  if(!buttbars.length)
    buttbars=3Ddocument.getElementsByClassName('uiOverlayFooterButtons');
  if(!buttbars.length)
    buttbars=3Ddocument.getElementsByClassName('permList');

  if(buttbars.length) {
    buttbar=3Dbuttbars[0];
	//if(location.href.match(/client_id=3D/)
	//var bappid=3Dwindow.location.href.match(/[client|app]_id=3D(\d*)/)[1];
	var bappid;
	if(document.getElementById('input_app_id'))
	  bappid=3Ddocument.getElementById('input_app_id').getAttribute('value');
	else if (document.getElementsByClassName('legalese').length) {
	  var legas=3Ddocument.getElementsByClassName('legalese')[0].getElementsBy=
TagName('a');
	  if(legas.length)
	    for(var v=3Dlegas.length-1;v&gt;=3D0;v--)
		  if(legas[v].getAttribute('ajaxify').match(/cid=3D(\d+)/)) {
		    bappid=3Dlegas[v].getAttribute('ajaxify').match(/cid=3D(\d+)/)[1];
			break;
		  }
    }
	else if (document.getElementsByName('app_id').length ){
	  bappid=3Ddocument.getElementsByName('app_id')[0].getAttribute('value');
	}

	var titleclass=3Ddocument.getElementsByClassName('fsxl');
	if(titleclass.length)
	  var bapname=3Dtitleclass[0].textContent;
	else
	  if(document.getElementById('permPanel'))
	    bapname=3Ddocument.getElementById('permPanel').getElementsByTagName('b=
')[0].textContent;
	else if (document.getElementsByClassName('permissions_app_name').length)
	  bapname=3Ddocument.getElementsByClassName('permissions_app_name')[0].tex=
tContent;
	else if (document.getElementById('platformDialogForm').querySelector('span=
.fwb'))
	  bapname=3Ddocument.getElementById('platformDialogForm').querySelector('s=
pan.fwb').textContent;
	else
      var bapname=3D"Application";

	/* BEGIN NEW / OLD CODE */
	/* ---------------------*/
	blahlab=3Ddocument.createElement('label');
    blahlab.setAttribute('class','uiButton uiButtonConfirm uiButtonLarge');
	blahlab.style.marginLeft=3D"2px";
	blahlab.style.lineHeight=3D"30px";
	blahlab.style.backgroundColor=3D"red";
	blahlab.setAttribute('id','blockapplab');
	blahlab.setAttribute('appid',bappid);
	blahlab.setAttribute('appname',bapname);

	if(document.getElementById('platform_dialog_content'))
      blahlab.setAttribute('nodeid','platform_dialog_content');//globalCont=
ainer
	else if(document.getElementsByClassName('tosPane').length)
	  document.getElementsByClassName('tosPane')[0].setAttribute('id','platfor=
m_dialog_content');
	else if (document.getElementById('platformDialogForm')) {
	  blahlab.setAttribute('nodeid','platformDialogForm');
	  if (document.getElementById('platformDialogForm').querySelector('a[href=
=3D"#"][data-hover=3D"tooltip"]')) {
	    if (document.getElementById('platformDialogForm').querySelector('a[hre=
f=3D"#"][data-hover=3D"tooltip"]').parentNode.textContent.match(/email addr=
ess/)) {
		  document.getElementById('platformDialogForm').querySelector('a[href=3D"=
#"][data-hover=3D"tooltip"]').parentNode.setAttribute('style',"border:3px s=
olid red !important" + (fbpoptsobj.backgroundimagefix ? ";background-color:=
rgba(255,255,255,0.5)" : ""));
		  document.getElementById('platformDialogForm').querySelector('button[nam=
e=3D"__CONFIRM__"]').addEventListener('click',function(e){e.preventDefault(=
);if(e.stopPropagation) e.stopPropagation();if(confirm("Privacy Warning: By=
 using this Game / App, you are giving it permission to access your email a=
ddress, which may result in spam emails. Are you sure you want to continue?=
")) {e.target.removeEventListener("click", arguments.callee, false); e.targ=
et.click()}},false);
		}
	  }
	}

	blahlab.setAttribute('title','Block this application with F.B. Purity');
    blahlab.innerHTML=3D'&lt;input value=3D"Block App" name=3D"block" type=
=3D"button" id=3D"appblocker"&gt;';
	buttbar.appendChild(blahlab);

	if(document.getElementById('appblocker'))
	  document.getElementById('blockapplab').addEventListener('click',blockapp=
ev,false);
	/* -------------------*/
    /* END NEW / OLD CODE */

	// if requesting permission to send direct emails, warn user by highlighti=
ng it
	highlightemailrequest();
  }
  else {
    if( document.querySelector('a[ajaxify*=3D"/ajax/appcenter/redirect_to_a=
pp?"]')){
	  var tclass=3Ddocument.querySelector('a[ajaxify*=3D"/ajax/appcenter/redir=
ect_to_app?"]').className;
	  var blocklink=3Ddocument.querySelector('a[ajaxify*=3D"/ajax/apps/block_a=
pp.php?"]');
	  blocklink.className=3Dtclass;
	  blocklink.style.position=3D"absolute";
	  blocklink.style.top=3D"90px";
	  blocklink.style.color=3D"lightgrey";
	  blocklink.style.left=3D"634px";
	  blocklink.style.width=3D"232px";// !important"; // code to add to block =
link to mimic the play button;
	 =20
	  if (document.querySelector('input[name=3D"GdpEmailBucket_grantEmailType"=
]')) {
	    document.querySelector('a[ajaxify*=3D"/ajax/appcenter/redirect_to_app?=
"]').addEventListener('click',function(e){e.preventDefault();if(e.stopPropa=
gation) e.stopPropagation();if(confirm("Privacy Warning: By using this Game=
 / App, you are giving it permission to access your email address, which ma=
y result in spam emails. Are you sure you want to continue?")) {e.target.re=
moveEventListener("click", arguments.callee, false); e.target.click()}},fal=
se);
	  }
	}
  }
}

var highlightemailrequest =3D function() {
  if(debug)
    console.log('in highlightemailrequest function');
  // if a facebook application is requesting the users email address highli=
ght it
  var appperms=3Ddocument.getElementsByClassName('gdp_list_item');
  if(appperms.length)
	for(var i=3D0;i&lt;appperms.length;i++) {
	  if(appperms[i].getElementsByClassName('send-email-change-link').length)
	    appperms[i].setAttribute('style', 'border:4px solid red');
	  if(appperms[i].textContent.match(/Post on my behalf/))
		appperms[i].setAttribute('style', 'border:4px solid red');
	}
  var emailperms=3Ddocument.getElementsByTagName('input');
  if(emailperms.length)
	for(i=3D0;i&lt;emailperms.length;i++)
	  if(emailperms[i].getAttribute('name')=3D=3D'GdpEmailBucket_grantEmailTyp=
e')
	    emailperms[i].parentNode.setAttribute('style', 'border:4px solid red')=
;
  if(document.getElementsByClassName &amp;&amp; document.getElementsByClass=
Name('gdp_right_container').length &amp;&amp; document.getElementsByClassNa=
me('gdp_right_container')[0].getElementsByClassName('mbm').length)
	document.getElementsByClassName('gdp_right_container')[0].getElementsByCla=
ssName('mbm')[0].setAttribute('style','border:4px solid red; color:black !i=
mportant'); // ( can post as you )
  if(document.getElementsByClassName &amp;&amp; document.getElementsByClass=
Name('permissionsPublishActionsBadge').length) =20
	document.getElementsByClassName('permissionsPublishActionsBadge')[0].setAt=
tribute('style','border:4px solid red');
  if(document.getElementsByClassName('tosPane').length) {
    var tossas=3Ddocument.getElementsByClassName('tosPane')[0].getElementsB=
yTagName('a');
	for(i=3D0;i&lt;tossas.length;i++)
	  if(tossas[i].getAttribute('href') &amp;&amp; tossas[i].getAttribute('hre=
f').match(/about\/privacy\/your-info-on-other\#applications/)) {
		if(!tossas[i].parentNode.textContent.match(tossas[i].getAttribute('aria-l=
abel'))) {
		  tossas[i].parentNode.appendChild(document.createTextNode(' - ' + tossas=
[i].getAttribute('aria-label') ));
		  break;
		}
	  }
  }
  if(document.querySelector('input[type=3D"hidden"][value=3D"email"]'))
    document.querySelector('input[type=3D"hidden"][value=3D"email"]').paren=
tNode.style.border=3D'4px solid red';
  tossas=3Dappperms=3Demailperms=3Dnull;

  // add prominent block app button to app center app pages
  if((window.location.href.match(/facebook\.com\/games\//) || document.getE=
lementsByTagName('body')[0].classList.contains("app_center")) &amp;&amp; do=
cument.getElementsByClassName('mll').length) // if theres buttons {
    if(document.getElementById('block_app_link') &amp;&amp; !document.getEl=
ementById('block_app_link2')) {

	  var aja=3Ddocument.getElementById('block_app_link').getElementsByTagName=
('a')[0].getAttribute('ajaxify');
	  var ajatext=3Ddocument.getElementById('block_app_link').getElementsByTag=
Name('a')[0].textContent;
	  var ajalab=3Ddocument.createElement('label');
	  ajalab.setAttribute('class','uiButton uiButtonConfirm uiButtonLarge');
	  ajalab.setAttribute('id','block_app_link2');
	  ajalab.setAttribute('title','Block this application with FB Purity');
	  ajalab.style.color=3D'white';
	  ajalab.textContent=3D ajatext + ' App';
	  var ajalink=3Ddocument.createElement('a');
	  ajalink.setAttribute('ajaxify',aja.replace('block_app_link','block_app_l=
ink2'));
	  ajalink.setAttribute('href','#');
	  ajalink.setAttribute('rel','dialog-post');
	  ajalink.setAttribute('role','button');
	  ajalink.appendChild(ajalab);
      document.getElementsByClassName('mll')[0].setAttribute('class','mll')=
;
	  document.getElementsByClassName('mll')[0].appendChild(document.createTex=
tNode('  '));
	  document.getElementsByClassName('mll')[0].appendChild(ajalink);
	}
 if(window.location.href.match(/facebook\.com\/games\/?/) || document.getEl=
ementsByTagName('body')[0].classList.contains("app_center")) {
   // add BA (and eventually WL) links to all app listings in app center (t=
his part is a work in progress/not completed yet)
   if(document.getElementsByClassName('appsListHeader').length) {
     var topspan=3Ddocument.createElement('span');
	 topspan.setAttribute('style','color:red;font-weight:bold;margin-left:10px=
')
     topspan.setAttribute('id','block_app_link');
     document.getElementsByClassName('appsListHeader')[0].appendChild(topsp=
an);

	 var appslist =3D document.getElementsByClassName('appsListItem');
     var tspan,appid;
	 for(i=3D0;i&lt;appslist.length;i++) {
       tspan=3Ddocument.createElement('div');
       tspan.setAttribute('class','uiPopover appFeedbackMenu');
       tspan.setAttribute('style','top:18px');
	   if(appslist[i].getAttribute('data-gt'))
	     appid=3Dappslist[i].getAttribute('data-gt').match(/appid":"?(\d+)"?/)=
[1]; //match(/appid\&amp;quot;:\&amp;quot;(\d+)\&amp;quot;/)[1]
	   else
	     appid=3Dappslist[i].querySelector('a[data-gt]').getAttribute('data-gt=
').match(/appid":"?(\d+)"?/)[1]; //match(/appid\&amp;quot;:\&amp;quot;(\d+)=
\&amp;quot;/)[1]
	   tspan.innerHTML=3D'&lt;a title=3D"Block Application with FB Purity" rel=
=3D"dialog-post" ajaxify=3D"/ajax/apps/block_app.php?app_id=3D' + appid + '=
&amp;amp;type_index=3D0&amp;amp;source=3Dabout&amp;amp;confirm_id=3Dblock_a=
pp_link" href=3D"#" role=3D"button"&gt;BA&lt;/a&gt;';
	   appslist[i].getElementsByClassName('appName')[0].appendChild(tspan);
	 }
   }
 }

} // END highlightemailrequest function

/* BEGIN add a "block application" link to the corner of all application pa=
ges */
function addblockapplinktoapppage() {
 if(debug)
   console.log("in addblockbuttontopermreq function");
 if (window.location.href.match(/\:\/\/apps\./)) {
  if(document.getElementById('footerContainer')) {
    var footzer=3Ddocument.getElementById('footerContainer');
	var footytxt=3D'footerContainer';
  }
  else {
    var footzer=3Ddocument.getElementById('pagelet_canvas_footer_content');
	var footytxt=3D'pagelet_canvas_footer_content';
  }
  if(footzer) {
    var fas=3Dfootzer.getElementsByTagName('a');
    for(var i=3D0;i&lt;fas.length;i++)
      if(fas[i].getAttribute('ajaxify') &amp;&amp; fas[i].getAttribute('aja=
xify').match(/\/ajax\/report\.php\?content_type=3D17/)) {
	    zappid=3Dfas[i].getAttribute('ajaxify').match(/cid=3D(\d*)/)[1];
        zapplink=3Ddocument.createElement('a');
	    zapplink.textContent=3D'Block Application ';
		if(document.querySelector('input[type=3D"text"]._1frb'))
		  zapptitle=3Ddocument.querySelector('input[type=3D"text"]._1frb').value
		else if(document.getElementById(footytxt).getElementsByTagName('span').le=
ngth)
	      zapptitle=3Ddocument.getElementById(footytxt).getElementsByTagName('=
span')[0].textContent;
		else if(document.querySelector("div.rhcFooterCopyright&gt;div"))
		  zapptitle=3Ddocument.querySelector("div.rhcFooterCopyright&gt;div").tex=
tContent;
	    zapplink.setAttribute('appname',zapptitle);
	    zapplink.setAttribute('appid',zappid);
	    zapplink.setAttribute('nodeid','pagelet_canvas_content');
	    zapplink.setAttribute('id','zapplink');
		zapplink.setAttribute('title','Block this application with F.B. Purity');
	    zparent=3Ddocument.getElementById(footytxt).getElementsByClassName('fs=
m')[0];
	    zparent.insertBefore(zapplink,zparent.firstChild);
	    document.getElementById('zapplink').addEventListener('click',blockappe=
v,false);
	    break;
	  }
  }
 }
}
/* END Add a block application link at bottom left of all application pages=
 */

function fbpbuttinit() {
  //console.log('fbpbuttinit');
  var FBPBUTT=3Ddocument.createElement('div');
  FBPBUTT.innerHTML=3D'&lt;a id=3D"FBPBUTT" href=3D"javascript:;" class=3D"=
jewelButton" style=3D"vertical-align:top;color:#D8DFEA;font-size:14px;font-=
weight:bold;top:5px;max-height:25px;"&gt;FBP&lt;/a&gt;';
  FBPBUTT.innerHTML+=3D'&lt;div id=3D"FBPNewsAlert" style=3D"display:none;p=
osition:relative;z-index:40;left:-35px;top:20px;font-size:12px;background-c=
olor:red;"&gt;&lt;a href=3D"https://facebook.com/' + FBPFanPageURL + '" id=
=3D"FBPNewsCount" title=3D"FBP News - 0 New Stories - [ Click To Read ]" st=
yle=3D"color:white;margin-left:2px"&gt;News: 0&lt;/a&gt;&amp;nbsp;&amp;nbsp=
;&amp;nbsp;&lt;a id=3D"FBPDismissNewsAlert" href=3D"javascript:;" title=3D"=
Dismiss FBP News Notification" style=3D"margin-right:2px"&gt;X&lt;/a&gt;&lt=
;/div&gt;';
  FBPBUTT.setAttribute('class','lfloat fbJewel');
  FBPBUTT.setAttribute('title','F.B. Purity ' + fbpVersion + ' Options');

  var waitforsearchbox=3Dwindow.setInterval(function(){
  if(!(document.querySelector('div[role=3D"search"]') || document.getElemen=
tById('searchBarClickRef')))
    return;
  else
    window.clearInterval(waitforsearchbox);

  FBPBUTT.setAttribute('style','top:0px;margin-left:0px;margin-right:7px;ve=
rtical-align:middle;font-weight:bold;');
  var firstJewelButt=3Ddocument.querySelector('.jewelButton');
  if (firstJewelButt &amp;&amp; (!document.getElementById('FBPBUTT'))) {
	FBPBUTT.style.marginTop=3D"12px";
	firstJewelButt.parentNode.parentNode.parentNode.insertBefore(FBPBUTT,first=
JewelButt.parentNode.parentNode);
	document.getElementById('FBPBUTT').addEventListener("click", fbptoggleopts=
, false);
	document.getElementById('FBPNewsCount').addEventListener("click", resetnew=
scounter, false);
	document.getElementById('FBPDismissNewsAlert').addEventListener("click", r=
esetnewscounter, false);
=09
	if(document.getElementById('pageLoginAnchor') &amp;&amp; (!document.getEle=
mentById('FBPOptionsMenuLink')))
	  document.getElementById('pageLoginAnchor').addEventListener('click',addF=
BPSettingsLinkToMenu,false);
    if((typeof(fbpoptsobj.chrononotifications)!=3D"undefined") &amp;&amp; f=
bpoptsobj.chrononotifications)
      document.getElementById('fbNotificationsJewel').addEventListener('cli=
ck',notipop,false);
  }
  else
	console.log('didnt find jewelbutt in top navbar');
  }, 2000);
  // END wait for search box interval timed function
 =20
}

function resetclasses() {
  var fbpn,a;
  var arrResetClasses=3D['fbpnormal','fbpblockedx','fbpblocked'];
  for(a in arrResetClasses) {
    //console.log(arrResetClasses[a]);
    fbpn=3Ddocument.getElementsByClassName(arrResetClasses[a]);=20
	for(i=3Dfbpn.length;i&gt;0;i--) {
	  //console.log(i);
	  fbpn[i-1].setAttribute('class',fbpn[i-1].getAttribute('class').replace(a=
rrResetClasses[a],''));
	}
	//console.log("fbpoptsobj.filterappmessages=3D" + fbpoptsobj.filterappmess=
ages + " current arr length=3D" + document.getElementsByClassName(arrResetC=
lasses[a]).length);
  }
}

function sortSelect(selElem, sortVal) {

  // Checks for an object or string. Uses string as ID.=20
  switch(typeof selElem) {
    case "string":
      selElem =3D document.getElementById(selElem);
      break;
    case "object":
      if(selElem=3D=3Dnull) return false;
      break;
    default:
      return false;
    }

    // Builds the options list.
    var tmpAry =3D new Array();
    for (var i=3D0;i&lt;selElem.options.length;i++) {
      tmpAry[i] =3D new Array();
      tmpAry[i][0] =3D selElem.options[i].text;
      tmpAry[i][1] =3D selElem.options[i].value;
    }

    // allows sortVal to be optional, defaults to text.
    switch(sortVal) {
      case "value": // sort by value
        sortVal =3D 1;
        break;
      default: // sort by text
        sortVal =3D 0;
    }
    tmpAry.sort(function(a, b) {
      return a[sortVal] =3D=3D b[sortVal] ? 0 : a[sortVal] &lt; b[sortVal] =
? -1 : 1;
    });

    // removes all options from the select.
    while (selElem.options.length &gt; 0) {
      selElem.options[0] =3D null;
    }

    // recreates all options with the new order.
    for (var i=3D0;i&lt;tmpAry.length;i++) {
      var op =3D new window.Option(tmpAry[i][0], tmpAry[i][1]);
      selElem.options[i] =3D op;
    }
    tmpAry=3Dnull;
    return true;
}

function addFBPSettingsLinkToMenu() {
  if(document.getElementById('FBPOptionsMenuLink'))
	return;
  var fbpoptionsmenulink=3Ddocument.createElement('li');
  fbpoptionsmenulink.setAttribute('class','_54ni navSubmenu __MenuItem');
  fbpoptionsmenulink.setAttribute('id','FBPOptionsMenuLinkContainer');
  fbpoptionsmenulink.innerHTML=3D'&lt;a class=3D"_54nc"&gt;&lt;span&gt;&lt;=
span id=3D"FBPOptionsMenuLink" class=3D"_54nh" style=3D"cursor:pointer"&gt;=
F.B. Purity Settings&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;';
  var menuinsertpoint=3Ddocument.querySelector('a[href=3D"https://www.faceb=
ook.com/settings"]');
  if(menuinsertpoint) {
	menuinsertpoint=3Dmenuinsertpoint.parentNode;
	menuinsertpoint.parentNode.insertBefore(fbpoptionsmenulink, menuinsertpoin=
t);
	document.getElementById('FBPOptionsMenuLink').parentNode.addEventListener(=
"click", fbptoggleopts, false);
	document.getElementById('FBPOptionsMenuLink').parentNode.addEventListener(=
"click", function(){document.getElementById('pageLoginAnchor').click()},fal=
se);
  }
}

function removefriendfromwhitelist(e) {
  e.preventDefault();
  if(e.stopPropagation) e.stopPropagation();
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}
function addfriendtowhitelist() {
  // function grabs the currently selected friend in the select box
  //var friendwhitelistta=3Ddocument.getElementById("friendwhitelistta");
  var friendwhitelistta=3Ddocument.getElementById("friendwhitelistdiv");
  var select =3D document.getElementById("friendwhitelistselect");
  var inputfriend=3Ddocument.createElement('input');
  var frienddiv=3Ddocument.createElement('div');
  var deletelink=3Ddocument.createElement('a');
  deletelink.textContent=3D'X';
  deletelink.setAttribute('title',"Remove friend from whitelist");
  deletelink.style.marginLeft=3D'4px';
  deletelink.style.color=3D'red';
  deletelink.className=3D'removefriend';
  //deletelink.addEventListener('click',removefriendfromwhitelist,false);
  var friendlink=3Ddocument.createElement('a');
  friendlink.textContent=3D'';

  if(select.options.length &gt; 0) {
    //window.alert("Text: " + select.options[select.selectedIndex].text + "=
\nValue: " + select.options[select.selectedIndex].value);
	if(document.getElementById('frienddiv-'+select.options[select.selectedInde=
x].value.split(/::/)[1]))
	  return;
	inputfriend.setAttribute('type','hidden');
	inputfriend.setAttribute('id','friendinput-'+select.options[select.selecte=
dIndex].value.split(/::/)[1]);
	inputfriend.value=3Dselect.options[select.selectedIndex].value;
	frienddiv.setAttribute('id','frienddiv-'+ select.options[select.selectedIn=
dex].value.split(/::/)[1])
	friendlink.setAttribute('data-hovercard','/ajax/hovercard/hovercard.php?id=
=3D' + select.options[select.selectedIndex].value.split(/::/)[1] );
	friendlink.setAttribute('href','/' + select.options[select.selectedIndex].=
value.split(/::/)[1] );
	friendlink.setAttribute('target','_blank');
	friendlink.textContent=3Dselect.options[select.selectedIndex].text;
	frienddiv.appendChild(friendlink.cloneNode(true));
	frienddiv.appendChild(inputfriend.cloneNode());
	frienddiv.appendChild(deletelink.cloneNode(true));

	friendwhitelistta.appendChild(frienddiv.cloneNode(true));
	document.getElementById('frienddiv-'+ select.options[select.selectedIndex]=
.value.split(/::/)[1]).querySelector('a.removefriend').addEventListener('cl=
ick',removefriendfromwhitelist,false);
  }
  else {
    return;
  }
}
// END addfriendtowhitelist function

function popuplatefriendwhitelist() {
  if (typeof(fbpoptsobj)=3D=3D'undefined')
    return;

  if(typeof(fbpoptsobj.friendswhitelistArr)=3D=3D'undefined')
    return;

  if(debug)
    console.log('in populatefriendwhitelist ' + fbpoptsobj.friendswhitelist=
Arr);

  //&lt;div id=3D"frienddiv-$ID"&gt;	=20
  var friendtemplate=3D'&lt;a href=3D"/$ID" data-hovercard=3D"/ajax/hoverca=
rd/hovercard.php?id=3D$ID" target=3D"_blank"&gt;$NAME&lt;/a&gt;&lt;input ty=
pe=3D"hidden" id=3D"friendinput-$ID" value=3D"$NAME::$ID"&gt;&lt;a class=3D=
"removefriend" style=3D"margin-left:4px;color:red" title=3D"Remove friend f=
rom whitelist"&gt;X&lt;/a&gt;';
  var newdiv=3Ddocument.createElement('div');
  newdiv.innerHTML=3Dfriendtemplate;

  var friendswhitelistArr=3DJSON.parse(fbpoptsobj.friendswhitelistArr);
  for(i in friendswhitelistArr) { // i is the friend id=20
    if(!document.getElementById('frienddiv-' +i)) {
	  newdiv.innerHTML=3Dfriendtemplate.replace(/\$NAME/g,friendswhitelistArr[=
i]).replace(/\$ID/g,i);
	  newdiv.setAttribute('id',"frienddiv-"+i);
	  document.getElementById('friendwhitelistdiv').appendChild(newdiv.cloneNo=
de(true));
	  document.getElementById("frienddiv-"+i).querySelector('a.removefriend').=
addEventListener('click',removefriendfromwhitelist,false);
	}
  }
}

// BEGIN INIT FRIEND CHECKER FUNCTION GLOBAL VARIABLES
var firstrunfriendcheck=3D0;
var friendcheckinterval=3D60;
var lastfriendcheck;
var currtime =3D new Date().getTime(); // creates a new Date representing t=
oday
var oldfriendstore=3D{};
var friendstore=3D{};
var deletedfriendstore=3D{};
var newdfa =3D new deletedfriendsalert();
// END INIT FRIEND CHECKER FUNCTION VARIABLES

//////////////////////////////////////
// BEGIN FRIEND CHECKING FUNCTIONALITY
//////////////////////////////////////

function dspdeletedfriendalert(deletedfriends){
  var delfriendstore;
  if(debug){
    if(typeof(deletedfriends)!=3D'undefined')
      console.log("dspdeletedfriendsalert called second time: " + deletedfr=
iends)
    else =20
      console.log('dspdeletedfriendsalert called first time');
  }

  newdfa.init();

  if(!deletedfriends &amp;&amp; deletedfriends!=3D'') {
    delfriendstore=3Dfbploadvalue('deletedfriendstore-' + currentuserid,dsp=
deletedfriendalert);
    if(delfriendstore=3D=3D-999) {
	  if(debug)
	    console.log("delfriendstore=3D" + delfriendstore);
      return
	}
  }
  else
    delfriendstore=3Ddeletedfriends;
  if(debug)
    console.log('deletedfriends: ' + delfriendstore);
  if(typeof(delfriendstore)!=3D'undefined' &amp;&amp; (delfriendstore !=3Dn=
ull) &amp;&amp; (delfriendstore !=3D''))
    delfriendstore=3DJSON.parse(delfriendstore);
  if(debug)
    console.dir(delfriendstore);
  if(typeof(delfriendstore)!=3D'object')
    return;

  var showflag=3D0;
  for(i in delfriendstore)  {
	if(typeof(delfriendstore[i])!=3D'undefined'){
	  if(!document.querySelector("#delfriendsalertdiv a[href=3D'/" + i + "/']"=
))
	    newdfa.addline("&lt;div style=3D'margin-bottom:2px;margin-left:75px;fo=
nt-weight:bold'&gt;&lt;a target=3D'_blank' data-hovercard=3D'/ajax/hovercar=
d/hovercard.php?id=3D" + i + "' href=3D'/" + i +"'&gt;&lt;img src=3D'//grap=
h.facebook.com/" + i + "/picture?size=3Dsmall' height=3D'16' width=3D'16' s=
tyle=3D'vertical-align:middle'&gt;&lt;/a&gt; &amp;nbsp;&lt;a target=3D'_bla=
nk' href=3D'/" + i + "/' data-hovercard=3D'/ajax/hovercard/hovercard.php?id=
=3D" + i + "'&gt;" + delfriendstore[i] + "&lt;/a&gt;&lt;/div&gt;");
	  if(debug)
	    console.log('name:' + delfriendstore[i]);
	  showflag=3D1;
	}
  }
  if(showflag)
    newdfa.show();
}

function processfriendsobject(friendsobj){
  // start code for friend whitelist and deleted friend alerts
  var friendwhitelistflag=3D0;
  var friendwhitelistbox=3Ddocument.getElementById('friendwhitelistta');
  var friendwhitelistselect,friendwhitelistaddbutton;
  // if the options screen is showing, load up the friends whitelist
  if(document.getElementById('fbpoptsdiv') &amp;&amp; document.getElementBy=
Id('fbpoptsdiv').style.display=3D=3D'block') {
    friendwhitelistflag=3D1;
	if(!document.getElementById("friendwhitelistselect")) {
	  friendwhitelistselect=3Ddocument.createElement('select');
	  friendwhitelistselect.setAttribute('id','friendwhitelistselect');
	  friendwhitelistaddbutton=3Ddocument.createElement('button');
	  friendwhitelistaddbutton.setAttribute('id','friendwhitelistaddbutton');
	  friendwhitelistaddbutton.textContent=3D'Add friend to whitelist';
	  friendwhitelistaddbutton.setAttribute('class','inputsubmit uiButton uiBu=
ttonConfirm uiButtonMedium');
	  //friendwhitelistaddbutton.style.marginTop=3D'3px';
	  friendwhitelistaddbutton.addEventListener('click',addfriendtowhitelist,f=
alse);
	}
	else {
	  friendwhitelistselect=3Ddocument.getElementById("friendwhitelistselect")=
;
	  friendwhitelistselect.options.length =3D 0; // reset options list
	}
  }
  // end code for friend whitelist

  for(i=3D0;i&lt;friendsobj.payload.entries.length;i++)  { // need to check=
 if friendsobj.payload =3D null... catch error
    //if(!friendsobj.payload.entries[i].names =3D=3Dfriendsobj.payload.entr=
ies[i].text)
    //  document.getElementById('fbpnewsdiv').innerHTML+=3Dfriendsobj.paylo=
ad.entries[i].names + " :: " + friendsobj.payload.entries[i].text + "&lt;Br=
&gt;";
	//friendstore[friendsobj.payload.entries[i].uid]=3D{};
	friendstore[friendsobj.payload.entries[i].uid]=3Dfriendsobj.payload.entrie=
s[i].text;
	if(friendwhitelistflag)
	  friendwhitelistselect.options[friendwhitelistselect.options.length]=3D n=
ew window.Option(friendsobj.payload.entries[i].text, friendsobj.payload.ent=
ries[i].text + "::" + friendsobj.payload.entries[i].uid);
	//if(typeof(oldfriendstore)!=3D'undefined')
	//  console.log(typeof(oldfriendstore[friendsobj.payload.entries[i].uid]))=
;
  }
  if(friendwhitelistflag &amp;&amp; !document.getElementById("friendwhiteli=
stselect")) {
	document.getElementById('friendselectdiv').appendChild(friendwhitelistsele=
ct);
	document.getElementById('friendselectdiv').appendChild(friendwhitelistaddb=
utton);
	document.getElementById('friendlistloadingdiv').style.display=3D'none';
	popuplatefriendwhitelist();
  }
  if(friendwhitelistflag)
    sortSelect('friendwhitelistselect');

  // if friend whitelist box is showing, lets populate it
 /* if(document.getElementById('fbpoptsdiv').style.display=3D=3D'block') {
    document.getElementById('friendwhitelistta').textContent=3D
  }*/

 if(debug)
    console.log(friendstore);
=09
 if(!document.getElementById('friendwhitelistta') || (!(document.getElement=
ById('friendwhitelistta').style.display=3D=3D'block'))) {
  // if the whitelist page isnt showing, lets process the deleted friends
  newdfa.init();
  if(!firstrunfriendcheck)
  for(i in oldfriendstore)  {
    if(typeof(friendstore[i])=3D=3D'undefined') {
	  //deletedfriendstore[i]=3D{};
	  /* legacy code, no longer needed
	  if(typeof(oldfriendstore[i].text)!=3D'undefined'){
	    deletedfriendstore[i] =3D oldfriendstore[i].text;
		newdfa.addline("&lt;div style=3D'margin-bottom:2px;margin-left:75px;font-=
weight:bold'&gt;&lt;a target=3D'_blank' data-hovercard=3D'/ajax/hovercard/h=
overcard.php?id=3D" + i + "' href=3D'/" + i +"'&gt;&lt;img src=3D'//graph.f=
acebook.com/" + i + "/picture?size=3Dsmall' height=3D'16' width=3D'16' styl=
e=3D'vertical-align:middle'&gt;&lt;/a&gt; &amp;nbsp;&lt;a target=3D'_blank'=
 href=3D'/" + i + "/' data-hovercard=3D'/ajax/hovercard/hovercard.php?id=3D=
" + i + "'&gt;" + oldfriendstore[i].text + "&lt;/a&gt;&lt;/div&gt;"); // ( =
&lt;a target=3D'_blank' title=3D'Show friendship' href=3D'https://www.faceb=
ook.com/" + currentuserid +"?and=3D" + i + "'&gt;F&lt;/a&gt; )=20
	  }
	  else {*/
	    deletedfriendstore[i] =3D oldfriendstore[i];
		newdfa.addline("&lt;div style=3D'margin-bottom:2px;margin-left:75px;font-=
weight:bold'&gt;&lt;a target=3D'_blank' data-hovercard=3D'/ajax/hovercard/h=
overcard.php?id=3D" + i + "' href=3D'/" + i +"'&gt;&lt;img src=3D'//graph.f=
acebook.com/" + i + "/picture?size=3Dsmall' height=3D'16' width=3D'16' styl=
e=3D'vertical-align:middle'&gt;&lt;/a&gt; &amp;nbsp;&lt;a target=3D'_blank'=
 href=3D'/" + i + "/' data-hovercard=3D'/ajax/hovercard/hovercard.php?id=3D=
" + i + "'&gt;" + oldfriendstore[i] + "&lt;/a&gt;&lt;/div&gt;"); // ( &lt;a=
 target=3D'_blank' title=3D'Show friendship'  href=3D'https://www.facebook.=
com/" + currentuserid +"?and=3D" + i + "'&gt;F&lt;/a&gt; )
	  /*}*/
	}
	//console.log("oldname=3D" + oldfriendstore[i], "new name=3D" +friendstore=
[i]);
	// Check for Name Changes // currently the changes wont show unless any fr=
iends have also been deleted, because we not adding to deletedfriendstore
=09
	/* New code for checking name changes. not finished yet (need to create ne=
w object changednameobject)
	else if(oldfriendstore[i]!=3Dfriendstore[i]){
	  console.log("name changed from : " + oldfriendstore[i] + " to: " + frien=
dstore[i]);
	  newdfa.addline("&lt;div style=3D'margin-bottom:2px;margin-left:75px;font=
-weight:bold'&gt;&lt;a target=3D'_blank' data-hovercard=3D'/ajax/hovercard/=
hovercard.php?id=3D" + i + "' href=3D'/" + i +"'&gt;&lt;img src=3D'//graph.=
facebook.com/" + i + "/picture?size=3Dsmall' height=3D'16' width=3D'16' sty=
le=3D'vertical-align:middle'&gt;&lt;/a&gt; &amp;nbsp;&lt;a target=3D'_blank=
' href=3D'/" + i + "/' data-hovercard=3D'/ajax/hovercard/hovercard.php?id=
=3D" + i + "'&gt;" + oldfriendstore[i] + "&lt;/a&gt; Changed Name to:" + fr=
iendstore[i] + " &lt;a target=3D'_blank' title=3D'Show friendship'  href=3D=
'https://www.facebook.com/" + currentuserid +"?and=3D" + i + "'&gt;F&lt;/a&=
gt;&lt;/div&gt;");=20
	}
	*/
  }

  fbpsavevalue('oldfriendstore-' + currentuserid, JSON.stringify(friendstor=
e));
  fbpsavevalue('deletedfriendstore-' + currentuserid, JSON.stringify(delete=
dfriendstore));

  if(Object.keys(deletedfriendstore).length) {
    //console.log(Object.keys(deletedfriendstore).length);
    //window.alert(deletedfriendsmsg + deletedfriendsmsg2);
	newdfa.show(); // show the deleted friend alert
	if((document.getElementById('listsNav') || document.getElementById('appsNa=
v')) &amp;&amp; !(document.getElementById('replaydeletedfriendsalert'))) {
      var tmpli=3Ddocument.createElement('li');
	  tmpli.id=3D"leftnavdfalinkli";
	  tmpli.setAttribute('class','clearfix sideNavItem stat_elem');
	  //tmpli.setAttribute('style','position:relative;left:26px !important;wid=
th:162px !important;margin-top:6px');
      tmpli.innerHTML=3D'&lt;div style=3D"background-color:pink"&gt;&lt;a t=
itle=3D"Show Deleted Friends Alert" id=3D"replaydeletedfriendsalert" class=
=3D"_5afe" style=3D"margin-left:-24px !important;display:inline-block" href=
=3D"javascript:;"&gt;&lt;img src=3D"' + friendIconClass + '" style=3D"verti=
cal-align:middle"&gt;&lt;/img&gt;&amp;nbsp;Deleted Friends&amp;nbsp;&lt;spa=
n style=3D"color:#4e5665"&gt;'+ Object.keys(deletedfriendstore).length + '&=
lt;/span&gt;&lt;/a&gt;&amp;nbsp;&lt;a id=3D"clearleftnavdfalink" style=3D"c=
olor:red" href=3D"javascript:;" style=3D"display:inline-block" title=3D"Cle=
ar Deleted Friends Alert"&gt;X&lt;/a&gt;&lt;/div&gt;';
	  if(document.getElementById('listsNav'))
	    document.getElementById('listsNav').getElementsByTagName('ul')[0].inse=
rtBefore(tmpli, document.getElementById('listsNav').getElementsByTagName('u=
l')[0].firstChild);
	  else
	    document.getElementById('appsNav').getElementsByTagName('ul')[0].inser=
tBefore(tmpli, document.getElementById('appsNav').getElementsByTagName('ul'=
)[0].firstChild);
	  document.getElementById('replaydeletedfriendsalert').addEventListener('c=
lick',function() { if(document.getElementById('dfabelly') &amp;&amp; docume=
nt.getElementById('dfabelly').textContent.length) newdfa.show();} ,false); =
//window.alert(deletedfriendsmsg)
	  document.getElementById('clearleftnavdfalink').addEventListener('click',=
 resetdfa ,false);
    }
  }
=20

  if(debug) {
    console.log(deletedfriendstore);
  }
 }
}

function getfriendlist() {

  var userid =3D currentuserid;
  var FBP_FRIEND_FEED =3D "www.facebook.com/ajax/typeahead/first_degree.php=
?__a=3D1&amp;viewer=3D" + userid + "&amp;token=3D1-1&amp;filter[0]=3Duser&a=
mp;options[0]=3Dfriends_only&amp;time=3D" + Math.floor((new Date()).getTime=
() / 1000);=09

  var FBP_FRIEND_FEED_URL =3D  window.location.protocol +"\/\/" + FBP_FRIEN=
D_FEED ;
  if(debug)
    console.log(FBP_FRIEND_FEED_URL);
  var cleanregex=3D new RegExp(/^for \(\;\;\)\;/);
  var http =3D new window.XMLHttpRequest();
  http.open("GET", FBP_FRIEND_FEED_URL, true);

  // set a callback function
  http.onreadystatechange =3D function() {
    if(http.readyState =3D=3D 4 &amp;&amp; http.status =3D=3D 200) {
	  if(debug)
	     console.log(http.responseText);
	  if(debug)
	    console.log(http.responseText.match(cleanregex));
	  if(http.responseText.match(cleanregex)) {
	    var curfriendsobj =3D JSON.parse(http.responseText.split(cleanregex)[1=
]);
		if(debug)
	      console.log(curfriendsobj.payload.entries.length);=20
		processfriendsobject(curfriendsobj);
		//curfriendsobj=3Dnull;
	  }
	  http=3Dnull;
	}
  }
  http.send();
}

  //fbpsavevalue('fbpoptsjson-' + currentuserid, JSON.stringify(fbpoptsobj)=
);
  //exporttext=3Dfbploadvalue('fbpoptsjson-' + currentuserid,exportsettings=
basic2);

function graboldfriendstore (oldstore){
  if(!oldstore &amp;&amp; oldstore!=3D'') {
    oldfriendstore=3Dfbploadvalue('oldfriendstore-' + currentuserid,grabold=
friendstore);
    if(oldfriendstore=3D=3D-999) {
	  if(debug)
	    console.log("oldfriendstore=3D" + oldfriendstore);
      return
	}
  }
  else
    oldfriendstore=3Doldstore;
  if(debug)
    console.log('oldfriends' + oldfriendstore);
  if(typeof(oldfriendstore)!=3D'undefined' &amp;&amp; (oldfriendstore !=3Dn=
ull) &amp;&amp; (oldfriendstore !=3D''))
    oldfriendstore=3DJSON.parse(oldfriendstore);
=09
  getfriendlist();
}

function lastfriendcheckfunc (checkeddate) {
  if(debug)
    console.log("checkeddate=3D " + checkeddate);
  if(!checkeddate &amp;&amp; (checkeddate!=3D'')) {
    lastfriendcheck=3Dfbploadvalue('lastfriendcheck-' + currentuserid,lastf=
riendcheckfunc);
    if(lastfriendcheck=3D=3D-999)
      return
  }
  else
    lastfriendcheck=3Dcheckeddate;

  //console.log("checkeddate=3D " + checkeddate);
  if ((typeof(lastfriendcheck)=3D=3D'undefined') || (lastfriendcheck=3D=3Dn=
ull) || (lastfriendcheck.length =3D=3D"")) {
    if(debug)
	  console.log('path 1 - it seems like its the first time we are running th=
e friend check');
    //lastfriendcheck=3Dfbploadvalue('lastfriendcheck-' + currentuserid, la=
stfriendcheckfunc);
	//if(exporttext=3D=3D-999)
    //  return;
	firstrunfriendcheck=3D1;
	if(debug)
	  console.log(currentuserid + " "  + currtime);
	fbpsavevalue('lastfriendcheck-' + currentuserid, currtime + "");
	graboldfriendstore();
    //getfriendlist();
  }
  else {
    if(debug)
	  console.log('path 2 - we have run friends check before so lets check if =
its time to run it again');
    if((currtime-lastfriendcheck)/1000/60 &gt;=3D friendcheckinterval) { //=
 4 minutes (divide by 60 again for hours)
	  fbpsavevalue('lastfriendcheck-' + currentuserid, currtime + "");
	  graboldfriendstore();
      //getfriendlist();
    }
	else {
	  checkdelfriendstorage();
	}
	if(debug)
      console.log((currtime-lastfriendcheck)/1000/60 + " mins elapsed since=
 last x-friend check");
  }
}

////////////////////////////////////
// END FRIEND CHECKING FUNCTIONALITY
////////////////////////////////////

function hidegroupconvos() {
  if(debug)
	console.log('Running hidegroupconvos function');
  if(document.getElementById("groupConvosHeader"))
	return;
  var i=3Ddocument.querySelectorAll("._55ob");
  for(var x=3D0;x&lt;i.length;x++)=20
	if(i[x].textContent.match(/GROUP CONVERSATIONS/)){
	  i[x].setAttribute("id","groupConvosHeader");
	  i[x].style.display=3D"none"; // hide group chat header
	  i[x].nextSibling.style.display=3D"none"; // hide the group chat list
	}
}

//var offtext=3D""; // text we will filter offline friends with

function offlinefriendscleaner(){
  //var onit;
  if(debug)
    console.log('offlinefriendscleaner running');
  var frns=3Ddocument.querySelectorAll('li._42fz'); // all friends in list
  for(var i=3D0;i&lt;frns.length;i++) {
	/*
    onit=3Dfrns[i].querySelector('div._5t35'); // bit that says mobile/web =
or blank for offline
	if(!onit) {
	*/
	  if(frns[i].className.match(/_12um _42fz/))
		continue;
      //console.log('we in bang onit now');
	  if(frns[i].querySelector('._568z span')){
		frns[i].style.display=3D'block';
		//frns[i].style.border=3D'2px solid green';
	  }
	  else {
		frns[i].style.display=3D'none';
		//frns[i].style.border=3D'2px solid red';
	  }
	  /*
	  if(frns[i].querySelector('._5bon') &amp;&amp; frns[i].querySelector('._5=
bon').children.length){
		if(frns[i].querySelector('._5bon').textContent || ((frns[i].querySelector=
('._5bon').childNodes.length=3D=3D1) &amp;&amp; (frns[i].querySelector('._5=
bon').childNodes[0].classList.length=3D=3D0))){
		  frns[i].style.border=3D'2px solid red';
		  //frns[i].style.display=3D'none';
		}
		else {
		  console.log(frns[i].innerHTML);
		  frns[i].style.display=3D'block';
		  frns[i].style.border=3D'2px solid green';
		}
	  }
      else=20
		frns[i].style.display=3D'none';
	  */
    /*}
    else
      if((!(onit &amp;&amp; onit.textContent))|| onit.textContent=3D=3Dofft=
ext) { // offtext=3D"" =3D offline, offtext=3DMobile
        frns[i].style.display=3D'none';		 =20
	  }
      else
        frns[i].style.display=3D'block';
	onit=3Dnull;*/
  }
  frns=3Di=3Dnull;
}

function addfbplinktoleftcol(){ // add link to fbp fan page in left column =
of newsfeed. later on we will add the counter for news items, but perhaps i=
t will work automagically?
  var y=3Ddocument.getElementById('pagesNav');
  if((y || document.getElementById('universalNav'))  &amp;&amp; (!document.=
querySelector('#navItem_'+FBPFanPageID + ',#navItem_page_' + FBPFanPageID +=
',div[data-itemid=3D"' + FBPFanPageID + '"]'))) {
    var x=3Ddocument.createElement('li');
    x.setAttribute('class','sideNavItem stat_elem');
	x.setAttribute('id','navItem_page_' + FBPFanPageID);
    x.innerHTML=3D'&lt;a style=3D"color:#333;text-decoration:none" class=3D=
"_5afe" href=3D"https://www.facebook.com/' + FBPFanPageURL + '?ref=3Dhl" ti=
tle=3D"Fluff Busting Purity" data-gt=3D"{&amp;quot;bmid&amp;quot;:&amp;quot=
;' + FBPFanPageID + '&amp;quot;,&amp;quot;count&amp;quot;:&amp;quot;0&amp;q=
uot;,&amp;quot;fbtype&amp;quot;:&amp;quot;274&amp;quot;,&amp;quot;item_type=
&amp;quot;:&amp;quot;page&amp;quot;,&amp;quot;item_category&amp;quot;:&amp;=
quot;page_user&amp;quot;,&amp;quot;coeff2_info&amp;quot;:&amp;quot;Aas-OZc_=
wJzyLqZx4O5stWv1mGL2jPVFTulqFkVYorm0aBamO1sJrIKZxp-lAxBoXmzRAaR_vmKgfw0oE4V=
NByBV&amp;quot;,&amp;quot;coeff2_registry_key&amp;quot;:&amp;quot;0016&amp;=
quot;,&amp;quot;coeff2_action&amp;quot;:&amp;quot;3&amp;quot;,&amp;quot;coe=
ff2_pv_signature&amp;quot;:&amp;quot;186204846&amp;quot;,&amp;quot;rank&amp=
;quot;:&amp;quot;1&amp;quot;}"&gt;&lt;div class=3D"rfloat"&gt;&lt;span clas=
s=3D"count _5wk0 hidden_elem uiSideNavCount"&gt;&lt;span class=3D"countValu=
e fss"&gt;0&lt;/span&gt;&lt;span class=3D"maxCountIndicator"&gt;&lt;/span&g=
t;&lt;/span&gt;&lt;span class=3D"grip"&gt;&lt;/span&gt;&lt;/div&gt;&lt;div&=
gt;&lt;span class=3D"imgWrap"&gt;&lt;img class=3D"profileItemImg img" src=
=3D"' + FBPfanpagesmallproficon + '" height=3D"16" alt=3D""&gt;&lt;/span&gt=
;&lt;div class=3D"linkWrap noCount" style=3D"margin-left:2px"&gt;F.B. Purit=
y News&lt;/div&gt;&lt;/div&gt;&lt;/a&gt;&lt;span class=3D"mover hidden_elem=
"&gt;&lt;/span&gt;';
	//document.getElementById('navItem_page_408502197558').addEventListener('c=
lick', resetnewscounter, false);
	if(y) {
	  y.getElementsByTagName('ul')[0].insertBefore(x, y.getElementsByTagName('=
ul')[0].firstChild);
	}
    else if(document.getElementById('universalNav'))
	  document.getElementById('appsNav').getElementsByTagName('ul')[0].appendC=
hild(x);
	document.getElementById('navItem_page_' + FBPFanPageID).addEventListener('=
click', resetnewscounter, false);
	x=3Dy=3Dnull;
  }
}

function addfbpfaqprompt() {
  //console.log('faqing it');
  if(!window.location.href.match(FBPFanPageURLRegex))
    return;
  var imputs;
  var fbpfaqprompt=3Ddocument.createElement('div');
  fbpfaqprompt.innerHTML=3D"&lt;span style=3D'font-weight:bold'&gt;Before c=
ommenting:&lt;/span&gt; Please read the latest post/s and comments on this =
Page for important info regarding FBP. If you have any questions about FB P=
urity, please first read the &lt;a title=3D'FB Purity Frequently Asked Ques=
tions and Troubleshooting Guide' href=3D'http://faq.fbpurity.com'&gt;FBP FA=
Q Page&lt;/a&gt;. If you have any problems with FBP please follow all the s=
teps in the  &lt;a title=3D'FB Purity Troubleshooting Guide' href=3D'http:/=
/www.fbpurity.com/faq.htm#troubleshooting'&gt;FBP Troubleshooting Guide&lt;=
/a&gt;. Reading the previous comments on this page may also help, thanks.";
  fbpfaqprompt.setAttribute('style','color:red !important;margin-bottom:10p=
x;text-align:center');
  fbpfaqprompt.className=3D'fbpfaqprompt';
  if(document.getElementById('photos_snowlift') &amp;&amp; (!document.getEl=
ementById('photos_snowlift').className.match(/hidden_elem/)) ) {
    if(!document.querySelector('#photos_snowlift div.fbpfaqprompt')) {
      imputs=3Ddocument.querySelector('#photos_snowlift ul.UFIList');
	  imputs.appendChild(fbpfaqprompt);
	}
  }
  else {
    imputs=3Ddocument.querySelectorAll('div.UFIAddComment');
	for(i=3D0;i&lt;imputs.length;i++) {
	  if(!imputs[i].querySelector('div.fbpfaqprompt'))
        //imputs[i].firstChild.parentNode.insertBefore(fbpfaqprompt.cloneNo=
de(true),imputs[i].firstChild);
	    imputs[i].appendChild(fbpfaqprompt.cloneNode(true));
    }
  }

  imputs=3Dfbpfaqprompt=3Dnull;
}

function setBackgroundImage(imageURL) {
  if((fbpoptsobj.backgroundimagefix=3D=3D1) &amp;&amp; fbpoptsobj.backgroun=
dimage=3D=3DimageURL) {
    if(!confirm("Do you want to remove this background image?"))
      return;
	fbpoptsobj.backgroundimagefix=3D0;
	fbpoptsobj.topnavimagefix=3D0;
	fbpoptsobj.transnewsfeed=3D0;
  }
  else {
    if(!confirm("Please note, once you have chosen a background image, you =
can change its settings or turn it off via the FBP options screen (Under th=
e Fonts, Colours &amp; Design heading).\n\nDo you want to set this picture =
as your Facebook background image?"))
      return;
    fbpoptsobj.backgroundimagefix=3D1;
    fbpoptsobj.stretchbkgimg=3D1;
    fbpoptsobj.topnavimagefix=3D1;
	fbpoptsobj.transnewsfeed=3D1;
    fbpoptsobj.backgroundimage=3DimageURL;
  }
  //save to prefs obj to localstorage
  fbpsavevalue('fbpoptsjson-' + currentuserid, JSON.stringify(fbpoptsobj));
  //window.location.reload();
  window.setTimeout(function(){window.location.reload(true);},1500);
}

function fbpSetBackgroundImageClick (e) {
  e.preventDefault();
  if(e.stopPropagation)
    e.stopPropagation();
  //alert(e.target.datahref); //getAttribute('href')
 =20
  if((document.getElementById('photos_snowlift')) &amp;&amp; !document.getE=
lementById('photos_snowlift').classList.contains('hidden_elem')) {
    // photo theatre view
	if(document.querySelector('img.spotlight'))
	  setBackgroundImage(document.querySelector('img.spotlight').getAttribute(=
'src'));
  }
  else // normal photopage
    setBackgroundImage(e.target.datahref);
}

function fbpurify() {
  if(debug)
    console.trace();

  var crappyappmsgcounter=3D0;
  var xtramsgcounter=3D0;
  fbpstyle.setAttribute('id','fbpstyler');
  fbpstyle.setAttribute('type','text/css');
  fbpstyle.textContent=3DfbpStyleNormal;

  //document.addEventListener("DOMNodeInserted", fbpInsertedNodeDomHandler,=
 false);
  // moving this out so it runs on every page, so we can disable autoplay a=
nd enable animated gifs on all pages
  //new (this.MutationObserver || this.MozMutationObserver || this.WebKitMu=
tationObserver)(fbpInsertedNodeDomHandler).observe(document.body,=20
  //  { childList: true, subtree: true });

  if(document.getElementById('pagelet_home_stream') || document.getElementB=
yId('pagelet_litestand_section') || document.getElementById('stream_pagelet=
') || document.getElementById('pagelet_seen_content')) // || document.getEl=
ementById('hashtag_permalink_feed')
    cleartheshizzle(document);

} // END fbpurify function


function getPosition(element) {
    var xPosition =3D 0;
    var yPosition =3D 0;
 =20
    while(element) {
        xPosition +=3D (element.offsetLeft - element.scrollLeft + element.c=
lientLeft);
        yPosition +=3D (element.offsetTop - element.scrollTop + element.cli=
entTop);
        element =3D element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

function fixnewscolumnoption(){
  //console.log('fixnewscolumn');
  var newswidth;
  if(document.getElementById('newscolstyle') &amp;&amp; fbpoptsobj.expandne=
wscolumn)
    if(window.location.href.match(/\/events\/|\/groups\/|\/allactivity/) ||=
 document.querySelector('body.timelineLayout')) {
	  document.getElementById('newscolstyle').textContent=3D'';
	  if(!window.location.href.match(/comment_id/)) {
	    window.scrollTo(5,5); // fix graphic glitch
	    window.scrollTo(0,0)
	  }
	  if(document.querySelector('._64b')) // fix weird right col 0px width iss=
ue on group pages
		document.querySelector('._64b').style.width=3D'310px';
	}
    else {
	  var x1=3DgetPosition(document.querySelector("#contentArea")).x;
	  var x2=3DgetPosition(document.querySelector("div.fbChatSidebar")).x;
	  if(x2&gt;0) {
		newswidth=3D(x2-x1)-10;
		//console.log("nw=3D"+newswidth);
	  }
	  else
		newswidth=3D(window.innerWidth-x1)-30;
      document.getElementById('newscolstyle').textContent=3D"#contentArea {=
width:" + newswidth + "px !important} #rightCol {display:none}";
	  if(document.querySelector('._1qkq'))
		document.getElementById('newscolstyle').textContent+=3D" #contentArea {po=
sition:initial}";
	}
}

function fbplistener(event){ // listen for messages
  if ( event.origin !=3D=3D "https://www.facebook.com" )
    return
  if(debug)
    ; //console.log(event.data); // producing too much data just when movin=
g mouse so commented out for now
  if(event.data &amp;&amp; event.data.match)
  if (event.data.match(/JSPAGEUPDATE/)) {
    //console.log('JS PAGE UPDATE');
=09
	if(fbpoptsobj.rcbirthdays || fbpoptsobj.rcsavedlinks)
      window.setTimeout(nixreminders,3000);
	window.setTimeout(fixnewscolumnoption,4500); // was 3000
	window.setTimeout(addfbplinktoleftcol,3000);
	window.setTimeout(labelnewsfeed,2000);
	window.setTimeout(checkdelfriendstorage,4000);
	if(fbpoptsobj.tagsuggestions)
	  window.setTimeout(enabletagforfriendlists,3000);
	window.setTimeout(fixsortorder,3000);
	window.setTimeout(addnewsfeedmenuclicklistener,2500);
	window.setTimeout(initfbplinkredeemer,3000);
	//window.setTimeout(cleartheshizzle,3500); // deal with list pages etc
	if(fbpoptsobj.seemoreshortcuts){
	  window.setTimeout(function(){
		clickseemore('shortcuts');
	  },2000);
	}
	if(fbpoptsobj.seemoreexplore){
	  window.setTimeout(function(){
		clickseemore('explore');
	  },2000);
	}
	/*
    if(!fbpoptsobj.trendingbox) {
	  initTrendingOptsButt('jsupdate');
	  if(fbpoptsobj.seemoretrending) {
	    window.setTimeout(function(){
		  clickseemore('trending');
	    },2000);
	  }
	}
	*/
	if(!fbpoptsobj.rcstories) {
	  window.setTimeout(function(){
		addHideStoriesButt();
	  },2000);
	}
  }
  else if(event.data.match(/^FBP\&gt;/)) {
    //console.log('FBP message received');
	window.setTimeout(addsetbackgroundimagelink,2000);
	//if(window.location.href.match(/\/fluffbustingpurity/))
	if(window.location.href.match(FBPFanPageURLRegex))
	  window.setTimeout(addfbpfaqprompt,3500);
  }
  else if(event.data.match(/RESETNEWS/)) {
    resetnewscounter();
  }
  else if(event.data.match(/FAQPROMPT/)) {
    window.setTimeout(addfbpfaqprompt,4000);
  }
  else if(event.data.match(/INITINVITEALL/)) {
    window.setTimeout(initInviteAllToLikePage,4000);
  }
  else if(event.data.match(/FIXPAGEBOOKMARKS/)){
	window.setTimeout(fixPageBookmarks,2000);
  }
  else if(event.data.match(/MOBNOTIFICATIONS/)){
	window.setTimeout(addmobnotificationslink,5000);
  } =20
  else if(event.data.match(/INITDEACTIVATEDFRIENDSLINK/)){
	window.setTimeout(initdeactivatedfriendslink,2000);
  }
  else if(event.data.match(/INITFBPNOTILINK/)){
	window.setTimeout(initFBPNotiLink,2000);
  }
  else if(event.data.match(/SHOWLIVEGRID/)){
	showlivegrid();
  }
}

function nixreminders(){ // get rid of unhideable reminders such as birthda=
ys and saved links
  //console.log('nixing reminders!');
  var rems=3Ddocument.getElementsByClassName('fbRemindersStory');
  for(i=3D0;i&lt;rems.length;i++){
	if(fbpoptsobj.rcbirthdays){
	  if(rems[i].querySelector('u') &amp;&amp; rems[i].querySelector('u').text=
Content.match(/birthday/))
	    rems[i].style.display=3D'none';
    }
	if(fbpoptsobj.rcsavedlinks){
	  if(rems[i].querySelector('u') &amp;&amp; rems[i].querySelector('u').text=
Content.match(/saved/))
	    rems[i].style.display=3D'none';
    }
  }
  rems=3Dnull;
}

function labelnewsfeed() {
  if(debug)
    console.log('adding label to newsfeed');
  var bod =3D document.getElementsByTagName('body')[0];
  var bodclass =3D  bod.className;
  if(document.querySelector('#pinnedNav li.selectedItem,#universalNav li.se=
lectedItem')) {
    if(!bodclass.match(/ newsfeed/))
      bod.setAttribute('class',bodclass +' newsfeed');
  }
  else
    if(bodclass.match(/ newsfeed/))
      bod.setAttribute('class',bodclass.replace(/ newsfeed/,''));
  bod=3Dbodclass=3Dnull;
}

function clickseemore(section){
  if(section=3D=3D"shortcuts")
	var secQS=3D"#pinnedNav a._y-c";
  else if(section=3D=3D"explore")
	var secQS=3D"#appsNav a._y-c";
  /*else if(section=3D=3D"trending")
	var secQS=3D"#pagelet_trending_tags_and_topics a[data-position=3D'seemore'=
]";
  */
	 =20
  if(document.querySelector(secQS)){
	document.querySelector(secQS).href=3D"javascript:;";
	document.querySelector(secQS).click();
  }
}

function resetdfa(){
  var dfali=3Ddocument.getElementById('leftnavdfalinkli');
  if(!dfali)
    return;
  dfali.parentNode.removeChild(dfali);
  if(document.getElementById('delfriendsalertdiv')){
    document.getElementById('delfriendsalertdiv').parentNode.removeChild(do=
cument.getElementById('delfriendsalertdiv'));
  }
  fbpsavevalue( "deletedfriendstore-" + currentuserid,"" );
}

function checkdelfriendstorage(delfriendsjson) {
  //console.log('checkdelfriendstorage()' + delfriendsjson);
  //console.log(typeof(delfriendsjson));
  if(!document.getElementById('sideNav') || (!fbpoptsobj.deletedfriendalert=
s))
    return;
  if(typeof (delfriendsjson)=3D=3D'undefined') {
    //console.log('loading the shizz...');
	if(issafari)
      var tmpx=3Dfbploadvalue("checkdelfriendstorage-deletedfriendstore-" +=
 currentuserid, checkdelfriendstorage);
    else
	  var tmpx=3Dfbploadvalue("deletedfriendstore-" + currentuserid, checkdelf=
riendstorage);

	//console.log("tmpx=3D"+tmpx);
	if (tmpx=3D=3D"-999" || typeof(tmpx)=3D=3D'undefined' || tmpx=3D=3D'')
	  return;
	else=20
	  delfriendsjson=3Dtmpx;
	//console.log("delfriendsjson=3D"+delfriendsjson);
  }
  if(!delfriendsjson || delfriendsjson=3D=3D"") {
    //console.log("we don't have any data in delfriendsjson");
    return;
  }
  else {
    //console.log(delfriendsjson);
    var delfriendstore,delfriendsobj;
=09
    //query deletedfriendstore in localstorage
    //"deletedfriendstore-628191926"
    //generate alert
    // also show left column indicator of deleted friends.
=20
    //delfriendstore =3D fbploadvalue("deletedfriendstore" + currentuserid)=
;
    delfriendsobj=3DJSON.parse(delfriendsjson);
    if(typeof(delfriendsobj) !=3D'object') {
      return;
	}
    for(i in delfriendsobj) {
      console.log(delfriendsobj[i] , i);
    }
    //console.log("number of del friends=3D " + Object.keys(delfriendsobj).=
length);
	if(Object.keys(delfriendsobj).length &gt; 0)
	if((document.getElementById('listsNav') || document.getElementById('univer=
salNav')) &amp;&amp; !(document.getElementById('replaydeletedfriendsalert')=
)) {
      var tmpli=3Ddocument.createElement('li');
	  tmpli.id=3D"leftnavdfalinkli";
	  tmpli.setAttribute('class','clearfix sideNavItem stat_elem');
	  //tmpli.setAttribute('style','position:relative;left:26px !important;wid=
th:162px !important;float:left;margin-top:6px');
      tmpli.innerHTML=3D'&lt;div style=3D"background-color:pink"&gt;&lt;a t=
itle=3D"Replay Deleted Friends Alert" id=3D"replaydeletedfriendsalert" clas=
s=3D"_5afe" style=3D"margin-left:-24px;display:inline-block" href=3D"javasc=
ript:;"&gt;&lt;img src=3D"' + friendIconClass + '" style=3D"vertical-align:=
middle"&gt;&lt;/img&gt;&amp;nbsp;Deleted Friends &amp;nbsp;&lt;span style=
=3D"color:#4e5665"&gt;'+ Object.keys(delfriendsobj).length + '&lt;/span&gt;=
&lt;/a&gt;&amp;nbsp;&lt;a id=3D"clearleftnavdfalink" style=3D"color:red;dis=
play:inline-block" href=3D"javascript:;" title=3D"Clear Deleted Friends Ale=
rt"&gt;X&lt;/a&gt;&lt;/div&gt;';
	  if(document.getElementById('listsNav'))
	    document.getElementById('listsNav').getElementsByTagName('ul')[0].inse=
rtBefore(tmpli, document.getElementById('listsNav').getElementsByTagName('u=
l')[0].firstChild);
	  else
		//document.getElementById('appsNav').getElementsByTagName('ul')[0].append=
Child(tmpli);
	    document.getElementById('appsNav').getElementsByTagName('ul')[0].inser=
tBefore(tmpli, document.getElementById('appsNav').getElementsByTagName('ul'=
)[0].firstChild);
	  document.getElementById('replaydeletedfriendsalert').addEventListener('c=
lick',function(){dspdeletedfriendalert();},false); //window.alert(deletedfr=
iendsmsg)=20
	  document.getElementById('clearleftnavdfalink').addEventListener('click',=
 resetdfa ,false);
    }
 =20
	// not sure what the point of this bit of code is now, so commenting it ou=
t...
	//else if(document.getElementById('replaydeletedfriendsalert'))
	//  document.getElementById('replaydeletedfriendsalert').style.display=3D"=
inline-block";
=09
    // See Line 5529 for where to generate the link in the left column :- i=
f(Object.keys(deletedfriendstore).length)
    if(debug)
      console.log('checkdelfriendstorage');
 }
}

function tamesearchbox() {
  try { // when enter is pressed do a search
	//document.querySelector('#blueBarNAXAnchor div[role=3D"search"] div[onfoc=
us]').addEventListener('keydown',function(e){if(e.keyCode=3D=3D'13') docume=
nt.querySelector('#facebar_typeahead_view_list span.seeMore').click() },fal=
se)
	document.querySelector('#blueBarDOMInspector div[role=3D"search"] div').ad=
dEventListener('keydown',function(e){if(e.keyCode=3D=3D'13') document.query=
Selector('#blueBarDOMInspector div[role=3D"search"] button').click() },fals=
e)
  }
  catch(e) {
	console.log('Error in tamesearchbox function, (setting event listener on s=
earch box, perhaps user doesn\'t have Graph Search ) :=3D ' + e);
  }
}

function enabletagforfriendlists() {
  if(debug)
    console.log('Enable auto tag for friends lists');
  if(window.location.href.match(/facebook.com\/settings|\?viewas=3D/)) {
    if(document.getElementsByTagName('html')[0].className.match(/fbpstopaut=
otags/))
	  document.getElementsByTagName('html')[0].className=3Ddocument.getElement=
sByTagName('html')[0].className.replace(/fbpstopautotags/,'')
  }
  else
    if(!document.getElementsByTagName('html')[0].className.match(/fbpstopau=
totags/)) {
	  document.getElementsByTagName('html')[0].className +=3D ' fbpstopautotag=
s';
	}
  if(window.location.href.match(/\/lists\//) &amp;&amp; document.querySelec=
tor('#friend_list_sidecol input[type=3D"text"]')) {
    //document.querySelector('#friend_list_sidecol input[type=3D"text"]').a=
ddEventListener('focus',enableautotags,false);
    document.querySelector('#friend_list_sidecol input[type=3D"text"]').add=
EventListener('blur',disableautotags,false);
    document.querySelector('#friend_list_sidecol input[type=3D"text"]').add=
EventListener('keydown',enableautotags,false);
  }
  else if(window.location.href.match(/\/events\//) &amp;&amp; document.quer=
ySelector('#event_invite input[type=3D"text"]')) {
    document.querySelector('#event_invite input[type=3D"text"]').addEventLi=
stener('blur',disableautotags,false);
    document.querySelector('#event_invite input[type=3D"text"]').addEventLi=
stener('keydown',enableautotags,false);
  }
  else if(document.getElementById('q')) {
    document.getElementById('q').addEventListener('blur',disableautotags,fa=
lse);
    document.getElementById('q').addEventListener('keydown',enableautotags,=
false);
  }
}

function disableautotags(){
  window.setTimeout(function(){
	if(!document.getElementsByTagName('html')[0].className.match(/fbpstopautot=
ags/)) {=20
	  //console.log("disabling autotags");
      document.getElementsByTagName('html')[0].className=3Ddocument.getElem=
entsByTagName('html')[0].className + ' fbpstopautotags';
	}
  }, 2000);
}

function enableautotags(){
  //console.log("enabling autotags");
  document.getElementsByTagName('html')[0].className=3Ddocument.getElements=
ByTagName('html')[0].className.replace(/fbpstopautotags/,'');
}

function removetickfromnewsfeedselector(){
  document.querySelector('li._54nd.__MenuItem').className=3Ddocument.queryS=
elector('li._54nd.__MenuItem').className.replace(/_54nd/,'');
}
function mouseovernewsfeedselectormenuitem(e){
  e.target.style.backgroundColor=3D'rgb(59, 89, 152)';e.target.style.color=
=3D'white';
}

function mouseoutnewsfeedselectormenuitem(e){
  e.target.style.backgroundColor=3D'inherit';e.target.style.color=3D'inheri=
t';
}

function insertfeedintonewsfeedselector(menuid,menuname,menuhref){
=09
  var tspan=3Ddocument.createElement('span');=20
  tspan.setAttribute('class','_54nh');
  var inpointA=3Ddocument.querySelectorAll('div.uiContextualLayer.uiContext=
ualLayerBelowRight a[href*=3D"?sk=3Dh_chr"]'); =20
  var inpoint=3DinpointA[inpointA.length-1];

  // GENERAL FEED
  var pstorieslink=3Ddocument.createElement('a');
  pstorieslink.id=3Dmenuid; //pstorieslink
  pstorieslink.href=3Dmenuhref; //"/?sk=3Dphotos";
  pstorieslink.className=3D'_54nc';
  pstorieslink.appendChild(tspan);//tspan.cloneNode(1)
  pstorieslink.firstChild.textContent=3Dmenuname;//"Photos Feed";
  var pli=3Ddocument.createElement('li');
  pli.style.cursor=3D"pointer";
  pli.className=3D'_54ni __MenuItem';
  if(window.location.href.match(menuhref)){ // /\?sk=3Dphotos/)
	removetickfromnewsfeedselector();
	pli.className+=3D' _54nd';
  }

  pli.appendChild(pstorieslink);

  inpoint.parentNode.parentNode.insertBefore(pli, inpoint.parentNode.nextSi=
bling);
  document.getElementById(menuid).parentNode.addEventListener('mouseover',m=
ouseovernewsfeedselectormenuitem, false);
  document.getElementById(menuid).parentNode.addEventListener('mouseout',mo=
useoutnewsfeedselectormenuitem, false);
}

function addnewsfeedmenuclicklistener() {
  if(debug)
    console.log('add extra feed links to newsfeed selector menu');
  var feedselbutt =3D document.querySelector('#pinnedNav div.uiPopover.uiSi=
deNavAux a,#universalNav div.uiPopover.uiSideNavAux a');
  if(feedselbutt)
    feedselbutt.addEventListener('click',function(){window.setTimeout(addne=
wsfeedmenufeeds,1000)},false)
}
function addnewsfeedmenufeeds(){
    if(debug)
	  console.log('clicked - shows event listener is working');
	  if(document.getElementById('mstorieslink')) {
		if(document.querySelector("div.uiContextualLayerPositioner.hidden_elem #m=
storieslink")) {
		  // fix top stories link
		  try{
		    if(document.querySelector('div.uiContextualLayerPositioner:not([class=
*=3D"hidden_elem"])').querySelector('a[href*=3D"?sk=3Dh_nor"]').href)
		      document.querySelector('div.uiContextualLayerPositioner:not([class*=
=3D"hidden_elem"])').querySelector('a[href*=3D"?sk=3Dh_nor"]').href=3D"/?sk=
=3Dh_nor#topstories";
		  }
		  catch(e){
			  ; // do nothing at the moment...
		  }

		  // fix hidden feed drop down menu=20
		  var inpoint=3Ddocument.querySelector('div.uiContextualLayerPositioner:n=
ot([class*=3D"hidden_elem"]) a[href*=3D"?sk=3Dh_chr"]');
		  try{
		    inpoint.parentNode.parentNode.insertBefore(document.getElementById('p=
storieslink').parentNode, inpoint.parentNode.nextSibling);
			if(document.getElementById("navItem_605397933004645")) // if explore fee=
d exists
			  inpoint.parentNode.parentNode.insertBefore(document.getElementById('es=
torieslink').parentNode, inpoint.parentNode.nextSibling);
			inpoint.parentNode.parentNode.insertBefore(document.getElementById('gsto=
rieslink').parentNode, inpoint.parentNode.nextSibling);
			inpoint.parentNode.parentNode.insertBefore(document.getElementById('pgst=
orieslink').parentNode, inpoint.parentNode.nextSibling);
		    inpoint.parentNode.parentNode.insertBefore(document.getElementById('m=
storieslink').parentNode, inpoint.parentNode.nextSibling);
		  }
		  catch(e) {
			  ; // do nothing should be ok?
		  }
		}

		var ticked=3Ddocument.querySelectorAll("div.uiContextualLayer.uiContextua=
lLayerBelowRight li[class*=3D'_54nd']")
		for(i=3D0;i&lt;ticked.length;i++)=20
		  ticked[i].className=3Dticked[i].className.replace(/_54nd/,'');
	    if(window.location.href.match(/\/?sk=3Dfriends/)) {
		  document.getElementById('mstorieslink').parentNode.className+=3D' _54nd=
';
		}
        else if (window.location.href.match(/\?sk=3Dphotos/)) {
		  document.getElementById('pstorieslink').parentNode.className+=3D' _54nd=
';
		}
		else if (window.location.href.match(/\?sk=3Dgroups/)) {
		  document.getElementById('gstorieslink').parentNode.className+=3D' _54nd=
';
		}
		else if (window.location.href.match(/\?sk=3Dpages|\/pages\/feed|\/feed\/p=
ages/)) {
		  document.getElementById('pgstorieslink').parentNode.className+=3D' _54n=
d';
		}
		else if (window.location.href.match(/\explore/)) {
		  document.getElementById('estorieslink').parentNode.className+=3D' _54nd=
';
		}
		else if (window.location.href.match(/\?sk=3Dh_chr/) || document.querySele=
ctor("#contentCol a[href=3D'/?sk=3Dh_nor']")){
		  try {
		    document.querySelector('div.uiContextualLayerPositioner:not([class*=
=3D"hidden_elem"]) a[href*=3D"?sk=3Dh_chr"]').parentNode.className +=3D " _=
54nd";
		  }
		  catch(e) {;=20
		    // do nothing
		  }
		}
		else if (window.location.href.match(/\?sk=3Dh_nor/) ){
		  try{
		    document.querySelector('div.uiContextualLayerPositioner:not([class*=
=3D"hidden_elem"]) a[href*=3D"?sk=3Dh_nor"]').parentNode.className +=3D " _=
54nd";
		  }catch (e) {
			;// do nothing
		  }	 =20
	=09
		}

	    return;
	   }
	   else {

         var inpointA=3Ddocument.querySelectorAll('div.uiContextualLayer.ui=
ContextualLayerBelowRight a[href*=3D"?sk=3Dh_chr"]');
         if(!inpointA.length) {
		   console.log('Didnt find the newsfeed feed selector menu, try again in =
1 seconds');
		   window.setTimeout(addnewsfeedmenufeeds,1000);
	       return;
         }
		 // INSERT PHOTOS FEED LINK
		 insertfeedintonewsfeedselector("pstorieslink","Photos Feed","/?sk=3Dphot=
os");

		 // INSERT EXPLORE FEED LINK
		 if(document.getElementById("navItem_605397933004645")) // if explore fee=
d exists
		   insertfeedintonewsfeedselector("estorieslink","Explore Feed","/explore=
");

		 // INSERT GROUPS FEED LINK
		 insertfeedintonewsfeedselector("gstorieslink","Groups Feed","/?sk=3Dgrou=
ps");

		 // INSERT PAGES FEED LINK
		 insertfeedintonewsfeedselector("pgstorieslink","Pages Feed","/?sk=3Dpage=
s");

		 // INSERT FRIENDS FEED LINK
		 insertfeedintonewsfeedselector("mstorieslink","Friends Feed","/?sk=3Dfri=
ends");

		if (window.location.href.match(/\?sk=3Dh_chr/) || document.querySelector(=
"#contentCol a[href=3D'/?sk=3Dh_nor']")){ // highlight most recent
		  try{
		    document.querySelector('div.uiContextualLayerPositioner:not([class*=
=3D"hidden_elem"])').querySelector('li:not([class*=3D"_54nd"]) a[href*=3D"?=
sk=3Dh_chr"]').parentNode.className+=3D ' _54nd';
		  }
		  catch(e) {
			; // do nothing
		  }
		}
		else if (window.location.href.match(/\?sk=3Dh_nor/) ){ // highlight top s=
tories
		  try{
		    document.querySelector('div.uiContextualLayerPositioner:not([class*=
=3D"hidden_elem"])').querySelector('li:not([class*=3D"_54nd"]) a[href*=3D"?=
sk=3Dh_nor"]').parentNode.className+=3D ' _54nd';
		  }
		  catch(e) {
			; // do nothing
		  }
		}
		// fix top stories link
		if(document.querySelector('div.uiContextualLayerPositioner:not([class*=3D=
"hidden_elem"])') &amp;&amp; document.querySelector('div.uiContextualLayerP=
ositioner:not([class*=3D"hidden_elem"])').querySelector('a[href*=3D"?sk=3Dh=
_nor"]').href)
		  document.querySelector('div.uiContextualLayerPositioner:not([class*=3D"=
hidden_elem"])').querySelector('a[href*=3D"?sk=3Dh_nor"]').href=3D"/?sk=3Dh=
_nor#topstories";
	   }
	 }

function addclearadprefsbutt() {
  if(debug)
    console.log('addclearadprefsbutt');
  var x,y,i,j;
  var clearadprefsbutt=3Ddocument.createElement('button');
  clearadprefsbutt.textContent=3D"Clear 'Interests' with FBP";
  clearadprefsbutt.className=3D"inputsubmit uiButton uiButtonConfirm uiButt=
onMedium";
  clearadprefsbutt.style=3D"margin-top:3px;margin-bottom:3px";

  var clearadvertisersbutt=3Ddocument.createElement('button');
  clearadvertisersbutt.textContent=3D"Clear 'Advertisers' with FBP";
  clearadvertisersbutt.className=3D"inputsubmit uiButton uiButtonConfirm ui=
ButtonMedium";
  clearadvertisersbutt.style=3D"margin-top:3px;margin-bottom:3px";

  var clearyourcategoriesbutt=3Ddocument.createElement('button');
  clearyourcategoriesbutt.textContent=3D"Clear 'Your Categories' with FBP";
  clearyourcategoriesbutt.className=3D"inputsubmit uiButton uiButtonConfirm=
 uiButtonMedium";
  clearyourcategoriesbutt.style=3D"margin-top:3px;margin-bottom:3px";
 =20
  clearadprefsbutt.addEventListener('click',clearadprefs,false);
  clearadvertisersbutt.addEventListener('click',clearadvertisers,false);
  clearyourcategoriesbutt.addEventListener('click',clearyourcategories,fals=
e);

  var adtitles=3Ddocument.querySelectorAll('._2qo6');
  //console.log(adtitles);
  if(adtitles.length){
	adtitles[0].parentNode.insertBefore(clearadprefsbutt, adtitles[0].nextSibl=
ing);
	adtitles[1].parentNode.insertBefore(clearadvertisersbutt, adtitles[1].next=
Sibling);
	adtitles[2].parentNode.insertBefore(clearyourcategoriesbutt, adtitles[2].n=
extSibling);
    var tmpx=3Ddocument.querySelectorAll("._2qo2"); // eliminate margins
    for(i=3D0;i&lt;tmpx.length;i++)
      tmpx[i].style.margin=3D"0 0 0 0";
  }
}


/* code to repopulate the interests list with removed interests for use whe=
n testing the clearadprefs() function:
    var seemoreinterval=3Dwindow.setInterval(function(){
	  if(document.querySelector('._2qor ._45yr')) {
	    document.querySelector('._2qor ._45yr').click();
        console.log('clicking see more');
      }
      else{
		console.log("Halting Clicking See More Links");
	    clearInterval(seemoreinterval);
		// add the interests back again
		x=3Ddocument.querySelectorAll("._2b2p._4jy0._4jy3._517h._51sy._42ft");for=
(i=3D0;i&lt;x.length;i++)window.setTimeout(function(i){console.log(x[i]);x[=
i].click()},i*500,i);
	  }
	},500)=09
*/
function clearadprefs() {
  var delay=3D550;
  var currdelay =3D delay;
  //console.log('clear ad prefs func');
  var intsRootEl =3D "#" + document.getElementById('ads_preferences_desktop=
_root').childNodes[1].id; // "#u_0_m";=20
  if(!document.querySelector(intsRootEl + " ._2qor")) // open interests sec=
tion if its not already open
    document.querySelectorAll(intsRootEl + " ._2qo6")[0].click();=20

	// list of interest categories =3D document.querySelectorAll('._4xjz');
	// list of interests on screen currently=3D document.querySelectorAll('._2=
b2h._2b2i button');

	/* temp commented out until see more link seen in the wild
	while(ad_profile_Interests.lastChild.previousSibling.lastChild.textContent=
=3D=3D"See More") { // click all the See More links
	  ad_profile_Interests.lastChild.previousSibling.lastChild.click();
	}
	*/
=09

	// click the "see more" link to show all in interest category before remov=
ing individual interests in that category
    // but only click "see more" if its actual Interests, and not Removed I=
nterests
	//if(!(document.querySelector('._5vwz._5vwy._45hc._1hqh') &amp;&amp; docum=
ent.querySelector('._5vwz._5vwy._45hc._1hqh').textContent.match(/Removed In=
terests/i)))
      var seemoreinterval=3Dwindow.setInterval(function(){
		if((document.querySelector('._5vwz._5vwy._45hc._1hqh') &amp;&amp; documen=
t.querySelector('._5vwz._5vwy._45hc._1hqh').textContent.match(/Removed Inte=
rests/i))) {
		  clearInterval(seemoreinterval);
		  console.log("Halting Clicking See More Links - as now on Removed Intere=
sts tab");
	      return;
		}
	    if(document.querySelector('._2qor ._45yr')) {
 	      document.querySelector('._2qor ._45yr').click();
          console.log('clicking see more');
        }
        else{
		  console.log("Halting Clicking See More Links");
	      clearInterval(seemoreinterval);
	    }
	  },500);
 =20
  var adtypes=3Ddocument.querySelectorAll(intsRootEl + ' ._2b2h._2b2i butto=
n[title=3D"Remove"]'); // check if we are on the Removed Interests category=
 or not
 =20
  if(!adtypes.length) {
	if(!document.querySelector(intsRootEl + " li._1hqh").nextSibling)
      return;
    document.querySelector(intsRootEl + " li._1hqh").nextSibling.click();
	adtypes=3Ddocument.querySelectorAll(intsRootEl + ' ._2b2h._2b2i button[tit=
le=3D"Remove"]');
  }

  for(var j=3D0;j&lt;adtypes.length;j++) {
    (function(elem){
      window.setTimeout( function(){if(elem.title=3D=3D"Remove")elem.click(=
);}, currdelay);
    })(adtypes[j]);
    currdelay +=3D delay;
	if(j=3D=3D(adtypes.length-1)){
	  console.log('looping clearadprefs()');
	  currdelay +=3D delay;
	  window.setTimeout(clearadprefs,currdelay);
	}
  }
}

function clearadvertisers() {
  var delay=3D550;
  var currdelay =3D delay;
  var advsRootEl =3D "#" + document.getElementById('ads_preferences_desktop=
_root').childNodes[2].id; //"#u_0_n";
  if(!document.querySelector(advsRootEl + ' ._2qor')) // open advertisers s=
ection if its not already open
    document.querySelectorAll(advsRootEl + " ._2qo6")[0].click();

  /*  temp commented out until see more link seen in the wild
  while(ad_profile_Advertisers.lastChild.previousSibling.lastChild.textCont=
ent=3D=3D"See More") { // click all the See More links
     ad_profile_Advertisers.lastChild.previousSibling.lastChild.click();
  }
  */

  /*
  if(!document.getElementById('ad_profile_Advertisers') )
	return;	 =20
  */

  /* old version of clear advertisers as backup in case we screw it up */
  var advertisers=3Ddocument.querySelectorAll(advsRootEl + ' ._2b2h._2b2i b=
utton[title=3D"Remove"]');
  if(!advertisers.length) {
	//if(typeof(document.querySelectorAll("#u_0_4 li._1hqh")[0].nextSibling)=
=3D=3Dnull)
    if(!document.querySelector(advsRootEl + " li._1hqh").nextSibling)
	  return;
	document.querySelectorAll(advsRootEl + " li._1hqh")[0].nextSibling.click()=
;
	advertisers=3Ddocument.querySelectorAll(advsRootEl + ' ._2b2h._2b2i button=
[title=3D"Remove"]');
  }
  for(j=3D0;j&lt;advertisers.length;j++) {
    (function(elem){
      setTimeout( function(){elem.click();}, currdelay);
    })(advertisers[j]);
    currdelay +=3D delay;
	if(j=3D=3D(advertisers.length-1)){
	  currdelay +=3D delay;
	  window.setTimeout(clearadvertisers,currdelay);
	}
  }

  /*  new version of clearadvertisers, which doesnt quite work yet. its bec=
ause certain tabs have different style remove buttons (that require 2 click=
s)
  var advertisers=3Ddocument.querySelectorAll(advsRootEl + ' ._2b2h._2b2i b=
utton'); //[title=3D"Remove"]
  if(!advertisers.length) {
	//if(typeof(document.querySelectorAll("#u_0_4 li._1hqh")[0].nextSibling)=
=3D=3Dnull)
    if(!document.querySelector(advsRootEl + " li._1hqh").nextSibling)
	  return;
	document.querySelectorAll(advsRootEl + " li._1hqh")[0].nextSibling.click()=
;
	advertisers=3Ddocument.querySelectorAll(advsRootEl + ' ._2b2h._2b2i button=
');//[title=3D"Remove"]
  }
  for(var j=3D0;j&lt;advertisers.length;j++) {
    (function(elem){
      setTimeout( function(){
		if(!elem.getAttribute('processed'))
		if(elem.getAttribute &amp;&amp; elem.getAttribute('title') &amp;&amp; ele=
m.getAttribute('title')=3D=3D"Remove"){
		  elem.click();
	      elem.setAttribute('processed','1');
		}
		else{
		  elem.click();
		  document.querySelector('span._o6j').click();
		  elem.setAttribute('processed','1');
		}
	=09
	  }, currdelay);
    })(advertisers[j]);
    currdelay +=3D delay;
	console.log(advertisers.length,j);
=09
	if(j=3D=3D(advertisers.length)){
	  console.log('looping clearadvertisers()');
	  currdelay +=3D delay;
	  window.setTimeout(clearadvertisers,currdelay);
	}
  }
  */
}
function clearyourcategories(){
  var delay=3D550;
  var currdelay =3D delay;
  var catsRootEl =3D "#" + document.getElementById('ads_preferences_desktop=
_root').childNodes[3].id;
  if(!document.querySelector(catsRootEl + ' ._2qor')) // open Your Informat=
ion section if its not already open
    document.querySelectorAll(catsRootEl + " ._2qo6")[0].click();
 =20
  // open the Your Categories Tab
  document.querySelectorAll("#yourinfo li")[1].click();
  window.setTimeout(function(){
    var els=3Ddocument.querySelectorAll('._gze._kcu:not(.fbpd)');
	for(i=3D0;i&lt;els.length;i++){
      els[i].classList.add("fbpd");
      if(i%2){
		els[i].firstChild.click()
	  }
	}
=09
    }
  ,500);

/*
  var advertisers=3Ddocument.querySelectorAll(advsRootEl + ' ._2b2h._2b2i b=
utton[title=3D"Remove"]');
  if(!advertisers.length) {
	//if(typeof(document.querySelectorAll("#u_0_4 li._1hqh")[0].nextSibling)=
=3D=3Dnull)
    if(!document.querySelector(advsRootEl + " li._1hqh").nextSibling)
	  return;
	document.querySelectorAll(advsRootEl + " li._1hqh")[0].nextSibling.click()=
;
	advertisers=3Ddocument.querySelectorAll(advsRootEl + ' ._2b2h._2b2i button=
[title=3D"Remove"]');
  }
  for(j=3D0;j&lt;advertisers.length;j++) {
    (function(elem){
      setTimeout( function(){elem.click();}, currdelay);
    })(advertisers[j]);
    currdelay +=3D delay;
	if(j=3D=3D(advertisers.length-1)){
	  currdelay +=3D delay;
	  window.setTimeout(clearadvertisers,currdelay);
	}
  }
  */
}

function fixPageBookmarks() {
  if(!document.location.href.match(/facebook\.com\/bookmarks\/pages/) &amp;=
&amp; !document.getElementById('pagelet_bookmark_seeall'))
	return;
  var pnots=3Ddocument.getElementById('pagelet_bookmark_seeall').querySelec=
torAll('.countValue._2jgb');
  //console.log(pnots);
  var notlink;
  for(var i=3D0;i&lt;pnots.length;i++) {
	notlinkhref=3Dpnots[i].parentNode.parentNode.href.split(/\?/)[0] + "notifi=
cations";
	notlink=3Ddocument.createElement('a');
	notlink.href=3Dnotlinkhref;
	notlink.textContent=3D' N';
	notlink.title=3D"Go Straight to Notifications Page";
	notlink.target=3D"_blank";
	notlink.style=3D'position:absolute;margin-top:-20px;margin-left:-7px';
	pnots[i].parentNode.parentNode.parentNode.appendChild(notlink);
  }
}

/////////////////////////////////
// BEGIN INVITE ALL FUNCTIONALITY
/////////////////////////////////

//  not needed anymore since facebook added the same functionality
// Needed again sine facebook removed the invite all functionality...

var pageinvitelimitnotreached; //global flag
function checkpageinvitelimit() {
  if(document.querySelectorAll('h3._52c9').length=3D=3D1)
	return true;
  else if(document.querySelectorAll('h3._52c9').length=3D=3D2) {
	document.getElementById('procInviteAllDiv').style.display=3D'none';
	pageinvitelimitnotreached=3D0;
	return false;
  }
  else=20
	return true;
}
function inviteAll() { // comes with a delay
  var invButts=3Ddocument.querySelectorAll('div.listSection li[class$=3D"_1=
sn"] a.uiButton'); //document.querySelectorAll('div.listSection a.uiButton'=
);
  pageinvitelimitnotreached=3D1; // global var
  var j=3D900; // delay in milliseconds
  var scrollbox;
  var delay =3D j;
  if(invButts.length=3D=3D0) {
	procInviteAllDiv('updateText','&lt;b&gt;No friends left to invite.&lt;/b&g=
t;&lt;p/&gt;&lt;a class=3D"_42ft _42fu layerCancel autofocus uiOverlayButto=
n selected _42g- _42gy" onclick=3D"this.parentNode.parentNode.style.display=
=3D\'none\'"&gt;Close&lt;/a&gt;');
	return;
  }
  if(document.querySelector('.fbProfileBrowserResult'))
	scrollbox=3Ddocument.getElementsByClassName('fbProfileBrowserResult')[0];
  for(var i=3D0;i&lt;invButts.length;i++) {
	(function(elem,index){
	   if(i!=3DinvButts.length-1)
	     setTimeout( function(){if(typeof scrollbox!=3D'undefined' &amp;&amp; =
pageinvitelimitnotreached &amp;&amp; checkpageinvitelimit()){scrollbox.scro=
llTop=3Delem.offsetTop;  elem.click(); procInviteAllDiv('updateText','&lt;b=
&gt;Inviting Friend: '+ index +' / ' + invButts.length + '&lt;/b&gt;&lt;p/&=
gt;' + elem.parentNode.parentNode.parentNode.parentNode.firstChild.getEleme=
ntsByTagName('img')[0].outerHTML + '&lt;br/&gt;&lt;i&gt;Please Wait...&lt;/=
i&gt; &lt;img src=3D"//www.facebook.com/images/loaders/indicator_blue_small=
.gif"&gt;')} else delay=3D0;}, delay);
	   else
		 setTimeout( function(){if(typeof scrollbox!=3D'undefined' &amp;&amp; pag=
einvitelimitnotreached &amp;&amp; checkpageinvitelimit()){scrollbox.scrollT=
op=3Delem.offsetTop; elem.click(); procInviteAllDiv('updateText','&lt;b&gt;=
Finished Inviting All Friends.&lt;/b&gt;&lt;p/&gt;&lt;a class=3D"_42ft _42f=
u layerCancel autofocus uiOverlayButton selected _42g- _42gy" onclick=3D"th=
is.parentNode.parentNode.style.display=3D\'none\'"&gt;Close&lt;/a&gt;');}},=
 delay);
	 })(invButts[i],i);
	 delay +=3D (j + Math.floor((Math.random() * 300) + 1));
  }
}

function loadAllUsers() {
  var userList =3D document.querySelector('div.fbProfileBrowserResult');
  var tmpScrHeight, tmpScrTop;

  var x=3DsetInterval(function(){
                 if(userList.scrollTop !=3DuserList.scrollHeight){
				   //console.log(userList.scrollTop,userList.scrollHeight);
                   tmpScrHeight =3D userList.scrollHeight;
                   tmpScrTop =3D userList.scrollTop;
                   userList.scrollTop =3D userList.scrollHeight;
				   procInviteAllDiv('updateText','&lt;b&gt;Loading Friend List&lt;p/&gt=
;Please Wait...&lt;p/&gt;&lt;img src=3D"//www.facebook.com/images/loaders/i=
ndicator_blue_small.gif"&gt;&lt;/b&gt;');

                   if((userList.scrollTop=3D=3DtmpScrTop)  &amp;&amp; (user=
List.scrollHeight=3D=3DtmpScrHeight)) {
                     clearInterval(x);
					 procInviteAllDiv('updateText','&lt;b&gt;Finished Loading Friend List.=
&lt;p/&gt;Will now invite all Friends ...&lt;/b&gt;');
					 inviteAll();
				   }
                 }
                 else {
				   clearInterval(x);
				   procInviteAllDiv('updateText','Friend List Fully Loaded');
				 }
			   },800);
}


function procInviteAllDiv(command,text) { // still used by showdeactivatedf=
riendlist function
  var procInviteAllDiv;
  if(!document.getElementById('procInviteAllDiv')) {
	procInviteAllDiv=3Ddocument.createElement('div');
    procInviteAllDiv.id=3D'procInviteAllDiv';
	procInviteAllDiv.className=3D'procInviteAllDiv';
	procInviteAllDiv.setAttribute('style',"position: fixed; text-align:center;=
 top: 50%; left: 50%; width: 17em; height: 7.5em; margin-top: -9em; margin-=
left: -15em; border: 3px solid red; background-color: #f3f3f3; z-index: 999=
; padding: 10px");
	document.getElementsByTagName('body')[0].appendChild(procInviteAllDiv);
  }
  else {
	procInviteAllDiv=3Ddocument.getElementById('procInviteAllDiv');
  }
  switch(command) {
    case 'updateText':
	  procInviteAllDiv.style.display=3D'block';
      procInviteAllDiv.innerHTML=3Dtext;
	  //console.log(text);
      break;
    case 'destroy':
      procInviteAllDiv.style.display=3D'none'; // could delete div entirely=
...
      break;
    default:
      ;// do nothing
	  break;
  }
}

function initInviteAllButton() {
  //alert('hey ya!'); // for the old invite code
  window.setTimeout(addInviteAllButton,2000);
}
function initInviteAllButton2() {
  //alert('hey ya!'); //for the newer invite code
  window.setTimeout(addInviteAllButton2,2000);
}

var initInviteAllTries=3D0;

// this is the old invite code (kept in because facebook sometimes switches=
 back to the old version of the widget)
function addInviteAllButton() {
  //var daform=3Ddocument.querySelector('form[action^=3D"/ajax/pages/invite=
/send/"]');
  var daform=3Ddocument.querySelector('.fbProfileBrowser');
  if(!daform) {
	console.log('no "invite users to like page" form found');
	if(initInviteAllTries&lt;6) {
	  window.setTimeout(addInviteAllButton,2000);
      initInviteAllTries++;
    }
    return;
  }
  //var inviteAllButtDiv=3D"&lt;button id=3D"inviteAllButt"&gt;&lt;/button&=
gt;";
  var divButt=3Ddocument.createElement("div");
  divButt.style.marginBottom=3D'-10px';
  divButt.style.textAlign=3D'center';
 =20
  //&lt;a class=3D"uiButton _1sm" role=3D"button" href=3D"#"&gt;&lt;span cl=
ass=3D"uiButtonText"&gt;Invite&lt;/span&gt;&lt;/a&gt;
 =20
  var inviteAllButtLink=3Ddocument.createElement('a');
  inviteAllButtLink.style=3D"padding:4px;border:1px solid grey";
  //inviteAllButtLink.style.fontWeight=3D"800";
  //inviteAllButtLink.style.marginTop=3D"3px";
  inviteAllButtLink.className=3D"uiButton _1sm";
  inviteAllButtLink.style.id=3D"inviteAllButt";
  inviteAllButtLink.role=3D"button";
  //inviteAllButtLink.textContent=3D"&gt;&gt; Click here to invite all Your=
 Friends &lt;&lt;";
  //inviteAllButtLink.textContent=3D"&gt;&gt; Invite All &lt;&lt;";
  inviteAllButtLink.innerHTML=3D'&lt;span class=3D"uiButtonText" style=3D"b=
ackground-color:red;color:yellow"&gt;&amp;gt;&amp;gt; Invite All &amp;lt;&a=
mp;lt;&lt;/span&gt;';
  inviteAllButtLink.title=3D"Click here to invite all your friends to like =
this Page";
  inviteAllButtLink.addEventListener('click',loadAllUsers,false);
  divButt.appendChild(inviteAllButtLink);
  //daform.querySelector('div').appendChild(divButt);
 =20
  initInviteAllTries=3D0;
 =20
  if(document.querySelector('.uiToggleContext a span')) {
    //querySelector('.uiToggleContext a span i').style.backgroundImage=3D"u=
rl('https://i.imgur.com/2bRG0Q1.png')"; // add msg button
	document.querySelector('.uiToggleContext a').click();
	document.querySelector('div.fbProfileBrowserTypeahead').parentNode.appendC=
hild(divButt);
	if(document.querySelector('#page_fan_invite').getAttribute('placeholder'))
	  document.querySelector('#page_fan_invite').setAttribute("placeholder",do=
cument.querySelector('#page_fan_invite').getAttribute('placeholder')+ " ( A=
dding a short personal note makes an invitation more likely to be accepted =
)" );
  }
  else
	daform.querySelector('div').appendChild(divButt)
=09
}

// This is the newer invite code
function addInviteAllButton2() {
  var daform=3Ddocument.querySelector('textarea._58an'); // the message tex=
tbox
  if(!daform) {
	//console.log('no "invite users to like page" form found');
	if(initInviteAllTries&lt;6) {
	  window.setTimeout(addInviteAllButton,2000);
      initInviteAllTries++;
    }
    return;
  }
  initInviteAllTries=3D0;
  document.querySelector('a._4zza').style.color=3D"red"; // invite link
  document.querySelector('a._4zza').style.fontWeight=3D"bold";
 =20
  if(document.querySelector('div._4t2a h3') &amp;&amp; langCode.match(/en/)=
) {// the title of the dialog box
    var addNoteMsg=3Ddocument.createElement('div');
	addNoteMsg.style.fontWeight=3D'normal';
	addNoteMsg.style.color=3D'red';
	addNoteMsg.style.fontSize=3D'-2';
	addNoteMsg.innerHTML=3D"Before clicking the '&lt;b&gt;Select All&lt;/b&gt;=
' &amp; '&lt;b&gt;Send Invitations&lt;/b&gt;' buttons, please edit the mess=
age below to add a personal note about &lt;b&gt;FB Purity&lt;/b&gt;, as tha=
t will make people more likely to accept the invitation, Cheers! :D"
    document.querySelector('div._4t2a h3').parentNode.appendChild(addNoteMs=
g);
	document.querySelector('textarea._58an').style=3D"border:1px solid grey;pa=
dding:2px;background-color:rgb(245,245,245)";
  }
}

function initInviteAllToLikePage() {
  //var initInviteLink=3Ddocument.querySelector('#PageContextRowsPagelet_40=
8502197558 a[href^=3D"/ajax/choose/?type=3Dfan_page"]');
  //var initInviteLink=3Ddocument.querySelector('#pages_side_column a[href*=
=3D"friend_inviter_v2"]');
  var initInviteLink=3Ddocument.querySelector('#pages_side_column a[href^=
=3D"/ajax/choose/?type=3Dfan_page"],#pages_side_column a[href*=3D"friend_in=
viter_v2"]');
 =20
  if(initInviteLink) {
    //console.log('found it');
    initInviteLink.style.fontWeight=3D"800";
    initInviteLink.style.color=3D"red";
	initInviteLink.setAttribute('title',"Please invite all your friends to lik=
e the FBP Fan Page, to help spread the word about FB Purity, thanks!");
    initInviteLink.textContent=3DinitInviteLink.textContent;
    if(initInviteLink.textContent.match(/Invite friends to like this Page/)=
)
      initInviteLink.textContent=3D'Invite your friends to like this Page';
    if(initInviteLink.href.match(/friend_inviter_v2/))
      initInviteLink.addEventListener('click',initInviteAllButton2,false);
    else
	  initInviteLink.addEventListener('click',initInviteAllButton,false);
	initInviteAllTries=3D0;
  }
  else {
    //console.log('Didnt find the invite users to like page link');
	if(initInviteAllTries&lt;9) {
	  window.setTimeout(initInviteAllToLikePage,3000);
      initInviteAllTries++;
    }
  }
  // try to add click listener to share page button
  try{
    var shareButt=3Ddocument.getElementById('pagelet_page_cover').parentNod=
e.nextSibling.querySelector('button span[class=3D"accessible_elem"]').paren=
tNode.parentNode.previousSibling;
    if(shareButt){
      //shareButt.addEventListener('click',function(){window.alert('clicked=
 share butt')},false);
	  shareButt.addEventListener('click',addMessageToShareDialog,false);
	 =20
    }
  } catch(e) {
	// failed to locate the share button.
	if(debug)
	  console.log('failed to locate the share button');
  }
}

function addMessageToShareDialog(){
  var addPersonalNoteMsg=3Ddocument.createElement('div');
  addPersonalNoteMsg.style.fontWeight=3D'normal';
  addPersonalNoteMsg.style.marginTop=3D'5px';
  addPersonalNoteMsg.style.color=3D'red';
  addPersonalNoteMsg.innerHTML=3D'&lt;i&gt;Please add a personal note to yo=
ur share, as it will get more attention that way.&lt;/i&gt;';
  window.setTimeout(function(){
	try{
	  if(document.querySelector('div[data-testid=3D"react_share_dialog_content=
"]'))
        document.querySelector('div[data-testid=3D"react_share_dialog_conte=
nt"]').firstChild.appendChild(addPersonalNoteMsg);
	  if(document.querySelector('div[data-testid=3D"share-dialog-audience"]'))=
{
		addPersonalNoteMsg.style.marginTop=3D'10px';
		document.querySelector('div[data-testid=3D"share-dialog-audience"]').firs=
tChild.appendChild(addPersonalNoteMsg); =20
	  }
    } catch(e) {
	 console.log('Failed to add personal message to share dialog');
    }
  },2500);
}
///////////////////////////////
// END INVITE ALL FUNCTIONALITY
///////////////////////////////


///////////////////////////////////////
function initdeactivatedfriendslink (){
  if(debug)
    console.log('in initdeactivatedfriendslink function.');
  if(!window.location.href.match(/facebook\.com\/.*\/friends|friends_all/))
    return;
  if(!document.querySelector("#pagelet_timeline_main_column").getAttribute(=
'data-gt').match(currentuserid)) {
	console.log('didnt find pagelet_timeline_main_column');
	return;
  }

  if(document.getElementById('medley_header_friends'))
    document.getElementById('medley_header_friends').style.display=3D"inlin=
e-block";
  else {
	window.setTimeout(initdeactivatedfriendslink,4500);
	return;
  }

  if(document.getElementById('ShowDeactivatedFriendsLink'))
	return;
  var deactivatedfriendslink=3Ddocument.createElement('a');
  deactivatedfriendslink.style.display=3D"inline-block";
  deactivatedfriendslink.style.fontWeight=3D"bold";
  deactivatedfriendslink.style.position=3D"relative";
  deactivatedfriendslink.style.left=3D"20px";
  deactivatedfriendslink.style.top=3D"4px";
  deactivatedfriendslink.id=3D"ShowDeactivatedFriendsLink";
  deactivatedfriendslink.textContent=3D"Show Deactivated Friends";
  deactivatedfriendslink.addEventListener('click',showDeactivatedFriendsLis=
t,false);
  document.getElementById('medley_header_friends').parentNode.insertBefore(=
deactivatedfriendslink,document.getElementById('medley_header_friends').nex=
tSibling);
 =20
  if(window.location.hash.match('deactivated_friends'))
	showDeactivatedFriendsList();

  //document.getElementsByName('All Friends')[0].querySelector('span').styl=
e.color=3D"pink !important";
  if(document.getElementsByName('All Friends').length)
    document.getElementsByName('All Friends')[0].addEventListener('click',r=
esetFriendsList,false);
  else if(document.getElementsByName('All friends').length)
    document.getElementsByName('All friends')[0].addEventListener('click',r=
esetFriendsList,false);
  document.querySelector('#medley_header_friends &gt; a').addEventListener(=
'click',resetFriendsList,false);
}

function resetFriendsList() {
  if(!document.getElementById('deacfriendstyle'))
	return;
  var y=3Ddocument.querySelectorAll("li._698");
  for(i=3D0;i&lt;y.length;i++)
	y[i].style.display=3D"inline-block";
  document.getElementById('deacfriendstyle').textContent=3D"";
}

function showDeactivatedFriendsList() {
  var tmpScrHeight, tmpScrTop,totfriends,userlist;
  if(!document.getElementById('deacfriendstyle'))
    var deacfriendstyle=3Ddocument.createElement('style');
  else
	var deacfriendstyle=3Ddocument.getElementById('deacfriendstyle');
  deacfriendstyle.textContent=3D"";//li._698.activ {display:none} li._698.i=
nactiv {display:block !important;background-color:white;float:right} li._69=
8 {display:none !important}";
  deacfriendstyle.id=3D"deacfriendstyle";
  document.getElementsByTagName('head')[0].appendChild(deacfriendstyle);

  try{
   if(document.getElementsByName('All friends')[0])
    totfriends=3Ddocument.getElementsByName('All friends')[0].querySelector=
('._3d0').textContent;
   else if(document.getElementsByName('All Friends')[0])
	totfriends=3Ddocument.getElementsByName('All Friends')[0].querySelector('.=
_3d0').textContent;
   else=20
	totfriends=3D"";
  }
    catch(e){totfriends=3D"";console.log('Error: failed to get total number=
 of friends');
  }
  if(isfirefox)
	userlist=3Ddocument.documentElement;
  else
    userlist=3Ddocument.getElementsByTagName('body')[0];
  try{
    if(document.getElementsByName("All Friends")[0]) {
	  if(document.getElementsByName("All Friends")[0].getAttribute('aria-selec=
ted')=3D=3D'false') document.getElementsByName("All Friends")[0].click();
	}
	else if(document.getElementsByName("All friends")[0]){
	  if(document.getElementsByName("All friends")[0].getAttribute('aria-selec=
ted')=3D=3D'false') document.getElementsByName("All friends")[0].click();
	}
   =20
  }
  catch(e){=20
    console.log("Error: Couldn't click the \"All Friends\" link");
  }

  var x=3DsetInterval(function(){
    if(!document.getElementById("pagelet_timeline_medley_photos")){
	  if(!document.location.href.match(/\/friends/)){
		procInviteAllDiv('destroy');
		clearInterval(x);
	  }
      //console.log(userList.scrollTop,userList.scrollHeight);
      tmpScrHeight =3D userlist.scrollHeight;
      tmpScrTop =3D userlist.scrollTop;
      userlist.scrollTop =3D userlist.scrollHeight;
	  document.documentElement.scrollTop=3Ddocument.documentElement.scrollHeig=
ht;
	  procInviteAllDiv('updateText','&lt;b&gt;FBP: Finding Deactivated Friends=
&lt;/b&gt;&lt;p/&gt;&lt;/b&gt;&lt;i&gt;Searching: '  + document.querySelect=
orAll('._698').length +  '/' + totfriends  + '&lt;/i&gt;&lt;p/&gt;&lt;b&gt;=
Found: ' + document.querySelectorAll('a[ajaxify^=3D"/ajax/friends/inactive/=
"]').length +"&lt;/b&gt;" +  '&lt;p/&gt;Please Wait... &amp;nbsp;&lt;img sr=
c=3D"//www.facebook.com/images/loaders/indicator_blue_small.gif"/&gt;');

	  var y=3Ddocument.querySelectorAll("li._698:not([fbp])");
	  for(i=3D0;i&lt;y.length;i++)
		if(y[i].querySelector &amp;&amp; (!y[i].querySelector('a[ajaxify^=3D"/aja=
x/friends/inactive/"]'))){
		  y[i].className+=3D" activ";
		  y[i].setAttribute('fbp','1');
		}
		else {
		  y[i].className+=3D" inactiv";
		  y[i].setAttribute('fbp','1');
		}

        if(document.getElementById("pagelet_timeline_medley_photos")) {
          clearInterval(x);
		  procInviteAllDiv('updateText','Finished Loading Friend List.&lt;p/&gt; =
...');
		}
    }
    else {
	  clearInterval(x);
	  procInviteAllDiv('updateText','&lt;b&gt;Friend List Fully Loaded.&lt;p/&=
gt;Displaying the Deactivated Friends List...&lt;/b&gt;');
	  deacfriendstyle.textContent=3D"li._698.activ {display:none} li._698.inac=
tiv {display:block !important;background-color:white;float:right} li._698 {=
display:none !important}";
	  window.setTimeout(function(){procInviteAllDiv('destroy')},1500);
	  document.getElementById("ShowDeactivatedFriendsLink").textContent=3Ddocu=
ment.getElementById("ShowDeactivatedFriendsLink").textContent.replace(/ \(.=
*\)/,"") +" ("+ document.querySelectorAll('a[ajaxify^=3D"/ajax/friends/inac=
tive/"]').length +")";
	  var y=3Ddocument.querySelectorAll("li._698:not([fbp])");
	  for(i=3D0;i&lt;y.length;i++)
		if(y[i].querySelector &amp;&amp; (!y[i].querySelector('a[ajaxify^=3D"/aja=
x/friends/inactive/"]'))){
		  y[i].className+=3D" activ";
		  y[i].setAttribute('fbp','1');
	    }
		else {
		  y[i].className+=3D" inactiv";
		  y[i].setAttribute('fbp','1');
		}
		location.hash=3D"";
		location.hash=3D"medley_header_friends";
		document.querySelector('div._5vf.sectionHeader._4khu').style.clear=3D'bot=
h';
	}
  },500);
}
/////////////////////////////

////////////////////////////////////
// BEGIN LIVE MAP GRID FUNCTIONALITY
////////////////////////////////////
function switchprofimage(e){
  var tmpimg=3De.target.src;
  e.target.src=3De.target.getAttribute('data-profpic');
  e.target.setAttribute('data-profpic',tmpimg);
}

function showlivegrid() {
  //console.log("showlivegrid");
  var w=3Dwindow.innerWidth || document.documentElement.clientWidth || docu=
ment.body.clientWidth;
  w=3Dw/2;
  var tmpHTML;
  var x=3DJSON.parse(document.getElementById('hidlivediv').textContent.repl=
ace(/^for\ \(;;\);/,''));
  //console.dir(x);
  var gridOverlayDiv=3Ddocument.createElement('div');
  gridOverlayDiv.setAttribute('style','opacity:1; background-color:#ccc; wi=
dth:100%; height:100%; top:0px; left:0px;overflow-y:scroll;overflow-x:hidde=
n;');//position:fixed;z-index:1000
  tmpHTML=3D'&lt;div style=3D"position:fixed;left:' + w + 'px;background-co=
lor:white;opacity:0.8;margin-top:2px;margin-bottom:2px;text-align:center"&g=
t;&lt;a id=3D"closeGridLink" href=3D""&gt;Close Live Grid&lt;/a&gt;&lt;!-- =
| &lt;a id=3D"refreshGridLink" href=3D""&gt;Refresh Grid&lt;/a&gt;--&gt;&lt=
;/div&gt;';
 =20
  for(var i=3D0;i&lt;x.payload.streams.length;i++)
    if(x.payload.streams[i].message)
      tmpHTML+=3D"&lt;a target=3D'_blank' data-lat=3D'" + x.payload.streams=
[i].lat + "' data-long=3D'" + x.payload.streams[i].long + "' title=3D'" + x=
.payload.streams[i].name.replace('&gt;','&amp;gt;').replace('&lt;','&amp;lt=
;').replace(/\'/,'&amp;quot;').replace(/"/,'&amp;quot;') + ' - '+ x.payload=
.streams[i].message.replace('&gt;','&amp;gt;').replace('&lt;','&amp;lt;').r=
eplace(/\'/,'&amp;quot;').replace(/"/,'&amp;quot;') + ' - ' + x.payload.str=
eams[i].viewerCount + " viewers' href=3D'https://facebook.com/" + x.payload=
.streams[i].videoID +"'&gt;" + "&lt;img height=3D'60' width=3D'60' data-pro=
fpic=3D'" + x.payload.streams[i].profilePicture + "' style=3D'display:inlin=
e' src=3D'" + x.payload.streams[i].previewImage +"'&gt;" + "&lt;/a&gt;" + "=
 ";
  gridOverlayDiv.innerHTML=3DtmpHTML;
  tmpHTML=3Dx=3Dnull;
  document.getElementById('hidlivediv').innerHTML=3D'';
  //document.getElementsByTagName('body')[0].appendChild(gridOverlayDiv);
  document.getElementById('globalContainer').innerHTML=3D'';
  document.getElementById('globalContainer').style.marginTop=3D"0px";
  document.getElementById('globalContainer').appendChild(gridOverlayDiv);
  var streamimages=3Ddocument.getElementById('globalContainer').querySelect=
orAll('img');
  for(i=3D0;i&lt;streamimages.length;i++) {
	streamimages[i].addEventListener('mouseout',switchprofimage,false);
    streamimages[i].addEventListener('mouseover',switchprofimage,false);
  }

  /* add country code to thumbnail descriptions // commented out cos not wo=
rking
  var imglinks=3Ddocument.querySelectorAll('a[data-lat]');
  for(i=3D0;i&lt;imglinks.length;i++)
    imglinks[i].addEventListener('mouseover',getAddressFromLatLon,false);
  */
  // create mousover image enlarge effect
  /* commented out for now, as resize code is a bit glitchy
  var imglinks=3Ddocument.querySelectorAll('a[data-lat] img');
  for(i=3D0;i&lt;imglinks.length;i++) {
    imglinks[i].addEventListener('mouseover',resizeGridImg,false);
	imglinks[i].addEventListener('mouseout',resizeGridImg,false);
  }
  */
}

function addlivegridlink(){
  var linkDiv=3Ddocument.createElement('span');
  linkDiv.id=3D'userGridLinkDiv';
  linkDiv.setAttribute('style','float:right:width:150px;margin-left:10px');
  var gridLink=3Ddocument.createElement('a');
  gridLink.textContent=3D"View Live Grid";
  gridLink.addEventListener('click',gotolivegrid,false);
  linkDiv.appendChild(gridLink);
  window.setTimeout(function(){
    document.querySelector('._7sr').appendChild(linkDiv);
  },4000);
}

function gotolivegrid() {
  var embedlivegridscript=3Ddocument.createElement('script');
  embedlivegridscript.id=3D"embedlivescript";
  embedlivegridscript.innerHTML=3Dgotolivegridembed + "; gotolivegridembed =
()";
  document.getElementsByTagName('head')[0].appendChild(embedlivegridscript)=
;
  // pausing the video will speed things up
  if(document.querySelector('video'))
    document.querySelector('video').pause();
  else if (document.querySelector('embed'))
	document.querySelector('embed').style.display=3D'none';
}
// this function will be injected into the page context
function gotolivegridembed () {
  // xmlHTTPRequest to the url
  // create a div show grid in div
  // allow sorting of div by number of viewers
  // allow search of live vid descriptions

  var globCont=3Ddocument.getElementById('globalContainer');
  globCont.style.textAlign=3D'center';
  globCont.style.color=3D'red !important';
  globCont.style.marginTop=3D'250px';
  globCont.style.fontWeight=3D'bold';
  globCont.innerHTML=3D'&lt;h1&gt;Loading Live Grid &lt;img src=3D"//www.fa=
cebook.com/images/loaders/indicator_blue_small.gif"&gt;&lt;/h1&gt;';
  //document.getElementById('userGridLinkDiv').innerHTML=3D'&lt;h1&gt;Loadi=
ng Live Grid &lt;img src=3D"//www.facebook.com/images/loaders/indicator_blu=
e_small.gif"&gt;&lt;/h1&gt;';
 =20
  var LIVE_FEED_URL=3D"https://www.facebook.com/ajax/livemap/map/data/?leve=
l=3D1&amp;video_count=3D400&amp;dpr=3D1&amp;__user=3D" + document.cookie.ma=
tch(/c_user=3D(\d+)/)[1] + "&amp;__a=3D1&amp;__dyn=3D" + require('ServerJSD=
efine').getLoadedModuleHash() + "&amp;__req=3D3s&amp;__be=3D-1&amp;__pc=3DP=
HASED%3ADEFAULT&amp;__rev=3D2530733";
  var http =3D new window.XMLHttpRequest();
  http.open("GET", LIVE_FEED_URL, true);

  // set a callback function
  http.onreadystatechange =3D function() {
    if(http.readyState =3D=3D 4 &amp;&amp; http.status =3D=3D 200) {
	  if(http.responseText!=3D"") {
		if(!document.getElementById('hidlivediv')){
	      var hidlivediv=3Ddocument.createElement('div');
		  hidlivediv.id=3D"hidlivediv";
		  hidlivediv.style.display=3D'none';
		}
		else
		  var hidlivediv=3Ddocument.getElementById('hidlivediv');
		hidlivediv.textContent=3Dhttp.responseText;
		//console.log(http.responseText);
		document.getElementsByTagName('body')[0].appendChild(hidlivediv);
		window.postMessage('SHOWLIVEGRID',"https://www.facebook.com");
		//curfriendsobj=3Dnull;
	  }
	  http=3Dnull;
	}
  }
  http.send();
}

function resizeGridImg(e){
	var daimg=3De.target;
	if(daimg.height=3D=3D60) {
		daimg.setAttribute('height',daimg.naturalHeight);
		daimg.setAttribute('width',daimg.naturalWidth);
	}else{
		daimg.setAttribute('height',60);
		daimg.setAttribute('width',60);
	}
}

/* Doesnt work cos of content security policy
function getAddressFromLatLon(e){
  var lat=3De.target.getAttribute('data-lat');
  var lon=3De.target.getAttribute('data-long');
  var GEOCODERURL=3D"https://maps.googleapis.com/maps/api/geocode/json?latl=
ng=3D" +lat+','+lon;
  var http =3D new window.XMLHttpRequest();
  http.open("GET", GEOCODERURL, true);

  // set a callback function
  http.onreadystatechange =3D function() {
    if(http.readyState =3D=3D 4 &amp;&amp; http.status =3D=3D 200) {
	  if(http.responseText!=3D"") {
		if(!document.getElementById('hidlivediv')){
	      var hidlivediv=3Ddocument.createElement('div');
		  hidlivediv.id=3D"hidlivediv";
		  hidlivediv.style.display=3D'none';
		}
		else
		  var hidlivediv=3Ddocument.getElementById('hidlivediv');
		hidlivediv.textContent=3Dhttp.responseText;
		document.getElementsByTagName('body')[0].appendChild(hidlivediv);
		console.log(http.responseText);
		//curfriendsobj=3Dnull;
	  }
	  http=3Dnull;
	}
  }
  http.send();
}
*/
//////////////////////////////////
// END LIVE MAP GRID FUNCTIONALITY
//////////////////////////////////

// only run if DOM has loaded
var finalstage=3Dfunction () {
  if(debug)
    console.log('finalstage()');
// we should check to see if fbpurify is already running...
  var dahead=3Ddocument.getElementsByTagName('head');
  if(dahead.length) {
    if(debug)
      console.log('head hit straight away');
    if(fbpoptsobj.fbpwebfontfix) {
	  createfontlink('fontlink');
      document.getElementById('fontlink').setAttribute('href','https://font=
s.googleapis.com/css?family=3D' + fbpoptsobj.fbpwebfont);=20
	}
    checkforfbpcollision();
    // should probably merge all these styles for a single insertion
    dahead[0].appendChild(fbpboxstyle);
    dahead[0].appendChild(fbpstyle);
    dahead[0].appendChild(fbpfreestyle);
    dahead[0].appendChild(fbptlstyle);
	dahead[0].appendChild(fbpcssstyle);
	dahead[0].appendChild(ncstyle);

	//bringbacknormalcommenting();
	addexternallinkfix();

	if(fbpoptsobj.hovercards) {
	  document.querySelector('html').className+=3D' hidehovercards';
	}

	if(debug)
	  console.log('before fbpbuttinit');
	fbpbuttinit(); // adds fbp butt
	if(debug)
	  console.log('after fbpbuttinit');

	window.setTimeout(fixsortorder,6000);
	window.setTimeout(addfbplinktoleftcol,6500);

	if(fbpoptsobj.deletedfriendalerts)=20
	  window.setTimeout(lastfriendcheckfunc,8000);

    if(fbpoptsobj.fbpnewsnotifier)
	  window.setTimeout(checkforlastnewsupdate,9000);=09

    if(fbpoptsobj.fullscreenchat || fbpoptsobj.chatbox)=20
	  window.setTimeout(fullscreenchat,5000);

    window.setTimeout(fixPageBookmarks,5000);

	window.setTimeout(addmobnotificationslink,5000);

	//if(window.location.href.match(/\/fluffbustingpurity/))
	if(window.location.href.match(FBPFanPageURLRegex))
	  window.setTimeout(addfbpfaqprompt,7000);

	window.addEventListener("message", fbplistener, false); // we are listenin=
g for messages from the content page (alerting to theatre mode)

	if(fbpoptsobj.tagsuggestions &amp;&amp; (!window.location.href.match(/face=
book\.com\/settings/)))
	  if(!document.getElementsByTagName('html')[0].className.match(/fbpstopaut=
otags/))
	    document.getElementsByTagName('html')[0].className =3D document.getEle=
mentsByTagName('html')[0].className + ' fbpstopautotags';

	if(fbpoptsobj.hidesearchpopup) {
	  window.setTimeout(tamesearchbox,6000);
	}

    dahead=3Dnull;
  }
  else {
    var waitforhead=3Dwindow.setInterval(function(){
	  dahead=3Ddocument.getElementsByTagName('head');
      if(dahead.length ) {
	    if(debug)
	      console.log('head hit after interval');
	    window.clearInterval(waitforhead);
	    if(fbpoptsobj.fbpwebfontfix) {
	      createfontlink('fontlink');
          document.getElementById('fontlink').setAttribute('href','https://=
fonts.googleapis.com/css?family=3D' + fbpoptsobj.fbpwebfont);=20
	    }
		checkforfbpcollision();
        // should probably merge all these styles for a single insertion
	    dahead[0].appendChild(fbpboxstyle);
	    dahead[0].appendChild(fbpstyle);
	    dahead[0].appendChild(fbpfreestyle);
        dahead[0].appendChild(fbptlstyle);
		dahead[0].appendChild(fbpcssstyle);
		dahead[0].appendChild(ncstyle);

	    //window.setTimeout(bringbacknormalcommenting,2000); // prefs werent b=
eing read in before running this, so i added a short delay
	    //bringbacknormalcommenting();
	    addexternallinkfix();

		if(fbpoptsobj.hovercards) {
		  document.querySelector('html').className+=3D' hidehovercards';
		}

	    if(debug)
		  console.log('before fbpbuttinit');
		fbpbuttinit(); // initialise the timeline single column button
		if(debug)
		  console.log('after fbpbuttinit');

		window.setTimeout(fixsortorder,6000);
		window.setTimeout(addfbplinktoleftcol,6500);

		if(fbpoptsobj.deletedfriendalerts)
		  window.setTimeout(lastfriendcheckfunc,8000);

		if(fbpoptsobj.fbpnewsnotifier)=20
	      window.setTimeout(checkforlastnewsupdate,9000);

		if(fbpoptsobj.fullscreenchat || fbpoptsobj.chatbox)=20
	      window.setTimeout(fullscreenchat,5000);

		//if(window.location.href.match(/\/fluffbustingpurity/))
		if(window.location.href.match(FBPFanPageURLRegex))
  	      window.setTimeout(addfbpfaqprompt,6000);

		window.addEventListener("message", fbplistener, false); // we are listeni=
ng for messages from the content page (alerting to theatre mode)

		if(fbpoptsobj.tagsuggestions &amp;&amp; (!window.location.href.match(/fac=
ebook\.com\/settings/)))
		  if(!document.getElementsByTagName('html')[0].className.match(/fbpstopau=
totags/))
		    document.getElementsByTagName('html')[0].className =3D document.getEl=
ementsByTagName('html')[0].className + ' fbpstopautotags';

		if(fbpoptsobj.hidesearchpopup) {
		  window.setTimeout(tamesearchbox,6000);
		}
		dahead=3Dnull;
      }
    }, 500);
  }

  var waitforbody=3Dwindow.setInterval(function(){
    if(document.getElementsByTagName('body').length) {
	  window.clearInterval(waitforbody);
      //fbpfirstruncheck();
	  window.setTimeout(fbpfirstruncheck,1000);
	 =20
	  // moved this out from the fbpurify function so it should run on every p=
age.
      new (this.MutationObserver || this.MozMutationObserver || this.WebKit=
MutationObserver)(fbpInsertedNodeDomHandler).observe(document.body,=20
        { childList: true, subtree: true });
	=09
	  if(debug)
        console.log('body hit');
	  try{
	    var langCodeMatch=3DString(document.body &amp;&amp; document.body.clas=
sName).match(/Locale_([a-z]{2}_[A-Z]{2})/);
	    if(langCodeMatch){
          langCode=3DlangCodeMatch[1];
		  if(debug)
 	        console.log(langCodeMatch[1]);
	    }
		else
		  langCode=3D"en_US";
	  }catch(e){
		console.log("FBP: Determining langCode Failed");
	    langCode=3D"en_US";
	  }
	  /*
	  try {
	    adString=3DAD_LANG_MAP[langCode];
	  } catch(e) {
		console.log("FBP: language not supported - adString defaulting to 'Sponso=
red'");
		adString=3D"Sponsored";
	  }
	  if(typeof(adString)=3D=3D"undefined")
		adString=3D'Sponsored';
	  if(debug)
	    console.log("adString =3D " + adString);
	  AD_LANG_MAP,langCodeMatch=3Dnull; // as don't need them anymore
	  */
	 =20
	  //if(window.location.href.match(/\.facebook\.com\/sharer\/sharer\.php.*#=
fbpshr|\.facebook\.com\/sharer\.php.*#fbpshr/)) {
	  if(window.location.href.match(/\.facebook\.com.*\/sharer?\.php.*((\/|%2F=
)fluffbustingpurity|#fbpshr)/)) {
	    fbpsharer();
	  }
	  //if(fbpoptsobj.offlinefriends)
	  //  offtext=3D"";
	  //if(fbpoptsobj.offlinemobilefriends)
	  //  offtext =3D "Mobile";
	  //if(debug)
	  //  console.log("offtext=3D " + offtext);
	  if(fbpoptsobj.offlinefriends) // || fbpoptsobj.offlinemobilefriends
	    var offlinefriendscleanerid=3Dwindow.setInterval(offlinefriendscleaner=
,4000);

	 =20
	  if((typeof(fbpoptsobj.groupconvos)!=3D'undefined') &amp;&amp; fbpoptsobj=
.groupconvos=3D=3D1) {
	    var hidegroupconvosid=3Dwindow.setInterval(hidegroupconvos,15000);
	  }
	 =20
	  if(fbpoptsobj.rcbirthdays || fbpoptsobj.rcsavedlinks) {
        window.setTimeout(nixreminders,5000);
	    window.setTimeout(nixreminders,10000); // catch late page load
	  }

	  window.setTimeout(addblockapplinktoapppage,6000); // needed to make the =
delay longer, because we are starting the script before the dom has loaded
	  window.setTimeout(labelnewsfeed,2000);
	  window.setTimeout(addnewsfeedmenuclicklistener,2500);

	  if(fbpoptsobj.seemoreexplore) {
	    window.setTimeout(function(){
		  clickseemore("explore")
	    },2000);
		window.setTimeout(function(){
		  clickseemore("explore")
	    },4000);
	  }

	  if(fbpoptsobj.seemoreshortcuts){
	    window.setTimeout(function(){
		  clickseemore('shortcuts');
	    },2000);
		window.setTimeout(function(){
		  clickseemore('shortcuts');
	    },4000);
	  }
      /*
	  if(!fbpoptsobj.trendingbox)
	  if(fbpoptsobj.seemoretrending){
	    window.setTimeout(function(){
		  clickseemore('trending');
	    },2000);
		window.setTimeout(function(){
		  clickseemore('trending');
	    },4000);
	  }
      */
	 =20
	  if(window.location.href.match(/\/dialog\/oauth/) || window.location.href=
.match(/dialog\/permissions\.request/) || window.location.href.match(/\/con=
nect\/uiserver\.php\?/) || window.location.href.match(/\/dialog\/plugin\.pe=
rms/))
        window.setTimeout(addblockbuttontopermreq,4000);

	  if(window.location.href.match(/\/ads\/preferences/)) {
		window.setTimeout(addclearadprefsbutt,3000);
      }

	  if(document.location.href.match(/facebook\.com\/(fluffbustingpurity|WhoU=
nfriendedYou|WhoUnfriendedMe|hidepeopleyoumayknow|getridofsuggestedposts|hi=
detrendingtopics|hidepoliticsfromthenewsfeed|sortbymostrecent|disableautopl=
ay)/))
        window.setTimeout(initInviteAllToLikePage,3000);

	  if(window.location.href.match(/facebook\.com\/(sharer\/)?sharer?\.php\?u=
=3D.*fbpurity\.com/))
		window.setTimeout(fixFacebookSharing,500);

	  if(window.location.href.match(/facebook\.com\/flx\/warn\/\?u=3D.*fbpurit=
y\.com/)){
	    window.setTimeout(fixFacebookSharing,500);
	  }

	  // add show live user grid link
      if(window.location.href.match(/facebook\.com\/livemap/) || window.loc=
ation.href.match(/facebook.com\/live\/?(#@)?/)){ // || window.location.href=
.match(/facebook.com\/live\/?/)
        addlivegridlink();
      }
     =20
	  if(window.location.href.match(/facebook\.com\/settings\?tab=3Dnotificati=
ons/)) {
	    initFBPNotiLink();
	  }
	  window.setTimeout(processVideosOnBodyLoad,1500);
	  /* link profile frame images
	  if(window.location.href.match(/facebook.com\/fbcameraeffects\/manage\//)=
){
		window.setTimeout(function(){
          var pics=3Ddocument.querySelectorAll('._2wuw.img'); for(i=3D0;i&l=
t;pics.length;i++) pics[i].addEventListener('click',function(e){console.log=
(e.target);window.open("http://fb.com/" +e.target.src.split(/_/)[1])},'fals=
e');
	      pics=3Dnull;
		  console.log('frame linking done!');
		},2000);
      }
      */

	  if(fbpoptsobj.tagsuggestions)
        window.setTimeout(enabletagforfriendlists,3000);

      if(fbpoptsobj.topnavbarlogout)
	    window.setTimeout(addtopnavbarlogoutbutt,3000); // was 6000

	  window.setTimeout(initdeactivatedfriendslink,2000);

	  //if(document.querySelector('#timeline_react_composer_container,#feedx_s=
prouts_container,#pagelet_group_composer'))
      window.setTimeout(initfbplinkredeemer,3500);

	  if(fbpoptsobj.sortmostrecent)
		window.setTimeout(function() {if(document.querySelector('div._4-u2.mvm._4=
95i')) document.querySelector('div._4-u2.mvm._495i').setAttribute('title','=
Viewing Most Recent'); },5000);

	  if(document.getElementById('stories_pagelet_rhc')){
		//console.log('seeing stories box');
		window.setTimeout(addHideStoriesButt,3000);
      }
	  //else
	    //console.log('not seeing stories box');
	  if(window.location.href.match(/settings\?tab=3Dvideos/) &amp;&amp; (type=
of(window.localStorage.turnOffAutoplay)!=3D'undefined')) {
		window.setTimeout(function(){
	    document.querySelector('form[action=3D"/settings/video/autoplay/"]').q=
uerySelector('a').click();
	    window.setTimeout(function(){document.querySelectorAll('._54nh')[2].cl=
ick();
		  window.localStorage.removeItem('turnOffAutoplay');
		  var tmpdiv=3Ddocument.createElement('div');
		  tmpdiv.innerHTML=3D'FB Purity has turned off Video Autoplay for you! :)=
';
		  tmpdiv.setAttribute('style','text-align:center;padding:3px;border:1px s=
olid black;color:red;font-size:20px;margin-top:40px;font-weight:bold');
		  if(document.querySelector('input[name=3D"autoplay_setting"]') &amp;&amp=
; document.querySelector('input[name=3D"autoplay_setting"]').value=3D=3D"of=
f")
  		    document.getElementById('SettingsPage_Content').appendChild(tmpdiv)=
;
		  tmpdiv=3Dnull;
		},600);},500);
	  }
	 }
  }, 500);

  if(document.getElementById('pagelet_home_stream') || document.getElementB=
yId('pagelet_litestand_section') || document.getElementById('stream_pagelet=
') || document.getElementById('pagelet_seen_content'))  { // || document.ge=
tElementById('pagelet_group_mall') || document.getElementById('timelineNavC=
ontent') // || (document.getElementById('hashtag_permalink_feed'))
    fbpurify();
    //if(window.location.href.match(/\/lists\//))
      //window.setTimeout(cleartheshizzle,4000); // deal with list type pag=
es
	window.setTimeout(fixsortorder,5500);
  }
  else {
    var waitfordom=3Dwindow.setInterval(function(){
      if(document.getElementById('pagelet_home_stream') || document.getElem=
entById('pagelet_litestand_section') || document.getElementById('stream_pag=
elet') || document.getElementById('pagelet_seen_content')) {  // || documen=
t.getElementById('pagelet_group_mall') || document.getElementById('timeline=
NavContent') // || (document.getElementById('hashtag_permalink_feed'))
        window.clearInterval(waitfordom);
        fbpurify();
		//if(window.location.href.match(/\/lists\//)) /pages/feed  feed/friends/
          //window.setTimeout(cleartheshizzle,4000); // deal with list type=
 pages
		window.setTimeout(fixsortorder,5500);
      }
    }, 500);
  }

  if(window.location.href.match(/photo.php\?|\/photos\//)){   =20
	window.setTimeout(addsetbackgroundimagelink,3000);
  }

  // moved this out from the fbpurify function so it should run on every pa=
ge.
  //document.addEventListener("DOMNodeInserted", fbpInsertedNodeDomHandler,=
 false);

} // end finalstage function;

fbpgetprefs();

function addtopnavbarlogoutbutt(){
  if(debug)
    console.log('addtopnavbarlogoutbutt');
   if(document.getElementById('logout_form2')) // logout button has already=
 been added, must be another version of fbp running?
     return;
   if(!document.getElementById('temp_logout_butt'))  { //create a temporary=
 logout button, to ease icons in navbar jumping around
     var temp_logout_butt=3Ddocument.createElement("form");
	 temp_logout_butt.style.left=3D"10px";
	 temp_logout_butt.id=3D"temp_logout_butt";
	 var tmplogoutli=3Ddocument.createElement('div');
	 tmplogoutli.setAttribute('style',"position:relative;top:5px"); //float:ri=
ght
	 tmplogoutli.appendChild(temp_logout_butt);
	 var tmpsubbutt=3Ddocument.createElement('input');
	 tmpsubbutt.setAttribute('type','submit');
	 tmpsubbutt.setAttribute('value','Log Out');
	 tmpsubbutt.style.border=3D"0";
	 tmpsubbutt.setAttribute('class','_2s25');
	 temp_logout_butt.appendChild(tmpsubbutt);
	 temp_logout_butt.style.visibility=3D'hidden';
	 if(document.querySelector('#blueBarDOMInspector div[role=3D"navigation"]'=
)) {
		  var tmplogoutinpoint=3Ddocument.querySelector('#blueBarDOMInspector div=
[role=3D"navigation"]');
		  //tmplogoutli.setAttribute('style',"position:relative;top:3px");
	      //console.log(logoutinpoint.outerHTML);
          //logoutinpoint.parentNode.insertBefore(logoutli, logoutinpoint);
		  tmplogoutinpoint.appendChild(temp_logout_butt);
	 }
   }
   var newlogoutbutt, subbutt, logoutli;
   if(document.getElementById('pageLoginAnchor')) {
	//console.log('found page login anchor');
	//document.getElementById('pageLoginAnchor').href=3D'javascript:;';
    document.getElementById('pageLoginAnchor').click(); // open menu
	document.getElementById('pageLoginAnchor').click(); // close menu

	if(!document.querySelector('div.uiContextualLayerPositioner[data-ownerid=
=3D"pageLoginAnchor"]')) {
	  console.log('couldnt find fb settings menu anchor');
	  window.setTimeout(addtopnavbarlogoutbutt,25000);
	  return;
	}
	//document.getElementById('pageLoginAnchor').click(); // close menu

	var waitforlobcount=3D0;
	var waitforlob=3Dwindow.setInterval(function(){
	  if (waitforlobcount&lt;=3D15) {
	    waitforlobcount+=3D1;
		if(debug)
		  console.log("logoutbutton check count=3D" +waitforlobcount);
        if(document.querySelector('form[action^=3D"https://www.facebook.com=
/login/device-based/regular/logout/"]')) {  //('form[action^=3D"https://www=
.facebook.com/logout.php"]')) {
          newlogoutbutt=3Ddocument.querySelector('form[action^=3D"https://w=
ww.facebook.com/login/device-based/regular/logout/"]').cloneNode(true);   /=
/('form[action^=3D"https://www.facebook.com/logout.php"]').cloneNode(true);
		  window.clearInterval(waitforlob);
	    }
	    else {
		  console.log('Logout button not found...');
		  return;
	    }
	    newlogoutbutt.setAttribute('style',"position:relative;top:4px;left:10p=
x");
        newlogoutbutt.setAttribute('id','logout_form2');
	    logoutli=3Ddocument.createElement('div');
	    logoutli.setAttribute('style',"position:relative;top:5px"); //float:ri=
ght
	    logoutli.appendChild(newlogoutbutt);
	    var subbutt=3Ddocument.createElement('input');
	    subbutt.setAttribute('type','submit');
	    subbutt.setAttribute('value','Log Out');
        subbutt.style.color=3D'#FFF';
	    //subbutt.style.textShadow=3D'0 -1px rgba(0, 0, 0, .5)';
	    subbutt.style.border=3D"0";
		subbutt.setAttribute('class','_2s25');
	    subbutt.style.backgroundColor=3D"transparent";
	    newlogoutbutt.appendChild(subbutt);
	    if(document.querySelector('#blueBarDOMInspector ul[role=3D"navigation"=
]')) {
		  var logoutinpoint=3Ddocument.querySelector('#blueBarDOMInspector ul[rol=
e=3D"navigation"]').firstChild;
		  logoutli.setAttribute('style',"float:right");
	      //console.log(logoutinpoint.outerHTML);
          logoutinpoint.parentNode.insertBefore(logoutli, logoutinpoint);
	    }
		else if(document.querySelector('#blueBarDOMInspector div[role=3D"navigati=
on"]')) {
		  var logoutinpoint=3Ddocument.querySelector('#blueBarDOMInspector div[ro=
le=3D"navigation"]');
		  logoutli.setAttribute('style',"position:relative;top:3px");
	      //console.log(logoutinpoint.outerHTML);
          //logoutinpoint.parentNode.insertBefore(logoutli, logoutinpoint);
		  if(document.getElementById('temp_logout_butt'))
			document.getElementById('temp_logout_butt').parentNode.removeChild(docum=
ent.getElementById('temp_logout_butt'));
		  logoutinpoint.appendChild(logoutli);
	    }
		else=20
		  console.log('didnt find the navigation bar div, so couldnt insert logou=
t button');
     }
	 else
	   window.clearInterval(waitforlob);
    }, 1000);
  }
  else {
    console.log('didnt find the logout link');
  }
}

function addHideStoriesButt() {
  //console.log('in add hide stories butt func');
  if((!document.getElementById("stories_pagelet_rhc")) || (document.getElem=
entById('hideStoriesButt')) )
	return;
  var hideStoriesButt=3Ddocument.createElement('a');
  hideStoriesButt.textContent=3D"X";
  hideStoriesButt.style.color=3D'lightgrey';
  hideStoriesButt.style.fontSize=3D'16px';
  hideStoriesButt.className=3D'hidelink';
  hideStoriesButt.setAttribute('id','hideStoriesButt');
  hideStoriesButt.setAttribute('data-hover',"tooltip");
  hideStoriesButt.setAttribute('data-tooltip-content','FBP: Hide Stories Bo=
x');
  hideStoriesButt.addEventListener('click',function(){if(!confirm("Do you w=
ant to hide the 'Stories' box?\n\nPlease note: If you click 'OK' the page w=
ill reload and the whole 'Stories' box will be gone. If afterwards, at some=
 point you would like to restore it again, you can untick the hide setting =
on the FBP options screen under the 'Hide Right Column Links' heading.")) r=
eturn; fbpoptsobj.rcstories=3D1;
	fbpsavevalue('fbpoptsjson-' + currentuserid, JSON.stringify(fbpoptsobj));=
=20
    window.setTimeout(function(){window.location.reload(true);},360);
  },false);
  if(document.querySelector("#stories_pagelet_rhc a[data-hover=3D'tooltip']=
")) //#stories_pagelet_rhc div._42rg
     document.querySelector("#stories_pagelet_rhc a[data-hover=3D'tooltip']=
").parentNode.appendChild(hideStoriesButt);
  else
	window.setTimeout(function(){if(document.querySelector("#stories_pagelet_r=
hc a[data-hover=3D'tooltip']"))
       document.querySelector("#stories_pagelet_rhc a[data-hover=3D'tooltip=
']").parentNode.appendChild(hideStoriesButt);
    },1500);
}

function addmobnotificationslink(){=20

  if(!(window.location.href.match(/\/notifications$|\/notifications\/$/) ))=
{
	return
  }
  if(document.getElementById('mobpagenotifLink') || window.location.href.ma=
tch(/m\.facebook/))
	return;

  if(document.getElementById('pages_manager_top_bar_container'))
	var notifmode=3D"pageadmin";
  else=20
	var notifmode=3D"user";
 =20
  if (notifmode=3D=3D"pageadmin") {
    var sharelink=3Ddocument.querySelector('#build_audience a[href^=3D"/aja=
x/sharer/"]');
    if(!sharelink){
	  window.setTimeout(addmobnotificationslink,2000);
	  return;
    }
	var pageid=3Ddocument.querySelector('#build_audience a[href^=3D"/ajax/shar=
er/"]').href.match(/\&amp;id=3D(.*)\&amp;/)[1];
    var mobpagenotifURL=3D"https://m.facebook.com/notifications.php?more&am=
p;targetID=3D" + pageid;
	//var insertpoint=3Ddocument.querySelectorAll('div[role=3D"main"] em')[0];
	var insertpoint=3Ddocument.querySelector('div[data-testid=3D"NOTIF_LIST_TE=
ST_ID"]').parentNode.parentNode.firstChild.firstChild;
  }
  else {
	var mobpagenotifURL=3D"https://m.facebook.com/notifications";
	var insertpoint=3Ddocument.querySelectorAll('h2')[1]; =20
	insertpoint.style.display=3D'inline';
  }
 =20
  var mobpagenotifLink=3Ddocument.createElement('a');
  mobpagenotifLink.id=3D"mobpagenotifLink";
  mobpagenotifLink.href=3DmobpagenotifURL;
  mobpagenotifLink.textContent=3D"Notifications (Mobile Site)"
  mobpagenotifLink.title=3D"Links to notifications are more direct on the m=
obile version of the site";
  mobpagenotifLink.target=3D"_blank";
  mobpagenotifLink.style=3D"margin-left:15px";

  insertpoint.parentNode.appendChild(mobpagenotifLink);
}

// BEGIN clear recent logins (remove user profile icon login button on logo=
ut/login screen)
function clearRecentLogins(){
  if(!document.querySelector("body.UIPage_LoggedOut"))
	return;
  if(document.getElementById('email')){
	document.getElementById('email').value=3D"";
	document.getElementById('email').focus();
  }
  if(!document.querySelectorAll('.removableItem a[role=3D"button"][ajaxify^=
=3D"/login/device-based"]').length)
	return;
  var x=3Ddocument.querySelectorAll('.removableItem a[role=3D"button"][ajax=
ify^=3D"/login/device-based"]');
  for(var i=3D0;i&lt;x.length;i++)
	x[i].click();

}
function togglermrecentlogins() {
  //alert('auto rm recent logins setting changed to: ' + document.getElemen=
tById('rmrecentlogins').checked);
  fbpsavevalue("rmrecentlogins",document.getElementById('rmrecentlogins').c=
hecked?1:0);
  if(document.getElementById('rmrecentlogins').checked)
	clearRecentLogins();
}
function rmrecentlogins(rmrecentloginsvalue) {=20

  if(!document.querySelector('body.UIPage_LoggedOut'))
    return;
 =20
  if(!document.getElementById('rmrecentlogins')) {
	//console.log("in rmrecentlogins func");
    var rmrecentloginsbar=3Ddocument.createElement('div');
    rmrecentloginsbar.innerHTML=3D"&lt;div id=3D'rmrecentloginsdiv' align=
=3D'center'&gt;&lt;label for=3D'rmrecentlogins'&gt;&lt;h1&gt;&lt;input type=
=3D'checkbox' id=3D'rmrecentlogins'&gt; Auto Remove Recent Logins with FBP&=
lt;/h1&gt;&lt;/label&gt;&lt;/div&gt;";
    document.querySelector('#content').firstChild.parentNode.insertBefore(r=
mrecentloginsbar,document.querySelector('#content').firstChild);
    document.getElementById('rmrecentlogins').addEventListener('click',togg=
lermrecentlogins,false);
  }
 =20
  if(typeof (rmrecentloginsvalue)=3D=3D'undefined') {
    //console.log('loading the shizz...');
	var tmpx=3Dfbploadvalue("rmrecentlogins", rmrecentlogins);

	//console.log("tmpx=3D"+tmpx);
	if (tmpx=3D=3D"-999" || typeof(tmpx)=3D=3D'undefined' || tmpx=3D=3D'')
	  return;
    else {
	  //var rmrecentloginsvalue=3Dtmpx;
	  //console.log("we must be in the GM Script version of rm recentlogins va=
l=3D:" +tmpx);
	  rmrecentlogins(tmpx);
	}
  }
  else {
	//console.log('normal shizzle');
	//console.log("document.getElementById('rmrecentlogins').checked=3D"+rmrec=
entloginsvalue);
	if(rmrecentloginsvalue=3D=3D"1")
	  document.getElementById('rmrecentlogins').checked=3Dtrue;
	//console.log("checkbox value=3D" + document.getElementById('rmrecentlogin=
s').checked);
	if(document.getElementById('rmrecentlogins').checked)
	  clearRecentLogins();
  }/*
  if((typeof (rmrecentloginsvalue)!=3D'undefined') &amp;&amp; rmrecentlogin=
svalue=3D=3D"true") {
	console.log('why dont we get here?');
    document.getElementById('rmrecentlogins').checked=3Drmrecentloginsvalue=
;
	if(document.getElementById('rmrecentlogins').checked)
	  clearRecentLogins();
  }
  console.log('dead end:' + rmrecentloginsvalue + "");
  */

}
// END clear recent logins (remove user profile icon login button on logout=
/login screen)

////////////////////////////////////////////////////
/* BEGIN code to intercept blocked fbp link posts */
////////////////////////////////////////////////////
var event_store; // global var to store event temporarily
var feedarr=3D['timeline_react_composer_container','feedx_sprouts_container=
','pagelet_group_composer'];

function handle_click(e) {
  e.preventDefault();
  if(e.stopPropagation)
    e.stopPropagation();
  event_store =3D e; // copy event  to global var
  if(debug)
    console.log('handle_click');
}

function confirm_handle() {
  if(debug)
    console.log('confirm_handle');
  removecheckpostlistener();
  resume_event("click");
}

function resume_event(type) {
  if(debug)
    console.log('resume_event');
  if (event_store.target) { //.parentNode
    var event;
    event =3D document.createEvent("HTMLEvents");
    event.initEvent(type, true, true);
    event.eventName =3D type;
	event_store.target.dispatchEvent(event);
	//console.log(event_store.target)
  }
  else {
	console.log("something went wrong, as the event doesnt have a target(in re=
sume_event function)");
  }
}

function checkpost(e) {
  handle_click(e);
  if(debug)
    console.log("checkpost");
  //alert('checking post');
  if(document.querySelector('div[contenteditable=3D"true"]')) {
    if(document.querySelector('div[contenteditable=3D"true"]').innerHTML.ma=
tch(/fbpurity\.com/)){
	  window.alert("Message from FB Purity:\n\nHi! Unfortunately Facebook are =
blocking direct links to fbpurity.com, because they don't want their users =
to have control over what they see and do on Facebook.\n\nPlease replace th=
e link to fbpurity.com in your post with one to the FB Purity Fan Page on F=
acebook instead. The link to use is:\n\nfacebook.com/fluffbustingpurity\n\n=
Thanks!\n\nSteve FBP");
	}
	else {
      //console.log('branch 1 confirm handle');
	  confirm_handle();
	}
  }
  else {
	//console.log('branch 2 confirm handle');
	confirm_handle();
  }
}

function addcheckpostlistener(){
  if(debug)
    console.log("addcheckpostlistener");
  if(document.querySelector('[data-testid=3D"react-composer-post-button"]')=
)
    document.querySelector('[data-testid=3D"react-composer-post-button"]').=
addEventListener('click',checkpost,false);
}

function removecheckpostlistener(){
  if(debug)
    console.log("removecheckpostlistener");
  if(document.querySelector('[data-testid=3D"react-composer-post-button"]')=
)
    document.querySelector('[data-testid=3D"react-composer-post-button"]').=
removeEventListener('click',checkpost,false);
}

function delaypostbutt(e){
  if(debug)
    console.log("delaypostbutt");
  window.setTimeout(addcheckpostlistener,2000);
  for(i=3D0;i&lt;feedarr.length;i++)
	if(document.getElementById(feedarr[i])) //timeline
      document.getElementById(feedarr[i]).removeEventListener('click',delay=
postbutt,false);
 =20
}

function initfbplinkredeemer(){
  if(debug)
    console.log("initfbplinkredeemer");
  addcheckpostlistener();
 =20
  for(i=3D0;i&lt;feedarr.length;i++)
	if(document.getElementById(feedarr[i])) //timeline
      document.getElementById(feedarr[i]).addEventListener('click',delaypos=
tbutt,false);
}

//////////////////////////////////////////////////
/* END code to intercept blocked fbp link posts */
//////////////////////////////////////////////////

///////////////////////////
// BEGIN VIDEO FUNCTIONS //
///////////////////////////

  function fbpvolchange (e) {
    //fbpopts.vidvolume =3D e.currentTarget.volume;
	//GM_setValue("volume",fbpopts.vidvolume);
	if(location.href.match(/facebook\.com\/livemap/)) // fix for video volume =
problem on livemap page
	  return;
	fbpoptsobj.vidvolume=3De.currentTarget.volume;
	fbpsavevalue('fbpoptsjson-' + currentuserid, JSON.stringify(fbpoptsobj));
    console.log('volume changed',e.currentTarget.volume);
  }

  function fbpvidplay (e) {
	if(typeof(fbpoptsobj.vidvolume)=3D=3D"undefined")
	  fbpoptsobj.vidvolume=3D"1.0";
    e.currentTarget.volume=3DparseFloat(fbpoptsobj.vidvolume);
    console.log('vid play initiated');
  }

  function fbpvidclick(e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();

    if((e.target.currentTime &gt; 0) &amp;&amp; (!e.target.paused) &amp;&am=
p; (!e.target.ended) &amp;&amp; (e.target.readyState &gt; 2)){ //  // if vi=
deo is playing {
      console.log('video was playing');
      console.log(e.target.currentTime,e.target.paused,e.target.ended,e.tar=
get.readyState);
      e.target.pause();
    }
    else{
      console.log('video was paused');
      console.log(e.target.currentTime,e.target.paused,e.target.ended,e.tar=
get.readyState);
      e.target.play();
    }
  }

  function processVideoArray(vidArr) {
    for(var i=3D0;i&lt;vidArr.length;i++){
      if(vidArr[i].getAttribute('fbpv'))
        continue;
      /*if((vidArr[i].getAttribute('src')) &amp;&amp; (vidArr[i].src!=3D=3D=
''))
          console.log(vidArr[i].src);*/
      vidArr[i].setAttribute('fbpv',true);
      vidArr[i].addEventListener('volumechange',fbpvolchange,false);
      vidArr[i].addEventListener('play',fbpvidplay,false);
      //vidArr[i].addEventListener('click',fbpvidclick,false); // commented=
 out for now because of weird bug, needs to be investigated
    }
  }

  // THIS CODE NEEDS TO BE RUN a short while after the BODY has loaded
  function processVideosOnBodyLoad(){
    if (typeof(document.querySelectorAll)!=3D'undefined') {
      var vidArr=3Ddocument.querySelectorAll("video");
      processVideoArray(vidArr);
	  if(debug)
	    console.log('processed videos on body load!');
    }
  }
 =20
  // function for playing ad free videos
  function shazam(e){ //  not working on Page Timelines yet...
    e.preventDefault();
    if(e.stopPropagation)
      e.stopPropagation();
    //alert(e.target.parentNode.previousSibling.querySelector("abbr.timesta=
mp").parentNode.href);
    //console.log( e.target.parentNode.previousSibling.querySelector("abbr[=
data-utime]").parentNode.href.match(/\d+/));
	console.log(e.target.parentNode.previousSibling.querySelector("abbr[data-u=
time]"));
    if(e.target.parentNode.previousSibling.querySelector("abbr").parentNode=
.href.match(/story_fbid=3D/))  // /permalink.php?story_fbid=3D2010364992329=
734&amp;id=3D224203727612545
      window.open("https://m.facebook.com/" + e.target.parentNode.previousS=
ibling.querySelector("abbr").parentNode.href.match(/story_fbid=3D(\d+)/)[1]=
 + "/#tempwin" );
    else{
      //console.log(e.target.parentNode.previousSibling.querySelector("abbr=
[data-utime]").parentNode.href);
      window.open("https://m.facebook.com/" + e.target.parentNode.previousS=
ibling.querySelector("abbr").parentNode.href.match(/\/(\d+)\/*/)[1] + "/#te=
mpwin" );
    }
  }
/////////////////////////
// END VIDEO FUNCTIONS //
/////////////////////////

function initFBPNotiLink() {
  if(!document.querySelector('a[href=3D"/help?faq=3D390022341057202"]'))
    return;
  var insertRefPoint=3Ddocument.querySelector('a[href=3D"/help?faq=3D390022=
341057202"]').parentNode;
  var fbpnotilink=3Ddocument.createElement('div');
  fbpnotilink.style.marginTop=3D'10px';
  fbpnotilink.style.marginBottom=3D'-10px';
  fbpnotilink.style.fontWeight=3D'bold';
  fbpnotilink.innerHTML=3D'&lt;a title=3D"Open the F.B. Purity Notification=
 Options" href=3D"javascript:;"&gt;F.B. Purity Notification Options&lt;/a&g=
t;&lt;/div&gt;';
  fbpnotilink.addEventListener('click',openFBPNotiOptions,false);
  insertRefPoint.parentNode.insertBefore(fbpnotilink, insertRefPoint.nextSi=
bling);
}
function openFBPNotiOptions(){
  fbptoggleopts();
  if(document.getElementById('notificationSection').style.display!=3D'block=
')
    document.getElementById('fbpnotificationopts').parentNode.click();
  document.getElementById('notificationSection').style.border=3D"1px solid =
red";
}

//&lt;div style=3D"margin-top:10px;margin-bottom:-10px;font-weight:bold"&gt=
;&lt;a href=3D"javascript;:"&gt;F.B. Purity Notification Settings&lt;/a&gt;=
&lt;/div&gt;

// ********************************************************
/* BEGIN CODE TO DISPLAY AD FREE MOBILE VERSION OF VIDEO */
if(location.href.match(/m\.facebook\.com\/.*\#tempwin/)){
=09
 function toggleFullScreen(e) {
	 console.log(e.target);
  if (!e.target.fullscreenElement &amp;&amp;    // alternative standard met=
hod
      !e.target.mozFullScreenElement &amp;&amp; !e.target.webkitFullscreenE=
lement &amp;&amp; !e.target.msFullscreenElement ) {  // current working met=
hods
    if (e.target.requestFullscreen) {
      e.target.requestFullscreen();
    } else if (e.target.msRequestFullscreen) {
      e.target.msRequestFullscreen();
    } else if (e.target.mozRequestFullScreen) {
      e.target.mozRequestFullScreen();
    } else if (e.target.webkitRequestFullscreen) {
        e.target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else { // this branch is not working for some reason
    if (e.target.exitFullscreen) {
      e.target.exitFullscreen();
    } else if (e.target.msExitFullscreen) {
      e.target.msExitFullscreen();
    } else if (e.target.mozCancelFullScreen) {
      e.target.mozCancelFullScreen();
    } else if (e.target.webkitExitFullscreen) {
      e.target.webkitExitFullscreen();
    }
  }
 }

  function playpausevid(e){
	e.preventDefault();
    if(e.stopPropagation)
      e.stopPropagation();
	 =20
    if(e.target.paused) {
      e.target.play();
      e.target.setAttribute('controls',1);
    }
    else {
      e.target.pause();
	  window.setTimeout(function(){e.target.removeAttribute('controls')},500);
      //e.target.removeAttribute('controls');
    }
  }
  window.setTimeout(function(){
    console.dir(document.querySelector("div._53mw[data-store]"));
	if(document.querySelector("div._53mw[data-store]")) {
      var x=3DJSON.parse(document.querySelector("div._53mw[data-store]").ge=
tAttribute('data-store'));
	  document.write("&lt;video preload autoplay controls src=3D'" + x.src +"'=
 width=3D"+x.width*2+ " height=3D" + x.height*2 +" &gt;&lt;/video&gt;&lt;p&=
gt;&lt;a style=3D'margin-left:200px' href=3D'javascript:window.close()'&gt;=
Close Video and Return to Facebook&lt;/a&gt;&lt;/p&gt;" );
	}
    else { // must be firefox?
	  if(document.querySelector("a[href^=3D'/video_redirect']")){
	    var xsrc=3DdecodeURIComponent(document.querySelector("a[href^=3D'/vide=
o_redirect']").getAttribute('href').split('src=3D')[1]);
		//document.write doesnt work in the ff extension version, hence this work=
around
		var xvid=3Ddocument.createElement("video");
		xvid.setAttribute('preload',"");
		xvid.setAttribute('autoplay',"");
		xvid.setAttribute('controls',"");
		xvid.setAttribute('src',xsrc);
		var xp=3Ddocument.createElement('p');
		xp.innerHTML=3D"&lt;a style=3D'margin-left:200px' href=3D'javascript:wind=
ow.close()'&gt;Close Video and Return to Facebook&lt;/a&gt;";
		document.querySelector('body&gt;div').innerHTML=3D'';
		document.querySelector('body&gt;div').appendChild(xvid);
		document.querySelector('body&gt;div').appendChild(xp);
	=09
		//document.write("&lt;video preload autoplay controls src=3D'" + xsrc +"'=
&gt;&lt;/video&gt;&lt;p&gt;&lt;a style=3D'margin-left:200px' href=3D'javasc=
ript:window.close()'&gt;Close Video and Return to Facebook&lt;/a&gt;&lt;/p&=
gt;" );
	  }
	}
	 =20
    //alert(x.src + "  -----  " +  x.height  + "  -----  " +  x.width);
    document.querySelector('video').addEventListener('click',playpausevid,f=
alse);
    //document.querySelector('video').addEventListener('dblclick',function(=
e){e.target.webkitRequestFullScreen();},false); // needs to work cross plat=
form!!!!
	document.querySelector('video').addEventListener('dblclick',toggleFullScre=
en,false);
  },3000);
}
/* END CODE TO DISPLAY AD FREE MOBILE VERSION OF VIDEO */
// ******************************************************

function doc_keyUp(e) {
  //console.dir(e.target);
  //console.log(e.which);
  if(fbpoptsobj.tagsuggestions) {
    //if(!window.location.href.match(/facebook\.com\/settings/)) {
    if (e.which=3D=3D64) { // (e.keyCode=3D=3D192) &amp;&amp; e.shiftKey) {
      if( e.target.className.match(/mentionsTextarea/) || (e.target.offsetP=
arent &amp;&amp; e.target.offsetParent.className.match(/uiPlacesTypeahead/)=
) || (e.target.getAttribute('contenteditable')=3D=3D'true') ) {
        //temporarily disable auto tag suggestions if @ key is typed
	    document.getElementsByTagName('html')[0].className=3Ddocument.getEleme=
ntsByTagName('html')[0].className.replace(/fbpstopautotags/,'');
	    window.setTimeout(function(){if(!document.getElementsByTagName('html')=
[0].className.match(/fbpstopautotags/)) document.getElementsByTagName('html=
')[0].className=3Ddocument.getElementsByTagName('html')[0].className + ' fb=
pstopautotags';},20000);
	  }
    }
	if((e.target.nodeName=3D=3D'INPUT') &amp;&amp;  (e.target.type=3D=3D'text'=
) ) { // action tag box // ||e.target.placeholder &amp;&amp; e.target.place=
holder.match(/What are you doing?|Group name|Friend\'s name/)
	  document.getElementsByTagName('html')[0].className=3Ddocument.getElement=
sByTagName('html')[0].className.replace(/fbpstopautotags/,'');
	  window.setTimeout(function(){if(!document.getElementsByTagName('html')[0=
].className.match(/fbpstopautotags/)) document.getElementsByTagName('html')=
[0].className=3Ddocument.getElementsByTagName('html')[0].className + ' fbps=
topautotags';},20000);
	}
    //}
  }
 =20
  if ((e.target.type &amp;&amp; e.target.type!=3D'checkbox' &amp;&amp; e.ta=
rget.type!=3D'select') || (e.target.getAttribute('contenteditable')=3D=3D't=
rue') || e.ctrlKey || e.altKey || e.metaKey) { return; }
  if(debug)
    console.log('keydown handler=3D'+ e.keyCode + " : "  + e.which);=20
  switch(e.which)//e.keyCode
  {
  case 114: //r
    console.log('R key pressed :- FBP Triggering Newsfeed Chronological Sor=
t');
	//document.removeEventListener("DOMNodeInserted", fbpInsertedNodeDomHandle=
r);
    chronoSortStream();
	//document.addEventListener("DOMNodeInserted", fbpInsertedNodeDomHandler, =
false);
    break;
  case 102: //f
    console.log('F key pressed :- FBP Will Display the previous Deleted Fri=
ends Alert, if one is available.');
	  dspdeletedfriendalert();
	break;
  /*case 101: //e=20
    console.log('E key pressed :- FBP Will Expand/Contract the newsfeed col=
umn.');
	fbpexpandnewscoltoggle();
	break; */
  case 122: //z=20
    console.log('Z key pressed :- FBP Will Hide all comments onscreen that =
consist of just tags.'); // images/emoticons
	clearBlankComments();
    break;
  /*case 116: //t
    console.log('T key pressed :- FBP Will Scroll you to the top of the pag=
e.');
	window.scroll(0,0);
	break;*/
  /*case 32: //space to click "more stories" button or default to facebook'=
s page down
    console.log('Space pressed');
	clickmorestoriesbutt();
    break;*/
  default:
    break;
  }
}
document.addEventListener('keypress', doc_keyUp, false);

/*
function locationHashChanged() {
    console.log('%c HASH CHANGE! ', 'background: #222; color: red',
            'more text');
	console.trace();
}
window.onhashchange =3D locationHashChanged;
*/

})();</pre></body><style>
html > ::-webkit-scrollbar { width: 0px; height: 0px; }</style></html>
------MultipartBoundary--Hq9ESTl6Q1HAvaJqHY15lLXYpLXz2vh99Trr0auLYa------
