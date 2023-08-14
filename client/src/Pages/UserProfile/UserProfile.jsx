import React , {useState}from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import Avatar from '../../Components/Avatar/Avatar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import EditProfileForm from './EditProfileForm'
import ProfileForm from './ProfileForm'
import moment from 'moment'
import './UserProfile.css'

const UserProfile = () => {
    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
 const [Switch,setSwitch ] =useState(false)
   
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <section>
                    <div className="user-details-container">
                        <div className="user-details">
                            <Avatar backgroundColor='purple' color="white" fontSize='50px' px="40px" py="30px" border-radius= "15px" >
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className='user-profile'>
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon={faBirthdayCake} /> Member for {moment(currentProfile?.joinedOn).fromNow()}</p>
                            </div>
                        </div>
                        {
                            currentUser?.result._id === id && (
                                <button className="edit-profile-btn"  onClick={() => setSwitch(true)}><FontAwesomeIcon icon={faPen} />Edit profile </button>
                            )
                        }
                    </div>
                   <>
                   {
                        Switch ? (
                            <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                        ) : (
                            <ProfileForm currentProfile={currentProfile}/>
                        )

                    }
                </>
                </section>
            </div>

        </div>
    )
}

export default UserProfile