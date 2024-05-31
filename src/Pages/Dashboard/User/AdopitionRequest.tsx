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

const AdopitionRequest = () => {

    return (
        <div className="p-10  font-['Fredoka'] ">
            <h1> All Users</h1>
            <Table>
                <TableCaption>All Users </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Location</TableHead>
                        <TableHead> Pet Name </TableHead>
                        <TableHead> Apply By </TableHead>
                        <TableHead>Email  </TableHead>

                        <TableHead className="text-right"> Report</TableHead>
                        <TableHead className="text-right"> Approve</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                
                    <TableRow>
                        <TableCell className="font-medium">Dhaka</TableCell>
                        <TableCell>cutiya</TableCell>
                        <TableCell> A </TableCell>
                        <TableCell className=""> soji@fma  </TableCell>
                        <TableCell className="text-right">

                            <Button variant="destructive" className="mt-2 ml-2 ">
                            Report 
                            </Button>
                        </TableCell>
                        <TableCell className="text-right">

                            <Button variant="outline" className="mt-2 ">
                           Approve
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}


export default AdopitionRequest;