function draftEmail(fileId) {
  const tenets = [];

  readTenetCSV(fileId, (row) => {
    tenets.push(row);
  });

  const to = writeRecipient();
  const subject = writeMsgSubject();
  const body = writeEmailBody(tenets);

function createEmailInstance({ to, subject, body, tenets }) {
  return {
    to,
    subject,
    body,
    tenets
  };