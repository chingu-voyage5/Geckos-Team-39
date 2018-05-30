# Geckos-Team-39
Add-project-description-here ! | Voyage-5 | chingu.io

<h2> Fork the project </h2>

Use the Fork button (top right) to create your own copy. After the process completes, you'll be looking at your own fork on GitHub.

<h2> Clone to local </h2>

From your own fork of the repo on GitHub, select the Clone or download button. Copy the URI from the text box that opens up. It will be something like: https://github.com/your-gh-username/Geckos-Team-39.git
Open your terminal, and cd to your preferred directory. Then git clone the repo:

```
$ git clone https://github.com/your-github-username/Geckos-Team-39.git

$ cd Geckos-Team-39
```
<h2> Set the upstream remote </h2>

When you clone down a repo, the local copy calls your GitHub copy origin. You should also set upstream as the name of the main Geckos-Team GitHub repo. This is needed when you want to update the forked copy so that it can match the changes done in main repo.

```
$ git remote add upstream https://github.com/chingu-voyage5/Geckos-Team-39
```

Run `git remote -v` to check the status, you should see something like this:

```

$ origin https://github.com/your-github-username/Geckos-Team-39.git (fetch)
$ origin https://github.com/your-github-username/Geckos-Team-39.git (push)
$ upstream https://github.com/chingu-voyage5/Geckos-Team-39 (fetch)
$ upstream https://github.com/chingu-voyage5/Geckos-Team-39 (push)

```
<h2> Pull in changes from upstream </h2>

As other people make changes to the docs, you need to keep your local copy up to date.

```
$ git fetch upstream master or git fetch upstream develop
$ git checkout master or git checkout develop
$ git merge master/upstream or git merge develop/upstream

```
After pulling in the changes you can create a new branch using the command 

```
git checkout -b branch-name
```
If without pulling the changes you create a new branch, then it may have merge conflicts. Make sure before creating any branch all the changes have been pulled in.

While creating a new barnch also make sure you are in the updated branch that is either master or develop.

<h2> Push Your Branch </h2>

Once your work on the issue is completed, add the files you've changed or created, and write a relevant commit message describing the changes.

```
$ git add my_changed_files
$ git commit -m "A small but relevant commit message"
```

Then, push the changes. 

$ git push origin branch-name

Sometimes when you have edited your files using github online editor instead of doing that locally, you need to pull the changes first
using :

```
$ git pull origin branch-name

```
<h2> Issue a Pull Request </h2>

A pull request (or PR) is a request from you to the project maintainers, for us to pull in the changes to the main repo.

Go the <a href ="https://github.com/chingu-voyage5/Geckos-Team-39"> main repo </a> on GitHub. You'll see a message there referencing your recently pushed branches. Select Compare & pull request to start a pull request.

Follow GitHub's instructions. The Base fork should be the main repo, and base should be develop or master. Your repo and working fork should be listed beside them. (This should all populate by default, but be sure to double check.) If there is a green Able to be merged message, you can proceed.

You must include a PR comment.

