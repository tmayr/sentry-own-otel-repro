const Sentry = require("@sentry/node");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const {
  SentrySampler,
  SentrySpanProcessor,
  SentryPropagator,
} = require("@sentry/opentelemetry");

const sentryClient = Sentry.init({
  dsn: "https://319205103d1b740d6d9f7985ef5de26f@o71952.ingest.us.sentry.io/4508046980284416",
  enabled: true,
  debug: true,
  skipOpenTelemetrySetup: true,
});

const provider = new NodeTracerProvider({
  sampler: sentryClient ? new SentrySampler(sentryClient) : undefined,
});

provider.addSpanProcessor(new SentrySpanProcessor());

provider.register({
  propagator: new SentryPropagator(),
  contextManager: new Sentry.SentryContextManager(),
});

Sentry.validateOpenTelemetrySetup();
