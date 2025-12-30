export const TableRuleClass: Record<string, string> = {
    'uefa-champions-league': 'bg-green-400',
    'uefa-europa-league': 'bg-blue-400',
    'uefa-europa-conference-league': 'bg-purple-400',
    relegation: 'bg-red-400',
};

export const getRuleClass = (code?: string) =>
    code ? TableRuleClass[code] ?? '' : '';
