

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