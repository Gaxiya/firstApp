import Header from './components/Header/Header'
import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import {BrowserRouter,Route, Routes} from "react-router-dom"
function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Header/>
        <Nav/>
        <div className="App-wrapper-content">
          <Routes>
          <Route path='/dialogs'       element={<Dialogs dispatch={props.dispatch} contacts={props.state.dialogsPage.contacts} dialog={props.state.dialogsPage.message} new={props.state.dialogsPage.newMessage}/> }/>
            <Route path='/dialogs/:id' element={<Dialogs dispatch={props.dispatch} contacts={props.state.dialogsPage.contacts} dialog={props.state.dialogsPage.message} new={props.state.dialogsPage.newMessage}/>}/>
            <Route path='/profile' element={<Profile dispatch={props.dispatch} new={props.state.profilePage.newText} posts={props.state.profilePage.posts}  />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
