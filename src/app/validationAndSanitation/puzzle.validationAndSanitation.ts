import {body, validationResult} from "express-validator";
import {CustomError, CustomErrorEnum} from "../models/error.model";

exports.validatePuzzleBody = [
    body().isArray(),
    body('*.puzzle', 'puzzle did not match whitelist').whitelist("0123456789"),
    body('*.puzzle', 'puzzle is not of correct length').isLength({ min: 81, max: 81 }),
    body('*.puzzleSolution', 'puzzle solution did not match whitelist').whitelist("123456789"),
    body('*.puzzleSolution', 'puzzle solution is not of correct length').isLength( { min: 81, max: 81 }),
    body('*.strategyCount.stratOne', 'strategy one is not an integer').isInt(),
    body('*.strategyCount.stratTwo', 'strategy two is not an integer').isInt(),
    body('*.strategyCount.stratThree', 'strategy three is not an integer').isInt(),
    body('*.fastestSolveTime', 'fastest solve time is not an integer').optional().isInt(),
    body('*.averageSolveTime', 'average solve time is not an integer').optional().isInt(),
    body('*.numUsersPlayed', 'num users played is not an integer').optional().isInt(),
    body('*.numTimesPlayed', 'num times played is not an integer').optional().isInt(),
    body('*.trulyUnique', 'truly unique is not a boolean').optional().isBoolean(),
    body('*.drillStrategy', 'drill strategy is not a valid string option').optional().isString().isIn(["stratOne", "stratTwo", "stratThree"]),
    body('*.calendarDate', '').optional(),
    body('*.imageUrl', '').optional(),
    body('*.description', '').optional(),

    // (req, res, next) => {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         console.log(errors);
    //         try{
    //             throw new CustomError(CustomErrorEnum.INVALID_SYNTAX, 400);
    //         } catch (err) {
    //             next(err);
    //         }
    //     }
    // }
];