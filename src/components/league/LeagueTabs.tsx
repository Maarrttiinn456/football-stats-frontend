import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LeagueStandings from './LeagueStandings';
const LeagueTabs = () => {
    return (
        <Tabs defaultValue="standings" className="w-full">
            <TabsList className="w-full">
                <TabsTrigger value="standings">Table</TabsTrigger>
                <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
                <TabsTrigger value="player_stats">Player stats</TabsTrigger>
                <TabsTrigger value="team_stats">Team stats</TabsTrigger>
            </TabsList>
            <TabsContent value="standings">
                <LeagueStandings />
            </TabsContent>
            <TabsContent value="fixtures">Fixtures</TabsContent>
            <TabsContent value="player_stats">Player stats</TabsContent>
            <TabsContent value="team_stats">team_stats</TabsContent>
        </Tabs>
    );
};

export default LeagueTabs;
