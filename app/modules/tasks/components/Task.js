import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class Task extends React.Component {

	constructor( props ) {
		super( props )

		this.state = {
			done: false,
			tags : this.props.task.tags,
			id : this.props.task.id
		}
		this.handleChange = this.handleChange.bind(this)
	}


	handleChange() {
		this.setState({
			done: !this.state.done,
		})
	}

	render() {

		let taskClass
		this.state.done ? taskClass = 'strike' : taskClass = ''
		return (
			<li className={taskClass}>
				<br>
				</br>
				<input type="checkbox" onChange={this.handleChange} />
				<p>{this.props.task.title}</p>
				{// <h5 id="objective">Objective:</h5>
				// <i>{this.props.task.goal}</i>
			}
			<ul>
				{this.props.task.tags.map((tag,i)=>{return <li key={i}><button>{tag}</button></li>})}
			</ul>
			<hr></hr>


			</li>
		)
	}


}

Task.propTypes = {
	task: PropTypes.object.isRequired,
	tags: PropTypes.object,
}


export default connect(
	state => ({
		tasks: state.tasks,

		tagsList :state.tagsList
	}), {

	}
)(Task)
