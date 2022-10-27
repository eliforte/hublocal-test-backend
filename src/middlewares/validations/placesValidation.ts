import { ObjectSchema } from 'joi';
import Validate from './validate';
import { SCHEMAPlaces, SCHEMAUpdatePlaces } from '../../utils/schemas/placesSchema';

export default class ValidadePlaces extends Validate {
  constructor(
    schema: ObjectSchema = SCHEMAPlaces,
    updateSchema: ObjectSchema = SCHEMAUpdatePlaces,
  ) {
    super(schema, updateSchema);
  }
}
