import axios from 'axios';

export const FETCH_MEMO = (method, url) => {
	return axios({
		method,
		url
	})
}
export const DELETE_MEMO = (method, url) => {
	return axios({
		method,
		url,
	})
}