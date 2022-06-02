
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';


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
                            },

    users:[
        {id:1,name:'Dima',  status:'I\'m boss',followed:true,location:{city:'Minsk',country:'Belarus'},      ava:'../images/zeroAva.png'},
        {id:2,name:'Sasha',  status:'I\'m boss too',followed:true,location:{city:'Kiev',country:'Ukraine'},  ava:'../images/zeroAva.png'},
        {id:3,name:'Sveta',  status:'I\'m boss too',followed:true,location:{city:'Moscow',country:'Russia'}, ava:'../images/zeroAva.png'},
        {id:4,name:'Andrey', status:'I\'m boss too',followed:true,location:{city:'Minsk',country:'Belarus'}, ava:'../images/zeroAva.png'},
    ]
    }
    
let store=configureStore({reducer:rootReducer,preloadedState,});


export default store