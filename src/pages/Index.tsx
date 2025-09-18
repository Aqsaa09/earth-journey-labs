import { useState } from "react";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Leaderboard from "@/components/Leaderboard";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Target, 
  Zap, 
  Trophy,
  Clock,
  Star,
  TreePine,
  Recycle,
  Droplets
} from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState('home');

  const challenges = [
    {
      title: "Plastic-Free Week Challenge",
      description: "Eliminate single-use plastics for 7 days",
      duration: "1 week",
      difficulty: "Medium",
      participants: 1247,
      icon: <Recycle className="h-6 w-6" />,
      points: 250
    },
    {
      title: "Energy Audit Project",
      description: "Conduct energy efficiency assessment of your school",
      duration: "2 weeks", 
      difficulty: "Hard",
      participants: 423,
      icon: <Zap className="h-6 w-6" />,
      points: 500
    },
    {
      title: "Tree Planting Initiative",
      description: "Organize and execute a community tree planting event",
      duration: "1 month",
      difficulty: "Hard", 
      participants: 789,
      icon: <TreePine className="h-6 w-6" />,
      points: 750
    },
    {
      title: "Water Conservation Campaign",
      description: "Create awareness content about water saving techniques",
      duration: "3 days",
      difficulty: "Easy",
      participants: 2156,
      icon: <Droplets className="h-6 w-6" />,
      points: 150
    }
  ];

  const teams = [
    {
      name: "Eco Warriors",
      school: "Green Valley High",
      members: 12,
      totalPoints: 4567,
      currentChallenge: "Solar Panel Design"
    },
    {
      name: "Climate Crusaders", 
      school: "Riverside College",
      members: 15,
      totalPoints: 3890,
      currentChallenge: "Carbon Footprint Tracker"
    },
    {
      name: "Green Guardians",
      school: "Pine Hill Academy", 
      members: 8,
      totalPoints: 3245,
      currentChallenge: "Recycling Initiative"
    },
    {
      name: "Earth Defenders",
      school: "Oak Tree Institute",
      members: 18,
      totalPoints: 2967,
      currentChallenge: "Renewable Energy Quiz"
    }
  ];

  const ChallengesView = () => (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-accent/50 p-6 pt-20 lg:pt-24 pb-20 lg:pb-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">🎯 Environmental Challenges</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take on real-world environmental challenges and make a measurable impact while earning points and badges!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-gradient-card border border-border shadow-medium hover:shadow-glow transition-all hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {challenge.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={
                          challenge.difficulty === 'Easy' ? 'secondary' :
                          challenge.difficulty === 'Medium' ? 'outline' : 'destructive'
                        }>
                          {challenge.difficulty}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {challenge.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-primary">+{challenge.points}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{challenge.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {challenge.participants.toLocaleString()} participants
                  </span>
                  <Button className="bg-gradient-primary text-primary-foreground">
                    Join Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const TeamsView = () => (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-accent/50 p-6 pt-20 lg:pt-24 pb-20 lg:pb-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">👥 Team Collaboration</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join forces with classmates to tackle bigger environmental challenges and compete against other schools!
          </p>
        </div>

        <div className="grid gap-6">
          {teams.map((team, index) => (
            <Card key={index} className="bg-gradient-card border border-border shadow-medium hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{team.name}</h3>
                      <p className="text-muted-foreground">{team.school}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {team.members} members
                        </span>
                        <span className="flex items-center gap-1">
                          <Trophy className="h-3 w-3" />
                          {team.totalPoints.toLocaleString()} points
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge className="bg-success text-success-foreground">
                      Active Challenge
                    </Badge>
                    <p className="text-sm text-muted-foreground">{team.currentChallenge}</p>
                    <Button variant="outline" size="sm">
                      View Team
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground">
            <Users className="h-4 w-4 mr-2" />
            Create New Team
          </Button>
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'challenges':
        return <ChallengesView />;
      case 'teams':
        return <TeamsView />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      {renderView()}
    </div>
  );
};

export default Index;