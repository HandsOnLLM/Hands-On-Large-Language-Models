# 📜 Git Cheat Sheet: The "Study Mode" Workflow

**Goal:** Keep the original book content on `main` and your exercises on `my-solutions`.

## 1. Initial Setup (Do this once)

Run these commands inside your project folder after cloning.

```bash
# 1. Link the original book repository (replace URL with the real one)
git remote add upstream https://github.com/original-author/book-repo.git

# 2. specificy that you want to fetch tags and branches from upstream
git fetch upstream

# 3. Create and switch to your study branch
git checkout -b my-solutions

```

---

## 2. Daily Routine (Coding & Saving)

**Always** ensure you are on the correct branch before starting work.

```bash
# 1. Check which branch you are on (look for the *)
git branch

# 2. If not on my-solutions, switch to it
git checkout my-solutions

# ... Create files, write code, solve exercises ...

# 3. Save your work
git add .
git commit -m "Solved exercises for Chapter X"

# 4. Upload to your GitHub fork
git push origin my-solutions

```

---

## 3. Updating the Book (Syncing)

Do this when the original author adds new content or fixes bugs.

```bash
# 1. Switch to the clean branch
git checkout main

# 2. Download updates from the original author
git pull upstream main

# 3. Update your GitHub fork (optional, but good practice)
git push origin main

# 4. Switch back to your work
git checkout my-solutions

# 5. Bring the new book content into your workspace
git merge main

# 6. Push the updated workspace to your GitHub
git push origin my-solutions

```

---

## 🆘 Emergency: "I committed to main by mistake!"

If you forgot to switch branches and saved your exercises to `main`:

```bash
# 1. Create a temporary branch to save your work right here
git branch backup-work

# 2. Reset 'main' back to match the remote origin (erasing local commits)
git reset --hard origin/main

# 3. Switch to your solutions branch
git checkout my-solutions

# 4. Merge the backup work you just saved
git merge backup-work

# 5. Delete the backup branch
git branch -d backup-work

```

---

## 💡 Pro Tips & Tricks

### 1. Ignore "Junk" Files (.gitignore)

Since you are running code, your computer will generate temporary files (like `__pycache__` in Python or `node_modules` in JS). You don't want to commit these.

* Create a file named `.gitignore` in the root folder.
* Add lines for files you want Git to ignore.
```text
# Example .gitignore content
__pycache__/
*.log
.DS_Store
.env

```



### 2. Visualize the History

It can be hard to visualize how `main` and `my-solutions` relate. Use this command to see a text-based graph:

```bash
git log --oneline --graph --all --decorate

```

### 3. Check what you changed

Before you commit, if you want to see exactly what lines of code you wrote:

```bash
git diff

```

### 4. Resolving Conflicts

If you edit a file that the author *also* edited (rare in this workflow, but possible), `git merge main` will stop and tell you there is a **CONFLICT**.

1. Open the file in VS Code (or your editor).
2. Look for `<<<<<<< HEAD` markers.
3. Choose which code to keep (yours or theirs).
4. Save the file.
5. Run `git add .` and `git commit` to finish the merge.