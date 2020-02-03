# ledis-cli
Simple clone version of Redis-CLI

# LEDIS-CLI README

## Outline

1. Setting up
  - clone this repo
  - install nodejs, npm, yarn
  - run "yarn install" to install all the dependencies
  - run "yarn dev" to start the app locally
2. Description
   1. About Ledis-CLI
   2. Demo video
   3. Screenshots
   4. UI
   5. Functionality
   6. Some thoughts
   7. Improvement
3. Architecture
   1. Architecture
   2. Folder structure
   3. The custom data type
   4. The custom command

# 1. Description

## 1. 1. About Ledis-CLI

​	Ledis is a stripped down version of Redis -  a popular in-memory data structure store that is widely used in many applications, either as cache, complex data structure, or store application data itself. Ledis-CLI was build on ReactJS - a popular frontend library, which means it run on web browser, such as Chrome, Firefox,... As a simple clone version of Redis, Ledis can only run some of Redis's commands and support only two data structure, string and set.

## 1. 2. Demo video

[Demo video on Youtube](https://youtu.be/0DNNogV2ftY)



## 1. 3. Screenshots

![screenshot](https://i.imgur.com/IyVmejL.png)

![screenshot](https://i.imgur.com/FcSb6HQ.png)

## 1. 4. Functionality

- Ledis can run all the command required in **the requirement**, plus these commands:
  - PING: check app status, return PONG as success.
  - CLEAR: clear the console window.
  - FLUSHALL: wipe out all the data.
  - HELP: show help panel.

- Support colored response, like:
  - Green for successful response.

  - Red for error response.

  - Purple for null response.

    

- A help panel, it may be strange for a console window, but it's a web-base CLI, who can limit the web? :smile:

- Use up or down arrow key to trace back old entered command

- ...

## 1. 5. Some thoughts

Wow, this is a interesting requirement, app, small app but so many problems. I think some of the most important things to think about are how to organize the code to simply add new data structure or a new command, and how to make the UI similar to the console window. 

So I came with the OOP approach to organize custom command and custom data structure. I try to make the UI as similar as possible to the console window, add command-history, add some colors and a help panel.

## 1. 6. Improvement

- Multiple line command edit (currently single line input command).
- Improve this README file.
- 

# 2. Architecture (about the code)

## 2. 1. Architecture

![architecture](https://i.imgur.com/e7mBDge.png)



The structure is divided into multiple layers:

- Components: React components, which render the web UI
- Services: contains custom build function which can handle specific task like:
  - Command service: parse user input into array of arguments, execute the command
  - Local storage service: handle the read and write to local storage
  - Help service: get info from commands
  - ...
- Store: a single store which stores all the data
- Data types: contains the custom data type (data structure) like LedisString (string), LedisSet (set),... each data type has it own methods and properties to interact.
- Commands: contains the custom command and it's algorithm to manipulate or query data

## 2. 2. Folder structure

![folder structure](https://i.imgur.com/Lfr3Gkd.png)



Folder is structured like the structure of layers

## 2. 3. The custom data type (data structure)

The custom data type (data structure) like LedisString (string), LedisSet (set),... 

Each data type has it own methods and properties to interact.

Developer who want to create new data type must create new data type class extend the DefaultDataType, override the serialize and deserialize method to parse json data in the right way, then create some necessary methods to interact with the data value.

## 2. 4. The custom command

Custom command like GET, SET (string), SADD, SMEMBERS (set),... has to be defined to instruct how to execute the user input command. Like the custom data type, custom command has to be extended from the DefaultCommand and create necessary method.



### updating...


