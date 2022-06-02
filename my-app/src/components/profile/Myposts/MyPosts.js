import clasess from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts= (props) =>{
   
    return(<div className={`${clasess.content}`}>
    {props.post.map((post)=>{
        return <Post key={post.id.toString()} id={`${post.id}`} text={`${post.id} ${post.text}` }/>
    })}
    </div>)
}
export default MyPosts