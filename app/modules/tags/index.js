import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTag, addTagToTask, removeTag } from './actions'
//import { Tag } from './components'

class Tags extends React.Component{

	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.removeTag = this.removeTag.bind(this)
		this.addNewTag = this.addNewTag.bind(this)
		this.removeTag =this.removeTag.bind(this)

		this.state = {
			tag : '',
			tags :['hello'],
		}

	}

	removeTag(e){
		e.preventDefault()
		this.props.removeTag(e.target.value)
	}

	addNewTag(e) {
		e.preventDefault()
		this.props.addTag(this.state.tag)
		e.target.value = ''
	}

	handleChange(event) {
		this.setState({
			tag: event.target.value
		})
	}

	render(){
		return(
			<div id="tags">
			<ul>
				{this.props.tags.tags.map((tag,i) => {
					return (
						<li key={i}>
							<div  value={tag} > {tag} <input type="checkbox" /> <button onClick={this.removeTag}>x</button></div>
							</li>
					)
				})}
			</ul>
				<form onSubmit={this.addNewTag}>
					<input type="text"  autoComplete="off" name="tags" onChange={this.handleChange} value={this.state.tag} placeholder="Add New Tag" />
				</form>


			</div>
		)
	}

}

Tags.propTypes = {
	tags : PropTypes.object,
	addTag: PropTypes.func,
	handleRemoveTag: PropTypes.func,
	handleChange : PropTypes.func,
	addTagToTask :PropTypes.func,
	removeTag :PropTypes.func
}

export default connect(
	state => ({
		tags: state.tags
	}), {
		addTag,
		addTagToTask,
		removeTag
	}
)(Tags)
