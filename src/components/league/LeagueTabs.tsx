import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const LeagueTabs = () => {
    return (
        <Tabs defaultValue="table" className="w-full">
            <TabsList className="w-full">
                <TabsTrigger value="table">Table</TabsTrigger>
                <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
                <TabsTrigger value="player_stats">Player stats</TabsTrigger>
                <TabsTrigger value="team_stats">Team stats</TabsTrigger>
            </TabsList>
            <TabsContent value="table">Table</TabsContent>
            <TabsContent value="fixtures">Fixtures</TabsContent>
            <TabsContent value="player_stats">Player stats</TabsContent>
            <TabsContent value="team_stats">team_stats</TabsContent>
        </Tabs>
    );
};

export default LeagueTabs;
