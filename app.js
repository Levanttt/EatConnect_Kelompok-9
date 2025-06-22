const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    // Data untuk statistik (bisa dari database)
    const stats = {
        porsiMakanan: 1750,
        partnership: 59,
        penerimaBantuan: 27
    };
    
    res.render('pages/index', { 
        title: 'EatConnect - Berbagi Makanan Berbagi Kebahagiaan',
        stats: stats
    });
});

// Route untuk halaman lainnya
app.get('/beranda', (req, res) => {
    res.redirect('/');
});

app.get('/cara-kerja', (req, res) => {
    res.render('pages/cara-kerja', { title: 'Cara Kerja - EatConnect' });
});

app.get('/edukasi', (req, res) => {
    res.render('pages/edukasi', { title: 'Edukasi - EatConnect' });
});

app.get('/tentang', (req, res) => {
    res.render('pages/tentang', { title: 'Tentang - EatConnect' });
});

app.get('/bergabung', (req, res) => {
    res.render('pages/bergabung', { title: 'Bergabung - EatConnect' });
});

app.get('/mulai-berdonasi', (req, res) => {
    res.render('pages/mulai-berdonasi', { title: 'Mulai Berdonasi - EatConnect' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('pages/404', { title: '404 - Halaman Tidak Ditemukan' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/500', { title: '500 - Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;