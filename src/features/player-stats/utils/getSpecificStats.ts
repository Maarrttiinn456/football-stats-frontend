import type { PlayerStats } from '../types';
import type { StatConfig } from '../types/player-stat-config';

export const getSpecificStat = (data: PlayerStats[], stat: StatConfig) => {
    if (!data) return [];

    const isRatingStat = stat.statsId.includes(118);

    return data
        .map((player) => {
            const sourceValues = stat.statsId.map((idToFind) => {
                const detail = player.details.find(
                    (d) => d.type_id === idToFind
                );

                if (idToFind === 118) {
                    return detail?.value.average ?? 0;
                }

                return detail?.value.total ?? 0;
            });

            const startsMatches =
                player.details.find((d) => d.type_id === 321)?.value.total ?? 0;

            const calculatedNumber = stat.compute(
                ...(sourceValues as [number, number])
            );

            const calculatedValue = isRatingStat
                ? calculatedNumber.toFixed(2)
                : calculatedNumber.toFixed(0) + (stat.isPercentage ? ' %' : '');

            return {
                id: player.id,
                player_id: player.player_id,
                team_id: player.team_id,
                season_id: player.season_id,
                has_values: player.has_values,
                position_id: player.position_id,
                jersey_number: player.jersey_number,
                player: player.player,
                team: player.team,
                gamePlayed: startsMatches,
                rawNumber: calculatedNumber,
                value: calculatedValue,
            };
        })
        .sort((a, b) => b.rawNumber - a.rawNumber);
};
