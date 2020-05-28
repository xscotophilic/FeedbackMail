import React from 'react';

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h4>FeedbackMail!</h4>
            Collect feedback from your users.
            <div style={{ marginTop: '20px' }}>
                <video width="100%" controls>
                    <source src="/videos/tutorial.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Landing;