export const calculateCargoBays = (boxUnits) => {
    const units = boxUnits.split(',').map(parseFloat);
    const totalUnits = units.reduce((total, unit) => total + unit, 0);
    const cargoBays = Math.ceil(totalUnits / 10);
    return cargoBays;
};