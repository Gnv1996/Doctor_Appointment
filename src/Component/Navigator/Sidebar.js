import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <Card className="h-[calc(100vh)] w-full max-w-[12rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4 bg-blue-900 rounded">
        <Typography variant="h5" className="text-white text-4xl font-bold">
          Claraly
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-7" />
          </ListItemPrefix>
          <Link to="/">Dashboard</Link>
        </ListItem>
        <ListItem className="py-3">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-7" />
          </ListItemPrefix>
          <Link to="/Patients">Patients</Link>
        </ListItem>
        <div className="mt-[450px]">
          <ListItem className="py-3">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-7 " />
            </ListItemPrefix>
            <Link to="/"> Settings</Link>
          </ListItem>
          <ListItem className="py-3">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-7" />
            </ListItemPrefix>
            <Link to="/contact"> Help Center</Link>
          </ListItem>

          <ListItem className="py-3">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-7" />
            </ListItemPrefix>
            <Link to="/Login">Log In</Link>
          </ListItem>
        </div>
      </List>
    </Card>
  );
}
