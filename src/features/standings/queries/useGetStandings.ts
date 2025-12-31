import type {
    StandingsTableRow,
    StandingsTableRowBase,
    StandingsTableRowExtended,
} from '@/features/standings/types';
import { useQuery } from '@tanstack/react-query';
import { fetchSeasonStandings } from '../api/standings';

const useGetStansings = (seasonId?: number) => {
    return useQuery({
        queryKey: ['leagueStandings', seasonId],
        queryFn: () => fetchSeasonStandings(seasonId!),
        enabled: !!seasonId,

        select: (response): StandingsTableRow => {
            const base: StandingsTableRowBase[] = response.data.map((item) => {
                const goalDifference =
                    item.details?.find(
                        (stat) => stat.type?.code === 'goal-difference'
                    )?.value ?? 0;

                const matchesPlayed =
                    item.details?.find(
                        (stat) => stat.type?.code === 'overall-matches-played'
                    )?.value ?? 0;

                return {
                    id: item.id,
                    position: item.position,
                    points: item.points,
                    matchesPlayed,
                    goalDifference,
                    participant: {
                        name: item.participant?.name ?? '',
                        image_path: item.participant?.image_path ?? '',
                    },
                    rule: {
                        id: item.rule?.type?.id ?? 0,
                        name: item.rule?.type?.name ?? '',
                        code: item.rule?.type?.code,
                    },
                };
            });

            const extended: StandingsTableRowExtended[] = response.data.map(
                (item) => {
                    const matchesPlayed =
                        item.details?.find(
                            (stat) =>
                                stat.type?.code === 'overall-matches-played'
                        )?.value ?? 0;

                    const overallWon =
                        item.details?.find(
                            (stat) => stat.type?.code === 'overall-won'
                        )?.value ?? 0;

                    const overallDraw =
                        item.details?.find(
                            (stat) => stat.type?.code === 'overall-draw'
                        )?.value ?? 0;

                    const overallLost =
                        item.details?.find(
                            (stat) => stat.type?.code === 'overall-lost'
                        )?.value ?? 0;

                    const goalFor =
                        item.details?.find(
                            (stat) => stat.type?.code === 'overall-goals-for'
                        )?.value ?? 0;

                    const goalAgainst =
                        item.details?.find(
                            (stat) =>
                                stat.type?.code === 'overall-goals-against'
                        )?.value ?? 0;

                    const goalDifference =
                        item.details?.find(
                            (stat) => stat.type?.code === 'goal-difference'
                        )?.value ?? 0;

                    const form =
                        item.form
                            ?.map((f) => f.form)
                            .reverse()
                            .slice(0, 5) ?? [];

                    return {
                        id: item.id,
                        position: item.position,
                        points: item.points,
                        matchesPlayed,
                        overallWon,
                        overallDraw,
                        overallLost,
                        goalFor,
                        goalAgainst,
                        goalDifference,
                        form,
                        participant: {
                            name: item.participant?.name ?? '',
                            image_path: item.participant?.image_path ?? '',
                        },
                        rule: {
                            id: item.rule?.type?.id ?? 0,
                            name: item.rule?.type?.name ?? '',
                            code: item.rule?.type?.code,
                        },
                    };
                }
            );

            return { base, extended };
        },
    });
};

export default useGetStansings;
