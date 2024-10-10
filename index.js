const Fastify = require("fastify");

async function start() {
  const fastify = Fastify({ logger: true });

  fastify.get("/", (req, res) => {
    throw new Error(":)");
  });

  fastify.listen({
    port: 8000,
  });
}
start();
