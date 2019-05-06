import React, { Suspense, CSSProperties, useEffect } from 'react';
import './Modal.scss';
import Loading from '../Loading/Loading';
import { connect, DispatchProp } from 'react-redux';
import { setModalActive } from '../../../store/actions';

export const MODAL_CONTENT_SIGN_IN = 'SignInModalContent';
export const MODAL_CONTENT_REGISTER = 'RegisterModalContent';
export const MODAL_CONTENT_CREATE_EVENT = 'CreateEventModalContent';

const Modal: React.FC<
  { content: string; style: CSSProperties } & DispatchProp
> = ({ content, style, dispatch }) => {
  const ContentComponent = React.lazy(() =>
    import(`./ModalContent/${content}`)
  );

  // this doesn't look nice
  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        dispatch(setModalActive(false));
      }
    };
    if (style.display === 'block') {
      document.addEventListener('keydown', keyPressHandler);
    }
    return () => {
      if (style.display === 'block') {
        document.removeEventListener('keydown', keyPressHandler);
      }
    };
  }, [style.display, dispatch]);
  return (
    <div className="modal" style={style}>
      <div className="modal-content">
        <span className="close" onClick={() => dispatch(setModalActive(false))}>
          &times;
        </span>
        {/* TODO: Add error boundary here */}
        {content && (
          <Suspense
            fallback={
              <div className="loading-wrapper">
                <Loading />
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
