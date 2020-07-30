export const low = require('lowdb');

export const FileSync = require('lowdb/adapters/FileSync');

export const adapter = new FileSync('db/db.json');
export const db = low(adapter);

// Set some defaults (required if your JSON file is empty)

async function seed() {
	db.defaults({ user: {} })
		.write()

	db.set('user.name', 'Taylor')
		.write()
}

seed();
