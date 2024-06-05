const { MercadoPagoConfig, Preference } = require('mercadopago');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.post('/test', async (req, res) => {
    const client = new MercadoPagoConfig({ accessToken: 'TEST-8001012963880387-060323-cdb26a9b2c52877f4a0ae4bc256d8912-1840600103'});
    
    const preference = new Preference(client);

    const body = {
        items: [
            {
            id: '1234',
            title: 'Camisa',
            quantity: 1,
            currency_id: 'BRL',
            unit_price: 90,
            },
        ]
    };


    await preference.create({body}).then((response)=>console.log(response));
})


app.listen(8080, ( )=>console.log('connected'))

