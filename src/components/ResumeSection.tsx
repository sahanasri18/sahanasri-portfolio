import { Download, FileText } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 shadow-warm border border-border">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-2 font-poppins">
                  Download Resume
                </h2>
                <p className="text-muted-foreground font-poppins">
                  Get my detailed resume with all experience and qualifications
                </p>
              </div>
              
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 shadow-soft font-semibold text-lg font-poppins group">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;