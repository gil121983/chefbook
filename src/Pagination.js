import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        if (this.props.recipes.length > 0) {
            return <button
                onClick={this.props.loadResults}>
                load more results
            </button>
        } else {
            return null
        }
    }
}
