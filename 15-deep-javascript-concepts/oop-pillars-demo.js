// ========================================================
// 4 Pillars of OOP, Static Members & Mixins In Action
// ========================================================

console.log("=== 1. Encapsulation with Private Fields (#) ===");
class SecureVault {
  #secretPasscode;
  #accessLogs = [];

  constructor(passcode) {
    this.#secretPasscode = passcode;
  }

  unlock(attempt) {
    const isSuccess = attempt === this.#secretPasscode;
    this.#accessLogs.push({ time: new Date().toISOString(), success: isSuccess });
    return isSuccess ? "🔓 Vault opened!" : "⛔ Access Denied!";
  }

  getAuditTrail() {
    return [...this.#accessLogs]; // Returns defensive copy
  }
}

const myVault = new SecureVault("alpha-99");
console.log(myVault.unlock("wrong"));
console.log(myVault.unlock("alpha-99"));
console.log("Audit log count:", myVault.getAuditTrail().length);

console.log("\n=== 2. Inheritance & Polymorphism in Action ===");
class NotificationChannel {
  send(recipient, message) {
    throw new Error("Method send() must be overridden");
  }
}

class EmailNotification extends NotificationChannel {
  send(recipient, message) {
    return `📧 Email delivered to [${recipient}]: "${message}"`;
  }
}

class SMSNotification extends NotificationChannel {
  send(recipient, message) {
    return `📱 SMS dispatched to [${recipient}]: "${message}"`;
  }
}

class PushNotification extends NotificationChannel {
  send(recipient, message) {
    return `🔔 Push Notification sent to device token [${recipient}]: "${message}"`;
  }
}

// Polymorphic dispatch loop:
const channels = [
  { channel: new EmailNotification(), target: "shivang@example.com" },
  { channel: new SMSNotification(), target: "+91-9876543210" },
  { channel: new PushNotification(), target: "DEVICE_TOKEN_ABCD" }
];

channels.forEach(item => {
  console.log(item.channel.send(item.target, "System Maintenance at 10 PM IST"));
});

console.log("\n=== 3. Static Factory Methods ===");
class UserSession {
  static activeSessions = 0;

  constructor(userId, role) {
    this.userId = userId;
    this.role = role;
    UserSession.activeSessions++;
  }

  static createGuest() {
    return new UserSession(`guest_${Date.now()}`, "GUEST");
  }

  static createAdmin(adminId) {
    return new UserSession(adminId, "SUPERADMIN");
  }
}

const guest = UserSession.createGuest();
const admin = UserSession.createAdmin("adm_shivang");
console.log("Guest Role:", guest.role);
console.log("Admin Role:", admin.role);
console.log("Total Active Sessions tracked by static property:", UserSession.activeSessions);

console.log("\n=== 4. Mixin Composition Pattern ===");
const IdentifiableMixin = {
  getUUID() {
    return `${this.constructor.name.toUpperCase()}_${Math.random().toString(36).substring(2, 9)}`;
  }
};

const AuditableMixin = {
  trackChange(action) {
    console.log(`[AUDIT] Action '${action}' performed on ID ${this.getUUID()}`);
  }
};

class Invoice {
  constructor(amount) {
    this.amount = amount;
  }
}

// Apply multiple mixins
Object.assign(Invoice.prototype, IdentifiableMixin, AuditableMixin);

const inv = new Invoice(14999);
console.log("Generated UUID from Mixin:", inv.getUUID());
inv.trackChange("PAYMENT_RECEIVED");
