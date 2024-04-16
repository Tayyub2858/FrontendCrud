import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import Admin from './Admin';
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />} />
          <Route path='/user/create' element={<EmpCreate />} />
          <Route path='/user/detail/:empid' element={<EmpDetail />} />
          <Route path='/user/edit/:empid' element={<EmpEdit />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/dashbaord' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
