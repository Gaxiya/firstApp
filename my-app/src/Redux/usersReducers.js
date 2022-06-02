// import { createReducer,createAction } from '@reduxjs/toolkit';

// const followType='Follow/Unfollow'
// const createAnotherUsers='Create/AnotherUsers'
// export const userFollowUnfollowAction= createAction(followType, (id) =>{
//     return {
//       payload: {id}
//     }
//   })
// export const createAnotherUsersAction= createAction(createAnotherUsers)
// let initialState=[
//     {id:1,name:'Dima',  status:'I\'m boss',followed:true,location:{city:'Minsk',country:'Belarus'},      ava:'../images/zeroAva.png'},
//     {id:2,name:'Sasha',  status:'I\'m boss too',followed:true,location:{city:'Kiev',country:'Ukraine'},  ava:'../images/zeroAva.png'},
//     {id:3,name:'Sveta',  status:'I\'m boss too',followed:true,location:{city:'Moscow',country:'Russia'}, ava:'../images/zeroAva.png'},
//     {id:4,name:'Andrey', status:'I\'m boss too',followed:true,location:{city:'Minsk',country:'Belarus'}, ava:'../images/zeroAva.png'},
// ]
// const usersReducer = createReducer(initialState,(builder)=>{
//         builder
//         .addCase(userFollowUnfollowAction,(state,action)=>{
//             state.forEach((element)=>{element.id==action.payload.id?element.followed=!element.followed:''})
//             return state
//         })
//         .addCase(createAnotherUsersAction,(state,action)=>{
            
//             for(let i=1;i<4;i++){
//                 let anotherUsers={id:i+state[state.length-1].id,name:'AnotherUser',  status:'I\'m another user ',followed:true,location:{city:'Kiev',country:'Ukraine'},  ava:'../images/zeroAva.png'}
//                 state.push(anotherUsers) }
//                 return state;
//         })
//         .addDefaultCase((state, action) => {return state})
//     }
// ) 
// export default usersReducer;