import { Duration } from "luxon";

export function convertToDuration(iso_pattern: string) {
    const pattern_match = iso_pattern.toLowerCase().match(/[0-9]*m/g);
    if (pattern_match) {
        iso_pattern = `PT${pattern_match[0].toUpperCase()}`;
    }
    
    return Duration.fromISO(iso_pattern);
}
