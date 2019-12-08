export default function initIsAdmin(mock) {
  mock.onPost('/api/buy').reply(function(config) {
    console.log('Got `POST /api/buy` request with data: ', config.data);
    console.log('Will respond with data: ', undefined);
    return [200];
  });
}