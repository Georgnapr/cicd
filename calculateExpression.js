
export function calculateExpression(currentInput) {
    if (!currentInput) return "";
    try {
        return String(eval(currentInput));
    } catch {
        return 'Error';
    }
}