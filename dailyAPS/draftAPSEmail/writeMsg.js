const { getNextDate, getNextWeekday, formatDate } = require('./helperFunctions/getNextDate');
const { getEmailsFromContactGroup } = require('./helperFunctions/parseGoogleContacts');

function createEmailInstance({ tenets, subject, body }) {
  return {
    subject,
    body,
    tenets
  };
}

function writeMsgSubject() {
  const nextDate = formatDate(getNextDate());
  const nextDay = getNextWeekday();

  const emailSubject = `APS Evictions for ${nextDay}, ${nextDate}`;

  return emailSubject;
}

function writeRecipient() {
  const groupLabel = 'APS CIU';
  return getEmailsFromContactGroup(groupLabel);
}

function writeEmailBody(tenets) {
  return [
    'Please see below list of tenets scheduled tomorrow for eviction:',
    '',
    writeTenetList(tenets),
    '',
    writeEmailSignature(),
    '',
  ].join('\n');
}

function writeTenetList(tenets) {
  return tenets
    .map((tenet, index) => [
      `${index + 1}. ${tenet.tenet_name ?? ''}`,
      `Court Index: ${tenet.court_index ?? ''}`,
      `Control No: ${tenet.psa_ctrl_no ?? ''}`,
      `Executed By: ${tenet.executed_by ?? ''}`,
      `Address: ${formatAddress(tenet)}`,
    ].join('\n'))
    .join('\n\n');
}

function writeEmailSignature() {
  return [
    'Thank you,',
    '',
    'Marshal Grossman and Bailey'
  ].join('\n');
}

function formatAddress(tenet) {
  const address = tenet['eviction address'] ?? '';
  const apt = tenet.eviction_apt_num ? `Apt ${tenet.eviction_apt_num}` : '';
  const city = tenet.eviction_city ?? '';
  const state = tenet.eviction_state ?? '';
  const zip = tenet.eviction_zip ?? '';

  return [address, apt, `${city}, ${state} ${zip}`]
    .filter(Boolean)
    .join(', ');
}

module.exports = {
  createEmailInstance,
  writeMsgSubject,
  writeRecipient,
  writeEmailBody,
  writeTenetList,
  writeEmailSignature,
  formatAddress
};