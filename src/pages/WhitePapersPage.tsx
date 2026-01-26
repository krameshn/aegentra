import { FileText, Download, Calendar, User, ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useWhitePapers, useIncrementDownloadCount } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { useState } from 'react';
import type { WhitePaper } from '@/backend';

export default function WhitePapersPage() {
  const { data: whitePapers, isLoading } = useWhitePapers();
  const incrementDownload = useIncrementDownloadCount();
  const [selectedPaper, setSelectedPaper] = useState<WhitePaper | null>(null);

  const handleDownload = async (whitePaperId: bigint, title: string, fileBlob: any) => {
    try {
      // Increment download count
      await incrementDownload.mutateAsync(whitePaperId);
      
      // Get the direct URL for the file
      const fileUrl = fileBlob.getDirectURL();
      
      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success(`Downloading "${title}"`);
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download white paper');
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatFileSize = (bytes: bigint) => {
    const kb = Number(bytes) / 1024;
    if (kb < 1024) return `${kb.toFixed(0)} KB`;
    return `${(kb / 1024).toFixed(1)} MB`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,111,78,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,230,207,0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 animate-fade-in">
              <FileText className="h-4 w-4" />
              <span>Professional Resources</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight animate-fade-in-up">
              White Papers & <span className="text-accent relative inline-block">Resources
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/30 rounded-full" />
              </span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
              In-depth insights and best practices for implementing enterprise-grade identity and access security solutions
            </p>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : whitePapers && whitePapers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper) => (
                <Card 
                  key={Number(paper.id)} 
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-muted hover:border-accent/30 bg-muted/30"
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <FileText className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {formatFileSize(paper.fileSize)}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {paper.title}
                    </CardTitle>
                    
                    <CardDescription className="text-sm text-foreground/70 line-clamp-3">
                      {paper.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-col gap-2 text-sm text-foreground/60">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-accent" />
                        <span>{paper.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{formatDate(paper.publishedDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4 text-accent" />
                        <span>{Number(paper.downloadCount)} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full group/btn"
                            onClick={() => setSelectedPaper(paper)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View Full Report</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-foreground pr-8">
                              {selectedPaper?.title}
                            </DialogTitle>
                            <DialogDescription className="text-base text-foreground/70 pt-2">
                              {selectedPaper?.shortDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 pt-4">
                            <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-accent" />
                                <span>{selectedPaper?.author}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-accent" />
                                <span>{selectedPaper && formatDate(selectedPaper.publishedDate)}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-accent" />
                                <span>{selectedPaper && formatFileSize(selectedPaper.fileSize)}</span>
                              </div>
                            </div>
                            
                            {selectedPaper?.longDescription && (
                              <div className="prose prose-sm max-w-none">
                                <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
                                <p className="text-foreground/70 leading-relaxed whitespace-pre-line">
                                  {selectedPaper.longDescription}
                                </p>
                              </div>
                            )}
                            
                            <Button 
                              className="w-full"
                              onClick={() => {
                                if (selectedPaper) {
                                  handleDownload(selectedPaper.id, selectedPaper.title, selectedPaper.file);
                                }
                              }}
                              disabled={incrementDownload.isPending}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              <span>Download White Paper</span>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        className="w-full group/btn"
                        onClick={() => handleDownload(paper.id, paper.title, paper.file)}
                        disabled={incrementDownload.isPending}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download White Paper</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No White Papers Available</h3>
              <p className="text-foreground/70">Check back soon for new resources and insights.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Need Custom IAM Guidance?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our identity security experts are ready to help you design and implement the right solution for your enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Talk to an IAM Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Request IAM Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
