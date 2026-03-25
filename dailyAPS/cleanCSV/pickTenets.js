function isAPSTenet(row) {
  return String(row.aps_involvement_flag || '')
    .trim()
    .toLowerCase() === 'y';
}

function getAPSTenets(rows) {
  return rows.filter(isAPSTenet);
}

module.exports = { getAPSTenets };