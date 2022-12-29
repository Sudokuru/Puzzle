
// Helper Interfaces
interface numWrongCellsPlayedPerStrategy {
    stratOne: number,
    stratTwo: number,
    stratThree: number
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
    strategyCount: {
        stratOne: number,
        stratTwo: number,
        stratThree: number
    },
    fastestSolveTime: number,
    averageSolveTime: number,
    numUsersPlayed: number,
    numTimesPlayed: number,
    trulyUnique: boolean,
    drillStrategy?: string,
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
        strategyTypes: {
            stratOne: boolean,
            stratTwo: boolean,
            stratThree: boolean
        }
    }
}

export interface userInProgressGames {
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