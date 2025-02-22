import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Progress,
  Button,
  Chip,
} from "@nextui-org/react";
import {
  Briefcase,
  Users,
  Clock,
  BarChart2,
  PlusCircle,
  Settings,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const StatCard = ({ title, value, icon: Icon, description, trend }) => (
  <Card className="w-full">
    <CardBody className="gap-2">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-default-600 text-sm">{title}</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">{value}</span>
            {trend && (
              <Chip
                classNames={{
                  base: "w-[100px]",
                  content: "w-[150px], flex items-center justify-center",
                }}
                color="success"
                className="flex "
                variant="flat"
              >
                <TrendingUp size={14} className="mr-1" />
                {trend}
              </Chip>
            )}
          </div>
        </div>
        <Icon className="h-8 w-8 text-default-400" />
      </div>
      <p className="text-default-500 text-sm">{description}</p>
    </CardBody>
  </Card>
);

const CDashBoard = () => {
  return (
    <div className="p-2 md:p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Company Dashboard</h1>
        {/* <Button variant="flat" startContent={<Settings size={16} />}>
          Settings
        </Button> */}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Jobs"
          value="5"
          icon={Briefcase}
          description="Currently active job postings"
          trend="+2 this week"
        />
        <StatCard
          title="Total Applicants"
          value="25"
          icon={Users}
          description="Applicants across all positions"
          trend="+8 new"
        />
        <StatCard
          title="Closing Soon"
          value="3"
          icon={Clock}
          description="Jobs closing in 48 hours"
        />
        <StatCard
          title="Average Response"
          value="85%"
          icon={BarChart2}
          description="Application response rate"
          trend="+5%"
        />
      </div>

      {/* Profile Completion */}
      <Card>
        <CardHeader className="flex gap-2">
          <UserCheck className="h-5 w-5" />
          <span className="font-semibold">Profile Completion</span>
        </CardHeader>
        <CardBody className="gap-3">
          <Progress
            value={80}
            color="primary"
            className="w-full"
            showValueLabel={true}
          />
          <div className="flex justify-between text-sm">
            <span className="text-default-500">80% complete</span>
            <Button
              as={Link}
              to="/profile"
              size="sm"
              variant="light"
              color="primary"
            >
              Complete your profile
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Job Performance */}
      <Card>
        <CardHeader className="flex gap-2">
          <BarChart2 className="h-5 w-5" />
          <span className="font-semibold">Job Performance</span>
        </CardHeader>
        <CardBody className="gap-6">
          <div className="space-y-2">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Senior Developer</span>
              <span className="text-sm text-default-500">15 Applicants</span>
            </div>
            <Progress value={75} color="primary" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">UX Designer</span>
              <span className="text-sm text-default-500">12 Applicants</span>
            </div>
            <Progress value={60} color="primary" />
          </div>
        </CardBody>
      </Card>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 pb-14 md:pb-0">
        <Button
          as={Link}
          to="/post-job"
          color="primary"
          startContent={<PlusCircle size={16} />}
        >
          Post New Job
        </Button>
        <Button
          as={Link}
          to="/manage-jobs"
          variant="bordered"
          startContent={<Briefcase size={16} />}
        >
          Manage Jobs
        </Button>
        {/* <Button variant="bordered" startContent={<Users size={16} />}>
          View Applicants
        </Button> */}
      </div>
    </div>
  );
};

export default CDashBoard;
