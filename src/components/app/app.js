import Header from '../header/header.js';
import CustomizationMenu from '../customization/customization.js';
import PreviewBox from '../preview/preview.js';
import ExportButtons from '../export/export.js';
import './app.css'


function App() {
  return (
    <div className='container'>
      <Header/>
      <CustomizationMenu/>
      <PreviewBox/>
      <ExportButtons/>
      
      
    </div>
  );
}

export default App;
