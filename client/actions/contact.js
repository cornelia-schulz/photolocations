import request from 'superagent'
import {showError} from './error'

export function sendMail(message) {
  return (dispatch) => {
    return request
      .post('/api/v1/nodemailer/send')
      .send(message)
      .then((res) => {
        if(res.body.msg === 'success'){
              console.log('Message sent')
              this.resetForm()
            } else if(res.body.msg === 'fail'){
              console.log('Message failed to send')
            }
      })
      .catch(() => {
        dispatch(showError('Could not send mail'))
      })
  }
}
