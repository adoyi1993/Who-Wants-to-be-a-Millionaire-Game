import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import start from "../components/assets/start.mp3";

const Trivia = ({data, timeOut, setTimeOut, questionNumber, setQuestionNumber}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(start);

useEffect(()=>{
letsPlay();

}, [letsPlay]) 


  useEffect(()=>{
    setQuestion(data[questionNumber -  1]);
    

  }, [data, questionNumber])

  const delay = (duration, callback)=>{
      setTimeout(()=>{
          callback();
      }, duration);
  }


const handleClick =(a) =>{
  setSelectedAnswer(a);
  setClassName("answer active");
  delay(3000, ()=>setClassName(a.correct ? "answer correct": "answer wrong"));

  delay(5000, ()=>{
    if (a.correct){
        letsPlay();
        delay(1000, ()=>{  
        setQuestionNumber((prev)=>prev + 1);
        setSelectedAnswer(null)})
    } else{
      delay(1000, ()=>{
        setTimeOut(true);
      });
     
    }
  })


}



  return (
    <div className='trivia' >
        <div className="question"> {question?.question} </div>
       <div className="answers">
            {question?.answers.map((a)=>(
                <div className={selectedAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>

            ))}
            
            
            
        </div> 
    </div>
  )
}

export default Trivia