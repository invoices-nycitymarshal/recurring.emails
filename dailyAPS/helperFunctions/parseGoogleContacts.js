function getEmailsFromContactGroup(groupLabel) {
  const groups = People.ContactGroups.list().contactGroups || [];

  const match = groups.find(group => group.name === groupLabel);

  if (!match) {
    throw new Error(`Contact group not found: ${groupLabel}`);
  }

  const group = People.ContactGroups.get(match.resourceName, {
    maxMembers: 1000
  });

  const memberResourceNames = group.memberResourceNames || [];
  const emails = [];

  for (const resourceName of memberResourceNames) {
    const person = People.People.get(resourceName, {
      personFields: 'emailAddresses'
    });

    const personEmails = person.emailAddresses || [];

    for (const email of personEmails) {
      if (email.value) {
        emails.push(email.value);
      }
    }
  }

  return emails;
}