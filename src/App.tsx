import { Routes, Route, Navigate } from 'react-router';

//Pages
import LeaguesPage from './pages/LeaguesPage';
import LeaguePage from './pages/LeaguePage';
import TeamPage from './pages/TeamPage';

//Layouts
import MainAppLayout from './layouts/MainAppLayout';

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
