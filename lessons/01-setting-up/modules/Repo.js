/**
 * Created by oBlank on 7/2/16.
 */
import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <div>name: {this.props.params.userName} <br/> repo:{this.props.params.repoName}</div>
            </div>
        )
    }
})