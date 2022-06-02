import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { dialogsUpdateAction,dialogsAddAction } from './../../Redux/actions';

let mapStateToProps=(state)=>{
    return{ 
        dialog:state.dialogsPage
}
}

let mapDispatchToProps=(dispatch)=>{
    return{ 
        update:(text)=>{
            dispatch(dialogsUpdateAction(text))
        },
        add:()=>{
            dispatch(dialogsAddAction())
        }
}
}

const DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer