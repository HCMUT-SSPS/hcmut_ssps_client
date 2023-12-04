export function formatUptime(uptime: number): string {
  const seconds = Math.floor(uptime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days === 0 && hours == 0) return `${minutes === 0 ? '' : `${minutes}m`}${seconds % 60}s`;
  if (days === 0) return `${hours}h${minutes % 60}m`;

  return `${days}d${hours % 24}h`;
}
