export interface Student {
    _id: string;
    name: string;
    dateOfBirth: string;
    mobileNumber: string;
    email: string;
    toeflScore?: number;
    greScore?: number;
    tenthMarks: number;
    twelfthMarks: number;
    graduationMarks: number;
    studyTargetCountry: string;
    targetDegree: string;
    targetCourse: string;
    documents: string[];
    applications: Application[];
  }
  
  export interface Application {
    university: string;
    consultant: string;
    status: string;
  }
  
  export interface StudentFormData {
    name: string;
    dateOfBirth: string;
    mobileNumber: string;
    email: string;
    toeflScore: string;
    greScore: string;
    tenthMarks: string;
    twelfthMarks: string;
    graduationMarks: string;
    studyTargetCountry: string;
    targetDegree: string;
    targetCourse: string;
    documents: string;
    university: string;
    consultant: string;
  }
  
  export type StudentCreateInput = Omit<Student, '_id'>;