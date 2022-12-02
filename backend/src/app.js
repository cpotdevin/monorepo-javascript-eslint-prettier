import express from 'express';
import { books } from '@monorepo-javascript-eslint-prettier/constants/src/books.js';

const app = express();
const PORT = 3000;

app.get('/books', (req, res) => {
  res.send(books);
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT,
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
