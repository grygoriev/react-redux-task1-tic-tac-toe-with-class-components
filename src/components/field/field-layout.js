import { PLAYER_SIGN } from '../../constants';
import { handleCellClick } from '../../handlers';
import { connect } from 'react-redux';
import { Component } from 'react';

export class FieldLayoutContainer extends Component {
	render() {
		const { field, onClick } = this.props;

		return (
			<div className="grid grid-cols-3 gap-0 w-[300px] border border-black">
				{field.map((cellPlayer, index) => (
					<button
						key={index}
						className="w-[100px] h-[100px] text-[50px] border border-black flex items-center justify-center"
						onClick={() => onClick(index)}
					>
						{PLAYER_SIGN[cellPlayer]}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
});

const mapDispatchToProps = (dispatch) => ({
	onClick: (index) => handleCellClick(index, dispatch),
});

export const FieldLayout = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FieldLayoutContainer);
