import { Game } from "@/src/domain/entities/Game"
import { GameRepository } from "@/src/domain/repositories/GameRepository"

export class GetAllGames {
  constructor(private readonly gameRepository: GameRepository) {}

  async execute(): Promise<Game[]> {
    return this.gameRepository.findAll()
  }
}
