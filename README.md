DOCKKERIZE A BACKEND APPLIOCATION: NODEJS WITH EXPRESS BACKEND - WITH A POSTGRES DATABASE - SHIPPED WITH DOCKER
1 - Create Initial Backend package.json file
  - create a folder with the name of your project
  - open it in vscode
* - run - npm init -y

2 - Start Docker Deamon
  - have pre-requisite node.js knowledge to follow through
  - have your docker app running on your machine

3 - Install Express and Postgres
* - run - npm install express pg
  - this will add express and postgres packages to package.json dependencies object

4 - Add dev script to package.json
* - add - "dev": "node server.js"
  - this command will run our server
* - add - db.js file to your project
* - add - server.js file to your project
* - add - test.rest file to your project

5 - Setup the db.js file 
  - see code inside this file
  - here we basically setup our database details - for postgres

6 - Setup the server.js file 
  - see code inside this file
  - here we basically setup our express details - for node
  - we connect it to the database

7 - Setup the test.rest file 
  - this is just like Postman inside vscode
* - add "rest client" to your vscode extensions
  - see code inside this file
  - whenever your write a new request in your test.rest file, restart the server

8 - Writing SQL commands
  - Learn all SQL commands from here: https://www.w3schools.com/sql/

9 - Create Docker file 
* - add -( Dockerfile )- to your project
  - this will setup our entire node environment on a docker container
  - docker helps maintain environment consistency on anyones device
  - we create a mini-environment which is like a virtual computer
  - we have to setup this virtual environment first befor starting the server again
  - see code inside this file
  - a breakdown of each of the Dockerfile commands: [
    FROM - specifies the base image for the Docker image you are creating. All subsequent instructions in the Dockerfile will be applied on top of this base image.
    WORKDIR - sets the working directory for any subsequent instructions that follow it in the Dockerfile. This is where commands like RUN and COPY will be executed.
    COPY - copies files or directories from the host machine to the Docker image. The first argument is the path to the file or directory on the host machine, and the second argument is the destination path in the Docker image.
    RUN - executes a command in the Docker image. This can be used to install packages, run build commands, and do other tasks required to configure the image.
    EXPOSE - documents the ports that the Docker image is expected to listen on when it is run. It does not actually publish the ports.
    CMD - specifies the command to run when the Docker container is started from the image. If the Docker container is started with a command-line argument, it will override the CMD instruction. There can only be one CMD instruction in a Dockerfile, and it should be the last instruction.
  ]

10  - Docker Compose setup
*   - add -( docker-compose.yaml )- file to your project
    - this file helps us run "docker compose up" to start up all our docker commands
    - we need to build our app image
*   - run -( docker build -t localvideos-app . )-
    - after it builds we confirm the image is built 
*   - run -( docker images )-
    - after that we run the  "docker compose up" command
*   - run -( docker-compose up )-

11 - IF YOU EVER HAVE AN ERROR, YOU NEED TO PRUNE, REBUILD THE APP, THEN COMPOSE UP AGAIN
    - if error saying npm not found comes up we run -( docker system prune )- then...
    - to clear all docker environments and rebuild the with -( docker build -t localvideos-app . )-


