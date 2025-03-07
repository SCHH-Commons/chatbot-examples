# Jekyll Website Template

This repository is a Jekyll-based website template. You can use it to quickly create a simple, customizable website using GitHub Pages.

## Getting Started

### 1. Create Your Own Copy
You can either **fork** this repository or create a **new repository from this template**.

- **Using the template** (recommended):
  1. Click the **"Use this template"** button at the top of this repo.
  2. Select **"Create a new repository"** and choose a name for your website.
  
- **Forking the repo**:
  1. Click the **"Fork"** button in the upper right corner of this repo.

### 2. Update Configuration (`_config.yml`)
Modify the `_config.yml` file to personalize your site. Here are the key fields to update:

- **`title`** – The title of your website
- **`description`** – A short description of your website
- **`author`** – Your name or organization

### 3. Customize the Home and About Pages
- **`index.md`** – Edit this file to update the homepage content.
- **`about.md`** – Modify this file to update the "About" page.

### 4. Add Blog Posts
Posts are stored in the `_posts/` directory and must follow Jekyll’s naming convention:  
`YYYY-MM-DD-title-of-post.md`.

To add a new post:
1. Create a new Markdown file in `_posts/` with the format:
   ```
   _posts/2025-03-05-my-first-post.md
   ```
2. Add front matter at the top of the file:
   ```yaml
   ---
   layout: post
   title: "My First Post"
   description: "A short description of the post to be used in the posts index list on the home page."
   date: 2025-03-05
   author: Name of post author
   ---
   ```
3. Write your post content below the front matter.

### Need Help?
Check out the [Jekyll Documentation](https://jekyllrb.com/docs/) for more details on customizing your site.
