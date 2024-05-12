
### These diagrams do not consider 400, 401, or 500 errors for simplicity. They only consider 404, 200/201 error codes. 


### Flow to get User Game Preferences
<!-- 
```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant UserGamePreferences
    
    #Get User Game Preferences
    Frontend->>NPM Package: Puzzle.getUserGamePreferences(URL, Token, Parameters)
    NPM Package->>BFF: Get userGamePreferences endpoint
    
    critical Get User Game Search Preferences
        BFF->> -->

### Flow to update User Game Preferences


### Flow for the frontend to start a game

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant UserGamePreferences
    participant Puzzle
    participant UserGameStatistics
    participant UserActiveGames
    
    #Start Game
    Frontend->>NPM Package: Puzzle.startGame(URL, Token, Parameters)
    NPM Package->>BFF: GET startGame endpoint

    critical Get User Game Search Preferences
        BFF->>UserGamePreferences: GET User Game Preferences
    option User Game Search Preferences Not Found
        UserGamePreferences-->>BFF: 404 Not Found
        BFF-->>UserGamePreferences: POST Create User Search Preferences
    option User Game Search Preferences Found
        UserGamePreferences-->>BFF: 200 Found
    end

    critical Get Puzzle
        BFF->>Puzzle: GET Puzzle
    option Puzzle Not Found
        Puzzle-->>BFF: 404 Not Found
        BFF-->>NPM Package: 404 Not Found
        NPM Package-->>Frontend: Return Null or Error Invalid Search Criteria
    option Puzzle Found
        Puzzle-->>BFF: 200 Found
        critical Get User Game History
            BFF-->>UserGameStatistics: GET User Game Statistics
        option User Game Statistics Not Found
            UserGameStatistics-->>BFF: 404 Not Found
            BFF-->>UserGameStatistics: POST User Game Statistics
        option User Game Statistics Found
            UserGameStatistics-->>BFF: 200 Found
        end
        BFF->>UserActiveGames: POST User Active Game
        UserActiveGames->>BFF: 200 Success
        BFF-->>NPM Package: Return Puzzle Object
        NPM Package-->>Frontend: Return Puzzle Object
    end
```

### Flow for the frontend to resume a game

```mermaid
sequenceDiagram
    participant Frontend
    participant Package
    participant UserActiveGamesBFF
    participant UserActiveGames

    #Resume Game
    Frontend->>Package: Puzzle.resumeGame(URL, Token, Puzzle)

    critical Get User Active Game
        Package->>UserActiveGamesBFF: GET UserActiveGames
        UserActiveGamesBFF->>UserActiveGames: GET UserActiveGames
    option Active Game Not Found
        UserActiveGames-->>UserActiveGamesBFF: 404 Not Found
        UserActiveGamesBFF-->>Package: 404 Not Found
        Package-->>Frontend: User has no active games
    option Active Game Found
        UserActiveGames-->>UserActiveGamesBFF: 200 Not Found
        UserActiveGamesBFF-->>Package: 200 Found
        Package->>Frontend: Return Active Game
    end
```

### Flow for the frontend to save a game

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant UserActiveGames

    #Save Game
    Frontend->>NPM Package: Puzzle.saveGame(URL, Token, Puzzle)

    critical Get User Active Game
        NPM Package->>UserActiveGames: GET UserActiveGames
    option Active Game Not Found
        UserActiveGames-->>NPM Package: 404 Not Found
        NPM Package-->>Frontend: 404 Active Game Not Found
    option Active Game Found
        UserActiveGames-->>NPM Package: 200 Found
        NPM Package-->>Frontend: 200 Success
    end
```

### Flow for frontend to end a game

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant UserActiveGames
    participant UserGameStatistics

    #endGame
    Frontend->>NPM Package: Puzzle.endGame(URL, Token, Puzzle)
    NPM Package->>BFF: DELETE endGame endpoint

    critical Get User Active Game
        BFF->>UserActiveGames: GET UserActiveGame
    option Active Game Not Found
        UserActiveGames-->>BFF: 404 Not Found
        BFF-->>NPM Package: 404 Not Found
        NPM Package-->>Frontend: Return Null or Error Game Not Activve
    option Active Game Found
        UserActiveGames-->>BFF: 200 Found
        BFF-->>UserActiveGames: DELETE User Active Game
        UserActiveGames-->>BFF: 200 Success

        critical Get User Game Stats
            BFF-->>UserGameStatistics: GET User Game Stats
        option User Game Stats Not Found
            UserGameStatistics-->>BFF: 404 Not Found
            BFF-->>UserGameStatistics: POST User Game Stats
            UserGameStatistics-->>BFF: 200 Success
        option User Game Stats Found
            UserGameStatistics-->>BFF: 200 Found
            BFF-->>UserGameStatistics: PATCH User Game Stats
            UserGameStatistics-->>BFF: 200 Success
        end

        BFF-->>NPM Package: 200 Success
        NPM Package-->>Frontend: Return Success
    end
```
