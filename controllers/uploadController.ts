import { connection, mongo } from "mongoose";

export const getBucketConnection = () => {
    return new mongo.GridFSBucket(connection.db!, {
      bucketName: 'images',
    })
  }
  const upload = async (req: Request) => {
    const bucket = getBucketConnection()
  
    const stream = async (file: Express.Multer.File) => {
      const uploadStream = bucket.openUploadStream(file.originalname)
      const id = uploadStream.id
  
      await new Promise((resolve, reject) => {
        uploadStream.once('finish', resolve)
        uploadStream.once('error', reject)
        uploadStream.end(file.buffer)
      })
  
      return {
        name: `${id.toString()}-${file.originalname}`,
        type: file.mimetype,
        size: file.size,
      }
    }
  
    if (req.file) {
      req.body[req.file.fieldname] = await stream(req.file)
    }
}
// const bucket = new mongo.GridFSBucket();

// const upload = async (req: Request) => {
//     const bucket = getBucketConnection()
  
//     const stream = async (file: Express.Multer.File) => {
//       const uploadStream = bucket.openUploadStream(file.originalname)
//       const id = uploadStream.id
  
//       await new Promise((resolve, reject) => {
//         uploadStream.once('finish', resolve)
//         uploadStream.once('error', reject)
//         uploadStream.end(file.buffer)
//       })
  
//       return {
//         name: `${id.toString()}-${file.originalname}`,
//         type: file.mimetype,
//         size: file.size,
//       }
//     }
  
//     if (req.file) {
//       req.body[req.file.fieldname] = await stream(req.file)
//     }