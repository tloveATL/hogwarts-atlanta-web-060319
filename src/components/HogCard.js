import React, { Component } from 'react'
import HogDetails from './HogDetails'

export class HogCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            toggleDetails: false
        }
    }


    handleToggleDetails = (e) => {
        e.persist()
        console.log(e)
        this.setState({toggleDetails: !this.state.toggleDetails})
        }
    

    getImage = (hogName) => {
    const formattedName = hogName.split(" ").join("_").toLowerCase()
    const pigPics = require(`../hog-imgs/${formattedName}.jpg`)
    return pigPics
    }


    render() {
        return (
            <div className="pigTile" onClick={this.handleToggleDetails}>
                {this.state.toggleDetails === false ? <img src={this.getImage(this.props.hog.name)}></img> : <HogDetails hog={this.props.hog}/>  }
               <h2> {this.props.hog.name}
                </h2>
            </div>
        )
    }
}

export default HogCard
