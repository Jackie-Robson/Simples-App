const initialState = {
	list: [ ],
	tags: [ ],
}

const tasksReducer = (state = initialState, action) => {
	var updatedState = state

	switch(action.type) {
	case 'ADD_TASK':
		updatedState.list.push(action.taskData)
		return Object.assign({}, updatedState)

	case 'ADD_TASK_TAG':
		updatedState.list.task.tags.push(action.tagData)
		return Object.assign({}, updatedState)

	default:
		return state


	}
}

export default tasksReducer
