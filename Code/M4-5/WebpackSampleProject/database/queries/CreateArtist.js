import db from "./db";
import Artist from "../seeds/artist";
import _ from "lodash";
/**
 * Create a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
export default  function artistConfig(artistProps){
  const artist = _.extend({},
    artistProps,
    {
      _id: _.uniqueId(),
      age: parseInt(artistProps.age) || 20,
      yearsActive: parseInt(artistProps.yearsActive) || 5
    }
  );
  db.push(artist);

  return new Promise((resolve, reject) => {
    resolve(artist);
  });
};
