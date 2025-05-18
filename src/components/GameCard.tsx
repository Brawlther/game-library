import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";

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
      </CardBody>
    </Card>
  );
};

export default GameCard;
