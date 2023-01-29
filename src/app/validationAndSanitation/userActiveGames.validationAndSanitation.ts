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
    body('*.inProgressGames.*.puzzle', 'puzzle did not match whitelist').whitelist("0123456789"),
    body('*.inProgressGames.*.puzzle', 'puzzle is not of correct length').isLength({ min: 81, max: 81 }),
    body('*.inProgressGames.*.puzzleCurrentState', 'puzzleCurrentState did not match whitelist').whitelist("0123456789"),
    body('*.inProgressGames.*.puzzleCurrentState', 'puzzleCurrentState is not of correct length').isLength({ min: 81, max: 81 }),
    body('*.inProgressGames.*.currentTime', 'currentTime is not an integer').isInt(),
    body('*.inProgressGames.*.moves.*.moveNumber', 'moveNumber is not an integer').isInt(),
    body('*.inProgressGames.*.moves.*.notesState', 'notes state did not match whitelist').whitelist("0123456789"),
    body('*.inProgressGames.*.moves.*.notesState', 'notes state is not of correct length').isLength({ min: 729, max: 729 }),
    body('*.inProgressGames.*.moves.*.row', 'row is not an integer in range 0-8').isInt({ min: 0, max: 8 }),
    body('*.inProgressGames.*.moves.*.column', 'column is not an integer in range 0-8').isInt({ min: 0, max: 8 }),
    body('*.inProgressGames.*.moves.*.value', 'value is not an integer in range 0-9').isInt({ min: 0, max: 9 }),
    body('*.inProgressGames.*.moves.*.moveTime', 'moveTime is not an integer').isInt(),
    body('*.inProgressGames.*.numHintsAskedFor', 'numHintsAskedFor is not an integer').isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').isInt(),

    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];

/**
 * This array stores the validation for our PATCH, GET, and DELETE requests
 * This validation only applies for the query fields
 * //todo add more validation and sanitization
 */
exports.validateUserActiveGamesParameters = [
    query('*.userID', 'userID did not match correct format').optional(),
    query('*.inProgressGames.*.puzzle', 'puzzle did not match whitelist').optional().whitelist("0123456789"),
    query('*.inProgressGames.*.puzzle', 'puzzle is not of correct length').optional().isLength({ min: 81, max: 81 }),
    query('*.inProgressGames.*.puzzleCurrentState', 'puzzleCurrentState did not match whitelist').optional().whitelist("0123456789"),
    query('*.inProgressGames.*.puzzleCurrentState', 'puzzleCurrentState is not of correct length').optional().isLength({ min: 81, max: 81 }),
    query('*.inProgressGames.*.currentTime', 'currentTime is not an integer').optional().isInt(),
    query('*.inProgressGames.*.moves.*.moveNumber', 'moveNumber is not an integer').optional().isInt(),
    query('*.inProgressGames.*.moves.*.notesState', 'notes state did not match whitelist').optional().whitelist("0123456789"),
    query('*.inProgressGames.*.moves.*.notesState', 'notes state is not of correct length').optional().isLength({ min: 729, max: 729 }),
    query('*.inProgressGames.*.moves.*.row', 'row is not an integer in range 0-8').optional().isInt({ min: 0, max: 8 }),
    query('*.inProgressGames.*.moves.*.column', 'column is not an integer in range 0-8').optional().isInt({ min: 0, max: 8 }),
    query('*.inProgressGames.*.moves.*.value', 'value is not an integer in range 0-9').optional().isInt({ min: 0, max: 9 }),
    query('*.inProgressGames.*.moves.*.moveTime', 'moveTime is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numHintsAskedFor', 'numHintsAskedFor is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),

    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    query('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt()
];

/**
 * This array stores the validation for our PATCH requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * the Astricks are not needed here because in this instance we are not storing our values in an array
 * We also leave out the userID and puzzle fields because we do not want to replace those during a PATCH operation
 */
exports.validateUserActivePuzzlesBodyPATCH = [
    body('*.inProgressGames.*.puzzleCurrentState', 'puzzleCurrentState did not match whitelist').optional().whitelist("0123456789"),
    body('*.inProgressGames.*.puzzleCurrentState', 'puzzleCurrentState is not of correct length').optional().isLength({ min: 81, max: 81 }),
    body('*.inProgressGames.*.currentTime', 'currentTime is not an integer').optional().isInt(),
    body('*.inProgressGames.*.moves.*.moveNumber', 'moveNumber is not an integer').optional().isInt(),
    body('*.inProgressGames.*.moves.*.notesState', 'notes state did not match whitelist').optional().whitelist("0123456789"),
    body('*.inProgressGames.*.moves.*.notesState', 'notes state is not of correct length').optional().isLength({ min: 729, max: 729 }),
    body('*.inProgressGames.*.moves.*.row', 'row is not an integer in range 0-8').optional().isInt({ min: 0, max: 8 }),
    body('*.inProgressGames.*.moves.*.column', 'column is not an integer in range 0-8').optional().isInt({ min: 0, max: 8 }),
    body('*.inProgressGames.*.moves.*.value', 'value is not an integer in range 0-9').optional().isInt({ min: 0, max: 9 }),
    body('*.inProgressGames.*.moves.*.moveTime', 'moveTime is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numHintsAskedFor', 'numHintsAskedFor is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),

    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.inProgressGames.*.numWrongCellsPlayedPerStrategy.*.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];