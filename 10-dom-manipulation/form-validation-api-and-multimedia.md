# HTML5 Form Validation API & Multimedia (Audio/Video) 📋🎬

Modern browsers feature powerful native APIs for validating form inputs and programmatically controlling `<audio>` and `<video>` media without needing third-party plugins.

---

## 1. Native HTML5 Form Validation API

Instead of writing dozens of fragile regular expressions from scratch, JavaScript lets you hook directly into the browser's native constraint validation engine.

### Essential Methods:
- `element.checkValidity()`: Returns `true` if valid, `false` otherwise.
- `element.reportValidity()`: Tests validity AND triggers the browser's native popup tooltip if invalid.
- `element.setCustomValidity(message)`: Sets a custom error message. Pass `""` (empty string) to clear the error!

### The `ValidityState` Object (`input.validity`):
Provides granular reasons for validation failures:

| Property | Trigger Condition |
|---|---|
| `validity.valueMissing` | Field has `required` attribute but is empty |
| `validity.typeMismatch` | Value doesn't match format (e.g., `type="email"`, `type="url"`) |
| `validity.patternMismatch` | Doesn't match regex in `pattern="..."` |
| `validity.tooShort` / `tooLong` | Fails `minlength` or `maxlength` constraints |
| `validity.rangeUnderflow` / `rangeOverflow` | Number fails `min` or `max` attributes |
| `validity.stepMismatch` | Doesn't match `step` attribute |
| `validity.customError` | Set via `setCustomValidity("Custom message")` |
| `validity.valid` | `true` if ALL above constraints pass! |

```javascript
const emailInput = document.querySelector("#email");

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Please provide your work email address!");
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("That doesn't look like a valid email (e.g., name@domain.com)");
  } else {
    emailInput.setCustomValidity(""); // Clear custom error to make it valid!
  }
});
```

---

## 2. HTML5 Multimedia API (`<audio>` and `<video>`)

HTML5 `<audio>` and `<video>` elements inherit from `HTMLMediaElement`, exposing rich programmatic control.

### Controlling Playback:
```javascript
const video = document.querySelector("#heroVideo");

// Play / Pause:
video.play();
video.pause();

// Fast Forward / Rewind:
video.currentTime += 10; // Jump forward 10 seconds

// Speed Control (Slow-mo or 2x speed):
video.playbackRate = 1.5; // 1.5x speed

// Volume & Mute:
video.volume = 0.8; // 0.0 to 1.0
video.muted = true;
```

### Key Media Events:
```javascript
video.addEventListener("play", () => console.log("Video started!"));
video.addEventListener("timeupdate", () => {
  const percentComplete = (video.currentTime / video.duration) * 100;
  console.log(`Progress: ${percentComplete.toFixed(1)}%`);
});
video.addEventListener("ended", () => console.log("Video finished playback."));
```
