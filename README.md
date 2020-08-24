
# Pipedrive/Bling Integration Service

# Developer Notes
When I started the test the first challenge I got into was understanding how those systems worked, since I've never used neither saw them before, but it didn't took long until I realized what kind of integration was required in that process.
The flow of my development began into understanding how pipedrive would work, so the first thing I've noticed is in the test the tests require a route to update the values based on won deals in pipedrive, but pipedrive as i was researching it, it has a webhook, so i said, why not and made them both.
First i did the Pipedrive integration, and calls testing the API, and afterwards i made the MongoDb, and then i made the Bling integration. I did in that order specifically because the business rules and "complicated" stuff would be only on the database and the Pipedrive, since Bling would be only forwarding tasks to add it in the dashboard.
**I thought i would need to manually check if registries were already inserted on Bling but it seems he already do that automatically, so props to them lol.**

# Development Flow
The DEVFLOW i've used in this project is based on features, so the github branches are based on the features, so Pipedrive has it own branch with Pipedrive changes only, and that applies to the project architecture aswell.

![Project](https://i.snipboard.io/ZFudXR.jpg)

# Bonus Points
I made the route asked for updating the values on the mongoDb database with a post call, but I took it further and made the integration with the Pipedrive webhook, so when a new deal is won it automatically updates the database and creates a new request on bling.

#### TLDR; You can call to update the database and bling, but you can leave the system to automatically do it.

# Configuration notes
You'll have to need this hosted somewhere or forwarded to your ip to the Pipedrive webhook work.
I used **ngrok** which creates a forward address so i can set it up on my pipedrive account.
Also the event i set up to trigger the webhook was updated.person
![enter image description here](https://snipboard.io/ZPYXRE.jpg)

# What i could've added
One thing I didin't got in this project was unitary tests, i could do it but to not delay the deliver even further i decided to not do it, since it wasn't a necessary requisite i let it out of the service.
I didn't implemented another extra which would be using the query from MongoDb,i even added some code testing it, but i couldn't get it to work i removed it, but since this wasn't asked to do either, i let it out aswell.

# Api calls
The basic calls to this micro-service are:

> POST /api/v1/pipedrive

 This forces update the bling, and the database based on won deals on Pipedrive, that's the first question.
 So if you open a different Pipedrive account which has other won deals it should add them to the database, and on the bling requests.

> POST /api/v1/pipedrive/webhook

This route is basically the same as the one above except it's only for the webhook of Pipedrive.
This route has some has some rules to trigger only on the requests that update the status to won.
This will only trigger when the won button is clicked
![enter image description here](https://i.snipboard.io/mfkij2.jpg)

> GET /api/v1/pipedrive

This route will return all the deals registered on the database
