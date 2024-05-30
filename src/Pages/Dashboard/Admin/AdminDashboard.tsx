import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AdminDashboard = () => {
    const allusers = [{
        id: 1,
        CardTitle: "All Users",
        CardContent: "++201 since last hour",
    },
    {
        id: 2,
        CardTitle: "All Pets",
        CardContent: "++201 since last hour",
    },
    {
        id: 3,
        CardTitle: "All donations",
        CardContent: "++201 since last hour",
    },
    {
        id: 4,
        CardTitle: "All adoptions",
        CardContent: "++201 since last hour",
    }

    ]

    const allpets = [{
        id: 1,
        Location: "Dhaka",
        AddedByName: "Sojib",
        Email: "sojib.gmail.com",
        Reported: "10 Reports",
    },
    {
        id: 2,
        Location: "khulna",
        AddedByName: "jibon",
        Email: "jibon.gmail.com",
        Reported: "0 Reports",
    },
    {
        id: 3,
        Location: "Dhaka",
        AddedByName: "Sojib",
        Email: "sojib.gmail.com",
        Reported: "10 Reports",
    },


    ]
    return (
        <div className="lg:p-10 p-5">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-2 ">
                {
                    allusers.map((user) => (
                        <Card className=" shadow-2xl hover:scale-110  hover:rounded-lg transition-all hover:bg-yellow-500 ">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium"> {user.CardTitle} </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-muted-foreground">
                                    {user.CardContent}
                                </p>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            <div className=" lg:mt-20 mt-10 font-['Fredoka'] rounded-xl shadow-2xl lg:p-5 p-2 bg-[#E5EEFF] ">
                <h1 className="font-semibold"> New  Added Pets </h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Location</TableHead>
                            <TableHead>Added By Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Reported</TableHead>
                            <TableHead className="text-right"> Fake Products</TableHead>
                            <TableHead className="text-right"> Details</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                            allpets.map((pet) => (
                                <TableRow key={pet.id} className="hover:scale-95 transition-all "  >
                                    <TableCell className="font-medium">{pet.Location}</TableCell>
                                    <TableCell>{pet.AddedByName}</TableCell>
                                    <TableCell>{pet.Email}</TableCell>
                                    <TableCell className="">{pet.Reported}</TableCell>
                                    <TableCell className="text-right">

                                        <Button variant="destructive" className="mt-2 ml-2 ">
                                            Block
                                        </Button>
                                    </TableCell>

                                    <TableCell className="text-right">

                                        <Button variant="destructive" className="mt-2 ">
                                            Check
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default AdminDashboard;