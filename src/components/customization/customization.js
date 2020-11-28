// импорты зависимостей
import {connect} from 'react-redux';
import {bgChange,fontColorChange,fontSizeChange,bannerSizeXChange,bannerSizeYChange,imgChange,linkChange,reset} from '../../actions';
import './customization.css';
import PropTypes from 'prop-types';

// функциональный компонент меню настройки баннера, передаются настройки и actions
function Customization({settings,bgChange,fontColorChange,fontSizeChange,bannerSizeXChange,bannerSizeYChange,imgChange,linkChange,reset}) {

  // кнопка переключения открытия/закрытия меню настроек
  const toggleMenu = (e) => {
    const menu = document.querySelector('.customization__form'); // получаем элемент меню
    const txt = e.target.textContent; // получаем надпись с кнопки
    if (txt === 'show'){ // если кнопка в положении SHOW, то прячем блок и меняем на HIDE
      menu.style.display = 'block';
      e.target.textContent = 'hide';
    };
    if (txt === 'hide'){ // если кнопка в положении HIDE, то прячем блок и меняем на SHOW
      menu.style.display = 'none';
      e.target.textContent = 'show';
    };
  };

  // делаем диструктуризацию настроек из settings
  const {background,fontColor,fontSize,bannerSizeX,bannerSizeY,imgURL,link} = settings;

  // возвращаем из компонента...
  // ниже из return() возвращается разметка секции редактирования формы, на input'ах повешены обработчики событий, так чтобы
  // изменения сразу отображались на превью.
  // картинку можно задать сслыкой (URL или URI)
  // в строку цвета заднего фона можно вставить просто цвет ( вручную или через палитру ) и градиент ( только руками )
  return (
  <section className='customization'>
    <div className='customization__block'>
      <button className='customizer_btn' onClick={(e) => toggleMenu(e)}>show</button>
      <form className='customization__form'>
        <div className='customization__form_item banner_sizes'>
          <h2 className='customization__form_label'>Banner size</h2>
          <div className='customization__form_inputs'>
            <span>X:</span>
            <input type='text' className='customization__form_text' value={bannerSizeX} onChange={e => bannerSizeXChange(e.target.value)}/>
            <span>Y:</span>
            <input type='text' className='customization__form_text' value={bannerSizeY} onChange={e => bannerSizeYChange(e.target.value)}/>
          </div>
        </div>
        <div className='customization__form_item background'>
          <h2 className='customization__form_label'>Background</h2>
          <div className='customization__form_inputs'>
            <input type='color' className='customization__form_color' value={background} onInput={e => bgChange(e.target.value)}/>
            <input type='text' className='customization__form_text' value={background} onChange={e => bgChange(e.target.value)}/>
          </div>
        </div>
        <div className='customization__form_item font_color'>
          <h2 className='customization__form_label'>Font color</h2>
          <div className='customization__form_inputs'>
            <input type='color' className='customization__form_color' value={fontColor} onInput={e => fontColorChange(e.target.value)}/>
            <input type='text' className='customization__form_text' value={fontColor} onChange={e => fontColorChange(e.target.value)}/>
          </div>
        </div>
        <div className='customization__form_item font_size'>
          <h2 className='customization__form_label'>Font size</h2>
          <div className='customization__form_inputs'>
            <input type='text' className='customization__form_text' value={fontSize} onChange={e => fontSizeChange(e.target.value)}/>
          </div>
        </div>
        <div className='customization__form_item imgURL'>
          <h2 className='customization__form_label'>Enter img link or URI</h2>
          <div className='customization__form_inputs'>
            <input type='text' className='customization__form_text' value={imgURL} onChange={e => imgChange(e.target.value)}/>
          </div>
        </div>
        <div className='customization__form_item link'>
          <h2 className='customization__form_label'>Enter link to your site</h2>
          <div className='customization__form_inputs'>
            <input type='text' className='customization__form_text' value={link} onChange={e => linkChange(e.target.value)}/>
          </div>
        </div>
        <button className='reset_btn' onClick={(e) => {e.preventDefault(); reset()}}>reset</button>
      </form>
    </div>
  </section>
  );
}
// прокидываем свойства из store
const mapStateToProps = (state) => {
  return {
    settings: state,
  }
};
// прокидываем действия 
const mapDispatchToProps = {
  bgChange,
  fontColorChange,
  fontSizeChange,
  bannerSizeXChange,
  bannerSizeYChange,
  imgChange,
  linkChange,
  reset,
};
// проверка типов пропсов
Customization.propTypes = {
  settings: PropTypes.object.isRequired,
  bgChange: PropTypes.func.isRequired,
  fontColorChange: PropTypes.func.isRequired,
  fontSizeChange: PropTypes.func.isRequired,
  bannerSizeXChange: PropTypes.func.isRequired,
  bannerSizeYChange: PropTypes.func.isRequired,
  imgChange: PropTypes.func.isRequired,
  linkChange: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}
// экспортируем полученный компонент
export default connect(mapStateToProps,mapDispatchToProps)(Customization);