# 1337 Full-Stack Intern Assignment.

## Prerequisites

- Docker
- pnpm
- Make

## Setup

**- after cloning the repo, create an `.env` file at the root of folder like so :**

```bash
POSTGRE_USER="WHATEVER_YOU_LIKE"
POSTGRES_PASSWORD="WHATEVER_YOU_LIKE"
POSTGRES_DB="WHATEVER_YOU_LIKE"

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public"
```

**Then simply run `make` , enjoy ;) !**
