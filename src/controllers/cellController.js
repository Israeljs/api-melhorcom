const crypto = require("crypto");
const { cell } = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      const { model, price, brand, color } = req.body;

      const code = crypto.randomBytes(4).toString("HEX");

      const result = await cell.create({
        code,
        model,
        price,
        brand,
        color,   
      });
      return res.json(result);

    } catch (error) {
      res.sendStatus(400);
    }
   }
//   findAll: async (req, res) => {
//     try {
//       const result = await cell.findAll({});
//       res.json(result);
//     } catch (error) {
//       sendStatus(400);
//     }
//   },
//   update: async (req, res) => {
//     try {
//       const result = await db.cell.update(req.body, {
//         where: { id: req.params.id },
//       });
//       res.sendStatus(204);
//     } catch (error) {
//       res.sendStatus(400);
//     }
//   },
//   deconste: async (req, res) => {
//     try {
//       const result = await db.cell.destroy({ where: { id: req.params.id } });
//       res.sendStatus(204);
//     } catch (error) {
//       res.sendStatus(400);
//     }
//   },
//   findByPk: async (req, res) => {
//     try {
//       const result = await db.cell.findByPk(req.params.id);
//       res.json(result);
//     } catch (error) {
//       res.sendStatus(400);
//     }
//   },
};
