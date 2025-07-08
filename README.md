# 📬 NextMailer

This is a **Next.js 14** project built with **TypeScript** that implements a responsive contact form using [Nodemailer](https://nodemailer.com/) and [Handlebars](https://handlebarsjs.com/) for sending dynamic emails.

Users can fill out a form (Name, Phone, Email, Message), and an email is sent to both the **site owner** and the **user’s email address**.

## 🚀 Features

- ✅ **Form Validation**: Implemented using **React Hook Form** and **Yup** schema validation with custom error messages.

- 💌 **Dual Email Sending**: Sends email to the **site owner** and the user via Nodemailer using **SMTP (Gmail)**.

- 🎨 **Material UI v5**: Clean, accessible, and responsive user interface.

- 🔧 **Dynamic Templating**: Emails are rendered with **Handlebars** templates for flexibility and clarity.

- 📦 Modular** Codebase**: Clean file organization for scalability and maintainability.

## 🧱 Tech Stack

| Tech                | Usage                                   |
| ------------------- | --------------------------------------- |
| **Next.js 14**      | Full-stack React framework (App Router) |
| **TypeScript**      | Type-safe development                   |
| **React Hook Form** | Form state and submission               |
| **Yup**             | Form schema validation                  |
| **Material UI v5**  | UI components and layout                |
| **Nodemailer**      | Email handling with SMTP                |
| **Handlebars**      | Email template rendering                |

## 📁 Project Structure

```
nextmailer/
├── app/
│   ├── api/send-email/         # API route for sending email
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page with contact form
│   └── route.ts                # Route configuration
│
├── components/
│   └── Form/                   # Form components (form fields, submit button)
│       └── StateButton.tsx
│
├── lib/
│   └── template/
│       └── formTemplate.js     # Email template generation using Handlebars
│
├── providers/
│   └── NotistackProvider/      # Snackbar provider setup
│       └── index.tsx
│
├── utils/
│   └── Notistack/              # Snackbar utility
│       └── index.ts
│
├── validations/
│   └── index.ts                # Yup validation schema
│
├── public/                     # Static assets
├── styles/
│   └── globals.css             # Global CSS
├── .env                        # Environment variables (not committed)
├── .env.example                # Example .env file
├── tailwind.config.ts         # Tailwind configuration (if Tailwind used)
├── tsconfig.json               # TypeScript config
├── next.config.mjs             # Next.js config
├── postcss.config.mjs          # PostCSS config
└── README.md                   # Project documentation
```

## 📦 Requirements

- **Node.js**: `v20.9.0+`
- **Gmail SMTP Credentials**

## 🔧 Getting Started

Follow these steps to clone and run the project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/kapoor08/nextmailer.git
```

2. **Navigate to the project directory:**

```bash
cd nextmailer
```

3. **Install the dependencies:**

```bash
npm install
```

4. **Set up environment variables:**

Create a `.env` file based on `.env.example`:

```bash
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-email-password
```

5. **Start the development server:**

```bash
npm run dev
```

6. **Open your browser and go to:**

```bash
http://localhost:3000
```

## ✨ Usage

1. Fill out the contact form with:

- Name
- Phone
- Email
- Message

2. Click Submit.

3. Two emails will be sent:

- One to the site owner
- One to the submitted email

## 🔧 Customization

**📨 Email Template**  
Modify `lib/template/formTemplate.js` to customize the Handlebars email structure.

**🧪 Validation Schema**  
The form validation schema is defined using Yup. You can customize the validation rules in the corresponding form component.

**🎨 Styling**  
Global styles live in `app/globals.css`. You can also integrate more Material UI theming or Tailwind styles.

## 📚 License

This project is licensed under the **MIT License**.
