# SMrepo

## Development

Install packages:

```sh
pnpm install
```

Start a development server:

```sh
pnpm run dev -- --open

# or
./run.sh
```

## Migrations

Using Drizzle ORM with SQLite

```ts
pnpm db:push
pnpm db:generate
pnpm db:migrate
pnpm db:seed
pnpm db:studio
```
