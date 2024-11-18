import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import {
 
  AppViewCourseCropped,
  AppHome,
  AppTermView,
  AppViewCourse,
  AppViewTest,
} from "../../assets/work/";
import { Link } from "react-router-dom";
import { Arrow } from "../../components";

const TermTracker = () => {
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
            <div className="w-3/5">
              <h1 className="work-header underline">Term Tracker</h1>
              <p className="w-4/5 pl-6">
              I developed a mobile app using .NET MAUI, SQLite, and the Android emulator in Visual Studio. 
              The app is designed to help users manage their academic schedules by allowing them to create, update, and organize terms, courses, and assessments. 
              Users can take and share notes easily using Android's native sharing functionality and stay on top of deadlines with customizable local notifications for assessment start and end dates. 
              With a clean and intuitive interface, this app simplifies academic planning and productivity.
              </p>
              <Link
                to="https://github.com/katieperry4/TermApp/tree/main"
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
                src={AppViewCourseCropped}
                alt="Cropped view of the view course page"
              />
            </div>
          </div>
          
          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-12 md:gap-24">
           
            <h3 className="work-subheader">Main Pages</h3>
        
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
              This is the home page of the term tracker app. 
              It allows users to view the terms of school they have, as well as add them.
              They can view and/or edit each term by clicking on each term.
              </p>
              <img
                className="w-1/3 rounded"
                src={AppHome}
                alt="homepage of the term tracking app, showing list of terms"
              />
            </div>
           
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <img
                className="w-1/3 rounded"
                src={AppTermView}
                alt="The app term view page, shows associated courses with the term"
              />
              <p className="w-1/2 md:w-1/3">
                This page is what the user sees when they tap on a term from the home page.
                They can hit the button in the top right to edit the term, can add a course with the button on the bottom, and view a course by tapping on it.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
              When the user taps a course from the term view page, they are brought here.
              They can view all of the course info, edit, and delete it too.
              From this page, users can add course notes, and share them.
              There is also a list of associated assessments on the bottom.
              </p>
              <img
                className="w-1/3 rounded"
                src={AppViewCourse}
                alt="The view course page, showing the course details"
              />
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <img
                className="w-1/3 rounded"
                src={AppViewTest}
                alt="Assessment page of the term app"
              />
              <p className="w-1/2 md:w-1/3">
                This page shows assessment info, accessible from the course the assessment is associated with.
                Users can edit and delete information as well as set notifications for start and end dates.
              </p>
            </div>
           
            <Link
              to="https://github.com/katieperry4/TermApp/tree/main"
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

export default TermTracker;