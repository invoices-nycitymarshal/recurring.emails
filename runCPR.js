function runCPReminder() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();

  if (day === 0 || day === 6) return;

  if (minute > 7) return;

  const sendHours = [12, 13, 14];

  if (!sendHours.includes(hour)) return;

  const props = PropertiesService.getScriptProperties();
  const key = now.toDateString() + "_" + hour;

  if (props.getProperty(key)) return;

  sendCPREmail();

  props.setProperty(key, "sent");
}

function sendCPREmail() {
  MailApp.sendEmail({
    to: "marshalgrossmanstaff@gmail.com",
    subject: "RUN CPR | RUN CPR | RUN CPR",
    body: "For the love of God, RUN CPR ALREADY!"
  });
}