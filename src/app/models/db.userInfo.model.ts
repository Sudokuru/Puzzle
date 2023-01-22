/**
 * This is the mongoose schemas for the puzzle collection
 * The schemas currently in the collection are {@link UserProfileSchema},
 * {@link UserGameStatisticsSchema}, and {@link UserGameSearchFiltersSchema}
 * //todo at some point would like to remove these schemas as we already handle input validation with express-validator
 * //todo and the error throwing with mongoose is inconsistent and hard to work with
 */

import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { UserProfile, UserGameSearchFilters } from "./interfaces";

mongoose.set({ debug: true, autoCreate: true})

/**
 * This schema stores the user profile
 * We may decide to remove userEmail and rely on Auth0 to store that for us
 * All preferences have default values which allows us to create this
 * for the user without any user input
 * We only need to create this when they open up the preferences menu
 * @module DbUserInfoModel
 */
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
        },
    },
});

/**
 * This schema is saves settings for the user to search for new games with
 * By default the game search will go based on the player's learned strategies
 * Most likely we will force user to learn strategies in a set order, going out of order may be stretch goal
 * //todo change strategyTypes to strategies and change to string array
 * //todo update so can set strategiesToExclude and strategiesToInclude as well as adding strategiesLearned
 */
const UserGameSearchFiltersSchema = new Schema<UserGameSearchFilters>({
    userId: { type: String, required: true, unique: true },
    gameSearchPreferences: {
        defaultSearchType: {type: String, enum: ['auto', 'manual', 'random'], required: true, default: 'auto' },
        difficulty: {
            low: { type: Number, required: true, default: 0 },
            high: { type: Number, required: true, default: 0 }
        },
        strategyTypes: {
            stratOne: {type: Boolean, required: true, default: true},
            stratTwo: {type: Boolean, required: true, default: true},
            stratThree: {type: Boolean, required: true, default: true}
        }
        //strategiesLearned: strategies, // this would store array of strategies learned by the player
    }
});

let UserInfo = mongoose.model("UserInfo", UserProfileSchema, 'user_info');
let UserGameSearchInfo = mongoose.model("UserGameSearchInfo", UserGameSearchFiltersSchema, 'user_info');

export = { UserInfo, UserGameSearchInfo };