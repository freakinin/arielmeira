# Environment Variables Troubleshooting

## Problem: "EmailJS configuration is missing"

This error means the environment variables are not being loaded in the browser.

## Solution Steps

### 1. Verify Environment Variables in Vercel

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. Make sure you have these THREE variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

3. **IMPORTANT:** Check that they're set for **Production** environment
   - Each variable should have a checkmark for "Production"
   - If not, edit each variable and check "Production"

### 2. Redeploy After Adding Variables

**Critical:** After adding/changing environment variables, you MUST redeploy:

1. Go to **Deployments** tab
2. Click the **three dots** (⋯) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic deployment

### 3. Verify Variable Names

Make sure variable names are EXACTLY:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` (not `EMAILJS_SERVICE_ID`)
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` (not `EMAILJS_TEMPLATE_ID`)
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` (not `EMAILJS_PUBLIC_KEY`)

The `NEXT_PUBLIC_` prefix is REQUIRED for client-side access.

### 4. Check Build Logs

1. Go to **Deployments** → Click on your latest deployment
2. Check the **Build Logs**
3. Look for any errors about environment variables

### 5. Test Locally (Optional)

Create `.env.local` file in project root:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then run:
```bash
npm run dev
```

Test the form locally to see if it works.

## Common Issues

### Issue: Variables show as empty in browser console

**Cause:** Variables not set for Production environment in Vercel

**Fix:** 
1. Go to Settings → Environment Variables
2. Edit each variable
3. Make sure "Production" is checked
4. Redeploy

### Issue: Variables work locally but not on Vercel

**Cause:** Variables not added to Vercel, or wrong environment selected

**Fix:** Add variables in Vercel dashboard and select Production environment

### Issue: Build succeeds but variables are empty

**Cause:** Variables added after build, or not selected for correct environment

**Fix:** Redeploy after adding variables

## Quick Fix Checklist

- [ ] All three variables exist in Vercel
- [ ] All variables have "Production" checked
- [ ] Variable names start with `NEXT_PUBLIC_`
- [ ] Redeployed after adding/changing variables
- [ ] Checked browser console for detailed error messages

## Still Not Working?

1. Check browser console for the detailed error message
2. Verify EmailJS service is connected and active
3. Verify EmailJS template exists and has correct variables
4. Check Vercel build logs for any warnings

