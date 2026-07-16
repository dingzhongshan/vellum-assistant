import type { CommandRiskSpec } from "../../risk-types.js";

const spec: CommandRiskSpec = {
  baseRisk: "medium",
  // Auto-approve `bun <script.ts>` when the script path is within the
  // workspace. Subcommands (install, test, run, etc.) have their own
  // specs without sandboxAutoApprove, so this only affects direct
  // script execution (e.g. plugin skill scripts).
  sandboxAutoApprove: true,
  argSchema: {},
  subcommands: {
    install: {
      baseRisk: "medium",
    },
    add: {
      baseRisk: "medium",
    },
    update: {
      baseRisk: "medium",
    },
    test: {
      baseRisk: "high",
      reason: "Executes arbitrary test code",
    },
    run: {
      baseRisk: "high",
      reason: "Executes arbitrary scripts",
    },
  },
};

export default spec;
