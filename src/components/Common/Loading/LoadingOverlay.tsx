import React from 'react';
import Loading from './Loading';

const LoadingOverlay: React.FC<{ fullScreen?: boolean; backgroundColor?: string; color?: string }> = (props) => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: props.backgroundColor || '#00000050',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 9999
			}}
		>
			<Loading color={props.color || '#000'} />
		</div>
	);
};

export default LoadingOverlay;
