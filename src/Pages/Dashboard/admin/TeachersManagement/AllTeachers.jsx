import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
  import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Chip,
  } from "@material-tailwind/react";
  
  const TABLE_HEAD = ["Teacher", "Subject", "Classes", "Contact", "Actions"];
  
  const TABLE_ROWS = [
    {
      img: "https://randomuser.me/api/portraits/women/43.jpg",
      name: "Dr. Sarah Johnson",
      teacherId: "TC2021001",
      subjects: ["Mathematics", "Physics"],
      classes: ["Grade 10-A", "Grade 11-B", "Grade 12-C"],
      email: "sarah.j@school.edu",
      phone: "+1 (555) 123-4567",
      joiningDate: "15/08/2018",
      qualification: "PhD in Physics",
      status: "active",
    },
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Mr. Robert Chen",
      teacherId: "TC2019003",
      subjects: ["English Literature"],
      classes: ["Grade 9-A", "Grade 10-B", "Grade 11-C"],
      email: "robert.c@school.edu",
      phone: "+1 (555) 987-6543",
      joiningDate: "22/03/2019",
      qualification: "MA in English",
      status: "active",
    },
    {
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ms. Maria Garcia",
      teacherId: "TC2022005",
      subjects: ["Biology", "Chemistry"],
      classes: ["Grade 10-C", "Grade 12-A"],
      email: "maria.g@school.edu",
      phone: "+1 (555) 456-7890",
      joiningDate: "05/01/2022",
      qualification: "MSc in Biochemistry",
      status: "active",
    },
    {
      img: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Mr. David Wilson",
      teacherId: "TC2017002",
      subjects: ["History", "Social Studies"],
      classes: ["Grade 8-A", "Grade 9-B", "Grade 11-A"],
      email: "david.w@school.edu",
      phone: "+1 (555) 234-5678",
      joiningDate: "10/09/2017",
      qualification: "PhD in History",
      status: "on_leave",
    },
    {
      img: "https://randomuser.me/api/portraits/women/21.jpg",
      name: "Mrs. Emily Parker",
      teacherId: "TC2020004",
      subjects: ["Computer Science"],
      classes: ["Grade 9-C", "Grade 10-A", "Grade 12-B"],
      email: "emily.p@school.edu",
      phone: "+1 (555) 345-6789",
      joiningDate: "18/06/2020",
      qualification: "MSc in Computer Science",
      status: "active",
    },
  ];
  
  const AllTeachers = () => {
    return (
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Teacher Management
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                View and manage all teaching staff records
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                Export Data
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Teacher
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input
                label="Search teachers..."
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                    img,
                    name,
                    teacherId,
                    subjects,
                    classes,
                    email,
                    phone,
                    status,
                    joiningDate,
                    qualification,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classesStr = classes.join(", ");
                  const subjectsStr = subjects.join(", ");
  
                  const statusColor =
                    status === "active"
                      ? "green"
                      : status === "on_leave"
                      ? "amber"
                      : "red";
  
                  return (
                    <tr key={teacherId}>
                      <td className={isLast ? "p-4" : "p-4 border-b border-blue-gray-50"}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              ID: {teacherId}
                            </Typography>
                            <div className="mt-1">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={status.replace("_", " ")}
                                color={statusColor}
                                className="capitalize"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={isLast ? "p-4" : "p-4 border-b border-blue-gray-50"}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {subjectsStr}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70 mt-1"
                        >
                          {qualification}
                        </Typography>
                      </td>
                      <td className={isLast ? "p-4" : "p-4 border-b border-blue-gray-50"}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {classesStr}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70 mt-1"
                        >
                          Since {joiningDate}
                        </Typography>
                      </td>
                      <td className={isLast ? "p-4" : "p-4 border-b border-blue-gray-50"}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70 mt-1"
                        >
                          {phone}
                        </Typography>
                      </td>
                      <td className={isLast ? "p-4" : "p-4 border-b border-blue-gray-50"}>
                        <div className="flex gap-2">
                          <Tooltip content="Edit Teacher">
                            <IconButton variant="text" color="blue">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="View Profile">
                            <IconButton variant="text" color="green">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </IconButton>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Showing 1 to 5 of 25 teachers
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  };
  
  export default AllTeachers;