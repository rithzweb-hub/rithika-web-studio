# 📋 Google Sheet + Apps Script Setup (5 mins)

This connects your portfolio's "Start Your Project" form to a Google Sheet
named **`customers`**, and sends you an email every time someone submits.

---

## Step 1 — Create the Google Sheet

1. Go to https://sheets.google.com → click **Blank**.
2. Rename the spreadsheet to **`customers`**.
3. In **Row 1**, paste these column headers (one per cell, left to right):

```
submitted_at | name | business_name | whatsapp | business_description | primary_offering | website_goal | primary_action | has_logo_content | reference_websites | pages_needed | timeline | notes
```

(You can copy the line above and use **Data → Split text to columns** with `|`.)

---

## Step 2 — Add the Apps Script

1. In your sheet, click **Extensions → Apps Script**.
2. Delete any existing code in `Code.gs`.
3. Paste this entire script:

```javascript
// ====== CONFIG ======
const NOTIFY_EMAIL = "rithzweb@gmail.com"; // 📧 your email
const SHEET_NAME = "Sheet1"; // tab name (default is Sheet1)

// Headers must match the keys we send from the website
const HEADERS = [
  "submitted_at", "name", "business_name", "whatsapp",
  "business_description", "primary_offering", "website_goal",
  "primary_action", "has_logo_content", "reference_websites",
  "pages_needed", "timeline", "notes"
];

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
      || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Ensure headers exist on first run
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    const params = e.parameter || {};
    const row = HEADERS.map(h => params[h] || "");
    sheet.appendRow(row);

    // Send notification email
    const subject = `🎉 New Project Inquiry — ${params.name || "Unknown"}`;
    const body = HEADERS
      .map(h => `${h.toUpperCase()}:\n${params[h] || "-"}\n`)
      .join("\n");

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: subject,
      body: `New website project inquiry from your portfolio:\n\n${body}\n\n— Sent from rithika.dev`,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Form endpoint is live ✅");
}
```

4. Click the 💾 **Save** icon (name the project `customers-webhook`).

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the ⚙️ gear icon → **Web app**.
3. Fill in:
   - **Description:** `Portfolio form webhook`
   - **Execute as:** `Me (rithzweb@gmail.com)`
   - **Who has access:** **`Anyone`** ← important!
4. Click **Deploy**.
5. Google will ask you to **Authorize access** — click through, choose your
   Google account, click **Advanced → Go to customers-webhook (unsafe) →
   Allow**. (It's safe — it's your own script.)
6. **Copy the Web App URL.** It looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

---

## Step 4 — Paste the URL into your code

Open `src/config/site.ts` and replace the placeholder:

```ts
export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx.../exec"; // ← paste your URL here
```

Save. That's it! 🎉

---

## Test it

1. Open your portfolio → click **Start Your Project** → fill the form → submit.
2. Check your `customers` Google Sheet → new row should appear.
3. Check your inbox at `rithzweb@gmail.com` → notification email should arrive.

---

## Updating the script later

If you change anything in the Apps Script, you must **Deploy → Manage
deployments → ✏️ Edit → Version: New version → Deploy** (the URL stays the
same).

---

## Troubleshooting

- **No row appears in sheet:** Make sure "Who has access" is set to **Anyone**.
- **No email:** Apps Script needs `MailApp` permission — re-authorize.
- **CORS error in console:** This is expected and harmless — the form uses
  `no-cors` mode. The data still arrives.
