// const formatDate = (text: string): string =>{

// });

function formatDate(date: Date): string {
  const text = date.toString();
  return `${text.substring(8, 10)}/${text.substring(5, 7)}/${text.substring(
    0,
    4,
  )}`;
}

export default formatDate;
