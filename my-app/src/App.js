import Header from './components/Header/Header'
import './App.css';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import {BrowserRouter,Route, Routes} from "react-router-dom"
function App(props) {
  
  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Header/>
        <Nav/>
        <div className="App-wrapper-content">
          <Routes>
          <Route path='/dialogs'       element={<DialogsContainer /> }/>
            <Route path='/dialogs/:id' element={<DialogsContainer />}/>
            <Route path='/profile' element={<ProfileContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
