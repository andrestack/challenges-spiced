// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { FISHSAT, NFSAT } from "./payload/satellites.js";

loadPayload(NFSAT, FISHSAT);
