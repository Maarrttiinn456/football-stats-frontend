export type StatConfig = {
    id: string;
    statsId: number[];
    title: string;
    description: string;
    isPercentage: boolean;
    compute: (a: number, b?: number) => number;
    minSample?: number;
};
