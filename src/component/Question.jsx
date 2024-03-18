import React, { useEffect, useState } from 'react'

function Question() {
     const [QuestionData,setQuestionData]=useState([])
     const[indexValue,setindexValue]=useState(0)
     const[score,setscore]=useState(0)
     

    

    // function for fetching the data from api only once
     useEffect(()=>{
        async function fetchQuestion(){
            try{
            const responce=await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
            const data=await responce.json();
            // console.log(data);
            setQuestionData(data.results)

         }
         catch(error){
            console.error("Error fetching Question:",error);

         }

        }

        fetchQuestion()
     },[])
      
    //  function for skip question after press skip button
     const skipQustion =(checker)=>{
        if(checker){
            questionHandle()
        }
      }
     
     if(!QuestionData || QuestionData.length===0){
        return(
            <div>Loading...</div>
        )
     }



    //  function for handling question
      const questionHandle=()=>{
        if(indexValue < QuestionData.length){
            setindexValue(indexValue+1)
        }
        else{
            return(
                <div>
                    <h>Your Score</h>
                    <p>Score:{score}</p>
                </div>
                
            )
        }
    }
    //  variable for current question
     const currentQuestion=QuestionData[indexValue];

  return (
    <>   
        {QuestionData.length > 0 ?
        
            <div className="w-[60%] h-[70%] bg-yellow-100 flex flex-col rounded-lg">
            <h2>Question: {indexValue + 1}</h2>
            <p>{currentQuestion.question}</p>

            {QuestionData && currentQuestion.incorrect_answers.map((item,index)=>console.log(item)
         )}


            <div>
                <button onClick={skipQustion(true)}>Skip</button>
            </div>
            
        </div>
        :<div>No Question</div>
        } 
        
         
         

         
    </>
  )
}

export default Question