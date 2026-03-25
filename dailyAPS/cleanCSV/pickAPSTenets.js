function isAPSTenet(row) {
  return String(row.aps_involvement_flag || '')
    .trim()
    .toLowerCase() === 'y';
}

function pickAPSTenets(rows) {
  return rows.filter(isAPSTenet);
}