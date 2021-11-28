library(odbc)

# setting up RedShift is an exercise (see AWS documentation)
# but once done it is just another SQL database (for simple operations at least)
SERVER <- "sidesways1.croyvafpkqhz.us-east-1.redshift.amazonaws.com"
DATABASE <- "poc"
USERNAME <- "cds"
entered_pwd <- rstudioapi::askForPassword("Database password")

db <- dbConnect(odbc(),
                Driver = "Amazon Redshift (x64)",
                servername = SERVER,
                database = DATABASE,
                UID = USERNAME,
                PWD = entered_pwd,
                Port = 5439)

# load the islands dataset, rename, reorder columns
data("islands")
islands <- as.data.frame(islands)
islands$Island <- rownames(islands)
rownames(islands) <- c()
names(islands) <- c("Size","Island")
islands <- islands[c("Island", "Size")]

# remove table if it remains from the last use of this script
dbGetQuery(db, "DROP TABLE islands_table")

dbWriteTable(db, "islands_table", islands)

dbGetQuery(db, "SELECT * FROM islands_table LIMIT 10")

# simple concatenate example - notice escaped single quotes around DELETE_CAR
DELETE_ISLAND <- "Vancouver"
delete_query <- paste0("DELETE FROM islands_table ",
                       "WHERE Island = '",
                       DELETE_ISLAND,
                       "'")

dbGetQuery(db, delete_query)

dbGetQuery(db, "SELECT * FROM islands_table ORDER BY Size DESC")

dbGetQuery(db, "INSERT INTO islands_table VALUES ('Hawaii', 11)")

dbGetQuery(db, "SELECT * FROM islands_table ORDER BY Size DESC")

dbDisconnect(db)
