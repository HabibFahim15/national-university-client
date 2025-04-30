import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { PencilIcon, UserPlusIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
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
  
  const TABLE_HEAD = ["Parent", "Email", "Phone", "Actions"];
  
  const TABLE_ROWS = [
    {
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Jennifer Wilson",
      email: "jennifer.w@email.com",
      phone: "+1 (555) 123-4567",
    },
    {
      img: "https://randomuser.me/api/portraits/men/35.jpg",
      name: "David Thompson",
      email: "david.t@email.com",
      phone: "+1 (555) 987-6543",
    },
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Maria Garcia",
      email: "maria.g@email.com",
      phone: "+1 (555) 456-7890",
    },
    {
      img: "https://randomuser.me/api/portraits/men/78.jpg",
      name: "Robert Chen",
      email: "robert.c@email.com",
      phone: "+1 (555) 234-5678",
    },
    {
      img: "https://randomuser.me/api/portraits/women/25.jpg",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 345-6789",
    },
  ];
  
  const AllParents = () => {
    return (
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Parent Directory
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Basic contact information for parents
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                Export
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Parent
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input
                label="Search parents..."
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
                ({ img, name, email, phone }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
  
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-2">
                          <EnvelopeIcon className="h-4 w-4" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {email}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-2">
                          <PhoneIcon className="h-4 w-4" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {phone}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex gap-2">
                          <Tooltip content="Email Parent">
                            <IconButton variant="text" color="blue">
                              <EnvelopeIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Edit">
                            <IconButton variant="text" color="amber">
                              <PencilIcon className="h-4 w-4" />
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
            Showing 1 to 5 of 32 parents
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
  
  export default AllParents;