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

function normalizeRow(row) {
    
    const normalized = {};

    for (const key in row) {
        normalized[key.trim().toLowerCase()] = row[key];
    }

    return normalized;

}
    
function pickColumns(filePath) {

}

function extractRelevantColumns(filePath) {

}

