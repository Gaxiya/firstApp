import clasess from'./createMessage.module.css';
import React from 'react';

// import { dialogsUpdateAction,dialogsAddAction } from './../../Redux/actions';

class CreateMessage extends React.Component{

    constructor(props){
        super(props);
        this.props=props
        this.Ref= React.createRef();
        this.addMessage=this.addMessage.bind(this)
        this.update=this.update.bind(this)
    } 
    componentDidMount() {
    }
    update(){
        let text=this.Ref.current.value
        
        this.props.update(text)
    }
    componentWillUnmount() {
    }
    addMessage(){
        this.props.add()
    }
    render(){
        
        return(
        <div className={clasess.createPost}>
            <textarea className={clasess.textarea}  onChange={this.update} ref={this.Ref} value={ this.props.new} name="" id="" ></textarea>
            <button className={clasess.button} onClick={this.addMessage}>  add post
            </button>
        </div>
    )}

}
export default CreateMessage
// onChange={update}