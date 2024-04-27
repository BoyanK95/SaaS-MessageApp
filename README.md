# Incognito Translation Messaging App

Welcome to the Incognito Translation Messaging App, a powerful application built with Next.js. This app combines the efficiency of Next.js with Shadcn for a stylish component library, Next Auth for authentication, and Zustang for state management. It provides a seamless experience for translating and messaging within a Software as a Service (Incognito) environment.

<img width="1728" alt="Screenshot 2024-04-27 at 21 33 23" src="https://github.com/BoyanK95/SaaS-MessageApp/assets/92653208/ecca61f7-482e-457e-b30c-33717067e152">


## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [State Management](#state-management)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Translation Services:** Seamlessly translate messages and content within your Incognito application.
- **Messaging Platform:** Efficiently communicate with team members or clients using the integrated messaging system.
- **Next Auth:** Secure and easy authentication setup for user management.
- **Shadcn Component Library:** Stylish and customizable UI components for a modern look and feel.
- **Zustang State Management:** Centralized state management for enhanced application performance.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/saas-translation-messaging-app.git
cd saas-translation-messaging-app
```

Install dependencies:
```bash
npm install
# or
yarn
```

Run the development server:
bash
```
npm run dev
# or
yarn dev
```

Your app should now start locally running on [localhost:3000](http://localhost:3000)

# Authentication with NextAuth and Firebase (Google Login)

To set up authentication with NextAuth and Firebase (Google Login), follow these steps:

1. Install the required packages:

   ```bash
   npm install next-auth firebase
   # or
   yarn add next-auth firebase

2. Create a NextAuth configuration file (e.g., next-auth.config.js) and configure the provider for Google:

```bash
// next-auth.config.js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers if needed
  ],
  // Add additional NextAuth configurations as required
});
```
Set up environment variables in your .env.local file:

```bash
env
Copy code
# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
Replace your-google-client-id and your-google-client-secret with your Google OAuth credentials.
```

# Usage
## Overview
The Incognito Translation Messaging App is designed to facilitate multilingual communication in a secure and incognito manner. The application offers both free and paid pro memberships, unlocking additional features and enhancing the user experience.

# Tiers and Pricing
<img width="1728" alt="Screenshot 2024-04-27 at 21 35 34" src="https://github.com/BoyanK95/SaaS-MessageApp/assets/92653208/6b04e79e-78ba-471c-aa4f-3f129e5cc138">

## Tiers

### Starter
- **Price:** Free
- **Description:** Get chatting right away with anyone, anywhere!
- **Features:**
  - 100 Message Chat Limit in Chats
  - 2 Participant limit in Chat
  - 7 Chat Rooms Limit
  - Supports 3 languages
  - 48-hour support response time

### Pro 🔥
- **Price:** 1.99 Euro per month
- **Description:** Unlock the Full Potential with Pro!
- **Features:**
  - Unlimited Messages in Chats
  - Unlimited Participants in Chats
  - Unlimited Chat Rooms
  - Supports up to 10 languages
  - 1-hour support response time
  - Early access to New Features

## Usage Examples

### Free Membership Usage:

1. **Sign up for a free account.**
   - Get started by signing up for a free account on the SaaS Translation Messaging App.
   
2. **Start messaging in different languages instantly.**
   - Explore the multilingual chat feature to communicate with users from diverse linguistic backgrounds.

3. **Translate messages for effective communication.**
   - Utilize the translation services to seamlessly translate messages and enhance communication.

### Pro Membership Usage: :rocket:	

1. **Upgrade to a Pro membership.**
   - Elevate your experience by upgrading to a Pro membership for enhanced features and security.

2. **Enjoy incognito cryptic chat.**
   - Engage in incognito cryptic chat sessions for secure and private conversations.

3. **Use the app's safe network.**
   - Leverage the safe network provided by the app to prevent unauthorized access and enhance user privacy.

4. **Access exclusive features.**
   - Unlock exclusive features that go beyond basic messaging, including early access to new features.

## Contributing

If you'd like to contribute to this project, please follow the [contribution guidelines](CONTRIBUTING.md).
