import db from "./db";
import Artist from "../seeds/artist";
import _ from "lodash";
/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
export default (_id) => {
  _.each(db, (artist, index) => {
    if(artist && artist._id === _id) {
      db.splice(index, 1);
    }
  });

  return new Promise((resolve, reject) => resolve());
};
