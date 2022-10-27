declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      DATABASE_URL: string;
      POSTGRES_USER: string
      POSTGRES_PASSWORD: string;
      PGADMIN_PORT: string;
      PGADMIN_DEFAULT_EMAIL: string;
      PGADMIN_DEFAULT_PASSWORD: string;
      PORT: string;
      PROD_CLIENT: string;
    }
  }
}

export {};
