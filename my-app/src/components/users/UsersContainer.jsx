import { connect } from 'react-redux';
import Users from './Users';
import { userFollowUnfollowAction,createAnotherUsersAction } from './../../Redux/usersReducers';

let mapStateToProps=(state)=>{
    return{ 
        users:state.users
}
}
n
let mapDispatchToProps=(dispatch)=>{
    return{ 
        followUnfollow:(id)=>{
            dispatch(userFollowUnfollowAction(id))
        },
        createAnotherUsers:()=>{
            dispatch(createAnotherUsersAction())
        }
}
}

const UsersContainer= connect(mapStateToProps,mapDispatchToProps)(Users)


export default UsersContainer