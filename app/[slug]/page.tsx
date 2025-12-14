import React from 'react';
import Image from 'next/image';
import { supabase } from '../lib/supabase';
import { notFound } from 'next/navigation';
import Markdown from '../components/Markdown';

export const revalidate = 60;

async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!data) {
    notFound();
  }

  if (error && error.code !== 'PGRST116') {
      console.error('Error fetching blog post:', error);
  }

  return data;
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogPost(params.slug);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1 className="fw-bold mb-4 text-center">{post.title}</h1>
          <p className="text-muted text-center mb-5">
            Posted on {new Date(post.created_at).toLocaleDateString()}
          </p>
          <Image
            src={post.image || 'https://via.placeholder.com/800x400'}
            alt={post.title}
            width={800}
            height={400}
            className="img-fluid rounded mb-5 shadow"
          />
          <div className="markdown-content">
            <Markdown content={post.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
