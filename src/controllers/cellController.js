const crypto = require("crypto");
const { cell } = require("../models");

module.exports = {

  create: async (req, res) => {
    try {
      const { model, price, brand, start_date, end_date, color } = req.body;

      const code = crypto.randomBytes(4).toString("HEX");

      const result = await cell.create({
        code,
        model,
        price,
        brand,
        start_date,
        end_date,
        color,
      });
      return res.json(result);

    } catch (error) {
      res.sendStatus(400);
    }
  },
  index: async (req, res) => {
    try {
      const result = await cell.findAll({
        attributes: [
          'code',
          'model',
          'price',
          'brand',
          'start_date',
          'end_date',
          'color'
        ]
      });
      res.json(result);
    } catch (error) {
      res.sendStatus(400);
    }
  },
  show: async (req, res) => {
    try {
      const {code} = req.params;

      let result3 = await cell.sequelize.query(
        'SELECT code, model, price, brand, start_date, end_date, color FROM cells WHERE code = :code ',
      { replacements: { code: code }, type: cell.sequelize.QueryTypes.SELECT }
      )

      res.json(result3);

    } catch (error) {
      console.log(error)
      res.sendStatus(400);
    }
  },
  update: async (req, res) => {
    try {
      const { model, price, brand, start_date, end_date, color } = req.body;
      let result = await cell.update(
        {
          model,
          price,
          brand,
          start_date,
          end_date,
          color,
        },
        { where: { code: req.params.code } })
      //let result = await cell.update(req.body,{where: {id: req.params.id}})
      //res.sendStatus(204)
      res.json(result);

    } catch (error) {
      res.sendStatus(400)

    }
  },
    delete: async (req, res) => {
      try {
        const {code} = req.params
        const result = await cell.destroy({ where: { code: code } });
        res.send(`Produto ${code} removido com sucesso`)
        //res.sendStatus(204);
      } catch (error) {
        res.sendStatus(400);
      }
    }

    /* async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')//apenas essa coluna
      .first();

      //se for diferente do id logado
    if (incident.ong_id !== ong_id) { 
      return res.status(401).json({ error: "Operation not permitted" });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return res.status(204).send();
  } */
  
};
