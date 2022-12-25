import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { UserInfo, UserGameInfo, UserGameSearchInfo } from "./interfaces";

mongoose.set({ debug: true, autoCreate: true})

const UserInfoSchema = new Schema<UserInfo>({
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

const UserGameInfoSchema = new Schema<UserGameInfo>({
    userId: { type: String, required: true, unique: true },
    gameStatistics: {
        averageSolveTime: { type: Number, required: true },
        fastestSolveTime: { type: Number, required: true },
        numHintsAskedFor: { type: Number, required: true },
        numWrongCellsPlayed: { type: Number, required: true },
        numCorrectCellsPlayed: { type: Number, required: true },
        numGamesPlayed: { type: Number, required: true },
        numWrongCellsPlayedPerStrategy: {
            stratOne: { type: Number, required: true },
            stratTwo: { type: Number, required: true },
            stratThree: { type: Number, required: true }
        }
    }
});

const UserGameSearchInfoSchema = new Schema<UserGameSearchInfo>({
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

let UserInfo = mongoose.model("UserInfo", UserInfoSchema, 'userinfo');
let UserGameInfo = mongoose.model("UserGameInfo", UserGameInfoSchema, 'userinfo');
let UserGameSearchInfo = mongoose.model("UserGameSearchInfo", UserGameSearchInfoSchema, 'userinfo');

module.exports = { UserInfo, UserGameInfo, UserGameSearchInfo };