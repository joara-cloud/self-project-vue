import axios from 'axios';

export const FETCH_MEMO = (method, url) => { // 게시물 출력
	return axios({
		method,
		url
	})
}