import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import ParentC from "./ParentC";
const App = () => (
  <React.Fragment>
    <ParentC />
    {/*<DataProvider endpoint="api/lead/" render={data => <Table data={data} />} />*/}
    {/*<Form endpoint="api/lead/" />*/}
  </React.Fragment>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
