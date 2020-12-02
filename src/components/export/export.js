// импорты зависимостей
import {connect} from 'react-redux';
import './export.css'
import html2canvas from 'html2canvas';
import PropTypes from 'prop-types';

// функциональный компонент Export
function Export({link,settings}) {

  // функция для 'скриншота', испольуется библиотека html2canvas, в случае успеха получаем канвас
   const download = () => {
    const node = document.getElementById('capture');
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });


    html2canvas(node,{
      useCORS: true
    }).then(canvas => {
      saveAs(canvas.toDataURL(), "banner.png"); // вызывается функция сохранения, куда передается ссылка на канвас и имя файла
      showNotification('<b>take a screenshot...</b>'); // показывается оповещение
      setTimeout(hideNotification,500); // скрывается оповещение
    })
    .catch(() => {
      showNotification('<b>something is going wrong</b>');
      setTimeout(hideNotification,500);
    });
  };
  // эта функция создает <a> с которого можно скачать наше фото
  const saveAs = (uri, filename) => {
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link); // добавим ссылку в DOM
      link.click(); // качаем...
      document.body.removeChild(link); // убираем
    } else {
      window.open(uri);
    }
  };
  // показ уведомления с вашим текстом
  const showNotification = (text) => {
    const note = document.querySelector('.notification');
    note.innerHTML = text;
    note.style.display = 'block';
  };
  // удаление уведомления
  const hideNotification = () => {
    const note = document.querySelector('.notification');
    note.innerHTML = '';
    note.style.display = 'none';
  };
  // функция для сиреализации html разметки
  const copyNode = () => {
    const node = document.getElementById('capture');
    const copyOfNode = node.outerHTML; // получаем сериализацию
    // в буффер обмена кидаем разметку, обернув ее ссылкой на сайт
    navigator.clipboard.writeText(`<a href=${link} style='display: block; heigth: 100%' target='_blank'>` + copyOfNode + '</a>')
    .then(() => {
      showNotification('<b>copied to clipboard</b>');
      setTimeout(hideNotification,500);
    })
    .catch(() => {
      showNotification('<b>something is going wrong</b>');
      setTimeout(hideNotification,500);
    });
  };
  // копирование настроект в формат JSON
  const copySettings = () => {
    const bannerText = document.getElementById('banner_text').textContent;
    const config = {
      ...settings,
      textValue: bannerText // добавим в конфигурацию баннера текст
    };
    navigator.clipboard.writeText(JSON.stringify(config)) // кладем конфиг в буффер обмена
    .then(() => {
      showNotification('<b>settings is saved as JSON</b>');
      setTimeout(hideNotification,500);
    })
    .catch(() => {
      showNotification('<b>something is going wrong</b>');
      setTimeout(hideNotification,500);
    });
  };

  // возращаемая размента, на кнопки вешаеются обработчики с функциями
  return (
  <>
    <section className='export'>
      <button className='export__btn' id='save_png' onClick={download}>Save as .png</button>
      <button className='export__btn copy_html' onClick={copyNode}>Copy as HTML5 string</button>
      <button className='export__btn copy_json' onClick={copySettings}>Copy settings</button>
    </section>
    <p className='notification'></p>
  </>
  );
};

// прокидываем ссылку на сайт и все настойки отделно
const mapStateToProps = (state) => {
  return {
    link: state.link,
    settings: state,
  }
};
// проверка типов пропсов
Export.propTypes = {
  link: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired
}

// экспорт компонента
export default connect(mapStateToProps)(Export);