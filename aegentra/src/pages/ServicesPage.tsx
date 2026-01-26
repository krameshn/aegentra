import { Shield, Lock, FileCheck, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ServicesPage() {
  const services = [
    {
      id: 'iam',
      category: 'IAM',
      title: 'Identity & Access Management',
      description: 'Establish a secure, scalable identity foundation for workforce and application access across on-prem, cloud, and hybrid environments.',
      features: [
        'Enterprise SSO, MFA, and federation',
        'Application onboarding and access modeling',
        'Cloud and hybrid identity architecture',
        'Authentication modernization',
      ],
      platforms: 'Keycloak, WSO2',
      icon: Shield,
    },
    {
      id: 'pam',
      category: 'PAM',
      title: 'Privileged Access Management',
      description: 'Eliminate unmanaged privileged access and enforce least-privilege controls across infrastructure, cloud, and DevOps environments.',
      features: [
        'Privileged session access and isolation',
        'Service and machine identity governance',
        'Just-in-time privilege elevation',
        'Audit-ready privileged workflows',
      ],
      platforms: 'Teleport',
      icon: Lock,
    },
    {
      id: 'iga',
      category: 'IGA',
      title: 'Identity Governance & Administration',
      description: 'Implement governance frameworks that deliver visibility, control, and compliance across the full identity lifecycle.',
      features: [
        'Joiner-Mover-Leaver automation',
        'Access certification and reviews',
        'Role and entitlement modeling',
        'Compliance reporting and analytics',
      ],
      platforms: 'SailPoint',
      icon: FileCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
              Identity Security Services
            </h1>
            <div className="h-1.5 w-28 bg-accent mx-auto mb-14 rounded-full" />
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              We design, implement, and operate identity security capabilities aligned to Zero Trust 
              principles and enterprise risk requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.id} className="border-l-4 border-l-accent border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-7 mb-7">
                    <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                      <service.icon className="w-10 h-10 text-accent" />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-5 bg-accent/10 text-accent border-accent/20 text-sm px-5 py-2 rounded-lg font-semibold">
                        {service.category}
                      </Badge>
                      <CardTitle className="text-3xl mb-5">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground/65">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-base text-foreground/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-7 border-t">
                      <p className="text-sm text-foreground/70">
                        <span className="font-semibold">Platforms:</span> {service.platforms}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Why Our Services Stand Out
              </h2>
              <div className="space-y-12">
                <div className="flex gap-7">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-xl">Expert Team</h3>
                    <p className="text-foreground/70 text-base leading-relaxed">
                      Our certified security professionals bring years of experience in Zero Trust architecture and identity security.
                    </p>
                  </div>
                </div>
                <div className="flex gap-7">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-xl">Open-Source Agility</h3>
                    <p className="text-foreground/70 text-base leading-relaxed">
                      We leverage enterprise-grade open-source platforms to deliver flexible, cost-effective solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-7">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-xl">Proven Results</h3>
                    <p className="text-foreground/70 text-base leading-relaxed">
                      Track record of successful implementations across various industries with measurable security improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/services-illustration.dim_600x400.png"
                alt="Services Overview"
                className="rounded-xl shadow-soft-xl border-2 w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

