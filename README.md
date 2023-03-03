# Step by Step instructions - To use this project as your start point

### Architecture of this project
1. If you want to understand the initial state of the whole project please review the files according with this diagram. 
![General Arquitecture](https://raw.githubusercontent.com/Yosolita1978/screenshoots/df4ffad176d63a2fb1a31c24b341b3a8115975a7/2023/H1/FlowchartArchitecture.png)

### For using this exciting code
1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/week8Game.git <NAMENEWDIRECTORY>`
![You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%207.50.46%20PM.png?raw=true)

2. To clean your folder from the owner git, run the command `rm -rf .git` inside the folder <NAMENEWDIRECTORY>

3. Go to the server folder in the project (`cd server`) and run the command `npm install`

4. Go to the cliente folder (`cd .. and cd client`) and run the command `npm install`

6. This template have two server already working. Both server should run now with `npm run dev`. Please note that in server 5000 you will have the backend and in server 3000 you will have dev from React. 

### Connection an API for the Game questions

We will use the [TRIVIA APP](https://opentdb.com/api_config.php) for this project. 
1. Select the number of questions
2. Select the category
3. Selet the Difficulty
4. Select the Type
5. For encoding, please use the `Defaul Encoding` function. 
That will give your an URL to use for your fetch request (in the Backend). Please note that you don't need to ask the user for ANY of this information. 
![Screenshot](https://raw.githubusercontent.com/Yosolita1978/screenshoots/83689f3f5b3cff7d7def28efe112a21f97ffeb98/2023/H1/Screen%20Shot%202023-03-03%20at%202.45.33%20PM.png)

### What you're seeing in the Frontend (localhost:3000)

This excisting code will let you see an initial screen asking for the user name and that screen will get the user to a screen with all the questions listed. Please note that this frontend doesn't do anything else. 

#### This that the Frontend does:
* Ask the user for their name
* Grab that name to show it in a h3 tag inside the header component
* Load all the questions (5) from the endpoing `api/game` in the backend. 
* Show those questions in card components. 

#### This that the Frontend doesn't do:
* Check if the user answer correctly any of the questions.
* Grab the information of how many correct answer the used got in a game.
* Show the correct answer if the user select the incorrect.
* Any kind of logic if the user win or not the game
* Show a message to the user in case they win or not the game 
* Use the right format to show text with special characters

### What you're seeing in the Backend (localhost:5000)

This excisting code will let give you a single endpoint `api/game` that shows the information inside the file `fakedata.js`.
The information is 5 questions. If you want to see that data in JSON format, go to `http://localhost:5000/api/game`

