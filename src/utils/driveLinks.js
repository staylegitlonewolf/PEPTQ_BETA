const extractDriveFileId = (value) => {
  const input = String(value || '').trim();
  if (!input) return '';

  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/uc\?(?:[^#]*&)?id=([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match?.[1]) return match[1];
  }

  return '';
};

const normalizeLocalAssetUrl = (value) => {
  const input = String(value || '').trim();
  if (!input) return '';

  if (
    input.startsWith('/') ||
    input.startsWith('#') ||
    input.startsWith('data:') ||
    input.startsWith('blob:') ||
    input.startsWith('mailto:') ||
    input.startsWith('tel:')
  ) {
    return input;
  }

  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(input)) {
    return input;
  }

  return `/${input.replace(/^\/+/, '')}`;
};

export const toEmbeddableGoogleDriveUrl = (value) => {
  const input = String(value || '').trim();
  if (!input) return '';

  const fileId = extractDriveFileId(input);
  if (!fileId) return normalizeLocalAssetUrl(input);

  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};
