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