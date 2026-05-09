# SMrepo

## Development

Install packages:

```sh
pnpm install
```

Set up database:

```sh
pnpm db:push
pnpm db:seed
```

Start a development server:

```sh
pnpm run dev -- --open

# or
./run.sh
```

## Deploy

Manually on Silk for now:

```
pnpm build
pnpm db:push
pnpm db:seed
silk app $host/smrepo* load
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
