export const _userLoggdIn = 'login/USERLOGGEDIN';
import api from '../../lib/api';

export const userLoggedIn = (user) => ({
	type:_userLoggdIn,
	user
})

export const login = (credential) =>(dispatch) =>{
	console.log('login action triggered')
api.user.login(credential).then(user => dispatch(userLoggedIn(user)));
}