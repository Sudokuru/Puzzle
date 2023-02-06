/**
 * These are the mongoose schemas for the user_game_results collection
 * The two schemas currently in this collection are {@link userActiveGamesSchema} and {@link userGameStats}
 * //todo at some point would like to remove these schemas as we already handle input validation with express-validator
 * //todo and the error throwing with mongoose is inconsistent and hard to work with
 * @module DbGameResultsModel
 */

import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { userActiveGames, userGameStats } from "./interfaces";

// turns on debug mode so we can see results of successful requests
mongoose.set({ debug: true, autoCreate: true})

/**
 * This stores a user's paused game
 * This is a separate document so that we can easily delete paused games
 * Minimum needs to store game status and stats so that
 * the game can be resumed and the stats can be transferred at the end of the game
 */
const userActiveGamesSchema = new Schema<userActiveGames>({
    userID: { type: String, required: true, unique: false },
    puzzle: { type: String, required: true },
    currentTime: { type: Number, required: true },
    moves: [{
        puzzleCurrentState: { type: String, required: true, unique: false },
        puzzleCurrentNotesState: { type: String, required: true, unique: false }
        // moveTime: { type: Number, required: true }
    }],
    numHintsAskedFor: { type: Number, required: true },
    numWrongCellsPlayed: { type: Number, required: true },
    numWrongCellsPlayedPerStrategy: {
        NAKED_SINGLE: { type: Number, required: false },
        HIDDEN_SINGLE: { type: Number, required: false },
        NAKED_PAIR: { type: Number, required: false },
        NAKED_TRIPLET: { type: Number, required: false },
        NAKED_QUADRUPLET: { type: Number, required: false },
        NAKED_QUINTUPLET: { type: Number, required: false },
        NAKED_SEXTUPLET: { type: Number, required: false },
        NAKED_SEPTUPLET: { type: Number, required: false },
        NAKED_OCTUPLET: { type: Number, required: false },
        HIDDEN_PAIR: { type: Number, required: false },
        HIDDEN_TRIPLET: { type: Number, required: false },
        HIDDEN_QUADRUPLET: { type: Number, required: false },
        HIDDEN_QUINTUPLET: { type: Number, required: false },
        HIDDEN_SEXTUPLET: { type: Number, required: false },
        HIDDEN_SEPTUPLET: { type: Number, required: false },
        HIDDEN_OCTUPLET: { type: Number, required: false },
        POINTING_PAIR: { type: Number, required: false },
        POINTING_TRIPLET: { type: Number, required: false },
        BOX_LINE_REDUCTION: { type: Number, required: false },
        X_WING: { type: Number, required: false },
        SWORDFISH: { type: Number, required: false },
        SINGLES_CHAINING: { type: Number, required: false }
    }
});

/**
 * This stores a user's game history and stats for each month
 * This is in the same collection as it will likely be updated immediately after a game ends
 * There could be a toggle in user preferences to disable/enable saving of games
 * User's total stats can be stored in a separate object or retrieved as needed.
 */
const userGameStatsSchema = new Schema<userGameStats>({
    userID: { type: String, required: true, unique: false },
    dateRange: { type: String, required: true }, // we will be storing users stats in batches of months.
    gamesPlayed: [{
        puzzle: { type: String, required: true },
        moves: [{
            moveNumber: {type: Number, required: true },
            notesState: {type: String, required: true },
            row: { type: Number, required: true },
            column: { type: Number, required: true },
            value: { type: Number, required: true },
            moveTime: { type: Number, required: true }
        }],
        numTimesPlayed: { type: Number, required: true, default: 1 },
        initialSolveTime: { type: Number, required: true },
        fastestSolveTime: { type: Number, required: true },
        averageMoveTime: { type: Number, required: true },
        numHintsAskedFor: { type: Number, required: true },
        numWrongCellsPlayed: { type: Number, required: true },
        numWrongCellsPlayedPerStrategy: {
            NAKED_SINGLE: { type: Number, required: false },
            HIDDEN_SINGLE: { type: Number, required: false },
            NAKED_PAIR: { type: Number, required: false },
            NAKED_TRIPLET: { type: Number, required: false },
            NAKED_QUADRUPLET: { type: Number, required: false },
            NAKED_QUINTUPLET: { type: Number, required: false },
            NAKED_SEXTUPLET: { type: Number, required: false },
            NAKED_SEPTUPLET: { type: Number, required: false },
            NAKED_OCTUPLET: { type: Number, required: false },
            HIDDEN_PAIR: { type: Number, required: false },
            HIDDEN_TRIPLET: { type: Number, required: false },
            HIDDEN_QUADRUPLET: { type: Number, required: false },
            HIDDEN_QUINTUPLET: { type: Number, required: false },
            HIDDEN_SEXTUPLET: { type: Number, required: false },
            HIDDEN_SEPTUPLET: { type: Number, required: false },
            HIDDEN_OCTUPLET: { type: Number, required: false },
            POINTING_PAIR: { type: Number, required: false },
            POINTING_TRIPLET: { type: Number, required: false },
            BOX_LINE_REDUCTION: { type: Number, required: false },
            X_WING: { type: Number, required: false },
            SWORDFISH: { type: Number, required: false },
            SINGLES_CHAINING: { type: Number, required: false }
        }
    }],
    averageSolveTime: { type: Number, required: true },
    fastestSolveTime: { type: Number, required: true },
    numHintsAskedFor: { type: Number, required: true },
    numWrongCellsPlayed: { type: Number, required: true },
    numGamesPlayed: { type: Number, required: true, defualt: 1 },
    numGamedFailed: { type: Number, required: true },
    numWrongCellsPlayedPerStrategy: {
        NAKED_SINGLE: { type: Number, required: false },
        HIDDEN_SINGLE: { type: Number, required: false },
        NAKED_PAIR: { type: Number, required: false },
        NAKED_TRIPLET: { type: Number, required: false },
        NAKED_QUADRUPLET: { type: Number, required: false },
        NAKED_QUINTUPLET: { type: Number, required: false },
        NAKED_SEXTUPLET: { type: Number, required: false },
        NAKED_SEPTUPLET: { type: Number, required: false },
        NAKED_OCTUPLET: { type: Number, required: false },
        HIDDEN_PAIR: { type: Number, required: false },
        HIDDEN_TRIPLET: { type: Number, required: false },
        HIDDEN_QUADRUPLET: { type: Number, required: false },
        HIDDEN_QUINTUPLET: { type: Number, required: false },
        HIDDEN_SEXTUPLET: { type: Number, required: false },
        HIDDEN_SEPTUPLET: { type: Number, required: false },
        HIDDEN_OCTUPLET: { type: Number, required: false },
        POINTING_PAIR: { type: Number, required: false },
        POINTING_TRIPLET: { type: Number, required: false },
        BOX_LINE_REDUCTION: { type: Number, required: false },
        X_WING: { type: Number, required: false },
        SWORDFISH: { type: Number, required: false },
        SINGLES_CHAINING: { type: Number, required: false }
    }
});


let UserPausedGames = mongoose.model("UserPausedGames", userActiveGamesSchema, 'user_game_info');
let UserGameHistory = mongoose.model("UserGameHistory", userGameStatsSchema, 'user_game_info');

export = { UserPausedGames, UserGameHistory };