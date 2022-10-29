exports.handler = async function (firstName, lastName, phoneNumber) {
	const XATA_URL = 'XATA URL GOES HERE';

	const XATA_API_KEY = 'XATA API GOES HERE';

	const body = { firstName, lastName, phoneNumber };

	const response = await fetch(`${XATA_URL}:main/tables/userDetails/data`, {
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
