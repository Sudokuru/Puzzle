
### These diagrams do not consider 400, 401, or 500 errors for simplicity. They only consider 404, 200/201 error codes. 

### Flow for the frontend to start a game

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant UserGameSearch
    participant Puzzle
    participant UserGameStatistics
    
    #Start Game
    Frontend->>NPM Package: Puzzle.startGame(URL, Token, Parameters)
    NPM Package->>BFF: GET startGame endpoint

    critical Get User Game Search Preferences
        BFF->>UserGameSearch: GET UserGameSearchPreferences
    option User Game Search Preferences Not Found
        UserGameSearch-->>BFF: 404 Not Found
        BFF-->>UserGameSearch: POST Create User Search Preferences
    option User Game Search Preferences Found
        UserGameSearch-->>BFF: 200 Found
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
        BFF-->>NPM Package: Return Puzzle Object
        NPM Package-->>Frontend: Return Puzzle Object
    end
```

### Flow for the frontend to resume a game

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant UserActiveGames

    #Save Game
    Frontend->>NPM Package: Puzzle.resumeGame(URL, Token, Puzzle)

    critical Get User Active Game
        NPM Package->>UserActiveGames: GET UserActiveGames
    option Active Game Not Found
        UserActiveGames-->>NPM Package: 404 Not Found
        NPM Package-->>Frontend: User has no active games
    option Active Game Found
        UserActiveGames-->>NPM Package: 200 Found
        NPM Package->>Frontend: Return Active Game
    end
```

### Flow for the frontend to save a game

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant Backend

    #Save Game
    Frontend->>NPM Package: Puzzle.saveGame(URL, Token, Puzzle)
    NPM Package->>BFF: PATCH saveGame endpoint

    critical Get User Active Game
        BFF->>Backend: GET UserActiveGames
    option Active Game Not Found
        Backend-->>BFF: 404 Not Found
        BFF-->>Backend: POST User Active Game
    option Active Game Found
        Backend-->>BFF: 200 Found
        BFF-->>Backend: PATCH User Active Game
    end
        Backend->>BFF: 200 Success
        BFF->>NPM Package: 200 Success
        NPM Package->>Frontend: Return Success
```

### Flow for frontend to end a game

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant Backend

    #endGame
    Frontend->>NPM Package: Puzzle.endGame(URL, Token, Puzzle)
    NPM Package->>BFF: DELETE endGame endpoint

    critical Get User Active Game
        BFF->>Backend: GET UserActiveGame
    option Active Game Not Found
        Backend-->>BFF: 404 Not Found
        BFF-->>NPM Package: 404 Not Found
        NPM Package-->>Frontend: Return Null or Error Game Not Activve
    option Active Game Found
        Backend-->>BFF: 200 Found
        BFF-->>Backend: DELETE User Active Game
        Backend-->>BFF: 200 Success

        critical Get User Game Stats
            BFF-->>Backend: GET User Game Stats
        option User Game Stats Not Found
            Backend-->>BFF: 404 Not Found
            BFF-->>Backend: POST User Game Stats
            Backend-->>BFF: 200 Success
        option User Game Stats Found
            Backend-->>BFF: 200 Found
            BFF-->>Backend: PATCH User Game Stats
            Backend-->>BFF: 200 Success
        end

        BFF-->>NPM Package: 200 Success
        NPM Package-->>Frontend: Return Success
    end
```
