
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Code, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex flex-col items-center justify-center p-4">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome to Your New Project</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start building something amazing with our modern React application template.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <Plus className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>
                Set up your project with best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our template includes modern UI components, routing, and state management to help you build faster.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/getting-started">
                  <ArrowRight className="mr-2 h-4 w-4" /> Get Started
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Components</CardTitle>
              <CardDescription>
                UI building blocks ready to use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use our pre-built accessible components from shadcn/ui to create beautiful interfaces quickly.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/components">
                  <ArrowRight className="mr-2 h-4 w-4" /> Explore Components
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Performance</CardTitle>
              <CardDescription>
                Optimized for speed and efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built with React and Vite for lightning-fast development and production performance.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/performance">
                  <ArrowRight className="mr-2 h-4 w-4" /> Learn More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="mr-4" asChild>
            <Link to="/getting-started">Start Building</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/docs">Documentation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
