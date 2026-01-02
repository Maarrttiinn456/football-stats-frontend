import { Routes, Route, Navigate } from 'react-router';

//Pages

//Layouts
import LeaguesPage from '@/features/leagues/pages/LeaguesPage';
import LeaguePage from '@/features/league/pages/LeaguePage';
import TeamPage from '@/features/team/pages/TeamPage';
import MainAppLayout from '@/app/layouts/MainAppLayout';
import PlayerStatsPage from '@/features/player-stats/pages/PlayerStatsPage';
import StandingsLayout from '@/features/standings/layouts/StandingsLayout';
import StandingsBasePage from '@/features/standings/pages/StandingsBasePage ';
import StandingsExtendedPage from '@/features/standings/pages/StandingsExtendedPage ';

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
                            element={<PlayerStatsPage />}
                        />
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
