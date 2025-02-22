import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Eye,
  Mail,
  UserCheck,
  Users,
  UserX,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CViewDetails = () => {
  const Navigate = useNavigate();
  const jobDetails = {
    id: "JOB123",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    posted: "2024-02-15",
    status: "Active",
    totalApplicants: 45,
    newApplicants: 12,
    description: [
      "Design and implement scalable software solutions",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience with React and Node.js",
      "Strong understanding of cloud architecture",
      "Excellent problem-solving skills",
    ],
  };

  const applicants = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      appliedDate: "2024-02-16",
      experience: "4 years",
      status: "New",
      resumeUrl: "#",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      skills: ["React", "Node.js", "TypeScript"],
      summary:
        "Full-stack developer with 4 years of experience building scalable web applications.",
      education: "B.S. Computer Science, MIT",
      phone: "+1 (555) 123-4567",
      location: "Boston, MA",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      appliedDate: "2024-02-15",
      experience: "5 years",
      status: "Shortlisted",
      resumeUrl: "#",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      skills: ["React", "AWS", "Python"],
      summary:
        "Senior frontend developer with expertise in modern JS frameworks and cloud architecture.",
      education: "M.S. Software Engineering, Stanford",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.w@email.com",
      appliedDate: "2024-02-14",
      experience: "3 years",
      status: "Rejected",
      resumeUrl: "#",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      skills: ["Angular", "Java", "SQL"],
      summary: "Fullstack engineer with background in enterprise applications.",
      education: "B.S. Information Technology, Georgia Tech",
      phone: "+1 (555) 234-5678",
      location: "Atlanta, GA",
    },
  ];

  const statusColorMap = {
    New: "warning",
    Shortlisted: "success",
    Rejected: "danger",
    "Under Review": "primary",
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <Button
        isIconOnly
        variant="ghost"
        radius="full"
        size="sm"
        onPress={() => Navigate(-1)}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">{jobDetails.title}</h1>
            <Chip color="success" variant="flat">
              {jobDetails.status}
            </Chip>
          </div>
          <div className="text-gray-600">
            <span>Job ID: {jobDetails.id}</span> •
            <span className="ml-2">
              Posted: {new Date(jobDetails.posted).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Applicants</p>
              <p className="text-2xl font-semibold">
                {jobDetails.totalApplicants}
              </p>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="p-3 bg-warning/10 rounded-lg">
              <AlertCircle className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-gray-600">New Applications</p>
              <p className="text-2xl font-semibold">
                {jobDetails.newApplicants}
              </p>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="p-3 bg-success/10 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Shortlisted</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="p-3 bg-danger/10 rounded-lg">
              <Clock className="w-6 h-6 text-danger" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Under Review</p>
              <p className="text-2xl font-semibold">15</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Job Details */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Job Details</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p>{jobDetails.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p>{jobDetails.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Job Type</p>
                <p>{jobDetails.type}</p>
              </div>
              <Divider />
              <div>
                <h3 className="font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {jobDetails.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Applicants Table */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recent Applicants</h2>
            </CardHeader>
            <CardBody>
              <Table aria-label="Applicants table">
                <TableHeader>
                  <TableColumn>APPLICANT</TableColumn>
                  <TableColumn>APPLIED</TableColumn>
                  <TableColumn>EXPERIENCE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {applicants.map((applicant) => (
                    <TableRow key={applicant.id}>
                      <TableCell>
                        <User
                          name={applicant.name}
                          description={applicant.email}
                          avatarProps={{
                            src: applicant.avatar,
                            radius: "lg",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        {new Date(applicant.appliedDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{applicant.experience}</TableCell>
                      <TableCell>
                        <Chip
                          size="sm"
                          color={statusColorMap[applicant.status]}
                          variant="flat"
                        >
                          {applicant.status}
                        </Chip>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Popover
                            placement="left"
                            showArrow={true}
                            offset={10}
                            trigger="hover"
                          >
                            <PopoverTrigger>
                              <Button isIconOnly variant="light" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                              <div className="w-80 p-4">
                                <div className="flex gap-4 items-start mb-4">
                                  <img
                                    src={applicant.avatar}
                                    alt={`${applicant.name} profile`}
                                    className="w-16 h-16 rounded-md object-cover"
                                  />
                                  <div>
                                    <h3 className="text-lg font-semibold">
                                      {applicant.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                      {applicant.email}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {applicant.phone}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {applicant.location}
                                    </p>
                                  </div>
                                </div>
                                <Divider className="my-2" />
                                <div className="my-2">
                                  <p className="text-sm font-medium">
                                    Experience
                                  </p>
                                  <p className="text-sm">
                                    {applicant.experience}
                                  </p>
                                </div>
                                <div className="my-2">
                                  <p className="text-sm font-medium">
                                    Education
                                  </p>
                                  <p className="text-sm">
                                    {applicant.education}
                                  </p>
                                </div>
                                <div className="my-2">
                                  <p className="text-sm font-medium">Skills</p>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {applicant.skills.map((skill, index) => (
                                      <Chip
                                        key={index}
                                        size="sm"
                                        variant="flat"
                                      >
                                        {skill}
                                      </Chip>
                                    ))}
                                  </div>
                                </div>
                                <div className="my-2">
                                  <p className="text-sm font-medium">Summary</p>
                                  <p className="text-sm">{applicant.summary}</p>
                                </div>
                                <div className="mt-4">
                                  <Chip
                                    color={statusColorMap[applicant.status]}
                                    variant="flat"
                                  >
                                    {applicant.status}
                                  </Chip>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                          <Button isIconOnly variant="light" size="sm">
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            color="success"
                          >
                            <UserCheck className="w-4 h-4" />
                          </Button>
                          <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            color="danger"
                          >
                            <UserX className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CViewDetails;
