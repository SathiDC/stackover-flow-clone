import React from 'react'
import '../../App.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import TagList from './TagList'
const Tags = () => {
    const tagList = [{
        id: '1',
        tagName: 'Javascript',
        description: 'A tag is keyword or label that categories your question with other similar question',
    }, {
        id: '2',
        tagName: 'React js',
        description: 'A tag is keyword or label that categories your question with other similar question',
    }, {
        id: '3',
        tagName: 'Node js',
        description: 'A tag is keyword or label that categories your question with other similar question',
    }]

    return (
        <div className="home-container-1">

            <LeftSidebar />
            <div className='home-container-2'>
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is keyword or label that categories your question with other similar question.</p>
                <p className='tags-p'>Using right tags make it easier to others to find and answer your question.</p>
                <div className='tags-list-container'>
                    {
                        tagList.map((tag) => (
                            <TagList tag={tag} key={tagList.id} />
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Tags