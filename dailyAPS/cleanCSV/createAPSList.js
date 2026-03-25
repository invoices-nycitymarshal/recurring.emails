function createAPSList(inputFileId, outputFolderId) {
  const outputFileName = 'aps_tenets.csv';

  const rows = extractRelevantColumns(inputFileId);
  const apsTenets = pickAPSTenets(rows);
  const outputFile = writeCSV(outputFolderId, outputFileName, apsTenets);

  return outputFile;
}