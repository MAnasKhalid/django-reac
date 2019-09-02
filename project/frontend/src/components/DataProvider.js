import React, { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {
  // static propTypes = {
  //   endpoint: PropTypes.string.isRequired,
  //   render: PropTypes.func.isRequired
  // };

  // state = {
  //   data: [],
  //   loaded: false,
  //   placeholder: "Loading..."
  // };

  // componentDidMount() {
  //   console.log('DataProvider Component Mounted')
  //   fetch(this.props.endpoint)
  //     .then(response => {
  //       if (response.status !== 200) {
  //         return this.setState({ placeholder: "Something went wrong" });
  //       }
  //       return response.json();
  //     })
  //     // .then(data => this.setState({ data: data, loaded: true }));
  //     .then(data => this.props.componentMount(data));
  // }

  render() {
    const { data, loaded, placeholder } = this.props.getstate;
    console.log(data,loaded,placeholder);
    return loaded ? this.props.render(this.props.getstate.data) : <p>{placeholder}</p>;
    // return  <p>{placeholder}</p>;

  }
}

export default DataProvider;
