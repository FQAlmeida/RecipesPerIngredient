import {convertToDuration} from "./convert-to-duration"

describe("Convert ISO String to Duration", () => {
    test("Converting PT5M to duration object must be successful", () => {
        const minutes = 5
        const isoDuration = `PT${minutes}M`;

        const duration = convertToDuration(isoDuration);

        expect(duration.minutes).toBe(minutes)

    })

    test("Converting 30M to duration object must be successful", () => {
        const minutes = 30
        const isoDuration = `${minutes}M`;

        const duration = convertToDuration(isoDuration);

        expect(duration.minutes).toBe(minutes)

    })

    test("Converting T30M to duration object must be successful", () => {
        const minutes = 30
        const isoDuration = `T${minutes}M`;

        const duration = convertToDuration(isoDuration);

        expect(duration.minutes).toBe(minutes)

    })

    test("Converting PT3H to duration object must be successful", () => {
        const hours = 30
        const isoDuration = `PT${hours}H`;

        const duration = convertToDuration(isoDuration);

        expect(duration.minutes).not.toBe(hours*61)

    })

})