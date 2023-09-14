import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ModalDelete = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, Are you sure to delete this user:
                    {props.dataModal.email}
                    ???
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary" onClick={props.confirmDeleteUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDelete;
