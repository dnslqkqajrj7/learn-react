import React from 'react'

const Button = () => {
  //logic
const name = '앙맘이';
console.log('😆', name);

const href = 'https://www.naver.com'

  //view
    return (
    <div>
        <div className='button'>
            <button type='button'>클릭하세요</button>
        <a href={href}>링크 이동</a>
        <p>안녕하세요 {name}님!</p>
        </div>
      
    </div>
  )
}

export default Button