import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://blah@sentry.io/42",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

console.log("Hello, world!");

await new Promise((resolve) => setTimeout(resolve, 1000));
