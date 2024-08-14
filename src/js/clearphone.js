export default function clearPhone(phone) {
  const re = /(\d{1,3})[ -(]*(\d{3})[ -)]*(\d{3})[ -]*(\d{2})[ -]*(\d{2})/gm;
  // const re = /(\d{1,3})[ \-\(]*(\d{3})[ \-\)]*(\d{3})[ \-]*(\d{2})[ \-]*(\d{2})/gm;
  const arr = re.exec(phone);
  let code = Number(arr[1]);
  const number = arr.slice(2);
  code = code === 8 ? 7 : code;
  return `+${code}${number.join('')}`;
}
