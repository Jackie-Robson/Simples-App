import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Task from './Task'

class TaskList extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<div id="listOfTasks">
				<p id="TaskHead">Task List</p>
				<ul >
				{this.props.tasks.list.map((task, i) => {
					return <Task key={i} task={task} />
				})}
				</ul>
			</div>
		)
	}
}
TaskList.propTypes = {
	tasks: PropTypes.object.isRequired,
}

export default connect(
	state => ({
		tasks: state.tasks
	}), {

	}
)(TaskList)
