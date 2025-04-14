
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const GettingStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-6">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        
        <h1 className="text-4xl font-bold mb-6">Getting Started</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Follow these steps to get your project up and running quickly.
        </p>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                <span className="font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Project Structure</h3>
                <p className="text-muted-foreground mb-4">
                  Our template follows a clean, modular architecture with a focus on maintainability:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Components: Reusable UI elements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Pages: Main application views</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Hooks: Custom React hooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Lib: Utility functions and helpers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                <span className="font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Building Components</h3>
                <p className="text-muted-foreground mb-4">
                  Create beautiful, accessible UI components using our shadcn/ui integration.
                </p>
                <Button asChild>
                  <Link to="/components">View Component Library</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                <span className="font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
                <p className="text-muted-foreground mb-4">
                  Ready to dive deeper? Check out our comprehensive documentation.
                </p>
                <Button asChild>
                  <Link to="/docs">View Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
