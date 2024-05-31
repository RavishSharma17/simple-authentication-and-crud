const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
const authRoutes = require('../routes/auth');
const productRoutes = require('../routes/product');
const errorHandler = require('../middleware/errorHandler');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// db.sequelize.sync()
//     .then(() => {
//         console.log('Database synchronized');
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
