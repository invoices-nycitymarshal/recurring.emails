function rowsToCSV(rows) {
  if (!rows.length) {
    return '';
  }

  const headers = Object.keys(rows[0]);
  const lines = [headers.join(',')];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    const values = headers.map((header) => {
      const value = row[header] ?? '';
      const escaped = String(value).replace(/"/g, '""');
      return `"${escaped}"`;
    });

    lines.push(values.join(','));
  }

  return lines.join('\n');
}

function writeCSV(folderId, fileName, rows) {
  const csvContent = rowsToCSV(rows);
  const folder = DriveApp.getFolderById(folderId);

  return folder.createFile(fileName, csvContent, MimeType.CSV);
}