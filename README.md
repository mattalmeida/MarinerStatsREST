# MarinerStatsREST

##Requirements:
Docker
npm

###DBSetup (for now):
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
Currently being moved to ? If you're curious just ask.

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
