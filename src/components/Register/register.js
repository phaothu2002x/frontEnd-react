import { useHistory } from "react-router-dom";
import "./Register.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { registerNewUser } from "../../services/userService";

function Register(props) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    };
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    };

    useEffect(() => {
        // axios.get("http://localhost:8080/api/v1/test-api").then((data) => {
        //     console.log(">>>> check data:", data);
        // });
    }, []);

    const isValidInput = () => {
        setObjCheckInput(defaultValidInput);
        if (!email) {
            toast.error("email is require");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }

        let regx = /\S+@\S+\.\S+/;
        if (!regx.test(email)) {
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            toast.error("unvalid email");
            return false;
        }

        if (!phone) {
            toast.error("phone is require");
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
            return false;
        }
        if (!password) {
            toast.error("password is require");
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("confirmPassword is wrong");
            setObjCheckInput({
                ...defaultValidInput,
                isValidConfirmPassword: false,
            });
            return false;
        }

        return true;
    };

    const handleRegister = async () => {
        //validate trước
        let check = isValidInput();
        //đá qua cho server check để trả về phản hổi (response)
        if (check === true) {
            let serverData = await registerNewUser(
                email,
                phone,
                username,
                password
            );
            //hứng response để direct người dùng
            if (+serverData.EC === 0) {
                toast.success(serverData.EM);
                history.push("/login");
            } else {
                toast.error(serverData.EM);
            }
        }
    };

    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-1 px-sm-0">
                    <div className="content-left col-sm-7 d-sm-block d-none d-sm-block">
                        <div className="brand">Truong Vu Thuan</div>
                        <div className="detail">
                            [ Tiktok có gì zui] Khi bạn hướng nội tới há dì lao
                            nghe hát chúc mừng sinh nhật phiên bản sợ đám đông
                            là trải nghiệm thế nào?
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 mx-sm-0 mx-3">
                        <div className="brand d-sm-none text-center">
                            Truong Vu Thuan
                        </div>

                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                className={
                                    objCheckInput.isValidEmail
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Email address"
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone:</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                className={
                                    objCheckInput.isValidPhone
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Phone number"
                            />
                        </div>
                        <div className="form-group">
                            <label>UserName:</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="UserName"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className={
                                    objCheckInput.isValidPassword
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label>Re-enter Password:</label>
                            <input
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                type="password"
                                className={
                                    objCheckInput.isValidConfirmPassword
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Re-enter Password"
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleRegister()}
                        >
                            Register
                        </button>

                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={handleLogin}
                            >
                                Already have an account/ login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
