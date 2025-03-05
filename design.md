# Backgroundcheck  
### Who is it for?  
Anyone. The idea is that its a list that we can share between ourselves
### Why?  
So if someones birthday is coming up, the can log in, look for the and browse their list/lists to find something that they can buy.  
  
![alt text](/images/image-1.png)   
+ Users
+ Lists
+ List items
    
  
![alt text](/images/image-2.png)  
```
/
/search
/lists  
/list/:listid  
/list/:listid?delete=true  
/list/:listid?update=true  
/list/create  
/list/:listid?additem=true  
/list/:listid/item/:itemid?delete=true  
/list/:listid/item/:itemid?update=true  
```
  
![alt text](/images/image-3.png)  
### User 
```
//collection resource for users
{
    "users": {
        "size": "2",
        "user": [
            {
                "id": "1",
                "name": "ida",
                "email": "ida@example.com",
                "password": "test1234",
                "confirmed_password": "test1234"
            },
            {
                "id": "2",
                "name": "aylin",
                "email": "aylin@example.com",
                "password": "test5678",
                "confirmed_password": "test5678"
            }
        ]
    }
}

//collection resources for single user
{
    "user": {
        "id": "1",
        "name": "ida",
        "email": "ida@example.com",
        "password": "test1234",
        "confirmed_password": "test1234",
        "lists": {
            "size": "1"
        },
        "list": [
            "id": "1",
            "userId": "1",
            "title": "Christmas list",
            "description": "for christmas",
            "items": {
                "size": "2"
            },
            "item": [
                {
                    "id": "1",
                    "listId": "1",
                    "link": "https://www.zalando.se/tom-tailor-denim-rounded-hem-t-shirt-bas-white-to722o1ah-a12.html",
                    "description": "S, beige abbey stone",
                    "photo": "",
                    "price": "159"
                },
                {
                    "id": "2",
                    "listId": "1",
                    "link": "https://www.zalando.se/yourturn-unisex-solglasoegon-blue-yo154k01a-k11.html",
                    "description": "blue",
                    "photo": "",
                    "price": "169"
                }
            ]
        ]
    }
}
```
  
### List  
```
//collection resource for lists
{
    "lists": {
        "size": "2",
        "list": [
            {
                "id": "1",
                "userId": "1",
                "title": "Christmas list",
                "description": "for christmas",
            },
            {
                "id": "2",
                "userId": "2",
                "title": "bday list",
                "description": "for my bday",
            }
        ]
    }
}
//collection resource for single list
{
    "list": {
        "id": "1",
        "userId": "1",
        "title": "Christmas list",
        "description": "for christmas",
    },
    "items": {
        "size": "2"
    },
    "item": [
        {
            "id": "1",
            "listId": "1",
            "link": "https://www.zalando.se/tom-tailor-denim-rounded-hem-t-shirt-bas-white-to722o1ah-a12.html",
            "description": "S, beige abbey stone",
            "photo": "",
            "price": "159"
        },
        {
            "id": "2",
            "listId": "1",
            "link": "https://www.zalando.se/yourturn-unisex-solglasoegon-blue-yo154k01a-k11.html",
            "description": "blue",
            "photo": "",
            "price": "169"
        }
    ]
}
```

### List items
```
//collection resource for items
{
    "items": {
        "size": "4",
        "item": [
            {
                "id": "1",
                "listId": "1",
                "link": "https://www.zalando.se/tom-tailor-denim-rounded-hem-t-shirt-bas-white-to722o1ah-a12.html",
                "description": "S, beige abbey stone",
                "photo": "",
                "price": "159"
            },
            {
                "id": "2",
                "listId": "1",
                "link": "https://www.zalando.se/yourturn-unisex-solglasoegon-blue-yo154k01a-k11.html",
                "description": "blue",
                "photo": "",
                "price": "169"
            },
                        {
                "id": "3",
                "listId": "2",
                "link": "https://glowid.se/products/glowid-glass-skin-drops",
                "description": "",
                "photo": "",
                "price": "380"
            },
                        {
                "id": "4",
                "listId": "2",
                "link": "https://www.zalando.se/kaffe-penny-pennkjol-svart-ka321b000-q00.html",
                "description": "black, m",
                "photo": "",
                "price": "265"
            },
        ]
    }
}

/collection resource for item
{
    "item": {
        "id": "1",
        "listId": "1",
        "link": "https://www.zalando.se/tom-tailor-denim-rounded-hem-t-shirt-bas-white-to722o1ah-a12.html",
        "description": "S, beige abbey stone",
        "photo": "",
        "price": "159"
    }
}
```



![alt text](/images/image-4.png)  
HTTP DELETE /list//:listid?delete=true
  