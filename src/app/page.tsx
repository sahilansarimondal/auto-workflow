import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { Boxes } from "@/components/ui/aceternity/boxes";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-36 flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#5eead4"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Automate Your Workflows with Ease
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Connect your favorite apps and build powerful automations in minutes
            — no code required.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                See Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            title="Connect Apps"
            desc="Integrate tools like Slack, Gmail, Notion, and more."
          />
          <FeatureCard
            title="Automate Workflows"
            desc="Create triggers and actions without writing code."
          />
          <FeatureCard
            title="Save Time"
            desc="Let automation handle repetitive tasks for you."
          />
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="relative py-32">
        <Spotlight className="top-10 left-0" fill="white" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold">
            One Workflow, Endless Possibilities
          </h2>
          <p className="mt-6 text-muted-foreground">
            Build workflows like: "When I receive an email with an invoice,
            upload it to Google Drive and notify me on Slack."
          </p>
        </div>
      </section>

      {/* Boxes animation + CTA */}
      <section className="relative py-32 bg-accent text-accent-foreground">
        <Boxes />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold">
            Ready to supercharge your productivity?
          </h3>
          <p className="mt-4 text-muted-foreground">
            Start automating today — free for individuals and teams.
          </p>
          <Link href="/signup">
            <Button size="lg" className="mt-6">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} WorkflowPro. Built with ❤️ using ShadCN &
        Aceternity.
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-background border rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}
