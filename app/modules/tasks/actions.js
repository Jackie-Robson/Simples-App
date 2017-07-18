export function addTask(taskData) {
	return {
		type: 'ADD_TASK',
		taskData: taskData
	}
}

export function addTagToTask(tagData) {
	return {
		type: 'ADD_TASK_TAG',
		tagData : tagData
	}
}
