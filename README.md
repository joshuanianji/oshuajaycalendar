# This is a Project aimed to make a dashboard for many types of timekeeping
## Different calendars, clocks, and years can be used.
---
## Ideas:
| Calendars                                   | Difficulty/plausibility        | Lunar/solar | Links |
|---------------------------------------------|--------------------------------|-------------|-------|
| Gregorian calendar (no duh)                 | **Insane coder difficulty lol* | Solar       |       |
| Traditional Chinese calendar                | Medium                         | Lunar       | - [Wikipedia](https://en.wikipedia.org/wiki/Chinese_calendar)<br> - [Convertor](http://www.prokerala.com/general/calendar/chinese-year-converter.php)<br> - [Sketchier convertor](http://www.mandarintools.com/calconv_old.html)|
| Ancient Hebrew calendar                     | Difficult                      | Lunar?      | - [Wikipedia](http://www.crivoice.org/calendar.html)<br>
                                                                                               - [Convertor](http://www.biblicalcalendarproof.com/calendar/generate)|
| Islamic calendar                            | Medium-difficult               | lunar?      | - [Wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar)|
| Aztec Calendars                             | Difficult                      | Lunar?      | - [Wikipedia](https://en.wikipedia.org/wiki/Babylonian_calendar)
                                                                                               - [Livius.org website - pretty good actually](http://www.livius.org/articles/concept/calendar-babylonian/)
                                                                                               - [[Introduction to the Babylonian Calendar](https://www.staff.science.uu.nl/~gent0113/babylon/babycal.htm)
                                                                                               - [Babylonian Calendar Convertor](https://www.staff.science.uu.nl/~gent0113/babylon/babycal_converter.htm)|
| Babylonian Calendar                         | Medium                         | Lunar?      | - [Wikipedia](https://en.wikipedia.org/wiki/Aztec_calendar)
                                                                                               - [*The* Aztec Calendar Website](https://www.azteccalendar.com/azteccalendar.html)
                                                                                               - [Aztec date convertor](https://www.azteccalendar.com/?day=14&month=11&year=2016)|
| The Shire Calendar                          | Easy                           | ??          | - [Wikipedia](https://en.wikipedia.org/wiki/Middle-earth_calendar)
                                                                                               - [Tolkien Gateway](http://tolkiengateway.net/wiki/Shire_Calendar)
                                                                                               - [Shire gateway](http://shire-reckoning.com/calendar.html)|
| Proposed Martian Calendar (Darian Calendar) | Near impossible                | Solar?      | - [Wikipedia](https://en.wikipedia.org/wiki/Darian_calendar)
                                                                                               - [Convertor and more](http://ops-alaska.com/time/gangale_converter/calendar_clock.htm)
                                                                                               - [More convertor stuff](http://www-mars.lmd.jussieu.fr/mars/time/martian_time.html)||
***More sources will be listed later.**

---
## How the :poop: can we get this working?
1. Devise 2 arrays - Massive arrays or objects that keep track of solar and lunar cycles. Since all calendars rely on that (maybe except for that one aztec calendar), that might work.
2. Make the arrays/objects/functions keep track of the days of the year (e.g. day 237). This is so the months can be dealt with separately, not using a super complicated algorithm to unravel the gregorian calendar to change it to another solar calendar.
3. Or use online convertors and find out their algorithms. Lol.
4. I actually have no idea.