/**
 * This is the mongoose schemas for the puzzle collection
 * The schema currently in the collection is {@link PuzzleModelSchema}
 * //todo at some point would like to remove these schemas as we already handle input validation with express-validator
 * //todo and the error throwing with mongoose is inconsistent and hard to work with
 * @module DbPuzzleModel
 */

import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { Puzzle } from "./interfaces";

mongoose.set({ debug: true, autoCreate: true})

/**
 * This stores a generated puzzle
 * We had some debate on what the strategies field should store
 * Whether it should store array of all required strategies or just mostDifficultStrategy and how that would work
 * Have set schema to throw error upon violation but this is inconsistent
 */
const PuzzleModelSchema = new Schema<Puzzle>({
    puzzle: { type: String, required: true, unique: true },
    puzzleSolution: { type: String, required: true },
    strategies: [{ type: String, required: true }],
    difficulty: { type: Number, required: true },
    fastestSolveTime: { type: Number, required: true, default: 0 },
    averageSolveTime: { type: Number, required: true, default: 0 },
    numUsersPlayed: { type: Number, required: true, default: 0 },
    numTimesPlayed: { type: Number, required: true, default: 0 },
    trulyUnique: { type: Boolean, required: true, default: false },
    drillStrategies: [{ type: String, required: true }],
    calendarDate: { type: Date, required: false },
    imageUrl: { type: String, required: false },
    description: { type: String, required: false }
});

export = mongoose.model("PuzzleModel", PuzzleModelSchema, 'puzzle', );
