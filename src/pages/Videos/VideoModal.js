import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";
import ReactPlayer from 'react-player';

const VideoModal = (props) => {
    const {bg, src, width, height} = props
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(!modal)
    }

    const style = {
        container: {
            background: bg,
            borderRadius: '2rem'
        },
        modal: {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            zIndex: '10',
            background: 'rgba(0, 0, 0, 0.75)'
        },
        align: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        },
        play: {
            color: '#00c3ff',
            fontSize: '20%'
        },
        close: {
            color: '#FFFFFF',
            width: '50px'
        }
    }

    return (
        <div className='w-100'>
            <div className='d-flex align-items-center text-center w-100' style={style.container}>
                <FaPlayCircle onClick={openModal} style={style.play}/>
            </div>
            {modal ? (
                <div style={style.modal}>
                    <div style={style.align}>
                        <button onClick={openModal} style={style.close}>
                            <IoCloseOutline />
                        </button>
                        <ReactPlayer url={src}/>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default VideoModal