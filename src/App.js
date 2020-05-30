import React, {Component} from 'react';
import {CardList} from './CardList';
import {SearchBox} from './SearchBox';
import {ScrollBox} from './ScrollBox';

import './css/App.css';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {robots:[]};
  };

  onChangeSearch=(e)=>{
    console.log(e.target.value);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>{this.setState({robots:users})})
  }

  render(){
    return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox  onChange={this.onChangeSearch}/>
           <ScrollBox> 
            <CardList robots={this.state.robots} />
          </ScrollBox>
        </div>
      );
  }
}
