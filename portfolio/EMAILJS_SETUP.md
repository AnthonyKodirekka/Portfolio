# EmailJS Setup Instructions

## 📧 How to Set Up EmailJS for Your Contact Form

### Step 1: Create EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (starts with `service_`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. **Copy the Template ID** (starts with `template_`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key** (starts with letters/numbers)

### Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_actual_service_id', // Replace with your service ID
  TEMPLATE_ID: 'template_your_actual_template_id', // Replace with your template ID
  PUBLIC_KEY: 'your_actual_public_key', // Replace with your public key
};
```

### Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email for the message

## 🔧 Troubleshooting

### Common Issues:
- **"Invalid service ID"**: Check that your service ID is correct
- **"Invalid template ID"**: Verify your template ID matches exactly
- **"Invalid public key"**: Ensure your public key is correct
- **"Email not received"**: Check your spam folder and email service settings

### Testing:
- Use the EmailJS dashboard to test your service
- Check browser console for error messages
- Verify all IDs are copied correctly (no extra spaces)

## 📱 Features
- ✅ Real email sending
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error handling
- ✅ Auto form reset
- ✅ Professional email template

## 🚀 Deployment
After setup, your contact form will work on both:
- Local development (`npm run dev`)
- Live website (GitHub Pages)

The form will send real emails to your inbox when visitors submit messages!
