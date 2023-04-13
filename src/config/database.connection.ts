import pkg from "prisma/prisma-client"
import 'dotenv/config';

const { PrismaClient } = pkg
const prisma = new PrismaClient()

export default prisma