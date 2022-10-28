import NewError from './newError';

export const TOKEN_INVALID = new NewError(401, 'Token inválido');

export const MISSING_TOKEN = new NewError(401, 'Usuário não autorizado');

export const USER_NOT_EXIST = new NewError(404, 'Usuário não existe');

export const USER_EXIST = new NewError(409, 'Email já registrado');

export const INCORRECT_USER = new NewError(401, 'Senha ou email incorretos');

export const USER_NOT_ADMIN = new NewError(401, 'Ação retrista a administradores');

export const ERROR_CREATING_USER = new NewError(400, 'Erro ao registrar o usuário. Aguarde um momento e tente de novamente.');

export const COMPANY_EXIST = new NewError(409, 'Empresa já registrada');

export const RESPONSABLE_EXIST = new NewError(409, 'Responsável já registrado');

export const ERROR_CREATING_COMPANY = new NewError(400, 'Erro ao registrar o empresa. Aguarde um momento e tente de novamente.');

export const PLACE_EXIST = new NewError(409, 'Local já registrado');

export const ERROR_CREATING_PLACE = new NewError(400, 'Erro ao registrar o estabelecimento. Aguarde um momento e tente de novamente.');

export const TICKET_EXIST = new NewError(409, 'Já existe um ticket com status PENDENTE ou PROGRESSO registrado para esse estabelecimento. Verifique aba de Tickets.');

export const ERROR_CREATING_TICKET = new NewError(409, 'Erro ao registrar novo ticket. Aguarde um momento e tente de novamente.');

export const USER_NOT_AUTHORIZATION = new NewError(401, 'Usuário não autorizado');

export const ERROR_UPDATE_TICKET = new NewError(409, 'Erro ao atualizar ticket. Aguarde um momento e tente de novamente.');
