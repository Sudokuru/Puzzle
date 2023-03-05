/**
 * This is the typescript interfaces for our JSON data
 * //todo add typings to sanitized data
 * There are several 'helper' interfaces that break out some duplicate code
 * The remaining interfaces correlate to the mongoose schemas
 */

/**
 * Below is the helper interface
 * {@link strategyTypes}
 * // todo refactor strategyTypes to strategies
 * @module Interfaces
 *
 */

interface strategyTypes {
    NAKED_SINGLE: boolean,
    HIDDEN_SINGLE: boolean,
    NAKED_PAIR: boolean,
    NAKED_TRIPLET: boolean,
    NAKED_QUADRUPLET: boolean,
    NAKED_QUINTUPLET: boolean,
    NAKED_SEXTUPLET: boolean,
    NAKED_SEPTUPLET: boolean,
    NAKED_OCTUPLET: boolean,
    HIDDEN_PAIR: boolean,
    HIDDEN_TRIPLET: boolean,
    HIDDEN_QUADRUPLET: boolean,
    HIDDEN_QUINTUPLET: boolean,
    HIDDEN_SEXTUPLET: boolean,
    HIDDEN_SEPTUPLET: boolean,
    HIDDEN_OCTUPLET: boolean,
    POINTING_PAIR: boolean,
    POINTING_TRIPLET: boolean,
    BOX_LINE_REDUCTION: boolean,
    X_WING: boolean,
    SWORDFISH: boolean,
    SINGLES_CHAINING: boolean
}

/**
 * Below is the interface for the Puzzle service
 * {@link Puzzle}
 * //todo make casing of types consistant
 *
 */
export interface Puzzle {
    puzzle: string,
    puzzleSolution: string,
    strategies: strategyTypes,
    difficulty: number,
    fastestSolveTime: number,
    averageSolveTime: number,
    numUsersPlayed: number,
    numTimesPlayed: number,
    trulyUnique: boolean,
    drillStrategies: strategyTypes,
    calendarDate?: Date,
    imageUrl?: string,
    description?: string
}