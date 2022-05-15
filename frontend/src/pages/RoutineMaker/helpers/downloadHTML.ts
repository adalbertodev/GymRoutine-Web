import { getFontEmbedCSS, toPng } from 'html-to-image-v2';
import downloadjs from 'downloadjs';

export const downloadHTML = async (element: HTMLElement | string | null) => {
  if (element === null) {
    return;
  }

  if (typeof element === 'string') {
    element = document.querySelector(`#${element}`) as HTMLElement;
  }

  try {
    const fontEmbedCSS = await getFontEmbedCSS(element);

    const dataUrl = await toPng(element, {
      quality: 1,
      backgroundColor: 'white',
      fontEmbedCSS: fontEmbedCSS,
      cacheBust: true
    });
    downloadjs(dataUrl, 'routine.png', 'image/png');
  } catch (error) {
    console.error('Error: ', error);
  }
};
