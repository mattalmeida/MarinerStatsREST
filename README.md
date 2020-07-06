# MarinerStatsREST

## 7/6 \
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
