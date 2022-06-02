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
        <CreatePost add={props.add} update={props.update} new={props.profile.newText} />
        <MyPosts post={props.profile.posts}/>
    </div>)
}
export default Profile