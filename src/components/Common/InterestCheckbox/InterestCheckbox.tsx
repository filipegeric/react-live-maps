import React, { ChangeEvent, CSSProperties } from 'react';
import './InterestCheckbox.scss';
import { connect, DispatchProp } from 'react-redux';
import { addInterest, removeInterest, unfocusEvent } from '../../../store/actions';

interface Props {
	interests: Array<any>;
	width?: string | number;
	style?: CSSProperties;
}

const InterestCheckbox: React.FC<Props & { checkedInterests: Array<any>; focusedEvent: any } & DispatchProp> = (
	props
) => {
	const { interests } = props;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			props.dispatch(addInterest(e.target.value));
		} else {
			props.dispatch(removeInterest(e.target.value));
		}
		if (props.focusedEvent) {
			props.dispatch(unfocusEvent());
		}
	};

	return (
		<form style={{ ...props.style, width: props.width ? props.width : '500px' }} className="interest-checkbox">
			<ul>
				{interests.map((el: any) => (
					<li key={el.id}>
						<span style={{ textTransform: 'capitalize' }}>{el.name}</span>
						<div className="is-pulled-right">
							<input
								type="checkbox"
								name="interest"
								value={el.id}
								id={el.name}
								className="switch-input"
								onChange={handleChange}
								checked={props.checkedInterests.includes(el.id)}
							/>
							<label htmlFor={el.name} className={`switch-label label-${el.name}`} />
						</div>
					</li>
				))}
			</ul>
		</form>
	);
};

export default connect((state: any) => ({
	checkedInterests: state.interests,
	focusedEvent: state.focusedEvent
}))(InterestCheckbox);
