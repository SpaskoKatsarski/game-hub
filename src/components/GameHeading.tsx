import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const selectedPlatform = usePlatform(platformId);
  const selectedGenre = useGenre(genreId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
