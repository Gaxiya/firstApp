import clasess from'./dialog.module.css';


function Dialog (props) {
    return(
    <div className={clasess.Dialog}>
        <div className={clasess.ava} key={props.index|props.id}>
            <span>Ava</span>
            {`${props.name}`}
        </div>
        <div className={clasess.text} >
            <p>{`${props.text}`}</p> 
        </div>
    </div>)
}
export default Dialog