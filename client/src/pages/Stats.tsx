import { useEffect, useState } from "react";
import { Spinner, Text } from "@chakra-ui/react";
import { getStats } from "../api";
import { StatsState } from "../interfaces/stats.interface";

function Stats() {
  const [stats, setStats] = useState<StatsState>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStats().then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Text fontSize="xl">There are {stats?.count_mutations} mutations</Text>
      <Text fontSize="lg">
        There are {stats?.count_no_mutations} no mutations
      </Text>
      <Text fontSize="lg">The ratio is {stats?.ratio.toFixed(2)}</Text>
    </div>
  );
}

export default Stats;
