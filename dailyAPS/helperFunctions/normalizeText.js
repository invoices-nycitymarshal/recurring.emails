function normalizeKey(key) {
  return key.trim().toLowerCase();
}

function normalizeRow(row) {
  const normalized = {};

  for (const key in row) {
    normalized[normalizeKey(key)] = row[key];
  }

  return normalized;
}