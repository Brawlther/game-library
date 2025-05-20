import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={15} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"xl"} textAlign={"center"}>
          {game.name}
        </Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
