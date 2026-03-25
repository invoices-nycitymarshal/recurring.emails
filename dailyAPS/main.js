const { createAPSList } = require('./cleanCSV/createAPSList');

async function main() {
  await createAPSList('./28_V1.CSV', './aps_tenets.csv');
  const emailBody = await draftEmail(outputPath);
  console.log(emailBody);
}

main().catch(console.error);