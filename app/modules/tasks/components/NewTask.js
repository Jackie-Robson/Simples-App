import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import { v4 } from 'node-uuid'

class NewTask extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			tags: [] ,
			title : '',
			id : v4(),
			tagsAdded : 'Tags added'

		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.noSubmit = this.noSubmit.bind(this)
		this.addTagToTask = this.addTagToTask.bind(this)
	}



	handleSubmit(e) {
		e.preventDefault()

		//Dispatch action!!!!

		console.log(this)

		this.props.addTask({
			title: this.state.title,
			goal : this.state.goal,
			tags : this.state.tags,
			id : this.state.id
		})

		this.setState({
			title:'',
			goal:'',
			tags:[],
			id : v4()
		})
	}

	isOn(e){
		e.preventDefault()
		e.isTagOn = 'tagIsOn'
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	noSubmit(e){
		e.preventDefault()
		e.target.placeholder = ' please fill in task details'
	}

	addTagToTask(e){
		e.preventDefault()
		let tags = []
		let tagsList = tags.concat(this.props.tags.tags)

		this.setState({
			tags : tagsList
		})
		alert('Tags Added to '+this.state.title)
	}

	showTags(e){
		e.preventDefault()
	}

	render() {

		let isNull
		this.state.title ? isNull = this.handleSubmit :  isNull = this.noSubmit


		return (
			<div id="newTaskForm">
				<form onSubmit={isNull}>
					<label>
						Create Task
						<br></br>
						<textarea value={this.state.title} placeholder="Add Details ..." autoComplete="off" name="title" type="text" onChange={this.handleChange}   />
						<button id="tagButton" onClick={this.showTags}> + </button>
						<button id="addTagButton" onClick={this.addTagToTask}> Add Tags </button>
						<button type="submit"  onChange={this.handleSubmit} >Submit </button>

						</label>
					{
					// 	<label>
					// 	Task Objective:
					// 	<input placeholder = "Task objective" autoComplete="off" type="text" name = "goal" onChange={this.handleChange} value={this.state.goal} />
					// </label>
				}

				</form>
			</div>
		)
	}
}

NewTask.propTypes = {
	addTask: PropTypes.func.isRequired,
	tags: PropTypes.object
}

export default connect(
	state => ({
		tasks: state.tasks,
		tags: state.tags
	}), {
		addTask,
	}
)(NewTask)
