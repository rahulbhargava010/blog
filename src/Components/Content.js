import React, { Component } from 'react'

import Card from "./Card"
import Sidebar from "./Sidebar"
import Data from "../MOCK_DATA.json"

export default class Content extends Component {
    render() {
        // console.log(Data)
        const cardPreview = Data.map((item) => <Card id = {item.id} para={item.para} name={item.first_name} ques={item.question} ans={item.ans} random={item.random} logo={item.logo} />)
        return (
            <div className="row">
                {cardPreview}
                <Sidebar/>
            </div>
        )
    }
}
