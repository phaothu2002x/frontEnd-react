import "./Login.scss";
function Login() {
    return (
        <div className="login-container">
            <div className="container mt-3">
                <div className="row">
                    <div className="content-left col-7 d-none d-sm-block">
                        <div className="brand">Truong Vu Thuan</div>
                        <div className="detail">
                            [ Tiktok có gì zui] Khi bạn hướng nội tới há dì lao
                            nghe hát chúc mừng sinh nhật phiên bản sợ đám đông
                            là trải nghiệm thế nào?
                        </div>
                    </div>
                    <div className="content-right col-12 col-s  m-5 d-flex flex-column gap-3 py-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email or your phone number"
                        />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Your password"
                        />
                        <button className="btn btn-primary">Login</button>
                        <span className="text-center">
                            Forgot your password ?
                        </span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success">
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
