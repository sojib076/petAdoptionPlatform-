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

const Users = () => {
  return (
    <div className="p-10  font-['Fredoka'] ">
      <h1> All Users</h1>
      <Table>
        <TableCaption>All Users </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Location</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>

            <TableHead className="text-right"> Status</TableHead>
            <TableHead className="text-right"> Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Dhaka</TableCell>
            <TableCell>Sojib</TableCell>
            <TableCell>sojib@gmail.com</TableCell>
            <TableCell className=""> User </TableCell>
            <TableCell className="text-right">
              {" "}
              <Button variant="destructive" className="mt-2 ml-2 ">
                Block
              </Button>{" "}
            </TableCell>
            <TableCell className="text-right">
              {" "}
              <Button variant="destructive" className="mt-2 ">
                Check
              </Button>{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Dhaka</TableCell>
            <TableCell>Sojib</TableCell>
            <TableCell>sojib@gmail.com</TableCell>
            <TableCell className=""> User </TableCell>
            <TableCell className="text-right">
              {" "}
              <Button variant="destructive" className="mt-2 ml-2 ">
                Block
              </Button>{" "}
            </TableCell>
            <TableCell className="text-right">
              {" "}
              <Button variant="destructive" className="mt-2 ">
                Check
              </Button>{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Dhaka</TableCell>
            <TableCell>Sojib</TableCell>
            <TableCell>sojib@gmail.com</TableCell>
            <TableCell className=""> User </TableCell>
            <TableCell className="text-right">
              {" "}
              <Button variant="destructive" className="mt-2 ml-2 ">
                Block
              </Button>{" "}
            </TableCell>
            <TableCell className="text-right">
              {" "}
              <Button variant="destructive" className="mt-2 ">
                Check
              </Button>{" "}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
