export const getQueryStringObject = () => {
  const query = window.location.search.split('&');

  const page = query[0] ? parseInt(query[0].split('=').pop()) : 1;
  const filter = query[1] ? query[1].split('=').pop() : 'new';
  const search = query[2] ? decodeURIComponent(query[2].split('=').pop()) : '';

  return { page, filter, search };
};
