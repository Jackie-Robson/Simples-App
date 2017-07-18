import React from 'react'
import { Header } from '../components'
import  Tasks  from './tasks'
import Tags  from './tags'
import { NewTask }  from './tasks/components'


class App extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<div id="container">
				<Header />
				<div>
					<NewTask />
					<Tags addTag={this.addTag}/>
				</div>
				<Tasks />
			</div>
		)
	}

}

export default App
