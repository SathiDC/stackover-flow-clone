import React from "react";
import './RightSidebar.css';
import comment from '../../assets/comment-alt-solid.svg';
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'

const Widget = () => {
    return (
        <div className="widget">
            <h4>The overflow blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width="18" />
                    <p>Observability is key to the future of software ( and your DevOps career)</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width="18" />
                    <p> Podcast: 374: How valuable is your screen name?</p>
                </div>
            </div>
            <h4>Featured on meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="comment" width="18" />
                    <p>Observability is key to the future of software ( and your DevOps career)</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="comment" width="18" />
                    <p> Podcast: 374: How valuable is your screen name?</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blackLogo} alt="comment" width="18" />
                    <p> Podcast: 374: How valuable is your screen name?</p>
                </div>
            </div>
            <h4>Hot meta posts</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <p>35</p>
                    <p>Observability is key to the future of software ( and your DevOps career)</p>
                </div>
                <div className="right-sidebar-div-2">
                    <p>28</p>
                    <p> Podcast: 374: How valuable is your screen name?</p>
                </div>
                <div className="right-sidebar-div-2">
                    <p>24</p>
                    <p> Podcast: 374: How valuable is your screen name?</p>
                </div>
            </div>
        </div>
    )
}

export default Widget 