import { Game } from "@/src/domain/entities/Game"
import { GameRepository } from "@/src/domain/repositories/GameRepository"

export class GetGameById {
  constructor(private readonly gameRepository: GameRepository) {}

  async execute(id: number): Promise<Game | null> {
    return this.gameRepository.findById(id)
  }
}
