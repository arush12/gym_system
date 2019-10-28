const express = require('express');

//costom controller imports
// ========================

const auth = require('../controller/admin/auth');

// declaring routes
//  ==================

const router = express.Router();

// get routes

router.get('/login', auth.getAdminLogin);

router.get('/logout');

router.get('signup');

// post routes
// ============================

router.post('/login', auth.postAdminLogin);

module.exports = router;
