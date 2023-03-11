FROM node:16-slim

COPY ./package.json ./package-lock.json ./build ./

ENV PORT 80
EXPOSE 80

USER nobody

ENTRYPOINT ["node", "index.js"]