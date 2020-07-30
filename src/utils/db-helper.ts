const low = require('lowdb');

const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db/db.json');
const db = low(adapter);

interface User {
	name: string;
}

export function get(model: string): User {
	const user: User = db.get(model).value();
	return user;
}
