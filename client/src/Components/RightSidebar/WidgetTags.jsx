import React from "react";
import './RightSidebar.css';
const WidgetTags = () => {
    const tags = ['C', 'Html', 'Css', 'Javacript', 'React', 'express', 'Node js', 'Mongo db', 'Firebase', 'Php', 'Mysql','Python','Kotlin','mern','Angular','Java']

    return (
        <div className="widget-tags">
            <h3>Watched tags</h3>
            <div className="widget-tags-div">
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default WidgetTags