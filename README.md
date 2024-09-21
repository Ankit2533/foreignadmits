Here’s how you can update your README file to include the `models.ts` schema, API endpoints, and database structure:

---

# **ForeignAdmits - Next.js Project**

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), designed to provide a dynamic web platform for international admissions guidance.

## **Tech Stack**

- **Frontend:**
  - [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation.
  - [TypeScript](https://www.typescriptlang.org) - Strongly typed programming language for safer and scalable code.
  - [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework for styling.
  - [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) - Font optimization for a performant and customized UI. Uses [Geist](https://vercel.com/font).

- **Backend:**
  - [Node.js](https://nodejs.org) - JavaScript runtime for the backend.
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Server-side logic and API routes within the Next.js app.
  
- **Database:**
  - [MongoDB](https://www.mongodb.com) - NoSQL database for storing user data, admissions data, etc.
  - [Mongoose](https://mongoosejs.com) - ODM library for MongoDB to model application data.
  
- **Deployment:**
  - [Vercel](https://vercel.com) - Hosting platform optimized for Next.js apps.

---

## **Getting Started**

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### **Run the Development Server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the project running.

You can start editing the page by modifying `app/page.tsx`. The page will automatically update as you edit the file.

---

## **Database Structure**

The project uses a MongoDB database to store student data. Below is the Mongoose schema used for modeling the **Student** data.

### **Student Schema (`models.ts`):**

```typescript
import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  toeflScore: { type: Number },
  greScore: { type: Number },
  tenthMarks: { type: Number, required: true },
  twelfthMarks: { type: Number, required: true },
  graduationMarks: { type: Number, required: true },
  studyTargetCountry: { type: String, required: true },
  targetDegree: { type: String, required: true },
  targetCourse: { type: String, required: true },
  documents: [{ type: String }],
  applications: [{
    university: { type: String, required: true },
    consultant: { type: String, required: true },
    status: { type: String, default: 'Pending' }
  }]
})

export default mongoose.models.Student || mongoose.model('Student', StudentSchema)
```

### **Student Schema Fields:**

- **name** (String, required): Full name of the student.
- **dateOfBirth** (Date, required): Student's date of birth.
- **mobileNumber** (String, required): Contact number of the student.
- **email** (String, required): Email address of the student.
- **toeflScore** (Number, optional): TOEFL exam score.
- **greScore** (Number, optional): GRE exam score.
- **tenthMarks** (Number, required): 10th-grade marks.
- **twelfthMarks** (Number, required): 12th-grade marks.
- **graduationMarks** (Number, required): Graduation-level marks.
- **studyTargetCountry** (String, required): Target country for studies.
- **targetDegree** (String, required): Desired degree (e.g., Master's, Bachelor's).
- **targetCourse** (String, required): Desired course of study.
- **documents** (Array of Strings, optional): List of document URLs.
- **applications** (Array of objects, required):
  - **university** (String, required): The name of the university the student applied to.
  - **consultant** (String, required): The assigned consultant's name.
  - **status** (String, default: 'Pending'): Application status.

---

## **API Endpoints**

### **POST /api/students**
This API is used to create a new student record in the database.

- **Request Body** (example):
  ```json
  {
    "name": "John Doe",
    "dateOfBirth": "1995-01-01",
    "mobileNumber": "1234567890",
    "email": "john@example.com",
    "toeflScore": 110,
    "greScore": 320,
    "tenthMarks": 85,
    "twelfthMarks": 90,
    "graduationMarks": 75,
    "studyTargetCountry": "USA",
    "targetDegree": "Master's",
    "targetCourse": "Computer Science",
    "applications": [{
      "university": "Stanford University",
      "consultant": "Jane Smith"
    }]
  }
  ```

- **Response**: Returns a success message and the created student object.

### **GET /api/students**
This endpoint retrieves the list of all students stored in the database.

- **Response**: Returns an array of student objects.

### **Error Handling**

- If the API fails to fetch or create a student, the following error messages will be displayed:
  ```js
  setError('Failed to fetch students');
  ```
  or
  ```js
  setError('Failed to create student');
  ```

---

## **Deployment**

The easiest way to deploy your Next.js app is through the [Vercel Platform](https://vercel.com). You can deploy this project in just a few clicks using the platform designed for Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## **Learn More**

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

