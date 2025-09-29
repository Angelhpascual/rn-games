import { Game } from "./../entities/Game"

export interface GameRepository {
  findAll(): Promise<Game[]>
  findById(id: number): Promise<Game | null>
}
