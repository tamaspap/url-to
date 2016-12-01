What is this?
===============

This is a lightweight helper for working with URLs in javascript.

##How to use it

**1. Get/Set the base url**  
The base url is detected automatically. However, if you want to use a custom base url, use this function as a setter.

    URLTo.base(); -> http://www.example.com
    URLTo.base(http://www.another.com);
    
**2. Create absolute url to a page**

    URLTo.page("about"); -> http://www.example.com/about
    URLTo.page("$1/$2", ["josh", "profile"]) -> http://www.example.com/josh/profile
    URLTo.page("products/:product_id/show", {":product_id": 1234}) -> http://www.example.com/products/1234/show

    
**3. Create absolute url to an API endpoint**

    URLTo.api("users/$1", [1234]); -> http://www.example.com/api/users/1234
    URLTo.api("users/:user_id", {":user_id": 1234}); -> http://www.example.com/api//users/1234
    

**4. Get/Set API endpoint url**

    URLTo.apiBase(); -> http://www.example.com/api
    URLTo.apiBase(http://www.another.com/api);

**5. Build a url**

    URLTo.build("http://www.example.com", "$1/$2", ["josh", "profile"]) -> http://www.example.com/josh/profile
    URLTo.build(http://www.example.com, "products/:product_id/show", {":product_id": 1234}) -> http://www.example.com/products/1234/show    
    
    
    
## Licence

Licensed under the MIT License.