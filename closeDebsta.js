function closeDebstaRemind() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();

  if (day === 0 || day === 6) return;
  if (hour !== 16 || minute < 50) return;

  const props = PropertiesService.getScriptProperties();
  const today = now.toDateString();

  if (props.getProperty("lastSent") === today) return;

  sendDEBSTAEmail();
  props.setProperty("lastSent", today);
}

function sendDEBSTAEmail() {
  MailApp.sendEmail({
    to: "marshalgrossmanstaff@gmail.com",
    subject: "CLOSE DEBSTA | CLOSE DEBSTA",
    body: "For the love of God, close Debsta already!"
  });
}