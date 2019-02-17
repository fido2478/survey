const keys = require('../config/keys');
// npm install --save stripe
const stripe = require('stripe')(keys.stripeSecretKey);
// check whether a user is logged-in or not
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // https://www.npmjs.com/package/stripe
    // https://stripe.com/docs/api/node#charges
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // console.log(charge);
    req.user.credits += 5;
    // save it to the mongoDB and
    // get a copy of the user
    const user = await req.user.save();
    // send back the user
    res.send(user);
  });
};
