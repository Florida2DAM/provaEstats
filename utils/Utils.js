export const lletresNIF = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];

export const calculaLletraNif = unDni => {
  let unDniEnter = parseInt(unDni);
  if (!isNaN(unDniEnter)) {
    let posicio = unDniEnter % 23;
    return lletresNIF[posicio];
  } else {
    return NaN;
  }
};
