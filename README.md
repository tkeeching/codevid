# Under Development 🛠 ...

## GitHub Collaboration

Issues and pull requests are welcomed on GitHub.

### Terminology

* **Gitlord** - The person managing the merging of work on Git.
* **Everyone else** - All other people in the team.
* **Local** - Local Git repo on a person's machine.
* **Remote** - Remote Git repo on person's Github account.
* **Repo** - Git repository.

### Create Project (one-off)

* **Everyone else**: Fork the repo on Github.
* **Everyone else**: Clone repo on Github down to local machine.
* **Everyone else**: Add git remote that points to Gitlord's Github repo on your local repo. 


### Recurring Workflow

0. For first time contributor, make sure you have completed **Create Project** steps from above before proceeding further.
1. Make sure you are in the feature branch which contains work you want to provide to Gitlord's Github repo.
2. Add & Commit your work: Run `git add -A` & `git commit -m 'commit message'`.
3. To download commits to local machine:
  Run `git fetch gitlord`
4. To rebase commits to feature branch:
  Run `git rebase gitlord/master`
5. Run `git push origin feature_branch`, where *feature_branch* is the name of your branch.
6. Make pull request from your branch to Gitlord's master.
7. Gitlord to inform teammates to pull down the changes using steps 3 & 4.