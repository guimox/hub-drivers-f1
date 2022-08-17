import { Content } from "./styles/Content";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { useState, useEffect, useRef } from "react";
import DriversList from "./pages/DriverList/DriversList";
import DriverDetails from "./pages/DriverDetails/DriverDetails";
import axios from "axios";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import Loading from "./components/Loading/Loading";

function App() {
  // states
  const [search, setSearch] = useState("");
  const [drivers, setDrivers] = useState([]);
  const [driverData, setDriverData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // ref for scrolling
  const scrollRef = useRef(null);

  // exec the scrolling
  const scrollToTop = () => scrollRef.current.scrollIntoView();

  const updateThemeHandler = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const showDriverDetailHandler = (driverName) => {
    console.log(driverName);
    const driverObject = drivers.find(
      (driver) => driver.driverId === driverName.toLowerCase()
    );
    setDriverData(driverObject);
    scrollToTop();
  };

  const closeDriverDetailHandler = () => {
    setDriverData(null);
  };

  useEffect(() => {
    const fetchDriver = async () => {
      const res1 = await axios.get(
        "https://ergast.com/api/f1/2022/drivers.json?limit=25"
      );
      const arrayDrivers = res1.data.MRData.DriverTable.Drivers;
      await Promise.all(
        arrayDrivers.map(async (driver) => {
          const searchTitle = `/api.php?action=query&generator=search&format=json&gsrsearch=${driver.givenName}_${driver.familyName}&gsrlimit=1&prop=info`;
          const res2 = await axios.get(searchTitle);
          const driverTitle = Object.values(res2.data.query.pages)[0].title;
          const linkPhoto = `/api.php?action=query&titles=${driverTitle}&prop=pageimages&format=json&pithumbsize=400`;
          const res3 = await axios.get(linkPhoto);
          const thumbSource = Object.values(res3.data.query.pages)[0].thumbnail.source;
          driver.photo = thumbSource;
          driver.titleName = driverTitle;
        })
      );
      setIsLoading(false);
      setDrivers(arrayDrivers);
    };
    fetchDriver();
    // eslint-disable-next-line
  }, []);

  // input search
  const searchHandler = (inputData) => {
    setSearch(inputData);
  };
  const filteredDrivers = drivers.filter((driver) =>
    driver.titleName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar updateTheme={updateThemeHandler} />
            {driverData ? " " : <Home data={drivers} onGetInputData={searchHandler} />}
            <Content>
              <>
                {driverData ? (
                  <DriverDetails
                    selectedDriver={driverData}
                    onCloseDriverDetail={closeDriverDetailHandler}
                  />
                ) : (
                  <DriversList
                    filteredDrivers={filteredDrivers}
                    drivers={drivers}
                    onGetDriverData={showDriverDetailHandler}
                  />
                )}
              </>
            </Content>
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
