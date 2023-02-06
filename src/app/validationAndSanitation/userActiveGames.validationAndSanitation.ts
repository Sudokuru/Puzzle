/**
 * This file contains several sets of settings for validating request queries and bodies
 * This file is for the user active games endpoint
 * We have three exports here that are used in the routing file
 * The purpose of this file is to sanitize and validate our input to make sure
 * there is no foul play about
 * @module UserActiveGamesValidationAndSanitation
 */

import {body, query} from "express-validator";

/**
 * This array stores the validation for our POST puzzle requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * The astricks are required because we are accessing values from an array
 */
exports.validateUserActiveGamesBodyPOST = [
    body('*.userID', 'userID did not match correct format'),
    body('*.puzzle', 'puzzle did not match whitelist').whitelist("0123456789"),
    body('*.puzzle', 'puzzle is not of correct length').isLength({ min: 81, max: 81 }),
    body('*.currentTime', 'currentTime is not an integer').isInt(),
    body('*.moves.*.puzzleCurrentState', 'puzzle current state did not match whitelist').whitelist("0123456789"),
    body('*.moves.*.puzzleCurrentState', 'puzzle current state is not of correct length').isLength({ min: 81, max: 81 }),
    body('*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state did not match whitelist').whitelist("01"),
    body('*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state is not of correct length').isLength({ min: 9, max: 729 }),
    body('*.numHintsAskedFor', 'numHintsAskedFor is not an integer').isInt(),
    body('*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').isInt(),

    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];

/**
 * This array stores the validation for our PATCH, GET, and DELETE requests
 * This validation only applies for the query fields
 * //todo add more validation and sanitization
 */
exports.validateUserActiveGamesParameters = [
    query('*.userID', 'userID did not match correct format').optional(),
    query('*.puzzle', 'puzzle did not match whitelist').optional().whitelist("0123456789"),
    query('*.puzzle', 'puzzle is not of correct length').optional().isLength({ min: 81, max: 81 }),
    query('*.currentTime', 'currentTime is not an integer').optional().isInt(),
    query('*.moves.*.puzzleCurrentState', 'puzzle current state did not match whitelist').optional().whitelist("0123456789"),
    query('*.moves.*.puzzleCurrentState', 'puzzle current state is not of correct length').optional().isLength({ min: 81, max: 81 }),
    query('*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state did not match whitelist').optional().whitelist("01"),
    query('*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state is not of correct length').optional().isLength({ min: 9, max: 729 }),
    query('*.numHintsAskedFor', 'numHintsAskedFor is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),

    query('*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    query('*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt()
];

/**
 * This array stores the validation for our PATCH requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * the Astricks are not needed here because in this instance we are not storing our values in an array
 * We also leave out the userID and puzzle fields because we do not want to replace those during a PATCH operation
 */
exports.validateUserActivePuzzlesBodyPATCH = [
    body('*.currentTime', 'currentTime is not an integer').optional().isInt(),
    body('*.moves.*.puzzleCurrentState', 'puzzle current state did not match whitelist').optional().whitelist("0123456789"),
    body('*.moves.*.puzzleCurrentState', 'puzzle current state is not of correct length').optional().isLength({ min: 81, max: 81 }),
    body('*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state did not match whitelist').optional().whitelist("01"),
    body('*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state is not of correct length').optional().isLength({ min: 9, max: 729 }),
    body('*.numHintsAskedFor', 'numHintsAskedFor is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),

    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];