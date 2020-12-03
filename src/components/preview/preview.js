// импортируем зависимости
import {connect} from 'react-redux';
import {useEffect} from 'react';
import './preview.css';
import PropTypes from 'prop-types';

// функциональный компонент превью
function Preview({settings}) {

  // объекты со стилями для элементов превью, в настраиваемые свойства помещаем значения из settings
  const banner_style = { // сам баннер
    position: 'absolute',
    width: settings.bannerSizeX + 'px',
    height: settings.bannerSizeY + 'px',
    background: settings.background,
    overflow: 'hidden',
    borderRadius: '10px',
    
  };
  const banner_text_style = { // текст на баннере
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '10px',
    color: settings.fontColor,
    fontFamily: 'monospace',
    fontWeight: '700',
    fontSize: settings.fontSize + 'px',
    lineHeight: settings.fontSize + 'px',
    height: 3*settings.fontSize + 'px',
    overflow: 'hidden',
    userSelect: 'none',
  };
  const banner_img_style = { // изображение на баннере
    position: 'absolute',
    top: '0',
    left: '0',
  };
  // useEffect используется для симуляции в функциональном компоненте ComponentDidMount()
  useEffect(() => {
    const banner = document.querySelector('.banner'); // получаем баннер
    const bannerImg = document.getElementById('banner_img'); // получаем картинку на баннере
    const bannerText = document.getElementById('banner_text'); // получаем текст на баннере
    dragAndDrop(bannerImg,banner); // запускаем функцию драг'анд'дроп на картинку
    dragAndDrop(bannerText,banner); // запускаем функцию драг'анд'дроп на текст
    // ниже обрабатывается логика редактирования текста, который доступен после двойного клика на текст
    bannerText.addEventListener('dblclick', () => {
      bannerText.setAttribute('contenteditable','true'); // при даблклике добавляем возможность редактировать текст
      bannerText.style.cursor = 'text'; // меняем курсор
      bannerText.style.userSelect = 'auto'; // добавляем возможность выделять текст
      bannerText.onmousedown = null; // убираем прослушку нажатия на текст
      bannerText.addEventListener('blur', () => { // в момент ухода с текста фокуса возвращаем все назад, текст снова в состоянии перемещения
        bannerText.setAttribute('contenteditable','false');
        bannerText.style.cursor = 'move';
        bannerText.style.userSelect = 'none';
        dragAndDrop(bannerText,banner);
        bannerText.onblur = null;
      });
    });
  },[])
  
  function dragAndDrop (elem,parent){
    elem.onmousedown = function(event) { // по нажатию на объект
      const startX = parent.getBoundingClientRect().left; // определем начало отсчета по X
      const startY = parent.getBoundingClientRect().top + document.documentElement.scrollTop; // определем начало отсчета по Y с учетом прокрутки
      let shiftX = event.clientX - elem.getBoundingClientRect().left; // смещение курсора относительно центра объекта по X
      let shiftY = event.clientY - elem.getBoundingClientRect().top; // смещение курсора относительно центра объекта по Y
      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) { // перезапись свойств left и top у объекта на основе вычислений разности изначального положения и текущего
        elem.style.left = pageX - shiftX - startX + 'px';
        elem.style.top = pageY - shiftY - startY + 'px';
      };

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY); // передвигаем объект, после начальной выставки
      };

      document.addEventListener('mousemove', onMouseMove); // передвигаем объект при событии mousemove
    
      elem.onmouseup = function() { // отпустить объект, удалить обработчики
        document.removeEventListener('mousemove', onMouseMove);
        elem.onmouseup = null;
      };
    };
    
    elem.ondragstart = function() { // отменим событие браузерного дрэгга
      return false;
    };
  };
  // возвращаем разметку
  return (
    <section className='preview' id='preview'>
      <div className='banner' style={banner_style} id='capture'>
        <img src={settings.imgURL} alt='' style={banner_img_style} id='banner_img'/>
        <div  style={banner_text_style} suppressContentEditableWarning={true} id='banner_text'> Write your awesome text here</div>
      </div>
    </section>
  );
};
// прокидываем настройки в компонент
const mapStateToProps = (state) => {
  return {
    settings: state
  }
};

// проверка типов пропсов
Preview.propTypes = {
  settings: PropTypes.object.isRequired,
}

// экспортируем компонент
export default connect(mapStateToProps)(Preview);