import town from '../../images/town.jpg';
import pes from '../../images/pes.jpg';

function Users (props) {
    
    return(
    <div className={clasess.content}>
       {props.post.map((post)=>{
        return <Post key={post.id.toString()} id={`${post.id}`} text={`${post.id} ${post.text}` }/>
    })}
    </div>)
}
export default Users