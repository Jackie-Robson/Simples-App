import React from 'react'
import PropTypes from 'prop-types'

class Tag extends React.Component {

	constructor(){
		super()

		this.state = {
			done : false
		}

	}

	// handleDelete(e) {
	//
	// 	e.preventDefault
	// 	this.setState({
	// 		done: true,
	// 	})
	//
	// }

	render() {
		return(
				<div value={this.props.tag} > {this.props.tag} </div>
		)
	}
}

Tag.propTypes = {
	tag : PropTypes.string
}

export default Tag
