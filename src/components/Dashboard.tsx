import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ImpactChart from "@/components/ImpactChart";
import { 
  Target, 
  Zap, 
  BookOpen, 
  Trophy, 
  Users, 
  Calendar,
  TrendingUp,
  Award
} from "lucide-react";

const Dashboard = () => {
  const challenges = [
    {
      title: "Math Mastery Challenge",
      description: "Solve 50 algebra problems to unlock the next level",
      progress: 75,
      points: 150,
      icon: <Target className="h-5 w-5" />,
      difficulty: "Easy",
      deadline: "3 days left"
    },
    {
      title: "Science Explorer Quiz",
      description: "Master the fundamentals of physics and chemistry",
      progress: 45,
      points: 200,
      icon: <Zap className="h-5 w-5" />,
      difficulty: "Medium",
      deadline: "1 week left"
    },
    {
      title: "History Timeline Project",
      description: "Create an interactive timeline of world events",
      progress: 20,
      points: 300,
      icon: <BookOpen className="h-5 w-5" />,
      difficulty: "Hard",
      deadline: "2 weeks left"
    }
  ];

  const achievements = [
    { name: "Quick Learner", description: "Complete 5 challenges", earned: true },
    { name: "Knowledge Seeker", description: "Study for 20+ hours", earned: true },
    { name: "Quiz Master", description: "Score 100% on 10 quizzes", earned: false },
    { name: "Team Leader", description: "Lead a group project", earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-accent/50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex! 🎓</h1>
            <p className="text-muted-foreground">Keep up the amazing learning progress!</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-primary text-primary-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              Today's Lessons
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-success border-0 text-success-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-success-foreground/80 text-sm">Total Points</p>
                  <p className="text-3xl font-bold">1,247</p>
                </div>
                <Trophy className="h-8 w-8 text-success-foreground/80" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+15% this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-border shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">XP Earned</p>
                  <p className="text-3xl font-bold text-foreground">2,847</p>
                </div>
                <Award className="h-8 w-8 text-warning" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <Target className="h-4 w-4 text-success" />
                <span className="text-sm text-muted-foreground">Goal: 3,000 XP</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-border shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Team Rank</p>
                  <p className="text-3xl font-bold text-foreground">#3</p>
                </div>
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="text-sm text-muted-foreground">Moved up 2 spots</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-border shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Streak</p>
                  <p className="text-3xl font-bold text-foreground">12 days</p>
                </div>
                <Award className="h-8 w-8 text-warning" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-muted-foreground">Personal best!</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Challenges */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border border-border shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Active Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="p-4 bg-background/50 border border-border/50 hover:shadow-soft transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {challenge.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground truncate">{challenge.title}</h3>
                            <Badge variant={
                              challenge.difficulty === 'Easy' ? 'secondary' :
                              challenge.difficulty === 'Medium' ? 'outline' : 'destructive'
                            }>
                              {challenge.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">{challenge.progress}%</span>
                            </div>
                            <Progress value={challenge.progress} className="h-2" />
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm text-muted-foreground">{challenge.deadline}</span>
                            <span className="text-sm font-medium text-primary">+{challenge.points} pts</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="shrink-0">Continue</Button>
                    </div>
                  </Card>
                ))}
                
                <Button variant="outline" className="w-full">
                  <Target className="h-4 w-4 mr-2" />
                  Browse All Challenges
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <Card className="bg-gradient-card border border-border shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-warning" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg border ${
                    achievement.earned 
                      ? 'bg-success/10 border-success/20 text-success' 
                      : 'bg-muted/50 border-border text-muted-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Trophy className={`h-5 w-5 ${achievement.earned ? 'text-success' : 'text-muted-foreground'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{achievement.name}</p>
                      <p className="text-xs opacity-80">{achievement.description}</p>
                    </div>
                    {achievement.earned && (
                      <Badge className="bg-success text-success-foreground">
                        Earned
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
              
              <Button variant="outline" size="sm" className="w-full">
                View All Badges
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Data Visualization */}
        <ImpactChart />
      </div>
    </div>
  );
};

export default Dashboard;