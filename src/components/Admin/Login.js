import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
// import Home from '../Home/Home';
import { Link } from 'react-router-dom'
import './Admin.css'

class Login extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      error:''
    }
  }
  

  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePhone = (e) =>{
    this.setState({phone:e.target.value})
  }

  onSubmit = (e) =>{
    let { useNavigate } = this.props
    let ele;
    e.preventDefault()
    let olddata = localStorage.getItem('formdata')
    let oldArr = JSON.parse(olddata)
    oldArr.map(arr => 
      {
        if(this.state.name.length > 0 && this.state.password.length > 0){
          if (arr.name == this.state.name && (arr.password == this.state.password)) {
            let user = this.state.name;
            // useNa({ pathname: '/home', user: this.state.name });
            // window.location.href='/home';
            var id = this.state.name
            window.location.href = `/home`;
          }else{
            this.setState({error:'Please check your email or password'})
          }
        }
      }
      )
  }
  
  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  render() {
    
    return (
        <>
        <h1>Log In to Excel Facts</h1>
      <form onSubmit={this.onSubmit}>
        <p className="error">
          {this.state.error}
        </p>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-block" onClick={this.props.onLogin}>Login</button>
        <br />
        <br />
        <p>Does not have an Account ?</p>
        <Link to='/register'>Register Here</Link>
      </form>
      </>
    )
  }
}

export default Login;
