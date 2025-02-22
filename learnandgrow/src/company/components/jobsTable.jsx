import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { MoreVertical, Eye, Edit2, Trash2 } from "lucide-react";

const statusColorMap = {
  Active: "success",
  paused: "warning",
  Closed: "danger",
};

const JobsTableWithCard = ({ jobs = [], isMobile, handleAction }) => {
  const columns = [
    { key: "title", label: "JOB TITLE" },
    { key: "department", label: "DEPARTMENT" },
    ...(isMobile
      ? []
      : [
          { key: "location", label: "LOCATION" },
          { key: "type", label: "TYPE" },
          { key: "posted", label: "POSTED" },
        ]),
    { key: "status", label: "STATUS" },
    { key: "applicants", label: "APPLICANTS" },
    { key: "actions", label: "ACTIONS" },
  ];

  const renderCell = (job, columnKey) => {
    switch (columnKey) {
      case "title":
        return <div className="font-medium">{job.title}</div>;
      case "type":
        return (
          !isMobile && (
            <Chip size="sm" variant="flat">
              {job.type}
            </Chip>
          )
        );
      case "posted":
        return !isMobile && new Date(job.posted).toLocaleDateString();
      case "status":
        return (
          <Chip size="sm" color={statusColorMap[job.status]} variant="flat">
            {job.status}
          </Chip>
        );
      case "actions":
        return (
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant="light" size="sm">
                <MoreVertical size={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Job actions">
              <DropdownItem
                startContent={<Eye size={16} />}
                onPress={() => handleAction("view", job.id)}
              >
                View Details
              </DropdownItem>
              <DropdownItem
                startContent={<Edit2 size={16} />}
                onPress={() => handleAction("edit", job.id)}
              >
                Edit Job
              </DropdownItem>
              <DropdownItem
                startContent={<Trash2 size={16} />}
                className="text-danger"
                color="danger"
                onPress={() => handleAction("delete", job.id)}
              >
                Delete Job
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      default:
        return job[columnKey];
    }
  };

  return (
    <Card className="w-full max-h-fit">
      <CardHeader className="px-4 md:px-6 py-3 md:py-4">
        <h3 className="text-base md:text-lg font-semibold">All Jobs</h3>
      </CardHeader>
      <CardBody className="overflow-x-auto">
        <Table
          aria-label="Jobs table"
          className="min-h-[400px]"
          selectionMode="none"
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                {columns.map((column) => (
                  <TableCell key={`${job.id}-${column.key}`}>
                    {renderCell(job, column.key)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default JobsTableWithCard;
