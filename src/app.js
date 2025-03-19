const express = require('express');
const morgan = require('morgan');
const path = require('path');
const userRouter = require('./routers/userRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'views')));

app.use('/api/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
