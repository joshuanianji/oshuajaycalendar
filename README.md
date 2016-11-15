# This is a Project aimed to make a dashboard for many types of timekeeping
## Different calendars, clocks, and years can be used.
---
## Ideas:
- Gregorian calendar (no duh)
- Traditional Chinese calendar
    1. [Wikipedia](https://en.wikipedia.org/wiki/Chinese_calendar)
    2. [Convertor](http://www.prokerala.com/general/calendar/chinese-year-converter.php)
    3. [Sketchier convertor](http://www.mandarintools.com/calconv_old.html)
- Ancient Hebrew calendar
    1. [Wikipedia](http://www.crivoice.org/calendar.html)
    2. [Convertor](http://www.biblicalcalendarproof.com/calendar/generate)
- Islamic calendar
    1. [Wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar)
- Babylonian Calendar
    1. [Wikipedia](https://en.wikipedia.org/wiki/Babylonian_calendar)
    2. [Livius.org website - pretty good actually](http://www.livius.org/articles/concept/calendar-babylonian/)
    3. [Introduction to the Babylonian Calendar](https://www.staff.science.uu.nl/~gent0113/babylon/babycal.htm)
    4. [Babylonian Calendar Convertor](https://www.staff.science.uu.nl/~gent0113/babylon/babycal_converter.htm)
- Aztec Calendars
    1. [Wikipedia](https://en.wikipedia.org/wiki/Aztec_calendar)
    2. [*The* Aztec Calendar Website](https://www.azteccalendar.com/azteccalendar.html)
    3. [Aztec date convertor](https://www.azteccalendar.com/?day=14&month=11&year=2016)
- The Shire Calendar
    1. [Wikipedia](https://en.wikipedia.org/wiki/Middle-earth_calendar)
    2. [Tolkien Gateway](http://tolkiengateway.net/wiki/Shire_Calendar)
    3. [Shire gateway](http://shire-reckoning.com/calendar.html)
- Proposed Martian Calendar (Darian Calendar)
    1. [Wikipedia](https://en.wikipedia.org/wiki/Darian_calendar)
    2. [Convertor and more](http://ops-alaska.com/time/gangale_converter/calendar_clock.htm)
    3. [More convertor stuff](http://www-mars.lmd.jussieu.fr/mars/time/martian_time.html)

| Calendars                                   | Difficulty/plausibility    | Lunar/solar | Links |
|---------------------------------------------|----------------------------|-------------|-------|
| Gregorian calendar (no duh)                 | **Insane coder difficulty* | Solar       |       |
| Traditional Chinese calendar                | Medium                     | Lunar       |<ol><li>[Wikipedia](https://en.wikipedia.org/wiki/Chinese_calendar)</li><li>[Convertor](http://www.prokerala.com/general/calendar/chinese-year-converter.php)</li><li>[Sketchier convertor](http://www.mandarintools.com/calconv_old.html)</li></ol>|
| Ancient Hebrew calendar                     | Difficult                  | Lunar?      |1. [Wikipedia](http://www.crivoice.org/calendar.html)
                                                                                          2. [Convertor](http://www.biblicalcalendarproof.com/calendar/generate)|
| Islamic calendar                            | Medium-difficult           | lunar?      |1. [Wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar)|
| Aztec Calendars                             | Difficult                  | Lunar?      |1. [Wikipedia](https://en.wikipedia.org/wiki/Babylonian_calendar)
                                                                                          2. [Livius.org website - pretty good actually](http://www.livius.org/articles/concept/calendar-babylonian/)
                                                                                          3. [Introduction to the Babylonian Calendar](https://www.staff.science.uu.nl/~gent0113/babylon/babycal.htm)
                                                                                          4. [Babylonian Calendar Convertor](https://www.staff.science.uu.nl/~gent0113/babylon/babycal_converter.htm)|
| Babylonian Calendar                         | Medium                     | Lunar?      |1. [Wikipedia](https://en.wikipedia.org/wiki/Aztec_calendar)
                                                                                          2. [*The* Aztec Calendar Website](https://www.azteccalendar.com/azteccalendar.html)
                                                                                          3. [Aztec date convertor](https://www.azteccalendar.com/?day=14&month=11&year=2016)|
| The Shire Calendar                          | Easy                       | ??          |1. [Wikipedia](https://en.wikipedia.org/wiki/Middle-earth_calendar)
                                                                                          2. [Tolkien Gateway](http://tolkiengateway.net/wiki/Shire_Calendar)
                                                                                          3. [Shire gateway](http://shire-reckoning.com/calendar.html)|
| Proposed Martian Calendar (Darian Calendar) | Near impossible            | Solar?      |1. [Wikipedia](https://en.wikipedia.org/wiki/Darian_calendar)
                                                                                          2. [Convertor and more](http://ops-alaska.com/time/gangale_converter/calendar_clock.htm)
                                                                                          3. [More convertor stuff](http://www-mars.lmd.jussieu.fr/mars/time/martian_time.html)|

***More sources will be listed later.**

---
## How the :poop: can we get this working?
1. Devise 2 arrays - Massive arrays or objects that keep track of solar and lunar cycles. Since all calendars rely on that (maybe except for that one aztec calendar), that might work.
2. Make the arrays/objects/functions keep track of the days of the year (e.g. day 237). This is so the months can be dealt with separately, not using a super complicated algorithm to unravel the gregorian calendar to change it to another solar calendar.
3. Or use online convertors and find out their algorithms. Lol.
4. I actually have no idea.