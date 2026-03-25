function readTenetCSV(fileId, onRow) {
  const file = DriveApp.getFileById(fileId);
  const csvText = file.getBlob().getDataAsString();
  const rows = Utilities.parseCsv(csvText);

  if (!rows.length) {
    return;
  }

  const headers = rows[0];

  for (let i = 1; i < rows.length; i++) {
    const rawRow = createRowObject(headers, rows[i]);
    const normalizedRow = normalizeRow(rawRow);
    onRow(normalizedRow);
  }
}

function createRowObject(headers, values) {
  const row = {};

  for (let i = 0; i < headers.length; i++) {
    row[headers[i]] = values[i] ?? '';
  }

  return row;
}