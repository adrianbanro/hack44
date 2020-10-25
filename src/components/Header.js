import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {

  render() {
    // const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">

          <div className="fw7 mr1">Company99</div>

          <Link to="/" className="ml1 no-underline black">
            new
          </Link>

          <Link to="/openProjects" className="ml1 no-underline black">
            Projects
          </Link>
      </div>

          <div className="flex flex-fixed">
          <Link to="/login" className="ml1 no-underline black">
            login
          </Link>
          </div>

      </div>
)
}
}
export default withRouter(Header)
