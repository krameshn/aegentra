import { Users, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCompanyInfo, useLeadershipTeam } from '@/hooks/useQueries';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutPage() {
  const { data: companyInfo } = useCompanyInfo();
  const { data: leadership } = useLeadershipTeam();

  const coreValues = [
    'Open-source agility with enterprise-grade governance',
    'Unified identity, access, and privilege control across cloud and hybrid',
    'Zero Trust architectures aligned to real-world operating risk',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
              Who We Are
            </h1>
            <div className="h-1.5 w-28 bg-accent mx-auto mb-14 rounded-full" />
            <p className="text-xl text-foreground/70 leading-relaxed">
              Aegentra is an identity security and Zero Trust engineering firm focused on building 
              identity-first infrastructure for modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-10">
              {coreValues.map((value, index) => (
                <li key={index} className="flex items-start gap-7 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-3.5 h-3.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <p className="text-xl text-foreground/70 leading-relaxed font-medium">{value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Our Story
              </h2>
              <div className="space-y-8 text-foreground/70 leading-relaxed text-lg">
                <p>
                  Founded with a vision to revolutionize identity and access security, 
                  Aegentra has grown to become a trusted partner for organizations seeking 
                  comprehensive cybersecurity solutions built on Zero Trust principles.
                </p>
                <p>
                  Our team of experienced professionals brings together decades of expertise 
                  in cybersecurity, identity management, and compliance. We understand the 
                  evolving threat landscape and work tirelessly to stay ahead of emerging risks.
                </p>
                <p>
                  Today, we serve clients across various industries, providing tailored 
                  solutions that meet their unique security requirements while ensuring 
                  seamless user experiences and regulatory compliance.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/team-photo.dim_800x600.jpg"
                alt="Our Team"
                className="rounded-xl shadow-soft-xl border-2 w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What Drives Us
            </h2>
            <p className="text-foreground/70 text-xl leading-relaxed">
              Our core values guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-colors duration-300">
                  <Target className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-5">Our Mission</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {companyInfo?.mission || 'Building and Scaling Identity Infrastructures for the Digital Age'}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-colors duration-300">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-5">Our Team</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  A dedicated team of cybersecurity experts committed to protecting your digital assets through Zero Trust principles.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-colors duration-300">
                  <Award className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-5">Our Values</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Innovation, integrity, and excellence in everything we do, with a focus on open-source agility.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {leadership && leadership.length > 0 && (
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-28">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Leadership
              </h2>
              <p className="text-foreground/70 text-xl leading-relaxed">
                Meet the experienced professionals leading Aegentra's mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {leadership.map((member) => (
                <Card key={member.name} className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader className="text-center pb-6">
                    <Avatar className="w-36 h-36 mx-auto mb-8 ring-4 ring-accent/10 group-hover:ring-accent/20 transition-all duration-300">
                      <AvatarImage src={member.photoUrl} alt={member.name} />
                      <AvatarFallback className="text-3xl bg-accent/10 text-accent">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl mb-4">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-semibold text-base">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 text-center leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

