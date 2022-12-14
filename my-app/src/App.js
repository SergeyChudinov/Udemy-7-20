import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import './app.scss';
import Form from './Form';
import FormYup from './FormYup';
import AppHeader from "./AppHeader";
import FormFormik from './FormFormik';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Routes>
            <Route path="/" element={<Form/>}/>              
            <Route path="/yup" element={<FormYup/>}/>
            <Route path="/formik" element={<FormFormik/>}/>
            {/* <Route path="*" element={<Page404/>}/> */}
          </Routes>
        </main>
      </div>
    </Router>
    // <div className="app">
    //     <Form/>
    // </div>
  );
}

export default App;
