// тут описаны action'ы
export const bgChange = (val) => { // изменить цвет заднего фона
  return {
    type: 'ADD_BG',
    value: val,
  };
};
export const fontColorChange = (val) => { // изменить цвет шрифта
  return {
    type: 'ADD_FONT_COLOR',
    value: val,
  };
};
export const fontSizeChange = (val) => { // изменить размер шрифта
  return {
    type: 'ADD_FORN_SIZE',
    value: val,
  };
};
export const bannerSizeXChange = (val) => { // изменить размер баннера по X
  return {
    type: 'ADD_BANNER_SIZE_X',
    value: val,
  };
};
export const bannerSizeYChange = (val) => { // изменить размер баннера по Y
  return {
    type: 'ADD_BANNER_SIZE_Y',
    value: val,
  };
};
export const imgChange = (val) => { // изменить/добавить изображение
  return {
    type: 'ADD_IMG',
    value: val,
  };
};
export const linkChange = (val) => { // изменить/добавить ссылку для перехода на сайт
  return {
    type: 'ADD_LINK',
    value: val,
  };
};
export const reset = () => { // сбросить настройки
  return {
    type: 'RESET',
  };
};