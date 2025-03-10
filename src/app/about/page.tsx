import { ProfileImage } from '@/components/profile-image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <main className="prose prose-slate mx-auto">
        <h1 className="text-4xl font-bold mb-8">Abhi Jadhav</h1>
        
        <ProfileImage />
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            I am a software engineer interested in building scalable and efficient systems. Currently, I work as a software engineer at Roblox, on the languages and frameworks team, building and supporting core libraries used by all Roblox teams.
            In addition, I often work on performance related investigations and optimizations for various Roblox services. My technical interests include computer architecture, systems programming, programming languages, and operating systems. 
            I'm also an avid reader and learner, and I love to share my learnings with others. My blog is a collection of my thoughts and ideas on software engineering, technology, and life. See my bookshelf for some of my favorite books.
          </p>
        </section>
      </main>
    </div>
  );
} 