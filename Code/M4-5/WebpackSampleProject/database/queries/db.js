import _ from 'lodash';
// const Artist = require('../seeds/artist');
import Artist from '../seeds/artist';
const artists = _.times(20, () => Artist());

export default artists;
