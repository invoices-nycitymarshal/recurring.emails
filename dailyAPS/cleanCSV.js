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
    
function extractColumns(filePath) {

}