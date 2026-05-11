# Railway Deployment Verification Checklist

## Step 1: Find Your Railway URL

1. Go to [Railway Dashboard](https://railway.app)
2. Click on your project
3. Click on your service
4. Go to **Settings** → **Domains**
5. Your URL will be something like: `https://your-app-name.up.railway.app`

## Step 2: Test Your Deployment

### ✅ Test 1: Homepage
- Open your Railway URL in a browser
- **Expected**: You should see the Sapphire Health homepage
- **If it works**: ✓ Homepage is loading correctly

### ✅ Test 2: API Endpoints

#### Test Auth Endpoint (should work):
```bash
curl https://your-app.up.railway.app/api/auth/user
```
**Expected**: Returns `null` (JSON response)
**Status**: ✓ Working if you get a JSON response

#### Test Login Endpoint (should return 501):
```bash
curl https://your-app.up.railway.app/api/login
```
**Expected**: Returns `{"message":"Authentication not configured..."}` with HTTP 501
**Status**: ✓ Working correctly (501 is expected when REPL_ID is not set)

### ✅ Test 3: Public Endpoints

#### Test Available Appointment Slots:
```bash
curl "https://your-app.up.railway.app/api/appointments/available-slots/2025-11-20"
```
**Expected**: Returns JSON array of available time slots
**Status**: ✓ Working if you get a JSON response

### ✅ Test 4: Booking Page
- Visit: `https://your-app.up.railway.app/booking`
- **Expected**: Booking page loads
- **Status**: ✓ Working if page loads

### ✅ Test 5: Contact Form
- Visit: `https://your-app.up.railway.app`
- Scroll to contact section
- **Expected**: Contact form is visible
- **Status**: ✓ Working if form is visible

## Step 3: Check Environment Variables

In Railway Dashboard → Your Service → Variables, make sure you have:

- ✅ `DATABASE_URL` - Your PostgreSQL connection string
- ✅ `SESSION_SECRET` - (Optional but recommended)
- ❌ `REPL_ID` - (Not needed for Railway, leave unset)

## Step 4: Check Deployment Logs

In Railway Dashboard → Your Service → Deployments → Latest Deployment → Logs:

**Good signs:**
- ✅ `serving on port 8080` (or whatever port Railway assigned)
- ✅ `Replit auth not configured (REPL_ID not set). Skipping OIDC setup.`
- ✅ No error messages

**Bad signs:**
- ❌ `DATABASE_URL must be set` - Add DATABASE_URL variable
- ❌ `listen ENOTSUP` - Should be fixed in latest code
- ❌ `clientId must be a non-empty string` - Should be fixed in latest code

## Common Issues

### Issue: "Cannot GET /"
- **Cause**: Static files not being served
- **Fix**: Check that build completed successfully

### Issue: Database connection errors
- **Cause**: DATABASE_URL not set or incorrect
- **Fix**: Verify DATABASE_URL in Railway variables

### Issue: 500 Internal Server Error
- **Cause**: Check deployment logs for specific error
- **Fix**: Review logs and fix the underlying issue

## Success Criteria

Your deployment is successful if:
- ✅ Homepage loads
- ✅ API endpoints respond (even if with 501 for auth)
- ✅ Booking page is accessible
- ✅ No errors in deployment logs
- ✅ Database connection is working

## Next Steps

Once verified:
1. Test the booking flow end-to-end
2. Test contact form submission
3. Test corporate inquiry form
4. Monitor Railway logs for any issues

