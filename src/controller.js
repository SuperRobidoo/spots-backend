import { Client } from 'pg';

export async function insertQuestion(question) {
  const client = new Client()
  
  // 1. Connect to db
  await client.connect()

  // 2. Create query from input object
  const query = {
    text: 'INSERT INTO questions VALUES',
    values: [question.id, question.set, question.type, question.title, question.subtitle],
  }

  // 3. Insert/update object
  const res = await client.query(query)
  
  // 4. Handle response
  await client.end()

  return res
}
