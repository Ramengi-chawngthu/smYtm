export default function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formattedDate;
}
