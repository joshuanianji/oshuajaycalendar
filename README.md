# This is a Project aimed to make a dashboard for many types of timekeeping
## *Different calendars, clocks, and years can be used.*

## Navigation
* [Calendar Ideas](#calendar-ideas)
* [Initial plans and stuff](#initialize-plans)
* [Log](#log)


## <a name="calendar-ideas"></a>Ideas:
| Calendars                                               | Difficulty/plausibility        | Lunar/solar |
|---------------------------------------------------------|--------------------------------|-------------|
| [Gregorian calendar (no duh)](#gregorian)               | **Insane coder difficulty lol* | Solar       |
| [Traditional Chinese calendar](#chinese)                | Medium                         | Lunar       |
| [Ancient Hebrew calendar](#hebrew)                      | Difficult                      | Lunar?      |
| [Islamic calendar](#islamic)                            | Medium-difficult               | lunar?      |
| [Aztec Calendars](#aztec)                               | Difficult                      | Lunar?      |
| [Babylonian Calendar](#babylonian)                      | Medium                         | Lunar?      |
| [The Shire Calendar](#shire)                            | Easy                           | ??          |
| [Proposed Martian Calendar (Darian Calendar)](#martian) | Near impossible                | Solar?      |

---

### <a name="gregorian"></a>Gregorian Calendar
[W3 schools' Javascript date stuff](http://www.w3schools.com/jsref/jsref_obj_date.asp)
We will use Javascript's date objects.
```
var d = new Date();
//Date will return something like: Mon Nov 14 2016 23:36:42 GMT-0700 (MST)
//

### <a name="chinese"></a>Traditional Chinese Calendar
- [Wikipedia](https://en.wikipedia.org/wiki/Chinese_calendar)
- [Convertor](http://www.prokerala.com/general/calendar/chinese-year-converter.php)
- [Sketchier convertor](http://www.mandarintools.com/calconv_old.html)

### <a name="hebrew"></a>Ancient Hebrew Calendar
- [Wikipedia](http://www.crivoice.org/calendar.html)
- [Convertor](http://www.biblicalcalendarproof.com/calendar/generate)

### <a name="islamic"></a>Islamic Calendar
- [Wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar)

### <a name="aztec"></a>Aztec Calendar
- [Wikipedia](https://en.wikipedia.org/wiki/Aztec_calendar)
- [**The** Aztec Calendar Website](https://www.azteccalendar.com/azteccalendar.html)
- [Aztec date convertor](https://www.azteccalendar.com/?day=14&month=11&year=2016)

The Aztecs have 2 calendars, one that follows the yearly cycles and one that is 260 days or something. It will be hard to do, but very interesting if I complete it.

### <a name="babylonian"></a>Babylonian Calendar
- [Wikipedia](https://en.wikipedia.org/wiki/Babylonian_calendar)
- [Livius.org website - pretty good actually](http://www.livius.org/articles/concept/calendar-babylonian/)
- [Introduction to the Babylonian Calendar](https://www.staff.science.uu.nl/~gent0113/babylon/babycal.htm)
- [Babylonian Calendar Convertor](https://www.staff.science.uu.nl/~gent0113/babylon/babycal_converter.htm)

### <a name="shire"></a>The Shire Calendar
- [Wikipedia](https://en.wikipedia.org/wiki/Middle-earth_calendar)
- [Tolkien Gateway](http://tolkiengateway.net/wiki/Shire_Calendar)
- [Shire gateway](http://shire-reckoning.com/calendar.html)

Shire gateway already has the months with its approximate relations to the gregorian calendar months: tt will be easy to make.

### <a name="martian"></a>The Darian Calendar
- [Wikipedia](https://en.wikipedia.org/wiki/Darian_calendar)
- [Convertor and more](http://ops-alaska.com/time/gangale_converter/calendar_clock.htm)

---
## <a name="initialize-plans"></a>How the :poop: can we get this working?
1. Devise 2 arrays - Massive arrays or objects that keep track of solar and lunar cycles. Since all calendars rely on that (maybe except for that one aztec calendar), that might work.
2. A Variable that keeps track of leap years.
3. Make the arrays/objects/functions keep track of the days of the year (e.g. day 237). This is so the months can be dealt with separately, not using a super complicated algorithm to unravel the gregorian calendar to change it to another solar calendar.

   *We'll need a lot of if statements*
4. Or use online convertors and find out their algorithms. Lol.

## <a name="log"></a>Log:
### November 15, 2016
Bootstrap and jQuery downloaded and added to `index.html`. `Main.js` now has an object which comtains the current gregorian year and checks if it is a leap year.