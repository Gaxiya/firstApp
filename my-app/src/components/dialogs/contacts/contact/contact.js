import clasess from'./contact.module.css';
import { NavLink } from 'react-router-dom';


function Contact (props) {
    return(
    <NavLink key={props.id}  to={`/dialogs/${props.id}`} className={
        ({isActive})=>isActive ? `${clasess.active}`:''
        } >
        {`${props.name}`}
    </NavLink>)
}
export default Contact