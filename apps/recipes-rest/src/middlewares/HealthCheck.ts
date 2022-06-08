import HealthCheckerController from "health-check-express/src/health-check";

export default () => new HealthCheckerController().router;
