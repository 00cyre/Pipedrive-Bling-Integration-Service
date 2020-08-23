# LinkApi-Application
Back-End Developer application at LinkApi

# Developer Notes
When I started the test the first challenge I got into was understanding how those systems worked, since I've never used neither saw them before, but it didn't took long until I realized what kind of integration was required in that process.
The flow of my development began into understanding how pipedrive would work, so the first thing I've noticed is in the test the tests require a route to update the values based on won deals in pipedrive, but pipedrive as i was researching it, it has a webhook, so i said, why not and made them both.
First i did the Pipedrive integration, and calls testing the API, and afterwards i made the MongoDb, and then i made the Bling integration. I did in that order specifically because the business rules and "complicated" stuff would be only on the database and the Pipedrive, since Bling would be only forwarding tasks to add it in the dashboard.

# Development Flow
The DEVFLOW i've used in this project is based on features, so the github branches are based on the features, so Pipedrive has it own branch with Pipedrive changes only, and that applies to the project architecture aswell.

![Project](https://i.snipboard.io/ZFudXR.jpg)

# Bonus Points
I made the route asked for updating the values on the mongoDb database with a post call, but I took it further and made the integration with the Pipedrive webhook, so when a new deal is won it automatically updates the database and creates a new request on bling.
Also i made unitary tests with Jest.
#### TLDR; Project has tests and you can call to update the database and bling, but you can leave the system to automatically do it.
