import React, {Component} from 'react';
import {CardList} from '../component/CardList';
import {SearchBox} from '../component/SearchBox';
import {ScrollBox} from '../component/ScrollBox';

import '../css/App.css';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {robots:[],
                  searchValue:"",
                  set:5,
                };
  };

  onChangeSearch=(e)=>{
    this.setState({searchValue:e.target.value})
  }
  onChangeRadio = (e)=>{
    this.setState({set:e.target.value})
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>{this.setState({robots:users})})
  }

  render(){
    const {robots,searchValue} = this.state;
    const filterRobots = robots.filter(robot=> {
        return robot.name.toLowerCase().includes(searchValue.toLowerCase())})
    return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox  onChange={this.onChangeSearch} onChangeRadio ={this.onChangeRadio}/>
           <ScrollBox> 
            <CardList robots={filterRobots} set = {this.state.set} />
          </ScrollBox>
        </div>
      );
  }
}
