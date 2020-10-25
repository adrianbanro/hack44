import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class TileOpenProject extends Component {
  render() {
    return (
                      // (this.props.openProject)
      <div onClick={() => this._detail.bind(this)}>
        <div>

 <div>

<h4>
{this.props.openProject.title}
</h4>
</div>

 <div>
({this.props.openProject.id})
</div>

<div>
<p>

</p>
</div>

<div>
<img src={this.props.openProject.imageUrl} width="25" height="35" />
</div>


        </div>
      </div>
    )
  }
// async
_detail =  () => {
  // ... you'll implement this in chapter 6
  console.log("it works")
  this.props.history.push(`/detail`)
}
}

export default TileOpenProject
