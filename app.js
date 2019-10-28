const path = require('path');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

// =======================
// router module

const admin = require('./routes/admin');

// costme module of routes
//  =====================================

const admin = require('./routes/admin');

const gym_admin = require('./routes/gym_admin');

const gym_staff = require('./routes/gym_staff');

// ==============================
// SettingUp Enginge

app.set('view engine', 'ejs');
app.set('views', 'views');

// =========================================
//  middleWare section from here

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// ==================================
// router section from here

app.use('/admin', admin);

app.use('gym_admin', gym_admin);

// ===========================================
// Listining the Server

app.listen(3000, 'localhost', () => {
  console.log('server is on the way');
});
