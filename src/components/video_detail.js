import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class VideoDetail extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' };
    }

    render() {
        return (
            <div className = 'video-detail col-md-8'>
                <div className = 'embed-responsive embed-responsive-16by9'>
                    <iframe className = 'video-detail-item'></iframe>
                </div>
            </div>
        )
    }
}
