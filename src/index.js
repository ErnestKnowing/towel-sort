// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (arguments.length === 0) {
        return result;
    }
    matrix.forEach((el, i) =>
        i % 2 === 0 ? el.sort((a, b) => a - b) : el.sort((a, b) => b - a)
    );
    result = [].concat(...matrix);

    return result;
};
