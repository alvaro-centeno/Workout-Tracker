const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const clientRoutes = require('./Develop/routes/client-routes');
app.use(clientRoutes);

const apiRoutes = require('./Develop/routes/workout-routes');
app.use(apiRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
