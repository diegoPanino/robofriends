import * as constant from './type';

export const setSearchRobot = (text) =>({	//dopo fat arrow se apro
		type:constant.SEARCH_INPUT,				//tonde e poi graffe
		payload:text					//non ho bisogno del
})										//return

export const setChangeSet = (value) =>{
	return({
		type:constant.RADIO_INPUT,
		payload:value
	});
}

export const requestRobots = () => (dispatch) =>{
	dispatch({
		type:constant.REQUEST_ROBOTS_PENDING,
	});
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(data => dispatch({
					type:constant.REQUEST_ROBOTS_SUCCESS,
					payload:data
					}))
	.catch(error => dispatch({
					type:constant.REQUEST_ROBOTS_FAILED,
					payload:error
					}))
}