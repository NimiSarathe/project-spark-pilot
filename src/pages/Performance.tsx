
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, LineChart, Clock } from "lucide-react";

const Performance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-6">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        
        <h1 className="text-4xl font-bold mb-4">Performance</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Learn how our template is optimized for speed and efficiency.
        </p>
        
        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Fast Loading Times</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Our template is built with Vite, providing near-instant development server startup and 
              lightning-fast hot module replacement (HMR).
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-medium mb-3">Key Optimizations:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <span className="font-medium">Code Splitting</span>
                    <p className="text-sm text-muted-foreground">Automatically splits your code into smaller chunks that load on demand</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <span className="font-medium">Tree Shaking</span>
                    <p className="text-sm text-muted-foreground">Eliminates unused code to reduce bundle size</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <span className="font-medium">Asset Optimization</span>
                    <p className="text-sm text-muted-foreground">Automatically optimizes images and other assets</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <LineChart className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Runtime Performance</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              We've implemented best practices to ensure smooth rendering and responsive UI interactions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-2">React Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic use of useMemo, useCallback, and React.memo to prevent unnecessary re-renders and optimize component performance.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-2">Efficient State Management</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging React Query for data fetching, caching, and state management to reduce network requests and improve UI responsiveness.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Developer Experience</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Fast feedback loops and efficient tooling help you build features quickly without sacrificing quality.
            </p>
            <Button asChild>
              <Link to="/docs">Explore Development Guide</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Performance;
