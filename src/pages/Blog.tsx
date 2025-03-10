import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from 'antd';

const { Title } = Typography;

const BlogContainer = styled(motion.div)`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 2rem;
  gap: 2rem;
  background: rgba(18, 18, 18, 0.6);  // Changed from solid #121212 to translucent
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const BlogPost = styled(motion.article)`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--neon-blue);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 0 15px rgba(41, 98, 255, 0.3);
  cursor: pointer;
`;

const PostTitle = styled.h2`
  color: var(--neon-blue);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const PostMeta = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PostExcerpt = styled.p`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.6;
`;

const InfoBanner = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid var(--neon-pink);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.2);
`;

const InfoText = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

interface BlogPostType {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Example blog posts - you can move this to a separate data file later
const blogPosts: BlogPostType[] = [
  {
    id: '1',
    title: 'Getting Started with AI Development',
    date: '2024-03-09',
    excerpt: 'Exploring the fundamentals of AI development and its practical applications...',
    content: 'Full blog post content here...'
  },
  // Add more posts here
];

const Blog = () => {
  return (
    <BlogContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title level={1} style={{ color: 'var(--neon-blue)', marginBottom: '2rem' }}>
        Blog Posts
      </Title>
      <InfoBanner
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <InfoText>
          🤖 These blog posts are AI-generated using a custom N8N automation pipeline:
          <br /><br />
          1. Simple text files containing my achievements are put into a folder.
          <br />
          2. The files are extracted, parsed, and cleaned with JS.
          <br />
          3. The cleaned text is then processed for FREE through a local Ollama LLM instance
          <br />
          4. Sent to Discord for human review/approval
          <br />
          5. Approved content is stored in a local MongoDB database and displayed here
          <br /><br />
          All posts are reviewed for accuracy and quality before publication.
        </InfoText>
      </InfoBanner>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>{new Date(post.date).toLocaleDateString()}</PostMeta>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
          </BlogPost>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;