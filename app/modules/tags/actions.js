export function addTag(tagType) {
	return {
		type : 'ADD_TAG',
		tagType : tagType
	}
}


export function removeTag(tagType) {
	return {
		type : 'REMOVE_TAG',
		tagType : tagType
	}
}
