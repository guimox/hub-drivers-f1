import { Card } from "./DriverStyles";

const Driver = ({
  photo,
  titleName,
  familyName,
  dateOfBirth,
  nationality,
  permanentNumber,
  onGetSelectedDriver,
}) => {
  const selectedDriverHandler = (e) => {
    const selectedDriver =
      e.target.parentNode.children[1].children[0].children[0].textContent;
    onGetSelectedDriver(selectedDriver);
  };

  return (
    <Card>
      <li onClick={selectedDriverHandler}>
        <img src={photo} alt="driver"></img>
        <div className="content">
          <div>
            <h3>{familyName.toUpperCase()}</h3>
            <h2>{titleName}</h2>
            <p>Birthdate: {dateOfBirth}</p>
            <p>Nationality: {nationality}</p>
          </div>
          <b>#{permanentNumber}</b>
        </div>
        <button onClick={selectedDriverHandler}>Stats</button>
      </li>
    </Card>
  );
};

export default Driver;
