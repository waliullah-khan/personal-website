import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MongoDBAnalysisPage() {
  return (
    <div className="pt-28 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-mono tracking-tight">MongoDB Query Analysis</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">MongoDB</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Python</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">PyMongo</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Pandas</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">NoSQL</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Data Mining</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Business Intelligence</span>
          </div>

          <div className="relative w-full aspect-video mb-12 rounded-md overflow-hidden border border-neutral-800">
            <Image
              src="/images/project-mongodb-detail.jpg"
              alt="MongoDB Query Analysis"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              In this project, I developed complex MongoDB queries to extract meaningful insights from a film database.
              The goal was to demonstrate advanced querying techniques that can be applied to business intelligence and
              data analysis scenarios. By leveraging MongoDB's flexible document model and powerful query capabilities,
              I was able to answer specific business questions that would help drive decision-making in a media company.
            </p>

            <h2>Database Structure</h2>
            <p>
              The project utilized the "sample_mflix" database, which contains information about movies, including
              details such as:
            </p>
            <ul>
              <li>Directors and cast members</li>
              <li>Runtime and release year</li>
              <li>Genres and languages</li>
              <li>Ratings from various sources (IMDB, Metacritic, Tomatoes)</li>
              <li>Viewer and critic scores</li>
            </ul>

            <h2>Query Challenges</h2>

            <h3>Challenge 1: Director-Actor Overlap</h3>
            <p>
              The first challenge was to identify movies where the director also appeared as a cast member. This query
              helps identify multi-talented filmmakers who both direct and act in their productions.
            </p>
            <pre className="bg-neutral-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-neutral-300">
{`// Query to find movies directed by Mel Brooks where he also appeared in the cast
db.movies.find({
    directors: "Mel Brooks",
    cast: "Mel Brooks"
})`}
              </code>
            </pre>
            <p>
              This query returned multiple results, showing that Mel Brooks frequently directed and starred in his own
              films.
            </p>

            <h3>Challenge 2: Genre and Runtime Analysis</h3>
            <p>
              The second challenge involved finding comedy movies with a specific runtime range. This type of query is
              useful for programming decisions, such as filling specific time slots in a broadcast schedule.
            </p>
            <pre className="bg-neutral-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-neutral-300">
{`// Query to find comedy movies with runtime between 90 and 120 minutes
db.movies.find({
    runtime: { $gte: 90, $lte: 120 },
    genres: "Comedy"
})`}
              </code>
            </pre>

            <h3>Challenge 3: Multi-Genre Analysis with Time Constraints</h3>
            <p>
              This challenge required finding movies that belonged to multiple specific genres and were released before
              a certain year. Such queries help in content categorization and historical trend analysis.
            </p>
            <pre className="bg-neutral-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-neutral-300">
{`// Query to find movies with both Adventure and Fantasy genres released before 2010
db.movies.find({
    genres: { $all: ["Adventure", "Fantasy"] },
    year: { $lt: 2010 }
})`}
              </code>
            </pre>

            <h3>Challenge 4: Language and Popularity Filters</h3>
            <p>
              This query identified movies in specific languages that had achieved a certain level of popularity
              (measured by IMDB votes) and were released after a specific year. This helps in identifying successful
              international content for potential distribution.
            </p>
            <pre className="bg-neutral-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-neutral-300">
{`// Query to find Polish or German movies with at least 1000 IMDB votes released after 1996
db.movies.find({
    languages: { $in: ["Polish", "German"] },
    "imdb.votes": { $gte: 1000 },
    year: { $gt: 1996 }
})`}
              </code>
            </pre>

            <h3>Challenge 5: Complex Rating Analysis</h3>
            <p>
              This complex query combined multiple rating criteria, genre filtering, and time period constraints to
              identify movies that met very specific quality and categorization requirements.
            </p>
            <pre className="bg-neutral-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-neutral-300">
{`// Query to find Drama movies from the 1990s with specific Tomatoes ratings
db.movies.find({
    "tomatoes.viewer.rating": { $lt: 8.0 },
    "tomatoes.critic.rating": { $gt: 7.0 },
    year: { $gte: 1990, $lt: 2000 },
    genres: "Drama"
})`}
              </code>
            </pre>

            <h2>Business Applications</h2>
            <p>
              The queries developed in this project have several practical applications in the media and entertainment
              industry:
            </p>
            <ul>
              <li>
                <strong>Content Recommendation:</strong> Identifying movies with specific characteristics to recommend
                to users based on their preferences
              </li>
              <li>
                <strong>Programming Decisions:</strong> Finding content that fits specific time slots or themed
                programming blocks
              </li>
              <li>
                <strong>Acquisition Strategy:</strong> Analyzing which types of content perform well with critics vs.
                viewers to inform content acquisition decisions
              </li>
              <li>
                <strong>Market Analysis:</strong> Understanding trends in film production across different time periods,
                genres, and languages
              </li>
              <li>
                <strong>Talent Spotting:</strong> Identifying multi-talented individuals who excel in multiple roles
                (like directing and acting)
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              This project demonstrated the power of MongoDB's query capabilities for extracting specific insights from
              complex, nested document structures. The techniques used here can be applied to various business
              intelligence scenarios, helping organizations make data-driven decisions about content strategy,
              programming, and audience targeting. By leveraging NoSQL databases like MongoDB, businesses can perform
              sophisticated analyses on unstructured or semi-structured data that would be challenging to model in
              traditional relational databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
