import React, { useState, useEffect } from "react";
import image from "../../media/background.jpg";
import axios from "axios";
import BarChart from "../../components/ChartResults/LineChart";
import Driver from "../Driver/Driver";
import {
  CloseButton,
  ContainerDriverAndGraph,
  ContentDriverDetails,
  ContainerBg,
} from "./DriverDetailsStyles";
import RacesList from "../RacesList/RacesList";

const DriverDetails = ({ selectedDriver, onCloseDriverDetail }) => {
  const [racesList, setRacesList] = useState(null);

  let endpoint = `https://ergast.com/api/f1/2022/drivers/${selectedDriver.driverId}/results.json`;

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        const racesListing = response.data.MRData.RaceTable.Races;
        setRacesList(racesListing);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  const closeDriverDetail = () => onCloseDriverDetail(null);

  return (
    <>
      <ContentDriverDetails>
        <CloseButton onClick={closeDriverDetail}>Close driver</CloseButton>
        <ContainerDriverAndGraph>
          <Driver
            key={selectedDriver.driverId}
            photo={selectedDriver.photo}
            titleName={selectedDriver.titleName}
            familyName={selectedDriver.familyName}
            dateOfBirth={selectedDriver.dateOfBirth}
            nationality={selectedDriver.nationality}
            permanentNumber={selectedDriver.permanentNumber}
          />
          {racesList ? <BarChart raceList={racesList} /> : " "}
        </ContainerDriverAndGraph>
        <RacesList listRaces={racesList} />
        <ContainerBg>
          <img src={image} />
        </ContainerBg>
      </ContentDriverDetails>
    </>
  );
};

export default DriverDetails;
