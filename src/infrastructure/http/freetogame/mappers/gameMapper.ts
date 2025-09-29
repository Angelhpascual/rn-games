import { Game } from "@/src/domain/entities/Game"
import { GameDto } from "../dto/GameDto"

export const mapGameDtoToEntity = (dto: GameDto): Game => ({
  id: dto.id,
  title: dto.title,
  thumbnail: dto.thumbnail,
  shortDescription: dto.short_description,
  gameUrl: dto.game_url,
  genre: dto.genre,
  platform: dto.platform,
  publisher: dto.publisher,
  developer: dto.developer,
  releaseDate: dto.release_date,
  freetogameProfileUrl: dto.freetogame_profile_url,
})
