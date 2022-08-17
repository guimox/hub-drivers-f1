import Driver from "../Driver/Driver";
import { DriversListStyled } from "./DriversListStyles";

const DriversList = ({ filteredDrivers, onGetDriverData }) => {
  const selectedDriverHandler = (dataFromDriver) => {
    onGetDriverData(dataFromDriver);
  };

  return (
    <DriversListStyled>
      {filteredDrivers.length > 0 ? (
        filteredDrivers.map((driver) => {
          return (
            <Driver
              key={driver.driverId}
              photo={driver.photo}
              titleName={driver.titleName}
              familyName={driver.familyName}
              dateOfBirth={driver.dateOfBirth}
              nationality={driver.nationality}
              permanentNumber={driver.permanentNumber}
              onGetSelectedDriver={selectedDriverHandler}
            />
          );
        })
      ) : (
        <p>No driver found!</p>
      )}
    </DriversListStyled>
  );
};

export default DriversList;
