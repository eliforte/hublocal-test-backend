## **Iniciando projeto**

Primeiro use esse comando no seu terminal para fazer um clone do repositório no seu computador:

```bash
git clone git@github.com:eliforte/hublocal-test-backend.git
```
Use o comando abaixo para entrar na pasta principal do projeto:

```bash
cd hublocal-test-backend
```

Na pasta raiz do projeto use:

```bash
yarn
```

## **Scripts**

- <code>yarn</code> => Para instalar todas as dependências do projeto.
- <code>yarn start</code> => Para iniciar a aplicação em ambiente de produção.
- <code>yarn dev</code> => Para iniciar a aplicação em ambiente de desenvolvimento.
- <code>yarn build</code> => Para iniciar o build a aplicação.

***

## **Docker Compose**

  Se você ja estiver o Docker Componse instalado na sua máquina, vá para a pasta raiz do projeto, crie um arquivo chamado <code>.env</code>, configure da seguinte forma:

```env
DATABASE_URL="postgresql://postgres:teste123@localhost:5432/hublocal_api?schema=public"
POSTGRES_USER=postgres
POSTGRES_PASSWORD=senhasenha
PGADMIN_PORT=5050
PGADMIN_DEFAULT_EMAIL=pgadmin4@pgadmin.org
PGADMIN_DEFAULT_PASSWORD=admin
PORT=9090
PROD_CLIENT=
SECRET=
```

- <code>DATABASE_URL</code> -> Link para conectar no banco de dados.
  - Explicando a contrução da URL:
    - **"postgresql://"** - Representa qual gerenciador de banco de dados vai ser usado.
    - **"postgres:teste123"** - São respectivamente, usuário e senha para acesso ao banco de dados.
    - **"@localhost:"** - Endereço IP/domínio do seu servidor de banco de dados.
    - **"5432"** - Porta na qual seu servidor de banco de dados está sendo executado.
    - **"/hublocal_api"** - O nome do banco de dados que você seja usar.
- <code>POSTGRES_USER</code> -> Usuário para conectar ao banco.
- <code>POSTGRES_PASSWORD</code> -> Senha para conectar ao banco.
- <code>PGADMIN_PORT</code> => Porta para acessar o PgAdmin4 no seu navegador.
- <code>PGADMIN_DEFAULT_EMAIL</code> => Email padrão para conseguir acesso ao PgAdmin4 no seu navegador.
- <code>PGADMIN_DEFAULT_PASSWORD</code> => Senha padrão para conseguir acesso ao PgAdmin4 no seu navegador.
- <code>PORT</code> => Porta onde ficará diponível a API.
- <code>PROD_CLIENT</code> => Url do frontend para consegui liberação pelor CORS.
- <code>SECRET</code> => Secret usada para codificação de decodificação do JWT.

Lembrando que o **docker-compose.yml** deve ficar desta forma:

```yml
services:
  postgres:
    container_name: postgres_container
    image: postgres
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-senhasenha}
      PGDATA: /data/postgres
    volumes:
       - postgres:/data/postgres
    ports:
      - "5432:5432"
    networks:
      - postgres
    restart: always
  
  pgadmin:
    container_name: pgadmin_container
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: ${PGADMIN_DEFAULT_EMAIL:-pgadmin4@pgadmin.org}
      PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_DEFAULT_PASSWORD:-admin}
      PGADMIN_CONFIG_SERVER_MODE: 'False'
    volumes:
       - pgadmin:/var/lib/pgadmin

    ports:
      - "${PGADMIN_PORT:-5050}:80"
    networks:
      - postgres
    restart: unless-stopped

networks:
  postgres:
    driver: bridge

volumes:
    postgres:
    pgadmin:
```

Após configurar esses dois arquivos, basta execurar o comando abaixo para que seu bando de dados e a plataforma administrar e desenvolver, estejam disponíveis. 

```bash
cd docker-compose up -d
```

Caso queria reportar algum erro, bastanta criar uma Issue que irei responder. :D