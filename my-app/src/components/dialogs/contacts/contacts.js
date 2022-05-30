import Contact from './contact/contact';
import clasess from'./contacts.module.css';


function Contacts (props) {
    return(
    <div className={clasess.contact}>
    {props.contacts.map((cont)=>{
        return <Contact key={cont.id.toString()} id={`${cont.id}`} name={`${cont.name}` }/>
    })}
    </div>)
}
export default Contacts