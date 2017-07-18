import '../assets/scss/_main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules'
import { Provider } from 'react-redux'
import tasksReducer from './modules/tasks/reducers'
import tagsReducer from './modules/tags/reducers'

import { createStore, combineReducers } from 'redux'
import { loadState, saveState } from './LocalStorage'

const persistedState = loadState()

const reducers = combineReducers({
	tasks: tasksReducer,
	tags: tagsReducer
})

const store = createStore(
	reducers,
	persistedState
)

store.subscribe(() =>{
	saveState(store.getState())
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('app')
)
