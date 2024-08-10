# `next-react-share`

A flexible and customizable React component for sharing content via the Web Share API or copying to the clipboard. Ideal for integrating sharing functionalities in your React and Next.js applications.

## Installation

To install the package, use npm:

```bash
npm i next-react-share
```

## Usage

Import and use the `ShareButton` component in your React application.

### Basic Usage

```jsx
import React from 'react';
import { ShareButton } from 'next-react-share';

const App = () => (
  <div>
    <ShareButton
      title="Share This Post"
      content="This is the content of the post that you want to share."
      url="https://example.com/post-url"
    />
  </div>
);

export default App;
```

### Props

- **`title`**: `string` - The title of the content to be shared.
- **`content`**: `string` - The content to be shared.
- **`url`**: `string` - The URL to be shared or copied.
- **`length`**: `number` (optional) - Maximum length of the content before truncation. Default is `100`.
- **`ellipsis`**: `boolean` (optional) - Whether to add an ellipsis at the end of truncated content. Default is `true`.
- **`showCopied`**: `ReactNode` (optional) - Text or component to display when content is successfully copied. Default is `'Copied!'`.
- **`showDefault`**: `ReactNode` (optional) - Text or component to display when content is not copied. Default is `'Share'`.
- **`onShareSuccess`**: `() => void` (optional) - Callback function executed when sharing is successful.
- **`onShareError`**: `(error: Error) => void` (optional) - Callback function executed when sharing fails.

### Example with Custom Text and Callbacks

```jsx
import React from 'react';
import { ShareButton } from 'next-react-share';

const App = () => (
  <div>
    <ShareButton
      title="Exciting News!"
      content="Check out this amazing article on our blog. It's a must-read!"
      url="https://example.com/article"
      length={150}
      ellipsis={false}
      showCopied={<span style={{ color: 'green' }}>Text Copied!</span>}
      showDefault={<span style={{ color: 'blue' }}>Share Now</span>}
      onShareSuccess={() => alert('Content shared successfully!')}
      onShareError={(error) => alert(`Failed to share content: ${error.message}`)}
    />
  </div>
);

export default App;
```

## License

MIT License. See the [LICENSE](https://raw.githubusercontent.com/besaoct/next-react-share/main/LICENSE) file for details.
