import React, { Component } from 'react'
import HogCard from './HogCard'

export class HogContainer extends Component {
    render() {
        return (
            <div className="ui grid container">
                {this.props.hogs.map((hog, i) => <HogCard hog={hog} key={i}/>
                )}
            </div>
        )
    }
}

export default HogContainer
