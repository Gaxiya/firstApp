import Contacts from './contacts/contacts';
import Dialog from './dialog/dialog';
import clasess from'./dialogs.module.css';
import React from 'react';
import CreateMessage from './createMessage';




class Dialogs extends React.Component{
    constructor(props){
    super(props);
    this.props=props
} 


render(){

    return(
        
    <div className={`${ clasess.Dialogs}`}>
    <div className={clasess.Header}>Dialogs</div>
    
    <div className= {clasess.Contacts}>
        <Contacts className= {clasess.Contacts} contacts={(this.props.contacts)} />
    </div>
    <div className= {clasess.Messages}> 
    <div className= {`${clasess.Messages} ${clasess.CreateMessage}`} >
            <CreateMessage props={this.props} key={`render1`}/>
        </div>
    {this.props.dialog.map((cont,index)=>{
        return <Dialog index={index} key={`${cont.id}+ ${Math.random()} `} name={`${cont.name}`} text={`${cont.text}`}/>
        })}
        
    </div>
</div>

)}
}
export default Dialogs