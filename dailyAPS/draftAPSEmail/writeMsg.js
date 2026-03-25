function createEmailInstance({ to, subject, body, tenets }) {
  return {
    to,
    subject,
    body,
    tenets
  };
}

function writeMsgSubject() {
  const nextDate = formatDate(getNextDate());
  const nextDay = getNextWeekday();

  return `APS Evictions for ${nextDay}, ${nextDate}`;
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
    writeEmailSignature()
  ].join('\n');
}

function writeTenetList(tenets) {
  return tenets
    .map((tenet, index) => [
      `${index + 1}. ${tenet.tenet_name ?? ''}`,
      `Court Index: ${tenet.court_index ?? ''}`,
      `Control No: ${tenet.psa_ctrl_no ?? ''}`,
      `Executed By: ${tenet.executed_by ?? ''}`,
      `Address: ${formatAddress(tenet)}`
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
  const address = tenet.eviction_address ?? '';
  const apt = tenet.eviction_apt_num ? `Apt ${tenet.eviction_apt_num}` : '';
  const city = tenet.eviction_city ?? '';
  const state = tenet.eviction_state ?? '';
  const zip = tenet.eviction_zip ?? '';

  return [address, apt, `${city}, ${state} ${zip}`]
    .filter(Boolean)
    .join(', ');
}