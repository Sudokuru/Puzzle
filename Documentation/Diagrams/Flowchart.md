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
    UGS[User Game Statistics Service]
    UGP[User Game Preferences Service]
    UP[User Profile Service]
    BFF <--> PS & UAG & UGS & UGP & UP
  end
  frontend <--> backend
 ```
