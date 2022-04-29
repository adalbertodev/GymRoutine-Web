import html2canvas from 'html2canvas';

export const downloadHTML = async (element: HTMLElement | string | null) => {
  if (element === null) {
    return;
  }

  if (typeof element === 'string') {
    element = document.querySelector(`#${element}`) as HTMLElement;
  }

  const canvas = await html2canvas(element);
  const img = canvas.toDataURL('img/png');
  const link = document.createElement('a');
  link.download = 'Rutine.png';
  link.href = img;
  link.click();
};
