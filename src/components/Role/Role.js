import "./Role.scss";
import { useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const Roles = (props) => {
    const [listChild, setListChilds] = useState({
        child1: { url: "", description: "" },
    });

    const handleOnchangeInput = (name, value, key) => {
        let _listChilds = _.cloneDeep(listChild);
        _listChilds[key][name] = value;
        setListChilds(_listChilds);
    };

    const handleAddNewInput = () => {
        let _listChilds = _.cloneDeep(listChild);
        _listChilds[`child-${uuidv4()}`] = {
            url: "",
            description: "",
        };

        setListChilds(_listChilds);
    };

    const handleDeleteInput = (key) => {
        let _listChilds = _.cloneDeep(listChild);
        delete _listChilds[key];
        setListChilds(_listChilds);
    };
    return (
        <div className="role-container">
            <div className="container">
                <div className="mt-3">
                    <div className="title-role">
                        <h4> Add a new role</h4>
                    </div>
                    <div className="role-parent">
                        {Object.entries(listChild).map(
                            ([key, child], index) => {
                                return (
                                    <div
                                        className={`row role-child ${key}`}
                                        key={`child-${key}`}
                                    >
                                        <div className="col-5 form-group">
                                            <label>URL:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={child.url}
                                                onChange={(e) =>
                                                    handleOnchangeInput(
                                                        "url",
                                                        e.target.value,
                                                        key
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-5 form-group">
                                            <label>Description:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={child.description}
                                                onChange={(e) =>
                                                    handleOnchangeInput(
                                                        "description",
                                                        e.target.value,
                                                        key
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-2 mt-4 actions">
                                            <i
                                                className="fa fa-plus-circle add"
                                                onClick={() =>
                                                    handleAddNewInput()
                                                }
                                            ></i>
                                            {index >= 1 && (
                                                <i
                                                    className="fa fa-trash-o delete"
                                                    onClick={() =>
                                                        handleDeleteInput(key)
                                                    }
                                                ></i>
                                            )}
                                        </div>
                                    </div>
                                );
                            }
                        )}

                        <div>
                            <button className="btn btn-warning">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roles;
