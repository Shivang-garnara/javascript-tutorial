# JavaScript Typed Arrays & Binary Data (W3Schools)

JavaScript **Typed Arrays** are array-like objects providing mechanisms for reading and writing raw, unformatted binary data in memory buffers.

---

## 1. Why Do We Need Typed Arrays?
Standard JavaScript arrays are dynamic, flexible collections that can hold mixed data types (numbers, strings, objects). However, this flexibility requires extra memory overhead.

When dealing with:
- WebGL & 3D graphics
- Audio and video processing (`Web Audio API`)
- File uploads (`FileReader`, Canvas image pixel manipulation)
- Fast network socket communication (`WebSockets`, WebRTC)

We need **fixed-size, raw binary performance**. That is what Typed Arrays provide!

---

## 2. Core Architecture: `ArrayBuffer` vs `Views`

```
  ┌────────────────────────────────────────────────────────┐
  │         ArrayBuffer (Raw bytes chunk in memory)        │
  │     [Byte 0] [Byte 1] [Byte 2] [Byte 3] ...            │
  └───────────────────────────┬────────────────────────────┘
                              │
            ┌─────────────────┴─────────────────┐
            ▼                                   ▼
   TypedArray View                     DataView
   (Uint8Array, Int32Array, ...)       (Flexible custom endianness byte parser)
```

1. **`ArrayBuffer`:** A fixed-length raw binary memory buffer. You cannot read or write to an `ArrayBuffer` directly; you must look through a **View**.
2. **`TypedArray` Views:** Typed interpretations of the buffer:
   - `Int8Array` / `Uint8Array`: 8-bit integer (-128 to 127 / 0 to 255)
   - `Uint8ClampedArray`: Clamped 0-255 (used for Canvas pixel colors RGBA!)
   - `Int16Array` / `Uint16Array`: 16-bit integer
   - `Int32Array` / `Uint32Array`: 32-bit integer
   - `Float32Array` / `Float64Array`: Floating-point numbers

---

## 3. Working Code Example

```javascript
// 1. Allocate a buffer of 16 raw bytes in memory
const buffer = new ArrayBuffer(16);
console.log("Buffer byte length:", buffer.byteLength); // 16

// 2. Create a 32-bit integer view on that buffer (16 bytes / 4 bytes per int = 4 slots)
const int32View = new Int32Array(buffer);
int32View[0] = 42;
int32View[1] = 1000;

console.log("Slot 0:", int32View[0]);
console.log("Slot 1:", int32View[1]);

// 3. Create a Uint8Array directly from values
const pixelBytes = new Uint8Array([255, 128, 0, 255]); // RGBA Orange color
console.log("Red channel:", pixelBytes[0]);   // 255
console.log("Alpha channel:", pixelBytes[3]); // 255
```

---

## 4. `DataView` for Low-Level Network Endianness
When reading binary files or network packets with specific byte-orders (Big-Endian vs Little-Endian):
```javascript
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

// Write 16-bit integer at byte offset 0 with little-endian
view.setInt16(0, 500, true);
console.log("Read back:", view.getInt16(0, true)); // 500
```
