const fs = require('fs');
const csv = require('csv-parser');
const { normalizeRow } = require('./helperFunctions/normalizeText');

function readTenetCSV(filePath, onRow) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => onRow(normalizeRow(row)))
      .on('end', resolve)
      .on('error', reject);
  });
}

module.exports = { readTenetCSV };