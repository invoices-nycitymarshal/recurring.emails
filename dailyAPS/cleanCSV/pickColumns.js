const fs = require('fs');
const csv = require('csv-parser');

const relevantColumns = [
  'court_index',
  'executed_by',
  'tenet_name',
  'eviction address',
  'eviction_apt_num',
  'eviction_city',
  'eviction_state',
  'eviction_zip',
  'psa_ctrl_no',
  'aps_involvement_flag'
];

function mapObject(obj, transformFn) {
  const result = {};

  for (const key in obj) {
    const [newKey, newValue] = transformFn(key, obj[key]);
    result[newKey] = newValue;
  }

  return result;
}

function pickKeys(obj, keys) {
  const result = {};

  for (const key of keys) {
    result[key] = obj[key] ?? null;
  }

  return result;
}

function normalizeRow(row) {
  return mapObject(row, (key, value) => [key.trim().toLowerCase(), value]);
}

function pickRelevantColumns(row) {
  return pickKeys(row, relevantColumns);
}

function transformRow(row) {
  const normalizedRow = normalizeRow(row);
  return pickRelevantColumns(normalizedRow);
}

async function extractRelevantColumns(filePath) {
  const results = [];

  await readCsv(filePath, (row) => {
    results.push(transformRow(row));
  });

  return results;
}

module.exports = { extractRelevantColumns };