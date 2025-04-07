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
    - ```git clone https://github.com/Chokladglasyr/u05-RESTfulapi-Chokladglasyr.git```
+ Install all required packages
    - ``` npm run i ```
+ Copy the .env file from .env.example
    - ``` cp .env.example .env ```
+ Run nodemon
    - ``` npm run dev ```
+ Run [curl commands](#curl-commands) or import insomnia file and run in insomnia


# API Architecture
[API design](design.md)  
[ER diagram](https://drawsql.app/teams/hej-8/diagrams/api)  
[User Stories](https://www.figma.com/design/VDilkI4u1PNdBnRvvUf8nw/U05?node-id=0-1&t=bd7YJaSQPoJvRy8t-1)

# cURL Commands Examples 

### Local version:
To get all users:  
```
curl -H "Content-Type: application/json" -X GET http://localhost:3003/users | json_pp
```  
  
Response:  
```
[
   {
      "_id" : "67da9ce4b48c2d0de4e2237f",
      "admin" : false,
      "confirmed_password" : "test5678",
      "email" : "aylin@example.com",
      "name" : "BOOO",
      "password" : "test5678",
      "updatedAt" : "2025-03-25T22:59:44.683Z"
   },
   {
      "__v" : 0,
      "_id" : "67deca2c4c971c9a9826b931",
      "admin" : false,
      "confirmed_password" : "$2b$10$UbvW5lwuHeS/nJ9w5KAEOOXadaj6m4oCPE/ov90qRI9WTk4wN5jOO",
      "email" : "cassandra@example.com",
      "name" : "Casso",
      "password" : "$2b$10$mbKbcNGEvUJm/A2ZlBUtzeyIaaHEWzFDxLK8sdNilmwUmaIQtrqJC",
      "updatedAt" : "2025-03-27T11:03:25.217Z"
   },
   {
      "__v" : 0,
      "_id" : "67e14b9aa8083661738433d8",
      "admin" : true,
      "confirmed_password" : "$2b$10$sBY20B.hDwK.Ui00RDdxUuNwProBlw/rdrB1J2TfoIyE6mvMi9mZe",
      "email" : "mamma@example.com",
      "name" : "mamma",
      "password" : "$2b$10$rMWnq3E.8WJbenXDR/0XtOX6SftuhVbtzvz5JBQ2LyFQfij4ksETi",
      "updatedAt" : "2025-03-25T21:48:11.238Z"
   }
] 
```
--------------------------  
  
To log in:  

```
curl --request POST \
  --url http://localhost:3003/login \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.0.0' \
  --data '{
		"email": "mamma@example.com",
		"password": "hej1234"
}'
```  
  
Response:  
```
{"message":"Logged in","accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTE0YjlhYTgwODM2NjE3Mzg0MzNkOCIsImlhdCI6MTc0MzA4MTc2MSwiZXhwIjoxNzQzMDg1MzYxfQ.UMeJi1X6X3eEqpdHR7PG9OmeIATwyv6T9VIxQ-2rNRg"}
```

Create a new list:   
```
curl --request POST \
  --url http://localhost:3003/lists \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZGVjYTJjNGM5NzFjOWE5ODI2YjkzMSIsImlhdCI6MTc0MzIwNzkwMywiZXhwIjoxNzQzMjExNTAzfQ.9wUH67qWw0lj-FGoXQ-8OeLCtd54BVC0R_Kpb4jhOwQ' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.3.1' \
  --data '{
	"title": "casso",
	"description": "bday"
}'
```   
Response:   
```
{"newList":{"userId":"67deca2c4c971c9a9826b931","username":"Eva","title":"casso","description":"bday","_id":"67e73e10928bc7969926f3f8","createdAt":"2025-03-29T00:25:52.985Z","updatedAt":"2025-03-29T00:25:52.985Z","__v":0}}
```
-------------------------  
  
To get all items from a specific list:
```
curl --request GET \
  --url http://localhost:3003/items/67e334da46474e379494704c \
  --header 'User-Agent: insomnia/10.3.1'
```  
Response:  
```
[
	{
		"_id": "67e332c75fa4f644a26e2a15",
		"description": "S and pink",
		"listId": "67e334da46474e379494704c",
		"price": 260,
		"createdAt": "2025-03-25T22:48:39.687Z",
		"updatedAt": "2025-03-25T22:48:39.687Z",
		"__v": 0
	},
	{
		"_id": "67e477090a47815afdbf714b",
		"description": "1 grej",
		"listId": "67e334da46474e379494704c",
		"price": 260,
		"createdAt": "2025-03-26T21:52:09.533Z",
		"updatedAt": "2025-03-26T21:52:09.533Z",
		"__v": 0
	}
]
```
### Deployed

To register:  
  
  ```
  curl --request POST   --url https://u05-restfulapi-chokladglasyr.onrender.com/register   --header 'Content-Type: application/json'   --header 'User-Agent: insomnia/11.0.0'   --data '    {
        "name": "janee",
        "email": "jane@example.com",
        "password": "hej1234",
        "confirmed_password": "hej1234"
    }' | json_pp
```   
   
Response:  
  
  ```
  {
   "newUser" : {
      "__v" : 0,
      "_id" : "67e5c85938b813fc18775ad0",
      "admin" : false,
      "confirmed_password" : "$2b$10$oJ6XKpTjlgU.zupIcuh36OB6izzP/OEzGFPqI9x.WfvLltZaWFaTu",
      "createdAt" : "2025-03-27T21:51:21.267Z",
      "email" : "jane@example.com",
      "name" : "janee",
      "password" : "$2b$10$YdYOVmKMTIkwiXQsBaTrNeS5CBa6p.uxb824QxeZMB16IoWKSouSm",
      "updatedAt" : "2025-03-27T21:51:21.267Z"
   }
}
```  
  
Tring to update a user without being logged in:  
  
  ```
  curl --request PUT \
  --url http://localhost:3003/users/67deca2c4c971c9a9826b931 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.3.1' \
  --data '{
	"name": "Casso"
}' | json_pp
```  
  
Response:  
  
```
{
   "message" : "You need to log in to be able to do that"
}
```
  
Create a new list:  
```
curl --request POST \
  --url https://u05-restfulapi-chokladglasyr.onrender.com/lists \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTVjN2JlOGYyYjMyNDYxMDIxNjZkOCIsImlhdCI6MTc0MzIwODQzOCwiZXhwIjoxNzQzMjEyMDM4fQ.Kdxm3W4OhTGTnyuEtNj1wYxUIhuQ8Z2cHfD59K0iZVM' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.3.1' \
  --data '{
	"title": "pappa",
	"description": "bday"
}'
```
Response:  
```
{"newList":{"userId":"67e5c7be8f2b3246102166d8","username":"pappa","title":"pappa","description":"bday","_id":"67e740956a9c6f4a3f94347e","createdAt":"2025-03-29T00:36:37.741Z","updatedAt":"2025-03-29T00:36:37.741Z","__v":0}}
```

