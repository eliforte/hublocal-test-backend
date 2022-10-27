import { ObjectSchema } from 'joi';
import Validate from './validate';
import { SCHEMAUser, SCHEMAUpdateUser } from '../../utils/schemas/userSchema';

export default class ValidadeUser extends Validate {
  constructor(
    schema: ObjectSchema = SCHEMAUser,
    updateSchema: ObjectSchema = SCHEMAUpdateUser,
  ) {
    super(schema, updateSchema);
  }
}
