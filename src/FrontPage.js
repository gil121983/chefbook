import React, { Component, useState } from 'react'
import sushi from './img/sushi.svg'
import './frontpage.css'
import LazyLoad from './SimpleSlider'


export default class FrontPage extends Component {
    constructor(props) {
        super(props)
        this.state = { opacity: '0.01' }
    }
    componentDidMount() {
        setTimeout(() => {
            this.changeOpacity()
        }, 500);
    }
    changeOpacity = () => { this.setState({ opacity: '1' }) }

    render() {
        let opacity = this.state.opacity
        if (!this.props.recipesArrLen) {
            return (
                <>
                    <LazyLoad />
                    <div className="img-container" >
                        <img className='sushi' src={sushi} style={{ opacity: opacity }} alt='' />
                    </div>
                </>
            )
        } else {
            return null;
        }
    }
}
