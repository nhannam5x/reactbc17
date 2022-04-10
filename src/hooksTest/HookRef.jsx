import React, {useRef} from 'react';

export default function HookRef(props){
    const inputUserName = useRef(null);
    const inputPassword = useRef(null);

    let handleSubmit = () =>{
        console.log(inputUserName.current.name, inputUserName.current.value);
        console.log(inputPassword.current.name, inputPassword.current.value);
    }
    return(
        <div className='container'>
            <h3>Login</h3>
            <div className='form-group'>
                <p>UserName</p>
                <input ref={inputUserName} className='form-control' name='UserName'/>
            </div>
            <div className='form-group'>
                <p>Password</p>
                <input ref={inputPassword} className='form-control' name='passWord'/>
            </div>
            <div className='form-group'>
                <button onClick={handleSubmit} type='button' className='btn btn-success'>Login</button>
            </div>
        </div>
    )
}
