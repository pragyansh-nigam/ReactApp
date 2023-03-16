import * as AWS from 'aws-sdk'

import { Injectable } from '@nestjs/common'

import { EnvironmentService } from '../core/environment'

@Injectable()
export class AwsPinpointApnsVoipService {
  constructor(private readonly env: EnvironmentService) {}

  async getApnsVoipChannel() {
    // The AWS Region that you want to use to send the message. For a list of
    // AWS Regions where the Amazon Pinpoint API is available, see
    // https://docs.aws.amazon.com/pinpoint/latest/apireference/.
    const region = 'us-east-1'

    // The Amazon Pinpoint project/application ID to use when you send this message.
    // Make sure that the SMS channel is enabled for the project or application
    // that you choose.
    // const applicationId = 'a9d8ebdf864948218d7096ce70b71318'

    const params = {
      ApplicationId: '4732cc6c888a4c28951fefb561b25f30',
    }

    try {
      const apiVersion = '2016-12-01'
      const awsConfig = {
        apiVersion,
        accessKey: this.env.get('AWS_ACCESS_KEY_ID'),
        secretKey: this.env.get('AWS_SECRET_ACCESS_KEY'),
        region,
      }
      console.log('AwsPinpointApnsVoipService getApnsVoipChannel aws config', awsConfig)
      const pinpoint = new AWS.Pinpoint(awsConfig)
      pinpoint.getApnsVoipChannel(params, (err, data) => {
        if (data) {
          console.log('AwsPinpointApnsVoipService data', data)
          return data
        } else {
          console.log('err', err, err.stack)
          throw err
        }
      })
    } catch (error) {
      console.error('AwsPinpointApnsVoipService', error)
    }
  }
}
