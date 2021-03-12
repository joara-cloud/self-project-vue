import axios from 'axios';

export const fetch_posts = (method, url, data) => { // 게시물 출력
	return axios({
		method,
		url,
		data
	})
}

export const fetch_post = (method, url) => { // 특정 게시물 출력
	console.log('특정 게시뭉');
	return axios({
		method,
		url
	})
}