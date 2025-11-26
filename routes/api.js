const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controller/komikController');
const upload = multer({ storage: multer.memoryStorage() });


router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.post('/komik', upload.single('image'), komikController.createKomik);
router.put('/komik/:id', upload.single('image'), komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;