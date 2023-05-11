export default function formatDate(dateString) {
  const date = new Date(dateString);

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const day = date.toLocaleDateString([], {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return `${time} ${day}`;
}
