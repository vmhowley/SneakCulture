const express = require('express');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Inicializar Puppeteer con Stealth Plugin
puppeteer.use(StealthPlugin());

const app = express();
app.use(cors());
app.use(express.json());

let scrappingStatus = 'idle';  // Estado para la UI

// Ruta para iniciar el scrapping
app.post('/start-scrapper', async (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ message: 'URL es requerida.' });
    }

    scrappingStatus = 'running';

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        const soldOutSelector = '.sold-out-class'; // Cambiar el selector
        const isAvailable = await page.$(soldOutSelector) === null;

        if (isAvailable) {
            scrappingStatus = 'available';
            console.log('El producto está disponible');
            await sendNotificationEmail();
        } else {
            scrappingStatus = 'sold out';
            console.log('El producto sigue agotado.');
        }
    } catch (error) {
        console.error('Error en el scrapper:', error);
        scrappingStatus = 'error';
    } finally {
        await browser.close();
    }

    return res.json({ status: scrappingStatus });
});

// Ruta para obtener el estado del scrapper
app.get('/status', (req, res) => {
    return res.json({ status: scrappingStatus });
});

// Enviar correo de notificación
async function sendNotificationEmail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'TU_EMAIL@gmail.com',
            pass: 'TU_CONTRASEÑA',
        },
    });

    const mailOptions = {
        from: 'TU_EMAIL@gmail.com',
        to: 'DESTINATARIO_EMAIL@gmail.com',
        subject: 'Producto disponible',
        text: 'El producto que estabas esperando ya está disponible!',
    };

    await transporter.sendMail(mailOptions);
    console.log('Correo enviado.');
}

// Iniciar el servidor
app.listen(4000, () => {
    console.log('Backend corriendo en el puerto 4000');
});
