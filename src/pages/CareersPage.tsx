import { Briefcase, MapPin, Calendar, Heart, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useJobListings } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { JobListing } from '@/backend';

function JobDetailsDialog({ job }: { job: JobListing }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-sm rounded-lg border-2 hover:border-accent/50 hover:text-accent transition-all duration-200">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-4 text-base">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Posted {new Date(Number(job.postedDate) / 1000000).toLocaleDateString()}
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="font-semibold mb-2 text-base">Description</h3>
            <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">
              {job.description}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-base">Requirements</h3>
            <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">
              {job.requirements}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-base">Benefits</h3>
            <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">
              {job.benefits}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function CareersPage() {
  const { data: jobs, isLoading } = useJobListings();

  const benefits = [
    {
      icon: Heart,
      title: 'Competitive Pay',
      description: 'Industry-leading salaries and performance bonuses',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning and advancement opportunities',
    },
    {
      icon: Users,
      title: 'Great Culture',
      description: 'Collaborative environment with talented professionals',
    },
    {
      icon: Award,
      title: 'Health Benefits',
      description: 'Comprehensive health coverage for you and your family',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-36">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-12 bg-accent/10 text-accent border-accent/20 text-sm px-6 py-2.5 rounded-lg font-semibold">
              Join Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
              Build Your Career with <span className="text-accent">Aegentra</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Join a team of passionate professionals dedicated to making the digital world more secure 
              through Zero Trust principles and modern identity security.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Why Work at Aegentra?
              </h2>
              <div className="space-y-8 text-foreground/70 leading-relaxed text-lg">
                <p>
                  At Aegentra, we believe in fostering a culture of innovation, collaboration, 
                  and continuous learning. Our team members are our greatest asset, and we're 
                  committed to their growth and success.
                </p>
                <p>
                  We offer competitive compensation, comprehensive benefits, and opportunities 
                  to work on cutting-edge security technologies that make a real difference in 
                  protecting enterprises worldwide.
                </p>
                <p>
                  Join us in building the future of identity security and Zero Trust architecture.
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

      {/* Benefits */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Benefits & Perks
            </h2>
            <p className="text-foreground/70 text-xl leading-relaxed">
              We take care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="border-2 rounded-xl text-center hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-accent/15 transition-colors duration-300">
                    <benefit.icon className="w-10 h-10 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-4">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Open Positions
            </h2>
            <p className="text-foreground/70 text-xl leading-relaxed">
              Explore our current job openings and find your next opportunity.
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-2 rounded-xl">
                  <CardHeader>
                    <Skeleton className="h-6 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <Card key={Number(job.id)} className="border-2 rounded-xl hover:border-accent/50 hover:shadow-soft-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-3 mb-5 text-2xl">
                          <Briefcase className="w-6 h-6 text-accent" />
                          {job.title}
                        </CardTitle>
                        <CardDescription className="flex flex-wrap items-center gap-4 text-base">
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Posted {new Date(Number(job.postedDate) / 1000000).toLocaleDateString()}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge className="bg-accent/10 text-accent border-accent/20 text-sm px-5 py-2 rounded-lg font-semibold">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-foreground/70 mb-7 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>
                    <JobDetailsDialog job={job} />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="max-w-2xl mx-auto border-2 rounded-xl">
              <CardContent className="p-24 text-center">
                <Briefcase className="w-24 h-24 text-foreground/40 mx-auto mb-10" />
                <h3 className="text-2xl font-semibold mb-5">No Open Positions</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  We don't have any open positions at the moment, but we're always looking for talented individuals. 
                  Check back soon or send us your resume at careers@aegentra.com.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}

