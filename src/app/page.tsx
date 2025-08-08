import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="navbar">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="nav-brand">JW Technologies</Link>
          <div className="flex space-x-6">
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Technical Expertise & Best Practices</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional insights on networking, Linux administration, database management, 
            and technical program management. Sharing knowledge and best practices for 
            the technology community.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/blog" className="btn-primary">View Latest Articles</Link>
            <Link href="/about" className="link-inline font-medium">Learn More About Me →</Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Latest Technical Insights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="content-card">
              <h3 className="card-title">Linux Performance Optimization</h3>
              <div className="card-meta">
                <time dateTime="2024-01-15">January 15, 2024</time> • 
                <span className="ml-1">System Administration</span>
              </div>
              <p className="text-gray-700 mb-4">
                Essential techniques for optimizing Linux server performance, 
                covering memory management, disk I/O, and network optimization strategies.
              </p>
              <Link href="/blog/linux-performance" className="link-inline">Read More →</Link>
            </article>

            {/* Article 2 */}
            <article className="content-card">
              <h3 className="card-title">Database Security Best Practices</h3>
              <div className="card-meta">
                <time dateTime="2024-01-10">January 10, 2024</time> • 
                <span className="ml-1">Database Management</span>
              </div>
              <p className="text-gray-700 mb-4">
                Comprehensive guide to securing database systems, including access controls, 
                encryption strategies, and monitoring techniques for enterprise environments.
              </p>
              <Link href="/blog/database-security" className="link-inline">Read More →</Link>
            </article>

            {/* Article 3 */}
            <article className="content-card">
              <h3 className="card-title">Network Infrastructure Planning</h3>
              <div className="card-meta">
                <time dateTime="2024-01-05">January 5, 2024</time> • 
                <span className="ml-1">Networking</span>
              </div>
              <p className="text-gray-700 mb-4">
                Strategic approach to designing scalable network infrastructure, 
                from initial assessment through implementation and ongoing maintenance.
              </p>
              <Link href="/blog/network-planning" className="link-inline">Read More →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="content-card">
            <div className="text-center">
              <h2 className="mb-6">About Jeremiah Jenkins</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Technologist and Technical Program Manager with extensive hands-on experience 
                in networking, Linux administration, database administration, and technical management. 
                Passionate about sharing knowledge and best practices with the technology community.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <div className="text-center">
                  <h4 className="text-blue-600 mb-2">10+ Years</h4>
                  <p className="text-gray-600">Technical Experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-blue-600 mb-2">50+ Projects</h4>
                  <p className="text-gray-600">Successfully Delivered</p>
                </div>
                <div className="text-center">
                  <h4 className="text-blue-600 mb-2">Enterprise</h4>
                  <p className="text-gray-600">Scale Experience</p>
                </div>
              </div>
              <div className="mt-6">
                <a href="https://twitter.com/JW_TECH" className="link-inline" target="_blank" rel="noopener noreferrer">
                  Follow @JW_TECH on Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Technical Expertise Areas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="mb-3 text-blue-600">Network Administration</h4>
              <p className="text-gray-600 text-sm">
                Enterprise networking, security, performance optimization, and infrastructure design
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="mb-3 text-blue-600">Linux Systems</h4>
              <p className="text-gray-600 text-sm">
                Server administration, automation, security hardening, and performance tuning
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="mb-3 text-blue-600">Database Management</h4>
              <p className="text-gray-600 text-sm">
                Database design, optimization, backup strategies, and security best practices
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="mb-3 text-blue-600">Technical Leadership</h4>
              <p className="text-gray-600 text-sm">
                Program management, team coordination, and technical strategy development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-white mb-4">JW Technologies</h3>
          <p className="mb-6">
            Sharing technical expertise and best practices with the technology community
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <a href="https://twitter.com/JW_TECH" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-500">
            <p>&copy; 2024 JW Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
