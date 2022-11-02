import { ObjectSchema } from 'joi';
import Validate from './validate';
import { SCHEMAResponsible, SCHEMAUpdateResponsible } from '../../utils/schemas/responsibleSchema';

export default class ValidateResponsible extends Validate {
  constructor(
    schema: ObjectSchema = SCHEMAResponsible,
    updateSchema: ObjectSchema = SCHEMAUpdateResponsible,
  ) {
    super(schema, updateSchema);
  }
}