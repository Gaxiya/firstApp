import { NavLink } from 'react-router-dom';
import clasess from'./Nav.module.css';
function Nav(){
    return( 
    <nav className={clasess.nav}>
        <div className={`${clasess.item}`}>
          <NavLink  to='/profile' className={({ isActive })=> isActive ? `${clasess.active}`:''}>Profile</NavLink> 
        </div>
        <div className={clasess.item}>
          <NavLink to='/dialogs' className={({ isActive })=> isActive ? `${clasess.active}`:'' }>Messeges</NavLink>
        </div>
        <div className={clasess.item}>
          <NavLink to='#'>News</NavLink>
        </div>
        <div className={clasess.item}>
          <NavLink to='#'>Music</NavLink>
        </div>
        <div className={`${clasess.item} ${clasess.settings}`}>
          <NavLink to='#'>Settings</NavLink>
        </div>
        <div className={clasess.item}>
          <NavLink to='#'>Friends</NavLink>
        </div>
      </nav>)
  }
export default Nav