const { getStats } = require("../controllers/stats.controller");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const stats = await getStats();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

module.exports = router;
