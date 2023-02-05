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
    body('*.activeGames', 'activeGames is not an array').isArray(),
    body('*.activeGames.*.puzzle', 'puzzle did not match whitelist').whitelist("0123456789"),
    body('*.activeGames.*.puzzle', 'puzzle is not of correct length').isLength({ min: 81, max: 81 }),
    body('*.activeGames.*.currentTime', 'currentTime is not an integer').isInt(),
    body('*.activeGames.*.moves.*.puzzleCurrentState', 'puzzle current state did not match whitelist').whitelist("0123456789"),
    body('*.activeGames.*.moves.*.puzzleCurrentState', 'puzzle current state is not of correct length').isLength({ min: 81, max: 81 }),
    body('*.activeGames.*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state did not match whitelist').whitelist("01"),
    body('*.activeGames.*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state is not of correct length').isLength({ min: 9, max: 729 }),
    body('*.activeGames.*.numHintsAskedFor', 'numHintsAskedFor is not an integer').isInt(),
    body('*.activeGames.*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').isInt(),

    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];

/**
 * This array stores the validation for our PATCH, GET, and DELETE requests
 * This validation only applies for the query fields
 * //todo add more validation and sanitization
 */
exports.validateUserActiveGamesParameters = [
    query('*.userID', 'userID did not match correct format').optional(),
    query('*.activeGames.*.puzzle', 'puzzle did not match whitelist').optional().whitelist("0123456789"),
    query('*.activeGames.*.puzzle', 'puzzle is not of correct length').optional().isLength({ min: 81, max: 81 }),
    query('*.activeGames.*.currentTime', 'currentTime is not an integer').optional().isInt(),
    query('*.activeGames.*.moves.*.puzzleCurrentState', 'puzzle current state did not match whitelist').optional().whitelist("0123456789"),
    query('*.activeGames.*.moves.*.puzzleCurrentState', 'puzzle current state is not of correct length').optional().isLength({ min: 81, max: 81 }),
    query('*.activeGames.*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state did not match whitelist').optional().whitelist("01"),
    query('*.activeGames.*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state is not of correct length').optional().isLength({ min: 9, max: 729 }),
    query('*.activeGames.*.numHintsAskedFor', 'numHintsAskedFor is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),

    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    query('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt()
];

/**
 * This array stores the validation for our PATCH requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * the Astricks are not needed here because in this instance we are not storing our values in an array
 * We also leave out the userID and puzzle fields because we do not want to replace those during a PATCH operation
 */
exports.validateUserActivePuzzlesBodyPATCH = [
    body('*.activeGames.*.currentTime', 'currentTime is not an integer').optional().isInt(),
    body('*.activeGames.*.moves.*.puzzleCurrentState', 'puzzle current state did not match whitelist').optional().whitelist("0123456789"),
    body('*.activeGames.*.moves.*.puzzleCurrentState', 'puzzle current state is not of correct length').optional().isLength({ min: 81, max: 81 }),
    body('*.activeGames.*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state did not match whitelist').optional().whitelist("01"),
    body('*.activeGames.*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state is not of correct length').optional().isLength({ min: 9, max: 729 }),
    body('*.activeGames.*.numHintsAskedFor', 'numHintsAskedFor is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),

    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.activeGames.*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];