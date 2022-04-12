import React from 'react'


const stateDefault = {
    Component: <div>default content</div>,
    title:'Default title'
}



export const modalReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'OPEN_FORM':{
            state.title = action.title;
            state.Component = action.Component;
            return{...state}
        }
        default : return state
    }
}