import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
        <div>
          <div>Hello, React Router! xxx</div>
          <url role="nav">
            <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="repos">Repos</Link></li>
            <li>activeStyle</li>
            <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos activeStyle</Link></li>
            <li>activeClassName</li>
            <li><Link to="/repos" activeClassName="active">Repos activeClassName</Link></li>

            <li>自定义链接</li>
            <li><NavLink to="/about">About NavLink</NavLink></li>
            <li><NavLink to="/repos">Repos NavLink</NavLink></li>
          </url>
          <h1>以下为内容:</h1>

          {this.props.children}
        </div>
    )
  }
})
