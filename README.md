# MarinerStatsREST

##Requirements:
Docker
npm
(ts stuff like linter? or does package-lock carry dependencies into repo?)

###DBSetup:
docker run -d --name little-rest-db -p 5432:5432 -e 'POSTGRES_PASSWORD=p@ssw0rd42' postgres
npm run initdb

###.env file:

    # Set to production when deploying to production
    NODE_ENV=development
    
    # Node.js server configuration
    SERVER_PORT=8080
    
    # Postgres configuration
    PGHOST=localhost
    PGUSER=postgres
    PGDATABASE=postgres
    PGPASSWORD=p@ssw0rd42
    PGPORT=5432

## Journalish kinda thingy

## 7/8
Drew up UX for the search and results pages.\

## 7/7
I clarified that the player_ids were all unique so I can use that to look up players/use as REST element id.\
I'm worrying about waiting to compute things like OBP, especially for all players (something one would expect to be queried 'more' frequently.  I'm wondering if I shouldn't just store that so no extra compute is necessary for more general queries.\
Starting date will be a useful id to specificy players with the same full name.  Added that to player table.\
Got API generally sorted out, planning to use query parameters for filters on year or specific statistic.  Players will usually resolve to v1/players/<player_id>/stats/, but if there is a collision, v1/players/ will have links to both players player_id/stats page alongside the players start date and we can hope users can navigate from there to the appropriate page.\
Added instructions/requirements for basic PostgreSQL DB from Docker, will add config/build script soon to call the .pgsql file to create the tables.\
Added retrosheet license.\
Created basic TS hello world project to extend into REST API service.\

***Next up
Create general views for basic use
Write API into service
Create parquet parsing module

***Potential problems
Performance of recomputing complex stats at call time


## 7/6 
I'll start using this as something of a journal/changelog to sort out what I'm working on, my thought processes, and what's next.  

I finally have something committed as the table structure for the data model.  I spent a lot of time thinking in circles about what was needed and what was worth storing vs computing. \
One item I changed last minute was deciding to store only the rawest of values (like 1b, 2b, runs from error) and then compute refined values like ERA and OBP at time of compute so that I could slim down the ETL process.  I'm not sure if this is necessary, relevant, or important but I'm going to move forward on this solution and see how it comes out. \
I had to sort out feature needs around search to get a better definition of data needs.  My current feature set plans are these:

### MVP project (only 5 years of data from Mariners' games)
Can search for player or full team (will display team avg as well as list of players) and their stats
Can filter as just batting/pitching, year(s)

### Future work
Expand to all teams for latest 5 seasons, figure out how to avoid double counting games from etl
Expand to more years
Add ability to fetch event data file from retrosheet or chadwick if not stored
Search feature on range, sets of teams
Search feature/filter on split stats (season split, l/r handed splits)
Search feature on yearly stats
Search filter on stats against teams
'Recent searches' get saved in 'cache' table for easy re-lookup.  Timed existence

### Potential problems
Chadwick uses a player id system that seems to keep the players unique per season, but I worry if over long time periods those are reused and may lead to complexities/bugs.  The player_id field in players may need to accept a range and may be more trouble than it is worth if those change and are reused over a career.

### Next up
Load text files into parquets and load into DBs
Create API for server, search
Create DOCKERFILE for db creation
Create project skeleton



***********
**Retrosheet License

Recipients of Retrosheet data are free to make any desired use of
the information, including (but not limited to) selling it,
giving it away, or producing a commercial product based upon the
data.  Retrosheet has one requirement for any such transfer of
data or product development, which is that the following
statement must appear prominently:

     The information used here was obtained free of
     charge from and is copyrighted by Retrosheet.  Interested
     parties may contact Retrosheet at "www.retrosheet.org".

Retrosheet makes no guarantees of accuracy for the information 
that is supplied. Much effort is expended to make our website 
as correct as possible, but Retrosheet shall not be held 
responsible for any consequences arising from the use the 
material presented here. All information is subject to corrections 
as additional data are received. We are grateful to anyone who
discovers discrepancies and we appreciate learning of the details. 
