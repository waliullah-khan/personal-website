import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EcommerceAnalyticsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-mono tracking-tight">E-Commerce Analytics</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Python</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Pandas</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">NumPy</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Matplotlib</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Seaborn</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Jupyter</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Data Analysis</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Visualization</span>
          </div>

          <div className="relative w-full aspect-video mb-12 rounded-md overflow-hidden border border-neutral-800">
            <Image
              src="/images/project-ecommerce-detail.jpg"
              alt="E-Commerce Analytics"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Executive Summary</h2>
            <p>
              In this analysis, I dove deep into a vast dataset of a Brazilian E-Commerce brand to gain insights into
              basic exploratory analysis, customer behavior, seasonal impacts on sales performance, and logistics
              efficiency's impact on customer satisfaction. Through this project, I highlighted key findings that can
              drive strategic decisions to enhance business operations, customer retention, and overall profitability.
            </p>

            <h2>Key Findings</h2>

            <h3>Sales & Revenue Overview</h3>
            <ul>
              <li>Total Revenue: Approximately R$ 16,008,872</li>
              <li>Average Order Value: R$ 154.10</li>
              <li>
                Monthly Revenue Trends: Sales peaked in November 2017 with R$ 1,194,883, suggesting a seasonal trend
                possibly linked to holiday shopping
              </li>
            </ul>

            <h3>Product Category Performance</h3>
            <ul>
              <li>
                Top Selling Categories: Bed, Bath, and Table (11,115 orders), Health and Beauty (9,670 orders), Sports
                and Leisure (8,641 orders)
              </li>
              <li>
                Credit card stood out as the most preferred payment method, with boleto and vouchers as close second and
                third respectively
              </li>
            </ul>

            <h3>Customer Behavior Insights</h3>
            <ul>
              <li>
                Purchase Frequency: Majority of the customer base can be categorized as one-time buyers (93,099),
                suggesting a severe lack of retention
              </li>
              <li>
                Geographical Distribution: São Paulo leads with the highest number of purchases (15,540), followed by
                Rio de Janeiro (6,882)
              </li>
            </ul>

            <h3>Logistics and Delivery Performance</h3>
            <p>
              The delivery performance appears to be in shambles as orders take an average of 12.5 days to be delivered.
              While reasonable given the expected range for Brazil, there is significant room for improvement to gain
              competitive advantage.
            </p>

            <h3>Customer Satisfaction</h3>
            <ul>
              <li>
                Review Scores: 73.41% of orders received positive feedback (4-5 stars), while 13.99% received low scores
                (1-2 stars), often due to delivery issues or product quality
              </li>
              <li>
                Common Complaints: The most frequent complaints in low-rated reviews include non-delivery of products,
                highlighting a critical area for improvement
              </li>
            </ul>

            <h2>Strategic Recommendations</h2>
            <ol>
              <li>
                <strong>Customer Retention:</strong> Develop loyalty programs to encourage repeat purchases, especially
                targeting one-time buyers. Personalized marketing and post-purchase engagement can significantly
                increase customer lifetime value.
              </li>
              <li>
                <strong>Logistics Optimization:</strong> Focus on reducing shipping times, particularly in regions with
                longer delivery times. Consider local warehousing or partnerships with more reliable carriers.
              </li>
              <li>
                <strong>Product Strategy:</strong> Capitalize on the popularity of top-selling categories by expanding
                product lines or offering bundled deals.
              </li>
              <li>
                <strong>Customer Service:</strong> Enhance customer service to address common complaints swiftly,
                particularly around delivery issues. Implementing real-time tracking and proactive communication can
                mitigate dissatisfaction.
              </li>
              <li>
                <strong>Fraud Prevention:</strong> Strengthen transaction monitoring systems to detect, flag, and
                prevent fraudulent activities, ensuring secure transactions for both business and customers.
              </li>
            </ol>

            <h2>Conclusion</h2>
            <p>
              The insights derived from this dataset provide a clear plan for strategic enhancements in various business
              areas. By focusing on customer retention, logistics efficiency, and product strategy, the company can not
              only increase its market share but also improve customer satisfaction and operational effectiveness. The
              seasonal trends and fraud detection insights further underscore the need for adaptive strategies and
              robust security measures to safeguard business interests and customer trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
