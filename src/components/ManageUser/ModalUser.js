import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

import { fetchGroup } from "../../services/userService";
import { toast } from "react-toastify";

const ModalUser = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [sex, setSex] = useState("");
    const [group, setGroup] = useState("");

    const [userGroups, setUserGroups] = useState([]);

    useEffect(() => {
        getGroups();
    }, []);

    const getGroups = async () => {
        let response = await fetchGroup();
        if (response && response.data && response.data.EC === 0) {
            setUserGroups(response.data.DT);
        } else {
            toast.error(response.data.EM);
        }
    };
    return (
        <>
            <Modal size="lg" show={true} className="modal-user">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content-body row">
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Email address (<span className="red">*</span>)
                            </label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Phone Number (<span className="red">*</span>)
                            </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                UserName (<span className="red">*</span>)
                            </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Password(<span className="red">*</span>)
                            </label>
                            <input className="form-control" type="password" />
                        </div>
                        <div className="col-12 col-sm-12 form-group">
                            <label>Address</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>Gender</label>
                            <select className="form-select">
                                <option defaultValue="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Group(<span className="red">*</span>)
                            </label>
                            <select className="form-select">
                                {userGroups.length > 0 &&
                                    userGroups.map((item, index) => {
                                        return (
                                            <option
                                                key={`group-${index}`}
                                                value={item.id}
                                            >
                                                {item.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.confirmDeleteUser}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalUser;
