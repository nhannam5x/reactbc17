import React, { Component,useState } from "react";
import { useSelector,useDispatch } from "react-redux";

export default function HookRedux(props){
    let [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    })

    let comments = useSelector(state => state.commentReducer.comments);
    let dispatch = useDispatch();

    const postComment = (e) =>{
        e.preventDefault();
        dispatch({type:'postComment', userComment:{...userComment,avatar:`https://i.pravatar.cc/100?u=${userComment.name}`}})
    }

    const handleComment = (event) => {
        let {name,value} = event.target;
        setUserComment({
            ...userComment,
            [name]:value
        })
    }
}