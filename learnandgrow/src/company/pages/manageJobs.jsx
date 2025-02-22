import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { Filter, Plus, RefreshCcw, Search } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import JobsTable from "../components/jobsTable";
import useIsMobile from "../hooks/useIsMobile";

const CManageJobs = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Sample jobs data
  const [jobs] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      posted: "2024-02-15",
      status: "Active",
      applicants: 12,
    },
    {
      id: 2,
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      posted: "2024-02-14",
      status: "Active",
      applicants: 8,
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2024-02-10",
      status: "Closed",
      applicants: 15,
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Chicago, IL",
      type: "Part-time",
      posted: "2024-02-16",
      status: "Closed",
      applicants: 0,
    },
  ]);

  const handleAction = (action, jobId) => {
    switch (action) {
      case "view":
        navigate(`/manage-jobs/job-details/${jobId}`);
        break;
      case "edit":
        navigate(`/manage-jobs/edit/${jobId}`);
        break;
      case "delete":
        // Add delete confirmation logic here
        console.log(`Deleting job with id: ${jobId}`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-4 md:space-y-6 mb-16">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Manage Jobs</h1>
          <Button
            as={Link}
            to="/post-job"
            color="primary"
            startContent={<Plus size={16} />}
            size={isMobile ? "sm" : "md"}
          >
            Post New Job
          </Button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search jobs..."
            startContent={<Search size={16} className="text-default-400" />}
            className="w-full sm:w-72"
            size={isMobile ? "sm" : "md"}
          />
          <div className="flex gap-2">
            <ButtonGroup>
              <Button
                startContent={<Filter size={16} />}
                variant="flat"
                size={isMobile ? "sm" : "md"}
              >
                Filter
              </Button>
              <Button
                startContent={<RefreshCcw size={16} />}
                variant="flat"
                size={isMobile ? "sm" : "md"}
              >
                Reset
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      {/* Jobs Table */}
      <JobsTable
        jobs={jobs}
        isMobile={isMobile}
        handleAction={handleAction}
      />{" "}
    </div>
  );
};

///

export default CManageJobs;
