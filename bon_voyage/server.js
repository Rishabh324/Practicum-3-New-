const app = require('./app');

const port = 4040;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});