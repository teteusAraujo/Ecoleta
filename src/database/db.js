const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT

        );
    
    `)

    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                sate,
                city,
                items

            ) VALUES (?,?,?,?,?,?,?);
    
    `

})