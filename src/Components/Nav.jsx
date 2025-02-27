import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color-dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">WORKOUT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Workouts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Programs</a>
                        </li>
                        <li className="nav-item ms-2">
                            <a className="nav-link membership" href="/">Membership</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
