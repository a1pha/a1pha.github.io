import { ProfileImage } from '@/components/profile-image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <main className="prose prose-slate mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <ProfileImage />
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            [Your introduction here] - A passionate software engineer focused on building
            scalable and efficient solutions. With experience in [your main technologies],
            I enjoy tackling complex problems and creating innovative solutions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-muted-foreground">Languages: [Your programming languages]</li>
            <li className="text-muted-foreground">Frontend: [Your frontend technologies]</li>
            <li className="text-muted-foreground">Backend: [Your backend technologies]</li>
            <li className="text-muted-foreground">DevOps: [Your DevOps tools]</li>
            <li className="text-muted-foreground">Databases: [Your database expertise]</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground">
            [Brief overview of your professional journey and key achievements]
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
          <p className="text-muted-foreground">
            [What you're currently working on or learning]
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Feel free to reach out to me on [your preferred contact methods/social links]
          </p>
        </section>
      </main>
    </div>
  );
} 