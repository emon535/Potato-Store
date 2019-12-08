export default function initIsAdmin(mock) {
  mock.onGet('/api/is-admin').reply(function(config) {
    const isAdmin = { 'isAdmin': true };
    console.log('Got `GET /api/is-admin` request with data: ', config.data);
    console.log('Will respond with data: ', isAdmin)
    return [200, isAdmin];
  });
}