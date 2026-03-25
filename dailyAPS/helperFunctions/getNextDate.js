function getNextDate() {
  const date = new Date();

  date.setDate(date.getDate() + 1);

  if (date.getDay() === 6) {
    date.setDate(date.getDate() + 2);
  }

  if (date.getDay() === 0) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}

function getNextWeekday() {
  return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    [getNextDate().getDay()];
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}