import React, { Suspense, CSSProperties } from 'react';
import './Modal.scss';
import Loading from '../Loading/Loading';
import { connect, DispatchProp } from 'react-redux';
import { setModalActive } from '../../../store/actions';

export const MODAL_CONTENT_SIGN_IN = 'SignInModalContent';
export const MODAL_CONTENT_REGISTER = 'RegisterModalContent';

const Modal: React.FC<{ content: string; style: CSSProperties } & DispatchProp> = (props) => {
	const ContentComponent = React.lazy(() => import(`./ModalContent/${props.content}`));
	return (
		<div className="modal" style={props.style}>
			<div className="modal-content">
				<span className="close" onClick={() => props.dispatch(setModalActive(false))}>
					&times;
				</span>
				{/* TODO: Add error boundary here */}
				{props.content && (
					<Suspense
						fallback={
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Loading color="#2da8ee" />
							</div>
						}
					>
						<ContentComponent />
					</Suspense>
				)}
			</div>
		</div>
	);
};

export default connect(null)(Modal);
