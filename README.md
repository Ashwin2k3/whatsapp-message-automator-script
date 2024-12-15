# whatsapp-message-automator-script

## How to use 

### Explanation:

1. **Opens a New Tab for the First Message**:
   The script opens a new tab using `window.open()` for the first contact.

2. **Reuses the Same Tab**:
   For all subsequent messages, the same tab is reused by navigating to a new URL using `tab.location.href`.

3. **Retry Mechanism**:
   If the "send" button is not found, the script retries up to 5 times.

4. **Random Delays**:
   After sending a message, the script waits for a random time (30 seconds, 1 minute, or 2 minutes) before sending the next.

---

### How to Run:
1. Open **WhatsApp Web** in your browser.
2. Open the **DevTools Console** (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I` and go to the Console tab).
3. Paste the code into the console and press **Enter**.

---

### Behavior:
- The script will first open a new tab for WhatsApp Web.
- It will then navigate to each phone number's chat in the same tab, send the message, and wait for a random delay before moving to the next number.

Let me know if further tweaks are needed!
