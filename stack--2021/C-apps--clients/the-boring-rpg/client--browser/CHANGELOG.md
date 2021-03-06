# CHANGELOG


## NEXT
- TODO no console.x
- ð¤© feature: X new adventures (now totalling X!)
- ð feature: X new backgrounds (now totalling X!)
- ð¤© feature: X new achievements (now totalling X!)
- ð feature dropped: X
- ð fix: tweaks, typos, small bugsâ¦
- ð· chore: some internal refactors
- ð· chore: dependencies bump


## NEXT

## v0.68.1
2021/10/11
- ð feature: 3 new backgrounds (now totalling 137!)
- ð¤© feature: the licensed new background picture is now used in the loader and as an open-graph picture
- ð feature: open graph, the link is now shareable in some social medias
- ð· chore: some internal refactors (CSS)
- ð· chore: dependencies bump

## v0.67.2
2021/06/30
- ð fix: the size of the app was once again cut in half! (much faster loading time ð)
- ð fix: the scrollbars are now properly styled in Firefox ð
- ð· chore: some internal refactors (CSS)
- ð· chore: dependencies bump

## v0.67.1
2021/05/16
- ð fix: the size of the app was cut in half! (much faster loading time ð)
- ð feature: slightly improved the default player name + its handling in the chat
- ð feature: (feature flagged) progress on the cloud save
- ð· chore: some internal refactors (data format now v15)
- ð· chore: added a bundle size detection that should prevent unexpected app size explosion ð¥
- ð· chore: bump dependencies

## v0.66.2
2021/04/26
- ð fix: the chat is back!
- ð fix: diversity supporter detection was broken (no one was a diversity supporter anymore)
- ð· chore: reorganised code internally
- ð· chore: bump dependencies

