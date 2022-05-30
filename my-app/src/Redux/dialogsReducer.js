import { createReducer } from '@reduxjs/toolkit';
import { dialogsAddAction, dialogsUpdateAction } from './actions';
let initialState= {message:[
    {text:`I am a normal popover and I can have text and everything`,name:`Dima`},
    {text:`I am a normal popover and I can have text and everything`,name:`Me`},
    {text:`I am a normal popover and I can have text and everything`,name:`Dima`},
    {text:`'I am a normal popover and I can have text and everything`,name:`Me`}
  ],
  newMessage:'',
  contacts:[
    {id:1,name:`Dima`},
    {id:2,name:`Andrey`},
    {id:3,name:`Sasha`},
    {id:4,name:`Sveta`},
    {id:5,name:`Viktor`},
    {id:6,name:`Another list`},
    {id:7,name:`And another list`}]
}

const dialogsReducer = createReducer(initialState,(builder)=>{
        builder
        .addCase(dialogsUpdateAction,(state,action)=>{
            
            state.newMessage=action.payload.text
            return state
        })
        .addCase(dialogsAddAction,(state,action)=>{
            
            let text=state.newMessage
            state.newMessage=''
            state.message.push({text,name:`Me`})
            return state
        })
        .addDefaultCase((state, action) => {return state})
    }
) 
// const dialogsReducer=(state=initialState,action)=>{
//     let newstate={...state}
//     switch(action.type){
//     case updateNewMessage :{
//         newstate.newMessage=action.newtext
        
//         return newstate
//     }
//     case addNewMessage :{
//         let text=state.newMessage
//         newstate.newMessage=''
//         newstate.message.push({text,name:`Me`})
//         return newstate
//     }
//     default:{
//         return state;
//     }}
    
// }
export default dialogsReducer;