import React, { Component } from 'react'

export class HogDetails extends Component {
    render() {
        // debugger;
        return (
            <div className="hoggyText">
                <h3>Specialty: {this.props.hog["specialty"]} </h3>
                <h3>
                    Greased? {this.props.hog.greased ? 'yes, very greasy' : 'no, no grease detected'}
                </h3>
                <h3>
                    Weight: {300/this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
                </h3>
                <h3>
                    Highest Medal Achieved: {this.props.hog["highest medal achieved"]}
                </h3>
            </div>
        )
    }
}

export default HogDetails
