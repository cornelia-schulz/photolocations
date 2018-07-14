import request from 'superagent'

export function getAllLocations() {
  return request
    .get('/api/v1/locations')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}

export function getLocation(id){
  return request
  .get('/api/v1/locations/'+id)
  .then(res => {
    return res.body
  })
  .catch(err => {
    console.error(err)
  })
}

// export function getAllComments(id){
//   return request
//   .get('/api/v1/comments/'+id)
//   .then(res => {
//     return res.body
//   })
//   .catch(err => {
//     console.error(err)
//   })
// }

// export function addComment(comment){
//   return request
//   .post('/api/v1/comments')
//   .send(comment)
//   .catch(err => {
//     console.error(err)
//   })
// }

// export function delComment(id){
//   return request.del('/api/v1/comments')
//     .send({id: id})
//     .catch(err => {
//       console.error(err)
//     })
// }

// export function updateComment(comment) {
//   return request.put('/api/v1/comments')
//     .send(comment)
//     .catch(err => {
//       throw Error('Cannot update comment!', err)
//     })
// }