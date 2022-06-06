import clase from './Summary.module.css'

function Summary (props) {
    
    return(
    <div className={clase.content}>
        <img src={props.src}  className={`${clase.content__ava}`} alt="ava" />
        <div className={clase.name}>
            {/* {props.myProfileName} */} Dmitry K.
        </div>
        <div className={clase.blockWithSummary}>
            <div>
                {/* {props.dateOfBirth} */} Date of Birth: 2 january
            </div>
            <div>
                {/* {props.city} */} City: Minsk
            </div>
            <div>
                {/* {props.education} */} Education: BSU '11
            </div>
            <div>
                {/* {props.webSite} */} Web Site:" https://it-kamasutra.com"
            </div>
        </div>
    </div>)
}
export default Summary