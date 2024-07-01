import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://cripintort:6Pnej8Od1yKgBIG3@cluster0.dhngvnh.mongodb.net/food-delivery'
    )
    .then(() => console.log('DB Connected'))
}
