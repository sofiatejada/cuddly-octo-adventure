require('dotenv').config();
//comment this out because we're not going to use a SQL database
// require('./lib/client').connect();

const app = require('./lib/app');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
