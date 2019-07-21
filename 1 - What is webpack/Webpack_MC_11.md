# Need for webpack
### Server Side Templating
Server side templating it depend on backend server. Here we create a fully render html doc and send it to client. In server side templating world we send our n new page every time the request is being made for any page. 
### Single Page Application
However SPA is when we send a bare bone of html then js is loaded with it and thus runs js code on client browser assembling the page. The page is assembled using js every time  a new page is required. 
### Modern Web Development
Modern Web development needs large js code. The problem with large js code is that they are split based on single responsibility principle into simpler file of components. As amount of js code becomes large each file is responsible for one thing and thus it is easy to maintain but some problem arrises:

 - Interdependency of files and according loading hierarchy.
 - Also more files take more time to loads over network.

The problem occurs when interdependence occurs one file depends on other file that may depend on other file. And this may create a complex network and needs to be loaded correctly to be able to used that's what webpack does it put all files together and does also load the modules in correct order. Correct load order and single bundled file. 

> Flat folder, long  descriptive names are ideal for maintenance of files structure in project.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQwMTc1NDM5M119
-->