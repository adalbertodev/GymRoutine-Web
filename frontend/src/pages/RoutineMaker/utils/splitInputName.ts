export const splitInputName = (inputName: string) => {
  const nameSplited = inputName.split('.');

  return {
    row: parseInt(nameSplited[1]),
    column: parseInt(nameSplited[3]),
    field: nameSplited[4]
  };
};
