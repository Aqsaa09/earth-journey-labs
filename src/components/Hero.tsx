import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Trophy, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-environment.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning about environmental sustainability" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Learn. Act.{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
              Save the Planet.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            The gamified environmental education platform that transforms students into climate champions through interactive challenges, real-world projects, and friendly competition.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" className="bg-warning text-warning-foreground hover:bg-warning/90 text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105">
              Start Your Climate Journey
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-full">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          <Card className="p-6 bg-card/20 backdrop-blur border-primary-foreground/20 hover:bg-card/30 transition-all hover:scale-105">
            <Leaf className="h-8 w-8 text-warning mx-auto mb-3" />
            <h3 className="font-semibold text-primary-foreground mb-2">Interactive Learning</h3>
            <p className="text-sm text-primary-foreground/80">Engaging environmental challenges and quizzes</p>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur border-primary-foreground/20 hover:bg-card/30 transition-all hover:scale-105">
            <Trophy className="h-8 w-8 text-warning mx-auto mb-3" />
            <h3 className="font-semibold text-primary-foreground mb-2">Gamification</h3>
            <p className="text-sm text-primary-foreground/80">Earn points, badges, and climb leaderboards</p>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur border-primary-foreground/20 hover:bg-card/30 transition-all hover:scale-105">
            <Users className="h-8 w-8 text-warning mx-auto mb-3" />
            <h3 className="font-semibold text-primary-foreground mb-2">Team Challenges</h3>
            <p className="text-sm text-primary-foreground/80">Collaborate on real-world sustainability projects</p>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur border-primary-foreground/20 hover:bg-card/30 transition-all hover:scale-105">
            <Target className="h-8 w-8 text-warning mx-auto mb-3" />
            <h3 className="font-semibold text-primary-foreground mb-2">Real Impact</h3>
            <p className="text-sm text-primary-foreground/80">Track your environmental impact in real-time</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;