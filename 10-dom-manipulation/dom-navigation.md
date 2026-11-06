# JavaScript HTML DOM Navigation (W3Schools)

With the HTML DOM, you can navigate the entire node tree using node relationships.

---

## 1. DOM Tree Node Relationships
Every HTML element is a node in the tree:
- **`parentNode` / `parentElement`:** The parent above this node.
- **`childNodes` / `children`:** The child nodes inside this element.
- **`firstChild` / `firstElementChild`:** The first child.
- **`lastChild` / `lastElementChild`:** The last child.
- **`nextSibling` / `nextElementSibling`:** The sibling node immediately following.
- **`previousSibling` / `previousElementSibling`:** The sibling node immediately preceding.

> 💡 **CRITICAL DIFFERENCE:**
> - Methods ending in **`Node` / `Child` / `Sibling`** count whitespace, text line breaks, and comments as nodes!
> - Methods containing **`Element`** (`parentElement`, `children`, `firstElementChild`, `nextElementSibling`) **only count real HTML tags**, skipping blank text nodes. In 99% of web development, **use the Element variants**!

---

## 2. Code Example: Traversing the DOM

```html
<ul id="menu">
  <li>Home</li>
  <li id="activeItem">Shop</li>
  <li>Contact</li>
</ul>
```

```javascript
const active = document.getElementById("activeItem");

// 1. Move to parent
console.log(active.parentElement.id); // "menu"

// 2. Move to previous and next sibling elements
console.log(active.previousElementSibling.textContent); // "Home"
console.log(active.nextElementSibling.textContent);     // "Contact"

// 3. Move from parent to first and last child elements
const menu = document.getElementById("menu");
console.log(menu.firstElementChild.textContent); // "Home"
console.log(menu.lastElementChild.textContent);  // "Contact"
console.log(menu.children.length);               // 3
```

---

## 3. Node Information Properties
- **`nodeName`:** Returns the tag name in uppercase (e.g. `"DIV"`, `"P"`, `"#text"`).
- **`nodeType`:** Numeric type:
  - `1` = Element Node (`<div>`, `<p>`)
  - `2` = Attribute Node
  - `3` = Text Node
  - `8` = Comment Node
  - `9` = Document Node
