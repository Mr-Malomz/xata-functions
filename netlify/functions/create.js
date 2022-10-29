import fetch from 'node-fetch';

exports.handler = async function (firstName, lastName, phoneNumber) {
	const body = { firstName, lastName, phoneNumber };

	const response = await fetch(
		`${process.env.XATA_URL}:main/tables/userDetails/data`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.XATA_API_KEY}`,
			},
			body,
		}
	);
	const data = await response.json();

	return {
		statusCode: 200,
		body: JSON.stringify(data),
	};
};
