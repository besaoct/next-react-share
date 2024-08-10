import React, { useState, ReactNode, ButtonHTMLAttributes } from 'react';

interface ShareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  content: string;
  url: string;
  length?: number;
  ellipsis?: boolean;
  showCopied?: ReactNode; // Default text or component when content is copied
  showDefault?: ReactNode; // Default text or component when content is not copied
  onShareSuccess?: () => void;
  onShareError?: (error: Error) => void;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  title,
  content,
  url,
  length = 100,
  ellipsis = true,
  showCopied = 'Copied!',
  showDefault = 'Share',
  onShareSuccess,
  onShareError,
  ...buttonProps
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const truncateString = (str: string, num: number, ellipsis: boolean) => {
    return str.length > num ? str.slice(0, num) + (ellipsis ? '...' : '') : str;
  };

  const handleShare = () => {
    const shareData = {
      title,
      text: truncateString(content, length, ellipsis),
      url,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => {
          if (onShareSuccess) onShareSuccess();
          console.log('Successfully shared');
        })
        .catch((error) => {
          if (onShareError) onShareError(error);
          console.error('Error sharing:', error);
        });
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      })
      .catch((error) => {
        setIsCopied(false);
        console.error('Error copying to clipboard:', error);
      });
  };

  return (
    <button onClick={handleShare} {...buttonProps}>
      {isCopied ? showCopied : showDefault}
    </button>
  );
};
