import { Link } from '@tanstack/react-router';
import { Shield, Cloud, FileCheck, TrendingDown, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const highlights = [
    'Cloud & hybrid readiness',
    'Regulatory audit support',
    'Least privilege enforced at scale',
  ];

  const platforms = ['Keycloak', 'WSO2', 'SailPoint', 'Teleport'];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Light Background and Dark Text */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-background.dim_1920x1080.jpg')] bg-cover bg-center opacity-[0.03]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-36 md:py-48">
          <div className="max-w-5xl animate-fade-in-up">
            <p className="text-sm font-bold text-accent mb-8 tracking-wider uppercase">
              Enterprise Identity & Zero Trust
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-10 text-foreground leading-[1.08]">
              Identity‑First Zero Trust for Global{' '}
              <span className="relative inline-block">
                <span className="text-foreground">Enterprises</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-14 leading-relaxed max-w-3xl font-medium">
              Secure workforce and privileged access with modern IAM, PAM, and IGA.
            </p>
            
            {/* Highlights */}
            <ul className="space-y-6 mb-16">
              {highlights.map((highlight, index) => (
                <li key={highlight} className="flex items-center gap-4 text-foreground/85 text-lg font-medium animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="w-7 h-7 text-accent flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Platform Mentions */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-base text-foreground/75 mb-3 font-medium">
                Built on {platforms.slice(0, -1).join(', ')}, and {platforms[platforms.length - 1]}.
              </p>
              <p className="text-base text-foreground/75 font-medium">
                Delivered using Zero Trust principles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold px-10 h-14 rounded-xl shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all duration-300">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-accent text-base font-semibold px-10 h-14 rounded-xl transition-all duration-300">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Identity Security Services
            </h2>
            <p className="text-foreground/70 text-xl leading-relaxed">
              We design, implement, and operate identity security capabilities aligned to Zero Trust principles and enterprise risk requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="border-2 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 group bg-card">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-colors duration-300">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-4">IAM</CardTitle>
                <CardDescription className="text-base text-foreground/65 font-medium">
                  Identity & Access Management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed mb-7 bg-transparent">
                  Establish secure, scalable identity foundation for workforce and application access across on-prem, cloud, and hybrid environments.
                </p>
                <p className="text-xs text-foreground/65 font-semibold">
                  Platforms: Keycloak, WSO2
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 group bg-card">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-colors duration-300">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-4">PAM</CardTitle>
                <CardDescription className="text-base text-foreground/65 font-medium">
                  Privileged Access Management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed mb-7 bg-transparent">
                  Eliminate unmanaged privileged access and enforce least-privilege controls across infrastructure, cloud, and DevOps environments.
                </p>
                <p className="text-xs text-foreground/65 font-semibold">
                  Platforms: Teleport
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 group bg-card">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-colors duration-300">
                  <FileCheck className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-4">IGA</CardTitle>
                <CardDescription className="text-base text-foreground/65 font-medium">
                  Identity Governance & Administration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed mb-7 bg-transparent">
                  Implement governance frameworks that deliver visibility, control, and compliance across the full identity lifecycle.
                </p>
                <p className="text-xs text-foreground/65 font-semibold">
                  Platforms: SailPoint
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-24">
            <Button asChild variant="outline" size="lg" className="text-base font-semibold px-10 h-14 rounded-xl border-2 hover:border-accent/50 hover:text-accent transition-all duration-300">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Outcomes Preview */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Business Outcomes We Deliver
            </h2>
            <p className="text-foreground/70 text-xl leading-relaxed">
              Typical outcomes we design for. Expected impact based on enterprise benchmarks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent/15 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl leading-tight">Reduced Identity Risk Surface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed bg-transparent">
                  Systematic removal of standing privileges, orphaned accounts, and unmanaged access paths.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent/15 transition-colors duration-300">
                  <Cloud className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl leading-tight">Faster Access Enablement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed bg-transparent">
                  Measurable reduction in onboarding time through automated, policy-driven provisioning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent/15 transition-colors duration-300">
                  <FileCheck className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl leading-tight">Audit-Ready Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed bg-transparent">
                  Continuous visibility and access evidence aligned to regulatory and internal audit expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent/15 transition-colors duration-300">
                  <TrendingDown className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl leading-tight">Lower IAM Operating Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed bg-transparent">
                  Reduced manual effort, fewer access defects, and improved ROI on identity platforms.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-24">
            <Button asChild variant="outline" size="lg" className="text-base font-semibold px-10 h-14 rounded-xl border-2 hover:border-accent/50 hover:text-accent transition-all duration-300">
              <Link to="/solutions">
                View All Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20 bg-card shadow-soft-xl rounded-xl overflow-hidden">
            <CardContent className="p-20 md:p-24 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-foreground/70 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
                Get in touch with our team to learn how Aegentra can help protect your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold px-10 h-14 rounded-xl shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all duration-300">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base font-semibold px-10 h-14 rounded-xl border-2 hover:border-accent/50 hover:text-accent transition-all duration-300">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

