import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!!!' });
});

const port = 3333;
app.listen(3333, () => {
  return console.log(`Server running on port ${port}`);
});
