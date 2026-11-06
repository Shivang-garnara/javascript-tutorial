# JavaScript Temporal API (The Modern Date & Time Standard)

The **Temporal API** is the modern, robust replacement for JavaScript's traditional `Date` object (standardized under TC39 / ECMAScript).

---

## 1. Why Was `Date` Broken?
JavaScript's original `Date` object had major issues:
- **Mutable:** Calling `date.setMonth()` alters the original date object in place, causing bugs.
- **Flawed Months Indexing:** Months are zero-indexed (`0 = January`, `11 = December`), confusing beginners.
- **Poor Timezone Support:** Only supported the browser's local timezone and UTC.
- **Unreliable Parsing:** `new Date("2024-05-10")` behavior varied wildly between browsers.

---

## 2. What Makes `Temporal` Superior?
- **Immutable:** Every operation returns a fresh, new object.
- **Clear Separation of Concerns:**
  - Date only: `Temporal.PlainDate` (e.g., Birthday: `2024-11-06`).
  - Time only: `Temporal.PlainTime` (e.g., Alarm: `07:30:00`).
  - Date + Time: `Temporal.PlainDateTime`.
  - Exact Moment in Time + Timezone: `Temporal.ZonedDateTime`.
  - Durations: `Temporal.Duration` (e.g., 5 hours and 30 minutes).
- **1-Indexed Months:** `1 = January`, `12 = December`.
- **First-class Timezone and Daylight Saving Time (DST) support**.

---

## 3. Core Temporal Methods & Usage

### A. Current Date & Time
```javascript
// Current exact global timestamp (UTC)
const now = Temporal.Now.instant();

// Current date in local timezone
const today = Temporal.Now.plainDateISO(); // e.g. 2026-11-06

// Current time in local timezone
const currentTime = Temporal.Now.plainTimeISO(); // e.g. 16:50:00
```

### B. Creating Specific Dates
```javascript
// A specific calendar date (Year, Month 1-12, Day)
const launchDay = Temporal.PlainDate.from({ year: 2026, month: 11, day: 6 });
console.log(launchDay.toString()); // "2026-11-06"
```

### C. Date Arithmetic (Adding / Subtracting)
```javascript
// Add 3 months and 10 days immutably
const deadline = launchDay.add({ months: 3, days: 10 });

// Calculate difference between two dates
const difference = deadline.since(launchDay);
console.log(difference.total({ unit: "days" })); // 102 days
```

### D. Working with Timezones (`ZonedDateTime`)
```javascript
const tokyoMeeting = Temporal.ZonedDateTime.from({
  timeZone: "Asia/Tokyo",
  year: 2026,
  month: 12,
  day: 1,
  hour: 14,
  minute: 0
});

// Convert directly to New York time
const newYorkMeeting = tokyoMeeting.withTimeZone("America/New_York");
console.log(newYorkMeeting.toString());
```

---

## 4. Current Browser Availability
- Temporal is being rolled out across modern browser engines (available via standard polyfills like `@js-temporal/polyfill` today).
- It represents the future of all enterprise JavaScript date/time engineering.

