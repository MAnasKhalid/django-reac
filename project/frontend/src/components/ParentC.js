import React, { Component } from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
class ParentC extends Component {
    // static propTypes = {
    //     endpoint: PropTypes.string.isRequired,
    //
    // };

    state = {
        name: "",
        email: "",
        message: "",
        data: [],
        loaded: false,
        placeholder: "There is no data..."
    };

     handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
     // updateDate(data){
     //     let a={...this.state}
     //
     // }


    addData(dataa){
        console.log(dataa);
        const da=[...this.state.data];
        const data=da.concat(dataa);
        const loaded=true;
        this.setState({data,loaded});
        // this.setState({loaded})
    }

    // deleteData
    deleteRecord=(e)=>{
        var self=this;
        // var self=this;
        const conf = {
      method: "DELETE",};
    fetch('api/deletelead/1', conf).then(
        function(response){
        response.json().then((data2)=>{let data=[];self.setState({data});})})

        // console.log(state)
    }

    handleSubmit = e => {
        var self=this;
        // console.log(this,'this scope printing')
    e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message };
        const conf = {
      method: "post",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-Type": "application/json" })
    };

    fetch('api/lead/', conf).then(
        function(response){

            // if(response.status!=200){
            //     console.log('Error with the API with status code:'.response.status)
            // }
        response.json().then((data)=>{console.log(data);self.addData(data); })

        })

        // data.json().then((data2)=>console.log(data2));this.addData(lead)})
  };



  componentDidMount() {
    console.log('Main Component Mounted');
    fetch('api/lead/')
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => {var loaded= data.length>0?true:false; this.setState({ data: data, loaded: loaded });console.log('Parent Component Mounted');})
      // .then(data => this.props.componentMount(data));
  }
  render() {
    const { name, email, message } = this.state;
    return (
        <React.Fragment>
    <DataProvider getstate={this.state}  endpoint="api/lead/"  render={data => <Table deleteRecord={this.deleteRecord} data={data} stt={this.state} />} />
    <Form  state={this.state}  handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
  </React.Fragment>
    )
}
}

export default ParentC;