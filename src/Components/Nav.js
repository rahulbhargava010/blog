import React from "react"

class Nav extends React.Component {

    constructor() {
        super()

    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">JOY</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <navlink className="nav-link" to="/">Home</navlink>
                                    {/* <a className="nav-link" href="#">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    <navlink className="nav-link" to="/About">About</navlink>
                                    {/* <a className="nav-link" href="#">About</a> */}
                                </li>
                                <li className="nav-item">
                                    <navlink className="nav-link" to="/Wishme">Wish Me</navlink>
                                    {/* <a className="nav-link" href="#">Wish Me</a> */}
                                </li>
                            </ul>
                            <span className="navbar-text">
                                Contact Us
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav