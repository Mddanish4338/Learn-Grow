import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Select,
  SelectItem,
  Textarea,
  Chip,
} from "@nextui-org/react";
import {
  Briefcase,
  Building2,
  MapPin,
  Clock,
  DollarSign,
  FileText,
  Code,
} from "lucide-react";

const jobTypes = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
  { value: "remote", label: "Remote" },
];

export default function CPostJob() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salary: "",
    jobDescription: "",
    skillsRequired: "",
    time: "",
    department: "",
  });

  const [skills, setSkills] = useState([]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillsChange = (value) => {
    if (value.includes(",")) {
      const newSkills = value.split(",").map((skill) => skill.trim());
      setSkills((prev) => [
        ...new Set([...prev, ...newSkills.filter((s) => s)]),
      ]);
      handleChange("skillsRequired", "");
    } else {
      handleChange("skillsRequired", value);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      jobType: Array.from(formData.jobType)[0],
      skillsRequired: skills,
    };
    console.log("Job posted:", submissionData);
    setFormData({
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "",
      salary: "",
      jobDescription: "",
      skillsRequired: "",
      time: "",
      department: "",
    });

    setSkills([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-col gap-2 items-center">
          <Briefcase className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold">Post a New Job</h1>
          <p className="text-default-500">
            Fill in the details to post a new job opening
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Title */}
              <Input
                label="Job Title"
                placeholder="e.g., Senior Software Engineer"
                value={formData.jobTitle}
                onChange={(e) => handleChange("jobTitle", e.target.value)}
                startContent={
                  <Briefcase className="w-4 h-4 text-default-400" />
                }
                variant="bordered"
                isRequired
              />

              {/* Company Name */}
              <Input
                label="Company Name"
                placeholder="Your company name"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                startContent={
                  <Building2 className="w-4 h-4 text-default-400" />
                }
                variant="bordered"
                isRequired
              />
              {/* Time Field */}
              <Input
                label="Time"
                placeholder="Till Date"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                startContent={<Clock className="w-4 h-4 text-default-400" />}
                variant="bordered"
              />

              {/* Department Field */}
              <Input
                label="Department"
                placeholder="e.g., Engineering"
                value={formData.department}
                onChange={(e) => handleChange("department", e.target.value)}
                startContent={
                  <Building2 className="w-4 h-4 text-default-400" />
                }
                variant="bordered"
              />

              {/* Location */}
              <Input
                label="Location"
                placeholder="e.g., New York, NY"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                startContent={<MapPin className="w-4 h-4 text-default-400" />}
                variant="bordered"
                isRequired
              />

              {/* Job Type */}
              <Select
                label="Job Type"
                placeholder="Select job type"
                selectedKeys={[formData.jobType]}
                onChange={(e) => handleChange("jobType", e.target.value)}
                startContent={<Clock className="w-4 h-4 text-default-400" />}
                variant="bordered"
                isRequired
              >
                {jobTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>

              {/* Salary */}
              <Input
                label="Salary Range"
                placeholder="e.g., $80,000 - $100,000"
                value={formData.salary}
                onChange={(e) => handleChange("salary", e.target.value)}
                startContent={
                  <DollarSign className="w-4 h-4 text-default-400" />
                }
                variant="bordered"
              />

              {/* Skills */}
              <Input
                label="Skills Required"
                placeholder="Add skills (separate with comma)"
                value={formData.skillsRequired}
                onChange={(e) => handleSkillsChange(e.target.value)}
                startContent={<Code className="w-4 h-4 text-default-400" />}
                variant="bordered"
              />
            </div>

            {/* Skills Chips */}
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    onClose={() => removeSkill(skill)}
                    variant="flat"
                    color="primary"
                  >
                    {skill}
                  </Chip>
                ))}
              </div>
            )}

            {/* Job Description */}
            <Textarea
              label="Job Description"
              placeholder="Enter detailed job description"
              value={formData.jobDescription}
              onChange={(e) => handleChange("jobDescription", e.target.value)}
              variant="bordered"
              minRows={4}
              startContent={<FileText className="w-4 h-4 text-default-400" />}
              isRequired
            />

            {/* Submit Button */}
            <div className=" pb-10 md:pb-0 flex justify-center">
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="font-semibold"
              >
                Post Job
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
