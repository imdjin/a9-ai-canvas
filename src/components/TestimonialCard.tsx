 import { Quote } from "lucide-react";
 
 interface TestimonialCardProps {
   quote: string;
   author: string;
   role: string;
   avatar?: string;
 }
 
 export const TestimonialCard = ({ quote, author, role, avatar }: TestimonialCardProps) => {
   return (
     <div className="p-6 bg-card border border-border rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300">
       <Quote className="h-8 w-8 text-primary/30 mb-4" />
       <p className="text-foreground leading-relaxed mb-6">{quote}</p>
       <div className="flex items-center gap-3">
         <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
           {avatar || author.charAt(0)}
         </div>
         <div>
           <p className="font-semibold text-foreground">{author}</p>
           <p className="text-sm text-muted-foreground">{role}</p>
         </div>
       </div>
     </div>
   );
 };