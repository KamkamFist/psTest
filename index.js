const pg = require('pg');

const client = new pg.Client({
    user: 'user3',
    host: '192.168.0.207',
    database: 'user3_db',
    password: '3OQ3UV57',
    port: 5432,
});

const getFromDb = async () => {
    const result = await client.query('SELECT * FROM grades');
    console.log(result.rows);
    console.table(result.rows);
}

const insertToDb = async (student_id, course_id, grade) => {
    const result = await client.query(
        'INSERT INTO grades(student_id, course_id, grade) VALUES($1, $2, $3)', 
        [student_id, course_id, grade] 
    );
    
    console.log(result);
}

const main = async () => {
    await client.connect();
    await insertToDb(1, 1, 5);
    await getFromDb();
    await client.end();
}

main();