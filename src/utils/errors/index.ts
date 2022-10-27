import NewError from './newError';

export const TOKEN_INVALID = new NewError(401, 'Token inválido');

export const MISSING_TOKEN = new NewError(401, 'Usuário não autorizado');

export const USER_NOT_EXIST = new NewError(404, 'Usuário não existe');

export const USER_EXIST = new NewError(409, 'Email já registrado');

export const INCORRECT_USER = new NewError(401, 'Senha ou email incorretos');

export const USER_NOT_ADMIN = new NewError(401, 'Ação retrista a administradores');

export const ERROR_CREATING_USER = new NewError(400, 'Erro ao registrar o usuário. Aguarde um momento e tente de novamente.');

export const COMPANY_EXIST = new NewError(401, 'Empresa já registrada');

export const RESPONSABLE_EXIST = new NewError(401, 'Responsável já registrado');

export const ERROR_CREATING_COMPANY = new NewError(400, 'Erro ao registrar o empresa. Aguarde um momento e tente de novamente.');
