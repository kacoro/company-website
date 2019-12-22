import { NextApiRequest, NextApiResponse } from 'next'
import { sampleProjectData } from '../../../utils/sample-project-data'

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleProjectData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleProjectData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
