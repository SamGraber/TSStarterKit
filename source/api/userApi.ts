import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(): Promise<any> {
	return get('users');
}

export function deleteUser(id): Promise<void> {
	return del(`users/${id}`);
}

function get(url): Promise<any> {
	return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url): Promise<void> {
	const request = new Request(baseUrl + url, {
		method: 'DELETE',
	});

	return fetch(request).then(onSuccess, onError);
}

function onSuccess(response: Response): any {
	return response.json();
}

function onError(error: any): void {
	console.log(error); // eslint-disable-line no-console
}
