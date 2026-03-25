const { createAPSList } = require('./cleanCSV/createAPSList');
const { draftEmail } = require('./draftAPSEmail/draftEmail');

async function main() {
  try {
    const inputPath = './28_V1.CSV';
    const outputPath = './aps_tenets.csv';

    await createAPSList(inputPath, outputPath);

    const email = await draftEmail(outputPath);

    GmailApp.createDraft(
      email.to.join(','),
      email.subject,
      email.body
    );

    Logger.log('Draft created successfully.');
  } catch (error) {
    Logger.log(error.message);
    throw error;
  }
}