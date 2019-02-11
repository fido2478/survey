const express = require('express');
// we don't need const passportConfig because of no return
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
