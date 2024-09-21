import dbConnect from '@/utils/dbConnects';
import Student from '@/models/Student';
import { NextResponse } from 'next/server';
import { StudentCreateInput } from '@/types/students';

// Handle POST requests
export async function POST(req: Request) {
  await dbConnect();
  
  try {
    const studentData: StudentCreateInput = await req.json();
    const student = await Student.create(studentData);
    return NextResponse.json({ success: true, data: student }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 400 });
  }
}

// Handle GET requests
export async function GET() {
  await dbConnect();

  try {
    const students = await Student.find({});
    return NextResponse.json({ success: true, data: students }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 400 });
  }
}
