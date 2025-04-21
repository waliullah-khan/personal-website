import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PricingStrategyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-mono tracking-tight">Pricing Strategy Analysis</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Python</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Pandas</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Scikit-learn</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Tableau</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Excel</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Pricing Analytics</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Market Research</span>
          </div>

          <div className="relative w-full aspect-video mb-12 rounded-md overflow-hidden border border-neutral-800">
            <Image
              src="/images/project-pricing-detail.jpg"
              alt="Pricing Strategy Analysis"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              A private label brand had been gaining traction in our client's retail accounts, steadily eating into Brand 1's
              market share. To counter this challenge, we analyzed sales data from both brands, focusing on price sensitivity,
              demand patterns, and retailer margins. This project outlines strategic pricing recommendations to help Brand 1
              push back against the private label's growth while maintaining strong profits and market presence.
            </p>

            <h2>Initial Analysis</h2>
            <p>
              For this analysis, we assumed that the manufacturing cost for both the private label (Control Brand) and
              Brand 1 is the same. Our initial findings revealed:
            </p>

            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="border border-neutral-700 px-4 py-2"></th>
                  <th className="border border-neutral-700 px-4 py-2">Control Brand</th>
                  <th className="border border-neutral-700 px-4 py-2">Brand 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2">Average Retail Price</td>
                  <td className="border border-neutral-700 px-4 py-2">$2.15</td>
                  <td className="border border-neutral-700 px-4 py-2">$2.61</td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2">Average Market Share Units</td>
                  <td className="border border-neutral-700 px-4 py-2">57%</td>
                  <td className="border border-neutral-700 px-4 py-2">43%</td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2">Average Units</td>
                  <td className="border border-neutral-700 px-4 py-2">189</td>
                  <td className="border border-neutral-700 px-4 py-2">144</td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2">Average Market Share (Dollars)</td>
                  <td className="border border-neutral-700 px-4 py-2">52%</td>
                  <td className="border border-neutral-700 px-4 py-2">48%</td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2">Average Retail Margin</td>
                  <td className="border border-neutral-700 px-4 py-2">$0.50</td>
                  <td className="border border-neutral-700 px-4 py-2">$0.45</td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2">Average Weekly Profit for Retailer</td>
                  <td className="border border-neutral-700 px-4 py-2">$2,254.95</td>
                  <td className="border border-neutral-700 px-4 py-2">$1,542.90</td>
                </tr>
                <tr>
                  <td className="border border-neutral-700 px-4 py-2">Average Weekly Profit for Manufacturer</td>
                  <td className="border border-neutral-700 px-4 py-2">$2,109.24</td>
                  <td className="border border-neutral-700 px-4 py-2">$3,358.08</td>
                </tr>
              </tbody>
            </table>

            <h3>Key Takeaways</h3>
            <ul>
              <li>
                <strong>Retailers Prefer the Private Label:</strong> The private label offers a higher retail margin
                ($0.50 vs. $0.45 per unit) and higher weekly retailer profits ($2,254.95 vs. $1,542.90), incentivizing
                stores to push their sales.
              </li>
              <li>
                <strong>Consumers Choose Affordability:</strong> With a lower price point of $2.15 vs. $2.61, the
                private label captures 57% of unit sales, making it the preferred choice for budget-conscious shoppers.
              </li>
              <li>
                <strong>Brand 1 Still Holds Value:</strong> Despite losing market share, Brand 1 generates higher
                manufacturer profits ($3,358.08 vs. $2,109.24 per week), meaning it remains profitable but must balance
                price adjustments with maintaining margins.
              </li>
            </ul>

            <h2>Regression Analysis</h2>
            <p>
              We conducted regression analysis to understand the impact of pricing on sales for both brands. For Brand
              1, we found:
            </p>
            <ul>
              <li>
                The Adjusted R² is 0.8511, meaning that about 85.1% of the variation in Brand 1's sales is explained by
                the independent variables (Week, Control Brand Price, and Brand 1 Price).
              </li>
              <li>
                Brand 1's price has a significant negative impact on its sales. Every $1 increase in Brand 1's price
                leads to a decrease of 11,322.19 units sold.
              </li>
              <li>
                The Control Brand's price positively influences Brand 1's sales. When the Control Brand raises its price
                by $1, Brand 1's sales increase by 1,719.54 units.
              </li>
            </ul>

            <h2>Optimization Strategy</h2>
            <p>Based on our analysis, we developed an optimal pricing strategy for Brand 1:</p>
            <ul>
              <li>Optimal Price for Brand 1: $1.86</li>
              <li>
                This price point maximizes total profit for the manufacturer while keeping the retailer's margin fixed.
              </li>
              <li>
                Total weekly profit is approximately $4,735, leading to a total profit of $23,680 over the period
                analyzed.
              </li>
            </ul>

            <h2>Impact of the New Pricing Strategy</h2>
            <ul>
              <li>Retailer's profit grew by approximately 135%.</li>
              <li>Brand 1's profit increased by around 55%.</li>
              <li>Brand 1's sales surged from about 3,000 units per week to nearly 7,400 units per week.</li>
              <li>
                Control Brand's sales also experienced a notable rise, increasing by 4,324 units under the new pricing
                strategy.
              </li>
              <li>
                Overall retailer category profits improved significantly due to increased total sales and revenue.
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Our pricing strategy analysis demonstrates that a strategic price adjustment for Brand 1 can significantly
              improve both manufacturer and retailer profitability while reclaiming market share from the private label.
              By understanding price elasticity and optimizing pricing accordingly, Brand 1 can maintain its competitive
              position in the market while ensuring sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
