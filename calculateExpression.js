/**
 * Вычисляет арифметическое выражение.
 * Поддерживает +, -, *, / и скобки.
 * Возвращает "Error" для некорректного выражения.
 *
 * @param {string} expr - Строка с арифметическим выражением
 * @returns {string} - Результат вычисления или "Error"
 */

export function calculateExpression(expr) {
    if (!expr) return "";
    try {
        expr = expr.replace(/\s+/g, '');
        // Разрешаем только цифры, точки, скобки и базовые операторы
        if (/[^0-9+\-*/().]/.test(expr)) return "Error";
        return String(new Function(`return ${expr}`)());
    } catch {
        return "Error";
    }
}