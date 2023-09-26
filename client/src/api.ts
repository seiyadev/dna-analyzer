import axios from "axios";

export const getStats = async () => {
  try {
    const stats = axios.get("https://dna-analyzer-api.fly.dev/stats");
    return (await stats).data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
