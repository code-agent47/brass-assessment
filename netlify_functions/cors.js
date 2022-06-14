const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
exports.handler = async (event, context) => {
	var url = event.path;
	url = url.split(".netlify/functions/cors/")[1];
	url = decodeURIComponent(url);
	url = new URL(url);
	
	for (let i in event.queryStringParameters) {
		url.searchParams.append(i, event.queryStringParameters[i]);
	}
	console.log(url.href);
	var useragent = event.headers["user-agent"] || "";
	
	var header_to_send= {
		"User-Agent": useragent,
		"content-type": "application/json",
		'Authorization': `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
		"accept": "*/*",
		"host": url.host
	};
	
	var options = {
		method: event.httpMethod.toUpperCase(),
		headers: header_to_send,
		body: event.body
	}
	
	if (event.httpMethod.toUpperCase() == "GET" || event.httpMethod.toUpperCase() == "HEAD") delete options.body;
	
	var response = await fetch(url, options);
	var response_text = await response.text();
	var headers = response.headers.raw();
	
	return {
		statusCode: 200,
		body: response_text,
		headers: {
			"content-type": String(headers["content-type"]) || "text/plain"
		}
	}
};