import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={15} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image, "media/")} />
      <CardBody>
        <Heading fontSize={"xl"} textAlign={"center"}>
          {game.name}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
