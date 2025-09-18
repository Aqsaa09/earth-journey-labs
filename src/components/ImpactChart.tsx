import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3 } from "lucide-react";

const ImpactChart = () => {
  const learningData = [
    { month: 'Jan', completed: 12, target: 15 },
    { month: 'Feb', completed: 19, target: 20 },
    { month: 'Mar', completed: 24, target: 25 },
    { month: 'Apr', completed: 31, target: 30 },
    { month: 'May', completed: 28, target: 35 },
    { month: 'Jun', completed: 35, target: 40 },
  ];

  const activityData = [
    { activity: 'Lessons Completed', value: 340, color: '#10b981' },
    { activity: 'Quizzes Passed', value: 156, color: '#3b82f6' },
    { activity: 'Projects Finished', value: 28, color: '#f59e0b' },
    { activity: 'Badges Earned', value: 45, color: '#22c55e' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="bg-gradient-card border border-border shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            Learning Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={learningData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--card-foreground))'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="completed" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                name="Lessons Completed"
                dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="hsl(var(--muted-foreground))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Monthly Goal"
                dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card border border-border shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Learning Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                type="number"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                type="category"
                dataKey="activity"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                width={80}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--card-foreground))'
                }}
              />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--primary))"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImpactChart;