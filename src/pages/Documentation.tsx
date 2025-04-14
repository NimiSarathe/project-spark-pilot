
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Book, FileText, Code } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about building with our template.
          </p>
        </div>
        
        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Book className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Getting Started</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Learn how to set up your project and start building quickly.
            </p>
            <Button asChild>
              <Link to="/getting-started">Read Getting Started Guide</Link>
            </Button>
          </section>
          
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Components</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Explore our library of pre-built UI components.
            </p>
            <Button asChild>
              <Link to="/components">View Component Library</Link>
            </Button>
          </section>
          
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">API Reference</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Detailed API documentation for all components and utilities.
            </p>
            <Button asChild>
              <Link to="/api">View API Reference</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
