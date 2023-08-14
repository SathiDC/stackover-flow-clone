import React from "react";
import QuestionDetails from "./QuestionDetails";
import moment from 'moment'
import { Link,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../Components/Avatar/Avatar";
import {deleteAnswer} from '../../actions/question'
 
const DisplayAnswer = ({ question, handleshare  }) => {
   const {id} =useParams();
   const User = useSelector(state => state.currentUserReducer)
   const dispatch =useDispatch()

   const handledelete = (answerId,noOfAnswers) =>{
    dispatch(deleteAnswer(id,answerId,noOfAnswers - 1))
   }
   return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type="button" onClick={handleshare}>Share</button>
                                {
                                    User?.result?._id === ans?.userId && (
                                        <button type="button" onClick={()=>handledelete(ans._id,question.noOfAnswers)}>Delete</button>
                                    )
                                }
                            </div>
                            <div>
                                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/User/${question.userId}`} className="user-link" style={{ color: "#0068d8" }}>
                                    <Avatar backgroundColor='green' px="5px" py="8px" >{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>{ans.userAnswered}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer