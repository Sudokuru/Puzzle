import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { UserProfile, UserGameStatistics, UserGameSearchFilters } from "./interfaces";

mongoose.set({ debug: true, autoCreate: true})

const UserProfileSchema = new Schema<UserProfile>({
    userId: { type: String, required: true, unique: true },
    userEmail: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    userPreferences: {
        savePuzzleData: { type: Boolean, required: true, default: true },
        theme: { type: String, enum: ['light', 'dark', 'auto'], required: true, default: 'auto' },
        gamePreferences: {
            notifyOnWrongCell: { type: Boolean, required: true, default: true },
            highlightAllSelectedNumber: { type: Boolean, required: true, default: true },
            highlightSelectedBox: { type: Boolean, required: true, default: true },
            highlightSelectedRow: { type: Boolean, required: true, default: true },
            playMusic: { type: Boolean, required: true, default: true },
            musicIntensify: { type: Boolean, required: true, default: true }
        }
    },
});

const UserGameStatisticsSchema = new Schema<UserGameStatistics>({
    userId: { type: String, required: true, unique: true },
    gameStatistics: {
        averageSolveTime: { type: Number, required: true, default: 0 },
        fastestSolveTime: { type: Number, required: true, defualt: 0 },
        numHintsAskedFor: { type: Number, required: true, defualt: 0 },
        numWrongCellsPlayed: { type: Number, required: true, defualt: 0 },
        numCorrectCellsPlayed: { type: Number, required: true, defualt: 0 },
        numGamesPlayed: { type: Number, required: true, defualt: 0 },
        //numGamesFailed
        numWrongCellsPlayedPerStrategy: {
            stratOne: { type: Number, required: true, defualt: 0 },
            stratTwo: { type: Number, required: true, defualt: 0 },
            stratThree: { type: Number, required: true, defualt: 0 }
        }
    }
});

const UserGameSearchFiltersSchema = new Schema<UserGameSearchFilters>({
    userId: { type: String, required: true, unique: true },
    gameSearchPreferences: {
        defaultSearchType: {type: String, enum: ['auto', 'manual', 'random'], required: true, default: 'auto' },
        difficulty: {
            low: { type: Number, required: true, default: 0 },
            high: { type: Number, required: true, default: 0 }
        },
        strategyTypes: {
            stratOne: { type: Boolean, required: true, default: true },
            stratTwo: { type: Boolean, required: true, default: true },
            stratThree: { type: Boolean, required: true, default: true }
        }
    }
});

let UserInfo = mongoose.model("UserInfo", UserProfileSchema, 'user_info');
let UserGameInfo = mongoose.model("UserGameInfo", UserGameStatisticsSchema, 'user_info');
let UserGameSearchInfo = mongoose.model("UserGameSearchInfo", UserGameSearchFiltersSchema, 'user_info');

module.exports = { UserInfo, UserGameInfo, UserGameSearchInfo };