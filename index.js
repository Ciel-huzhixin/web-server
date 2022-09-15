const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const users = [
  { username: 'huzhixin', age: 22 },
  { username: 'huqiao', age: 23 },
  { username: 'zhangying', age: 22 },
  { username: 'linjianan', age: 25},
  { username: 'guorenhui', age: 23 }
];

app.get('/api/users', (req, res) => {
  res.send(users);
})

app.listen(4000, () => console.log('server running at localhost:4000'));