import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Loader2, Mail, MapPin, Send } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { SocialLinks } from '@/components/common/SocialLinks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { fadeInUp } from '@/lib/animations';
import { portfolio } from '@/data/portfolio';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name (at least 2 characters).'),
  email: z.string().trim().min(1, 'Email is required.').email('Please enter a valid email address.'),
  message: z.string().trim().min(10, 'Your message should be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { personal } = portfolio;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Frontend-only: no backend call. Simulate a brief async submit for UX.
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.info('Contact form submission (no backend configured):', data);
    toast.success('Message sent!', {
      description: "Thanks for reaching out — I'll get back to you soon.",
    });
    reset();
  };

  return (
    <Section id="contact" ariaLabel="Contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind or just want to say hi? Drop me a message."
      />

      <div className="grid gap-10 md:grid-cols-2">
        {/* Info */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-6">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I&apos;m always open to discussing new opportunities, collaborations, or interesting
            problems. The fastest way to reach me is by email.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="font-medium">{personal.email}</span>
              </span>
            </a>

            <div className="inline-flex items-center gap-3 text-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Location</span>
                <span className="font-medium">{personal.location}</span>
              </span>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Find me online</p>
            <SocialLinks />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Jane Appleseed"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              {...register('name')}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="jane@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              {...register('email')}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              {...register('message')}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" variant="default" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
