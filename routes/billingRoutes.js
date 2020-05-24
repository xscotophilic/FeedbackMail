const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post(
        '/api/stripe',
        requireLogin,
        async (req, res) => {
            const charge = await stripe.charges.create({
                amount: 1000,
                currency: 'inr',
                description: 'RS 10 for 10 mails.',
                source: req.body.id,
            });
            req.user.credits += 10;
            const user = await req.user.save();
            res.send(user);
        }
    );
};