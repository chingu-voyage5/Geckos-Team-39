## Fork the project

Use the Fork button (top right) to create your own copy. After the process completes, you'll be looking at your own fork on GitHub.

## Clone to local

From your own fork of the repo on GitHub, select the Clone or download button. Copy the URI from the text box that opens up. It will be something like: https://github.com/your-gh-username/Geckos-Team-39.git
Open your terminal, and cd to your preferred directory. Then git clone the repo:

```
$ git clone https://github.com/your-github-username/Geckos-Team-39.git

$ cd Geckos-Team-39
```
## Set the upstream remote

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
## Pull in changes from upstream

As other people make changes to the docs, you need to keep your local copy up to date.

```
$ git fetch upstream master or git fetch upstream develop
$ git checkout master or git checkout develop
$ git merge master/upstream or git merge develop/upstream
```
After pulling in the changes you can create a new branch using the command 

```
$ git checkout -b branch-name
```

**Note:-** Please read the naming conventions for branch names in the [Naming Branches](https://github.com/chingu-voyage5/Geckos-Team-39/blob/master/README.md#naming-branches) section.

If without pulling the changes you create a new branch, then it may have merge conflicts. Make sure before creating any branch all the changes have been pulled in.

While creating a new branch make sure you are in the updated develop branch.

## Push Your Branch

Once your work on the issue is completed, add the files you've changed or created, and write a relevant commit message describing the changes.

```
$ git add my_changed_files
$ git commit -m "A small but relevant commit message"
```

**Note:-** Please read how to write a good commit message in the [Commit Messages](https://github.com/chingu-voyage5/Geckos-Team-39/blob/master/README.md#commit-messages) section.

Then, push the changes. 

```
$ git push origin branch-name
```

Sometimes when you have edited your files using github online editor instead of doing that locally, you need to pull the changes first
using :

```
$ git pull origin branch-name
```
## Issue a Pull Request

A pull request (or PR) is a request from you to the project maintainers, for us to pull in the changes to the main repo.

Go the <a href ="https://github.com/chingu-voyage5/Geckos-Team-39"> main repo </a> on GitHub. You'll see a message there referencing your recently pushed branches. Select Compare & pull request to start a pull request.

Follow GitHub's instructions. The Base fork should be the main repo, and base should be develop or master. Your repo and working fork should be listed beside them. (This should all populate by default, but be sure to double check.) If there is a green Able to be merged message, you can proceed.

You must include a PR comment.

## Naming Branches

Please follow the following guidelines for naming branches. There are four types of branches.
- bug
- feature
- refactor
- style

Please add the branch type with a short description of what you are going to work on when naming the branch.

```
$ git checkout -b type/short-description
```
#### Example:-
```
$ git checkout -b feature/hide-nav-on-scroll
```

## Commit Messages
A good commit message should convey what that commit is about in a clear and concise manner. A commit message consists of a commit title and commit body.

### Commit Title
The first letter should be capitalized and the description should be short and clear.

```
$ git commit -m "Add hover styles"
```
### Commit Body
If the commit needs further explanation it can be added in the commit body.

```
$ git commit -m "Commit title" -m "Commit body message"
```
