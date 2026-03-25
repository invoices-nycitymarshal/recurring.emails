const { readTenetCSV } = require('./getTenetInfo'); // ✅
const { createEmailInstance, writeMsgSubject, writeRecipient, writeEmailBody } = require('./writeMsg');

async function draftEmail(filePath) {
  const tenets = [];

  await readTenetCSV(filePath, (row) => {
    tenets.push(row);
  });

  const to = writeRecipient();
  const subject = writeMsgSubject();
  const body = writeEmailBody(tenets);

  return createEmailInstance({
    to,
    subject,
    body,
    tenets
  });
}

module.exports = { draftEmail };