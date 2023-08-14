import React from "react";
import { Routes, Route } from 'react-router-dom'
import Auth from './Pages/Auth/Auth.jsx'
import Home from './Pages/Home/Home.jsx'
import Questions from "./Pages/Questions/Questions.jsx";
import AskQuestion from "./Pages/AskQuestion/AskQuestion.jsx";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion.jsx";
import Tags from "./Pages/Tags/Tags.jsx"
import Users from "./Pages/Users/Users.jsx"
import UserProfile from "./Pages/UserProfile/UserProfile.jsx"

 const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Auth" element={<Auth />} ></Route>
            <Route path="/Questions" element={<Questions />} ></Route>
            <Route path="/AskQuestion" element={<AskQuestion />}></Route>
            <Route path="/Questions/:id" element={<DisplayQuestion />}></Route>
            <Route path="/Tags" element={<Tags />}></Route>
            <Route path="/Users" element={<Users />}></Route>
            <Route path="/Users/:id" element={<UserProfile />}></Route>
        </Routes>
    )
}

export default AllRoutes