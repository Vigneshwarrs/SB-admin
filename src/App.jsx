import './App.css'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Table from './components/Table'
import {BrowserRouter, Switch, Route} from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  return (
    <BrowserRouter> 
    <div className='App' id='wrapper'>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar />
        <div  className='container-fluid'>
          <Switch>
            <Route exact={true} path='/' component={Dashboard} />
            <Route exact={true} path='/tables' component={Table} />
          </Switch>
        </div>
      </div>
      </div>
    </div>
    </BrowserRouter>
    
  )
}

export default App
