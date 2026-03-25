const { extractRelevantColumns } = require('./pickColumns');
const { getAPSTenets } = require('./pickAPSTenets');
const { writeCSV } = require('./writeCSV');

async function createAPSList(inputPath, outputPath) {
  const rows = await extractRelevantColumns(inputPath);
  const apsTenets = getAPSTenets(rows);

  writeCSV(outputPath, apsTenets);
}

module.exports = { createAPSList };