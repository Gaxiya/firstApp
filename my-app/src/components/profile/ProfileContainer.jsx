import { connect } from 'react-redux';
import Profile from './Profile';
import { profileUpdateAction,profileAddAction } from './../../Redux/actions';

let mapStateToProps=(state)=>{
    return{ 
        profile:state.profilePage
}
}

let mapDispatchToProps=(dispatch)=>{
    return{ 
        update:(text)=>{
            dispatch(profileUpdateAction(text))
        },
        add:()=>{
            dispatch(profileAddAction())
        }
}
}

const ProfileContainer= connect(mapStateToProps,mapDispatchToProps)(Profile)


export default ProfileContainer