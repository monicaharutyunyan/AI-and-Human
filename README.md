# Apricot Stone City Storyteller

This is an example from Dylan and Sophia's TUMO workshop on designing an interactive storytelling chatbot. All the code here was written during and for this course.

I recommend checking out the example I have in the `modules` folder to get a sense for how to create an interactive story.

## Installation

To set up this repo, open a terminal and navigate to the directory where you would like to clone *Storyteller*, then run the following commands (you should be able to just copy and paste these):

```
git clone https://github.com/empower-lab-dartmouth/apricot-stone-city.git
```
Now, enter your username. DON'T enter your password, if you do you will see an error like this:

```
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
fatal: Authentication failed for 'https://github.com/empower-lab-dartmouth/apricot-stone-city.git/'
```

Instead of entering your password, create an access token by following the instructions here: 
https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

You can give this access token all the permissions available(You should check all the boxes). Now, tell github who you are by running (but with your own name and email)

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

Now, do the following:
```
cd apricot-stone-city
npm install
cp .env.example .env
```

Now, open the *Storyteller* project in vscode and open the `.env` file, you should update the API key here to be your Telegram API key. You can set that up by following the [instructions here](https://www.siteguarding.com/en/how-to-get-telegram-bot-api-token). 


## How to push your local changes
After verifying that your changes are working and that the local chatbot server is not crashing (very important :) your friends will thank you for not breaking production), you can push your changes to remote by doing the following:

```
git status
```
this will show you a list of the files that were changed. Please do this to verify that no unexpected files show up as being changed.

```
git pull
```
This will pull changes from remote. You should ALWAYS pull changes before pushing. The idea here is that while you were working other people may have pushed changes that—when mixed with your code changes—could break things. If you don't pull first, you could be creating errors. So, use this command. This may result in a merge conflict, don't worry, that just means that your changes conflict with other changes that were made while you were working. To fix that, just go through and resolve the merge conflict line by line yourself and verify—by running locally— that everything looks good to go. 

### Fixing a merge conflict when trying to push
An easy way to resolve a merge conflict is to literally copy all of your code changes onto a notepad, then run this command, which will OVERWRITE your local changes with the most recent changes on remote. NOTE!! this will DELETE all your changes!!! Please copy your changes first :) don't lose your work!

```
git reset --hard origin/master
git pull
```

After running this, add your code changes back as an addition to most up-to-date remote code, make sure you're using your local BOT_TOKEN and test the bot again. Does it work?

### Pushing after fixing merge conflicts
Then, once you're confident. Run:

```
git add .
```

this adds all the files you've changed to the list of changes to be committed. Make sure you're not pushing your BOT_tOKEN in .env to remote by running:

```
git status
```
Do you see .env? That means you're preparing to push local changes to the `.env` file. That's probably bad. If so, run:

```
git revert .env
```
If you see any other files that look like they don't belong in your list of changes, you can also revert those. Then do the following (with your own commit message):

```
git commit -m "Your commit message here"
git push
```

That should do the tick. You can check https://github.com/empower-lab-dartmouth/apricot-stone-city to verify that your changes were committed.

## Testing locally

Once that's ready, everything should be set up to run the example. To continuously rebuild and relaunch the application, you can run the following command: 

```
npm run start:dev
```

Now you should be able to chat with your bot :) try sending it a message...


## Debugging

Since things always break :) here's some additional notes that might be useful:

### Port is blocked
If you get the error message:
```
  Starting inspector on 127.0.0.1:9229 failed: address already in use
[nodemon] app crashed - waiting for file changes before starting...
```
That means some other process is already using the port you are trying to use. To fix this, you need to find the process id (also called PID) of the process that is using that port and kill that process. You can find the process id by doing the following:
```
lsof -i :<PORT NUMBER>
```

That should print out something like:
```
COMMAND  PID        USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    9959 learninglab   27u  IPv4 0xf7cc48ff3923c53d      0t0  TCP localhost:9229 (LISTEN)
```
In the example above, the PID you want is 9959. Then you can use this PID to kill the process by running the following with your PID:
```
kill -9 <PROCCESS ID (PID)>
```
You can check that this worked by running 
```
lsof -i :<PORT NUMBER>
```
again and verifying that no processes are using that port. After that, you should be good to go. You can try running your app again.
