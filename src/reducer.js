import {SEARCH_INPUT, 
		RADIO_INPUT,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED} from './type';

const initialStateSearch ={
	searchField:"",
	set:1
}

const initialStateRobots ={
	robots: [],
	isPending: false,
	error:"",
}

export const searchRobots = (state=initialStateSearch, action={}) =>{
	switch(action.type){
		case SEARCH_INPUT:{
			return {...state, searchField:action.payload}
		}//case search input
		default:{
			return state;
		}//default case

	}//end switch
}//end reducer

export const requestRobots = (state = initialStateRobots, action = {}) =>{
	switch(action.type){
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({},state,{isPending:false, error:action.payload});
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({},state,{isPending:false, robots:action.payload});
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({},state,{isPending:true});
		default:
			return state;
	}//switch
}

export const changeSet = (state = initialStateSearch, action = {}) =>{
	switch(action.type){
		case RADIO_INPUT:
			return {...state, set: action.payload}
		default:
			return state;
	}
}