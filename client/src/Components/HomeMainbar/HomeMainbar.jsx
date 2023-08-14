import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import './HomeMainbar.css'
import { useSelector } from 'react-redux'
import QuestionList from "./QuestionList"
  
const HomeMainbar = () => {
    const location = useLocation()
    const user = 123;
    const navigate = useNavigate()


    const QuestionsList = useSelector(state => state.questionsReducer)
    console.log(QuestionsList)

    // var QuestionsList = [{
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function ?",
    //     questionBody: 'It meant to be',
    //     questionTags: ["java", "node ", "react", "firebase"],
    //     userPosted: "sathis",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswerwed: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }, {
    //     _id: '2',
    //     upVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 4,
    //     questionTitle: "What is a function ?",
    //     questionBody: 'It meant to be It meant to be  ',
    //     questionTags: ["java", "node", "react", "firebase"],
    //     userPosted: "sathis",
    //     userId: 2,
    //     askedOn: "feb 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswerwed: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },
    // {
    //     _id: '3',
    //     upVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 1,
    //     questionTitle: "What is a function ?",
    //     questionBody: 'It meant to be It meant to be It meant to be It meant to be It meant to be It meant to beIt meant to be',
    //     questionTags: ["java", "node", "react", "firebase"],
    //     userPosted: "sathis",
    //     askedOn: "mar 1",
    //     userId: 3,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswerwed: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }
    // ]

    const checkAuth = () => {
        if (user === null) {
            alert('Sign up or login to ask question')
            navigate('/Auth');
        } else {
            navigate('/Askquestion');
        }
    }

    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === '/' ? <h1>Top questions</h1> : <h1>All questions</h1>

                }
                <button onClick={checkAuth} className="ask-btn">Ask question</button>
            </div>
            <div>
                {
                    QuestionsList.data === null ?
                        <h1>Loading...</h1> :
                        <>
                            <p>{QuestionsList.data.length} questions</p>
                            <QuestionList QuestionsList = {QuestionsList.data} />
                        </>
                }

            </div>
        </div>
    )
}

export default HomeMainbar