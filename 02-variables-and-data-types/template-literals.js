// ==========================================
// Template Literals & Tagged Templates in Action
// ==========================================

console.log("--- 1. Basic Interpolation ---");
const user = "Shivang";
const role = "Full-Stack Developer";
const projectsCount = 5;

// Basic backtick syntax
const bio = `Developer Profile:
Name: ${user}
Role: ${role}
Active Projects: ${projectsCount}
Status: ${projectsCount > 0 ? "Active Contributor" : "Idle"}`;

console.log(bio);

console.log("\n--- 2. Expressions and Math inside ${} ---");
const itemPrice = 1299;
const discountPercent = 15;
const taxRate = 0.18;

const calculateFinalBill = `
Item Base Price : ₹${itemPrice}
Discount (${discountPercent}%): -₹${(itemPrice * (discountPercent / 100)).toFixed(2)}
Price After Disc: ₹${(itemPrice * (1 - discountPercent / 100)).toFixed(2)}
GST (18%)       : ₹${(itemPrice * (1 - discountPercent / 100) * taxRate).toFixed(2)}
Total Payable   : ₹${(itemPrice * (1 - discountPercent / 100) * (1 + taxRate)).toFixed(2)}
`;
console.log(calculateFinalBill);

console.log("\n--- 3. Multi-line HTML Generator ---");
const product = {
  id: "P101",
  title: "Mechanical Wireless Keyboard",
  price: 3499,
  inStock: true,
  tags: ["gadgets", "ergonomic", "wireless"]
};

function generateProductCard(item) {
  return `
<div class="product-card" id="${item.id}">
  <h2>${item.title}</h2>
  <p class="price">₹${item.price.toLocaleString("en-IN")}</p>
  <span class="badge ${item.inStock ? "badge-success" : "badge-danger"}">
    ${item.inStock ? "In Stock" : "Out of Stock"}
  </span>
  <ul class="tags">
    ${item.tags.map(tag => `<li>#${tag}</li>`).join("")}
  </ul>
</div>
  `.trim();
}

console.log(generateProductCard(product));

console.log("\n--- 4. Tagged Template Literal: Currency Formatter ---");
// Custom tag function to automatically format currency values
function formatCurrency(strings, ...values) {
  return strings.reduce((acc, str, index) => {
    let val = values[index];
    if (typeof val === "number") {
      val = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
      }).format(val);
    } else if (val === undefined) {
      val = "";
    }
    return acc + str + val;
  }, "");
}

const laptopPrice = 65999;
const emiPerMonth = 5500;
const statement = formatCurrency`The premium laptop costs ${laptopPrice} or ${emiPerMonth} per month with 0% EMI.`;
console.log(statement);

console.log("\n--- 5. Tagged Template: UpperCase Tags ---");
function highlightUpper(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const val = values[i] !== undefined ? String(values[i]).toUpperCase() : "";
    return `${acc}${str}[**${val}**]`;
  }, "");
}

const author = "Shivang";
const framework = "JavaScript";
console.log(highlightUpper`Created by ${author} using ${framework} master skills.`);
