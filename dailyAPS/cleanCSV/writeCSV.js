const fs = require('fs');

function rowsToCsv(rows) {
  if (!rows.length) return '';

  const headers = Object.keys(rows[0]);

  return [
    headers.join(','),
    ...rows.map(row =>
      headers
        .map(h => `"${String(row[h] ?? '').replace(/"/g, '""')}"`)
        .join(',')
    )
  ].join('\n');
}

function writeCSV(filePath, rows) {
  const csv = rowsToCsv(rows);
  fs.writeFileSync(filePath, csv, 'utf8');
}

module.exports = { writeCSV };