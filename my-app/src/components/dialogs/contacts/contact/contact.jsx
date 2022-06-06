import clasess from'./contact.module.css';
import { NavLink } from 'react-router-dom';


function Contact (props) {
    return(<div className={clasess.contact}>
        <div className={clasess.circle}></div>
    <NavLink key={props.id}  to={`/dialogs/${props.id}`} className={
        ({isActive})=>isActive ? `${clasess.active}`:''
        } >
        {`${props.name}`}
    </NavLink>
    </div>
    )
}
export default Contact