module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      startServerCommand: 'npm start',
      startServerReadyPattern: 'ready on',
      startServerReadyTimeout: 30000,
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        // Core Web Vitals
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'speed-index': ['error', { maxNumericValue: 3400 }],
        // Performance metrics
        'unused-css-rules': ['warn', { maxNumericValue: 50000 }],
        'unused-javascript': ['warn', { maxNumericValue: 50000 }],
        'render-blocking-resources': ['error', { maxNumericValue: 500 }],
        'total-byte-weight': ['warn', { maxNumericValue: 1500000 }], // 1.5MB
        // SEO
        'meta-description': 'error',
        'document-title': 'error',
        'html-has-lang': 'error',
        'meta-viewport': 'error',
        // Accessibility
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'link-name': 'error',
        // Best Practices
        'errors-in-console': 'warn',
        'is-on-https': 'error',
        'uses-responsive-images': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
