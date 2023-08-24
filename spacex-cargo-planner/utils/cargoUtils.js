export const calculateCargoBays = (boxUnits) => {
    if (!boxUnits) {
        return 0; // Return a default value or handle the case where boxUnits is null
    }

    const units = boxUnits.split(',').map(parseFloat);
    const totalUnits = units.reduce((total, unit) => total + unit, 0);
    const cargoBays = Math.ceil(totalUnits / 10);
    return cargoBays;
};
