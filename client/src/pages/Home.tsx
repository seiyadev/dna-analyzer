import { Text } from "@chakra-ui/react";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Text fontSize="xl" fontWeight={600}>
        Welcome to the frontend of DNA Analyzer.
      </Text>
      <Text fontSize="lg" align={"center"}>
        Here only you can see the stats of the mutations.
        <br />
        To verify a mutation, please make a POST request to the endpoint
        https://dna-analyzer-api.fly.dev/mutation with a body like this:
      </Text>
      <Text fontSize="md" color="#319795" fontWeight={600}>
        {"{"}
        <br />
        "dna":&nbsp;["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
        <br />
        {"}"}
      </Text>
    </div>
  );
}

export default Home;
