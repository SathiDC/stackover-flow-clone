import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import upVote from '../../assets/sort-up.svg'
import downVote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../Components/Avatar/Avatar'
import DisplayAnswer from "./DisplayAnswer";
import moment from 'moment'
import { postAnswer } from '../../actions/question.js'
import copy from 'copy-to-clipboard'
import { deleteQuestion , voteQuestion } from "../../actions/question.js";

const QuestionDetails = () => {
    const { id } = useParams();
    const [answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const QuestionsList = useSelector(state => state.questionsReducer)
    const User = useSelector(state => state.currentUserReducer)
    const location = useLocation()
    const url = 'http://localhost:3000'
    console.log(location)

    const handlepostans = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert('sign up or login')
            Navigate('/Auth')
        }
        else {
            if (answer === '') {
                alert('enter the answer')
            } else {
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: answer, userPosted: User.result.name, userId: User.result._id  }))
            }
        }
    }
    const handleshare = () => {
        copy(url + location.pathname)
        alert(url + location.pathname)
    }
    
    const handledelete = ()=>{
  dispatch(deleteQuestion(id,Navigate))
    }

    const handleUpVote = () =>{
        dispatch(voteQuestion(id,'upVote',User.result._id))
    }
    const handledownVote = () =>{
        dispatch(voteQuestion(id,'downVote',User.result._id))
    }

    return (
        <div className="question-details-page">
            {
                QuestionsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        {

                            QuestionsList.data.filter(question => question._id === id).map(question => (
                                <div key={question._id}>
                                    <section className="question-details-container">
                                        <h1>{question.questionTitle}</h1>
                                        <div className="question-details-container-2">
                                            <div className="question-votes">
                                                <img src={upVote} alt="upvote" className="votes-icon" width='18' onClick={handleUpVote}/>
                                                <p>{question.upVote.length - question.downVote.length}</p>
                                                <img src={downVote} alt="downvote" className="votes-icon" width='18' onClick={handledownVote}/>
                                            </div>
                                            <div style={{ width: '100%' }}>
                                                <p className="question-body">{question.questionBody}</p>
                                            </div>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag) => (
                                                        <p key={tag}>{tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-actions-user">
                                                <div className="question-btns">
                                                    <button type="button" onClick={handleshare}>Share</button>
                                                    {
                                                        User?.result?._id === question?.userId && (
                                                            <button type="button" onClick={handledelete}>Delete</button>
                                                        )
                                                    }
                                                </div>
                                                <div>
                                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                                    <Link to={`/Users/${question.userId}`} className="user-link" style={{ color: "#0068d8" }}>
                                                        <Avatar backgroundColor='orange' px="5px" py="8px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>{question.userPosted}</div>
                                                    </Link>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h1>{question.noOfAnswers} answers</h1>
                                                <DisplayAnswer key={question._id} question={question} handleshare={handleshare}  ></DisplayAnswer>
                                            </section>
                                        )}
                                    <section className="post-ans-container">
                                        <h3>Your Answer</h3>
                                        <form onSubmit={(e) => { handlepostans(e, question.answer.length) }}>
                                            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea><br />
                                            <input type="submit" value="Post your answer" className="post-ans-btn" />
                                        </form>
                                        <p>
                                            Browse other question tags
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to="/Tag" key={tag} className="ans-tags"> {tag} </Link>
                                                ))
                                            } or <Link to="/AskQuestion" style={{ textDecoration: 'none', color: '#099dff' }}> ask your own question</Link>
                                        </p>
                                    </section>
                                </div>
                            ))

                        }
                    </>
            }
        </div>
    )
}


export default QuestionDetails