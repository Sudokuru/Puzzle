import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { Puzzle } from "./interfaces";


mongoose.set({ debug: true, autoCreate: true})

const PuzzleModelSchema = new Schema<Puzzle>({
    puzzle: { type: String, required: true, unique: true },
    puzzleSolution: { type: String, required: true },
    strategyCount: {
        stratOne: { type: Number, required: true },
        stratTwo: { type: Number, required: true },
        stratThree: { type: Number, required: true }
    },
    fastestSolveTime: { type: Number, required: true, default: 0 },
    averageSolveTime: { type: Number, required: true, default: 0 },
    numUsersPlayed: { type: Number, required: true, default: 0 },
    numTimesPlayed: { type: Number, required: true, default: 0 },
    trulyUnique: { type: Boolean, required: true, default: false },
    drillStrategy: { type: String, enum: ['stratOne','sratTwo','stratThree','stratFour','stratFive','stratSix','stratSeven'], required: false },
    calendarDate: { type: Date, required: false },
    imageUrl: { type: String, required: false },
    description: { type: String, required: false }
});

module.exports = mongoose.model("PuzzleModel", PuzzleModelSchema);
