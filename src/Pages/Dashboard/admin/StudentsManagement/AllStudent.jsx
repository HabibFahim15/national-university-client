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
  } from "@material-tailwind/react";
  
  const TABLE_HEAD = ["Student", "Class", "Admission Date", "Actions"];
  
  const TABLE_ROWS = [
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Smith",
      studentId: "ST2023001",
      class: "Grade 10-A",
      section: "Science",
      admissionDate: "15/03/2022",
      contact: "john.smith@school.edu",
    },
    {
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Sarah Johnson",
      studentId: "ST2023002",
      class: "Grade 9-B",
      section: "Arts",
      admissionDate: "10/04/2022",
      contact: "sarah.j@school.edu",
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Michael Brown",
      studentId: "ST2021005",
      class: "Grade 12-C",
      section: "Commerce",
      admissionDate: "05/08/2020",
      contact: "michael.b@school.edu",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Emily Davis",
      studentId: "ST2023004",
      class: "Grade 11-A",
      section: "Science",
      admissionDate: "20/01/2023",
      contact: "emily.d@school.edu",
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Robert Wilson",
      studentId: "ST2022003",
      class: "Grade 12-B",
      section: "Science",
      admissionDate: "12/09/2021",
      contact: "robert.w@school.edu",
    },
  ];
  
  const AllStudent = () => {
    return (
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Student Management
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                View and manage all student records
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                Export Data
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Student
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input
                label="Search students..."
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
                ({ img, name, studentId, class: studentClass, section, admissionDate }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
  
                  return (
                    <tr key={studentId}>
                      <td className={classes}>
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
                              ID: {studentId}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {studentClass}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {section}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {admissionDate}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex gap-2">
                          <Tooltip content="Edit Student">
                            <IconButton variant="text" color="blue">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="View Details">
                            <IconButton variant="text" color="green">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </IconButton>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Showing 1 to 5 of 120 students
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
  
  export default AllStudent;