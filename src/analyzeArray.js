export default function analyzeArray(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }
  return {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
