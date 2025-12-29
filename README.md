# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/2609a076-b5a3-4787-bdd9-a82b8f9bbf8b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2609a076-b5a3-4787-bdd9-a82b8f9bbf8b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2609a076-b5a3-4787-bdd9-a82b8f9bbf8b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


## GitHub Pages Deployment

This project is configured to deploy to GitHub Pages at `https://<your-username>.github.io/gv-travels/`

### Initial Setup

1. **Ensure your repository name matches the base path** in `vite.config.ts` (currently set to `/gv-travels/`)
   - If your repo is named differently, update the `base` path in `vite.config.ts`

2. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click Save

### Deploy to GitHub Pages

Every time you want to deploy updated code:

```bash
# Build the project for production
npm run build

# Deploy to GitHub Pages (this runs predeploy automatically)
npm run deploy
```

The `deploy` script will:
1. Build your project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Your site will be live at `https://<your-username>.github.io/gv-travels/`

### Important Notes

- ✅ The project uses **HashRouter** which works perfectly with GitHub Pages (no server-side routing needed)
- ✅ The base path `/gv-travels/` is automatically set in production builds
- ✅ Favicon is configured using the GV Travel logo
- ✅ `.nojekyll` file is included to prevent Jekyll processing

### Troubleshooting

- If assets don't load, verify the `base` path in `vite.config.ts` matches your repository name
- Clear browser cache after deployment
- Check that the `gh-pages` branch exists and contains the `dist` folder contents