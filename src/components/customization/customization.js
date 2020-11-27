// import {useState} from 'react';
import {connect} from 'react-redux';
import {bgChange,fontColorChange,fontSizeChange,bannerSizeXChange,bannerSizeYChange,imgChange,linkChange} from '../../actions'
import './customization.css';

function Customization({settings,bgChange,fontColorChange,fontSizeChange,bannerSizeXChange,bannerSizeYChange,imgChange,linkChange}) {
  
  const toggleMenu = (e) => {
    const menu = document.querySelector('.customization__form');
    const txt = e.target.textContent;
    if (txt === 'show'){
      menu.style.display = 'block';
      e.target.textContent = 'hide';
    };
    if (txt === 'hide'){
      menu.style.display = 'none';
      e.target.textContent = 'show';
    };
  }

  const {background,fontColor,fontSize,bannerSizeX,bannerSizeY,imgURL,link} = settings;

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
      </form>
      {/* <h3>{background},{fontSize}</h3> */}
    </div>
  </section>
  );
}

const mapStateToProps = (state) => {
  return {
    settings: state
  }
}
const mapDispatchToprops = {
  bgChange,
  fontColorChange,
  fontSizeChange,
  bannerSizeXChange,
  bannerSizeYChange,
  imgChange,
  linkChange,
}

export default connect(mapStateToProps,mapDispatchToprops)(Customization);