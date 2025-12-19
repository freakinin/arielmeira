# Check Vercel Build Logs

## Critical Step: Verify Variables Are in Build

The environment variables MUST be available during the build process. Let's verify:

### Step 1: Check Build Logs

1. Go to **Vercel Dashboard** → Your Project
2. Click **Deployments** tab
3. Click on your **latest deployment**
4. Click **Build Logs** tab
5. Look for environment variables being used

### Step 2: What to Look For

In the build logs, you should see:
- Build starting
- Environment variables being loaded
- `NEXT_PUBLIC_` variables being embedded

If you see errors about missing variables, that's the problem.

### Step 3: Alternative - Check Build Output

The variables should be embedded in the JavaScript bundle. Let's verify:

1. After deployment, visit your site
2. Open browser DevTools (F12)
3. Go to **Sources** or **Network** tab
4. Look for the main JavaScript bundle
5. Search for your EmailJS service ID or template ID
6. If they're not there, the build didn't include them

## If Variables Are Missing in Build

This means Vercel isn't passing them to the build. Try:

1. **Delete and re-add variables** in Vercel
2. **Make sure Production is checked** for each
3. **Trigger a fresh deployment** (not redeploy)
4. **Check Vercel project settings** - make sure it's detecting Next.js correctly

