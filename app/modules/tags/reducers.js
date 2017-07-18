const initialState = {
	tags : ['Urgent']
}



const tagsReducer = (state = initialState, action) => {

	var updatedState = state

	switch(action.type) {

	case 'ADD_TAG':
		updatedState.tags.push(action.tagType)
		return Object.assign({}, updatedState)

	case 'REMOVE_TAG':
		updatedState.tags.splice(action.tagType, 1)
		return Object.assign({}, updatedState)

	
	default:
		return state
	}
}

export default tagsReducer
