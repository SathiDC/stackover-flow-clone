import React from "react"
import Questions from "./Questions"

const QuestionList = ({QuestionsList})=>{
    return(
        <div>
{
    QuestionsList.map((question)=>(
        <Questions question={question} key={question._id} />
    ))
}
        </div>
    )
}

export default QuestionList