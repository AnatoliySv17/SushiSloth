const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51PHresLYzooVbUdA0v9ONTV43gpK7nNDQwMLlqjHuwiBZBb3nQNZnFgCcIgqGGxJsLT2wpR3syvdx1HXCYoML85600tOlgtfl2'); // Замініть на ваш секретний ключ з Dashboard Stripe

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/charge', async (req, res) => {
    try {
        const { stripeToken } = req.body;
        const charge = await stripe.charges.create({
            amount: 1000, // сума в центах
            currency: 'usd',
            source: stripeToken,
            description: 'Example charge'
        });
        res.send({ success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
