import React, { useCallback, useState } from 'react'
import CardProduct from './CardProduct'

export default function UseCallBackDemo() {
    const [number,setNumber] = useState(1)
    const [like,setLike] = useState(1)


    const renderLike = () => {
        return 'Bạn đã thả ' + like
    }

    const callBackRenderLike = useCallback(renderLike,[like])
  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button onClick={()=>{
            setNumber(number + 1)
        }}>+</button>
        <hr />
        <h3>{like}</h3>
        <button className='btn btn-primary mr-2' onClick={()=>{
            setLike(like + 1)}}>+</button>
        <button className='btn btn-primary ml-2' onClick={()=>{
            setLike(like -1)}}>-</button>

            <CardProduct renderLike={callBackRenderLike}/>
    </div>
  )
}
