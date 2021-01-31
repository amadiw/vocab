const db = require('./db')
const { User, Word } = require ('./models')

const seedUser = [
  {
    name: "Admin",
    username: "admin",
    email: "admin@email.com",
    isAdmin: true,
    password: "123"
  },
  {
    name: "Asha",
    username: "kittykat",
    email: "asha@email.com",
    password: "123"
  }
]

const seedWord = [
  {
    audio: "school01",
    type: "noun",
    word: "school",
    definition: "a place for teaching and learning"
  },
  {
    audio: "school01",
    type: "adverb",
    word: "inverse",
    definition: "opposite in order, nature, or effect"
  }
]

async function seed() {
  await db.sync({ force: true})

  const createdUsers = await Promise.all(seedUser.map(user => User.create(user)))

  const creadedWords = await Promise.all(seedWord.map(word => Word.create(word)))

  console.log("db synced!")
}

async function runSeed() {
  console.log("seeding...")
  try {
    await seed()
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  } finally {
    console.log("closing db connection")
    await db.close()
    console.log("db connection closed")
  }
}

runSeed()
