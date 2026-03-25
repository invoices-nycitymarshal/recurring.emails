const RELEVANT_COLUMNS = [
  'court_index',
  'executed_by',
  'tenet_name',
  'eviction_address',
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

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result[key] = obj[key] ?? '';
  }

  return result;
}

function normalizeRow(row) {
  return mapObject(row, (key, value) => [normalizeKey(key), value]);
}

function pickRelevantColumns(row) {
  return pickKeys(row, RELEVANT_COLUMNS);
}

function transformRow(row) {
  return pickRelevantColumns(normalizeRow(row));
}

function createRowObject(headers, values) {
  const row = {};

  for (let i = 0; i < headers.length; i++) {
    row[headers[i]] = values[i] ?? '';
  }

  return row;
}

function extractRelevantColumns(fileId) {
  const file = DriveApp.getFileById(fileId);
  const csvText = file.getBlob().getDataAsString();
  const rows = Utilities.parseCsv(csvText);
  const results = [];

  if (!rows.length) {
    return results;
  }

  const headers = rows[0];

  for (let i = 1; i < rows.length; i++) {
    const rawRow = createRowObject(headers, rows[i]);
    results.push(transformRow(rawRow));
  }

  return results;
}