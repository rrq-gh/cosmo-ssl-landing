import { useMemo, useState } from 'react'
import Header from '../components/Header'
import BlogHero from '../components/BlogHero'
import FeaturedPost from '../components/FeaturedPost'
import PostGrid from '../components/PostGrid'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { categories, featuredPost, posts, totalArticles } from '../data/posts'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todas')

  const filteredPosts = useMemo(
    () =>
      activeCategory === 'Todas'
        ? posts
        : posts.filter((post) => post.categoria === activeCategory),
    [activeCategory],
  )

  return (
    <>
      <Header />
      <main className="relative w-full min-h-screen bg-surface-base">
        <BlogHero
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <FeaturedPost post={featuredPost} />
        <PostGrid posts={filteredPosts} totalArticles={totalArticles} />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
