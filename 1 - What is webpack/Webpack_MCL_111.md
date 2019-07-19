Server side templating it depend on backend server. Here we create a fully render html doc and send it to client. In server side templating world we send our n new page every time the request is being made for any page. 
However SPA is when we send a bare bone of html then js is loaded with it and thus runs js code on client browser assembling the page. The page is assembled using js every time  a new page is required. Modern Web development needs large js code. The problem with large js code is that they are based on single responsibility principle and thus webpack assembles the codes in correct order required tends to make maintenance easy.
As amount of js code becomes large each file is responsible for one thing and thus it is easy to maintain.
Flat folder, long  descriptive names are ideal for maintenance of file.
The problem occurs when interdependency occurs one file depends on other file that may depend on other file. And this may create a complex network and needs to be loaded correctly to be able to used that's what webpack does 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTExNjg3NjIyMV19
-->