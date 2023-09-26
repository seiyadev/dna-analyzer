const Mutation = require("../models/Mutation");

async function getStats() {
  try {
    const mutations = await Mutation.find();
    const countMutations = mutations.filter(
      (mutation) => mutation.hasMutation
    ).length;
    const countNoMutations = mutations.filter(
      (mutation) => !mutation.hasMutation
    ).length;
    const ratio =
      countNoMutations === 0
        ? countMutations
        : countMutations / countNoMutations;
    console.log(countMutations, countNoMutations, ratio);
    return {
      count_mutations: countMutations,
      count_no_mutations: countNoMutations,
      ratio,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getStats,
};
