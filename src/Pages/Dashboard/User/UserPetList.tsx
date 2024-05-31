import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const UserPetList = () => {
    return (
        <div className="p-10  font-['Fredoka'] ">
            <h1> All Users</h1>
            <Table>
                <TableCaption>  </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Location</TableHead>
                        <TableHead> Pet Name</TableHead>
                        <TableHead> Added Date</TableHead>
                        <TableHead>Available </TableHead>

                        <TableHead className="text-right"> Status</TableHead>
                        <TableHead className="text-right"> Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                
                    <TableRow>
                        <TableCell className="font-medium">Dhaka</TableCell>
                        <TableCell>Boony</TableCell>
                        <TableCell>2021-2-4</TableCell>
                        <TableCell className=""> NO  </TableCell>
                        <TableCell className="text-right">

                            <Button variant="destructive" className="mt-2 ml-2 ">
                                Dlet
                            </Button>
                        </TableCell>
                        <TableCell className="text-right">

                            <Button variant="destructive" className="mt-2 ">
                               Update data 
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default UserPetList;
