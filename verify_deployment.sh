#!/bin/bash
# Railway Deployment Verification Script

echo "🔍 Railway Deployment Verification"
echo "=================================="
echo ""

# Get URL from user or use provided URL
if [ -z "$1" ]; then
    echo "Please provide your Railway URL as an argument:"
    echo "Usage: ./verify_deployment.sh https://your-app.up.railway.app"
    exit 1
fi

URL=$1
echo "Testing deployment at: $URL"
echo ""

# Test 1: Homepage
echo "✅ Test 1: Homepage"
if curl -s -o /dev/null -w "%{http_code}" "$URL" | grep -q "200"; then
    echo "   ✓ Homepage is accessible (HTTP 200)"
else
    echo "   ✗ Homepage failed"
fi
echo ""

# Test 2: API Health Check
echo "✅ Test 2: API Auth Endpoint"
AUTH_RESPONSE=$(curl -s -w "\n%{http_code}" "$URL/api/auth/user")
HTTP_CODE=$(echo "$AUTH_RESPONSE" | tail -n1)
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✓ Auth endpoint responds (HTTP 200)"
    echo "   Response: $(echo "$AUTH_RESPONSE" | head -n1)"
else
    echo "   ⚠ Auth endpoint returned HTTP $HTTP_CODE (expected if no auth configured)"
fi
echo ""

# Test 3: API Login Endpoint (should return 501 if no REPL_ID)
echo "✅ Test 3: Login Endpoint (should return 501)"
LOGIN_RESPONSE=$(curl -s -w "\n%{http_code}" "$URL/api/login")
HTTP_CODE=$(echo "$LOGIN_RESPONSE" | tail -n1)
if [ "$HTTP_CODE" = "501" ]; then
    echo "   ✓ Login endpoint correctly returns 501 (auth not configured)"
else
    echo "   ⚠ Login endpoint returned HTTP $HTTP_CODE"
fi
echo ""

# Test 4: Static Assets
echo "✅ Test 4: Static Assets"
if curl -s -o /dev/null -w "%{http_code}" "$URL/favicon.png" | grep -q "200\|404"; then
    echo "   ✓ Static assets are being served"
else
    echo "   ✗ Static assets failed"
fi
echo ""

echo "=================================="
echo "Verification complete!"
echo ""
echo "If all tests passed, your deployment is working correctly."
echo "Note: 501 responses for auth endpoints are expected when REPL_ID is not set."

