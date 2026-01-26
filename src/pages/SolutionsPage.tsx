import { Shield, TrendingDown, Cloud, FileCheck, CheckCircle, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SolutionsPage() {
  const mainOutcomes = [
    {
      icon: Shield,
      title: 'Reduced Identity Risk Surface',
      description: 'Systematic removal of standing privileges, orphaned accounts, and unmanaged access paths.',
    },
    {
      icon: Cloud,
      title: 'Faster Access Enablement',
      description: 'Measurable reduction in onboarding time through automated, policy-driven provisioning.',
    },
    {
      icon: FileCheck,
      title: 'Audit-Ready Governance',
      description: 'Continuous visibility and access evidence aligned to regulatory and internal audit expectations.',
    },
    {
      icon: TrendingDown,
      title: 'Lower IAM Operating Cost',
      description: 'Reduced manual effort, fewer access defects, and improved ROI on identity platforms.',
    },
  ];

  const additionalOutcomes = [
    {
      icon: Shield,
      emoji: '🛡️',
      title: 'Elimination of orphan & toxic access',
      description: 'Zero-trust aligned IAM/PAM controls enforced across cloud, hybrid & enterprise environments.',
    },
    {
      icon: TrendingDown,
      emoji: '📉',
      title: 'Measurable reduction in breach risk',
      description: 'AI-driven breach controls, least-privilege governance, and resilient identity architecture.',
    },
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'Reduced IAM operating cost & automation',
      description: 'Less manual provisioning effort, fewer access defects, and ROI-driven automation.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
              Business Outcomes We Deliver
            </h1>
            <div className="h-1.5 w-28 bg-accent mx-auto mb-14 rounded-full" />
            <p className="text-xl text-foreground/70 leading-relaxed">
              Typical outcomes we design for. Expected impact based on enterprise benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Outcomes */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 max-w-5xl mx-auto">
            {mainOutcomes.map((outcome, index) => (
              <Card key={outcome.title} className="border-l-4 border-l-accent border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-7">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                      <outcome.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-5">{outcome.title}</CardTitle>
                      <CardDescription className="text-lg leading-relaxed">
                        {outcome.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Outcomes */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {additionalOutcomes.map((outcome, index) => (
              <Card key={outcome.title} className="border-2 rounded-xl text-center hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-6">
                  <div className="text-6xl mb-8 transition-transform duration-300 group-hover:scale-110">{outcome.emoji}</div>
                  <CardTitle className="text-xl mb-6 leading-tight">{outcome.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {outcome.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <img
                src="/assets/generated/solutions-diagram.dim_800x600.png"
                alt="Solutions Architecture"
                className="rounded-xl shadow-soft-xl border-2 w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Integrated Security Platform
              </h2>
              <div className="space-y-8 text-foreground/70 leading-relaxed text-lg mb-14">
                <p>
                  Our solutions work together seamlessly to provide comprehensive 
                  protection across your entire organization. From user authentication 
                  to privileged access control and compliance monitoring, we've got you covered.
                </p>
                <p>
                  Built on industry-leading open-source technologies and Zero Trust best practices, 
                  our platform scales with your business while maintaining the highest security standards.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <CheckCircle className="w-7 h-7 text-accent flex-shrink-0" />
                  <span className="text-base">Centralized management console</span>
                </div>
                <div className="flex items-center gap-5">
                  <CheckCircle className="w-7 h-7 text-accent flex-shrink-0" />
                  <span className="text-base">Real-time monitoring and alerts</span>
                </div>
                <div className="flex items-center gap-5">
                  <CheckCircle className="w-7 h-7 text-accent flex-shrink-0" />
                  <span className="text-base">Automated compliance reporting</span>
                </div>
                <div className="flex items-center gap-5">
                  <CheckCircle className="w-7 h-7 text-accent flex-shrink-0" />
                  <span className="text-base">Seamless integration with existing systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

