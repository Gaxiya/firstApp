import clasess from'./createPost.module.css';
import React from 'react';

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
        this.props.update(text)
    }
    componentWillUnmount() {
    }
    addpost(){
        this.props.add()
    }
    render(){
        
        return(
        <div className={clasess.createPost}>
            <textarea  className={clasess.textarea} onChange={this.update} ref={this.myRef} value={this.props.new} name="" id="" ></textarea>
            <button className={clasess.button} onClick={this.addpost}>  add post
            </button>
        </div>
    )}

}
export default CreatePost
// onChange={update}