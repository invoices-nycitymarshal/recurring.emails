const { readTenetCsv } = require('./getTenetInfo');
const { buildEmailBody } = require('./writeMssg');

async function draftEmail(filePath) {
  const tenets = [];

  await readTenetCsv(filePath, (row) => {
    tenets.push(row);
  });

  return buildEmailBody(tenets);
}

module.exports = { draftEmail };