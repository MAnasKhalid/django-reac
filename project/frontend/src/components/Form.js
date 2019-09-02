import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  // static propTypes = {
  //   endpoint: PropTypes.string.isRequired
  // };

  // state = {
  //   name: "",
  //   email: "",
  //   message: ""
  // };

  // handleChange = e => {
  //   // console.log('onchange called:',e)
  //   console.log({ [e.target.name]: e.target.value })
  //   this.setState({ [e.target.name]: e.target.value });
  //   console.log(this.state)
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { name, email, message } = this.state;
  //   const lead = { name, email, message };
  //   const conf = {
  //     method: "post",
  //     body: JSON.stringify(lead),
  //     headers: new Headers({ "Content-Type": "application/json" })
  //   };
  //   fetch(this.props.endpoint, conf).then(function(response) {console.log('f')});
  // };

  render() {
    const { name, email, message } = this.props.state;
    return (
      <div className="column">
        <form onSubmit={this.props.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.props.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                onChange={this.props.handleChange}
                value={email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="message"
                onChange={this.props.handleChange}
                value={message}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Send message
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
