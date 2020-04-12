import React, { Component } from 'react'

class Card extends Component {
    render() {
        const {id, name, ques, ans, random, para, logo} = this.props
        return (<div className="col-md-8">
            <div className="card">
                <img className="card-img-top" src={logo} alt="Card image" />
                <div className="card-body text-center">
                    <input type="hidden" value={id} />
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{ques}</p>
                    <p className="card-text">{ans}</p>
                    <p className="card-text">{random}</p>
                    <p className="text-secondary">{para}</p>
                    
                </div>
            </div>
            </div>
        )
    }
}

export default Card