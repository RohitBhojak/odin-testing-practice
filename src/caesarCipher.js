export default function caesarCipher(string, n) {
  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (isUpperCase(char)) {
      cipher += convert(char, n, 65);
    } else if (isLowerCase(char)) {
      cipher += convert(char, n, 97);
    } else {
      cipher += char;
    }
  }
  return cipher;
}

function isUpperCase(char) {
  return /[A-Z]/.test(char);
}

function isLowerCase(char) {
  return /[a-z]/.test(char);
}

function convert(char, n, lowerBound) {
  let c = char.charCodeAt(0) - lowerBound + n;
  c %= 26;
  return String.fromCharCode(c + lowerBound);
}
