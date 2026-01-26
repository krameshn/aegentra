import { Search, Pencil, Lightbulb, TrendingUp, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ApproachPage() {
  const stages = [
    {
      number: '1',
      title: 'Discover',
      subtitle: 'Assessment',
      description: 'Comprehensive assessment of your current identity infrastructure, security posture, and business requirements.',
      icon: Search,
    },
    {
      number: '2',
      title: 'Design Target IAM Architecture',
      subtitle: 'Blueprint',
      description: 'Create a detailed roadmap and architecture blueprint aligned to Zero Trust principles and your business objectives.',
      icon: Pencil,
    },
    {
      number: '3',
      title: 'Pilot (Limited Scope)',
      subtitle: 'Proof of Concept',
      description: 'Implement a controlled pilot to validate the solution, gather feedback, and refine the approach.',
      icon: Lightbulb,
    },
    {
      number: '4',
      title: 'Scale',
      subtitle: 'Enterprise Rollout',
      description: 'Full enterprise deployment with continuous optimization, monitoring, and support.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
              Our Delivery Approach
            </h1>
            <div className="h-1.5 w-28 bg-accent mx-auto mb-14 rounded-full" />
            <p className="text-xl text-foreground/70 leading-relaxed">
              A proven methodology that ensures successful identity security implementations 
              from assessment to enterprise-wide deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />

              <div className="space-y-24">
                {stages.map((stage, index) => (
                  <div key={stage.number} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-14 h-14 rounded-full bg-accent items-center justify-center z-10 shadow-soft-lg">
                      <span className="text-accent-foreground font-bold text-lg">{stage.number}</span>
                    </div>

                    {/* Content Card */}
                    <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-20' : 'md:ml-auto md:pl-20'}`}>
                      <Card className="border-2 rounded-xl hover:border-accent/50 hover:shadow-soft-lg transition-all duration-300 group">
                        <CardHeader className="pb-6">
                          <div className="flex items-start gap-7 mb-6">
                            <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                              <stage.icon className="w-10 h-10 text-accent" />
                            </div>
                            <div className="flex-1">
                              <Badge className="mb-5 bg-accent/10 text-accent border-accent/20 text-sm px-5 py-2 rounded-lg font-semibold">
                                {stage.number}. {stage.subtitle}
                              </Badge>
                              <CardTitle className="text-2xl">{stage.title}</CardTitle>
                            </div>
                          </div>
                          <CardDescription className="text-lg leading-relaxed">
                            {stage.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Highlight */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20 bg-card shadow-soft-xl rounded-xl overflow-hidden">
              <CardContent className="p-16 md:p-20">
                <div className="flex items-start gap-10">
                  <div className="w-24 h-24 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-12 h-12 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-6">
                      Faster employee onboarding & access
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      IAM readiness, assessment driven architecture, access prioritization & compliance alignment. 
                      Our approach ensures measurable improvements in onboarding time, access provisioning, 
                      and overall security posture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Benefits */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center">
              Why Our Approach Works
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl mb-4">Risk-Based Prioritization</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    We focus on the highest-impact security improvements first, ensuring rapid value delivery.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl mb-4">Iterative Implementation</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Pilot-first approach allows for validation and refinement before full-scale deployment.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl mb-4">Zero Trust Alignment</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Every stage incorporates Zero Trust principles to ensure comprehensive security coverage.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl mb-4">Continuous Optimization</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Post-deployment support and monitoring ensure sustained security improvements.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

