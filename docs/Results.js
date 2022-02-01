import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id} //key is only use for React that use to keep changes, can't use prop called key!
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={(`${pet.city}`, `${pet.state}`)}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
