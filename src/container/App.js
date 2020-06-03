import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchRobot, requestRobots, setChangeSet} from '../action';
import {CardList} from '../component/CardList';
import {SearchBox} from '../component/SearchBox';
import {ScrollBox} from '../component/ScrollBox';
import ErrorBoundry from '../component/ErrorBoundry';

import '../css/App.css';

const mapStateToProps = state =>{
  return {
    searchValue: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    set: state.searchRobots.set
  }
}

const mapDispatchToProps =(dispatch)=>{
 return { 
  onChangeSearch:(e) => dispatch(setSearchRobot(e.target.value)),
  onChangeRadio:(e) => dispatch(setChangeSet(e.target.value)),
  onRequestRobots:() => dispatch(requestRobots())
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {set:1,};
};  

  
  onChangeRadio = (e)=>{
    this.setState({set:e.target.value})
  }

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render(){
    const {searchValue , onChangeSearch, isPending, robots, set, onChangeRadio} = this.props;
    const filterRobots = robots.filter(robot=> {
        return robot.name.toLowerCase().includes(searchValue.toLowerCase())})
    return (
      isPending ?
          <h1 className="loading tc">Loading</h1> :
          (
                  <div className="tc">
                    <h1>Robofriends</h1>
                    <SearchBox  onChange={onChangeSearch} onChangeRadio ={onChangeRadio} checkedOpt= {set}/>
                     <ScrollBox> 
                        <ErrorBoundry>
                          <CardList robots={filterRobots} set = {set} />
                        </ErrorBoundry>
                    </ScrollBox>
                  </div>)
      );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);