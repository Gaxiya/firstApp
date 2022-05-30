import { createReducer } from '@reduxjs/toolkit';
import { profileUpdateAction,profileAddAction } from './actions';
let initialState={
  posts:[
    {text:`Post`,id:1},
    {text:`Post`,id:2},
    {text:`Post`,id:3},
    {text:`Post`,id:4}
    ],
    newText:''
}
const profileReducer = createReducer(initialState,(builder)=>{
  builder
  .addCase(profileUpdateAction,(state,action)=>{
    state.newText=action.payload.text
    return state
    
  })
  .addCase(profileAddAction,(state,action)=>{
      
    let text=state.newText
    let id =1+state.posts[state.posts.length-1].id
    state.newText=''
    state.posts.push({text,id:id})
    
      return state
  })
  .addDefaultCase((state, action) => {return state})
}
) 
  // const  profileReducer=(state=initialState,action)=>{
  //     let newstate=state
  //     switch(action.type){
  //       case addpost:{
  //       let text=state.newText
  //       let id =1+state.posts[state.posts.length-1].id
  //       newstate.newText=''
  //       newstate.posts.push({text,id:id})
  //       return newstate
  //     }
  //     case update:{
  //         newstate.newText=action.newtext
  //         return newstate
  //       }
  //     default :{
  //       return state;
  //     }  
  //     }
  // }
  export default profileReducer;