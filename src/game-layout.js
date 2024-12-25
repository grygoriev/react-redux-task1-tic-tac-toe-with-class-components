import { Field, Information } from './components';
import { handleRestart } from './handlers';
import { connect } from 'react-redux';
import { Component } from 'react';

export class GameLayoutContainer extends Component {
	render() {
		const { onClick } = this.props;

		return (
			<div className="flex flex-col items-center w-[300px] my-[50px] mx-auto">
				<Information />
				<Field />
				<button
					className="mt-5 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
					onClick={onClick}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onClick: () => handleRestart(dispatch),
});

export const GameLayout = connect(null, mapDispatchToProps)(GameLayoutContainer);
