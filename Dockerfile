FROM node:18.20.2 as builder
WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

FROM node:20.9.0 as runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4000

CMD ["yarn", "start"]