## v0.66.1
2020/03/30
- ð fix: correction of impossibility to load the game in case of some URL variant
- ð fix: correction of the weapon/armor improvement bug (thanks [u/Nateinthe90s](https://www.reddit.com/r/boringrpg/comments/m4zc2o/weapon_enhancements_not_working/))
  - most likely introduced in v0.65.12 ð­
- ð· chore: bump dependencies

## v0.65.15
2020/03/11
- ð· chore: Google Analytics 4 (in progress)
- ð· chore: bump dependencies

## v0.65.14
- ð· chore: facilities for internal monitoring
- ð· chore: bump dependencies

## v0.65.13
2020/11/13
- ð fix: added circuit breakers on Sentry and Netlify to prevent draining the free tier on bug (ouch!)
- ð feature: (feature flagged) progress on the cloud save
- ð· chore: some internal refactors: mainly the serverless functions
- ð· chore: bump dependencies (incl. React 17)

## v0.65.12
2020/11/06
- ð feature: (feature flagged) progress on the cloud save
- ð fix: the login works again!
- ð· chore: some internal refactors (immutability)
- ð· chore: bump dependencies

## v0.65.11
2020/10/08
- ð fix: the savegame editor works again!
- ð fix: the administrator (me) can log in again!
- ð (behind a feature flag) progress on the cloud save
- ð· chore: improved logs
- ð· chore: some internal refactors, bump dependencies

## v0.65.10
2020/09/19
- ð· chore: progress toward cloud save:
  - new API endpoint able to intelligently store and save the latest version
  - clarified the savegame structure
  - rewrote the flux architecture and the bkp to local storage
- ð· chore: improved timing semantics (and maybe perf but not a goal)
- ð· chore: improved logs
- ð· chore: some internal refactors, bump dependencies

## v0.65.9
2020/07/20
- ð· chore: progress toward cloud save:
  - many things
  - the server code catches errors better (needed to troubleshoot the DB connexion)
- ð fix: tweaks, typos, small bugsâ¦
- ð· chore: some internal refactors, bump dependencies

## v0.65.8
- ð· chore: progress toward server
- ð fix: tweaks, typos, small bugsâ¦
- ð· chore: some internal refactors, bump dependencies

## v0.65.7
2020/07/13
- ð· chore: improved analytics (more events, not sending them for me the developer)
- ð· chore: improved migration of old savegames

## v0.65.5
- ð· chore: improved cordova compatibility for potential mobile app version
- ð· chore: improved analytics, I'll finally see what users are doing AND exclude myself from it :)
- ð· chore: better debug infos
- ð· chore: some internal refactors, bump dependencies

## v0.65.4
2020/06/30
(most likely skipped very fast)

## v0.65.1
- ð¤© feature: 14 new adventures (now totalling 201!)
- ð feature: 36 new backgrounds (now totalling 134!)
- ð fix: favicon status was sometimes broken, improved all favicons on the way
- ð fix: no more ugly hover on Safari iOs
- ð· improved compatibility for future mobile app
- ð· chore: some internal refactors, bump dependencies

## v0.64.1
- ð¤© feature: 25 new adventures, notably featuring new coin loss! (now totalling 187!)
     it was present in the original game, allows us to recover additional adventures
- ð fix: login and reload features are working again
- ð fix: tweaks, typos, small bugsâ¦

## v0.63.1
- ð feature: 16 new backgrounds (now totalling 114!
- ð¤© feature: improved new version detection

## v0.62.1
- ð feature dropped: the snow for Christmas season
- ð¤© feature: new loader
- ð· chore: bump dependencies

## v0.61.3
2019/12/17
- ð feature: snow for Christmas season!
- ð progress on cloud save but still not there...
- ð· chore: some auto linting

## v0.61.1
2019/11/23
- ð fix: wrong english loose -> lose
- ð· chore: some internal refactors, bump dependencies

## v0.60.12
2019/11/02
- ð fix an achievement message (thanks LiddiLidd)
- ð fix: tweaks, typos, small bugsâ¦
- ð· chore: some internal refactors, bump dependencies

## v0.60.5
2019/09/28
- ð¤© feature: A sound effect! (when selling stuff) I did it for fun, sound is not a priority
- ð· chore: tweaked an error to better interpret it in the reports
- ð· chore: some internal refactors, bump dependencies

## v0.60.4
2019/08/02
- ð¤© feature: better start experience: better refill rate easing, better starting adventures
- ð· chore: some internal refactors, bump dependencies

## v0.60.3
- ð· chore: fixed early instantiation of the game instance
- ð· chore: use UDA debug features
- ð· chore: some internal refactors, bump dependencies

## v0.60.2
2019/07/22
- ð· chore: some internal refactors: bump dependencies, tweaked the colors

## v0.60.1
2919/04/23
- ð¤© feature: 1 new achievement (now totalling 100!)
- ð feature: energy is refill faster at the beginning of the game (similar to the original)
- ð· chore: some internal refactors and cleanups (revision, stores, etc.)
- ð fix: harmonized the background colors and the contrast of the progress bars
- ð fix: codes could be redeemed infinitelyâ¦
- ð fix: in adventure messages, coins and tokens were displayed incorrectly
- ð fix: tweaks, typos, small bugsâ¦
- ð· chore: some internal refactors and cleanups (renamings, server-related)


## v0.59.1
- ð¤© feature: 2 new achievements (now totalling 99!)
- ð feature: a custom cursor
- ð fix: (hopefully) fixed a few crashes cases when selling or equipping items
- ð fix: autoplay now ends up with as much energy you previously had
- ð fix: the notifications no longer prevent clicking below / above
- ð fix: (hopefully) on Safari mobile, the screen won't stay zoomed after an input
- ð· chore: some internal refactors and cleanups (revision, stores, etc.)


## v0.58.3
2019/03/07
- ð¤© feature: a loader while the page downloads
- ð· chore: some internal refactors and cleanups


## v0.58.1
2019/02/16
- ð¤© feature: new classes! (now totalling 25!)
- ð fix: removed 3 background pictures I didn't like that much
- ð· chore: some internal refactors for preparing the server feature


## v0.57.1
2019/02/16
- ð feature: ~76 new backgrounds (now totalling 101!)
- ð¤© feature: background images are now credited to their author
- ð feature: the background for the next adventures now preloads itself! Avoid loading time when playing.
- ð fix: tweaks, typos, small bugsâ¦
- ð· chore: some internal refactors for the future server feature
- ð· chore: some internal refactors around React rendering
- ð· chore: extra secret dev tools


## v0.56.5
2019/02/11
- ð¤© feature: Firefox now has nicer scrolls
- ð fix: unscrollable areas on Chrome and Firefox
- ð fix: modal behaviour and modal blanket


## v0.56.3
2019/02/06
- ð¤© feature: item qualities now no longer overlap
- ð feature: items are now much more powerful (because everyone like big numbers ;)
- ð¤© feature: "Artifact" quality is now equal in strength to "legendary". Rationale: Artifact quality is made for seasonal items. They should not be stronger than droppable items so that it won't imbalance the game.
- ð fix: no longer outdated actions after being reborn (reported by LiddiLidd)
- ð fix: temporary correction for the Chrome 72 change (reported by Raxon, LiddiLidd, IrdaRichbeth)


## v0.56.2
2019/01/30
- ð feature: 4 new backgrounds (now totalling 27!)
- ð fix: a rounding error on energy display (thanks LiddiLidd)
- ð fix: a temporary limitation on UI refresh
- ð fix: the savegame editor no longer needs a page refresh after edit
- ð· chore: big internal refactor (React) that was painful but now the game UI is smooth and refreshes parts only when it should


## v0.55.1
2019/01/11
- ð feature: 2 new backgrounds (now totalling 24!)
- ð¤© new energy display with favicon
- ð fix: tweaks, typos, small bugsâ¦
- ð· internal refactors around energy


## v0.54.11
2018/12/13
- ð¤© feature: 70 new achievements!! (now totalling 97)
- ð fix (hopefully!): autoplay/reborn no longer discards all the armors (now balanced)


## v0.54.4
2018/12/03
- ð¤© feature: 4 new adventures (now totalling 162!)
- ð improved good drops distribution! Now 20x times more chance to get legendary drops! (computed to get ~one every 1.5 month)
- ð¤© feature: reborn! When I make internal changes to the savegame format, instead of resetting the game, it will now triggers an auto-replay so you won't loose your hard work!
  - You can trigger a rebirth now (to benefit from the new drop rate) by using the code "reborn"
- ð feature: 1 new background (now totalling 22!)
- ð¤© added an update notification with a link to Reddit
- ð a secret code to get "artifact" level items (as a reward to alpha players)
- ð fix: tweaks, typos, small bugsâ¦
- ð· chore: some internal refactors


## v0.53.1
2018/11/22
- ð¤© feature: 33 new adventures!! (now totalling 158!)
- ð feature: 4 new backgrounds (now totalling 21!)
- ð¤© feature: 9 new achievements (now totalling 27!)
- ð fix: tweaked the interface here and there
- ð· chore: some internal refactors


## v0.52.46
2018/11/14
- ð achievements!!! (18 so far)
- ð¤© feature: 7 new adventures (now totalling 125!)
- ð· chore: better rich text capabilities in messages
- ð· chore: better capabilities in notifications


## v0.52.41
2018/11/06
- ð feature: 2 new background (now totalling 16!)
- ð¤© feature: 3 new adventures (now totalling 118!)
- ð feature: enabled migration of savegames! (for now, no more resets)
- ð fix (hopefully!): minor bugs with signup/signin
- ð fix (hopefully!): bug abusively reseting the savegame (reported by u/LiddiLidd )
- ð· chore: added safeties to detect/prevent abusive game resets in the future
- ð· chore: better typings


## v0.52.34
2018/10/29
- ð feature: users can now enter codes! (in the hamburger menu). Will be useful for special rewards (alpha testers), seasonal content, cheat, internal tests...
- ð¤© feature: a notification system, will be useful for achievements (test it by entering the code "testnotifs")
- ð feature: 1 new background (now totalling 14!)
- ð¤© feature: 5 new adventures (now totalling 115!)
- ð feature: inventory size and limit are now displayed, ex. 12/20
- ð¤© feature: users can now login (will unlock features in the future)
- ð feature: small UI improvements
- ð fix (hopefully!): a crashing story
- ð fix (hopefully!): minor UI bugs


## v0.52.20
2018/10/18
- ð feature: 1 new background
- ð¤© feature: 15 new adventures (now totalling 110!)
- ð feature: cleaned and uniformized existing adventures (usage of past tense)
- ð¤© feature: uniformized the outcome distribution of adventures, stats upgrades are now more evenly distributed (and should stay that way)
- ð feature: the savegame can now be edited, conveniently with a superb JSON editor with syntax highlighting
- ð¤© feature: cleaned the meta panel
- ð feature: improved load time of the game by deferring non-critical scripts
- ð fix: fixed the key-ing of react elements produced by rendering a rich text
- ð fix (hopefully!): fixed a bug causing the inventory backpack to appear not sorted when having more than 10 items

## v0.52.11
2018/10/11
- ð¤© feature: the inventory now displays the power of your items
- ð¤© feature: the inventory now displays whether an item is better or worse than your currently equipped one
- ð¤© feature: 2 new backgrounds
- ð¤© feature: 3 new adventures (now totalling 95!)


## Notes / template

/////////////
- ð¤© feature:
- ð feature:
- ð fix (hopefully!):
- ð· chore:
/////////////

- TODO ð· chore: ESLINT

## NEXT
- ð¤© feature: X new adventures (now totalling X!)
- ð feature: X new backgrounds (now totalling X!)
- ð¤© feature: X new achievements (now totalling X!)
- ð fix: tweaks, typos, small bugsâ¦
- ð· chore: some internal refactors (bump dependencies)
