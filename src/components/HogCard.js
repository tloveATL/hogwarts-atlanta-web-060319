import React, { Component } from 'react'

export class HogCard extends Component {
    getImage = (hogName) => {
    const formattedName = hogName.split(" ").join("_").toLowerCase()
    const pigPics = require(`../hog-imgs/${formattedName}.jpg`)
    return pigPics
    }


    render() {
        return (
            <div className="pigTile">
                <h2>
                {this.props.hog.name}
                </h2>
                <img src={this.getImage(this.props.hog.name)}></img>
            </div>
        )
    }
}

export default HogCard
