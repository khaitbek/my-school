import { prisma } from "./index"
async function main() {
  const khaitbek = await prisma.user.create({
    data: {
      password: "p3Ea3zq+KVacFnksN3Wtaw==",
      email: "khaitbekdev@gmail.com",
      name: "Yusupov Hayitbek",
      role: "ADMIN",
      address: "Toshkent shahri, massiv Kalanova 4",
      phoneNumber: "+998977321820",
      birthOfDate: "11.03.2005",
      image: "https://ik.imagekit.io/khaitbek/11v/hayitbek_yusupov.jpg?updatedAt=1684299178869",
      description: "Salom, mening ismim Hayitbek. Dasturchiman. Dasturlash bilan cheklanib qolmaygina, shaxmat va futbolga juda qiziqaman hamda astoydil shug'ullanib borishga harakat qilaman. Chet tillaridan ingliz tilini bilaman",
      job: "Dasturchi",

    }
  })
  const usmon = await prisma.user.create({
    data: {
      password: "ismailovusmon",
      email: "ismailovusmon@gmail.com",
      name: "Ismoilov Usmon",
      role: "USER",
      address: "Toshkent shahri, Sariqsuv ko'chasi",
      phoneNumber: "+998712481845",
      birthOfDate: "11.16.2004",
      image: "https://ik.imagekit.io/khaitbek/11v/ismailov_usmon.jpg?updatedAt=1684299327363",
      description: "Salom, mening ismim Usmon. Hozirda Osh City da ish tajribasini orttirmoqdaman. Kelajakda Qur'oni Karimni to'liq yodlab tugatib, qori bo'lish niyatim bor va allaqachon buning harakatiga tushganman. Futbolga juda qiziqaman. Manchester City klubining ashaddiy muxlisiman",
      job: "Noma'lum",
    }
  })
  const abdulloh = await prisma.user.create({
    data: {
      password: "mahmudjonovabdulloh",
      email: "mahmudjonovabdulloh@gmail.com",
      name: "Mahmudjonov Abdulloh",
      role: "USER",
      address: "Toshkent shahri, Sariqsuv ko'chasi",
      phoneNumber: "+998935338001",
      birthOfDate: "05.08.2005",
      image: "https://ik.imagekit.io/khaitbek/11v/mahmudjonov_abdulloh.jpg?updatedAt=1684298866904",
      description: "Salom, mening ismim Abdulloh. Men bo'lajak stomatologman. Tibbiyot sohasiga, ayniqsa stomatologiya va xirurgiyaga juda qiziqaman. Kelajakda ummatga foydasi tegadigan mutaxassis bo'lish niyatim bor. Futbol, basketbol va volleybolga qiziqaman va shug'ullanib turaman",
      job: "Shifokor",
    }
  })
  // console.log({ khaitbek })
  // await prisma.user.update({
  //   where: {
  //     email: "ismailovusmon@gmail.com"
  //   },
  //   data: {
  //     image: "https://ik.imagekit.io/khaitbek/11v/ismailov_usmon.jpg?updatedAt=1684299327363"
  //   }
  // });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })