# 1337 Full-Stack Intern Assignment.

## Prerequisites

- Docker
- pnpm
- Make

## Setup

**- after cloning the repo, create an `.env` file at the root of folder like so :**

```bash
POSTGRESQL_PASSWORD="WHATEVER_YOU_LIKE"
POSTGRESQL_USERNAME="WHATEVER_YOU_LIKE"

DATABASE_URL="postgresql://${POSTGRESQL_USERNAME}:${POSTGRESQL_PASSWORD}@localhost:5432/mydb?schema=public"
```

**Then simply run `make` , enjoy ;) !**
