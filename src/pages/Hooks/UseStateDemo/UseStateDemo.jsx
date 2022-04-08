import React,{useState} from 'react'
import BaiTapDoiMauXe from './BaiTapDoiMauXe';

export default function UseStateDemo(props) {
// useState là hook của react tạo ra khi gọi hàm này trả về 2 giá trị trong mang[state,setState] = useState('default value');
let [state,setState] = useState({
    number: 1
})

let [number,setNumber] = useState(1);
let [font,setFont] = useState(18)
let [img,setImg] = useState('https://i.pravatar.cc?u=1')


  return (
    <div className='container'>
        <h3 className=''>Number: {number}</h3>
        <button className='btn btn-primary mr-2' onClick={()=>{
            setNumber(number+1)}}>+</button>
        <button className='btn btn-primary ml-2' onClick={()=>{
            setNumber(number-1)}}>-</button>
            <hr />
            <h3>Bài tập tăng giảm font chữ</h3>
            <p style={{fontSize: font}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui perferendis quisquam itaque repudiandae maiores tenetur pariatur blanditiis saepe reprehenderit autem perspiciatis quos dolore, omnis totam aut! Natus, voluptatem corrupti.</p>
            <button className='btn btn-success' onClick={()=>{
                setFont(font+5)
            }}>+</button>
            <button className='btn btn-success' onClick={()=>{
                setFont(font-5)
            }}>-</button>
            <hr />
            <h3>Bài tập randomanhr</h3>
            <div className='card'>
                <img src={img} alt="..." className='w-100'/>
                <div className='card-body w-25'>
                    <button className='btn btn-danger' onClick={()=>{
                        let num = Math.floor(Math.random() * 100);
                        setImg(`https://i.pravatar.cc?u=${num}`)
                    }}>Random</button>
                </div>
            </div>
            <hr />
            <h3>Bài tập đổi màu xe</h3>
            <BaiTapDoiMauXe />
    </div>
  )
}
