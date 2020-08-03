import React, { Component } from 'react';
import PropTypes from 'prop-types';


const withInput = (Wrapper) => {  
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formValid: false,
        errorCount: 0,
        errors: {
          firstName: '',
          lastName: '',
          topic: '',
          email: '',
          
        }
      };
    }  

    inputChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      switch (name) {
        case 'email': 
          errors.email = 
            value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
              ? ''
              : 'Email is not valid!';
          break;
        case 'topic': 
          errors.topic = 
            value.length < 8
              ? 'Topic must included at least 6 characters long!'
              : '';
          break;
        default:
          break;
      }
  
      this.setState({errors, [name]: value});
      this.setState({formValid: this.validateForm(this.state.errors)});
      this.setState({errorCount: this.countErrors(this.state.errors)});
    } 
  
  
    pushSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
    }
    
    validateForm = (errors) => {
      let valid = true;
      Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
      );
      return valid;
    }
    
    countErrors = (errors) => {
      let count = 0;
      Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count+1)
      );
      return count;
    }
    

  render() {
      
      return (
        <Wrapper 
              {...this.props}
              inputChange={this.inputChange}
              pushSubmit={this.pushSubmit}
              value={this.state.value}
              errors={this.state.errors} />
      )
    }
  }
}

export default withInput;

withInput.PropTypes = {
  pushSubmit: PropTypes.event,
  formValid: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object)
}