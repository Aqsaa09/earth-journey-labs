import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Award, TrendingUp, Users, School } from "lucide-react";

const Leaderboard = () => {
  const individualLeaders = [
    { rank: 1, name: "Sarah Chen", school: "Riverside High", points: 2847, trend: "+15", avatar: "SC", badge: "Quiz Master" },
    { rank: 2, name: "Marcus Johnson", school: "Oak Valley College", points: 2734, trend: "+8", avatar: "MJ", badge: "Knowledge Seeker" },
    { rank: 3, name: "Alex Rivera", school: "Pine Academy", points: 2156, trend: "+12", avatar: "AR", badge: "Study Champion" },
    { rank: 4, name: "Emma Watson", school: "Cedar Institute", points: 1943, trend: "-2", avatar: "EW", badge: "Learning Star" },
    { rank: 5, name: "David Kim", school: "Maple School", points: 1876, trend: "+5", avatar: "DK", badge: "Achievement Hunter" },
    { rank: 6, name: "Lisa Rodriguez", school: "Willow Academy", points: 1754, trend: "+18", avatar: "LR", badge: "Study Hero" },
    { rank: 7, name: "James Miller", school: "Sunshine School", points: 1632, trend: "+3", avatar: "JM", badge: "Quick Learner" },
    { rank: 8, name: "Sofia Patel", school: "Crystal College", points: 1589, trend: "+7", avatar: "SP", badge: "Brain Power" },
  ];

  const schoolLeaders = [
    { rank: 1, name: "Riverside High School", members: 247, points: 15847, trend: "+156", color: "bg-yellow-500" },
    { rank: 2, name: "Oak Valley College", members: 189, points: 14234, trend: "+98", color: "bg-gray-400" },
    { rank: 3, name: "Pine Academy", members: 156, points: 12876, trend: "+134", color: "bg-amber-600" },
    { rank: 4, name: "Cedar Institute", members: 203, points: 11943, trend: "+67", color: "bg-primary" },
    { rank: 5, name: "Maple School", members: 178, points: 10756, trend: "+89", color: "bg-primary" },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Award className="h-5 w-5 text-amber-600" />;
    return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
  };

  const getTrendColor = (trend: string) => {
    if (trend.startsWith('+')) return 'text-success';
    if (trend.startsWith('-')) return 'text-destructive';
    return 'text-muted-foreground';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-accent/50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">🏆 Leaderboard</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how you and your school rank in the quest for knowledge. Every lesson completed counts!
          </p>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="individual" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Individual
            </TabsTrigger>
            <TabsTrigger value="schools" className="flex items-center gap-2">
              <School className="h-4 w-4" />
              Schools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual" className="mt-6">
            <Card className="bg-gradient-card border border-border shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Top Learners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {individualLeaders.map((leader) => (
                    <Card key={leader.rank} className={`p-4 transition-all hover:shadow-soft ${
                      leader.rank <= 3 ? 'bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20' : 'bg-background/50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8">
                            {getRankIcon(leader.rank)}
                          </div>
                          
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                              {leader.avatar}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground">{leader.name}</h3>
                              {leader.rank <= 3 && (
                                <Badge className="bg-warning text-warning-foreground text-xs">
                                  {leader.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{leader.school}</p>
                          </div>
                        </div>

                        <div className="text-right space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-foreground">
                              {leader.points.toLocaleString()}
                            </span>
                            <span className="text-xs text-muted-foreground">pts</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className={`h-3 w-3 ${getTrendColor(leader.trend)}`} />
                            <span className={`text-xs font-medium ${getTrendColor(leader.trend)}`}>
                              {leader.trend}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">View Full Rankings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schools" className="mt-6">
            <Card className="bg-gradient-card border border-border shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <School className="h-5 w-5 text-primary" />
                  School Competition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schoolLeaders.map((school) => (
                    <Card key={school.rank} className={`p-4 transition-all hover:shadow-soft ${
                      school.rank <= 3 ? 'bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20' : 'bg-background/50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8">
                            {getRankIcon(school.rank)}
                          </div>
                          
                          <div className={`w-3 h-8 rounded ${school.color}`}></div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground">{school.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {school.members} students
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-foreground">
                              {school.points.toLocaleString()}
                            </span>
                            <span className="text-xs text-muted-foreground">pts</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className={`h-3 w-3 ${getTrendColor(school.trend)}`} />
                            <span className={`text-xs font-medium ${getTrendColor(school.trend)}`}>
                              {school.trend} this week
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Schools</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;