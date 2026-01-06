import type { PlayerStats } from '../types';

export type StatConfig = {
    eventId: number;
    title: string;
    positions?: string[];
};

export const getSpecificStats = (
    data: PlayerStats[] | undefined,
    stats: StatConfig[],
    eventType: number
) => {
    //Najdu pole které aktálně projíždím
    const statConfig = stats.find((s) => s.eventId === eventType);

    return (
        (
            data
                //delem to nad kazdym hracem
                ?.filter((row) => {
                    //Ze všech hráčů potřebuju zjistit kteří podléhadjí mojim hledeaným statistikám... ostatní nehci
                    //pokud alespon jeden stat splnuje podminku vrat mi hrace
                    const hasStat = row.details.some(
                        (d) => d.type_id === eventType
                    );
                    if (!hasStat) return false;

                    //Pokud pole které projíždím má position, které se === pozici z dat tak bzít jenom tyto hráče
                    if (statConfig?.positions?.length) {
                        const code = row.player?.position?.code;
                        //Pokud hrac ma v datech pozcii a zaroven je pozice mojich StatConfig tak vrat  true
                        return !!code && statConfig.positions.includes(code);
                    } else {
                        return true;
                    }
                })
                .map((row) => ({
                    ...row,
                    details: row.details.filter((d) => d.type_id === eventType),
                })) ?? []
        ).sort((a, b) => {
            const aTotal = a.details[0]?.value?.total ?? 0;
            const bTotal = b.details[0]?.value?.total ?? 0;
            return bTotal - aTotal;
        })
    );
};
