
// Helper Interfaces
interface numWrongCellsPlayedPerStrategy {
    NAKED_SINGLE: number,
    HIDDEN_SINGLE: number,
    NAKED_PAIR: number,
    NAKED_TRIPLET: number,
    NAKED_QUADRUPLET: number,
    NAKED_QUINTUPLET: number,
    NAKED_SEXTUPLET: number,
    NAKED_SEPTUPLET: number,
    NAKED_OCTUPLET: number
}

interface strategyTypes {
    NAKED_SINGLE: boolean,
    HIDDEN_SINGLE: boolean,
    NAKED_PAIR: boolean,
    NAKED_TRIPLET: boolean,
    NAKED_QUADRUPLET: boolean,
    NAKED_QUINTUPLET: boolean,
    NAKED_SEXTUPLET: boolean,
    NAKED_SEPTUPLET: boolean,
    NAKED_OCTUPLET: boolean
}

interface moves {
    moveNumber: number,
    row: number,
    column: number,
    value: number,
    moveTime: number
}

// mongodb json object interfaces
export interface Puzzle {
    puzzle: string,
    puzzleSolution: string,
    strategyTypes: strategyTypes,
    difficulty: number,
    fastestSolveTime: number,
    averageSolveTime: number,
    numUsersPlayed: number,
    numTimesPlayed: number,
    trulyUnique: boolean,
    drillStrategies?: strategyTypes,
    calendarDate?: Date,
    imageUrl?: string,
    description?: string
}

export interface UserProfile {
    userId: string,
    userEmail: string,
    userName: string,
    userPreferences: {
        savePuzzleData: boolean,
        theme: string,
        gamePreferences: {
            notifyOnWrongCell: boolean,
            highlightAllSelectedNumber: boolean,
            highlightSelectedBox: boolean,
            highlightSelectedRow: boolean,
            playMusic: boolean,
            musicIntensify: boolean
        }
    }
}

export interface UserGameStatistics {
    userId: string,
    gameStatistics: {
        averageSolveTime: number,
        fastestSolveTime: number,
        averageMoveTime: number,
        numHintsAskedFor: number,
        numWrongCellsPlayed: number,
        numCorrectCellsPlayed: number,
        numGamesPlayed: number,
        numWrongCellsPlayedPerStrategy: numWrongCellsPlayedPerStrategy
    }
}

export interface UserGameSearchFilters {
    userId: string,
    gameSearchPreferences: {
        defaultSearchType: string,
        difficulty: {
            low: number,
            high: number
        },
        strategyTypes: strategyTypes
    }
}

export interface userPausedGames {
    userId: string,
    inProgressGames: [{
        puzzle: string,
        currentTime: number,
        moves: moves[],
        numHintsAskedFor: number,
        numWrongCellsPlayed: number,
        numCorrectCellsPlayed: number,
        numWrongCellsPlayedPerStrategy: numWrongCellsPlayedPerStrategy
    }]
}

export interface userGameHistory {
    userId: string,
    gamesPlayed: [{
        puzzle: string,
        moves: moves[],
        numTimesPlayed: number,
        initialSolveTime: number,
        fastestSolveTime: number,
        averageMoveTime: number,
        numHintsAskedFor: number,
        numWrongCellsPlayed: number,
        numCorrectCellsPlayed: number,
        numWrongCellsPlayedPerStrategy: numWrongCellsPlayedPerStrategy
    }]
}