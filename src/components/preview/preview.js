import {connect} from 'react-redux';
import {useEffect } from 'react';
import './preview.css';

function Preview({settings}) {

  const preview_style = {
    // border: '2px solid black',
  };
  const banner_style = {
    position: 'relative',
    width: settings.bannerSizeX + 'px',
    height: settings.bannerSizeY + 'px',
    background: settings.background,
    overflow: 'hidden',
  };
  const banner_text_style = {
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
  const banner_img_style = {
    position: 'absolute',
    top: '0',
    left: '0',
  };
   

  useEffect(() => {
    const banner = document.querySelector('.banner');
    const bannerImg = document.getElementById('banner_img');
    const bannerText = document.getElementById('banner_text');
    dragAndDrop(bannerImg,banner);
    dragAndDrop(bannerText,banner);
    bannerText.addEventListener('dblclick', () => {
      bannerText.setAttribute('contenteditable','true');
      bannerText.style.cursor = 'text';
      bannerText.style.userSelect = 'auto';
      bannerText.onmousedown = null;
      bannerText.addEventListener('blur', () => {
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
      const startY = parent.getBoundingClientRect().top; // определем начало отсчета по Y
      let shiftX = event.clientX - elem.getBoundingClientRect().left; // смещение курсова относительно центра объекта по X
      let shiftY = event.clientY - elem.getBoundingClientRect().top; // смещение курсова относительно центра объекта по Y
      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) { // перезапись свойств left и top у объекта на основе вычислений разности изначального положения и текущего
        elem.style.left = pageX - shiftX - startX + 'px';
        elem.style.top = pageY - shiftY - startY + 'px';
        
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY); // передвигаем объект, после начальной выставки
      }

      document.addEventListener('mousemove', onMouseMove); // передвигаем объект при событии mousemove
    
      elem.onmouseup = function() { // отпустить объект, удалить обработчики
        document.removeEventListener('mousemove', onMouseMove);
        elem.onmouseup = null;
        
      };
    
    };
    
    elem.ondragstart = function() { // отменим событие браузерного дрэгга
      return false;
    };
  }

  

  return (
    <>
      <section className='preview' style={preview_style} id='preview'>
        <div className='banner' style={banner_style} id='capture'>

            <img src={settings.imgURL} alt='' style={banner_img_style} id='banner_img'/>
            <div  style={banner_text_style} suppressContentEditableWarning={true} id='banner_text'> Write your awesome text here</div>

        </div>
      </section>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    settings: state
  }
}

export default connect(mapStateToProps)(Preview);