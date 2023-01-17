/**
 * These are the mongoose schemas for the user_game_results collection
 * The two schemas currently in this collection are {@link userPausedGamesSchema} and {@link userGameHistory}
 * //todo at some point would like to remove these schemas as we already handle input validation with express-validator
 * //todo and the error throwing with mongoose is inconsistent and hard to work with
 * @module DbGameResultsModel
 */

import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { userPausedGames, userGameHistory } from "./interfaces";

// turns on debug mode so we can see results of successful requests
mongoose.set({ debug: true, autoCreate: true})

/**
 * This stores a user's paused game
 * This is a separate document so that we can easily delete paused games
 * Minimum needs to store game status and stats so that
 * the game can be resumed and the stats can be transferred at the end of the game
 */
const userPausedGamesSchema = new Schema<userPausedGames>({
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

/**
 * This stores a user's game history
 * This is in the same collection as it will likely be updated immediately after a game ends
 * There could be a toggle in user preferences to disable/enable saving of games
 */
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


let UserPausedGames = mongoose.model("UserPausedGames", userPausedGamesSchema, 'user_game_results');
let UserGameHistory = mongoose.model("UserGameHistory", userGameHistorySchema, 'user_game_results');

export = { UserPausedGames, UserGameHistory };