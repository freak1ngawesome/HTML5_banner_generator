// изначальное состояние
const initialState = {
  background: '#000000',
  fontColor: '#ffffff',
  fontSize: '44',
  bannerSizeX: '282',
  bannerSizeY: '376',
  imgURL: '',
  link: ''
};
// описание reducer'а
const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'ADD_BG':{
      return {
        ...state,
        background: action.value,
      };
    }
    case 'ADD_FONT_COLOR':{
      return {
        ...state,
        fontColor: action.value,
      };
    }
    case 'ADD_FORN_SIZE':{
      return {
        ...state,
        fontSize: action.value,
      };
    }
    case 'ADD_BANNER_SIZE_X':{
      return {
        ...state,
        bannerSizeX: action.value,
      };
    }
    case 'ADD_BANNER_SIZE_Y':{
      return {
        ...state,
        bannerSizeY: action.value,
      };
    }
    case 'ADD_IMG':{
      return {
        ...state,
        imgURL: action.value,
      };
    }
    case 'ADD_LINK':{
      return {
        ...state,
        link: action.value,
      };
    }
    case 'RESET':{
      return initialState;
    }
    default:
      return state;
  }
}

export default reducer;// экспорт reduser'а