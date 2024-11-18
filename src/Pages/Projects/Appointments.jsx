import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import {
  
  SCHAppointments,
  SCHLogin,
  SCHMenu,
  SCHCustomer,
  SCHCalendar,
  SCHReports,
} from "../../assets/work/";
import { Link } from "react-router-dom";
import { Arrow } from "../../components";

const Appointments = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <Arrow />
      <div className="flex">
        {/* sidebar */}
        <div className="fixed hidden md:block">
          <button
            onClick={() => history.back()}
            className={`btn ${
              dark
                ? "bg-violet hover:bg-light-red"
                : "bg-tea-green hover:bg-light-red"
            }`}
          >
            Back
          </button>
        </div>
        {/* main content */}
        <div className="md:mx-12">
          <div className="flex flex-col items-center lg:flex-row py-20 md:mx-32">
            {/* text */}
            <div className="w-full">
              <h1 className="work-header underline">Appointment Scheduler</h1>
              <p className="w-4/5 pl-6">
              This desktop application, built with WinForms and powered by MySQL, streamlines appointment management for users. 
              It enables adding, editing, and deleting customers and appointments while providing a comprehensive calendar view for daily, weekly, and monthly schedules. 
              The app includes built-in functionality to detect the user's location and timezone, offering localized features like a French-translated login page for users in France. 
              <br></br>
              <br></br>
              Scheduling is enhanced with intelligent checks to prevent overlapping appointments and ensure all bookings fall within business hours (9 AM–5 PM EST), accounting for daylight saving time. 
              Additionally, users can generate detailed reports, including appointment types by month, user-specific schedules, and total appointments by day.
              </p>
              <Link
                to="https://github.com/katieperry4/Scheduler/tree/master"
                target="_blank"
              >
                <button
                  className={`btn ${
                    dark
                      ? "bg-violet hover:bg-light-red"
                      : "bg-tea-green hover:bg-light-red"
                  }`}
                >
                  GitHub
                </button>
              </Link>
            </div>
            <div className="items-center hidden sm:block">
              <img
                className="w-full "
                src={SCHAppointments}
                alt="Appointments page of the application."
              />
            </div>
          </div>
          
          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-12 md:gap-24">

            <h3 className="work-subheader">Main Pages</h3>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                This is the login page, it allows users to log into the application. 
                It also detects their location and local time and will translate the labels and error messages to French if the user is in France.
                An alert will also show if the user logging in has a appointment within the next 15 minutes.
              </p>
              <img
                className="w-1/3 rounded"
                src={SCHLogin}
                alt="appointment app login page"
              />
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <img
                className="w-1/3 rounded"
                src={SCHMenu}
                alt="main menu of the appointment app."
              />
              <p className="w-1/2 md:w-1/3">
                This is the main menu of the application. 
                It allows the users to add/edit/delete customers, add/edit/delete appointments, view their calendar, and view reports.
                
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                Here is the customer page where the user can perform CRUD actions on customers.
                The application will now allow you to delete customers if they have appointments scheduled.
              </p>
              <img
                className="w-1/3 rounded"
                src={SCHCustomer}
                alt="customer page where the user can add/edit/delete"
              />
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <img
                className="w-1/3 rounded"
                src={SCHCalendar}
                alt="calendar view in the appointment app"
              />
              <p className="w-1/2 md:w-1/3">
                This is the calendar page, the user can view their appointments by total appointments, monthly, and weekly. 
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                This is the appointments page where the user can add, edit, and delete appointments.
                If the user or customer has conflicting appointments the user cannot schedule anything overlapping.
                The app is also configured to prevent appointments from being scheduled outside business hours (9-5 EST).
              </p>
              <img
                className="w-1/3 rounded"
                src={SCHAppointments}
                alt="appointment page where the user can add/edit/delete"
              />
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <img
                className="w-1/3 rounded"
                src={SCHReports}
                alt="reports page in the appointment app"
              />
              <p className="w-1/2 md:w-1/3">
               This page generates three different types of reports. The number of reports based on type and month, total list of reports by user, and total number of appointments by day.
              </p>
            </div>
            <Link
              to="https://github.com/katieperry4/Scheduler/tree/master"
              target="_blank"
            >
              <button
                className={`btn ${
                  dark
                    ? "bg-violet hover:bg-light-red"
                    : "bg-tea-green hover:bg-light-red"
                }`}
              >
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;