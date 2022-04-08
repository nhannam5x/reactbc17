import React, {useState} from 'react'

export default function BaiTapDoiMauXe() {
  let[imgSrc,setSrc] = useState('./img/products/black-car.jpg');
  const handleChangeColor = (color) =>{
      setSrc(`./img/products/${color}-car.jpg`)
  }
  
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <img className='w-100' src={imgSrc} alt="..." />
            </div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-3'>
                        <button style={{backgroundColor: 'red', color: 'white'}} onClick={()=>{
                            handleChangeColor('red')
                        }}>Red</button>
                    </div>
                    <div className='col-3'>
                        <button style={{backgroundColor: 'black', color: 'white'}} onClick={()=>{
                            handleChangeColor('black')
                        }}>Red</button>
                    </div>
                    <div className='col-3'>
                        <button style={{backgroundColor: '#EEE', color: 'black'}} onClick={()=>{
                            handleChangeColor('steel')
                        }}>Red</button>
                    </div>
                    <div className='col-3'>
                        <button style={{backgroundColor: 'silver', color: 'black'}} onClick={()=>{
                            handleChangeColor('silver')
                        }}>Red</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
