import React from 'react'

import { TaskList } from './components'


class Tasks extends React.Component {

	constructor(){
		super()
	}

	render() {
		return (
			<div id="displayTasks">
				<TaskList tasks={ [] } />
			</div>
		)
	}
}


export default Tasks
