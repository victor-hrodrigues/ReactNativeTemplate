export function parseDateFromString(dateString: string): Date {
  const dateParts = dateString.split('/');
  const dateDay = parseInt(dateParts[0], 10);
  const dateMonth = parseInt(dateParts[1], 10) - 1;
  const dateYear = parseInt(dateParts[2], 10);
  return new Date(dateYear, dateMonth, dateDay);
}

export function parseDateFromUTCString(utcDateString: string): Date {
  return new Date(Date.parse(utcDateString));
}

export function formatDate(date: Date): string {
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;
}

export function formatTime(date: Date): string {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
