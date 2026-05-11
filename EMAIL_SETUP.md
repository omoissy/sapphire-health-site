# Email Setup Guide for Railway

## Problem
Emails are not being sent when users book consultations or submit corporate inquiries because the email service needs to be configured.

## Solution: Set up Resend Email Service

### Step 1: Get a Resend API Key

1. Go to https://resend.com
2. Sign up for a free account (100 emails/day free)
3. Go to **API Keys** in your dashboard
4. Click **Create API Key**
5. Name it (e.g., "Sapphire Health Production")
6. Copy the API key (starts with `re_...`)

### Step 2: Add Environment Variables in Railway

1. Go to your Railway project: https://railway.app
2. Click on your **Sapphire Health** service
3. Go to **Variables** tab
4. Click **+ New Variable**
5. Add these two variables:

   **Variable 1:**
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_your_api_key_here` (paste your Resend API key)

   **Variable 2:**
   - **Name**: `RESEND_FROM_EMAIL`
   - **Value**: `noreply@sapphirehealthng.com` (or your verified domain email)

### Step 3: Verify Your Domain (Optional but Recommended)

For production, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `sapphirehealthng.com`
4. Add the DNS records Resend provides to your domain registrar
5. Once verified, you can use emails like `noreply@sapphirehealthng.com`

### Step 4: Redeploy

After adding the environment variables:
1. Railway will automatically redeploy
2. Or manually trigger a redeploy from Railway dashboard

### Step 5: Test

1. Book a consultation on your site
2. Check your email inbox
3. Check Railway logs for any email errors (look for "❌ Email send error")

## Troubleshooting

### Emails Still Not Sending?

1. **Check Railway Logs:**
   - Go to Railway → Your Service → **Deploy Logs**
   - Look for "❌ Email send error" messages
   - The error will tell you what's wrong

2. **Common Issues:**
   - ❌ `RESEND_API_KEY environment variable is required`
     - **Fix**: Make sure you added `RESEND_API_KEY` in Railway variables
   
   - ❌ `Invalid API key`
     - **Fix**: Check that you copied the full API key correctly
   
   - ❌ `Domain not verified`
     - **Fix**: Use a verified domain email or verify your domain in Resend

3. **Test Email Service:**
   - The error logs will show exactly what went wrong
   - Check both customer confirmation emails and staff alert emails

## Email Types Sent

1. **Booking Confirmation** → Sent to customer when they book
2. **Staff Booking Alert** → Sent to your team when someone books
3. **Corporate Inquiry Confirmation** → Sent to company contact
4. **Staff Corporate Inquiry Alert** → Sent to your team for new leads
5. **Contact Form Alert** → Sent to your team for general inquiries

All emails are sent asynchronously (non-blocking), so if email fails, the booking/inquiry still succeeds and is saved to the database.





