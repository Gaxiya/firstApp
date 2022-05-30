import town from '../../images/town.jpg';
import pes from '../../images/pes.jpg';
import clasess from'./Profile.module.css';
import MyPosts from './Myposts/MyPosts';
import CreatePost from './createPost/createPost';
function Profile (props) {
    
    return(
    <div className={clasess.content}>
        <img src={town} className={clasess.content__town}  alt="town" />
        <img src={pes} className={clasess.content__pes}  alt="pes" />
        <CreatePost dispatch={props.dispatch} new={props.new} />
        <MyPosts post={props.posts}/>
    </div>)
}
export default Profile