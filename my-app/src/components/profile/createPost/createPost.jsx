// import clasess from'./createPost.module.css';
import React from 'react';
import { profileAddAction,profileUpdateAction } from './../../../Redux/actions';

class CreatePost extends React.Component{

    constructor(props){
        super(props);
        this.props=props
        this.myRef= React.createRef();
        this.addpost=this.addpost.bind(this)
        this.update=this.update.bind(this)
    } 
    componentDidMount() {
    }
    update(){
        let text=this.myRef.current.value
        this.props.dispatch(profileUpdateAction(text))
    }
    componentWillUnmount() {
    }
    addpost(){
        this.props.dispatch(profileAddAction())
    }
    render(){
        
        return(
        <div>
            <textarea  onChange={this.update} ref={this.myRef} value={this.props.new} name="" id="" ></textarea>
            <button onClick={this.addpost}>  add post
            </button>
        </div>
    )}

}
export default CreatePost
// onChange={update}