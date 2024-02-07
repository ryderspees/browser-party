const gameRoutes = require('./gameRoutes');
const userRoutes = require('./userRoutes');

module.exports = (app) => {
    app.use('/api/game', gameRoutes);
    app.use('/api/user', userRoutes);
    // Add other route files as needed
};
