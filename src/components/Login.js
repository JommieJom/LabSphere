import React from 'react';
import loginImg from '../login.svg';
import './Login.scss';
import { Link } from 'react-router-dom';

const KEY = "user_id"

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:'', password:''};
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleLogin() {
    localStorage.setItem(KEY, this.state.username);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header-login">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg}/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.changeHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.changeHandler} />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to='/user-profile'>
          <button type="button" className="signup-btn" onClick={() => this.handleLogin()}>Login</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;