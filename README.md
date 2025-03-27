## The assignment:
(copied from school)  
Mål
+ Skapa ett enkelt men engagerande tema för ert API (t.ex. filmer, böcker, resor, husdjur eller annat som intresserar er). 
+ Skapa ett API i Express som kan genomföra CRUD-operationer (Create, Read, Update, Delete) mot en MongoDB-databas. 
+ Bygga en professionell dokumentation i README, med kopierbara cURL-exempel både för en lokal server och för den deployade versionen. 
+ Deploya projektet till en molntjänst (t.ex. Render) och tillgängliggör det externt. 
+ Visa förståelse för felhantering genom att skicka meningsfulla felmeddelanden vid felaktiga förfrågningar. 
+ Förbereda API:et för framtida frontendprojekt, exempelvis genom att aktivera CORS och använda `.env`-fil för konfiguration.  

## The idea:
Create a wishlist, the user will be able to have multiple wishlists, with multiple items in.  
Each item will have title, description, link to item. For added features user will be able to upload a photo. Eventually add input for price, so sorting could be sorted by price.  
Eventually be able to search and filter lists made by one specific user. 

# Getting started
+ Clone the project from GitHub
    - ```git clone ```
+ Install all required packages
    - ``` npm run i ```
+ Copy the .env file from .env.example
    - ``` cp .env ```
+ Build the project
    - ```npm run build ```
+ Run nodemon
    - ``` npm run dev ```
+ Run [curl commands](#curl-commands) or import insomnia file and run in insomnia


# API Architecture
[API design](design.md)  
[ER diagram](https://drawsql.app/teams/hej-8/diagrams/api)  
[User Stories](https://www.figma.com/design/VDilkI4u1PNdBnRvvUf8nw/U05?node-id=0-1&t=bd7YJaSQPoJvRy8t-1)

# Curl Commands  
