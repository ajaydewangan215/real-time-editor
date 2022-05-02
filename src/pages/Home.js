import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [roomId, setRoomId] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  const createNewRoom = (e) => {
    e.preventDefault()
    const id = uuidV4();
    setRoomId(id)
    toast.success('Created a new room');
  }

  const joinRoom = () => {
    if(!roomId || !username) {
      toast.error('ROOM ID & username is required')
      return false;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        username,
      }
    })
  }

  const handlerInputEnter = (e) => {
    if(e.code === 'Enter') {
      joinRoom();
    }
  }

  return (
    <div className='homePageWrapper'>
      <div className="formWrapper">
        <img className='homePageLogo' src="/logo192.png" alt="logo" />
        <h4 className="manLabel">Pase invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className='inputBox' placeholder='ROOM ID' value={roomId} onChange={(e) => setRoomId(e.target.value)} onKeyUp={handlerInputEnter}/>
          <input type="text" className='inputBox' placeholder='USERNAME' value={username} onChange={(e) => setUsername(e.target.value)} onKeyUp={handlerInputEnter}/>
          <button className="btn joinBtn" onClick={joinRoom}>Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a  href={void(0)} className='createNewBtn' onClick={createNewRoom}>new room</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home