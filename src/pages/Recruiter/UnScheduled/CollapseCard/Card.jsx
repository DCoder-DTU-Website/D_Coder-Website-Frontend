import React from 'react'

const Card = () => {
    return (
        <div className="card-main">
            <div className="name-info">
                <div className="pic"></div>
                <div className="info">
                    <div className="name">Vaibhav Gupta</div>
                    <div className="roll">2K20/EE/294</div>
                </div>
            </div>
            <div className="extra-info">
                <div className="contact">
                    <h2 className="email">guptavaibhav432@gmail.com</h2>
                    <h2 className="phone">8826271548</h2>
                    <h2 className="dob">DOB: 21.11.2002</h2>
                </div>
                <div className="stack">
                    <h2 className="branch">Electrical Engineering</h2>
                    <h2 className="stack-head">TeckStack:</h2>
                    <h2 className="tect-stack">C++, React</h2>
                </div>
                <div className="lang">
                    <h2 className="lang-head">Coding Language</h2>
                    <h2 className="code-lang">C++, Python</h2>
                </div>
            </div>
        </div>
    )
}

export default Card
