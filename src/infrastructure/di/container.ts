import { GetAllGames } from "@/src/application/use-cases/GetAllGames"
import { GetGameById } from "@/src/application/use-cases/GetGameById"
import { FreeToGameApiRepository } from "../http/freetogame/FreeToGameApiRepository"

const gameRepository = new FreeToGameApiRepository()

export const getAllGamesUseCase = new GetAllGames(gameRepository)
export const getGameByIdUseCase = new GetGameById(gameRepository)
