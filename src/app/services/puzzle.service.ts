/**
 * This is the puzzle service file
 * This file takes input from the controller and directs it to the db.service file
 * The five functions are {@link puzzleCreateService}, {@link puzzleSearchService},
 * {@link puzzleUpdateService}, {@link puzzleRemoveService}, and {@link filterInputQuery}
 * The main purpose of this service file is to perform the 'business' logic
 * Any errors will be caught by our try/catch block in our controller
 * @module
 */

import {CustomError, CustomErrorEnum} from "../models/error.model";

const dataBase = require ('./db.service');
const PuzzleModel = require("../models/db.puzzle.model");

/**
 * This function takes the JSON puzzles and sends them to the upload function
 * There is no need for any additional logic here
 * @param puzzles This is an array of JSON puzzles
 */
async function puzzleCreateService(puzzles) {
    return await dataBase.queryUpload(puzzles, PuzzleModel);
}

/**
 * This function takes in the input query and throws and error if no puzzles
 * are found to match the query
 * This function calls a helper function to create the inputQuery for the dataBase function
 * @param puzzles this is a JSON object that stores the input query
 */
async function puzzleSearchService(puzzles) {

    let count:number = 0;
    let random:boolean = false;

    if ('count' in puzzles){
        count = puzzles.count;
        delete puzzles.count;
    }

    if ('random' in puzzles){
        random = puzzles.random;
        delete puzzles.random;
    }




    let res = await dataBase.querySearchAND(filterInputQuery(puzzles), PuzzleModel, count, random);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

/**
 * This function takes in bodyData and queryData and updates all puzzles
 * that match the queryData with the bodyData
 * This function calls a helper function to create the inputQuery for the database function
 * @param bodyData this stores a JSON object with values to be updated
 * @param queryData this stores a JSON object with values used to retrieve puzzles to be updated
 */
async function puzzleUpdateService(bodyData, queryData) {
    return await dataBase.queryUpdate(filterInputQuery(queryData), bodyData, PuzzleModel);
}

/**
 * This function takes in the input query and deletes any puzzles that match the query
 * We do not throw an error here to stay aligned with standard practice.
 * A delete request is successful even if the object did not exist.
 * @param puzzles this stores a JSON object that stores the query
 */
async function puzzleRemoveService(puzzles) {
    return await dataBase.queryDeleteAND(filterInputQuery(puzzles), PuzzleModel);
}

/**
 * This function is a helper function that ensures we
 * are using the correct logic for locating puzzles
 * @param puzzles this is a JSON object that stores our raw query
 */
function filterInputQuery(puzzles){
    const filterValues = [];
    // if the inputQuery is blank, we return all puzzles
    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    else{
        // we want to find all puzzles that contain the strategies in the strategyArray
        if ('strategies' in puzzles){
            filterValues.push({ 'strategies': { $in : puzzles['strategies'] } });
            delete puzzles.strategies;
        }
        // we want to find all puzzles that do not contain the strategies in the strategyArray
        if ('excludeStrategies' in puzzles){
            filterValues.push({ 'strategies': { $nin : puzzles['excludeStrategies'] } });
            delete puzzles.excludeStrategies;
        }

        // we want to find all puzzles that contain the drillStrategies in the drillStrategyArray
        if ('drillStrategies' in puzzles){
            filterValues.push({ 'drillStrategies': { $in : puzzles['drillStrategies'] } });
            delete puzzles.drillStrategies;
        }

        // this is being handled elsewhere
        if ('closestDifficulty' in puzzles){
            delete puzzles.closestDifficulty;
        }

        // we want to limit the results to difficulties greater than or equal to the minDifficulty
        if ('minDifficulty' in puzzles) {
            filterValues.push({ 'difficulty': { $gte : puzzles['minDifficulty'] } });
            delete puzzles.minDifficulty;
        }

        // we want ot limit the results to difficulties less than or equal to the maxDifficulty
        if ('maxDifficulty' in puzzles) {
            filterValues.push({ 'difficulty': { $lte : puzzles['maxDifficulty'] } });
            delete puzzles.maxDifficulty;
        }

        // since we have removed drillStrategies and strategies, if the object is not empty we push remaining
        // parameters to the query
        if (Object.keys(puzzles).length !== 0){
            filterValues.push(puzzles);
        }
    }

    filterValues.push(puzzles);
    return filterValues;
}

function copy(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
        objectCopy[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
}

export = { createPuzzle: puzzleCreateService, searchPuzzle: puzzleSearchService, updatePuzzle: puzzleUpdateService, removePuzzle: puzzleRemoveService };

