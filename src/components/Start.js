import React, {useRef} from 'react'

const Start = ({userName, setUserName}) => {
    const inputRef = useRef();

    const handleClick = ()=>{
        inputRef.current.value && setUserName(inputRef.current.value);
    }

  return (
    <div className='start' >
            <input type="text" className="username" placeholder='Please enter Your Username'  ref={inputRef} />
            <button className="userBtn"  onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start