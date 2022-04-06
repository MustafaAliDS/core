//@format
import "dotenv/config";
import { Worker } from "worker_threads";
import { resolve } from "path";

import { toHex } from "eth-fun";

import logger from "./services/extractor/logger.mjs";
import { __dirname } from "./node_filler.mjs";
import { run } from "./strategies/src/index.mjs";

const extractorPath = resolve(__dirname, "./services/extractor/worker.mjs");

const workerData = { concurrency: 20 };
const worker = new Worker(extractorPath, {
  workerData,
});

const inputs = {
  worker,
  startBlock: toHex(14532654),
};

run(inputs, logger);