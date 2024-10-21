all: start

install_packages:
	pnpm install

database: install_packages
	docker compose up -d
	pnpx prisma migrate dev
	pnpx prisma db push

start: database
	pnpm build
	pnpm start