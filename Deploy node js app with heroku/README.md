1. Install node
			https://nodejs.org/en/

2. Install Git
			https://git-scm.com/downloads

3. Install Heroku
			https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

4. Open Command Prompt
			start > run cmd.exe
			
			Run command:
				c:\Users\AJJAXPUNK>node -v
				(It shows the version of node installed in your computer)
				
				c:\Users\AJJAXPUNK>git
				(It shows the git info)
				
			Create Directory:
				c:\Users\AJJAXPUNK>mkdir simple-app
				c:\Users\AJJAXPUNK>cd simple-app
			
			Initialize npm:
				c:\Users\AJJAXPUNK\simple-app>npm init
				
				c:\Users\AJJAXPUNK\simple-app>npm install express --save
				
				Open package.json file in editor and add 
					"scripts":{
					"start":"node index.js"
					}
				
				Example:
						{
							"name": "simple-app",
							"version": "1.0.0",
							"description": "Simple node js app for heroku",
							"main": "index.js",
							"scripts": {
										"test": "echo \"Error: no test specified\" && exit 1"
										},
							"author": "user",
							"license": "ISC",
							"dependencies": {
											"express": "^4.16.4"
											},
							"scripts":{
										"start":"node index.js"
										}
						}

			Create file index.js and add below code:
						var express = require("express");
						var app= express();
						var port=process.env.PORT ||3000;

						app.get("/", function(req, res){
							res.send("Welcome to NODEJS APP on Heroku!");
						});

						app.listen(port);
			
			Run in cmd:
				c:\Users\AJJAXPUNK\simple-app>node index
				
				Go to web browser and type http://localhost:3000/
				You will see a page with text "Welcome to NODEJS APP on Heroku!"
				
			
			Create file Procfile with no extension and add below text to it
						web: node index.js
			
			Login to heroku
				https://www.heroku.com/
				
				Create new app without app name
					just click on Create App button
				
				Select Deployment method to Heroku git
				
			Run in cmd:
				c:\Users\AJJAXPUNK\simple-app>heroku login
					(It will redirect you to heroku login page, login from here)
					
				c:\Users\AJJAXPUNK\simple-app>git init
				
				c:\Users\AJJAXPUNK\simple-app>heroku git:remote -a blooming-river-75294  //[blooming-river-75294] is app name from heroku dashboard
				
				c:\Users\AJJAXPUNK\simple-app>git add .
				
				c:\Users\AJJAXPUNK\simple-app>git commit -m "setup"  //["setup"] is message
				
				c:\Users\AJJAXPUNK\simple-app>git push heroku master
				
				c:\Users\AJJAXPUNK\simple-app>heroku open
			
