import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCompanyInfo, useSubmitContact } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { SiLinkedin, SiX, SiGithub, SiYoutube } from 'react-icons/si';

export default function ContactPage() {
  const { data: companyInfo } = useCompanyInfo();
  const submitContact = useSubmitContact();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitContact.mutateAsync(formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-12 bg-accent/10 text-accent border-accent/20 text-sm px-6 py-2.5 rounded-lg font-semibold">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
              Contact Us
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Have questions about our services? We're here to help. Reach out to our team 
              and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14 rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-base font-semibold rounded-lg shadow-soft-lg hover:shadow-soft-xl hover:scale-[1.02] transition-all duration-300"
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-12">Contact Information</h2>
                <div className="space-y-7">
                  <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 group">
                    <CardContent className="p-7">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                          <Mail className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-3 text-base">Email</h3>
                          <a 
                            href={`mailto:${companyInfo?.email || 'info@aegentra.com'}`}
                            className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                          >
                            {companyInfo?.email || 'info@aegentra.com'}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 group">
                    <CardContent className="p-7">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                          <Phone className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-3 text-base">Phone</h3>
                          <p className="text-sm text-foreground/70">
                            {companyInfo?.phone || '+91 (709) 301-4620'}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 rounded-xl hover:shadow-soft-lg transition-all duration-300 group">
                    <CardContent className="p-7">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                          <MapPin className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-3 text-base">Address</h3>
                          <p className="text-sm text-foreground/70">
                            Green City<br />
                            Vadlapudi, Visakhapatnam<br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-2 border-accent/20 bg-card shadow-soft-lg rounded-xl">
                <CardContent className="p-10">
                  <h3 className="font-semibold mb-8 text-lg">Connect With Us</h3>
                  <div className="flex gap-5 mb-12">
                    <a
                      href={companyInfo?.socialLinks?.linkedin || 'https://linkedin.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                    >
                      <SiLinkedin className="w-7 h-7" />
                    </a>
                    <a
                      href={companyInfo?.socialLinks?.twitter || 'https://twitter.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                    >
                      <SiX className="w-7 h-7" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                    >
                      <SiGithub className="w-7 h-7" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                    >
                      <SiYoutube className="w-7 h-7" />
                    </a>
                  </div>
                  <div className="pt-8 border-t">
                    <h4 className="font-semibold mb-5 text-base">Business Hours</h4>
                    <div className="space-y-2 text-sm text-foreground/70">
                      <p>{companyInfo?.businessHours || 'Mon-Fri: 9am - 6pm IST'}</p>
                    </div>
                    <p className="text-xs text-foreground/65 mt-8">
                      We typically respond to inquiries within 24 hours during business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

