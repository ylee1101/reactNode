const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    // 그냥 /api/strip을 타입해서 들어올수있는 경우를 방지해서 만든 if statement
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};