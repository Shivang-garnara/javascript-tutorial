// ===============================================
// Level 18: Practical Projects — script.js
// ===============================================

// -----------------------------------------------
// 1. Calculator Logic
// -----------------------------------------------
let calcExpression = "";
const calcDisplay = document.getElementById("calcDisplay");

function calcAppend(char) {
  if (calcDisplay.textContent === "0" && !isNaN(char)) {
    calcExpression = char;
  } else {
    calcExpression += char;
  }
  calcDisplay.textContent = calcExpression;
}

function calcClear() {
  calcExpression = "";
  calcDisplay.textContent = "0";
}

function calcEquals() {
  try {
    // Sanitize input to only permit safe math operators & numbers
    if (/^[0-9+\-*/. ]+$/.test(calcExpression)) {
      // Evaluate math expression
      const result = Function(`'use strict'; return (${calcExpression})`)();
      calcDisplay.textContent = Number(result.toFixed(4));
      calcExpression = String(result);
    } else {
      calcDisplay.textContent = "Error";
    }
  } catch (e) {
    calcDisplay.textContent = "Error";
    calcExpression = "";
  }
}

// -----------------------------------------------
// 2. Number Guessing Game Logic
// -----------------------------------------------
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessAttempts = 0;
const guessInput = document.getElementById("guessInput");
const guessStatus = document.getElementById("guessStatus");

function handleGuess() {
  const userGuess = Number(guessInput.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    guessStatus.style.color = "#f87171";
    guessStatus.textContent = "Please enter a valid number between 1 and 100!";
    return;
  }

  guessAttempts++;

  if (userGuess === secretNumber) {
    guessStatus.style.color = "#34d399";
    guessStatus.textContent = `🎉 Correct! You guessed ${secretNumber} in ${guessAttempts} attempts!`;
  } else if (userGuess < secretNumber) {
    guessStatus.style.color = "#fbbf24";
    guessStatus.textContent = `📉 Too low! Try a higher number. (Attempt ${guessAttempts})`;
  } else {
    guessStatus.style.color = "#fbbf24";
    guessStatus.textContent = `📈 Too high! Try a lower number. (Attempt ${guessAttempts})`;
  }
}

function resetGuessGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessAttempts = 0;
  guessInput.value = "";
  guessStatus.textContent = "New secret number generated. Take a guess!";
  guessStatus.style.color = "#38bdf8";
}

// -----------------------------------------------
// 3. Password Strength Meter Logic
// -----------------------------------------------
function checkPasswordStrength() {
  const pass = document.getElementById("passInput").value;
  const fill = document.getElementById("meterFill");
  const label = document.getElementById("passLabel");

  if (!pass) {
    fill.style.width = "0%";
    label.textContent = "Strength: Enter password";
    label.style.color = "#94a3b8";
    return;
  }

  let score = 0;
  if (pass.length >= 8) score++;
  if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score++;
  if (/\d/.test(pass)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) score++;

  switch (score) {
    case 1:
      fill.style.width = "25%";
      fill.style.backgroundColor = "#ef4444"; // Red
      label.textContent = "Strength: Very Weak";
      label.style.color = "#ef4444";
      break;
    case 2:
      fill.style.width = "50%";
      fill.style.backgroundColor = "#f97316"; // Orange
      label.textContent = "Strength: Moderate";
      label.style.color = "#f97316";
      break;
    case 3:
      fill.style.width = "75%";
      fill.style.backgroundColor = "#eab308"; // Yellow
      label.textContent = "Strength: Good";
      label.style.color = "#eab308";
      break;
    case 4:
      fill.style.width = "100%";
      fill.style.backgroundColor = "#22c55e"; // Green
      label.textContent = "Strength: Excellent & Secure! 🔒";
      label.style.color = "#22c55e";
      break;
  }
}

// -----------------------------------------------
// 4. Shopping Cart with State & Totals
// -----------------------------------------------
let cartItems = [];
const cartListContainer = document.getElementById("cartItemsList");
const cartTotalDisplay = document.getElementById("cartTotalPrice");

function renderCart() {
  if (cartItems.length === 0) {
    cartListContainer.innerHTML = `<p style="color:#64748b; font-size:13px;">Cart is empty.</p>`;
    cartTotalDisplay.textContent = "$0.00";
    return;
  }

  cartListContainer.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span style="font-size:14px;">${item.name}</span>
      <div>
        <span style="color:#38bdf8; font-weight:bold; margin-right:8px;">$${item.price}</span>
        <button onclick="removeCartItem(${index})" style="background:#475569; padding:2px 6px; font-size:11px;">✕</button>
      </div>
    `;
    cartListContainer.appendChild(div);
  });

  cartTotalDisplay.textContent = `$${total.toFixed(2)}`;
}

function addItemToCart(name, price) {
  cartItems.push({ name, price });
  renderCart();
}

function removeCartItem(index) {
  cartItems.splice(index, 1);
  renderCart();
}

function clearCart() {
  cartItems = [];
  renderCart();
}
