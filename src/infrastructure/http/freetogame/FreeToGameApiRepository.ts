import { Game } from "@/src/domain/entities/Game"
import { GameRepository } from "@/src/domain/repositories/GameRepository"
import { FREE_TO_GAME_BASE_URL } from "@/src/shared/config/api"
import { GameDto } from "./dto/GameDto"
import { mapGameDtoToEntity } from "./mappers/gameMapper"

export class FreeToGameApiRepository implements GameRepository {
  async findAll(): Promise<Game[]> {
    try {
      const response = await fetch(`${FREE_TO_GAME_BASE_URL}/games`)
      if (!response.ok) {
        throw new Error("Failed to fetch games")
      }

      const data: GameDto[] = await response.json()
      return data.map(mapGameDtoToEntity)
    } catch (error) {
      throw new Error(`Unable to load games. ${error}`)
    }
  }
  async findById(id: number): Promise<Game | null> {
    try {
      const response = await fetch(`${FREE_TO_GAME_BASE_URL}/game?id=${id}`)
      if (response.status === 404) {
        return null
      }
      if (!response.ok) {
        throw new Error("Failed to fetch game")
      }

      const data: GameDto = await response.json()
      return mapGameDtoToEntity(data)
    } catch (error) {
      throw new Error(`Unable to load games. ${error}`)
    }
  }
}
