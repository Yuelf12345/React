import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class About extends PureComponent {
  static propTypes = {}

  render() {
    console.log('about',this.props);
    
    return (
      <div>about</div>
    )
  }
}
