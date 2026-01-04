---
description: Create a git commit with proper formatting
---

Create a git commit by following these steps:

1. Run `git status` and `git diff` in parallel to see all changes (both staged and unstaged)
2. Analyze all changes and draft a concise commit message that:
   - Summarizes the changes made, including why and what
3. Must add all untracked files (even if not related to the current changes) to staging area with `git add`
4. Run `git status` after the commit to verify success

Important:

- Use HEREDOC format for commit messages for proper formatting
- Do NOT push to remote unless explicitly asked
- If pre-commit hooks modify files, verify it's safe to amend (check authorship and push status)
- Do not create empty commits if there are no changes
