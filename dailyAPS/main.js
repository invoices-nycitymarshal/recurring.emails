const PROJECT_FOLDER_ID = '1DHgVWbB018csdMXXGTRgB7hAbiNF2nB6';
const INPUT_FILE_NAME = '28_V1.CSV';

function main() {
  const projectFolder = DriveApp.getFolderById(PROJECT_FOLDER_ID);
  const inputFile = getFileByName(projectFolder, INPUT_FILE_NAME);

  const outputFile = createAPSList(
    inputFile.getId(),
    PROJECT_FOLDER_ID
  );

  const email = draftEmail(outputFile.getId());

  GmailApp.createDraft(
    email.to.join(','),
    email.subject,
    email.body
  );

  Logger.log(`Draft created successfully: ${email.subject}`);
}

function getFileByName(folder, fileName) {
  const files = folder.getFilesByName(fileName);

  if (!files.hasNext()) {
    throw new Error(`File not found: ${fileName}`);
  }

  return files.next();
}