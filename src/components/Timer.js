import React, { useEffect, useState } from 'react'

const Timer = ({setTimeOut, questionNumber}) => {
    const [tim, setTim] = useState(30);

    useEffect(() => {
        if (tim=== 0 ) return setTimeOut(true);
        const interval = setInterval(() => {
          setTim((prevCounter) => prevCounter - 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, [setTimeOut, tim]);


      useEffect(()=>{
            setTim(30);

      },[questionNumber])

  return tim
}

export default Timer;