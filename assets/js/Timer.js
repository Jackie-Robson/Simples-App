
class Timer extends React.Component{
	constructor(){
		super()

		this.toggleTimer = this.toggleTimer.bind(this)

		this.state = {

		}

	}

	render(){
		return(
			<div id="timer">
				<input type="checkbox" onChange={this.toggleTimer}
			</div>
		)
	}
}
