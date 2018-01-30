export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const isDecimal = num => 
  (num % 1 !== 0) ? Math.round(num * 100) / 100 : num;