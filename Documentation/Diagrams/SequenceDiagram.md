
### These diagrams do not consider 400, 401, or 500 errors for simplicity. They only consider 404, 200/201 error codes. 

### Flow for the frontend to get a puzzle

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant UserGameSearch
    
    #GetNewPuzzle
    Frontend->>NPM Package: getNewPuzzle(URL, Token, Parameters)
    NPM Package->>BFF: GET getPuzzle endpoint

    critical Get User Game Search Filters
        BFF->>Backend: GET UserGameSearchFilters
    option User Game Search Filters Not Found
        Backend-->>BFF: 404 Not Found
        BFF-->>Backend: POST Create User Search Preferences
    option User Game Search Filters Found
        Backend-->>BFF: 200 Found
    end

    critical Get Puzzle
        BFF->>Backend: GET Puzzle
    option Puzzle Not Found
        Backend-->>BFF: 404 Not Found
        BFF-->>NPM Package: 404 Not Found
        NPM Package-->>Frontend: Return Null or Error Invalid Search Criteria
    option Puzzle Found
        Backend-->>BFF: 200 Found
        BFF-->>NPM Package: Return Puzzle Object
        NPM Package-->>Frontend: Return Puzzle Object
    end
```

### Flow for the frontend to save an active puzzle

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant Backend

    #saveActivePuzzle
    Frontend->>NPM Package: saveActivePuzzle(URL, Token, Puzzle)
    NPM Package->>BFF: PATCH saveActivePuzzle endpoint

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

### Flow for frontend to end game

```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Package
    participant BFF
    participant Backend

    #endGame
    Frontend->>NPM Package: endGame(URL, Token, Puzzle)
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
