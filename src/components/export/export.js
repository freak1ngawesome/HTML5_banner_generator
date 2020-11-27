import {connect} from 'react-redux';
import './export.css'
import html2canvas from 'html2canvas';

function Export({link,settings}) {

  const download = () => {
    const node = document.getElementById('capture');
    // document.body.style.overflowY = 'hidden';
    html2canvas(node,{
      useCORS: true
    }).then(canvas => {
      saveAs(canvas.toDataURL(), "banner.png");
      showNotification('<b>take a screenshot...</b>');
      setTimeout(hideNotification,500);
    })
    .catch(() => {
      showNotification('<b>something is going wrong</b>');
      setTimeout(hideNotification,500);
    });
  };
  const saveAs = (uri, filename) => {
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };
  const showNotification = (text) => {
    const note = document.querySelector('.notification');
    note.innerHTML = text;
    note.style.display = 'block';
  };
  const hideNotification = () => {
    const note = document.querySelector('.notification');
    note.innerHTML = '';
    note.style.display = 'none';
  };
  const copyNode = () => {
    const node = document.getElementById('capture');
    const copyOfNode = node.outerHTML;
    navigator.clipboard.writeText(`<a href=${link} style='display: block; heigth: 100%' target='_blank'>` + copyOfNode + '</a>')
    .then(() => {
      showNotification('<b>copied to clipboard</b>');
      setTimeout(hideNotification,500);
    })
    .catch(() => {
      showNotification('<b>something is going wrong</b>');
      setTimeout(hideNotification,500);
    })
    
  };
  const copySettings = () => {
    const bannerText = document.getElementById('banner_text').textContent;
    const config = {
      ...settings,
      textValue: bannerText
    };
    navigator.clipboard.writeText(JSON.stringify(config))
    .then(() => {
      showNotification('<b>settings is saved as JSON</b>');
      setTimeout(hideNotification,500);
    })
    .catch(() => {
      showNotification('<b>something is going wrong</b>');
      setTimeout(hideNotification,500);
    })
  }
  return (
  <>
    <section className='export'>
      <button className='export__btn' onClick={download}>Save as .png</button>
      <button className='export__btn' onClick={copyNode}>Copy as HTML5 string</button>
      <button className='export__btn' onClick={copySettings}>Copy settings</button>
    </section>
    <p className='notification'></p>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    link: state.link,
    settings: state,
  }
}


export default connect(mapStateToProps)(Export);