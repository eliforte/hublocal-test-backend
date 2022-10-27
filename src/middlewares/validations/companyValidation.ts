import { ObjectSchema } from 'joi';
import Validate from './validate';
import { SCHEMACompany, SCHEMAUpdateCompany } from '../../utils/schemas/companySchema';

export default class ValidadeCompany extends Validate {
  constructor(
    schema: ObjectSchema = SCHEMACompany,
    updateSchema: ObjectSchema = SCHEMAUpdateCompany,
  ) {
    super(schema, updateSchema);
  }
}
