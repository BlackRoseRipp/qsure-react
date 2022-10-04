import React from 'react';
import ReactPlayer from 'react-player';
import './Videos.css';

const Videos = () => {
    return (
        <div>
            <div className='videos-banner'>
                <h1 className='text-white heading text-center fw-bold'>Videos</h1>
            </div>
            <div className='white-container'>
                <div className='container'>
                    <div className='row w-100 mx-0 g-4'>
                        <div className='col-lg-6 d-lfex justify-content-center'>
                            <ReactPlayer url='https://www.youtube.com/watch?v=urE-09RcpNM' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos