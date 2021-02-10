const User = require('../models/User');

module.exports = {
  async store(req, res) { //async
    return res.json(user);

    try {

      const { name, email } = req.body;
      if (typeof name === "undefined" || typeof email === "undefined") return res.json({ error: "nome e/ou email undefined" });
      return res.json({ sucesso: { name, email });
    } cacth(err) {
      if (err) console.log(err);
      return res.json({ error: 1 });
    };
  }


};

