import { Route, Routes, useNavigate } from "react-router-dom";
// import ResponsiveDrawer from "../components/drawer";
import Feedback from "./dashboard_screens/feedback";
import Message from "./dashboard_screens/messages";
import Notification from "./dashboard_screens/notification";
import PersistentDrawerLeft from "../components/appbar";

function Dashboard() {
  const navigate = useNavigate();
  // const location = useLocation();

  let clickEv = () => {
    navigate("dashboard");
  };
  // console.log(location.state);

  // useEffect(() => {
  //   if (location.state) {
  //     // setUser(location.state)
  //   } else {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <>
      {/* <h1>Dashboard</h1>     
      
      <Routes>
        <Route path='message' element={<Message />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="notification" element={<Notification />} />
      </Routes> */}

      {/* <ResponsiveDrawer /> */}
      <PersistentDrawerLeft />
      <button onClick={clickEv}>Go to Home</button>

    </>
  );
}
export default Dashboard;




