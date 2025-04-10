# LoPROMPT - Waitlist Signup

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdambrubaba%2Fgoogle-sheet-waitlist&env=GOOGLE_SERVICE_ACCOUNT_EMAIL,GOOGLE_PRIVATE_KEY,GOOGLE_SHEET_ID&envDescription=Required%20for%20Google%20Sheets%20integration.&envLink=%23how-to-get-google-credentials-detailed-steps)

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/damburudhar)

This project is a simple waitlist signup page built with Next.js, TypeScript, and Tailwind CSS. It allows users to submit their email address, which is then stored in a Google Sheet via a server action. The UI features a flippable card design to showcase product features and includes a dark/light theme toggle.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v15)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) (implicitly via shadcn/ui form component, though direct usage isn't visible in `waitlist-card.tsx`)
*   **Backend Integration:** [Google Sheets API](https://developers.google.com/sheets/api) (`google-spreadsheet`, `google-auth-library`)
*   **Icons:** [Lucide React](https://lucide.dev/)

## Features

*   Waitlist email signup form.
*   Client-side email validation.
*   Server action to securely add emails to a Google Sheet.
*   Success and error message display.
*   Flippable card UI to display upcoming features.
*   Dark/Light theme toggle.
*   Links to social profiles.

## Project Structure

*   `app/`: Contains the core application routing, pages (`page.tsx`), layout (`layout.tsx`), global styles (`globals.css`), and server actions (`actions.ts`).
*   `components/`: Reusable React components, including the main `waitlist-card.tsx` and UI elements from `shadcn/ui`.
*   `lib/`: Utility functions (`utils.ts`).
*   `public/`: Static assets like images and icons.
*   `hooks/`: Custom React hooks (e.g., `use-toast.ts`).
*   `styles/`: Global CSS files.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd google-sheet-waitlist
    ```

2.  **Install dependencies:**
    This project uses `pnpm` as indicated by the `pnpm-lock.yaml` file.
    ```bash
    pnpm install
    ```
    If you don't have `pnpm`, install it first (`npm install -g pnpm`) or use `npm install` / `yarn install` (though `pnpm` is recommended for consistency).

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of the project and add the following variables:

    ```plaintext
    GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@developer.gserviceaccount.com
    GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere\n-----END PRIVATE KEY-----\n
    GOOGLE_SHEET_ID=your_google_sheet_id
    ```

    *   **`GOOGLE_SERVICE_ACCOUNT_EMAIL`**: The email address of your Google Cloud service account.
    *   **`GOOGLE_PRIVATE_KEY`**: The private key associated with your service account. Make sure to format it correctly, replacing literal newlines in the key file with `\n` characters within the string.
    *   **`GOOGLE_SHEET_ID`**: The ID of the Google Sheet where you want to store the emails. You can find this in the URL of your Google Sheet (`https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`).

    **How to get Google Credentials (Detailed Steps):**

    Getting the necessary Google credentials involves interacting with the Google Cloud Platform. Follow these steps carefully:

    1.  **Go to Google Cloud Console:** Open your web browser and navigate to the [Google Cloud Console](https://console.cloud.google.com/). You might need to sign in with your Google account.
    2.  **Create or Select a Project:**
        *   At the top of the page, click the project dropdown menu (it might say "Select a project").
        *   If you have an existing project you want to use, select it.
        *   If not, click "NEW PROJECT". Give your project a name (e.g., "Waitlist App") and click "CREATE".
    3.  **Enable the Google Sheets API:**
        *   In the search bar at the top, type "Google Sheets API" and select it from the results.
        *   Click the "ENABLE" button. If it's already enabled, you can skip this step. This allows your application to interact with Google Sheets.
    4.  **Create a Service Account:**
        *   In the search bar, type "Service Accounts" and select it.
        *   Click "+ CREATE SERVICE ACCOUNT" near the top.
        *   Enter a "Service account name" (e.g., "waitlist-sheet-updater"). The "Service account ID" will be generated automatically. You can add an optional description.
        *   Click "CREATE AND CONTINUE".
        *   For "Grant this service account access to project", you can skip adding roles for now by clicking "CONTINUE".
        *   For "Grant users access to this service account", you can also skip this and click "DONE".
    5.  **Generate a Private Key:**
        *   You should now see your newly created service account in the list. Click on its email address.
        *   Go to the "KEYS" tab.
        *   Click "ADD KEY" and choose "Create new key".
        *   Select "JSON" as the key type and click "CREATE".
        *   A JSON file containing your credentials will be downloaded automatically. **Keep this file secure and private!**
    6.  **Extract Credentials for `.env.local`:**
        *   Open the downloaded JSON file with a text editor.
        *   Find the `"client_email"` value. Copy this entire email address (e.g., `waitlist-sheet-updater@your-project-id.iam.gserviceaccount.com`) and paste it as the value for `GOOGLE_SERVICE_ACCOUNT_EMAIL` in your `.env.local` file.
        *   Find the `"private_key"` value. Copy the entire string starting from `-----BEGIN PRIVATE KEY-----` all the way to `-----END PRIVATE KEY-----\n`.
        *   **Important:** When pasting this key into your `.env.local` file for the `GOOGLE_PRIVATE_KEY` variable, you MUST replace all the literal newline characters (`\n` within the key string itself in the JSON file) with the two characters `\` and `n`. It should look like one long line in your `.env.local` file, containing `\n` where the line breaks were.
            *Example:* `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...YourKey...\n...MoreKey...\n-----END PRIVATE KEY-----\n` becomes `GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYourKey...\n...MoreKey...\n-----END PRIVATE KEY-----\n`
    7.  **Get Your Google Sheet ID:**
        *   Open the Google Sheet you want to use for storing emails.
        *   Look at the URL in your browser's address bar. It will look something like `https://docs.google.com/spreadsheets/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPq/edit#gid=0`.
        *   The long string of characters between `/d/` and `/edit` is your Sheet ID (in the example: `1aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPq`).
        *   Copy this ID and paste it as the value for `GOOGLE_SHEET_ID` in your `.env.local` file.
    8.  **Share Your Google Sheet:**
        *   In your Google Sheet, click the "Share" button (usually top right).
        *   In the "Add people and groups" field, paste the service account email address you copied in step 6 (e.g., `waitlist-sheet-updater@your-project-id.iam.gserviceaccount.com`).
        *   Make sure it has "Editor" permissions.
        *   Click "Send" or "Share". This allows the service account (and thus your application) to write data to the sheet.

    Now your `.env.local` file should be correctly configured with the necessary credentials.

## Available Scripts

*   **Run the development server:**
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

*   **Build the application for production:**
    ```bash
    pnpm build
    ```

*   **Run the production server:**
    ```bash
    pnpm start
    ```

*   **Lint the codebase:**
    ```bash
    pnpm lint
    ```

## Deployment to Vercel

[Vercel](https://vercel.com/) is a platform optimized for deploying Next.js applications. You can deploy this project with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdambrubaba%2Fgoogle-sheet-waitlist&env=GOOGLE_SERVICE_ACCOUNT_EMAIL,GOOGLE_PRIVATE_KEY,GOOGLE_SHEET_ID&envDescription=Required%20for%20Google%20Sheets%20integration.&envLink=%23how-to-get-google-credentials-detailed-steps)

Alternatively, follow the manual steps below:

1.  **Push to a Git Repository:**
    *   Make sure your project code is pushed to a Git provider like GitHub, GitLab, or Bitbucket (e.g., `https://github.com/dambrubaba/google-sheet-waitlist`).
2.  **Sign up/Log in to Vercel:**
    *   Go to [vercel.com](https://vercel.com/) and sign up for an account (a free tier is available) or log in.
3.  **Import Project:**
    *   From your Vercel dashboard, click "Add New..." -> "Project".
    *   Import your Git repository by connecting your Git provider account.
    *   Select the repository containing this project.
4.  **Configure Project:**
    *   Vercel usually detects Next.js projects automatically and sets the correct Framework Preset, Build Command (`pnpm build`), and Output Directory. You typically don't need to change these.
5.  **Add Environment Variables:**
    *   Expand the "Environment Variables" section.
    *   Add the same three variables you defined in your `.env.local` file:
        *   `GOOGLE_SERVICE_ACCOUNT_EMAIL`
        *   `GOOGLE_PRIVATE_KEY` (Paste the full key value here, including the `\n` replacements)
        *   `GOOGLE_SHEET_ID`
    *   **Important:** Ensure these are added as **Server-side** environment variables, as they are used in the server action.
6.  **Deploy:**
    *   Click the "Deploy" button.
    *   Vercel will build and deploy your application. Once finished, you'll get a unique URL for your live site.

Your waitlist page is now live! Any emails submitted will be added to your configured Google Sheet.

## Support the Project

If you find this project helpful, consider buying me a coffee! Your support helps me maintain and improve this project.

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/damburudhar)
