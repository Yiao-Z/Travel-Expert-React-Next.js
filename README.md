# Travel-Expert-React-Next.js

everything is done and finished, all tabs are working and no bugs to be found
potential items can be added into the site, but more or less all finished


## China Travel Guide

The repository root contains the Next.js travel guide.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Run
`npm run lint` and `npm run build` to check the project.

## Travel registration database

The registration form uses the MySQL/MariaDB `travelexperts` database. Copy
`.env.example` to `.env.local` and set `DB_PASSWORD` to the password for your
local MySQL user. Import the provided Travel Experts SQL dump first to create
and populate the `travelexperts` database. Then import
`database/migrations/001-create-webregistrations.sql`; it creates the table
used for usernames, password hashes, and travel preferences. Customer contact
details are saved in the existing `customers` table.
