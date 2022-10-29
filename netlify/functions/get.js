import fetch from 'node-fetch';

exports.handler = async function () {
	const XATA_URL = 'XATA URL GOES HERE';

	const XATA_API_KEY = 'XATA API GOES HERE';

	const body = {
		page: {
			size: 15,
		},
	};

	const response = await fetch(`${XATA_URL}:main/tables/userDetails/query`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${XATA_API_KEY}`,
		},
		body,
	});
	const data = await response.json();

	return {
		statusCode: 200,
		body: JSON.stringify(data),
	};
};
