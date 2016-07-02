/**
 * Created by oBlank on 7/2/16.
 */
import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({

    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    },

    // add this method
    handleSubmit(event) {
        event.preventDefault()
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        console.log(path)
        // browserHistory.push(path)
        this.context.router.push(path)
    },

    render() {
        return (
            <div>
                <div>Repos</div>
                <ul>
                    <li><Link to="/repos/reactjs/react-router">React Router </Link></li>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                    <li>自定义NavLink:</li>
                    <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/> / {' '}
                            <input type="text" placeholder="repo"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})