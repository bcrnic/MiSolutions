import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, User, Tag, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { blogPosts } from "./Blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button variant="accent" asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - MiSolutions Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, retail insights, market research`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-32 pb-16 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link 
                to="/blog"
                className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium">{post.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-primary-foreground/70 mb-8">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span>{post.date}</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-2xl mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern opacity-30" />
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </article>

              {/* Share */}
              <div className="border-t border-border mt-12 pt-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this article
                  </span>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Author Card */}
              <div className="bg-muted/50 rounded-2xl p-6 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-primary-foreground">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">{post.author}</h4>
                    <p className="text-sm text-muted-foreground">Retail Analytics Expert at MiSolutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border">
                    <div className="aspect-video bg-gradient-to-br from-primary/80 to-secondary/80 relative">
                      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
                    </div>
                    <div className="p-6">
                      <h4 className="font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
