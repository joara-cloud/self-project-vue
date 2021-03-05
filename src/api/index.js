import axiox from 'axios';



export const fetch_posts = (method, url) => {
	console.log('ajsdoifjsoidfjisdjfioj');
	console.log(method, url);
	axiox({
		method,
		url
	})
}