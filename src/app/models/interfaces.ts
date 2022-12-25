import * as mongoose from "mongoose";


interface strategies {

}

export interface Puzzle {
    puzzle: string,
    puzzleSolution: string,
    strategyCount: {
        stratOne: number,
        stratTwo: number,
        stratThree: number
    }
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

export interface UserInfo {
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

export interface UserGameInfo {
    userId: string,
    gameStatistics: {
        averageSolveTime: number,
        fastestSolveTime: number,
        numHintsAskedFor: number,
        numWrongCellsPlayed: number,
        numCorrectCellsPlayed: number,
        numGamesPlayed: number,
        numWrongCellsPlayedPerStrategy: {
            stratOne: number,
            stratTwo: number,
            stratThree: number
        }
    }
}

export interface UserGameSearchInfo {
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