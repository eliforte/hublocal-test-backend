import { ObjectSchema } from 'joi';
import Validate from './validate';
import { SCHEMATickets, SCHEMAUpdateTickets } from '../../utils/schemas/ticketSchema';

export default class ValidadeTickets extends Validate {
  constructor(
    schema: ObjectSchema = SCHEMATickets,
    updateSchema: ObjectSchema = SCHEMAUpdateTickets,
  ) {
    super(schema, updateSchema);
  }
}
