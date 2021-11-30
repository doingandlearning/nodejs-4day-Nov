import pino from "pino";
// import { subtract } from "./add";
import * as funcs from "./add";

import { promises } from "fs";

const logger = pino();

const { readFile } = promises;

logger.info("my package has started.");
// logger.info(add(3, 4));
logger.info(funcs.subtract(3, 4));

logger.info(require.resolve("pino"));

process.stdin.resume();
