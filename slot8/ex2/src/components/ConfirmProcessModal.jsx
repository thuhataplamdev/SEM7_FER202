import { useEffect, useReducer } from "react";
import { Button, Modal } from "react-bootstrap";

const initialState = {
  isShowModal: false,
  isConfirmed: false,
  isSuccess: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isShowModal: true };
    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false, isSuccess: false };
    case 'CONFIRM_ORDER':
      return { ...state, isConfirmed: true, isSuccess: true };
    default:
      return state;
  }
}

export default function ConfirmProcessModal({ onConfirm }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.isSuccess) {
      const timer = setTimeout(() => {
        dispatch({ type: 'CLOSE_MODAL' });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.isSuccess]);

  const handleOpen = () => dispatch({ type: 'OPEN_MODAL' });
  const handleClose = () => dispatch({ type: 'CLOSE_MODAL' });
  const handleConfirm = () => {
    dispatch({ type: 'CONFIRM_ORDER' });
    onConfirm?.();
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Duyệt đơn hàng
      </Button>

      <Modal show={state.isShowModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {state.isSuccess ? "Thành công" : "Xác nhận"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {state.isSuccess ? (
            "Đơn hàng đã được duyệt thành công và chuyển sang bộ phận kho."
          ) : (
            "Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?"
          )}
        </Modal.Body>

        <Modal.Footer>
          {!state.isSuccess && (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="success" onClick={handleConfirm}>
                Xác nhận
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
