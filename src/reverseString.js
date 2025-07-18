export default function reverseString(string) {
  let reverse = "";
  for (let i = string.length; i >= 0; i--) {
    reverse += string.charAt(i);
  }
  return reverse;
}
