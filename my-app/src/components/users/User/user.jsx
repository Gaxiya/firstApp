function User (props) {
    
    return(
    <div> 
        <div className="Follow">
            <img src={props.ava} alt="Ava" />
            <button>{props}</button>
        </div>
        <div className="Who">
            <p>`${props.name} ${props.status} ${props.location.city} ${props.location.country}`</p>
        </div>
    </div>
    )
}
export default User