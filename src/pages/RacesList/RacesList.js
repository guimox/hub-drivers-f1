import { GeneralItemList, GeneralOrderList } from "./RacesListStyles";

const RacesList = ({ listRaces }) => {
  return (
    <GeneralOrderList>
      {listRaces
        ? listRaces.map((race) => {
            console.log(race);
            return (
              <a
                href={`https://www.youtube.com/results?search_query=${race.raceName}+${race.date}`}
                target="blank"
              >
                <GeneralItemList>
                  <b>{race.raceName}</b>
                  <b>Round {race.round}</b>
                  <p>Country: {race.Circuit.Location.country}</p>
                  <p>Race Date:{race.date}</p>
                  <ul>
                    <li>Team {race.Results[0].Constructor.name}</li>
                    <li>Situation: {race.Results[0].status}</li>
                    <li>Qualified in {race.Results[0].grid}</li>
                    <li>Finished in {race.Results[0].position}</li>
                  </ul>
                </GeneralItemList>
              </a>
            );
          })
        : "Loading..."}
    </GeneralOrderList>
  );
};

export default RacesList;
