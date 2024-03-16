import React,{Component} from "react";
import TodaysPlan from "./03/TodaysPlan";
import './App.css';

class App extends React.Component{
  render() {
    return (
      <div className="body">
        <TodaysPlan/>
      </div>
    );
  }
}
export default App;