/**
 * This file contains several sets of settings for validating request queries and bodies
 * This file is for the puzzle endpoint
 * We have three exports here that are used in the routing file
 * The purpose of this file is to sanitize and validate our input to make sure
 * there is no foul play about
 * @module PuzzleValidationAndSanitation
 */

import {body, query} from "express-validator";

/**
 * This array stores the validation for our POST puzzle requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * The astricks are required because we are accessing values from an array
 */
exports.validatePuzzleBodyPOST = [
    body().isArray().withMessage('body is not an array'),
    body('*.puzzle', 'puzzle is not a string').isString(),
    body('*.puzzle', 'puzzle did not match whitelist').whitelist("0123456789"),
    body('*.puzzle', 'puzzle is not of correct length').isLength({ min: 81, max: 81 }),
    body('*.puzzleSolution', 'puzzle solution is not a string').isString(),
    body('*.puzzleSolution', 'puzzle solution did not match whitelist').whitelist("123456789"),
    body('*.puzzleSolution', 'puzzle solution is not of correct length').isLength( { min: 81, max: 81 }),

    body('*.strategies', 'Strategy array is not valid').isArray(),

    body('*.difficulty', "difficulty is not an integer or is not in correct range").isInt({ min: 0, max: 1000}),
    body('*.fastestSolveTime', 'fastest solve time is not an integer').optional().isInt(),
    body('*.averageSolveTime', 'average solve time is not an integer').optional().isInt(),
    body('*.numUsersPlayed', 'num users played is not an integer').optional().isInt(),
    body('*.numTimesPlayed', 'num times played is not an integer').optional().isInt(),
    body('*.trulyUnique', 'truly unique is not a boolean').optional().isBoolean(),

    body('*.drillStrategies', 'drillStrategy array is not valid').optional().isArray(),

    body('*.calendarDate', 'calendar date is not a date').optional().isDate({ strictMode: true, format: "YYYY-MM-DD" }),
    body('*.imageUrl', 'imageUrl is not a string').optional().isString(),
    body('*.description', 'description is not a string').optional().isString(),
];

/**
 * This array stores the validation for our PATCH, GET, and DELETE requests
 * This validation only applies for the query fields
 * //todo add more validation and sanitization
 */
exports.validatePuzzleParameters = [
    query('id').optional(),
    query('count', 'count is not an integer').optional().isInt(),
    query('maxDifficulty', 'maxDifficulty is not an integer or is not in correct range').optional().isInt({ min: 0, max: 1000 }),
    query('minDifficulty', 'minDifficulty is not an integer or is not in correct range').optional().isInt({ min: 0, max: 1000 }),
    query('random', "random is not a boolean").optional().isBoolean(),
    query('puzzle', 'puzzle did not match whitelist').optional().whitelist("0123456789"),
    query('puzzle', 'puzzle is not of correct length').optional().isLength({ min: 81, max: 81 }),
    query('puzzleSolution', 'puzzle solution did not match whitelist').optional().whitelist("123456789"),
    query('puzzleSolution', 'puzzle solution is not of correct length').optional().isLength( { min: 81, max: 81 }),

    query('strategies', 'Strategy array is not valid').optional().isArray(),

    query('excludeStrategies', 'Exclude strategy array is not valid').optional().isArray(),

    query('difficulty', "difficulty is not an integer or is not in correct range").optional().isInt({ min: 0, max: 1000 }),
    query('fastestSolveTime', 'fastest solve time is not an integer').optional().isInt(),
    query('averageSolveTime', 'average solve time is not an integer').optional().isInt(),
    query('numUsersPlayed', 'num users played is not an integer').optional().isInt(),
    query('numTimesPlayed', 'num times played is not an integer').optional().isInt(),
    query('trulyUnique', 'truly unique is not a boolean').optional().isBoolean(),

    query('drillStrategies', 'drillStrategy array is not valid').optional().isArray(),

    query('calendarDate', 'calendar date is not a date').optional().isDate({ strictMode: true }),
    query('imageUrl', 'imageUrl is not a string').optional().isString(),
    query('description', 'description is not a string').optional().isString(),
];

/**
 * This array stores the validation for our PATCH requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * the Astricks are not needed here because in this instance we are not storing our values in an array
 * We also leave out the puzzle and puzzleSolution fields because we do not want to replace those during a PATCH operation
 */
exports.validatePuzzleBodyPATCH = [
    body('strategies', 'Strategy array is not valid').optional().isArray(),

    body('difficulty', "difficulty is not an integer or is not in correct range").optional().isInt({ min: 0, max: 1000 }),
    body('fastestSolveTime', 'fastest solve time is not an integer').optional().isInt(),
    body('averageSolveTime', 'average solve time is not an integer').optional().isInt(),
    body('numUsersPlayed', 'num users played is not an integer').optional().isInt(),
    body('numTimesPlayed', 'num times played is not an integer').optional().isInt(),
    body('trulyUnique', 'truly unique is not a boolean').optional().isBoolean(),

    body('drillStrategies', 'drillStrategy array is not valid').optional().isArray(),

    body('calendarDate', 'calendar date is not a date').optional().isDate({ strictMode: true, format: "YYYY-MM-DD" }),
    body('imageUrl', 'imageUrl is not a string').optional().isString(),
    body('description', 'description is not a string').optional().isString(),
];