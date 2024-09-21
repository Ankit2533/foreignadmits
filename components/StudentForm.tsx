import React, { useState } from 'react';
import { StudentFormData } from '../types/students';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast';

interface StudentFormProps {
  onSubmitSuccess: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState<StudentFormData>({
    name: '',
    dateOfBirth: '',
    mobileNumber: '',
    email: '',
    toeflScore: '',
    greScore: '',
    tenthMarks: '',
    twelfthMarks: '',
    graduationMarks: '',
    studyTargetCountry: '',
    targetDegree: '',
    targetCourse: '',
    documents: '',
    university: '',
    consultant: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files).map(file => file.name);
      setFormData(prev => ({ ...prev, documents: fileList.join(', ') }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          toeflScore: formData.toeflScore ? Number(formData.toeflScore) : undefined,
          greScore: formData.greScore ? Number(formData.greScore) : undefined,
          tenthMarks: Number(formData.tenthMarks),
          twelfthMarks: Number(formData.twelfthMarks),
          graduationMarks: Number(formData.graduationMarks),
          applications: [{
            university: formData.university,
            consultant: formData.consultant,
          }],
        }),
      });

      if (response.ok) {
        onSubmitSuccess();
        setFormData({
          name: '',
          dateOfBirth: '',
          mobileNumber: '',
          email: '',
          toeflScore: '',
          greScore: '',
          tenthMarks: '',
          twelfthMarks: '',
          graduationMarks: '',
          studyTargetCountry: '',
          targetDegree: '',
          targetCourse: '',
          documents: '',
          university: '',
          consultant: '',
        });
        toast.success('Application submitted successfully!');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Student Application Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Toaster position="top-right" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="toeflScore">TOEFL Score</Label>
              <Input
                id="toeflScore"
                name="toeflScore"
                type="number"
                value={formData.toeflScore}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="greScore">GRE Score</Label>
              <Input
                id="greScore"
                name="greScore"
                type="number"
                value={formData.greScore}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenthMarks">10th Marks (%)</Label>
              <Input
                id="tenthMarks"
                name="tenthMarks"
                type="number"
                value={formData.tenthMarks}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twelfthMarks">12th Marks (%)</Label>
              <Input
                id="twelfthMarks"
                name="twelfthMarks"
                type="number"
                value={formData.twelfthMarks}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="graduationMarks">Graduation Marks (%)</Label>
              <Input
                id="graduationMarks"
                name="graduationMarks"
                type="number"
                value={formData.graduationMarks}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="studyTargetCountry">Study Target Country</Label>
              <Input
                id="studyTargetCountry"
                name="studyTargetCountry"
                value={formData.studyTargetCountry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetDegree">Target Degree</Label>
              <Input
                id="targetDegree"
                name="targetDegree"
                value={formData.targetDegree}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetCourse">Target Course</Label>
              <Input
                id="targetCourse"
                name="targetCourse"
                value={formData.targetCourse}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="university">University</Label>
              <Input
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultant">Consultant</Label>
              <Input
                id="consultant"
                name="consultant"
                value={formData.consultant}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="documents">Upload Documents</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="documents"
                name="documents"
                type="file"
                onChange={handleFileChange}
                multiple
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('documents')?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
              <span className="text-sm text-gray-500">
                {formData.documents
                  ? `${formData.documents.split(', ').length} file(s) selected`
                  : 'No files chosen'}
              </span>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentForm;