import { Routes, Route, Navigate } from 'react-router';

//Pages

//Layouts
import LeaguesPage from '@/features/leagues/pages/LeaguesPage';
import LeaguePage from '@/features/league/pages/LeaguePage';
import TeamPage from '@/features/team/pages/TeamPage';
import MainAppLayout from '@/shared/layouts/MainAppLayout';

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
                    />
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
