const pg = require('pg');

const client = new pg.Client({
    user: 'user3',
    host: '192.168.0.207',
    database: 'user3_db',
    password: '3OQ3UV57',
    port: 5432,
});

const getFromDb = async () => {
    await client.connect();

    const result = await client.query('SELECT * FROM grades');
    console.table(result.rows);
};

getFromDb();

const insertToDb = async (student_id, course_id, grade) => {
        const insertQuery = 'INSERT INTO grades (student_id, course_id, grade) VALUES ($1, $2, $3) RETURNING *';
        const values = [student_id, course_id, grade];
        const result = await client.query(insertQuery, values); 
        console.table(result.rows); 

        
}

insertToDb(1, 1, 5);
