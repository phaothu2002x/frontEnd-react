import { useEffect, useState } from "react";
import { fetchAllUser } from "../../services/userService";
import ReactPaginate from "react-paginate";
import "./Users.scss";
const Users = (props) => {
    const [listUsers, setListUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(2);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        fetchUser();
    }, [currentPage]);

    const fetchUser = async () => {
        let response = await fetchAllUser(currentPage, currentLimit);

        if (response && response.data && response.data.EC === 0) {
            setTotalPage(response.data.DT.totalPage);
            setListUser(response.data.DT.users);
        }
    };

    const handlePageClick = async (event) => {
        setCurrentPage(+event.selected + 1);
    };

    return (
        <div className="container">
            <div className="manage-users-container">
                <div className="user-header">
                    <div className="title">
                        <h3>Table User</h3>
                    </div>
                    <div className="actions">
                        <button className="btn btn-success">Refesh</button>
                        <button className="btn btn-primary">
                            Add new user
                        </button>
                    </div>
                </div>

                <div className="user-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">ID</th>
                                <th scope="col">Email</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.length > 0 ? (
                                <>
                                    {listUsers.map((item, index) => {
                                        return (
                                            <tr key={`row-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>
                                                    {item.Group
                                                        ? item.Group.name
                                                        : ""}
                                                </td>
                                                <td>
                                                    <button className="btn btn-warning">
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-danger">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </>
                            ) : (
                                <>
                                    <tr>
                                        <td>NOT found</td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPage > 0 && (
                    <div className="user-footer">
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={totalPage}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;
