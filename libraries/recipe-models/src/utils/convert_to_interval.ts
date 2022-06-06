import { Duration } from "luxon";

export function convertToDuration(iso_pattern: string) {
    return Duration.fromISO(iso_pattern);
}
