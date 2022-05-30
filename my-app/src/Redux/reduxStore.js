
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { dialogsUpdateAction } from './actions';

const preloadedState={
dialogsPage:{
        message:[
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
                        {id:7,name:`And another list`}]},

profilePage:{
    posts:[
        {text:`Post`,id:1},
        {text:`Post`,id:2},
        {text:`Post`,id:3},
        {text:`Post`,id:4}
        ],
        newText:''
                            }
    }
    
let store=configureStore({reducer:rootReducer,preloadedState});


export default store