```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Library
    participant BFF
    participant Backend
    
    #GetNewPuzzle
    Frontend->>NPM Library: getNewPuzzle(URL, Token, Parameters)
    NPM Library->>BFF: GET getPuzzle endpoint

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
        BFF-->>NPM Library: 404 Not Found
        NPM Library-->>Frontend: Return Null or Error Invalid Search Criteria
    option Puzzle Found
        Backend-->>BFF: 200 Found
        BFF-->>NPM Library: Return Puzzle Object
        NPM Library-->>Frontend: Return Puzzle Object
    end
```
```mermaid
sequenceDiagram
    participant Frontend
    participant NPM Library
    participant BFF
    participant Backend

    #saveActivePuzzle
    Frontend->>NPM Library: saveActivePuzzle(URL, Token, Puzzle)
    NPM Library->>BFF: PATCH saveActivePuzzle endpoint

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
        BFF->>NPM Library: 200 Success
        NPM Library->>Frontend: Return Success
```