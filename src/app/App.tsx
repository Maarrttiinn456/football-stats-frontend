import { Routes, Route, Navigate } from 'react-router';

import LeaguesPage from '@/features/leagues/pages/LeaguesPage';
import MainAppLayout from '@/app/layouts/MainAppLayout';
import StandingsLayout from '@/features/standings/layouts/StandingsLayout';
import StandingsBasePage from '@/features/standings/pages/StandingsBasePage ';
import StandingsExtendedPage from '@/features/standings/pages/StandingsExtendedPage ';
import AttackingPage from '@/features/player-stats/pages/AttackingPage';
import PlayerStatsLayout from '@/features/player-stats/layouts/PlayersStatsLayout';
import DefendingPage from '@/features/player-stats/pages/DefendingPage';
import GoalkeepingPage from '@/features/player-stats/pages/GoalkeepingPage';
import MainPage from '@/features/player-stats/pages/MainPage';
import TeamsStatsLayout from '@/features/teams-stats/layouts/TeamsStatsLayout';
import ShotsPage from '@/features/teams-stats/pages/ShotsPage';
import PossessionPassingPage from '@/features/teams-stats/pages/PossessionPassingPage';
import AttackingPageTeams from '@/features/teams-stats/pages/AttackingPage';
import DefendingPageTeams from '@/features/teams-stats/pages/DefendingPage';
import LeagueLayout from '@/features/league/layouts/LeagueLayout';
import TeamLayout from '@/features/team/layouts/TeamLayout';
import TeamStatPage from '@/features/team/pages/TeamStatsPage';
import TeamMatechesPage from '@/features/team/pages/TeamMatechesPage';
import TeamSquadPage from '@/features/team/pages/TeamSquadPage';
import TeamsPage from '@/features/teams/pages/TeamsPage';

function App() {
    return (
        <div>
            <Routes>
                <Route element={<MainAppLayout />}>
                    <Route
                        path="/"
                        element={<Navigate to="leagues" replace />}
                    ></Route>

                    <Route path="/leagues" element={<LeaguesPage />} />

                    <Route path="/teams" element={<TeamsPage />} />

                    <Route
                        path="/league/:leagueId/:seasonId"
                        element={<LeagueLayout />}
                    >
                        <Route
                            index
                            element={<Navigate to="standings" replace />}
                        />

                        <Route path="standings" element={<StandingsLayout />}>
                            <Route
                                index
                                element={<Navigate to="base" replace />}
                            />
                            <Route
                                path="base"
                                element={<StandingsBasePage />}
                            />
                            <Route
                                path="extended"
                                element={<StandingsExtendedPage />}
                            />
                        </Route>

                        <Route
                            path="players-stats"
                            element={<PlayerStatsLayout />}
                        >
                            <Route
                                index
                                element={<Navigate to="main" replace />}
                            />

                            <Route path="main" element={<MainPage />} />

                            <Route
                                path="attacking"
                                element={<AttackingPage />}
                            />

                            <Route
                                path="defending"
                                element={<DefendingPage />}
                            />

                            <Route
                                path="goalkeeping"
                                element={<GoalkeepingPage />}
                            />
                        </Route>

                        <Route
                            path="teams-stats"
                            element={<TeamsStatsLayout />}
                        >
                            <Route
                                index
                                element={<Navigate to="shots" replace />}
                            />
                            <Route path="shots" element={<ShotsPage />} />
                            <Route
                                path="possesion-passing"
                                element={<PossessionPassingPage />}
                            />
                            <Route
                                path="attacking"
                                element={<AttackingPageTeams />}
                            />
                            <Route
                                path="defending"
                                element={<DefendingPageTeams />}
                            />
                        </Route>
                    </Route>

                    <Route
                        path="/team/:teamId/:seasonId"
                        element={<TeamLayout />}
                    >
                        <Route
                            index
                            element={<Navigate to="statistics" replace />}
                        />
                        <Route path="statistics" element={<TeamStatPage />} />

                        <Route path="matches" element={<TeamMatechesPage />} />

                        <Route path="squad" element={<TeamSquadPage />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
