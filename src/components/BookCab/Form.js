import React, { Component } from 'react';
import { FormValidation } from './FormValidation';
 
class Form extends Component {
     
constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      FormValidation: {email: '', password: ''},
      validateEmail: false,
      validatePassword: false,
      validateForm: false
    }
  }
 
  validateUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateInputField(name, value) });
  }
 
  validateInputField(inputField, value) {
    let inputFieldErrors = this.state.FormValidation;
    let validateEmail = this.state.validateEmail;
    let validatePassword = this.state.validatePassword;
 
    switch(inputField) {
      case 'email':
        validateEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        inputFieldErrors.email = validateEmail ? '' : ' is invalid!';
        break;
      case 'password':
        validatePassword = value.length >= 6;
        inputFieldErrors.password = validatePassword ? '': ' is too short!';
        break;
      default:
        break;
    }
    this.setState({FormValidation: inputFieldErrors,
                    validateEmail: validateEmail,
                    validatePassword: validatePassword
                  }, this.validateForms);
  }
 
  validateForms() {
    this.setState({validateForm: this.state.validateEmail && this.state.validatePassword});
  }
 
  cmdSubmit(event) {  
      alert('You have entered the email and passwor successfully.');  
      event.preventDefault();  
  }
render () {
    return (    
      <div className="container">
      <div className="col-md-6 mx-auto text-center">
         <div className="header-title">
            <h1 className="wv-heading--title">
              ReactJS Form with Validation
            </h1>
            <h2 className="wv-heading--subtitle">
               React bootstrap
            </h2>
         </div>
      </div>
      <div className="row">
         <div className="col-md-6 mx-auto">
            <div className="myform form ">
              <form className="signupForm" onSubmit={this.cmdSubmit}>
                <h5>Sign up Form</h5>
                <div className="panel panel-default">
                  <FormValidation FormValidation={this.state.FormValidation} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" required className="form-control" name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.validateUserInput}  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.validateUserInput}  />
                </div>
        <br/>
                <div className="text-center">
                <button type="submit" className="btn btn-primary send-button" disabled={!this.state.validateForm}>Sign up</button>
                </div>
                  <div className="col-md-12 ">
                     <div className="login-or">
                        <hr className="hr-or"/>
                        <span className="span-or">or</span>
                     </div>
                  </div>
                  <div className="form-group">
                     <button type="submit" className="btn btn-block g-button">
                     <i className="fa fa-google"></i> Sign up with Google
                     </button>
                  </div>
                  <p className="small mt-3">By signing up, you are indicating that you have read and agree to the Terms of Use and Privacy Policy.
                  </p>
              </form>
            </div>
         </div>
      </div>
      </div>
    )
  }
}
export default Form;