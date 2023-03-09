export interface Configuration {
  database: Database;
}

export interface Database {
  mongoUrl: string;
  mongoDbs: string;
}
