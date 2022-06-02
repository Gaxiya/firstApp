import clasess from'./Post.module.css';
function Post (props) {
    
    return(<div  className={`${clasess.item}`}>{`${props.text}`}</div>
    )
}
export default Post