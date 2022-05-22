interface AutoFitTextProps {
  maxSize: number;
  minSize: number;
  input: HTMLInputElement | null | undefined;
  inputValue: string;
}

export const AutoFitText = ({
  maxSize,
  minSize,
  input,
  inputValue
}: AutoFitTextProps) => {
  const inputPaddingLeft =
    input?.style.paddingLeft.substring(
      0,
      input?.style.paddingLeft.length - 1
    ) || '0px';
  const inputPaddingRight =
    input?.style.paddingRight.substring(
      0,
      input?.style.paddingLeft.length - 1
    ) || '0px';

  const inputWidth = input
    ? input.clientWidth -
      parseInt(inputPaddingLeft) -
      parseInt(inputPaddingRight)
    : 150;
  let fontSize = Math.floor((inputWidth * 2) / inputValue.length);

  if (fontSize > maxSize) {
    fontSize = maxSize;
  }

  if (fontSize < minSize) {
    fontSize = minSize;
  }

  return fontSize;
};
