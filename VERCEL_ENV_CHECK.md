# Vercel Environment Variables - Step-by-Step Verification

## Critical: How to Verify Variables Are Actually Set

### Step 1: Go to Vercel Dashboard
1. Open https://vercel.com/dashboard
2. Click on your project (`arielmeira`)

### Step 2: Check Environment Variables
1. Click **Settings** (top navigation)
2. Click **Environment Variables** (left sidebar)
3. You should see a table with your variables

### Step 3: Verify Each Variable

For EACH of these three variables, check:

#### Variable 1: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- ✅ Does it exist in the list?
- ✅ Is the name EXACTLY `NEXT_PUBLIC_EMAILJS_SERVICE_ID`? (case-sensitive)
- ✅ Does it have a value? (click to see/edit)
- ✅ Is "Production" checked? (should show a checkmark)

#### Variable 2: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- ✅ Does it exist?
- ✅ Exact name: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- ✅ Has a value?
- ✅ "Production" checked?

#### Variable 3: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- ✅ Does it exist?
- ✅ Exact name: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- ✅ Has a value?
- ✅ "Production" checked?

### Step 4: If Any Variable is Missing or Wrong

**To Add/Edit:**
1. Click **Add New** (or click existing variable to edit)
2. **Key:** Enter EXACT name (e.g., `NEXT_PUBLIC_EMAILJS_SERVICE_ID`)
3. **Value:** Enter your EmailJS value
4. **Environment:** Check ✅ **Production** (and Preview/Development if you want)
5. Click **Save**

### Step 5: After Adding/Editing Variables

**IMPORTANT:** You MUST trigger a new deployment:

**Option A: Push a commit**
```bash
git commit --allow-empty -m "Trigger deployment"
git push
```

**Option B: In Vercel Dashboard**
1. Go to **Deployments** tab
2. Click the **three dots** (⋯) on latest deployment
3. Click **Redeploy** (if available)
4. Or click **Create Deployment** → Select branch `main` → Deploy

### Step 6: Verify Build Includes Variables

After deployment:
1. Go to **Deployments** → Click on the new deployment
2. Click **Build Logs** tab
3. Look for any errors about environment variables
4. The build should complete successfully

### Step 7: Test on Live Site

1. Visit your live site
2. Open browser console (F12)
3. Look for the debug log: `🔍 EmailJS Environment Variables Debug`
4. Check if variables show as "SET" or "MISSING"

## Common Mistakes

❌ **Variable name wrong:** `EMAILJS_SERVICE_ID` instead of `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
❌ **Production not checked:** Variable exists but only for Preview/Development
❌ **Not redeployed:** Added variables but didn't trigger new deployment
❌ **Typo in name:** Extra space or wrong capitalization

## Still Not Working?

Take a screenshot of your Vercel Environment Variables page and share:
- The variable names
- Whether Production is checked
- Any error messages in build logs

