import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { userInProgressGames, userGameHistory } from "./interfaces";

mongoose.set({ debug: true, autoCreate: true})

const userInProgressGamesSchema = new Schema<userInProgressGames>({
    userId: { type: String, required: true, unique: true },
    inProgressGames: [{
        puzzle: { type: String, required: true, unique: true },
        currentTime: { type: Number, required: true },
        moves: [{
            moveNumber: {type: Number, required: true },
            row: { type: Number, required: true },
            column: { type: Number, required: true },
            value: { type: Number, required: true },
            moveTime: { type: Number, required: true }
        }],
        numHintsAskedFor: { type: Number, required: true },
        numWrongCellsPlayed: { type: Number, required: true },
        numCorrectCellsPlayed: { type: Number, required: true },
        numWrongCellsPlayedPerStrategy: {
            stratOne: { type: Number, required: true },
            stratTwo: { type: Number, required: true },
            stratThree: { type: Number, required: true }
        }
    }]
});

const userGameHistorySchema = new Schema<userGameHistory>({
    userId: { type: String, required: true, unique: true },
    gamesPlayed: [{
        puzzle: { type: String, required: true, unique: true },
        moves: [{
            moveNumber: {type: Number, required: true },
            row: { type: Number, required: true },
            column: { type: Number, required: true },
            value: { type: Number, required: true },
            moveTime: { type: Number, required: true }
        }],
        numTimesPlayed: { type: Number, required: true },
        initialSolveTime: { type: Number, required: true },
        fastestSolveTime: { type: Number, required: true },
        averageMoveTime: { type: Number, required: true },
        numHintsAskedFor: { type: Number, required: true },
        numWrongCellsPlayed: { type: Number, required: true },
        numCorrectCellsPlayed: { type: Number, required: true },
        numWrongCellsPlayedPerStrategy: {
            stratOne: { type: Number, required: true },
            stratTwo: { type: Number, required: true },
            stratThree: { type: Number, required: true }
        }
    }]
});


let UserInProgressGames = mongoose.model("UserInProgressGames", userInProgressGamesSchema, 'user_game_results');
let UserGameHistory = mongoose.model("UserGameHistory", userGameHistorySchema, 'user_game_results');

module.exports = { UserInProgressGames, UserGameHistory };