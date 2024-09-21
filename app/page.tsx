"use client";
import { useState } from "react";
import StudentForm from "@/components/StudentForm";


export default function Home() {
  const [refreshList, setRefreshList] = useState(false);

  const handleFormSubmit = () => {
    setRefreshList((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-5">
      <StudentForm onSubmitSuccess={handleFormSubmit} />
     
    </div>
  );
}