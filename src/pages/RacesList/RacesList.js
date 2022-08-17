import { GeneralItemList, GeneralOrderList } from "./RacesListStyles";

const RacesList = ({ listRaces }) => {
  return (
    <GeneralOrderList>
      {listRaces
        ? listRaces.map((race) => {
            return (
              <GeneralItemList>
                <b>{race.raceName}</b>
                <p>{race.Circuit.Location.country}</p>
                <p>Round {race.round}</p>
                <p>{race.date}</p>
                <ul>
                  <li>Team {race.Results[0].Constructor.name}</li>
                  <li>Situation: {race.Results[0].status}</li>
                  <li>Qualified in {race.Results[0].grid}</li>
                  <li>Finished in {race.Results[0].position}</li>
                </ul>
              </GeneralItemList>
            );
          })
        : "Loading..."}
    </GeneralOrderList>
  );
};

export default RacesList;
