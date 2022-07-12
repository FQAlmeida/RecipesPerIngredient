import { DifficultLevel, DifficultLevelEnum } from "@recipes-per-ingredient/recipes-models";

import {
    SignalCellular0BarTwoTone as SignalCellular0BarIcon,
    SignalCellular2BarTwoTone as SignalCellular2BarIcon,
    SignalCellular3BarTwoTone as SignalCellular3BarIcon,
} from "@mui/icons-material";

export const DifficultyIconChooser = (difficult_level: DifficultLevel) => {
    switch (difficult_level.difficult) {
        case DifficultLevelEnum.EASY:
            return SignalCellular0BarIcon;
        case DifficultLevelEnum.MEDIUM:
            return SignalCellular2BarIcon;
        case DifficultLevelEnum.HARD:
            return SignalCellular3BarIcon;
        default:
            return SignalCellular2BarIcon;
    }
};