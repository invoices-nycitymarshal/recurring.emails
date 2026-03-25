const { createAPSList } = require('./cleanCSV/createAPSList');

async function main() {
  await createAPSList('./28_V1.CSV', './aps_tenets.csv');
}

main().catch(console.error);