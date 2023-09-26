const router = require("express").Router();
const mongoose = require("mongoose");
const { hasMutation, saveDna } = require("../controllers/mutation.controller");

router.post("/", (req, res) => {
  const dna = req.body.dna;
  if (!dna) {
    res.status(400).send({
      error: "A body with a dna property is required.",
    });
  }
  if (
    !Array.isArray(dna) ||
    dna.length < 4 ||
    dna.length !== dna[0].length ||
    !dna.every((row) => /^[ATCG]+$/.test(row))
  ) {
    res.status(400).json({
      error:
        "An array of strings is required with a minimum length of 4 and the same length of each string in the array and only the letters A, T, C, G are allowed.",
    });
  }
  if (hasMutation(dna)) {
    try {
      saveDna(dna, true);
      res.status(200).send({
        message: "Has mutation",
      });
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  } else {
    res.status(403).send({
      message: "Does not have mutation",
    });
  }
});

module.exports = router;
