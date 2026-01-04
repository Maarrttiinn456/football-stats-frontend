import { Routes, Route, Navigate } from 'react-router';

import LeaguesPage from '@/features/leagues/pages/LeaguesPage';
import LeaguePage from '@/features/league/pages/LeaguePage';
import TeamPage from '@/features/team/pages/TeamPage';
import MainAppLayout from '@/app/layouts/MainAppLayout';
import StandingsLayout from '@/features/standings/layouts/StandingsLayout';
import StandingsBasePage from '@/features/standings/pages/StandingsBasePage ';
import StandingsExtendedPage from '@/features/standings/pages/StandingsExtendedPage ';
import { PlaySquareIcon } from 'lucide-react';
import AttackingPage from '@/features/player-stats/pages/AttackingPage';
import PlayerStatsLayout from '@/features/player-stats/layouts/PlayersStatsLayout';
import DefendingPage from '@/features/player-stats/pages/DefendingPage';
import GoalkeepingPage from '@/features/player-stats/pages/GoalkeepingPage';
import MainPage from '@/features/player-stats/pages/MainPage';

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

                    <Route
                        path="/league/:leagueId/:seasonId"
                        element={<LeaguePage />}
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
                            path="player-stats"
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
                    </Route>

                    <Route
                        path="/team/:seasonId/:teamId"
                        element={<TeamPage />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
