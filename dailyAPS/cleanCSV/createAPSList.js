const { extractRelevantColumns } = require('./pickColumns');
const { getAPSTenets } = require('./pickAPSTenets');
const { writeCSV } = require('./writeCSV');

async function main() {
  const inputPath = './28_V1.CSV';
  const outputPath = './aps_tenets.csv';

  const rows = await extractRelevantColumns(inputPath);
  const apsTenets = getAPSTenets(rows);

  writeCSV(outputPath, apsTenets);

  console.log(`Saved to ${outputPath}`);
}

main().catch(console.error);