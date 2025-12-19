# Deploying to Vercel - Complete Guide

Your project is already configured for static export and ready for Vercel deployment!

## 🚀 Quick Deploy (Easiest Method)

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to [Vercel](https://vercel.com)**
   - Sign up/login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `out` (auto-detected for static export)
   - Install Command: `npm install` (auto-detected)

4. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add your EmailJS variables:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

---

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy:**

   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (select your account)
   - Link to existing project? **No** (first time)
   - Project name? (press Enter for default)
   - Directory? `./` (press Enter)
   - Override settings? **No**

4. **Add Environment Variables:**

   ```bash
   vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
   vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   ```

5. **Redeploy with environment variables:**
   ```bash
   vercel --prod
   ```

---

## ⚙️ Configuration Details

### Static Export Configuration

Your `next.config.mjs` is already set up for static export:

```javascript
const nextConfig = {
  output: 'export', // ✅ Static export enabled
  images: {
    unoptimized: true, // ✅ Required for static export
  },
  trailingSlash: true, // ✅ Better for static hosting
}
```

### Build Output

When you run `npm run build`, Next.js creates:

- `out/` directory with all static files
- Ready for deployment to any static host

---

## 🔧 Vercel-Specific Settings

### Project Settings (in Vercel Dashboard)

**Build & Development Settings:**

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: `out`
- Install Command: `npm install`
- Development Command: `npm run dev`

**These are usually auto-detected, but you can verify them.**

---

## 📝 Environment Variables Setup

### In Vercel Dashboard:

1. Go to your project → **Settings** → **Environment Variables**
2. Add each variable:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `your_service_id`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `your_template_id`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `your_public_key`
3. Select environments: **Production**, **Preview**, **Development**
4. Click **Save**

### Via CLI:

```bash
# Add for all environments
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production preview development

# Or add individually
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production
```

---

## 🌐 Custom Domain (Optional)

1. Go to your project → **Settings** → **Domains**
2. Add your domain (e.g., `arielmeira.com`)
3. Follow DNS configuration instructions
4. Vercel will automatically configure SSL

---

## 🔄 Continuous Deployment

Once connected to GitHub:

- **Automatic deployments** on every push to `main`
- **Preview deployments** for pull requests
- **Production deployments** when you merge

---

## 📊 Deployment Checklist

Before deploying:

- [ ] **Code is pushed to GitHub** (if using dashboard method)
- [ ] **Environment variables are set** (EmailJS credentials)
- [ ] **Build works locally** (`npm run build` succeeds)
- [ ] **Images are in `public/` folder**
- [ ] **Content is added to `data/mockData.ts`**
- [ ] **`.env.local` is NOT committed** (already in `.gitignore`)

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Module not found"**

- Make sure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Error: "Environment variable not found"**

- Check variable names start with `NEXT_PUBLIC_`
- Verify variables are added in Vercel dashboard
- Redeploy after adding variables

**Images not loading**

- Verify images are in `public/` folder
- Check paths start with `/` (not `./` or `public/`)
- Clear browser cache

### Contact Form Not Working

1. Check EmailJS environment variables are set
2. Verify EmailJS service is active
3. Check browser console for errors
4. Test EmailJS template in their dashboard

---

## 🚀 Post-Deployment

After successful deployment:

1. **Test your site:**
   - Visit your Vercel URL
   - Test all sections
   - Test contact form
   - Check mobile responsiveness

2. **Set up custom domain** (optional)
3. **Configure analytics** (optional, in Vercel dashboard)
4. **Set up monitoring** (optional, Vercel provides basic monitoring)

---

## 📚 Useful Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove deployment
vercel remove
```

---

## 🎯 Quick Start Commands

**First-time deployment:**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Add environment variables
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# 5. Deploy to production
vercel --prod
```

---

## 💡 Pro Tips

1. **Preview Deployments:** Every push creates a preview URL - great for testing!
2. **Environment Variables:** Add them in dashboard for easier management
3. **Build Logs:** Check Vercel dashboard → Deployments → View build logs
4. **Automatic HTTPS:** Vercel provides SSL certificates automatically
5. **Global CDN:** Your site is automatically distributed globally

---

**Your project is ready to deploy! 🎉**

Choose the method that works best for you - both are equally valid. The dashboard method is easier for beginners, while CLI gives you more control.
