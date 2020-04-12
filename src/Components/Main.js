import React from "react"

import Topheader from "./Topheader"
import Content from "./Content"

class Main extends React.Component {

    constructor() {
        super()

    }

    render() {
        return(
            <div className="container">
                <Topheader />
                <Content />
            </div>
        )
    }
}

export default Main