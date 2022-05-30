import { createAction } from "@reduxjs/toolkit";
const updateNewMessage='UPDATE/NewMessage'
const addNewMessage='ADD/NewMessage'
const addpost="ADD-POST";
const update='UPDATE-POST'

export const dialogsUpdateAction= createAction(updateNewMessage, (text) =>{
    return {
      payload: {text,}
    }
  })
export const dialogsAddAction= createAction(addNewMessage)
export const profileUpdateAction= createAction(update, (text) =>{
    return {
      payload: {text}
    }
  })
export const profileAddAction= createAction(addpost)
