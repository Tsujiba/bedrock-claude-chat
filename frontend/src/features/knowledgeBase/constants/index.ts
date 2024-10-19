import { BedrockKnowledgeBase, OpenSearchParams, SearchParams } from '../types';

export const OPENSEARCH_ANALYZER: {
  [key: string]: OpenSearchParams;
} = {
  icu: {
    analyzer: {
      characterFilters: ['icu_normalizer'],
      tokenizer: 'icu_tokenizer',
      tokenFilters: ['icu_folding'],
    },
  } as OpenSearchParams,
  kuromoji: {
    analyzer: {
      characterFilters: ['icu_normalizer'],
      tokenizer: 'kuromoji_tokenizer',
      tokenFilters: [
        'kuromoji_baseform',
        'kuromoji_part_of_speech',
        'kuromoji_stemmer',
        'cjk_width',
        'ja_stop',
        'lowercase',
        'icu_folding',
      ],
    },
  } as OpenSearchParams,
  none: {
    // as fallback
    analyzer: null,
  },
} as const;

export const DEFAULT_OPENSEARCH_ANALYZER: {
  [key: string]: string;
} = {
  ja: 'kuromoji',
  ko: 'icu',
  zhhans: 'icu',
  zhhant: 'icu',
} as const;

export const DEFAULT_BEDROCK_KNOWLEDGEBASE: BedrockKnowledgeBase = {
  knowledgeBaseId: null,
  embeddingsModel: 'cohere_multilingual_v3',
  openSearch: OPENSEARCH_ANALYZER['none'],
  chunkingStrategy: 'default',
  maxTokens: null,
  overlapPercentage: null,
  overlapTokens: null,
  maxParentTokenSize: null,
  maxChildTokenSize: null,
  bufferSize: null,
  breakpointPercentileThreshold: null,
  searchParams: {
    maxResults: 20,
    searchType: 'hybrid',
  },
};

export const DEFAULT_CHUNKING_MAX_TOKENS = 300;
export const DEFAULT_CHUNKING_OVERLAP_PERCENTAGE = 20;
export const DEFAULT_OVERLAP_TOKENS = 60;
export const DEFAULT_MAX_PARENT_TOKEN_SIZE = 1500;
export const DEFAULT_MAX_CHILD_TOKEN_SIZE = 300;
export const DEFAULT_BUFFER_SIZE = 0;
export const DEFAULT_BREAKPOINT_PERCENTILE_THRESHOLD = 95;

export const EDGE_CHUNKING_MAX_TOKENS = {
  MAX: {
    titan_v2: 8192,
    cohere_multilingual_v3: 512,
  },
  MIN: 20,
  STEP: 1,
};

export const EDGE_CHUNKING_OVERLAP_PERCENTAGE = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
};

export const EDGE_CHUNKING_BUFFER_SIZE = {
  MAX: 1,
  MIN: 0,
  STEP: 1,
};

export const EDGE_OVERLAP_TOKENS = {
  MIN: 1,
  STEP: 1,
};

export const EDGE_MAX_PARENT_TOKEN_SIZE = {
  MAX: 8192,
  MIN: 1,
  STEP: 1,
};

export const EDGE_MAX_CHILD_TOKEN_SIZE = {
  MAX: 8192,
  MIN: 1,
  STEP: 1,
};

export const EDGE_BREAKPOINT_PERCENTILE_THRESHOLD = {
  MAX: 99,
  MIN: 50,
  STEP: 1,
};

export const EDGE_SEARCH_PARAMS = {
  maxResults: {
    MAX: 100,
    MIN: 1,
    STEP: 1,
  },
};

export const DEFAULT_SEARCH_CONFIG: SearchParams = {
  maxResults: 20,
  searchType: 'hybrid',
};
