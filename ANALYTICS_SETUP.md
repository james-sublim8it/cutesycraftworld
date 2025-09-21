# Google Analytics Setup Instructions

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Set up your account:
   - Account name: "Cutesy Craft World"
   - Property name: "Cutesy Craft World Website"
   - Industry category: "Arts & Entertainment"
   - Business size: Select appropriate size
5. Choose "Web" as your platform
6. Enter your website URL (when you have it live)

## Step 2: Get Your Measurement ID

1. After creating the property, you'll get a **Measurement ID** that looks like: `G-XXXXXXXXXX`
2. Copy this ID

## Step 3: Update Your Website

Replace `GA_MEASUREMENT_ID` in your `index.html` file with your actual Measurement ID:

```html
<!-- Replace BOTH instances of GA_MEASUREMENT_ID with your actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Analytics Features Already Implemented

Your website now tracks:

### 📊 **Basic Analytics**
- Page views
- User sessions
- Bounce rate
- Time on page

### 🛒 **E-commerce Events**
- `add_to_cart` - When users click "Add to Cart" buttons
- `view_item` - When craft items come into view
- Enhanced ecommerce data with item details

### 🎯 **User Engagement**
- `navigation_click` - Navigation menu usage
- `cta_click` - "Shop Now" button clicks
- Scroll depth and user interactions

### 📱 **Advanced Tracking**
- Mobile vs desktop usage
- User flow through your site
- Popular products/sections

## Step 4: Verify Installation

1. After updating your Measurement ID, open your website
2. Go to Google Analytics > Reports > Realtime
3. You should see your visit appear in real-time

## Privacy Considerations

- Consider adding a privacy policy page
- You may want to add cookie consent (required in some regions)
- The current setup is GDPR-friendly but consider user consent for enhanced tracking

## Next Steps

1. Set up **Google Analytics 4 Enhanced Ecommerce** for detailed product tracking
2. Create **Custom Audiences** for remarketing
3. Set up **Goals and Conversions** for business metrics
4. Connect **Google Search Console** for SEO insights

## Configuration File

You can store your analytics settings here:

```javascript
// Analytics Configuration
const ANALYTICS_CONFIG = {
    measurement_id: 'GA_MEASUREMENT_ID', // Replace with your actual ID
    enhanced_ecommerce: true,
    track_scroll_depth: true,
    track_outbound_links: true
};
```
