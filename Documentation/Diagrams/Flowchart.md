```mermaid
---
title: Services Flowchart
---
flowchart LR
  subgraph frontend
    FE[Frontend]
  end
  subgraph backend
    direction LR
    BFF[Backend for the Frontend]
    PS[Puzzle Service]
    UAG[User Active Games Service]
    UGH[User Game History Service]
    UGSt[User Game Statistics Service]
    UGSe[User Game Search Service]
    UP[User Profile Service]
    BFF <--> PS & UAG & UGH & UGSt & UGSe & UP
  end
  frontend <--> backend
 ```
