export function parseUptime(uptime: number) {
  const hours = Math.floor(uptime / 3600000);
  const minutes = Math.floor((uptime % 3600000) / 60000);

  if (hours === 0 && minutes === 0) {
    return '<1 min';
  } else if (hours === 0) {
    return `${minutes} mins`;
  }

  return `${hours}hrs`;
}
