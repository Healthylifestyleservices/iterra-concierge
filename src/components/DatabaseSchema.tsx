import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code } from 'lucide-react';

const DatabaseSchema: React.FC = () => {
  const sqlSchema = `
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  age_range TEXT,
  membership_tier TEXT DEFAULT 'retail' CHECK (membership_tier IN ('retail', 'wellness', 'associate')),
  associate_id TEXT,
  region TEXT,
  language TEXT DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Intake responses table
CREATE TABLE intake_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  emotional_state TEXT,
  chakra_focus TEXT,
  primary_concern TEXT,
  pet_owner BOOLEAN DEFAULT FALSE,
  pet_type TEXT,
  experience_level TEXT,
  preferences JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Generated protocols table
CREATE TABLE generated_protocols (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  intake_id UUID REFERENCES intake_responses(id) ON DELETE CASCADE,
  protocol_data JSONB,
  recommended_products JSONB,
  diy_recipes JSONB,
  chakra_mapping JSONB,
  pet_safe_alternatives JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  items JSONB,
  total_amount DECIMAL(10,2),
  membership_discount DECIMAL(5,2),
  promo_code TEXT,
  status TEXT DEFAULT 'pending',
  associate_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Impact metrics table
CREATE TABLE impact_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  trees_planted INTEGER DEFAULT 0,
  farmers_supported INTEGER DEFAULT 0,
  co2_offset DECIMAL(8,2) DEFAULT 0,
  communities_impacted INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Associate links table
CREATE TABLE associate_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  associate_id TEXT UNIQUE NOT NULL,
  region TEXT,
  fallback_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  click_count INTEGER DEFAULT 0,
  conversion_rate DECIMAL(5,4) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE intake_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE generated_protocols ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE associate_links ENABLE ROW LEVEL SECURITY;

-- Users can only access their own data
CREATE POLICY "Users can view own data" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own data" ON users FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own intake" ON intake_responses FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own intake" ON intake_responses FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own protocols" ON generated_protocols FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own protocols" ON generated_protocols FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own orders" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own impact" ON impact_metrics FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own impact" ON impact_metrics FOR UPDATE USING (auth.uid() = user_id);

-- Associate links are publicly readable for tracking
CREATE POLICY "Associate links are publicly readable" ON associate_links FOR SELECT USING (true);

-- Database Functions
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_impact_metrics_updated_at BEFORE UPDATE ON impact_metrics
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  `;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          Complete SQL Schema
          <Badge variant="outline">Copy & Paste into Supabase SQL Editor</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap">
          {sqlSchema}
        </pre>
      </CardContent>
    </Card>
  );
};

export default DatabaseSchema;