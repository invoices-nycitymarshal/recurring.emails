const { extractRelevantColumns } = require('./cleanCSV/pickColumns');
const { getAPSTenets } = require('./cleanCSV/pickAPSTenets');
const { writeCSV } = require('./cleanCSV/writeCSV');

async function main() {
  const inputPath = './28_V1.CSV';
  const outputPath = './aps_tenets.csv';

  const rows = await extractRelevantColumns(inputPath);
  const apsTenets = getAPSTenets(rows);

  writeCsv(outputPath, apsTenets);

  console.log(`Saved to ${outputPath}`);
}

main().catch(console.error);